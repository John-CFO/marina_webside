// -----------------scroll-animation-for-the-gallery

// select all navigation links inside list items in the nav element
const navigationLinks = document.querySelectorAll("nav ul li a");

// Loop through each navigation link and attach a click event listener
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function (e) {
    // prevent the default link behavior
    e.preventDefault();

    // get the target section based on the link's href attribute
    const targetSection = document.querySelector(this.getAttribute("href"));

    // scroll smoothly to the target section
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
}

// ------------------------gallery-slide-in-funktion

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  // config.
  duration: 3.5,
  opacity: 0,
});

gsap.from("#item-1", { x: -300, scrollTrigger: "#item-1" }); // config.

gsap.from("#item-2", { x: +300, scrollTrigger: "#item-2" }); // config.

gsap.from("#item-3", { x: -300, scrollTrigger: "#item-3" }); // config.

// ------------------scroll-animation-for-the-event-list

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  // config.
  duration: 3.5,
  opacity: 0,
});

gsap.from("#event-animate", { y: +300, scrollTrigger: "#event-animate" }); // config.

// ----------------------back-to-top-funktion

const backToTopButton = document.getElementById("back-to-top");

backToTopButton.addEventListener("click", function () {
  // scrolltop-to 0 when button goes to start
  document.documentElement.scrollTop = 0;
});

// --------------------back-to-top-button viewport

window.addEventListener("scroll", function () {
  const button = document.getElementById("back-to-top");
  if (window.scrollY > 100) {
    button.style.display = "block"; // button is in the viewport
  } else {
    button.style.display = "none"; // button is tranceparent
  }
});
