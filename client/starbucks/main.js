const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

const h = (t) => (t.style.height = 0);

/* 
동일한 코드
전달 받은 인자 자체를 다른 함수에 넣겠다! 단축 가능
depthList.forEach((item)=>console.log(item));
depthList.forEach(console.log); 
*/

aList.forEach((a) => {
  a.addEventListener('mouseenter', () => {
    const target = a.lastElementChild; // a의 마지막 요소는 div

    // 내가 선택한 depth를 제외한 항목을 0으로 => 코드 복잡
    // 모든 depth 높이를 0 => 그 밑에 코드 읽히면 다시 원하는 애가 나오게
    depthList.forEach(h);

    target.style.height = '100px';
  });

  /*  a.addEventListener('mouseleave', () => {
    depthList.forEach(h);
  }); */
});

header.addEventListener('mouseleave', () => depthList.forEach(h));
// 이렇게 하면 안 됨.
// 히팅 포인트?가 너무 작음
