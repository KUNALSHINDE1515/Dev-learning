const InputNAme = document.querySelector('.InputNAme')
const InputCardNumber = document.querySelector('.InputCardNumber')
const cvv = document.querySelector('.cvv')
const yearInput = document.querySelector('.yearInput')
const monthInput = document.querySelector('.monthInput')
const frontCart = document.querySelector('.front-cart')

// InputNAme.addEventListener('input', (e) => {
//      const el = frontCart.children[2].children[0].textContent 
//     //   e.target.value
//     console.log(typeof el);
//     if (el.includes(1,2,3,4,5,6,7,8,9,0)) {
//         console.log("error found");
        
//     }
    
  
// })



// InputCardNumber.addEventListener('input', (e) => {
//   frontCart.children[1].textContent = e.target.value
    
// })

cvv.addEventListener('input', (e) => {
    document.querySelector('.cn-number').textContent = e.target.value
  
    
})
yearInput.addEventListener('input', (e) => {
    document.querySelector('#Year').textContent = e.target.value
    
})
monthInput.addEventListener('input', (e) => {
    document.querySelector('#month').textContent = e.target.value
    
})

const button = document.querySelector('button')

button.addEventListener("click", function() {
    
    let error =document.querySelector('.nameError')
    if (InputNAme.value === "") {
        error.style.display = "block"
        error.textContent = "Input name is empty"
    }else if (InputNAme.value.includes(1,2,3,4,5,6,7,9,10)) {
        error.style.display = "block"
        error.textContent = "Wrong format please enter valid name."
    }else{
        frontCart.children[2].children[0].textContent = InputNAme.value
        error.style.display = "none"
    }

    let cartNerr =  document.querySelector('.CardError')
    if (InputCardNumber.value === "") {
       cartNerr.style.display = "block"
       cartNerr.textContent = "Please Enter Valid Data"
    // }else if(InputCardNumber.value === ){
    //    cartNerr.style.display = "block"
    //    cartNerr.textContent = "Format is Wrong"
    }
    else{
        frontCart.children[1].textContent = InputCardNumber.value
       cartNerr.style.display = "none"
    }

    
})


