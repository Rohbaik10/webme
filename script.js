// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", function () {

  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.style.background = "#020617";
    nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.4)";
  } else {
    nav.style.background = "#020617";
    nav.style.boxShadow = "none";
  }

});


// SCROLL ANIMATION
const elements = document.querySelectorAll("article, aside, .card");

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

});

elements.forEach(el => observer.observe(el));


// SMOOTH SCROLL
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior:"smooth"
      });
    }

  });

});