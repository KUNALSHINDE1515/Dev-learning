const submitBtn = document.getElementById("submit");
const ratingbtn = document.querySelectorAll("span");
const cart = document.querySelector(".data-container");

const ratingdiv = document.createElement("div");
ratingbtn.forEach((e) => {
  e.addEventListener("click", () => {
    e.style.backgroundColor = "white";
    e.style.color = "black";
    let value = e.innerText;
    console.log(value);

    //rating div
    ratingdiv.innerText = `You selected ${value} out of 5.`;
    ratingdiv.style.textAlign = "center";
    ratingdiv.style.backgroundColor = "#262E38";
    ratingdiv.style.padding = "8px";
    ratingdiv.style.marginBlock = " 5px";
    ratingdiv.style.fontSize = "1.5rem";
    ratingdiv.style.color = "orange";
    ratingdiv.style.fontWeight = "700";
  });
});


submitBtn.addEventListener("click", () => {
  cart.innerText = "";

  // Thank You
  const div = document.createElement("div");
  div.innerText = "Thank You";
  div.style.textAlign = "center";
  div.style.fontSize = "3rem";
  div.style.padding = "10px";

  // Paragraph tag
  const p = document.createElement("p");
  p.innerText =
    "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
  p.style.textAlign = "center";
  p.style.padding = "5px";
  p.style.fontSize = "1rem";

  // img tag
  const img = document.createElement("img");
  img.src = "/FrontEndProject/Intractive-cart-design/images/illustration-thank-you.svg";
  img.style.marginLeft = "60px ";
  img.style.padding = "5px";

  cart.appendChild(img);
  cart.appendChild(ratingdiv);
  cart.appendChild(div);
  cart.appendChild(p);
});

