/* const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const tiger = async () => {
  const response = await fetch(ENDPOINT);

  const data = await response.json();

  console.log(data);
};

tiger(); */

// fetch(ENDPOINT); // 근데 얘는 Promise 나옴. => await 쓰면 되겠군!
// fetch는 떨어진 데이터를 알아서 parse로 해석해서 내보내줌
/* const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const tiger = async () => {
  const response = await fetch(ENDPOINT);
  let data;

  if (response.ok) {
    data = await response.json();
  }
  return data;
}; */

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

// fetch  => promise

const tiger = async (url) => {
  const response = await fetch(url);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

const result = await tiger(ENDPOINT);

console.log(result.data);

// IIAFE

// (async function(){

// })()

// 왜 promise가 떨어지는가
// async 함수는 무 조 건 promise object를 반환함
