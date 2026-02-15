// Loader
window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
});

// Navbar Scroll
window.addEventListener("scroll", () => {
  document.querySelector(".header")
  .classList.toggle("scrolled", window.scrollY > 50);
});

// Reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

// Counter
document.querySelectorAll(".counter").forEach(counter => {
  const update = () => {
    const target = +counter.dataset.target;
    const current = +counter.innerText;
    const increment = target / 200;

    if(current < target){
      counter.innerText = Math.ceil(current + increment);
      setTimeout(update, 10);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

// Lightbox
document.querySelectorAll(".zoomable").forEach(img => {
  img.addEventListener("click", function(){
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightboxImg").src = this.src;
  });
});

document.getElementById("lightbox").onclick = function(){
  this.style.display = "none";
};
