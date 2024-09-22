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


const apiUrl = "https://api.github.com/users/kunalshinde1515"

async function GithubApi() {
    const req = await fetch(apiUrl)
    console.log(req);
    
    // const data = await req.json()
    // console.log(data.subscriptions_url);
    
}

GithubApi()

fetch(apiUrl).then().catch()
