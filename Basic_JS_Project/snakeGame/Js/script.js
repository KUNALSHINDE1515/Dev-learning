// GAme constsant and variable
const direction = { x: 0 , y: 0};
const foodSound = new Audio('');
const gameOverSound = new Audio('');
const moveSound = new Audio()
const musicSound = new Audio()
let speed = 2
let lastPaintTime = 0
let snakeArr = [
    {x: 13 , y: 15}
]

// Game Functions

function main(ctime) {
    window.requestAnimationFrame(main);
    console.log(ctime);
    if ((ctime - lastPaintTime) / 1000 <1 /speed) {
        return
    }
    lastPaintTime = ctime
    gameEngine()
}

function gameEngine() {
    //  Part 1 : Updating the snake array

    // Part 2 : Display the snake food
    board.innerHTML = "";
    snakeArr.forEach( (e , index) => {
        snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        
    })
}

// MAnin logic Starts here
window.requestAnimationFrame(main)
