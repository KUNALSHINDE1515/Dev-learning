const timeShow = document.querySelector('.time')
const startbtn = document.querySelector('#start')
const stopbtn = document.querySelector('#stop')
const resettbtn = document.querySelector('#reset')
// const hoursdata = document.querySelector('#Hours')
// const mintusdata = document.querySelector('#Minitus')
// const secondsdata = document.querySelector('#Seconds')

let actualTime = 0
let stopwatchInterval;
let startTime;

function startStopwatch () {
    if (!stopwatchInterval) {
        startTime = new Date().getTime() - actualTime
    } 
    setInterval(updateStopwatch, 1000)
}

function stopStopwatch() {
    
}



function resetStopwatch() {
    
}

function updateStopwatch() {
    let currTime = new Date().getTime()
    let time = currTime - startTime
    let second = Math.round(time/ 1000) % 60
    let minutes = Math.round(time/1000/60) % 60
    let hours = Math.round(time/1000/60/60) % 60
    
    timeShow.innerHTML = `hours:${hours} minitus:${minutes} second:${second}`
}

startbtn.addEventListener("click", () =>{
    startStopwatch()
})




// let currentTime = new Date().getTime();
// console.log(currentTime - actusl);


// function startStopwatch() {
//     if (stopwatchInterval === undefined) {
//       startTime = new Date().getTime() - actusl; 
//        setInterval( ()=>{
//         console.log(startTime);
//        }, 1000);
//     }
//   }
// console.log(startStopwatch());
// startStopwatch()


// if (stopwatchInterval === undefined) {
//     startTime = new Date().getTime() - actusl; 
//      setInterval( ()=>{
//       console.log(startTime);
//      }, 1000);

//   }
// function updated() {
  
//     let currentTime = new Date().getTime();
//     let emph = currentTime - startTime;
//     let second = Math.floor(emph / 1000) 
//     console.log(second);
    
// }
// updated()

// function updateStopwatch() {
//     var currentTime = new Date().getTime(); 
//     var elapsedTime = currentTime - startTime;
//     var seconds = Math.floor(elapsedTime / 1000) % 60; 
//     var minutes = Math.floor(elapsedTime / 1000 / 60) % 60; 
//     var hours = Math.floor(elapsedTime / 1000 / 60 / 60);
//     var displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
//     document.getElementById("stopwatch").innerHTML = displayTime;
//   }

//   updateStopwatch()