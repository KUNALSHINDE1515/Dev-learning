const contryNAme = new URLSearchParams(window.location.search).get('name') 
const FlahImage = document.querySelector('.contry-details img');
const countryName = document.querySelector('.detali-country h1')
const nativeName = document.querySelector('.Native-name')
const population = document.querySelector('.Population')
const regeion = document.querySelector('.Region')
const subRegion = document.querySelector('.SubResion')
const capital = document.querySelector('.capital')
const CurrancyNAme = document.querySelector('.CurrancyNAme')
const lName = document.querySelector('.lName')
const topLevelDomain = document.querySelector('.Top-leved-Domain')
const borderCountries = document.querySelector('.border-countries')
fetch(`https://restcountries.com/v3.1/name/${contryNAme}?fullText=true`).then(function (res) {
    return res.json()
}).then(function ([data]) {
    // destructuring 
    console.log(data);
    FlahImage.src = data.flags.svg
    countryName.innerText = data.name.common
    if (data.name.nativeName) {
        nativeName.innerText = Object.values(data.name.nativeName)[0].common
    }else{
        nativeName.innerText = data.name.common
    }
    
    if (data.population) {
        population.innerText = data.population
    }
    
    if ( data.region) {
        regeion.innerText = data.region
    }
    
    if (data.subregion) {
        subRegion.innerText = data.subregion
    }
   
    if (data.capital) {
      capital.innerText =  data.capital.join(', ')  
     }

    topLevelDomain.innerText = data.tld.join( ', ')
    if (data.currencies) {
        CurrancyNAme.innerText = Object.values(data.currencies).map((curr) =>  curr.name).join(', ')
    }
    
    if (data.languages) {
        lName.innerText = Object.values(data.languages).join(', ')
    }

    if(data.borders){
        data.borders.forEach(element => {
            fetch(`https://restcountries.com/v3.1/alpha/${element}`)
            .then((function (res) {  
                return res.json()
             }))
            .then(([data]) => {
                // console.log(data);
                const borderContryTag = document.createElement('a')
                borderContryTag.innerHTML = data.name.common
                // console.log(borderContryTag);
                borderContryTag.href = `country.html?name=${data.name.common}`
                borderCountries.append(borderContryTag)
                
            })
        
        })
    }
    
//     const HTMLDATA = `
//     <img src="${data[0].flags.svg}" alt="zenda">
//               <div class="detali-country">
//                   <h1>${data[0].name.common}</h1>
//                   <div class="deatails-text-con">
//                       <p><b>Native Name : </b> ${data[0].name.nativeName.fra.common}</p>
//                       <p><b>Population : </b> ${data[0].population}</p>
//                       <p><b>Region : </b>Europe</p>
//                       <p><b> Sub Region : </b>${data[0].subregion}</p>
//                       <p><b>Capital : </b>${data[0].capital}</p>
//                       <p><b>Top level Domail : </b>Be</p>
//                       <p><b>Curranccy : </b>${data[0].currencies.CHF.name}</p>
//                       <p><b>Language: </b>${data[0].languages.fra} , ${ data[0].languages.gsw} , ${ data[0].languages.ita}</p>
//                   </div>
  
//                   <div class="border-countries">
//                       <p><b> Border Countries : </b>
//                            <a href="">${data[0].borders[0]}</a>
//                            <a href="">${data[0].borders[1]}</a>
//                            <a href="">${data[0].borders[2]}</a>
//                       </p>
//                   </div>
//               </div>
//    `
//    contryDetails.innerHTML = HTMLDATA
    
})

const contryDetails = document.querySelector('.contry-details');


document.querySelector('.back-btn').addEventListener("click", function()  {
    history.back()
})