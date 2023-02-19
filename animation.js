//scroll-animation-for-the gallery//

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  duration: 3.5,
  opacity: 0,
});

gsap.from("#item-1", { x: -300, scrollTrigger: "#item-1" });

gsap.from("#item-2", { x: +300, scrollTrigger: "#item-2" });

gsap.from("#item-3", { x: -300, scrollTrigger: "#item-3" });
