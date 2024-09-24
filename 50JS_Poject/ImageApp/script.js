
const apiKey = '5VrveTEf4kVY36NLnK5Sc45W4XzhBaqXMqObFiAxib0';
const url = `https://api.unsplash.com/photos/?client_id=${apiKey}`;

// async function check() {
    
//     const res = await fetch(url)
//     const data = await res.json()
//     console.log(data);
    
//     // for (const item in data) {
//     //     console.log(item);
        
//     // }
    

//     data.forEach(element => {
//         console.log(element.urls.full);
        
//     });
// }

// check()

// fetch(url)
// .then( (data) => {
//     return data.json();
// })
// .then((cdata) => {
//     // console.log(cdata);
    
//     // console.log(cdata[1].links);

   
    
//     // let links = []
//     cdata.forEach(element => {
//     // ShowContent(element.urls.full)
//     //  links.push(element.urls.full)
//     //  console.log(element.alt_description);

//     ShowContent(element.alt_description ,  element.urls.full)
//     });
//     // console.log(links);
//     // for (let i = 0; i < links.length; i++) {

//     //     ShowContent(links[i])
        
//     // }

    


    
    
// })
// .catch( (e) => {
//     console.log(e ,"errorr");
    
// })

async function Data() {
    
   try {
    const req = await fetch(url)
    const data = await req.json()

    data.forEach( function(element) {
        ShowContent(element.alt_description ,  element.urls.full)
    })
   } catch (error) {
    console.log("Something Went to wrong in Api please cheak the code");
    
   }

}
Data()

function ShowContent(source,image) {
    const temp = document.getElementById('template');
    const clone = temp.content.cloneNode(true);
    clone.querySelector('#image-name').innerHTML = source 
    clone.querySelector('img#image').src = image
    document.querySelector('.image-cotainer').append(clone)   
}

