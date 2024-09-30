const inputvalue = document.querySelector('input');
const button = document.querySelector('button');




button.addEventListener("click", function( ) {
   
    if (inputvalue.value.includes('@')) {
       document.getElementById('error-msg').style.display = 'none'
        
    }else{
        document.getElementById('error-msg').style.display = 'block'
    }
},false)