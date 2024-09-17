const openbtn = document.querySelector('#openClick')
const slide = document.querySelector('.slider-container')
const closebtn = document.querySelector('#closeCLick')

openbtn.addEventListener("click", () => {
    slide.style.display = "block"
    slide.classList.add("show")
})

closebtn.addEventListener("click", () => {
    slide.style.display  = "none"
})