/* ---------------- */
/* Operators        */
/* ---------------- */

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자
let unary = +a;
console.log('unary: ', unary);

// 이항 연산자
let binary = a + b;
console.log('binary: ', binary);
console.log(Number(a) + Number(b)); // 명시적 형 변환

// 삼항 연산자
let ternary = a >= 10 ? true : false; // 연산자 & 식은 '값'을 반환
console.log('ternary: ', ternary);

let ternary2 = a > 10 ? '사실입니다.' : '거짓입니다.'; // 연산자 & 식은 '값'을 반환
console.log('ternary2: ', ternary2);

// 산술 연산자: 덧셈
let addition = 1 + 2;
console.log(`addition: ${addition}`);

// 산술 연산자: 뺄셈
let subtraction = 10 - 1;
console.log(`subtraction: ${subtraction}`);

// 산술 연산자: 곱셈
let multiplication = 4 * 8;
console.log(`multiplication: ${multiplication}`);

// 산술 연산자: 나눗셈
let division = 10 / 3;
console.log(`division: ${division}`);

// 산술 연산자: 나머지
let remainder = 10 % 3;
console.log(`remainder: ${remainder}`);

if (a % 2 !== 0) {
  console.log('홀수야');
}
console.log('짝수야');

// 산술 연산자: 거듭 제곱
let power = 2 ** 10;
console.log(`power: ${power}`);
console.log(Math.pow(2, 10));

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';
console.log(coercionTypeConversion);

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6];
console.log(onlyWorkDefaultValues); // [1, 2, 3].toString() + [4, 5, 6].toString()
/*  배열 끼리는 더할 수 없음 */

// concat은 legacy
let onlyWorkDefaultValues2 = [1, 2, 3].concat([4, 5, 6]); // concat은 메서드. 배열의 메서드. 배열이 가진 능력. 점 찍고 ()
console.log(onlyWorkDefaultValues2);

let first = [1, 2, 3];
let second = [4, 5, 6];

/* -------------------------------------------------------------------------- */
/*                spread syntax(전개 구문), spread operator(전개 연산자)        */
/* -------------------------------------------------------------------------- */

console.log(...first, ...second); // ... 쓰면 배열이 나열됨
console.log([...first, ...second]); // 배열로 묶으면 다시 배열이 됨

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.
console.clear();

let count = 10;
// console.log(++count);
// console.log(count++);

/* -------------------------------------------------------------------------- */
/*                                  복합 할당 연산자                           */
/* -------------------------------------------------------------------------- */
// count += 1;
// count = count + 1;

// let total = (count % 4) * (count /= 2) + count ** 3; // ?

let total = count % 4;
count = count / 2;
let pow = count ** 3;
total = total * count + pow;

console.log(total);
