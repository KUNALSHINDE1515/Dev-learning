
const cardcontainer = document.querySelector(".card-container")
async function GetData() {
    const data  = await fetch("./data.json")
    const response = await data.json()
    response.forEach((data ) => {
      const card = document.createElement("div")
      card.innerHTML = `
       <div class="cart">
          <div class="img">
            <img src="${data.image.desktop}" alt="img">
          </div>
          <div class="add-to-cart">
            <h2>Add to cart</h2>
          </div>
          <div class="text-con">
            <h3>${data.category}</h3>
            <h2>${data.name}</h2>
            <h1>$ ${data.price}</h1>
          </div> 
      `
      cardcontainer.append(card)     

})
}

GetData()


const t = setTimeout(AddTocart , 1000)
function AddTocart() {
  const AddButton = document.querySelectorAll('.add-to-cart')
  AddButton.forEach((button)  => {
   button.addEventListener('click', () => {
    let check = button.parentElement.lastElementChild
    console.log(JSON.stringify(check));
    
   }) 
  })
}
















