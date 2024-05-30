/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;

console.log(typeof String(YEAR));
console.log(typeof (YEAR + ''));

// undefined, null

let days = null;

console.log(days + '');

let friends;
console.log(friends + '');

// boolean

let isClicked = true;

console.log(String(isClicked));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;

console.log(Number(friend));

// null

let money = null;

console.log(Number(money));

// boolean
// true = 1, false = 0

let isMarried = false;

console.log(Number(isMarried));

// string

let num = '100' * 1;

console.log(typeof num);
console.log(+num);
console.log(num / 1);

// numeric string

const width = '120.5px';

console.log(width);
console.log(parseInt(width));
console.log(parseInt('123abc')); // 123
console.log(parseInt('abc123')); // NaN

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friend));
console.log(Boolean(0));
console.log(Boolean(' '));
console.log(Boolean('0'));
