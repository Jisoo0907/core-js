// function delay(a, timeout = 1000) {
//   setTimeout(a, timeout); // timeout 지나면 a를 실행시킴(함수 본문)
// }
// // a에 함수 본문이 넘어감

// delay(() => {
//   console.log('hi');
// }, 1000);
// 두 개의 인수를 던짐 => a와 timeout에 넘어감.
// 함수 본문을 a에 전달하는 것
// timeout은 default가 있어서 안 줘도 됨
// 함수는 값이라 던져질 수 있는 것

import { getNode } from '../dom/getNode.js';

function delay(callback, timeout = 500) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

/* delay(() => {
  first.style.top = '-100px';
  second.style.top = '100px';
  delay(() => {
    first.style.transform = 'rotate(360deg)';
    second.style.transform = 'rotate(-360deg)';
    delay(() => {
      first.style.top = '0px';
      second.style.top = '0px';
    });
  });
}); */

/* ---------------------------------- 콜백 지옥 --------------------------------- */
// 어디서 뭘 실행하는 지 알기 어려움
// 타이머에 의존 => setTimeout의 치명적인 약점: 무조건 1초가 아님.
// 콜스택에서 비워지지 않으면 절대 실행되지 않음
// 이런 코드들이 계속 안에 쌓임 => 콜백 지옥
/* delay(() => {
  first.style.top = '-100px';
  delay(() => {
    first.style.transform = 'rotate(360deg)';
    delay(() => {
      first.style.top = '0px';
      second.style.top = '0px';
    });
    second.style.transform = 'rotate(-360deg)';
  });
  second.style.top = '100px';
}); */

/* --------------------------------- promise -------------------------------- */
const shouldRejected = false;

const p = new Promise((성공, reject) => {
  // 생성자 함수. 무조건 생성해서 써야 함.
  // 매개변수라 이름 바꿔도 됨. 단, 순서는 첫 번째가 성공.
  if (!shouldRejected) {
    성공('성공!');
  } else {
    reject('실패!');
  }
}); // 내부적으로 콜백 함수 두 개를 받음
// resolve와 reject는 모두 함수

function delayP(timeout = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve('성공!');
      } else {
        reject('실패!');
      }
    }, timeout);
  });
}

// console.log(delayP()); // <Promise> 객체 반환하게끔

delayP()
  .then((res) => {
    //console.log(res);
    first.style.top = '-100px';
    second.style.top = '100px';

    return delayP();
  })

  .then((res) => {
    // console.log(res);
    first.style.transform = 'rotate(360deg)';
    second.style.transform = 'rotate(-360deg)';

    return delayP();
  })
  .then((res) => {
    first.style.top = '0px';
    second.style.top = '0px';
    //console.log(res);
  });

/*   이렇게도 가능
delayP()
  .then(console.log)
  .then(console.log)
  .then(console.log) 
  */

/* ---------------------------- promise chaining ---------------------------- */
/* console.log(
  delayP().then().then().then().then().then().then().then().then().then().then()
);
 */
