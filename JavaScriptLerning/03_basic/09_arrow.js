const user = {
    username: "kunal",
    price:999,

    welcome: function(){
        console.log(`${this.username} ,welcome to website`);
        // console.log(this);
    }

}
// user.welcome()
// user.username = "puspa"
// user.welcome()
// console.log(this);


// function chai(){
//     let username = "shinde"
//     console.log(this.username);
// }
// chai()

// const chai = function() {
//     let username = "shinde"
//         console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "shinde"
    console.log(this);
}
// chai()

// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)


const addTwo = (num1, num2) =>  ({username: "kunal"})


console.log(addTwo(3,4));


