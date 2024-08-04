let boxes = document.querySelectorAll('.box')
let resetBtn = document.querySelector('#reserBtn')
let newGAmeBtn = document.querySelector('#new-btn')
let msgContainer = document.querySelector('.msg')
let msg = document.querySelector('#msg')


let turnO = true  // playerX, playerY

const winPAtterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

function resetGame() {
    turnO = true;
    enableBoxes()
    msgContainer.classList.add('hide')
}
boxes.forEach( (box) => {
    box.addEventListener('click', () => {
        if (turnO === true) {
            box.innerHTML = "O"
            turnO = false
        }else{
            box.innerHTML = "X"
            turnO = true
        }
        box.disabled = true

        checkWiner();
    });
});

function disabledBoxes(){
    for(let box of boxes){
        box.disabled = true
    }
}
function enableBoxes(){
    for(let box of boxes){
        box.disabled = false
        box.innerText = '';
    }
}
function showWinner(winner){
    msg.innerHTML = `Congratulation , Winner is ${winner} `
    msgContainer.classList.remove('hide');
    disabledBoxes()
}
function checkWiner(){
    for(let pattern of winPAtterns){

            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if (pos1Val != '' && pos2Val != '' && pos3Val !='') {
                if (pos1Val === pos2Val && pos2Val === pos3Val) {
                    // console.log('winner' , pos1Val);
                    showWinner(pos1Val)
                }
            }
    }
}

newGAmeBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame)

