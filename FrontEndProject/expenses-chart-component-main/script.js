let days = ["sun","mon","tue","wed","thu","fri","sat"];
let AllDays = document.querySelectorAll(".colums>div>div.rect");
// console.log(AllDays);


let date = new Date();
let dayNum = date.getDay();
let currentDays = days[dayNum]
// console.log(currentDays);

let currentDaysRect = document.querySelector(`.${currentDays}>div.rect`)
// console.log(currentDaysRect);


currentDaysRect.style.backgroundColor = "var(--current-day-colot)";


let amount=[]

async function getdata() {
    let respose = await fetch("./data.json");
    let data = await respose.json();
    for (let i = 0; i < data.length; i++) {
        amount[i] = data[i].amount
        
    }
    AllDays.forEach( function (day , i) {
        day.style.height = `${amount[i] * 2.4}px`
    })
}

getdata();


AllDays.forEach(function(rect){
    rect.addEventListener("mouseover", (e) => {
        let amountDiv = document.createElement("div");
        let curDayHov = e.target.parentNode;
        let curDayHovClass = curDayHov.className;


        function getAmount() {
            for (const key in days) {
                if (days[key]== curDayHovClass) {
                    
                    if (days[key]=="sun") {
                        return amount[6]
                    }
                    return amount[key-1]
                }
            }

        }


        amountDiv.classList.add("show")
        amountDiv.textContent= `${getAmount()}`;

        curDayHov.insertBefore(amountDiv,curDayHov.firstChild);

        amountDiv.style.bottom = `${e.target.clientHeight + 40}px`;

    })
})


AllDays.forEach( function(rect) {
    rect.addEventListener('mouseleave', (e) =>{
        let curDayHov = e.target.parentNode;
        e.target.style.backgroundColor = "hsl(10,79%,65%)";
        currentDaysRect.style.backgroundColor = "hsl(186,34%,60%)";
        // currentDays.removeChild(curDayHov.firstElementChild)
        curDayHov.removeChild(curDayHov.firstChild)
    })
} )

