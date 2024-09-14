const button = document.querySelector('#btn-roll')
const dice = document.querySelector('.dice-container')
const ul = document.querySelector('ul')
const diceImg = document.querySelector('span')

button.addEventListener("click", () => {
    diceAmination()
    rondomNumber()
})



// dice animation add remove function
function diceAmination() {
    dice.classList.toggle('dice-animanation')
    setTimeout(() => {
        dice.classList.remove('dice-animanation');
      }, 1000);
}

function rondomNumber() {
    const random = Math.round(Math.random() * (6 - 1) + 1)
    const li = document.createElement('li')
  
if (random === 1) {
    diceImg.innerHTML = `&#9856`
}else if(random === 2){
    diceImg.innerHTML = `&#9857;`
}else if(random === 3){
    diceImg.innerHTML = `&#9858;`

}else if(random === 4){
    diceImg.innerHTML = `&#9859;`
}else if(random === 5){
    diceImg.innerHTML = `&#9860;`
}else if(random === 6){
    diceImg.innerHTML = `&#9861;`
}else{
    console.log('error found'); 
}
li.innerText = `Roll Dice : ${random}`
ul.appendChild(li);
}