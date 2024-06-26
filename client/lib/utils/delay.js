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
import { insertLast } from '../dom/insert.js';
import { isNumber, isObject } from './type.js';
import { xhrPromise } from './xhr.js';

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

/* ---------------------------------- 객체 합성 --------------------------------- */
const defaultOptions = {
  shouldRejected: false,
  data: '성공',
  errorMessage: '알 수 없는 오류',
  timeout: 1000,
};

function delayP(options) {
  let config = { ...defaultOptions }; // 디폴트 먼저 복사.
  // let config = defaultOptions; 참조 복사
  // const config = Object.assign({}, defaultOptions);
  // const config = Object.assign(config, options); options가 config를 덮어쓰는

  if (isNumber(options)) {
    // 넘버야? 그럼 timeout에 넣어줘
    config.timeout = options;
  }

  if (isObject(options)) {
    config = { ...defaultOptions, ...options }; // spread operator
    // 객체의 속성을 풀어서 다른 객체에 복사
    // options 객체 속성이 defaultOptions객체의 속성을 덮어씀
  }

  console.log(config);

  const { shouldRejected, data, errorMessage, timeout } = config;
  // 구조 분해 할당
  // 객체 config의 속성들을 개별 변수에 할당
  // 객체 속성의 이름을 기준으로 해당 속성 값을 추출하여 변수에 할당

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

// delayP(5000);
// delayP(3000); // 숫자만 넣으면 timeout에 적용되도록

// delayP()
//   .then((res) => {
//     //console.log(res);
//     first.style.top = '-100px';
//     second.style.top = '100px';

//     return delayP();
//   })

//   .then((res) => {
//     // console.log(res);
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';

//     return delayP();
//   })
//   .then((res) => {
//     first.style.top = '0px';
//     second.style.top = '0px';
//     //console.log(res);
//   });

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

/* ------------------------------- async await ------------------------------ */

// async 함수는 무조건 Promise object를 반환함
// await 2가지 기능 수행
//  1. result 꺼내오기
//  2. 코드 실행 흐름

async function delayA(data) {
  // async 쓰면 프로미스 객체 반환
  // Top level await 최상위에 async 있다고 가정하고 -(1)

  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('성공');
    }, 2000);
  });

  const result = await p; // p가 결괏값을 담을 때까지 이 아래 코드를 실행하지 않음.
  // 약간 then 같은 기능. 순서를 완전히 보장해줌!
  // 우리가 일반 코드 읽는 순서대로 읽으면 돼서 가독성이 좋음

  // console.log(result);

  // async 붙이니까 지연이 아니라 Promise를 반환함
  return data;
}

/* delayA('지연').then((res) => {
  console.log(res);
});
 */
const data = await delayA('지연'); // await 뒤에 오는 게 프로미스 객체여야 await으로 꺼내 쓸 수 있음
// await를 밖에 꺼내 쓸 수 있음 -(2)
// console.log(data);
/* 
async function 라면끓이기() {
  delayP(); // promise 객체 반환하는 애

  const a = await delayP({ data: '물' });
  console.log(a);

  const b = await delayP({ data: '스프' });
  console.log(b);

  const c = await delayP({ data: '면' });
  console.log(c);

  await delayP();
  console.log('그릇');
}

라면끓이기();
 */

/* ----------------------------------- 포켓몬 ---------------------------------- */
async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/172');

  console.log();

  insertLast(
    document.body,
    `<img src="${data.sprites.other.showdown['front_default']}" alt="" />`
  );
}

getData();
