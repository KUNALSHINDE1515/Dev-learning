const input = document.querySelector('input')
const div = document.querySelector('i')
// console.log(search);
div.addEventListener('click', () => {
    removeIbnput()
    addtext()
})

function removeIbnput() {
    div.addEventListener('click', () => {
        input.style.display = "none"
        addtext()
    })
}

function addtext() {
    div.addEventListener('click', (e) => {
        input.style.display = "block"
        removeIbnput()
    })
}



