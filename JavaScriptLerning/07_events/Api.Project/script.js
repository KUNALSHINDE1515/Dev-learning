function card() {
    
    const reqUrl = "https://api.github.com/users/kunalshinde1515"
       const github =  new XMLHttpRequest()
       github.open("GET",reqUrl)
       
       const div = document.createElement('div')
       github.onreadystatechange = function () {
           const  data = JSON.parse(this.responseText)
           console.log(data);
            div.innerHTML = `
            <h2>Name : ${data.name}</h2>
            <p>Bio : ${data.bio}</p>
            <p>Location : ${data.location}</p>
             `;
            //  div.setAttribute("id", "container")
             div.style.width = "400px"
             div.style.backgroundColor = "cadetblue"
             div.style.textAlign = "Center"
             div.style.borderRadius = "10px"
            document.body.appendChild(div)
        }

        github.send()
}



card()

 // const reqUrl = "https://randomuser.me/api/"
    // const xhr = new XMLHttpRequest()
    // xhr.open("GET",reqUrl)
    // // console.log("here");
    // xhr.onreadystatechange = function () {
    //     // console.log(xhr.readyState);
    //     if (xhr.readyState === 4) {
    //         console.log(this.responseText);
    //         const data = JSON.parse(this.responseText)
    //         console.log(  data.results[0]);

    //     }
    // }
    // console.log(xhr.readyState);


    // xhr.send()