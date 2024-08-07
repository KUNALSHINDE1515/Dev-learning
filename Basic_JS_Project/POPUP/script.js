const button = document.querySelector('button')
const popUp = document.querySelector('.popup')


button.addEventListener('click', () => {
    popUp.classList.add(('open'))
})
popUp.addEventListener('click', function(){
    popUp.classList.remove('open')
},false)
