/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

/* console.log(resultX);
console.log(resultY);
console.log(resultZ); */

// 함수 선언 → 화살표 함수 (표현)식
// ...args => rest parameter
let calcAllMoney = (...rest) => {
  // a를 제외한 나머지만 모임
  //let total = 0;

  // <for문 사용하여 합계를 result에 담기>
  /*  for (let i = 0; i < rest.length; i++) {
    total += rest[i];
  } */

  // <for...of문>
  /*  for (let value of rest) {
    total += value;
  } */

  // <forEach>
  /* rest.forEach(function (item) {
    total += item;
  }); */

  // <forEach => arrow function으로>
  // rest.forEach((item) => (total += item));

  // <reduce>
  const result = rest.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);

  // <reduce => arrow function>
  // const result = rest.reduce((acc, cur) => acc + cur, 0);

  return result;
  // reduce 제외한 거에서는 total 반환
};

// <calc 함수 줄이기>
// const calc = (...rest) => rest.reduce((acc, cur) => acc + cur, 0);

const result = calcAllMoney(1000, 5000, 4500, 13000);

console.log(result);

/* 함수 표현식에서도 사용 가능
function sum(...args) {

}

const sum2 = function (...args) {

} */

// 화살표 함수와 this

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
/* let pow = (numeric, powerCount) => {
  let result = 1;

  for (let i = 0; i < powerCount; i++) {
    result *= numeric;
  }
  return result;
}; */

// 표현식

// const pow = (numeric,powerCount) => {

//   return Array(powerCount).fill(null).reduce((acc)=>{
//     return acc *= numeric
//   },1)

// }


// 표현식을 더 줄이기
const pow = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => (acc *= numeric), 1);


// repeat(text: string, repeatCount: number): string;
/* let repeat = (text, repeatCount) => {
  let result ='';

  for(let i = 0; i < repeatCount; i++) {
    result += text;
  }
  return result;
} */

/*   const repeat = (text, repeatCount)=>{
    return Array(repeatCount).fill(null).reduce((acc)=>{
      return acc + text
    },'')
  } */

// 한 줄로
const repeat = (text,repeatCount)=> Array(repeatCount).fill(null).reduce((acc)=> acc + text,'');


repeat('안녕👋', 3); // '안녕👋안녕👋안녕👋'
/* -------------------------------------------------------------------------- */
/*                              자바스크립트 함수는 양면의 얼굴                 */
/* --------------------------------------------------------------------------*/
// 생성자 방식으로 함수 호출 => 무조건 객체 return

function Button(text) {
  // 값을 내보내지 않아도 저절로 객체 리턴
  this.content = text;
  // this는 나를 생성한(호출한) 대상을 가리킴
}

// const a = button('more');

const b = new Button('more'); // 객체 대량 생산 시 사용. 여러 개 찍어내듯이 만들 때.

/* new String();
new Number();
new Object();
new Array(); 전부 객체 튀어나옴*/

// 내가 어떤 용도로 만든 지 헷갈리지 않나? => 규칙 정하자!
// 생성자 함수는 앞을 대문자로 쓰자

// this : 나를 호출한 대상을 this

/* const user = {
  name: '이지수',
  sayHi: function () {
    console.log(this);
  },
  sayHi2: () => { // this를 찾지 못함
    console.log(this);
  },
  // concise method
  sayHi3() { // constructor 내장x
    // 일반 함수처럼 작용
    console.log(this);
  },
}; */

const user = {
  name: '이지수',
  total: 0,
  grades: [90, 80, 70],
  totalGrades() {
    this.grades.forEach((item) => {
      this.total += item;
    });
    return this.total;
  },
};
// 일반 함수
// - constructor 내장 (concise method는 예외)
// - this : 나를 호출한 대상을 this
// - 객체의 메서드로 사용이 많이 됨 => this를 찾기 위해

// 화살표 함수
// - constructor 비내장
// - this : 바인딩 하지 않음 -> 상위 컨텍스트에서 찾음.
// - 메서드 안의 함수를 작성해야 할 때 // 내 상위 this를 가져오기 때문에
