// Function

// Function Declaration

// TAsk ----> 1

function check (num){
    if (num % 2 === 0) {
        console.log(` ${num}  is even `);
    }else{
        console.log(`${num} is odd`);
    }    
}

check(5)



// Task --- > 2

function calculateSquareRoot(num){
    return num * num
}

let result = calculateSquareRoot(20)
console.log(result);

//Function expression in js

// TAsk ---> 1
const maximunTwo = function(num1, num2){
    if (num1 > num2) {
        console.log(`${num1} : THis is max number`);
    }else{
        console.log(`${num2} : THis is max number`);
    }
}

maximunTwo(15,19)

// Task---> 4  concat two String

const concatTwoString = function (str1, str2) {
    return str1 + str2
}

let check1 = concatTwoString("kunal", "shinde")
console.log(check1);



// Arrow Function

// Task ----> 1

const Arrow = (num1, num2) => {
    return num1 + num2
}
console.log(Arrow(5,7));


// TAsk ---> 2

const myString = (str) => {
   return str.includes("k")
}

console.log(myString("kuanl"));


// function parameter and default value

// Task ---> 7
function Product(p1, p2) {
    return p1 * p2

}

let ProductResult = Product(2)
console.log(ProductResult);


// TAsk ---> 8

function message(name,age){
    return `Hello ${name} Your ahe is ${age}`
}
console.log(message("Roky BHAi", 28));


// Higher-Order Functions

// TAsk --- 9


