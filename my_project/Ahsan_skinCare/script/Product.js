

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    console.log(more.style.display);

    if (moreText.style.display === "none") {
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        dots.style.display = "none";
    } else {
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        dots.style.display = "inline";
    }
}

displayShampooData(productdata)

function displayShampooData(productdata) {
    document.querySelector("#productDisplay").innerHTML = "";
    productdata.map(function (elem) {
        var mainDiv = document.createElement("div");

        var img = document.createElement("img");

        img.setAttribute("src", elem.src);



        var name = document.createElement("p");
        name.innerText = elem.name;

        var button1 = document.createElement("button");
        button1.innerText = "ffjfjffj";

        var price = document.createElement("p");
        price.innerText = "$" + (elem.price || elem.papFreeGift_saving)

        var innerDiv = document.createElement("div");
        innerDiv.append(img, name, price);

        innerDiv.addEventListener("click", function () {
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
            if (a.price == "" || b.price == "") {
                return a.papFreeGift_saving - b.papFreeGift_saving;
            }
            else {
                return a.price - b.price;
            }
        });
        displayShampooData(productdata);

    }
}

function sortDescending() {
    var list = document.querySelectorAll(".sort");

    if (list[1].attributes[0].value == "htl") {
        productdata.sort(function (a, b) {
            if (a.price == "" || b.price == "") {
                return b.papFreeGift_saving - a.papFreeGift_saving;
            }
            else {
                return b.price - a.price;
            }
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
    var object = {
        src: elem.src,
        name: elem.name,
        review: elem.review,
        price: elem.price || elem.papFreeGift_saving,
        quant: 1
    }
    cartArr.push(object)
    localStorage.setItem("cartLists", JSON.stringify(cartArr));
}

function gotoproduct(elem) {
    var object = {
        src: elem.src,
        name: elem.name,
        review: elem.review,
        price: elem.price || elem.papFreeGift_saving,
        quant: 1
    }
    window.location.href = "productdetails.html";
    localStorage.setItem("product", JSON.stringify(object));
}