const UserEmail = []

if (UserEmail) {
    console.log("Got user email");
}else{
    console.log("don 't have user email");
}


// false values 
// false , 0 , -0, BigINt 0n, "", null, undefined, Nan

// truthy values

//  "0", 'false',  " ", [], {}, function(){}


// if(UserEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyOBj = {

}

if(Object.keys(emptyOBj).length === 0){
    console.log("Object is empty");
}


// Nullisjh coalescing (??): null undefined

let val ;
// val = 5 ?? 10

// val = null ?? 10
// val = undefined ?? 15
val = null ?? 10 ?? 15     // this is foll back
console.log(val)

// Terniart Operator

// condition ? true : false

const Price = 100

Price <= 80 ? console.log("less Than 80"): console.log("More than 80");


