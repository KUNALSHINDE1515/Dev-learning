// This is non sigalton object

const tinderUser = new Object()
tinderUser.id = "123abs"
tinderUser.name = "sammy"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:'some@gmail.com',
    fullname:{
        userFullName:{
            fName: "Kunal" ,
            LName: "shinde"
        }
    }
}

// console.log(regularUser.fullname.userFullName.fName);
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);


// const obj3 = Object.assign({},obj1, obj2)

const obj3  = {...obj1,...obj2}
// console.log(obj3);


const Users = [
    {
        id:1,
        emai:"k@gmail.com"
    },
    {
        id:1,
        emai:"k@gmail.com"
    },
    {
        id:1,
        emai:"k@gmail.com"
    },
    {
        id:1,
        emai:"k@gmail.com"
    },
    {
        id:1,
        emai:"k@gmail.com"
    }
]

Users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// console.log(tinderUser.hasOwnProperty.isloggedIn);



const course = {
    cNAme: "Js in HIndi",
    price: 999,
    CourseInstructor: "Hitesh"
}
// course.CourseInstructor


//This is caaled object destrucured
const {CourseInstructor: instructor} = course
console.log(instructor);

// this called destructuring

// const navbar = ({company}) => {

// }
// navbar(company = "Hitesh")



// api json
// {
//     "name":"Kunal",
//     "coursname":"js in hindi",
//     "price": "free"
// }


// [
//     {},
//     {},
//     {}
// ]

