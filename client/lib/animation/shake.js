export function shake() {
  gsap.to('#nameField', {
    duration: 0.1,
    x: -10,
    repeat: 5,
    yoyo: true,
  });
}
