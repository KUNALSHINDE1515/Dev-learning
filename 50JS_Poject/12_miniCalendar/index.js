const month = document.querySelector('.month')
const weakday = document.querySelector('.weekday')
const day = document.querySelector('.day')
const year = document.querySelector('.year')



window.addEventListener('DOMContentLoaded', () => {

    const date = new Date();
    console.log("date",date);
    console.log("month", date.getMonth());
    console.log("weakDay", date.getDay());
    console.log("date", date.getDate()); 
    console.log("year", date.getFullYear()); 
    
    day.textContent = date.getDate();
    year.textContent = date.getFullYear();
    month.textContent = date.toLocaleDateString("en-US",{month:"long"});
    weakday.textContent = date.toLocaleDateString("en-US",{weekday:"long"});
})
