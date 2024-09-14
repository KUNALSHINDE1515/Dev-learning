
const subnitBtn = document.querySelector('button')
const finalOutput = document.querySelector('#final-age')

function calculateBirthDate() {
    const inputdate = document.querySelector('#inputdate').value
    const birthdate = new Date(inputdate)
    const today = new Date()
    const differeTime = birthdate.getTime() - today.getTime()
    

    //converting different to year
    const age =  Math.round(Math.ceil(differeTime/(1000 * 60 * 60* 24 * 365.25)));

    // push in inner html
    finalOutput.innerHTML = `You age is ${Math.abs(age) } years old.`
    
}

subnitBtn.addEventListener("click", () => {
    calculateBirthDate()
})