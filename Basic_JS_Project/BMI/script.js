const form = document.querySelector('form')

// This use case give you empty value
// const height = parseInt(document.querySelector('.height').value)

form.addEventListener('submit', (e) => {
     e.preventDefault()
     const height = parseInt(document.querySelector('.height').value)
     const weight = parseInt(document.querySelector('.weight').value)
     const result  = document.querySelector('#result')

     if(height === '' || height < 0  || isNaN(height)){
        result.innerHTML = `PLease give a valid height ${height}`;
     }else if(weight === '' || weight < 0  || isNaN(weight)){
        result.innerHTML = `PLease give a valid height ${weight}`;
     }else{
     const bmi =    (weight / ((height * height)/1000).toFixed(2))
    // show the result
    result.innerHTML = `<span>${bmi}</span>` 
    }
     

})

x
