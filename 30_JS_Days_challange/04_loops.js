//  DAY - 4
// for loop
// Task ---> 1
for (let index = 0; index <=10 ;index = index + 1) {
    // console.log(index);
}


// Task ---> Multiplicatopn table of 5

for (let i = 1; i <=10; i++) {
   let number = 5
//    console.log(`Multiplication of ${number} * ${i} : ${number * i}`);
}



// While looop
// Task ----> 3
let sum = 0;
let i = 1
while (i <=  10) {
    sum = sum + i
    i = i + 1
    // console.log(sum);
}


// Task ----> 4
let num = 10
while (num >= 1) {
    num = num - 1
    // console.log(num);
}


// Do While loop
// Task --- > 5

let n = 0;
do {
    n = n + 1
    // console.log(n);
} while (n < 5);


// Task --- > 6

let nums = 5
let result = 1
let j = 1
do {
    result = result *  j;
    j = j + 1
    // console.log(result);
} while (j <= nums);



// Nested Loops

// Task----> 7  pattern


let star ="*"
for (let i = 1; i <=5; i++) {
  console.log(star.repeat(i));
}


// Loop control statment

// TAsk----> 8

let n1 = 0
while(n1 < 10){
    n1++
    if (n1 == 5) {
        continue
    }
    // console.log(n1);    
}



for (let i = 0; i <= 10; i++) {
    
    if (i == 7) {
        break
    }
    console.log(i);

}
