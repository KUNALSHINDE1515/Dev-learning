 // Dates

 let myDate = new Date()
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());
 console.log(myDate.toISOString());

 console.log(typeof myDate);

//  let myCreateDate = new Date(2023 , 0, 23)
//  let myCreateDate = new Date(2023 , 1, 23, 5 , 3)
//  let myCreateDate = new Date("2023-01-14")
 let myCreateDate = new Date("01-14-2024")
//  console.log(`${myCreateDate.toLocaleString()}`);

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);

// `${newDate.getDate()}`


newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ''
})
