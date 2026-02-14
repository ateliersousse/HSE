// ===== MENU MOBILE =====
function toggleMenu(){
document.querySelector("nav").classList.toggle("active");
}

// ===== CONTACT POPUP =====
function toggleContact(){
document.getElementById("contact-popup").classList.toggle("show");
}

// ===== SCROLL ANIMATION =====
const cards = document.querySelectorAll(".card");

function revealCards(){
cards.forEach(card=>{
const position = card.getBoundingClientRect().top;
if(position < window.innerHeight - 100){
card.classList.add("show");
}
});
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);
