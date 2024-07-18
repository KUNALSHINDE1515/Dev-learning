// Array creation and acces 

// Task --- > 1
let newArr = [1,2,3,4,5]
console.log(newArr);


// Task ---> 2
console.log(newArr[4]);


// Task ---> 3
newArr.push(8,9) // adding last element of an array
console.log(newArr);


// Task ---> 4 
newArr.pop()
console.log(newArr); // removing last element of an array

//Task ----> 5

newArr.shift()  // removing start emenet of an array
console.log(newArr);


// Task---> 6
newArr.unshift(11)  // adding start elememt of an array
console.log(newArr);



// Array methods(INtermediate)

// Task---> 7

const doubleValue = newArr.map((value) => value * 2)  // 1st method
console.log(doubleValue);

const doubleValue1 = newArr.map((value) => {
    return value * 3
} ) // 1st method
console.log(doubleValue1);


//TAsk --> 8  even number

const evenArray = doubleValue1.filter((num) => num % 2 === 0)
console.log(evenArray);

// Task ---> 9 sum

const sum = doubleValue.reduce((acc, curr) => (acc+ curr), 0)
console.log(sum);



// Array Iteration

//Task ---> 10 for looop in array each element print

for (let i = 0; i < doubleValue.length; i++) {
    console.log("each element : " ,doubleValue[i]);
}

// Task ---11

const myArray = ['apple', 'banana', 'orange', 'grape']



myArray.forEach(item => {
  console.log(item);
});


// Multi-diensional Arrays
// TAsk -----> 12

const myArray2 =[['apple', 'satri', 'orange', 'grape'],['apple', 'banana', 'orange', 'grape']]
console.log(myArray2);


// Task ----> 13 accesing specific elemennt in array

console.log(myArray2[1][1]); // accesing specific element with [] bracket notation
