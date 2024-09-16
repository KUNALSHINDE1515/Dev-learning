const startbtn = document.querySelector('#start')
const stopbtn = document.querySelector('#stop')
const resettbtn = document.querySelector('#reset')
const TimerWatch = document.querySelector('.time')


let minitues = 25
let seconds = 0
let timer;
startbtn.addEventListener("click", () => {
   timer = setInterval(() => {
    if (seconds === 0) {
        seconds = 59;                     o
        if(minitues !== 0 ) {ft7
            minitues--;
        }
    }else{
        seconds--;
    }
    TimerWatch.textContent = `${minitues}: ${seconds}`
   },1000)
})


stopbtn.addEventListener("click", () => {
    clearInterval(timer)
})

resettbtn.addEventListener("click", () => {
    minitues = 25;
    seconds = 0
    TimerWatch.innerHTML = `${minitues}: 0${seconds}`
})

// // start time function
// function stratTime() {
 
// }

// // stopTime Function
// function stopTime() {
    
// }


// // reset time function
// function resetTime() {
    
// }


// let countDownSeconds = 60; // Set the initial countdown time in seconds

// function updateTimer() {
// //   if (countDownSeconds === 0) {
// //     clearInterval(timerInterval);
// //     document.getElementById('timer').textContent = 'Time is up!';
// //     return;
// //   }

//   const formattedTime = `${formatTime(Math.floor(countDownSeconds / 60))}:${formatTime(countDownSeconds % 60)}`;
// //   document.getElementById('timer').textContent = formattedTime;
// console.log(formattedTime);

//   countDownSeconds--;
// }

// const timerInterval = setInterval(updateTimer, 1000);

// let count = 60;
// const timer = setInterval(function() {
//   count--;
// //   console.log(count);
// TimerWatch.innerHTML = count

//   if (count === 0) {
//     clearInterval(timer);
//     // console.log("Time's up!");
//     TimerWatch.innerHTML = `Time is up`
//   }
// }, 1000);

 

// console.log(Timer());


// let count = 60;
// startbtn.addEventListener('click', () => {
//     const timer = setInterval( () => {
//         count--; 
//         TimerWatch.innerHTML = count
//         if (count === 0) {
//             clearInterval(timer)
//             TimerWatch.innerText = `time up`
//         }
//         stopbtn.addEventListener( "click", () => {
//             clearInterval(timer)
//             TimerWatch.innerHTML = count
//         })
//     },1000);
// })
// resettbtn.addEventListener("click", () =>{
//     TimerWatch.innerText = count
// })


// let count  =  60
// function name() {
//         const times = setInterval( () => {
//             count--;
//             TimerWatch.innerText = count
//             stopbtn.addEventListener("click", () => {
//                 clearInterval(times)
//                 TimerWatch.innerText = count
//             })
//         },1000) 
// }

// startbtn.addEventListener("click",()=>{
//     name()
// })

// resettbtn.addEventListener("click", () => {

    

// })