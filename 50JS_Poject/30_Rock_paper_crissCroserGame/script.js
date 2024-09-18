const rock = document.getElementById('rock')
const scissors = document.getElementById('scissors')
const paper = document.getElementById('paper')
const result = document.getElementById('result')
const YourScore = document.getElementById('YourScore')
const comScore = document.getElementById('comScore')

// console.log(rock,scissors,paper,result,YourScore,comScore);
let score = 0
let cscore = 0
function check() {
let myScore = Math.round(Math.random() * 3) + 1
let compuScore = Math.round(Math.random() * 3) + 1

if (myScore === compuScore) {
    result.innerText = "Its a tie"
}else if (myScore > compuScore) {
    result.innerText = "You win"
    score = score + 1
}else{
    result.innerText ="Computer in win" 
     cscore = cscore + 1 
}
}
rock.addEventListener("click", () => {
    check()
    valueadd()
})
scissors.addEventListener("click", () => {
    check()
    valueadd()
})
paper.addEventListener("click", () => {
    check()
    valueadd()
})


function valueadd() {
    YourScore.innerHTML = `${score}`
    comScore.innerHTML = `${cscore}`
}