const inputField = document.querySelector('#password');
const outputField = document.querySelector('#Output');

inputField.addEventListener('input', () => {
    console.log(inputField.value);
    let password = inputField.value

    if(password.length < 8){
        outputField.innerText = `Password is too short`;
        outputField.style.color = 'red';

    }else{
        outputField.innerText = 'Password is long enough';
        outputField.style.color = 'green';
        //a-z
        // A-Z
        //0-9
        // special charachter !@#$%^&*()_+{}:""<>?|[]\

        if (password.search(/[a-z]/) == -1) {
            outputField.innerText = `Password is missing a lowercase letter`;
            outputField.style.color = 'red';
        }else if(password.search(/[A-Z]/) == -1){
            outputField.innerText = `Password is missing a uppercase letter`;
            outputField.style.color = 'red';
        }else if(password.search(/[0-9]/) == -1){
            outputField.innerText = `Password is missing a Number`;
            outputField.style.color = 'red';
        }
        else if(password.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\"\<\>\?\|\\]/) == -1){
            outputField.innerText = `Password is missing a special character`;
            outputField.style.color = 'red';
        }
        else{
            outputField.innerText = `Password is strong`;
            outputField.style.color = 'green';
        }
    }
})