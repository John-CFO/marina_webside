// scroll-animation-for-the-gallery

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  duration: 3.5,
  opacity: 0,
});

gsap.from("#item-1", { x: -300, scrollTrigger: "#item-1" });

gsap.from("#item-2", { x: +300, scrollTrigger: "#item-2" });

gsap.from("#item-3", { x: -300, scrollTrigger: "#item-3" });

// scroll-animation-for-the-event-list

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  duration: 3.5,
  opacity: 0,
});

gsap.from("#event-animate", { y: +300, scrollTrigger: "#event-animate" });

// back-to-top-funktion

const backToTopButton = document.getElementById("back-to-top");

backToTopButton.addEventListener("click", function () {
  // scrolltop-to 0 when button goes to start
  document.documentElement.scrollTop = 0;
});

// back-to-top-button viewport

window.addEventListener("scroll", function () {
  let button = document.getElementById("back-to-top");
  if (window.scrollY > 900) {
    button.style.display = "block"; // button is in the viewport
  } else {
    button.style.display = "none"; // button is tranceparent
  }
});
