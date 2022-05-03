window.onload = function () {
    const menubar = document.querySelector(".menu-bar");
    const nav = document.querySelector("#nav");
    const ul = document.querySelector("ul");
    const container = document.querySelector(".container");
    const firstsection = document.querySelector("#first-section");
    const li = document.querySelectorAll("li");
    const a = document.querySelectorAll("ul li a");
    const body = document.querySelector("body");
    const card = document.querySelector("#card");
    const texts = document.querySelector("#first-section .custom-container")
    let index = 0;
    menubar.onclick = function () {
        if (index % 2 === 0) {
            nav.style.display = "block";
            ul.style.display = "inline";
            container.style.display = "flex";
            firstsection.style.background = "#2D3192";
            firstsection.style.zIndex = "1";
            for (let i = 0; i < li.length; i++) {
                li[i].style.borderBottom = "1px solid #666"
                li[i].style.padding = "10px"
            };
            for (let i = 0; i < a.length; i++) {
                a[i].style.color = "white";
            };
            body.style.height = "100vh";
            card.style.display = "inline";
            card.style.width = "100%";
            texts.style.display = "none";
        }
        else{
            nav.style.display = "none"
            firstsection.style.backgroundImage = "url('https://www.simbrella.com/site/assets/files/1040/cover.jpg')";
            firstsection.style.backgroundPosition = "70%";
            firstsection.style.backgroundSize = "cover";
            texts.style.display = "block";
        }
        index++;
    }
}
const header = document.querySelector("header");
const text = document.querySelectorAll("#nav ul li a");
const log1 = document.querySelector("#logo1");
const log2 = document.querySelector("#logo2");
log2.style.display = "none";
window.addEventListener("scroll", (e) =>{
    if(window.scrollY > 100){
        header.style.background = "white";
        for(let i =0; i<text.length; i++){
            text[i].style.color = "black"
        }
        log1.style.display = "none";
        log2.style.display = "block";
    }
    else{
        header.style.background = "none";
        for(let i =0; i<text.length; i++){
            text[i].style.color = "white"
        }
        log1.style.display = "block";
        log2.style.display = "none";
    }
})