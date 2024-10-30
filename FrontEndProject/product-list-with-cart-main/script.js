const img = document.querySelector(".img>img")
const headingofItem = document.querySelector(".text-con>h3")
const Subheading = document.querySelector(".text-con>h2")
const price = document.querySelector(".text-con>h1")
async function GetData() {
    const data  = await fetch("./data.json")
    const response = await data.json()
    response.forEach((element ) => {
      console.log(element);
      img.src = element.image.desktop
      headingofItem.innerText = element.category
      Subheading.innerText = element.name
      price.innerText = "$" + element.price
})
}
GetData()
