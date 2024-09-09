const img = document.querySelectorAll('.each-img')

img.forEach( (e) => {
       e.addEventListener('click',  () => {
        removeClassLIst()
        e.classList.add('frist')
       })   
})

// console.log(check);

function removeClassLIst() {
    img.forEach(each => {
        each.classList.remove('frist')
    })
}




    

