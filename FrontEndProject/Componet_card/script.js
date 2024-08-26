const submitBtn = document.querySelector('button');
const fristName =document.querySelector('#FirstName');
const LastName =document.querySelector('#LastName');
const emaiName =document.querySelector('#EmailAddress');
const passWord =document.querySelector('#Password');
const errorMsg = document.querySelector('#error');
const errorLOgo = document.querySelector('.error-logo');

// console.log(
//     fristName,LastName,emaiName,passWord
// )

console.log(fristName.value);
console.log(LastName.value);


submitBtn.addEventListener('click', () => {
    if(fristName.value === '' && LastName.value ==='' ){
        // errorLOgo.style.display = "block";
        errorLOgo.style.backgroundColor ='#FF7778';
        errorLOgo.style.padding = '5px 10px';
        errorLOgo.textContent = `!`
        errorLOgo.style.borderRadius = '25px'
        errorLOgo.style.marginRight = '10px'
        errorLOgo.style.color ="white";
        errorMsg.textContent = `Please enter the valid name`;
    }else{
        errorLOgo.style.display = "none";
        errorMsg.textContent = '';
        console.log(LastName.value);
    }
 })