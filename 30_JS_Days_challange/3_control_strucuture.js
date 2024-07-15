
// Control structures 
// Tasks --> 1 ---> If else statement


// T-->1
// let number = 5

// if(number >= 0){
//     console.log(`${number} is postive`);
// }else{
//     console.log(`${number} is Negative`);
// }


// T --> 2 

let age = 17

if (age >= 18) {
    console.log(`${age} You are eligible for vote`);
}else{
    console.log(`${age} You are not  eligible for vote`);
}


// T --> 2

let number = 49 

if (number >= 50) {
    console.log(`${number} is greather than 50`);
}else if(number <= 50) {
    console.log(`${number} is less than 50`);
}


// switch case

// task ---> 4

const day = 7
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tueday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Satarday");
        break;

    default:
        console.log("Please Enter valid day");
        break;
}


const score = "F"

switch (score) {
    case "A":
        console.log('Your score is 90 +++');
        break;
    case "B":
        console.log('Your score is 70 +++');
        break;
    case "C":
        console.log('Your score is 55+++');
        break;
    case "D":
        console.log('Your score is 40 +++');
        break;
    case "F":
        console.log('Your are fail is this subject....');
        break;
    default:
        console.log("Enter a valid data");
        break;
}



// Conditional opearator

// TAsk --->  6

for (let i = 0; i <= 20; i++) {
//    if (i % 2 !==0) {
//     console.log(i);
//    }
i % 2 ===0 ?  console.log(`${i} is even`) : console.log(`${i} is odd`);
}


// Combining Condition

// Task ---> 7

let year = 2019
if (0 == year % 4  && 0 != year % 100  || 0 == year %400)  {
    console.log(`${year} Year is leap year `);
}else{
    console.log(`${year} Year is not leap year `);
}
