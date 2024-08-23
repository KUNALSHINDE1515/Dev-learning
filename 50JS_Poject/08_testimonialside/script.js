const tesitimonials = ['“The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012.”', "“My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing.”",'Jeramy and his team at the Lorem Ipsum Company whipped my website into shape just in time for tax season. I was excited by the results and am proud to direct clients to my website once again.',"Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you'll definitely get the 5-star treatment from the Lorem Ipsum Company!"]

const authors = ["Tasha Zuzalek","Seth Gewirtz", "Kelsi Gordon", "Roland Weedon"]
const author = document.querySelector('#author')
const testimonial = document.querySelector('#testimonials')
const image = document.querySelector('.image-container')
const imgArray = [
    './50JS_Poject/08_testimonialside/1.jpg',
    './50JS_Poject/08_testimonialside/2.jpg',
    './50JS_Poject/08_testimonialside/3.jpg',
    './50JS_Poject/08_testimonialside/4.jpg',
    './50JS_Poject/08_testimonialside/5.jpg',
]

// image

let cout = 0;
setInterval(changeTest,2000)

function changeTest(){
    testimonial.textContent = tesitimonials[cout]
    author.textContent = authors[cout]
    image.innerHTML = `<img src=${imgArray} alt="Persom Inmage" id="image">`
    cout++;
    console.log(cout);
    
    if(cout > authors.length - 1){
        cout = 0;
    }
}