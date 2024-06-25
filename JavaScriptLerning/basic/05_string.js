const name = "kunal"  
const repocount = 28

// console.log(name + repocount + "shinde") ;

// modern syntax string interpolation

console.log(`hello my name is ${name} and my reppo count is ${repocount}`);


// anoter way to declare a string 
const gameName = new String("BG-MI-ccc")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName);
// console.log(gameName.toLowerCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("M"));

const newString = gameName.substring(0,2)
console.log(newString);

const anotherString = gameName.slice(-4,3)
console.log(anotherString);

const newSringOne = "       kunal             ";;
console.log(newSringOne);
console.log(newSringOne.trim());


const url = "https://kunal.com/kunal%20shinde";

console.log(url.replace('%20', '-'));

console.log(url.includes("kunal"));

console.log(gameName.split('-'));