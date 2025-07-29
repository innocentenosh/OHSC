// Smooth scroll (optional since scroll-behavior: smooth in CSS)
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute("href"));
      section.scrollIntoView({ behavior: "smooth" });
    });
  });


// Looping Typewriter Effect
const text = "I'm Innocent";
let i = 0;
const speed = 100;
const delay = 1500; // pause before restart
const target = document.getElementById("typewriter");

function typeWriter() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      target.innerHTML = "";
      i = 0;
      typeWriter(); // restart
    }, delay);
  }
}

window.addEventListener("load", typeWriter);
