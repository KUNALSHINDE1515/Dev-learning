const dayInput = document.querySelector('.dayInput')
const monthInput = document.querySelector('.monthInput')    
const yearInput = document.querySelector('.yearInput')
const button = document.querySelector('button')
const resultYears = document.getElementById('years')
const resultMonths = document.getElementById('month')
const resultDays = document.getElementById('day')

// console.log(dayInput,monthInput,yearInput);


button.addEventListener('click', (e) => {
    e.preventDefault()
    const day = Number(dayInput.value)
    if (day < 1 || day >= 31) {
        const error =  document.getElementById('error')
        error.innerText = "Please enter a valid data"
        error.style.color = "red"
        return   
    }
    const month = Number(monthInput.value)
    if (month < 1 || month >= 12) {
        const error =  document.getElementById('error')
        error.innerText = "Please enter a valid data"
        error.style.color = "red"
        return
    }
    const year = Number(yearInput.value)
    
    console.log( typeof day, typeof month, typeof year);

let obj = new Date(); 
let days = obj.getUTCDate(); 
console.log(days);

let months = obj.getUTCMonth() + 1; 
let years = obj.getUTCFullYear(); 
console.log(`Day: ${Math.abs(days - day)}, Month: ${months - month}, Year: ${years - year}`);

resultYears.textContent = years - year
resultMonths.textContent = Math.abs(months - month)
resultDays.textContent =  days - day 
})
