const celcius  = document.querySelector('#celsius');
const farenheit  = document.querySelector('#farenheit');
const kelvin  = document.querySelector('#kelvin');



celcius.addEventListener('input', () => {
    let c = parseFloat(celcius.value)
    let f = (c * 9 / 5) + 32;
    let k = c + 273.15;
    farenheit.value = f;
    kelvin.value = k;
})

farenheit.addEventListener('input', () => {
    let f = parseFloat(farenheit.value)
    let c =(f - 32) * 5 / 9;
    let k = (f - 32) * 5 / 9 + 273.15;
    celcius.value = c;
    kelvin.value = k;
})


kelvin.addEventListener('input', () => {
    let k = parseFloat(kelvin.value)
    let c = k - 273.15;
    let f = (k - 273.15) * 9 / 5 +32;
    celcius.value = c;
    farenheit.value = f;
})