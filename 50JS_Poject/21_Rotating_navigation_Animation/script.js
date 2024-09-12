const open = document.querySelector('#open')
const close = document.querySelector('#close')
const container = document.querySelector('.content-contaoner')



open.addEventListener("click", () => {
    open.style.display = "none"
    close.style.display = "block"
    rotatepage()
})

close.addEventListener("click", () => {
    open.style.display = "block";
    close.style.display = "none"
    closeIcon()

})


function rotatepage() {
    container.setAttribute('id' ,'contentRotate',)
    // icon.setAttribute('id', "iconsCHange")
}

function closeIcon() {
    container.removeAttribute('id' ,'contentRotate')
}
