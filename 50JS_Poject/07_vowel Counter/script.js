const texrarea = document.querySelector('#texarea');
const button = document.querySelector('#count');
const output = document.querySelector('.output');

button.addEventListener('click', () => {
    if(texrarea.value === ''){
        output.innerHTML = 'Please enter some text ..';
    }else{
        //aeiou
        const val = texrarea.value;
        let cout = 0;
        for (let i = 0; i < val.length; i++) {
            if(val[i] === "a" || val[i] === "e" || val[i] === "i" ||val[i] === "o" ||val[i] === "u" ){
                cout++;
            }
            output.innerHTML = `The Number of vowels are ${cout} .`;
        }
    }
})