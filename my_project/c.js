

// import head from "../../my_project/header/header.js";
// document.getElementById('header').innerHTML=head();


// import footer from "../../my_project/footer/footer.js";
// document.getElementById('footer').innerHTML=footer();


data = [
  {
    name: "Dr Lorette The Essentials Set",
    price: "135",
    src: "https://static.thcdn.com/images/small/webp//productimg/480/480/12746891-7394837306723863.jpg",
  },

  {
    name: "NuFACE Trinity + Trinity ELE Attachment Set",
    price: "449",
    image: "https://static.thcdn.com/images/small/webp//productimg/480/480/11288898-2044866329672154.jpg",
  },

  {
    name: "Limited Addition Shampoo",
    price: "56",
    image: "https://static.thcdn.com/images/small/webp//productimg/480/480/13674865-1224938375011691.jpg",
  },

  {
    name: "DSkinCeuticals Plump and Glow Regimen",
    price: "268",
    src: "https://static.thcdn.com/images/small/webp//productimg/480/480/11582506-4534812947058012.jpg",
  },
];


var cartData = JSON.parse(localStorage.getItem("cartLists")) || [];
document.querySelector(".addtocartLists").addEventListener('click',myfunction)

function myfunction(){
    
    cartListsData.push(data[2])
    localStorage.setItem("cartLists", JSON.stringify(cartListsData));
    alert('item added to cartLists' )
    document.querySelector(".dis").innerHTML=cartListsData.length
    // add();
    console.log(cartListsData.length);
}


document.querySelector(".addon").addEventListener('click',myfunctiona)

function myfunctiona(){
    
    cartListsData.push(data[2])
    localStorage.setItem("cartLists", JSON.stringify(cartListsData));
   // alert('item added to cartLists' )
    document.querySelector(".dis").innerHTML=cartListsData.length
    // add();
    console.log(cartListsData.length);
}


document.querySelector(".del").addEventListener('click',myfunctionb)
function myfunctionb(){

    cartListsData.pop();
    localStorage.setItem("cartLists", JSON.stringify(cartListsData));
   // alert('item remove to cartLists' )
    document.querySelector(".dis").innerHTML=cartData.length
    // add();
    console.log(cartData.length);

}
