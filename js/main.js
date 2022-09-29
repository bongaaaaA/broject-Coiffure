let navbar = document.querySelector(".navbar");
let closeNavbar = document.querySelector(".navbar #close-navbar");
let foemSearch = document.querySelector(".header .search-form");

document.querySelector("#menu-btn").onclick = ()=>{
    navbar.classList.toggle("active");
    foemSearch.classList.remove("active");
    closeCart.classList.remove("open")
    mylistfavorite.classList.remove("active")
};
// in mobile toggel search form
document.querySelector("#search-btn").onclick = ()=>{
    foemSearch.classList.toggle("active");
    navbar.classList.remove("active");
    closeCart.classList.remove("open")
    mylistfavorite.classList.remove("active")
};
// close favorite
let favorite = document.querySelector("#heart")
let mylistfavorite = document.querySelector(".favorite")
favorite.onclick = () =>{
    mylistfavorite.classList.toggle("active")
    navbar.classList.remove("active");
    foemSearch.classList.remove("active");
    closeCart.classList.remove("open")
}

// close nav
closeNavbar.onclick = ()=>{
    navbar.classList.remove("active");
};
// when scroll close nav and hedden search
window.onscroll = () => {
    navbar.classList.remove("active");
    foemSearch.classList.remove("active");
    mylistfavorite.classList.remove("active")
};
// start slide
let slides = document.querySelectorAll(".home .slide");
let index = 0;
// let bottonLeft = document.querySelector(".home .slide .contant .controls .fa-angle-left")
// let bottonRight = document.querySelector(".home .slide .contant .controls .fa-angle-right")


function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length)  % slides.length;
    slides[index].classList.add('active');
};

// open cart and fovriet
let cart = document.querySelectorAll(".shop .products-slider .slide .image .icons .fa-shopping-cart")
let heart = document.querySelectorAll(".shop .products-slider .slide .image .icons .fa-heart")

cart.forEach(function (ele){
    ele.onclick = function (){
        ele.classList.toggle("color")
    }
})
heart.forEach(function (ele){
    ele.onclick = function (){
        ele.classList.toggle("color")
    }
})
let closeCart =document.querySelector(".cart")
document.querySelector(".header .icons .fa-shopping-cart").onclick = () =>{
    closeCart.classList.toggle("open")
    navbar.classList.remove("active");
    foemSearch.classList.remove("active");
    mylistfavorite.classList.remove("active")
}
//active colol start icon in section shop
let starsColor = document.querySelectorAll(".shop .products-slider .slide .contant .stars i")
starsColor.forEach(function(ele){
    ele.onclick = ()=>{
        ele.classList.toggle("color")
    }
})
// increas and decreas
let number = document.querySelector("#span");

console.log(number)
let count = 1;
function increas(){
    number.textContent = count;
    count+=1;
}
function decreas(){
    count-=1;
    number.textContent = count;
}
// end increase
let swiper = new Swiper(".products-slider", {
    loop:true,
    grabeCursor:true,
    spaceBetween: 20,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        500: {
        slidesPerView: 2,
        },
        768: {
        slidesPerView: 3,
        },
        1024: {
        slidesPerView: 4,
        },
    },
});
let swiper4 = new Swiper(".box-container", {
    loop:true,
    grabeCursor:true,
    spaceBetween: 20,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        500: {
        slidesPerView: 2,
        },
        768: {
        slidesPerView: 3,
        },
        1024: {
        slidesPerView: 4,
        },
    },
});

let swiper2 = new Swiper(".slide-box", {
    loop:true,
    grabeCursor:true,
    spaceBetween: 20,
    navigation: {
    // nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        500: {
        slidesPerView: 2,
        },
        768: {
        slidesPerView: 3,
        },
        1024: {
        slidesPerView: 4,
        },
    },
});


let swiper3 = new Swiper(".bloge-wrapper", {
    loop:true,
    grabeCursor:true,
    spaceBetween: 20,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        500: {
        slidesPerView: 2,
        },
        768: {
        slidesPerView: 3,
        },
        1024: {
        slidesPerView: 4,
        },
    },
});


