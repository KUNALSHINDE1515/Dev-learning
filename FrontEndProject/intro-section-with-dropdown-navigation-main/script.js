const companyBtn = document.querySelector('.Company')
const features = document.querySelector('.Features')

let active = false
let compnay = false
companyBtn.addEventListener("click", () => {
    if (compnay === false) {
        CompanyData()
        compnay = true
    }else{
       document.querySelector('.company-btn-data').remove('.company-btn-data')
        companyBtn.children[0].children[0].src ="./images/icon-arrow-down.svg"
        compnay = false
    }
      
})

function CompanyData() {
    const div = document.createElement('div')
    div.innerHTML = `
    <p id='marginId'>Histroy</p>
    <p id='marginId'>Our Team</p>
    <p id='marginId'>Blog</p>
    `
    div.classList.toggle('company-btn-data')
    companyBtn.children[0].children[0].src ="./images/icon-arrow-up.svg"
    
    companyBtn.appendChild(div)
}


features.addEventListener("click", () => {
    if (active === false) {
        featuresFiun()
        active = true
    }else{
        document.querySelector('.featues-data').remove('featues-data')
         features.children[0].children[0].src ="./images/icon-arrow-down.svg"
        active = false
    }
})


function featuresFiun() {
        const  div = document.createElement('div')
        div.innerHTML = `
        <p><img src="./images/icon-todo.svg" alt="todo-list">Todo-List</p> 
        <p><img src="./images/icon-calendar.svg" alt="">Calendars</p> 
        <p><img src="./images/icon-reminders.svg" alt="">Remenders</p> 
        <p><img src="./images/icon-planning.svg" alt="">Planing</p> 
         `
         features.children[0].children[0].src ="./images/icon-arrow-up.svg"
         div.classList.toggle('featues-data')
         features.appendChild(div) 
  
}



const barBtn = document.querySelector('.bar')

barBtn.addEventListener("click", () => {
   const navData = document.querySelector(".bar")
   navData.style.height = '200vh'
   navData.style.width = '150px'
   navData.style.backgroundColor = 'white'
   navData.style.position = 'absolute'
   navData.style.top = '0px'
   navData.style.right = '0px'
   const closebtn = document.querySelector(".bar img")
   closebtn.src = './images/icon-close-menu.svg'
   closebtn.classList.add('.closeIcon')
   closebtn.style.marginLeft = '100px'
   closebtn.style.padding = '10px'
   if (active === false) {
    navData.append(closebtn)
    active = true
   }else{
    navData.remove(closebtn)
    active = false
   }
})

   

// const allNav = document.querySelectorAll('.nav-item p')

// allNav.forEach(function(item) {

//    const div = document.createElement('div')
//    div.innerHTML = item
//    div.append(div)
//    console.log(div);
   

// })
