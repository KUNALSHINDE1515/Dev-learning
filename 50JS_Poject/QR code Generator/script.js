const qrInput = document.getElementById('qr-input');
const qrImg = document.getElementById("qr-img");
const qrbutton = document.getElementById('qr-button');

qrbutton.addEventListener('click', () => {

    const inputVAlue = qrInput.value;
    console.log(inputVAlue);

    if(!inputVAlue) {
        alert("please enter a valid URL");
        return;
    }else{
        qrImg.scr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVAlue}`;
        qrImg.alt = `Qr code for ${inputVAlue}`
    }
    

})

