const cartBtn = document.querySelector('.cart-btn')

let currPlayer = true
cartBtn.addEventListener("click", () => {
    
    if (currPlayer === true) {
        InDecVal()
    }
    
})




function InDecVal() {
    
    cartBtn.innerHTML = `
    <span id="sub">-</span>
    <span id="value">1</span>
    <span id="add">+</span>
    `
    cartBtn.style.backgroundColor = "#C83B0E"
    document.getElementById('sub').addEventListener("click", function () {
        sub()
    })
    document.getElementById('add').addEventListener("click", function () {
        add()
    })
    const value = document.getElementById('value')
    value.innerText = val
    value.style.color = "white"
}


let val = 1
function add() {
    val += 1
    return val
}

function sub() {
    val -= 1
    return val
}




