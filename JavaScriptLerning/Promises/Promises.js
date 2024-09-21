
// // Promises


// const Promises1 = new Promise( function (reslove, reject) {
//     // Do an Asyc task 
//     // Db calls , cryptograpth, network
//     setTimeout(() => {
//         console.log("Asyc TAsk in Complete");
//         reslove()
        
//     }, 1000);
// })

// Promises1.then( function () {
//     console.log(`Promise Consumed`);
    
// })

// new Promise( function (reslove,reject) {
//     setTimeout(() => {
//         console.log("Asyn Task 2");
//         reslove()
//     }, 1000);
// }).then(function(){
//     console.log("Asyn 2 Resolved");
    
// })



// const PromiseThere = new Promise( function (reslove ,reject) {
//     setTimeout(() => {
//         reslove({username: "Kunal", email: "kunal@google.com"})
//     }, 1000);
// })

// PromiseThere.then(function (user) {
//     console.log(user);
    
// })


// const promiseFour = new Promise(  (reslove , reject) => {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             reslove({username: "Shubham" , password: 123456})
//         }else{
//             reject('Error: Something Went Wrong')
//         }
//     }, 1000);
// })

//  promiseFour.then( (user) => {
//     console.log(user);
//     return user.username
    
// }).then((username) => {
//     console.log(username);
    
// }).catch( (error) => {
//     console.log(error);
    
// }).finally( function(){
//     console.log("The Promise is either Rslove or rejected");
    
// })



// const Promise5 = new Promise( (reslove, rejected) => {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             reslove({Lname: "JAvaScript" , password: "123456"})
//         }else{
//             rejected('Error: Js Went Wrong')
//         }
//     }, 1000);
// });


// // Promise5.then()

// async function consumePromiseFive(){
//     try {
//         const respone = await Promise5
//     console.log(respone);
    
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// consumePromiseFive()

// // async function getAllUsers() {
 
// //     try {
// //         const reponse =  await fetch('https://jsonplaceholder.typicode.com/users')
// //         const data =  await reponse.json()
// //         console.log(data);
        
// //     } catch (error) {
// //         console.log("E: ", error);
        
// //     }
   
// // }

// // getAllUsers()



// fetch('https://jsonplaceholder.typicode.com/users')
// .then( (res) => {
//     return res.json()
// })
// .then( (data) => {
//     console.log(data);
    
// })
// .catch((e) => {
//     console.log("Error Comming");
    
// })




// Revise Video



const Promiseer = new Promise( function (reslove , reject) {
    setTimeout(() => {
        false
        console.log("somthi");
        
    }, 1000);
})

Promiseer.then((result) => {
    console.log("Resilu printed");
    
}).catch((err) => {
    console.log("Erro Find");
    
});