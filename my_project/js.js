import head from "../my_project/header/header.js";
document.getElementById('header').innerHTML=head();


import footer from "../my_project/footer/footer.js";
document.getElementById('footer').innerHTML=footer();

var items = JSON.parse(localStorage.getItem("cartLists"));
console.log(items.length);
document.getElementById(
  "cart_item"
).innerText = `Your have ${items.length} item in your cart`;