/* global gsap */

export function shake(t) {
  const animation = gsap.to(t, {
    // gsap은 값 자체를 반환함(트윈 반환 - 객체 반환)
    // 그럼 값을 담아놓고 재생시킬 수 있겠네!=> play, pause, reverse 등
    duration: 0.1,
    x: -10,
    repeat: 5,
    yoyo: true,
  });

  return animation; // 그래서 해당 참조 대상을 반환함
}

// shake().restart();
