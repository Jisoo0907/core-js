/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

let empty = null;
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태

let undef;
console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const double = 'hello'; // string literal
const single = 'hello';
const backtick = `hello`;
console.log(
  `double ${typeof double}, single ${typeof single}, backtick ${typeof backtick}`
);

/* -------------------------------------------------------------------------- */
/*                      String 생성자 함수를 사용하여 문자열 객체를 만든다.                      */
/* -------------------------------------------------------------------------- */
/* 자바스크립트가 내장한 String이라는 함수 */
const str = new String('hello'); // constructor function
console.log(str);

// 4. 정수, 부동 소수점 숫자(길이 제약)

const integer = 150; // number literal
/* 사실은 const integer = new Number(150); => 또브젝트 */
const floatingPointNumber = 10.5;

console.log(typeof integer);
console.log(typeof floatingPointNumber);
console.log(typeof NaN);
console.log(typeof Infinity);

const num = new Number(200);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigInt = 123n;
console.log(typeof bigInt);

// const b = BigInt(111); 이런 식으로도 가능

// 6. 참(true, yes) 또는 거짓(false, no)
const isActive = true;
console.log(typeof isActive);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.clear();

const obj = {
  // object literal
  name: 'tiger',
};
console.log(typeof obj);

const object = new Object({ name: 'seonbeom' }); // constructor function
console.log(typeof object);

// 8. 고유한 식별자(unique identifier)

const id = Symbol('uuid');
const id2 = Symbol('uuid');
// 둘은 완전히 다름
console.log(typeof id);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object

const user = {
  name: 'lee',
  age: 20,
  sum: function (a, b) {
    a + b;
  },
  sayHi: function () {
    // 1: normal function
    return 'hello';
  },
  sayHi2: () => {
    // 2: arrow function
    return this;
  },
  sayHi3() {
    // 3: concise method
    return this;
  },
};

// Array

const newArray = new Array(1, 2, 3); // constructor function
const newArray2 = new Array(2);
const arr = [10, 100, 1000, undefined, 'hello', { name: 'tiger' }];
console.log(typeof arr);

// function

function 더하기(a, b) {
  console.log(a + b);
}
더하기(3, 4);

function 붕어빵틀(재료) {
  return `따끈 따끈 맛있는 ${재료} 맛 붕어빵`;
}

// this
