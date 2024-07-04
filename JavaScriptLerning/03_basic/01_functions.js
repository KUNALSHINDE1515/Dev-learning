
// function sayMyName(){
//     console.log("k");
//     console.log("u");
//     console.log("n");
//     console.log("a");
//     console.log("l");
// }

// sayMyName()


// function addTwoNumbers(num1 ,num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1 ,num2){
    
    // let result = num1 + num2
    // return result;
    return num1 + num2
}

// const result = addTwoNumbers(8,5)
// console.log("Result :",result);


function loginUserMessage(username = "Sam"){
    if(username === undefined){
       console.log("Please Enter A username");
       return
    }
    return `${username} just loggeed In`
}

// console.log(loginUserMessage("Kunal"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username:"kunal",
    price:199
}

function handeObject(anyObject){
    console.log(`Username is ${anyObject.username} ANd price is ${anyObject.price}`);
}
// handeObject(user)

handeObject({
    username:"sam",
    price:399
})

const myNewArray = [200,400,10,600]

function returnSecondVAlue(getArray){
    return getArray[1]
}

// console.log(returnSecondVAlue(myNewArray));
console.log(returnSecondVAlue([200,400,500,1000]));

