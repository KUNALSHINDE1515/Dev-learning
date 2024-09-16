const timeShow = document.querySelector('.time')
const startbtn = document.querySelector('#start')
const stopbtn = document.querySelector('#stop')
const resettbtn = document.querySelector('#reset')


// let actualTime = 0
// let stopwatchInterval;
// let startTime;

// function startStopwatch () {
//     if (!stopwatchInterval) {
//         startTime = new Date().getTime() - actualTime
//     } 
//     setInterval(updateStopwatch, 1000)
// }

// function stopStopwatch() {
    
// }



// function resetStopwatch() {
    
// }

// function updateStopwatch() {
//     let currTime = new Date().getTime()
//     let time = currTime - startTime
//     let second = Math.round(time / 1000) % 60
//     let minutes = Math.round(time /  1000 / 60) % 60
//     let hours = Math.round(time / 1000/ 60 / 60) 
    
//     timeShow.innerHTML = `hours:${hours} minitus:${minutes} second:${second}`
// }

// startbtn.addEventListener("click", () =>{
//     startStopwatch()
// })




// // let currentTime = new Date().getTime();
// // console.log(currentTime - actusl);


// // function startStopwatch() {
// //     if (stopwatchInterval === undefined) {
// //       startTime = new Date().getTime() - actusl; 
// //        setInterval( ()=>{
// //         console.log(startTime);
// //        }, 1000);
// //     }
// //   }
// // console.log(startStopwatch());
// // startStopwatch()


// // if (stopwatchInterval === undefined) {
// //     startTime = new Date().getTime() - actusl; 
// //      setInterval( ()=>{
// //       console.log(startTime);
// //      }, 1000);

// //   }
// // function updated() {
  
// //     let currentTime = new Date().getTime();
// //     let emph = currentTime - startTime;
// //     let second = Math.floor(emph / 1000) 
// //     console.log(second);
    
// // }
// // updated()

// // function updateStopwatch() {
// //     var currentTime = new Date().getTime(); 
// //     var elapsedTime = currentTime - startTime;
// //     var seconds = Math.floor(elapsedTime / 1000) % 60; 
// //     var minutes = Math.floor(elapsedTime / 1000 / 60) % 60; 
// //     var hours = Math.floor(elapsedTime / 1000 / 60 / 60);
// //     var displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
// //     document.getElementById("stopwatch").innerHTML = displayTime;
// //   }

// //   updateStopwatch()

let startTime; // to keep track of the start time
let stopwatchInterval; // to keep track of the interval
let elapsedPausedTime = 0; // to keep track of the elapsed time while stopped

function startStopwatch() {
  if (!stopwatchInterval) {
    startTime = new Date().getTime() - elapsedPausedTime; // get the starting time by subtracting the elapsed paused time from the current time
    stopwatchInterval = setInterval(updateStopwatch, 1000); // update every second
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval); // stop the interval
  elapsedPausedTime = new Date().getTime() - startTime; // calculate elapsed paused time
  stopwatchInterval = null; // reset the interval variable
}

function resetStopwatch() {
  stopStopwatch(); // stop the interval
  elapsedPausedTime = 0; // reset the elapsed paused time variable
  timeShow.innerHTML = "00:00:00"; // reset the display
}

function updateStopwatch() {
  let currentTime = new Date().getTime(); // get current time in milliseconds
  let elapsedTime = currentTime - startTime; // calculate elapsed time in milliseconds
  let seconds = Math.floor(elapsedTime / 1000) % 60; // calculate seconds
  let minutes = Math.floor(elapsedTime / 1000 / 60) % 60; // calculate minutes
  let hours = Math.floor(elapsedTime / 1000 / 60 / 60); // calculate hours
  let displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds); // format display time
//   document.getElementById("stopwatch").innerHTML = displayTime; // update the display
timeShow.innerHTML = `${displayTime}`

}
function pad(number) {
  // add a leading zero if the number is less than 10
  return (number < 10 ? "0" : "") + number;

}
startbtn.addEventListener("click", () => {
    startStopwatch()
})


stopbtn.addEventListener("click", () => {
    stopStopwatch()
})
resettbtn.addEventListener("click", () => {
    resetStopwatch()
})