import { xhrPromise } from './lib/index.js';

// xhrPromise.get('https://jsonplaceholder.typicode.com/users').then(console.log);
/* const data = await xhrPromise // top level await은 근데 지양해주기. 그래서 아래 2번 코드와 같이 사용.
  .get('https://jsonplaceholder.typicode.com/users')
  .then(console.log);
console.log(data); */

/* 2번 코드 */
/* async function getData() {
  const data = await xhrPromise // top level await은 근데 지양해주기.
    .get('https://jsonplaceholder.typicode.com/users');

  console.log(data);
}

getData(); */

/* 3번 코드 */
/* arrow function */
const getData = async () => {
  // 함수 앞에다 async 붙여줘야 함
  const data = await xhrPromise // top level await은 근데 지양해주기.
    .get('https://jsonplaceholder.typicode.com/users');

  data.forEach((item) => {
    console.log(item.name);
  });
  // console.log(data);
};

// getData();
