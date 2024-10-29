const countriesContainer = document.querySelector('.conntries-container')
const filterByResgion = document.querySelector('.filter')
const searchInput = document.querySelector('.serach-container input')
let allContriesData ;

fetch('https://restcountries.com/v3.1/all').then( function (res) {
    return res.json()
}).then((data) => {
    rederCountries(data)
    allContriesData = data
})


filterByResgion.addEventListener('change', function(e){
    // console.log(e.target.value);
    fetch(`https://restcountries.com/v3.1/region/${filterByResgion.value}`).then( function (res) {
        return res.json()
    }).then((data) => {
        rederCountries(data)
    });
})


function rederCountries(data) {
    countriesContainer.innerHTML = ''
    data.map( function (country) {
     // console.log(country);
     
     const countryCard = document.createElement('a')
     countryCard.classList.add('country-card')
     countryCard.href   = `./country.html?name=${country.name.common}`
 
 countryCard.innerHTML  = `
     <img src="${country.flags.svg}" alt="flag">
     <div class="card-text">
         <h3 class="card-title">${country.name.common}</h3>
         <p><b>Population : </b>${country.population.toLocaleString('en-IN')}</p>
         <p><b>Region : </b>${country.region}</p>
         <p><b>Capital : </b>${country.capital?.[0]}</p>
     </div>
 `
 
 
 countriesContainer.append(countryCard)
    })
}

searchInput.addEventListener('input', (e) => {
console.log(e.target.value);
console.log(allContriesData);
const saerchCountry = allContriesData.filter((country) =>  country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
console.log(saerchCountry);
rederCountries(saerchCountry)
})


const themeChanger = document.querySelector('.theme-switcher')
themeChanger.addEventListener("click", () => {
    document.body.classList.toggle('dark')
})


console.log("Shinde");
