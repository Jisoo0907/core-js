/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

const nav = getNode('nav');

function handleClick(e) {
  const target = e.target;
  const name = target.dataset.name;

  if (target.tagName !== 'LI') return; // 정확히 li만 조회하기

  // console.log(e.target); // 여백 클릭하면 ul이 뜸

  /* 클래스를 사용한 위임 ---------------- */
  // if (target.matches.contains('about')) {
  //   console.log('about!');
  // }
  // if (target.classList.contains('about')) {
  //   console.log('home!');
  // }
  // if (target.classList.contains('about')) {
  //   console.log('contact!');
  // }
  /*                                        */

  /* 속성을 사용한 위임 ------------------ */ // 범쌤 픽
  // console.log(target.dataset.name); // 범쌤은 객체 안에서만 찾으니 빠를 거라고 생각
  // console.log(target.getAttribute('data-name'));
  // console.log(attr(target, 'data-name'));

  // if (name === 'about') console.log('about!');
  // if (name === 'home') console.log('home!');
  // if (name === 'contact') console.log('contact!');
  /*                                      */

  /* 노드를 사용한 위임 ------------------ */
  // console.log(target.textContent.includes('ABOUT'));
  // 위 방식은 ul 찍었을 때도 true 뜸
  if (target.textContent.includes('ABOUT')) console.log('about!!');
  if (target.textContent.includes('HOME')) console.log('home!!');
  if (target.textContent.includes('CONTACT')) console.log('contact!!');
  /*                                      */
}

nav.addEventListener('click', handleClick);
