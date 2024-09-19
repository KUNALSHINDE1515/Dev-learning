const button = document.querySelector("button")
const videoshow = document.querySelector('.popup-video')
const otherData = document.querySelector('.container')
const closebtn = document.querySelector('.close-btn')
button.addEventListener("click", () => {
videoshow.style.display = "block"
otherData.style.display = "none"
} )
closebtn.addEventListener("click", () => {
    videoshow.style.display = "none"
    otherData.style.display = "block"
})