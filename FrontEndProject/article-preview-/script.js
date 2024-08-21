const share_Btn = document.getElementById('share-btn')
share_Btn.addEventListener('click', (e) => {
    share_Btn.setAttribute('class','share-btn-color');
    togglediv();  
})
function togglediv(){   
const div = document.getElementById('share-apps')
    div.style.display = 'flex';
    return div;
}


