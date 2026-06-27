//home for show button and category card
function goToProducts() {
    window.location.href = "products.html";
}

//Products page
let products = [
    "iPhone 16",
    "Samsung Galaxy S25",
    "OnePlus 13",
    "Google Pixel 10",
    "MacBook Air",
    "AirPods Pro",
    "Dell XPS",
    "Smart Watch",
    "Gaming Mouse",
    "Wireless Mouse",
    "Mechanical Keyboard",
    "RGB Keyboard"
];

let total = document.getElementById("totalProducts");

if(total){
    total.innerHTML = "Total Products Available: " + products.length;
}

function searchProduct() {
    let search = document.getElementById("searchBox").value.toLowerCase();
    let products = document.getElementsByClassName("product-card");

    for (let i = 0; i < products.length; i++) {
        products[i].style.display = "none";
    }

    if (search.includes("iphone")) {
        document.getElementById("iphone").style.display = "block";
    }

    else if (search.includes("samsung")) {
        document.getElementById("samsung").style.display = "block";
    }

    else if (search.includes("oneplus")) {
        document.getElementById("oneplus").style.display = "block";
    }

    else if (search.includes("pixel")) {
        document.getElementById("pixel").style.display = "block";
    }

    else if (search.includes("mobile")) {
        document.getElementById("iphone").style.display = "block";
        document.getElementById("samsung").style.display = "block";
        document.getElementById("oneplus").style.display = "block";
        document.getElementById("pixel").style.display = "block";
    }

    else if (search.includes("macbook") || search.includes("laptop")) {
        document.getElementById("macbook").style.display = "block";
        document.getElementById("dell").style.display = "block";
    }

    else if (search.includes("airpods")) {
        document.getElementById("airpods").style.display = "block";
    }

    else if (search.includes("watch")) {
        document.getElementById("watch").style.display = "block";
    }

    else if (search.includes("mouse")) {
        document.getElementById("mouse").style.display = "block";
        document.getElementById("wirelessmouse").style.display = "block";
    }

    else if (search.includes("keyboard")) {
        document.getElementById("keyboard").style.display = "block";
        document.getElementById("rgbkeyboard").style.display = "block";
    }

    else {
        for (let i = 0; i < products.length; i++) {
            products[i].style.display = "block";
        }
    }
}

//cart
function discount() {
    let total = 1268;
    let finalPrice = total - 100;

    document.getElementById("result").innerHTML =
        "Discounted Price: $" + finalPrice;
}
//toggle
function toggleMenu() {
    let menu = document.getElementById("navLinks");
    menu.classList.toggle("show");
}

//cart count
let cartCount = 0;
function addToCart(){
   alert("Item added to cart successfully!");
    cartCount++;
    let count = document.getElementById("cartCount");
    if(count){
        count.innerHTML = cartCount;
    }
}