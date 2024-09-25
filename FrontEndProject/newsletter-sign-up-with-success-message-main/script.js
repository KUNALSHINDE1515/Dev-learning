const input = document.querySelector('input');
const  btn = document.querySelector('button');

btn.addEventListener("click", (e) =>{
    e.preventDefault()
    let inVal = input.value
    if (validateEmail(inVal)) {
        console.log("valid email address");
    document.getElementById('error').style.display = "none"
    const cotainer =  document.querySelector('.container-card')
    cotainer.innerHTML = `
        <img src="./assets/images/icon-success.svg" alt="">
        <h1> Thanks for subscribing!</h1>
        <p>Product discovery and building what matters
        Measuring to ensure updates are a success
        And much more!</p>
        <button>Dismiss message</button>
        `
    cotainer.style.display = "block"
    cotainer.style.padding = "20px"
    cotainer.style.maxWidth = "400px"
    cotainer.style.marginTop = "20px"
        
    document.querySelector('button').addEventListener("click",  (e) => {
        location.reload()
        
    })
     
    } else {
        document.getElementById('error').style.display = "block"
    }
    
    

})



function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  

  
  

