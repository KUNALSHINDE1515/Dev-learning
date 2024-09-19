const buttons = document.querySelectorAll("button")
const results = document.getElementById('result')
const YourScore = document.getElementById('YourScore')
const comScore = document.getElementById('comScore')

let computerPlay = 0 ;
let yourPlay = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id);
        
        const result = updatesectiom(button.id, comguess())
        results.innerText = result
    })
})

function comguess() {
    const choise = ["rock", "paper" , "scrisscors"]
    const result =   Math.floor(Math.random() * choise.length) 
    return choise[result]
    
}

function updatesectiom(PlaySection , computerSection) {
    
    if (PlaySection === computerSection) {
        return `Its atie !`
    }else if(
        (PlaySection === "rock" && computerSection ==="scrisscors") ||
        (PlaySection === "paper" && computerSection ==="rock") ||
        (PlaySection === "scrisscors" && computerSection ==="paper")
    ){
        yourPlay++
        YourScore.textContent = yourPlay;
        return `You win ! ${PlaySection} beats ${computerSection}`
    }else{
        computerPlay++
        comScore.textContent = computerPlay
        return ` You lose ! ${computerSection} beats ${PlaySection}`
    }
}



// // console.log(rock,scissors,paper,result,YourScore,comScore);
// let score = 0
// let cscore = 0
// function check() {
// let myScore = Math.round(Math.random() * 3) + 1
// let compuScore = Math.round(Math.random() * 3) + 1

// if (myScore === compuScore) {
//     result.innerText = "Its a tie"
// }else if (myScore > compuScore) {
//     result.innerText = "You win"
//     score = score + 1
// }else{
//     result.innerText ="Computer in win" 
//      cscore = cscore + 1 
// }
// }
// rock.addEventListener("click", () => {
//     check()
//     valueadd()
// })
// scissors.addEventListener("click", () => {
//     check()
//     valueadd()
// })
// paper.addEventListener("click", () => {
//     check()
//     valueadd()
// })


// function valueadd() {
//     YourScore.innerHTML = `${score}`
//     comScore.innerHTML = `${cscore}`
// }