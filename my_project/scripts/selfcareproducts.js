

import head from "../header/header.js"
document.getElementById("header").innerHTML=head()

import footer from "../footer/footer.js"
document.getElementById("footer").innerHTML=footer()



function myFunction() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    console.log(more.style.display);

    if (moreText.style.display === "none") {
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    } else {
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    }
  }

  var productdata = [
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/10375474-4034866118092774.jpg",
      name: "Murad Pomphenol Sunguard Anti-Ageing Supplement 60 tablets",
      price: "29",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12323496-1994720655404332.jpg",
      name: "Goli Nutrition Apple Cider Vinegar Gummies",
      price: "19",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/10898670-4954886248780170.jpg",
      name: "Aromatherapy Associates Discovery Wellbeing Bath and Shower Oil Collection",
      price: "28",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/11289111-1114831408498089.jpg",
      name: "  Perricone MD Skin and Total Body Dietary Supplements",
      price: "74",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/12877969-4244880387833011.jpg",
      name: " Smile Makers - The Tennis Pro",
      price: "60",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12378844-1954736852388771.png",
      name: "3 Bottles of Goli Apple Cider Vinegar Gummies Bundle",
      price: "30",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11287222-1874871998236897.jpg",
      name: "  Aromatherapy Associates De-Stress Muscle Gel",
      price: "53",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11513404-8924871771176260.jpg",
      name: " Elvie Kegel Exercise Trainer",
      price: "36",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp/productimg/1600/1600/12281535-1204710396726471.jpg",
      name: "Daily Detox Brush 5.9g",
      price: "52",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/12747907-1514871998779558.jpg",
      name: "DERMAdoctor KP Duty Dermatologist Formulated Body Scrub (Various Sizes)",
      price: "13",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12243916-1824786787121054.jpg",
      name: "Perricone MD Cold Plasma Plus Neck and Chest 30ml",
      price: "29",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/12674318-4924893307210359.jpg",
      name: "Sally Hansen Dries Instantly Top Coat Treatment 13ml",
      price: "14",
    },
   
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/10541756-7834812959224920.jpg",
      name: "Aromatherapy Associates Home Fragrancer (Electric)",
      price: "104",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11247489-8064918723776630.jpg",
      name: " Elizabeth Arden Skin Illuminating Advanced Brightening Night Capsules (50 Capsules)",
      price: "50",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/13411952-2034911960066120.jpg",
      name: "Smile Makers The Romantic",
      price: "56",
    },
    {
      src:
        "https://static.thcdn.com/images/xsmall/webp/productimg/1600/1600/12043669-8264650168019293.jpg",
      name: "Smile Makers - The Surfer",
      price: "37",
    },
  ];

  displayShampooData(productdata);

  function displayShampooData(productdata) {
    document.querySelector("#productDisplay").innerHTML = "";
    productdata.map(function (elem) {
      var mainDiv = document.createElement("div");

      var img = document.createElement("img");

      img.setAttribute("src", elem.src);

      

      var name = document.createElement("p");
      name.innerText = elem.name;

      var button1 =document.createElement("button");
      button1.innerText="ffjfjffj";

      var price = document.createElement("p");
      price.innerText = "$" + elem.price;

      var innerDiv = document.createElement("div");
      innerDiv.append(img, name, price);

      innerDiv.addEventListener("click" ,function(){
          gotoproduct(elem);
      });
      var button = document.createElement("button");
      
      button.innerText = "QUICK BUY";

      button.addEventListener("click", function () {
        addToCart(elem);
      });

      mainDiv.append(innerDiv, button);

      document.querySelector("#productDisplay").append(mainDiv);
    });
  }

  var list = document.querySelector(".submenu >ul>li");

  function sortAscending() {
    var list = document.querySelectorAll(".sort");
  
    if (list[0].attributes[0].value == "lth") {
        productdata.sort(function (a, b) {
        return a.price - b.price;
      });
      displayShampooData(productdata);
     
    }
  }

  function sortDescending() {
    var list = document.querySelectorAll(".sort");
   
    if (list[1].attributes[0].value == "htl") {
        productdata.sort(function (a, b) {
        return b.price - a.price;
      });
      displayShampooData(productdata);
    }
  }

  function search() {
    var searchText = document.getElementById("search").value.toLowerCase();
    console.log(searchText);
    var filterData = productdata.filter(function (item) {
      var elem = item.name.toLowerCase();
      return elem.includes(searchText);
    });
    displayShampooData(filterData);
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

  function  gotoproduct(elem){
    var object={
        src:elem.src,
        name:elem.name,
        review:elem.review,
        price:elem.price,
        quant:1
  }
  window.location.href="bathandbodydetails.html";
  localStorage.setItem("product", JSON.stringify(object));
}