const apiKey = '9dbb369197404fe9aadef870e0760ade';
const inputValue = document.getElementById('inputValue');
const searchBtn = document.getElementById('btn');
const showMoreBtn = document.getElementById('Show-more');
const imageContainer = document.querySelector('.cartImg')
let inputData = "Dogs"
let num = 1
async function api() {
   
   try {
    
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-08-21&sortBy=publishedAt&apiKey=${apiKey}`
    const req = await fetch(url);
    // console.log(await req.json());
    const data = await req.json()

    
    imageContainer.innerHTML = `
    <img src="${data.articles[num].urlToImage}"/>
    `
   } catch (error) {
    imageContainer.innerHTML = "Api wan not response"
   }
    
}
setInterval(api , 2000)

api()



showMoreBtn.addEventListener("click", () => {
   num = Math.round(Math.random() * 100)
   
})

