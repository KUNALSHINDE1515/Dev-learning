const increment_btn = document.querySelector(".increment")
const decrement_btn = document.querySelector(".decrement")
const count = document.querySelector(".counter-value")


increment_btn.addEventListener('click', function incre() {
    const countVAlue = Number(count.innerText)
    count.innerText = countVAlue + 1
})
decrement_btn.addEventListener('click', function incre() {
    const countVAlue = Number(count.innerText)
    count.innerText = countVAlue - 1
})
