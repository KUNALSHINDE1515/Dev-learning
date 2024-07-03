//  Single Ton

// Object.create

// object literals

const MySym = Symbol("key 1")

const JsUser = {
    name: "Kunal",
    "fullName" : "kunal shinde",
    [MySym]: "mykey1",
    age:21,
    location:"Pune",
    email:"kunalshinde@gmail.com",
    sLoggedIn: false,
    lastLoginDays:["mondays", "saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullName"]);

// console.log(JsUser[MySym]);

JsUser.email = "shinde@geminiAi.com"
// Object.freeze(JsUser)
JsUser.email = "shinde@chatgpt.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());