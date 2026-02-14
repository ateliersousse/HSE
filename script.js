// Hero reveal
const hero=document.querySelector(".hero");
window.addEventListener("load",()=>{
    hero.classList.add("show");
});

// Scroll reveal
const sections=document.querySelectorAll(".section");
const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{threshold:0.2});

sections.forEach(sec=>observer.observe(sec));
cards.forEach(card=>observer.observe(card));

// Mobile menu toggle
const menuToggle=document.getElementById("menuToggle");
const nav=document.getElementById("nav");

menuToggle.addEventListener("click",()=>{
    nav.classList.toggle("active");
});
