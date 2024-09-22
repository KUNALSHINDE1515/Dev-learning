const apiKey = '9dbb369197404fe9aadef870e0760ade';
const url = "https://newsapi.org/v2/everything?q=";


window.addEventListener( "load", () => {
   fetchNews("India")
})

async function fetchNews(query) {
   const  res = await fetch(`${url}${query}&apiKey=${apiKey}`)
   const data  = await res.json()
   bindData(data.articles)
   console.log(data);
   
   
}

function bindData(articles) {
   const cardsContainer = document.getElementById("cards-container");
   const newsCardTemplate = document.getElementById("template-news-cards");

   cardsContainer.innerHTML = '';

   articles.forEach(article => {
      if (!article.urlToImage) return;

      const cardClone = newsCardTemplate.content.cloneNode(true);
      fillDataInCard(cardClone,article)
      cardsContainer.appendChild(cardClone);
   });
}


function  fillDataInCard(cardClone, article){
   const newImg = cardClone.querySelector('#news-img')
   const newTitle = cardClone.querySelector('#new-Title')
   const newSource = cardClone.querySelector('#news-source')
   const newDescription = cardClone.querySelector('#news-description')

   newImg.src = article.urlToImage
   newTitle.innerText = article.title
   newDescription.innerText = article.description
   

   const date = new Date(article.publishedAt).toLocaleDateString("en-US", {
      timeZone: "Asia/Jakarta"
   });

   newSource.innerText = `${article.source.name} . ${date}`

   cardClone.firstElementChild.addEventListener("click", () => {
      window.open(article.url, "_blank")
   })

}


let curSelectedNav = null ;
function onNavItemClicl(id){
   fetchNews(id)
   const navItem = document.getElementById(id);
   curSelectedNav?.classList.remove('active');
   curSelectedNav = navItem
   curSelectedNav.classList.add("active")
}

const searchBtn = document.getElementById('search-btn')
const inputSearchText = document.getElementById('serach-text')

searchBtn.addEventListener('click', () => {
   const quety = inputSearchText.value;
   if(!quety) return;
   fetchNews(quety)
   curSelectedNav?.classList.remove('active')
   curSelectedNav = null
})

function relod(){
   window.location.reload()
}



