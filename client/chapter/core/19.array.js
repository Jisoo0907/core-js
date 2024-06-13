/* -------------------- */
/* Array Type           */
/* -------------------- */

// 객체(Object) : 키(key)를 사용해 식별할 수 있는 값을 담은 집합 - `키:값의 집합`
// 배열(Array) : 순서(index)가 있는 집합 - `값의 집합`

// ※ 배열은 특별한 종류의 객체로 대괄호를 사용해 요소에 접근하는 방식은 객체 문법을 사용.
//   배열은 키(key)가 숫자(index)라는 점이 다름. 즉, 본질은 객체.
//   순서에 따른 제어가 가능하도록 다양한 메서드와 length 프로퍼티를 언어에서 제공.

// 배열 선언

let friends = '지수,유진,수빈,시영,동호'.split(',');

// 배열 요소의 총 갯수

console.log(friends.length);

// 배열 요소 변경

friends[0] = '범쌤';
console.log(friends);

// 배열 요소 추가
let unshift = friends.unshift('한울');
console.log(unshift); // 6 => length 반환함

let push = friends.push('정민');
console.log(push);

// 배열 요소 제거 => 제거된 대상 반환
let shift;
let pop;

// 큐(queue) vs. 스택(stack)
// 큐 FIFO (먼저 들어온 것이 먼저 나간다) ← queue ←
// 스택 LIFO (나중에 들어온 것이 먼저 나간다) ↓ stack ↑

// 배열 요소 순환(loop)
// for 문, for ~ of문
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

for (const j of friends) {
  console.log(j);
}

console.clear();

const iter = friends[Symbol.iterator](); // iterator 객체

console.log(iter);

for (const name of iter) {
  console.log(name);
} // 순환 한 번 하고 나면 다시 안 돌림
// 위 코드 복붙해도 출력 안 됨
// Lazy Evaluation

// 배열 복사
// let copiedArray = [...friends];
// let copiedArray = friends.slice();
let copiedArray = Array.from(friends);

// 다차원 배열
// 행렬을 저장하는 용도

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 행렬의 정중앙에 위치한 요소를 찾으려면?
matrix[1][1];
