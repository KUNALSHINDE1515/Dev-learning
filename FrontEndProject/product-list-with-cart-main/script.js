// const cartcontainer = document.querySelectorAll('.add-to-cart')
// cartcontainer.forEach(function(element) {
//     styledata(element)
    
// })

// let data = 1


// function styledata(element) {
//     element.addEventListener("click", () => {
//     element.style.backgroundColor ="orange";
//     element.style.border ="orange";
//     element.innerHTML =`
//     <span id="decval">-</span>
//     <span id="val">1</span>
//     <span id="inCreval">+</span>
//     `;
    
// const decVal = document.getElementById("decval")
// const value = document.getElementById('val')
// const inCreval = document.getElementById("inCreval")

// decVal.addEventListener("click", () => {
//     if (data === 0) {
//         data = 0
//     }else{
//         data -= 1
//     }
// })
// inCreval.addEventListener("click", () => {
//     data += 1
// })

// value.innerText = data
// })
// }



const heading = document.querySelectorAll('.text-con>h2')


heading.forEach( (element , index) => {
    console.log(element.innerText);
    console.log(index);
    
    
})


async function GetData() {
    const data  = await fetch("./data.json")
    const response = data.json()
    console.log(response);
    
}

