/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

[1000, 5000, 2500].forEach(function () {});

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사배열 이라 불리는 변수
  let total = 0;

  // for 문
  // for(let i = 0; i < arguments.length; i++){
  //   total += arguments[i];
  // }

  // for..for 문
  // for(let value of arguments){
  //   total += value;
  // }

  // console.log(arguments);

  // arguments => array

  const arr = [...arguments];
  // const arr = Array.from(arguments)
  // const arr = Array.prototype.slice.call(arguments);

  // console.log( arr );

  // forEach
  // arr.forEach(function(price){
  //   total += price;
  // })

  // arr.forEach(price => total += price)

  // reduce
  // const result = arr.reduce(function(acc,cur){
  //   return acc + cur
  // },0)

  // const result = arr.reduce((acc,cur) => acc + cur,0)

  // return arr.reduce((acc,cur) => acc + cur,0)

  // 빌려쓰기
  // Array.prototype.forEach.call(arguments,function(item){
  //   total += item
  // })

  // 태생을 배열로 바꾸기
  arguments.__proto__ = Array.prototype;

  return total;
};

// let calculateTotal2 = (arr) => arr.reduce((acc,cur) => acc + cur,0)

const result = calculateTotal(1000, 5000, 2500, 4000, 2300);

// console.log( result );

// forEach => 배열 순환 값 반환 x
// reduce  => 배열 순환 값 반환 o  숫자/문자/배열/객체
// map     => 배열 순환 값 반환 o  only 배열

// filter  => 배열 순환 값 반환 o  only 배열

const arr = ['이민제', '안재명', '함정민'];

// ['멋쟁이-이민제','멋쟁이-안재명','멋쟁이-함정민']

const mapValue = arr.map(function (item) {
  return '멋쟁이-' + item;
});

console.log(mapValue);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let cb = function (isActive, success, fail) {
  if (isActive) {
    success();
  } else {
    fail();
  }
};

cb(
  false,
  function () {
    console.log('성공입니다!');
  },
  function () {
    console.log('실패입니다..');
  }
);

function movePage(url, success, fail) {
  if (url.includes('https')) {
    success(url);
  } else {
    fail();
  }
}

movePage(
  'https://www.daum.net',
  function (url) {
    console.log(
      `현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`
    );
    // location.href = url;
  },
  function () {
    console.log('잘못된 url을 입력하셨습니다.');
  }
);

/* higher-order function 고차함수

*/
function map(arr, func) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }

  return result;
}

map([1, 2, 3], function (item) {
  return item + '뭘 해도 가능. 함수 안에 들어가지 않고.';
});

// 함수를 인수로 받아 처리함
// 함수를 리턴함
// 커링 function...? 두 번 실행 ()()

function greater(n) {
  return function (m) {
    return n > m;
  };
}

const g = (n) => (m) => n > m;

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression 즉시 함수를 실행하는 표현식
// 함수가 선언됨과 동시에 실행되는 것

// var는 블록 스코프: x
// var는 함수 스코프: o
let IIFE;

// encapsulation (캡슐화) - 객체 지향에서 많이 나오는 개념
// 모듈 프로그래밍 => (import, export)
const MASTER = (function (tiger) {
  // 여기가 파라미터 자리

  //tiger.alert();

  let uuid = 'adkfjlsakdfklsdjfldskjflkasdjf';

  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})(window); // 함수 실행은 여기서. arg 넣을 수 있음.
// window말고 위에서 정의한 cb 이런 것도 넣을 수 있음

/*  */

const people = [
  {
    nickName: 'tiger',
    age: 40,
  },
  {
    nickName: 'beom',
    age: 45,
  },
  {
    nickName: 'seon',
    age: 20,
  },
];

const template = people.reduce(function (htmlCode, cur) {
  return htmlCode + `<div>${cur.nickName} : ${cur.age}</div>`;
}, '');

// document.body.insertAdjacentHTML('beforeend',template)

/* forEach
map
filter
reduce */