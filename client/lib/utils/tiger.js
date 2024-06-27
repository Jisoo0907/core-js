const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
/*

const tiger = async () => {
  const response = await fetch(ENDPOINT);
  // fetch는 네트워크 요청 보내고, 그 응답을 나타내는 프로미스 반환
  // await는 fetch가 완료될 때까지 기다리며, 완료되면 응답 객체 반환

  const data = await response.json();
  // 응답 객체의 json 메서드를 호출하여 응답 본문을 JSON 형식으로 변환
  // await는 이 변환이 완료될 때까지 기다림

  console.log(data); // ENDPOINT에서 가져온 사용자 정보 리스트
}; 

tiger(); // tiger 비동기 함수 호출 */

// fetch(ENDPOINT); // 근데 얘는 Promise 나옴. => await 쓰면 되겠군!
// fetch는 떨어진 데이터를 알아서 parse로 해석해서 내보내줌
/* const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const tiger = async () => {
  const response = await fetch(ENDPOINT);
  let data;

  if (response.ok) {
    // 응답이 성공적인지 확인하는 속성
    // 응답 상태 코드가 200-299 사이면 true 반환
    // 응답이 성공적일 때만 JSON 변환 시도

    data = await response.json();
    // 응답 본문을 JSON 형식으로 변환
  }
  console.log(data);
  return data;
};

tiger(); */

// fetch  => promise

/* const tiger = async (url) => {
  const response = await fetch(url);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

const result = await tiger(ENDPOINT);

console.log(result.data); */

/* // IIAFE

(async function () {
  //
})(); */

// 왜 promise가 떨어지는가
// async 함수는 무 조 건 promise object를 반환함

/* -------------------------------- Fetch API ------------------------------- */

// fetch  => promise

/* const tiger = async (method, url, body) => {
  const response = await fetch(url, {
    method, // short hand 표기법
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
}; */
/* const result = await tiger('POST', ENDPOINT, { name: 'tiger' });

console.log(result); */

/* -------------------------------- DELETE 통신 ------------------------------- */
// 제거할 때는 몇 번째 데이터를 제거할 건데? => id값 필요
/* const result = await tiger('DELETE', `${ENDPOINT}/3`);

console.log(result); */

// 매번 method, url, body 전달해야 되는 것 귀찮. => 객체로 전달하자!
/* --------------------------------- 객체로 전달 --------------------------------- */

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const tiger = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};
/*
const result = await tiger({ url: ENDPOINT });

console.log(result); */

/* ----------------------- tiger.get()형식으로 편하게 사용하고 싶음 ---------------------- */

tiger.get = (url, options) => {
  return tiger({
    url,
    ...options,
  });
};

tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options,
  });
};

tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

tiger.patch = (url, body, options) => {
  return tiger({
    method: 'PATCH',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

/* ------------------------------- 위 함수 사용해보기 ------------------------------- */
// main.js에서 함
