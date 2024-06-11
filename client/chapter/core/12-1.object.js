/* --------- */
/* Object    */
/* --------- */

/* global isObject */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'user-09077',
  name: 'jisoo',
  email: 'jisoo@naver.com',
  isSignIn: false,
  permission: 'paid', // paid | free
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);
console.log(authUser.permission); // getter

console.log((authUser.permission = 'free')); // setter

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log(authUser['uid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']);
console.log((authUser['permission'] = 'allPass'));

/* 실습 */

Object.prototype.nickName = '호랑이'; // 훼손

// 객체 안에 키가 있는 지 확인하는 방법

// 1. in 문 (조건 비교 시 많이 사용)
console.log('uid' in authUser); // true

for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    console.log(key);
    console.log(authUser[key]); // 점 표기법은 안됨
    console.log(authUser.key); // undefined
  }
}

// 2. 객체의 key만을 모아서 배열을 반환하는 메서드 Object.keys()
const keyList = Object.keys(authUser);

console.log(keyList);

// 3. 객체의 value 만을 모아서 배열을 반환하는 메서드 Object.values()

const valueList = Object.values(authUser);

console.log(valueList);

console.clear();

function getPropertiesList(obj) {
  let result = [];

  for (let key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      result.push(key);
    }
  }
  return result;
}

getPropertiesList(authUser); // ['uid', 'name', 'email', 'isSignIn', 'permission']

// 4. 프로퍼티 제거(remove) or 삭제(delete)
// 제거 - 비워둠, 삭제 - 메모리까지 날림

function removeProperty(obj, key) {
  if (isObject(obj)) {
    obj[key] = null;
  }
}

removeProperty(authUser, 'name'); // authUser.name = null;

function deleteProperty(obj, key) {
  if (isObject(obj)) {
    delete obj[key];
  }
}

deleteProperty(authUser, 'name'); // undefined

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'tel'; // phone | tel

function createUser(name, age, phone) {
  return {
    name: name,
    age: age,
    [calculateProperty]: phone,
  };
}

createUser('아리수', 26, '010-6546-6376'); // {name: '지수', age: 23, tel: '010-6546-6376'}

// authentication vs authorization

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name, //  name: name
  email,
  authorization,
  isLogin,
}; // 얘를 한 줄로 표기 시 객체 구조 분해 할당이랑 유사

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

const a = {};

isEmptyObject(student); // key가 하나라도 있으면false

/* ------------------------------------------- */
/* 배열 구조 분해 할당 destructuring assignments */
/* ------------------------------------------- */
// 순서를 바꿀 수 없음.

const arr = [10, 100, 1000, 10000];

/* 
const a0 = arr[0];
const a1 = arr[1];
const a2 = arr[2];
const a3 = arr[3]; 
*/

// const [a0, a1, a2, a3] = arr;
const [a0, ...list] = arr; // rest에 [100, 1000, 10000]

list[0]; // 이렇게 써도 됨

const [aa] = list;

for (let [key, value] of Object.entries(authUser)) {
  console.log(key, value);
  /* console.log(keyValue[0]); // key만 나옴
  console.log(keyValue[1]); // value만 나옴 */
}

/* const spanList = document.querySelectorAll('span');

const first = spanList[0]; 매번 이렇게 쓰기 힘드니까 구조 분해 할당 사용
const second = spanList[1]; */

// const first = document.querySelector('.first');
// const second = document.querySelector('.second');

const [first, second] = document.querySelectorAll('span');

/* -------------------------------------------- */
/* 객체 구조 분해 할당 destructuring assignments  */
/* --------------------------------------------- */

const salaries = {
  함정민: 95,
  지유진: 110,
  이진용: 15,
  한상학: 300,
};
// 값 꺼내기
// console.log(salaries.이진용);
// 근데 위 값을 계속 꺼내 쓰고 싶다면?
// const 이진용 = salaries.이진용;
// 구조 분해 안 하고 꺼내올 시
// console.log(이진용);

const { 함정민: 함, 지유진, 한상학, 이진용, 이지수 = 1000 } = salaries;
// 근데 얘는 const salaries를 못 이김. 함정민: 함 = 100해도 95가 출력됨
// key를 뽑긴 했지만 난 함으로 바꿔서 사용할 것임!
console.log(함); // 95

console.log(이지수); // 선언된 적 없는 변수 찾음 => undefined 반환
// 구조분해 할당 할 때 기본 값을 설정하면 쓸 수 있음

function createUserObject(obj) {
  const { name: n, age: a, gender: g, job: j, ...rest } = obj; // 여기서 기본값 설정 가능 job = '홈프로텍터'
  // 단축어로 설정하고 싶으면 이렇게 해

  return {
    // 새로운 객체 반환
    name: n,
    age: a,
    gender: g,
    job: j, // job: undefined 나옴
  };
}

const data = {
  name: 'beom',
  age: 40,
  gender: 'male',
  job: '개발자', // 객체에 보낼 때 얘를 안 주면
  address: '서울시 중랑구', // 얘랑 아래 코드만 console.log(rest)에 출력됨
  tel: '010-666....',
};

const person = createUserObject(data);

const {
  userName,
  age,
  gender,
  job,
  address = '서울시 중랑구',
  tel,
} = {
  userName: 'beom',
  age: 40,
  gender: 'male',
  job: 'developer',
  address: '서울시 중랑구',
  tel: '010-716....',
};

// const { acos } = Math;

// acos();

// const { alert } = window;

// alert();

// function createUserObject({name, age, gender, job:j = '홈프로텍터'}) {

//   //   const { name: n, age: a, gender: g, job: j, ...rest } = obj;

//     return {
//       // 새로운 객체 반환
//       name: n,
//       age: a,
//       gender: g,
//       job: j, // job: undefined 나옴
//     };
//   }
