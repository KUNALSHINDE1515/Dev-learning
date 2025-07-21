import axios from 'axios';
import React, { useEffect, useState } from 'react'

function CurruncyConvetor() {
    
    const [exchangeRate, setExchangeRate] = useState({

    });
    const [convertedAmount, setConvertedAmount] = useState(null)
    const [amount, setAmount] = useState(1);
    const [fromCurrncy, setFromCurrncy] = useState("USD");
    const [toCurrncy, setToCurrncy] = useState("INR");

    // console.log('converted amount', exchangeRate);
    
    useEffect( () => {
        // console.log("From Currnency", fromCurrncy);
        
        const apiUrl = `https://v6.exchangerate-api.com/v6/9fb11093588ee0d4631342b0/latest/${fromCurrncy}`;
        axios.get(apiUrl)
        .then(
            response => {
                setExchangeRate(response.data.conversion_rates)
            }
        )
        .catch(error =>{
            console.log("error fetching data",error);
        })
    }, [fromCurrncy])
    
    useEffect(() => {
        const conversionRate = exchangeRate[toCurrncy];
        console.log("Check conversion rates",conversionRate);
        
        if (conversionRate) {
            const converted = amount * conversionRate
           setConvertedAmount(converted.toFixed(2));  
        }

    } , [amount, fromCurrncy, toCurrncy, exchangeRate]);
    const handleChange =(e) =>{
        const {name, value} = e.target
        switch(name){
            case "amount":
                setAmount(value);
                break;
            case "fromCurrncy":
                setFromCurrncy(value);
                break;
            case "toCurrncy":
                setToCurrncy(value);
                break;
        }
    }


    return (
        <div className='bg-white h-75 w-200 rounded p-3 text-start'>
            <div className='flex  mb-2 p-2'>
            <img 
            src="https://media.istockphoto.com/id/182376388/photo/united-world-economies.jpg?s=612x612&w=0&k=20&c=Gm5b4bz76OpvoEDeDUcsEO4wZGtzLwv6il9owNjpjto=" 
            alt="img" 
            className='w-15 h-15 rounded-full'
            />
            <h1 className='text-2xl font-bold  text-blue-800 pt-2 ml-2'>currency Converter</h1> 
            </div>
            <div className='flex justify-between p-2 font-bold'>
            <label>Amount:
             <input type="number"  placeholder='Enter Amount' 
            className='block p-2 bg-sky-100 rounded shadow-2xl outline-none'
            name='amount'
            onChange={handleChange}
            value={amount}
            /></label>
            <label>From Currny:
                <select name="fromCurrncy" 
                className='block p-2 bg-sky-100 rounded shadow-2xl outline-none w-30'
                value={fromCurrncy}
                onChange={handleChange}
                >
                   {
                    Object.keys(exchangeRate).map((currency) => {

                     return <option key={currency} value={currency}>
                             {currency}
                        </option>
                    })
                   }
                </select>
            </label>
            <label>To Currny: 
                 <select name="toCurrncy"
                  className='block p-2 bg-sky-100 rounded shadow-2xl outline-none w-30'
                  value={toCurrncy}
                  onChange={handleChange}
                  >
                  {
                    Object.keys(exchangeRate).map((currency) => {

                     return <option key={currency} value={currency}>
                             {currency}
                        </option>
                    })
                  }
                </select>
            </label>
            </div>

            <div className='bg-sky-100 text-Black font-bold p-4S px-4 ml-1 rounded w-100 pt-2 pb-2 mt-2 '>
                Converted Amount : <span>{convertedAmount}</span>
            </div>
     </div>
    )
}

export default CurruncyConvetor
