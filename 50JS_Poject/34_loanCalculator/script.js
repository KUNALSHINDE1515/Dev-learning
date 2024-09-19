
const calBtn = document.getElementById('btn')
const datsShow = document.getElementById('Interset-to-pay')

let result;
let monthPayment;

function LoanCaclculation() {

const loanAmout = document.getElementById('LoanAmout').value
const IntestRate = document.getElementById('Ineterst').value
const MonthToPAy = document.getElementById('MothsToPay').value

if (loanAmout === "" || IntestRate === "" || MonthToPAy === "") {
    datsShow.innerHTML = `Please Enter a Valid data.`
    datsShow.style.color = "red"
}else{
result = (loanAmout * (IntestRate * 0.01)) / MonthToPAy
monthPayment = (loanAmout / MonthToPAy + result).toFixed(2)
datsShow.innerHTML = `Monthly Payment : ${monthPayment}`
}
}


calBtn.addEventListener("click", () => {
   
   
    LoanCaclculation()
})


