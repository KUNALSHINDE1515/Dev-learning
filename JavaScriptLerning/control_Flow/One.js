

// if 

// const isUSerloggedIN = true
// const temprataure = 23
// if (temprataure < 20) {
//     console.log("less than 20");
// }else{
//     console.log("tem grater than 20");
// }


// <, >, <=, >=, ==, !=, ===, !==


// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`USer power: ${power}`);
// }
// console.log(`USer power: ${power}`);



const balance = 1000
// if (balance > 500)  console.log("test");   // implecet scope


// if (balance < 500) {
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 700");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less Than 1200");
// }


const userLoggeIN = true
const debitCard = true
const loggedINFromGoogle = false
const loggedINFromEmail = true

if(userLoggeIN && debitCard ){
    console.log("Allow to buy course");
}

if (loggedINFromEmail || loggedINFromGoogle) {
    console.log("User LOgged IN");
}