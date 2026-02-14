// MENU TOGGLE
const menuToggle=document.getElementById("menuToggle");
const sideMenu=document.getElementById("sideMenu");

menuToggle.onclick=()=>sideMenu.classList.toggle("active");

document.addEventListener("click",(e)=>{
if(!sideMenu.contains(e.target) && !menuToggle.contains(e.target)){
sideMenu.classList.remove("active");
}
});

// HERO & SERVICES ANIMATION
const hero=document.querySelector(".hero");
const services=document.querySelectorAll(".service");
const serviceTitle=document.querySelector(".services h2");

window.addEventListener("load",()=>{
hero.classList.add("show");
serviceTitle.parentElement.classList.add("show");
services.forEach(s=>s.classList.add("show"));
});

// LIGHTBOX
const images=document.querySelectorAll(".zoomable");
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");

images.forEach(img=>{
img.onclick=()=>{
lightbox.style.display="flex";
lightboxImg.src=img.src;
}
});
lightbox.onclick=()=>lightbox.style.display="none";

// CONTACT POPUP
const contactBtn=document.getElementById("contactBtn");
const contactPopup=document.getElementById("contactPopup");

contactBtn.onclick=()=>contactPopup.style.display="flex";
contactPopup.onclick=()=>contactPopup.style.display="none";
