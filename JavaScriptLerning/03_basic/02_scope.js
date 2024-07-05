// var c = 300

let a = 300
if (true) {
    let a = 50
    const b = 20
    // console.log(`INNER ${a}`);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const usrename = "kunal"
    function two() {
        const website = "Youtube";
        console.log(usrename);
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "kunal"
    if(username === "kunal"){
        const website =  " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



//**************************************** interesting ****************/

console.log(addone(5)
);
function addone(num){
    return num + 1
}


// This is called expresion ki tarah
// addtwo(5)
const addtwo = function(num){
    return num + 2
}


function check(){
    var data = 545
}

console.log(data); // fuction scope error