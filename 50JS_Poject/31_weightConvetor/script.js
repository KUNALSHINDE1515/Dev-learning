const sResult = document.getElementById('weight')

function inputCall() {
    const inputvalue = document.querySelector('#input').value;
    const result = inputvalue * 0.45359237
    sResult.innerHTML = result.toFixed(2)  
}

const clear = setInterval( () => {
    inputCall()
},1000)

