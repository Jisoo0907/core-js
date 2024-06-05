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

// 좋은 함수 작성 여건

// 1. 함수의 이름을 잘 지어야 한다. (동사) / 가독성 => 읽었을 때 바로 기능을 알 수 있다.
// 3. 하나의 기능만을 수행해야 한다.

// 2. 전역의 오염을 막는다.

// 4. 재사용성이 좋아야 한다. ( 매개변수 => 유연한 함수 )

// rem(pxValue: number|string, base: number):string;

function rem(pxValue, base = 16) {
  if (!pxValue) {
    // pxValue가 undefined돼서 falsy 값이 되면 이 조건식이 true가 되니까 아래 코드가 실행됨
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

// setStyle은 undefined를 반환함. return해주지 않으니까.
// 우리는 값 setting을 목적으로 하니까 값을 반환하지 않아도 됨.

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

function getStyle(node, prop) {
  if (typeof node === 'string') node = document.querySelector(node);

  if (typeof prop !== 'string')
    throw new Error('getStyle 함수의 두 번째 인수는 문자 타입이어야 합니다.');

  return getComputedStyle(node)[prop];
}

const h1FontSize = getStyle('.first', 'fontSize'); // 32px
// console.log(h1FontSize);

/* 
1. function name
2. 함수 실행부(argument) 미리 작성 해보기(getStyle(a, b)이렇게 넣고 이런 결과를 기대해야지!)
3. parameter 설정하기 용이해짐
4. return value
5. validation
6. Test Driven Development(TDD)
 */

function css(node, prop, value) {
  /*  if (!value) {
    // getter
    return getStyle(node, prop);
  } else {
    // setter
    return setStyle(node, prop, value);
  } */

  return !value ? getStyle(node, prop) : setStyle(node, prop, value);
}

// const css2 = (node,prop,value) => !value ? getStyle(node,prop) : setStyle(node,prop,value);

css('.first', 'color', 'red'); // setter

css('.first', 'color'); // getter
