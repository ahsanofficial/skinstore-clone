
  
var roundData = [
    {
      src:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/38/original-0410-STDCRE-23480-SS-LD-OctoberShootBatch_Shot42-500x500-043838.jpg",
      name: "Aesop",
      disc: "Designed to bring pleasure and joy to your daily rituals, Aesop creates high-quality, luxury products for the face, hair and body.",
    },
    {
      src:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/51/259076565_138307115212960_4804439776906233520_n-094051.jpg",
      name: "NEST Fragrances",
      disc: "Enrich your senses today with the incredible array of scents from NEST Fragrances.",
    },
    {
      src:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/15/Screenshot_2022-04-06_155350-075615.png",
      name: "NEW IN: Rituals + Gift ",
      disc: "Receive a Rituals Beauty To Go Sakura Set (worth $15) when you spend $45 or more on the brand.",
    },
    
  ];

  displayCovidData(roundData);

  function displayCovidData(covidData) {
    document.querySelector("#roundimg").innerHTML = "";

    roundData.map(function (elem) {
      var mainDiv = document.createElement("div");

      var img = document.createElement("img");

      img.setAttribute("src", elem.src);

      var name = document.createElement("h3");
      name.innerText = elem.name;

      var giftDiv = document.createElement("p");
      giftDiv.innerText = elem.disc;

      let button = document.createElement("button");
      button.innerHTML = "SHOP NOW";
      
      button.addEventListener("click", function () {
        addToCart(elem);
      });
     

      mainDiv.append(img,name,giftDiv,button);
      document.querySelector("#roundimg").append(mainDiv);
    });
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

   
var roundData2 = [
    {
      src:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/20/original-Webp.net-resizeimage_%2825%29-072820.jpg",
      name: "Winter Foot Care at SkinStore",
      disc: "Discover proper foot care all winter long with products from SkinStore.com.",
    },
    {
      src:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/09/original-Webp.net-resizeimage_%2826%29-073009.jpg",
      name: "The Best Hand Cream for Softer Hands",
      disc: "For softer, smoother hands, SkinStore.com has a lot of wonderfully soothing products, and that includes the perfect hand cream..",
    },
    {
      src:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/28/original-Untitled_design_%2842%29-100228.png",
      name: "How To Get Rid Of Bumps On Arms",
      disc: "Learn about the causes and cures of bumps on the arm and get back your smooth, flawless arms today.",
    },
    
  ];

  displayCovid(roundData2);

  function displayCovid(roundData2) {
    document.querySelector("#newdata").innerHTML = "";

    roundData2.map(function (elem) {
      var mainDiv = document.createElement("div");

      var img = document.createElement("img");

      img.setAttribute("src", elem.src);

      var name = document.createElement("h3");
      name.innerText = elem.name;

      var giftDiv = document.createElement("p");
      giftDiv.innerText = elem.disc;

      let button = document.createElement("button");
      button.innerHTML = "SHOP NOW";
     

      mainDiv.append(img,name,giftDiv,button);
      document.querySelector("#newdata").append(mainDiv);
    });
  }


  
