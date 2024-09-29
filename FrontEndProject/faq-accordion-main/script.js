const btn = document.querySelectorAll('svg')
const para = document.getElementById('para')
// console.log(questionContainer);

// btn.forEach((eachbtn)=> {
//   console.log(eachbtn);
//   if (questionContainer.id == "para") {
  //     console.log(questionContainer.id);
  
  //   }
  //   else{
//     console.log("erorr");
    
//   }
// })

// function logic() {
//   const questionContainer = document.querySelectorAll('.quetion-cotainer p')
//   questionContainer.forEach(function(eachPara) {
//   if (eachPara.id === "para") {
//     eachPara.id = "Add"
//     // btn.innerHTML =`
//     //  svg class="btn" xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>
//     //  `
    
//   }else{
//     eachPara.id = "para"
//     // btn.innerHTML = `
//     // <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>
//     // `
//   }
// },false)
// }



btn.forEach((item) => {
  item.addEventListener("click", (e) => {
   if (item.parentElement.parentElement.children[1].id === 'para') {
    item.parentElement.parentElement.children[1].id = 'Add'
    item.parentElement.children[1].innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>
    `

   }else{
     item.parentElement.parentElement.children[1].id = 'para'
     item.parentElement.children[1].innerHTML = `
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>
     `
   }
    
  })
  
})

// btn.forEach(function(eachBtn){
//     eachBtn.addEventListener("click", function(){
//         eachBtn = document.getElementById('Add').setAttribute('id', 'show')
//         eachBtn.innerHTML = `
//           svg class="btn" xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>
//         `
//     })
// })
    



// function remove() {
//     para.classList.toggle('clicked')
//        if (para.classList.contains('clicked')) {
//         btn.innerHTML = `
//       svg class="btn" xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>
//         `
//        }
//        else{
//         btn.innerHTML = `
//          <svg class="btn" xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>
//         `
//        }
// }


// const quetionContaine = document.querySelector('.quetion-cotainer')
// quetionContaine.innerHTML = `
//          <div class="quetion-icon">
//           <h5>What is Frontend Mentor, and how will it help me?</h5>
//           <svg class="btn" xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>
//          </div>
//          <p id="para"> Frontend Mentor offers realistic coding challenges to help developers improve their 
//           frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
//           all levels and ideal for portfolio building.
//         </p>

// `
