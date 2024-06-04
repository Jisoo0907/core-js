/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

/* console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
console.log('총 합 = ', 9000 - 2500 + 5000 + 11900); */

function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0;
}

// 함수 선언

function calcPrice(
  priceA,
  priceB,
  priceC = getRandomValue(),
  priceD = getRandomValue()
) {
  // let priceA = 1000; 가 있는 것과 동일!
  // let priceB = 3000;
  /* 1. if (priceC === undefined) {
    // validation
    priceC = 0;
  } */
  /* 2. if (!priceC) priceC = 0; // undefined가 조건식에 들어가면 false 되니까.
  console.log(priceA + priceB + priceC + priceD); */
  // 3. priceC ||= 0;
  //4. priceC ??= 0;
  return priceA + priceB + priceC + priceD;
}

// 함수 호출
const result = calcPrice(1000, 3000);

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;

function rem(pxValue, base = 16) {
  if (!pxValue) {
    throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값입니다.');
  }
  if (typeof pxValue === 'string') {
    //?
    pxValue = parseInt(pxValue, 10);
  }

  if (typeof base === 'string') {
    base = parseInt(base, 10);
  }
  return pxValue / base + 'rem';
}

/* 테스트 과정 => Test Driven Development */
console.assert(rem(20) === '1.25rem');
console.assert(rem('25px') === '1.5625rem');
console.assert(rem('30px', 10) === '3rem');

// css(node: string, prop: string, value: number|strung) : string;
//let css;

/* const first = document.querySelector('.first');

// 점 표기법: prop: "blue"이렇게 들어가버림
// 점 - 변수로 사용 x
// 대괄호 - 변수로 사용 o
function setStyle(node, prop, value) {
  node.style[prop] = value;
}

setStyle(first, 'color', 'blue'); */

function setStyle(node, prop, value) {
  // 문자가 아닐 수도 있어서 이 함수는 위험

  if (typeof node === 'string') node = document.querySelector(node);

  if (typeof prop !== 'string') {
    throw new Error('setStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }

  if (!value) throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.');
  node.style[prop] = value; // 왜 !value가 value가 없는 상황?
}

setStyle('.first', 'color', 'blue'); // 각각의 값이 문자가 아닐 때, 값이 없을 때 가정

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 style 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
