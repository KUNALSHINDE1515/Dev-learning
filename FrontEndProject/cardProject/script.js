const InputNAme = document.querySelector('.InputNAme')
const InputCardNumber = document.querySelector('.InputCardNumber')
const cvv = document.querySelector('.cvv')
const yearInput = document.querySelector('.yearInput')
const monthInput = document.querySelector('.monthInput')
const frontCart = document.querySelector('.front-cart')

InputNAme.addEventListener('input', (e) => {
     frontCart.children[2].children[0].textContent = e.target.value
    
})
InputCardNumber.addEventListener('input', (e) => {
    frontCart.children[1].textContent = e.target.value
    
})

cvv.addEventListener('input', (e) => {
    document.querySelector('.cn-number').textContent = e.target.value
    
})
yearInput.addEventListener('input', (e) => {
    document.querySelector('#Year').textContent = e.target.value
    
})
monthInput.addEventListener('input', (e) => {
    document.querySelector('#month').textContent = e.target.value
    
})
