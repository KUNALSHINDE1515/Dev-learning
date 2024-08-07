const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContent = document.querySelector('.header-content')
const cloceIcon = document.querySelector('.close-icon')

hamburgerIcon.addEventListener('click', function() {
    headerContent.classList.add('menu-open')
})

cloceIcon.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})