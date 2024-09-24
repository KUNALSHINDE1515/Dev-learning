const cart = document.querySelector('.addCart')


cart.addEventListener("click",() => {
cart.classList.add("hoverCart",CardTotal())
})


function CardTotal() {
    const value = 1
    const div = document.createElement('div')
    div.innerHTML = `
    <h1 id="Decrement"> - </h1> ${value} <h1 id="increment"> +</h1>
    ` 
    div.style.display = "flex"
    div.style.alignItems = "Center"
    div.style.justifyContent = "space-between"
    div.style.width = '100%'
    cart.textContent = ''
    cart.appendChild(div)
}