let  randomNumber = Math.round(Math.random() * 100 + 1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrhi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
   if (isNaN(guess)) {
    alert("Please Enter a valid number")
   }else if (guess < 1){
    alert("Please Enter a number more than  0 ")
   }else if (guess > 100){
    alert("Please Enter a  number less than 100")
   }else{
    prevGuess.push(guess)
    if(numGuess === 11){
        displayguess(guess)
        displayMessage(`Game Over : Random number was : ${randomNumber}`)
        endGAme()
    }else{
        displayguess(guess)
        checkGuess(guess)
    }
   }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGAme()
    }else if (guess < randomNumber){
        displayMessage(`Number is Too low`)
    }else if (guess > randomNumber){
        displayMessage(`Number is Too High`)
    }
}

function displayguess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} ,`
    numGuess++;
    lastResult.innerHTML = `${11 - numGuess}`
}
function displayMessage(msg){
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function endGAme(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGAme"> Start new Game</h2>'
    startOver.appendChild(p)
    playGame = false
    newGAme();
}

function newGAme(){
    const newGAmeButton = document.querySelector('#newGame')
    newGAmeButton.addEventListener('click', (e) => {
        randomNumber  = Math.round(Math.random() * 100 + 1)   
        prevGuess = []  
        numGuess = 1
        guessSlot.innerHTML = ''
        lastResult.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}