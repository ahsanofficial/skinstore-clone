
import head from "../header/header.js"
document.getElementById("header").innerHTML=head()

import footer from "../footer/footer.js"
document.getElementById("footer").innerHTML=footer()

let product  = JSON.parse(localStorage.getItem("product"));

console.log(product)


display(product)

function display(elem) {
    document.querySelector("#container").innerHTML = "";

    
      var mainDiv = document.createElement("div");
     mainDiv.setAttribute("id" , "maindiv");

      var img = document.createElement("img");

      img.setAttribute("src", elem.src);

      var name = document.createElement("h3");
      name.innerText = elem.name;

      var price = document.createElement("h3");
      price.innerText = "PRICE: "+ elem.price + "$";

      let button = document.createElement("button");
      button.innerHTML = "ADD TO CART";
      
      var instock = document.createElement("h5");
      instock.innerText = "In stock - Usually dispatched within 24 hours";

      button.addEventListener("click", function () {
        addToCart(elem);
      });
     let maindiv2 = document.createElement("div");
     

      maindiv2.append(name,price,button,instock)

      mainDiv.append(img);
      document.querySelector("#container").append(mainDiv,maindiv2);
   
  }


   
  var cartArr = JSON.parse(localStorage.getItem("cartLists")) || [];
  

  function addToCart(elem) {
    var object={
      src:elem.src,
      name:elem.name,
      review:elem.review,
      price:elem.price,
      quant:1
  }
  cartArr.push(object)
    localStorage.setItem("cartLists", JSON.stringify(cartArr));
  }