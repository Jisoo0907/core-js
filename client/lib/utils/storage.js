import { isString } from './type.js';

const { localStorage: storage } = window; // window꺼 빼옴

/* const user = {
  name: 'jisoo',
  age: 40,
  gender: 'female',
  email: 'jisoo@naver.com',
}; */

/* 데이터 넣기 */
// localStorage.setItem('user', JSON.stringify(user));

/* 데이터 가져오기 */
// const data = JSON.parse(localStorage.getItem('user'));

export function setStorage(key, value) {
  storage.setItem(key, JSON.stringify(value));

  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve();
    } else {
      reject();
    }
  });
}

// setStorage('user', user);
// 설정 후에 코드가 나와야 되는데 보장 x => Promise 사용

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve(JSON.parse(storage.getItem(key))); // 해석이 완료된 결과를 실어줌
    } else {
      reject();
    }
  });
}

/* const data = await getStorage('user');
console.log(data); */

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  });
}
