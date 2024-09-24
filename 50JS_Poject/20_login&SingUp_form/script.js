const emaiCon = document.querySelector('.email')
const pass = document.querySelector('.pass')
const inputEmail = document.querySelector('#email')
const inputPass = document.querySelector('#pass')


emaiCon.addEventListener("click", () => {
    inputEmail.style.display  = "block"
    inputPass.style.display  = "none"
})

pass.addEventListener("click", () => {
    inputPass.style.display  = "block"
    inputEmail.style.display  = "none"
})
