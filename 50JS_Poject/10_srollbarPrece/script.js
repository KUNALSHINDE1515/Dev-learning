let scrollbar = document.querySelector('.scrolbar');

window.addEventListener('scroll', () => {
    console.log("scroll", window.scrollY);
    console.log("scollHeight", document.body.scrollHeight);
    console.log("innerHeight", window.innerHeight);
    let pecentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    console.log(pecentage ,scrollbar);
    // scrollbar.style.width = pecentage + '%'
    // document.querySelector('.scrolbar').style.width = pecentage + '%'
    
   
    
})
console.log("scroll", window.scrollY);
    console.log("scollHeight", document.body.scrollHeight);
    console.log("innerHeight", window.innerHeight);

// console.log(scrollbar);
