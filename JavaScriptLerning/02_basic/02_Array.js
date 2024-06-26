const marvel_heros = ["thor", "Ireman", "spideman"]
const dc_heros = ["superman", "doremon", "chota-bhim"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3]);

// const newArr = marvel_heros.concat(dc_heros)
// console.log(newArr);

const all_heros = [...marvel_heros, ...dc_heros]

// ... seprade operator
// console.log(all_heros);

const another_array = [1, 2, 3 ,[4, 5, 6], 7, [6, 7, [4 ,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("kunal"));
// console.log(Array.from({name:"kunal"}));  // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3));



const points = new Array(40);
// console.log( points);
const fruits = [40];
// console.log( fruits);


// const arr1 = [1,2,8,1,0,7,8,9,10]
// const arr2 = arr1.tosort;
// console.log(arr1);
// console.log(arr2);

let arr = [3,4,1,2,8,2];
let arr2 = arr.sort();
console.log("arr =",arr);
console.log("arr2 = ",arr2);


// const arr3 = [1,2,3,4,5,6,7,8,9,10]
// const arr4 = arr3.sort();
// console.log(arr3);
// console.log(arr4);