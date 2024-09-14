const subbtn = document.querySelector('#subBtn')
const result = document.querySelector('#result')
subbtn.addEventListener("click", () => {
    const billAmount = document.querySelector('#inputBill').value
    const Tip = document.querySelector('#inputTip').value
    if (billAmount === "" || Tip === "") {
        alert(`Please enter a data`)
    }else{
        let total = billAmount * (  Tip / 100)
        let conversion = Number(billAmount)
        let totalResulut = total + conversion
        result.innerHTML = `${totalResulut.toFixed(2)}`
    }
})


