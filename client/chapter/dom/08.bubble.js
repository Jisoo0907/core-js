/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', (e) => {
  // console.log('target:', e.target); // 가장 먼저 만나는 대상을 수집함
  // console.log('currentTarget:', e.currentTarget);
  // console.log('this: ', this); // 일반 함수로 바꾸면 잘 나옴

  console.log('%c section', 'color:orange');
});

article.addEventListener('click', (e) => {
  console.log('%c article', 'color:hotpink');
});

p.addEventListener('click', (e) => {
  console.log('%c p', 'color:dodgerblue');
});

/* 캡처링 ----------------------------------------------------------------- */
