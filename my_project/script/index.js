import head from "../header/header.js"
document.getElementById("header").innerHTML=head()

import footer from "../footer/footer.js"
document.getElementById("footer").innerHTML=footer()



var items= JSON.parse(localStorage.getItem("cartLists"))
console.log(items.length)
document.getElementById("cart_item").innerText=`Your have ${items.length} item in your cart`














let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


let sho_catagory=[
    {img:"https://static.thcdn.com/images/small/webp/widgets/121-us/01/Page-001-025201.png"},
    {img:"https://static.thcdn.com/images/small/webp/widgets/121-us/09/Page-002-025209.png"},
    {img:"https://static.thcdn.com/images/small/webp/widgets/121-us/17/Page-003-025217.png"},
    {img:"https://static.thcdn.com/images/small/webp/widgets/121-us/21/Page-004-025221.png"},
    {img:"https://static.thcdn.com/images/small/webp/widgets/121-us/40/Page-005-025240.png"},
   {img:"https://static.thcdn.com/images/small/webp/widgets/121-us/58/Page-006-025258.png"}
]
let shop_by_catagory=document.getElementById("shop_by_catagory")
sho_catagory.map((el)=>{
    // console.log(el.img)
    let img=document.createElement("img")
    img.src=el.img
    shop_by_catagory.append(img)
})
let people_buying=[
    {img:"https://static.thcdn.com/images/small/webp//productimg/480/480/13645148-2094934999114430.jpg",
    name:"NuFACE Trinity Supercharged Skincare Routine (Worth $513.00)",
    price:370.00},
    {img:"https://static.thcdn.com/images/small/webp//productimg/480/480/11289609-1174892770940184.jpg",
    name:"SkinCeuticals C E Ferulic with 15% L-Ascorbic Acid Vitamin C Serum 30ml",
    price:169.00},
    {img:"https://static.thcdn.com/images/small/webp//productimg/480/480/13694394-1174938374323578.jpg",
    name:"TriPollar STOP X Rose Gold and Cosmetics Bag Exclusive Bundle (Worth $424.00)",
    price:399.50},
    {img:"https://static.thcdn.com/images/small/webp//productimg/480/480/12915716-1804871846655444.jpg",
    name:"DHC Salicylic Acne Wash 4 fl. oz.",
    price:22.00},
]
let people=document.getElementById("what_people_are_buying")
people_buying.map((el)=>{
    // console.log(el)
    let div=document.createElement("div")
  
    let img=document.createElement("img")
    img.src=el.img
    let name=document.createElement("p")
    name.innerText=el.name
    let price=document.createElement("p")
    price.innerText=`$${el.price}`
    let shop=document.createElement("button")
    shop.innerText=`SHOP NOW`
    div.append(img,name,price,shop)
    people.append(div)
})
let trendingoffer=[
    {img:"https://static.thcdn.com/images/small/webp/widgets/121-us/39/1224-STDCRE-28425-WC-SS-SkinStore-January-Photography-2022-BATCHING_Shot17-600x600-053341-095839.jpg",
    name:"SkinCeuticals New In",
    des:"Phyto A+ Brightening Treatment brightens, while reducing post-blemish marks in an oil-free formula with a gel-creme texture"},
    {img:"https://static.thcdn.com/images/small/webp/widgets/121-us/29/original-Shot_34_500x500-094929.jpg",
    name:"In Honor of AAPI Heritage Month",
    des:"From Korean beauty to Japanese beauty and beyond, explore brands rooted in Asian culture."},
    {img:"https://static.thcdn.com/images/small/webp/widgets/121-us/00/original-original-original-original-0429-STDCRE-13871-SS-CT-Summer-Commercial-Campaign-Photography-Batching-Priority-3-Shot_11.psd500x500-093656-100318-094035-072000.jpg",
    name:"15% off SkinMedica + $14 Gift",
    des:"15% off SkinMedica + free SkinMedica Instant Bright Eye Cream .07oz (worth $14) when you spend $130+ on the brand."},
    {img:"https://static.thcdn.com/images/small/webp/widgets/121-us/47/original-MicrosoftTeams-image_%2828%29-093147.png",
    name:"25% off SPF Products",
    des:"Sun protection is an absolute must in your skincare routine, especially as we approach the summer months!"},
    {img:"https://static.thcdn.com/images/small/webp/widgets/121-us/58/original-0328-STDCRE-33849-WC-SS-April-Photography-Batching-Shot22-500x500-011858.jpg",
    name:"New in: Revision Skincare",
    des:"Revision Skincare was founded to change the way professional skincare results are achieved."},
    {img:"https://static.thcdn.com/images/small/webp/widgets/121-us/55/original-Shot_8_500x500-070755.jpg",
    name:"Brand of the Month: First Aid Beauty",
    des:"No matter your skin care need, you can find First Aid Beauty products that work for you."},
]
let newTrendingOffers=document.getElementById("Trending_Offers")
trendingoffer.map((el)=>{
    // console.log(el)
let div=document.createElement("div")

    let imge=document.createElement("img")
    imge.src=el.img
    let name=document.createElement("h2")
    name.innerText=el.name
    let descrip=document.createElement("p")
    descrip.innerText=el.des
    let shop=document.createElement("button")
    shop.innerText=`SHOP NOW`

 div.append(imge,name,descrip,shop)
 newTrendingOffers.append(div)
  
})

// <!-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
  });