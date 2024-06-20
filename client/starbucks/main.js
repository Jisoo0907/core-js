const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

/* global gsap */

aList.forEach((a) => {
  const target = a.lastElementChild;

  const tl = gsap
    .timeline({ paused: true })
    .to(target, { height: 100, ease: 'power3.inOut' }); // timeline
  // 가속도가 정해져 있어서 약간 끈적?

  a.addEventListener('mouseenter', () => tl.play());
  a.addEventListener('mouseleave', () => tl.reverse());
});
