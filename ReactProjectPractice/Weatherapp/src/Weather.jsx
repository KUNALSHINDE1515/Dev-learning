// import { useState } from "react";
// import { useEffect } from "react";
// export default function Weather() {
//     const currentDate = new Date();

//     const[tem, setTemp] = useState("");
//     const[city, setCity] = useState("");
//     const[input, setInput] = useState("");  
//      const fetchWeatherData = async function(input) {
//         try {
//                const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=8da72193090e1d474bad5125d09d6a8f`)
//                const data = await req.json()
//                setTemp(data.main.temp); // here we get the temperature in the variable city
//                setCity(data.name);  // here we get the city name in the variable city
//             } catch (error) {
//                 console.log(`Error fetching weather data: ${error}`);
//             }
//         } 
    
//     const month = [
//         "January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "December",
//     ]

//     const [date, setDate] = useState(
//         `${month[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`
//     );

//     const handleInputchange = (e) => {
//         setInput(e.target.value);
        
//     }

    

//    const submitBtn = (e) => {
//     e.preventDefault();
//     fetchWeatherData(input);
//     setInput('');
    
//    }
   

//     return (
//         <div className="h-75 w-100 bg-white rounded-2xl  p-2 text-center">
//             <h1 className="text-center text-4xl  font-bold mb-2">{date}</h1>
//             <h1 className="text-center text-4xl  font-bold mb-2 text-blue-800">{city}</h1>
//             <div className="flex justify-between mx-4">
//             <input
//              className="p-2 border-2 w-2xl rounded-1xl"
//              type="text" 
//              placeholder="Enter Your City" 
//              value={input}
//              onChange={handleInputchange}
//               />
//             <button 
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-1 rounded"
//             onClick={submitBtn}
//             >Search</button>    
//             </div>
//             <h1 className="text-center text-4xl  font-bold mt-5">{tem}C</h1>
//         </div>
//     )
// }




import React, { useState, useEffect } from "react";

export default function Weather() {
  const currentDate = new Date();

  const [tem, setTemp] = useState("28.06");
  const [city, setCity] = useState("Pune");
  const [input, setInput] = useState("Pune");

  // Fetch weather data function
  const fetchWeatherData = async (cityName) => {
    try {
      const req = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8da72193090e1d474bad5125d09d6a8f&units=metric`
      );
      const data = await req.json();

      if (data.cod === "404") {
        alert("City not found");
        return;
      }

      setTemp(data.main.temp);
      setCity(data.name);
    } catch (error) {
      console.log(`Error fetching weather data: ${error}`);
    }
  };

  // Load default weather on mount
  useEffect(() => {
    fetchWeatherData("Pune");
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handle submit
  const submitBtn = (e) => {
    e.preventDefault();
    fetchWeatherData(input);
  };

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = `${month[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl text-center">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">{date}</h1>
      <h1 className="text-4xl font-bold text-blue-800 mb-4">{city}</h1>

      <div className="flex gap-2 justify-center mb-4">
        <input
          className="p-2 border border-gray-300 rounded-xl w-2/3"
          type="text"
          placeholder="Enter your city"
          value={input}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl"
          onClick={submitBtn}
        >
          Search
        </button>
      </div>

      <h1 className="text-5xl font-bold text-gray-700 mt-4">{tem}°C</h1>
    </div>
  );
}
