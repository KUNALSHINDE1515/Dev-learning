const InputNAme = document.querySelector('.InputNAme')
const InputCardNumber = document.querySelector('.InputCardNumber')
const cvv = document.querySelector('.cvv')
const yearInput = document.querySelector('.yearInput')
const monthInput = document.querySelector('.monthInput')
const frontCart = document.querySelector('.front-cart')
let cartNerr =  document.querySelector('.CardError')


cvv.addEventListener('input', (e) => {
    if (e.target.value.length < 3) {
        document.querySelector('.monthInputErr').style.display = "block"
        document.querySelector('.cn-number').textContent = e.target.value
    }
    
})
yearInput.addEventListener('input', (e) => {
    document.querySelector('#Year').textContent = e.target.value
    
})
monthInput.addEventListener('input', (e) => {
    document.querySelector('#month').textContent = e.target.value
    
})

const button = document.querySelector('button')

button.addEventListener("click", function() {
    let active = false
    let error = document.querySelector('.nameError')

    if (InputNAme.value === "") {
        error.style.display = "block"
        error.textContent = " Name is empty"
    }else if (/\d/.test(InputNAme.value)) {
        error.style.display = "block"
        error.textContent = "Wrong format please enter valid name."
    }else{
        frontCart.children[2].children[0].textContent = InputNAme.value
        error.style.display = "none"
    }

  
    if (InputCardNumber.value.length > 16 || InputCardNumber.value.length < 16) {
        cartNerr.style.display = "block"
       cartNerr.textContent = "Lenght is so big or so small"
    }else{
        if (InputCardNumber.value === "") {
            cartNerr.style.display = "block"
            cartNerr.textContent = "Card number is empty"
         }
         else{
             frontCart.children[1].textContent = InputCardNumber.value.replace(/(\d{4})(?=\d)/g, '$1 ')
             cartNerr.style.display = "none"
             active = true
            }
        }
        
       

    if (active === true) {
        
document.querySelector('.text-content').innerHTML = `
    <div class="submit-result">
    <img src="./images/icon-complete.svg" alt="Completed">
    <h1>Thank You</h1>
    <p>We've added your card details</p>
    <button class="Continue">Continue</button>
    </div>
    `
    document.querySelector('.Continue').addEventListener("click", () => {
        location.reload();
    })

    }
    
})


