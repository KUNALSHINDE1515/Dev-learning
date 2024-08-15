const lengthp = document.getElementById('length-number');
const upperCase = document.getElementById('Uppercase');
const lowerCase = document.getElementById('lowercase');
const  number = document.getElementById('number');
const  symbols = document.getElementById('symbols');
const passInput  = document.getElementById('pass-input');

const copyBtn = document.getElementById('copy');
const generateBtn = document.getElementById('generate');

const uppercaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseStr = 'abcdefghijklmnopqrstuvwxyz'
const numberStr = '0123456789';
const symbolStr = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
let passWord = '';
generateBtn.addEventListener('click', () => {

    let str = '' ;
    if(upperCase.checked){
        str += uppercaseStr;
    }
    if(lowerCase.checked){
        str += lowerCaseStr;
    }
    if(number.checked){
        str += numberStr;
    }
    if(symbols.checked){
        str += symbolStr;
    }

    console.log(str ,"s")
    
    for(i = 0; i< lengthp.value; i++){
        console.log(str.length, "str.length");
        let index = Math.floor(Math.random() * str.length);
        console.log(index);
        console.log(str[index]);

        passWord += str[index]
        
        
    }

    console.log(passWord);
    passInput.value = passWord;

    copyBtn.addEventListener('click', () => {
        if(passInput.value === ""){
            alert('Please Generate a password Frist')
        }else{
            const newEl = document.createElement('textarea');
            newEl.value = passInput.value;
            newEl.select();
            document.execCommand('copy');
            alert("PassWord Copied SuccessFully")
            newEl.remove()
        }
    })
    
})

