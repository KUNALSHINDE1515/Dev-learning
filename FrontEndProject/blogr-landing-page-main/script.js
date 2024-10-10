const ddBtn=document.querySelectorAll('.dropdown-btn');
const ddMenu=document.querySelectorAll('.dropdown-menu');
const arrow=document.querySelectorAll('.dropdown-btn img');
ddBtn.forEach((btn, current)=>{
    console.log(btn , current);
    
    btn.addEventListener('click', (actual, arrowUp)=>{
        console.log(actual, arrowUp);
        
         actual=ddMenu[current];
        arrowUp=arrow[current];
            ddMenu.forEach((e)=>{
               e.classList.remove('active') 
            });
             arrow.forEach((e)=>{
               e.classList.remove('arrow-up') 
            });
           actual.classList.toggle('active');
            arrowUp.classList.toggle('arrow-up');
    })
}) 
document.addEventListener("click", (e) => {
        if (!e.target.closest('.header--menu-link')) {
        ddMenu.forEach((e)=>{
               e.classList.remove('active') 
            });
             arrow.forEach((e)=>{
               e.classList.remove('arrow-up') 
            })
        }
})
const hamburger=document.querySelector('.hamburger');
const menu=document.querySelector('.header--menu-link');
 
hamburger.addEventListener('click', ()=>{
 hamburger.classList.toggle('icon-close');
 menu.classList.toggle('hamburger-active')
  
})
// const mobileIcon = document.querySelector('.mobile-icon')
// const ul = document.querySelector('.logo ul')
// const headerTextContent = document.querySelector('.text-content')

// mobileIcon.addEventListener("click", () =>{
//     headerTextContent.style.display = "none"
//     const div = document.createElement('div')
//     div.innerHTML = `
//     <ul class="logoul">
//         <li class="logo-item">Home</li>
//         <li class="logo-item">Products</li>
//         <li class="logo-item">About</li>
//         <li class="logo-item">Contact</li>
//     </ul>
// `
//     div.style.display = "flex" 
//     div.style.flexDirection = "column"     
// document.querySelector('.main-text-container').appendChild(div)

//     // headerTextContent.style.display = "block"
// const ViewUl = document.querySelector(".logoul")
// ViewUl.style.display = "flex"
// ViewUl.style.flexDirection = "Column"
// ViewUl.style.listStyle = "none"
// ViewUl.style.gap = "15px"
// ViewUl.style.backgroundColor = "White"
// ViewUl.style.Color = "black"
// ViewUl.style.fontWeight = "700"
// ViewUl.style.textAlign = "Center"
// ViewUl.style.padding = "30px"
// ViewUl.style.borderRadius = "15px"


    
// })


