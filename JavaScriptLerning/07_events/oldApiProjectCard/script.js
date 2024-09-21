const url ='https://randomuser.me/api/'
const RadomUser = new XMLHttpRequest()
 RadomUser.open('GET', url)
 const cart = document.createElement('div')
 RadomUser.onreadystatechange =  function () {
     // console.log(this.resposeText);
     const data = JSON.parse(this.responseText)
     const dataArr = data.results[0]
    
     let result = dataArr
     console.log(result);
    
 //    document.body.style.backgroundImage = result.large
     
     cart.innerHTML = `
     <img src="${result.picture.large}" alt="image">
      <h1>Name : ${result.name.first}</h1>
      <h1>${result.email}</h1>
     `
     cart.style.maxWidth = "500px"
     cart.style.textAlign = "center"
     cart.style.backgroundColor = "gray" 
     cart.style.padding = "20PX" 
     cart.style.borderRadius = "20PX" 

     document.body.appendChild(cart)
     
     
 }
 document.querySelector('button').addEventListener("click", function () {
     location.reload();
 })
 RadomUser.send()
