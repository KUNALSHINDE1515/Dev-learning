
const cardcontainer = document.querySelector(".card-container")
async function GetData() {
    const data  = await fetch("./data.json")
    const response = await data.json()
    // console.log(response)
    response.forEach((element ) => {
      const card = document.createElement("div")
      card.innerHTML = `
       <div class="cart">
          <div class="img">
            <img src="${element.image.desktop}" alt="img">
          </div>
          <div class="add-to-cart">
            <img src="./assets/images/icon-add-to-cart.svg" alt="add-to=cart">
            <h2>Add to cart</h2>
          </div>
          <div class="text-con">
            <h3>${element.category}</h3>
            <h2>${element.name}</h2>
            <h1>$ ${element.price}</h1>
          </div> 
      `
      cardcontainer.append(card)     

})
}

GetData()

const t = setTimeout(AddTocart , 1000)
function AddTocart() {
  const AddButton = document.querySelectorAll('.add-to-cart')
  AddButton.forEach((element)  => {
   element.addEventListener('click', () =>  console.log("Button Was Clicked"))
  } )

  
}


