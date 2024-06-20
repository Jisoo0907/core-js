/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

const nav = getNode('nav');

function handleClick(e) {
  const target = e.target;
  const name = target.dataset.name;
  const li = target.closest('li'); // ul위에는 li가 없으니까 ul 클릭 시 null

  if (!li) return; // ul 거르기

  // console.log(e.target); // 여백 클릭하면 ul이 뜸

  /* 클래스를 사용한 위임 ---------------- */
  // if (li.matches.contains('about')) {
  //   console.log('about!');
  // }
  // if (li.classList.contains('about')) {
  //   console.log('home!');
  // }
  // if (li.classList.contains('about')) {
  //   console.log('contact!');
  // }
  /*                                        */

  /* 속성을 사용한 위임 ------------------ */ // 범쌤 픽
  // console.log(li.dataset.name); // 범쌤은 객체 안에서만 찾으니 빠를 거라고 생각
  // console.log(li.getAttribute('data-name'));
  // console.log(attr(li, 'data-name'));

  // if (name === 'about') console.log('about!');
  // if (name === 'home') console.log('home!');
  // if (name === 'contact') console.log('contact!');
  /*                                      */

  /* 노드를 사용한 위임 ------------------ */
  // console.log(target.textContent.includes('ABOUT'));
  // 위 방식은 ul 찍었을 때도 true 뜸
  if (li.textContent.includes('ABOUT')) console.log('about!!');
  if (li.textContent.includes('HOME')) console.log('home!!');
  if (li.textContent.includes('CONTACT')) console.log('contact!!');
  /*                                      */
}

nav.addEventListener('click', handleClick);

/* const navList = document.querySelectorAll('nav li');

navList.forEach((li, i) => {
  li.addEventListener('click', () => {
    console.log(i);

    switch (i) {
      case 0:
        console.log('about');
        break;
      case 1:
        console.log('home');
        break;
      case 2:
        console.log('contact');
        break;
    }
  });
});
 */
