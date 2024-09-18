const nextBtn = document.getElementById('nextbtn')
const prevBtn = document.getElementById('prevBtn')
const progress = document.querySelector(".progress-front-hr")
const cicle = document.querySelectorAll('.cicle')

let currval = 1


nextBtn.addEventListener("click", () => {
    currval++;
    if(currval > cicle.length){
        currval = cicle.length;
    }
    updateStep()
    width()
})
prevBtn.addEventListener("click", () => {
    currval--;
    if(currval < 1){
        currval = 1;
    }
    updateStep()
    width()
})


function updateStep() {
    cicle.forEach( (item ,index) => {
        if (index < currval) {
            item.classList.add("cheked")
            item.innerHTML = `<i class="fa-solid fa-check"></i>`
        }else{
            item.classList.remove("cheked")
            item.innerHTML = `
            <i class="fa-solid fa-xmark"></i>
            `;
        }
    })

}



function width() {
    if(currval === 1){
      progress.style.width = `0%`  
    }else if(currval === 2){
        progress.style.width = `25%`
    }else if(currval === 3){
        progress.style.width = `50%`
    }else if(currval === 4){
        progress.style.width = `75%`
    }else if(currval === 5){
        progress.style.width = `100%`
    }
}