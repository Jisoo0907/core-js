/* ---------------------------------------------------------------------- */
/* Iterable Object                                                        */
/* ---------------------------------------------------------------------- */

// 배열을 일반화 한 객체
// for-of 문을 사용할 수 있는 객체
// Symbol.Iterator 메서드가 필히 구현되어야 함
// Symbol.Iterator 메서드는 이터레이터 객체를 반환하며
// 이터레이터 객체는 next() 메서드를 가짐 ({ done: Boolean, value: any } 타입 반환)

const arr = '1 2 3 4 5 6'.split(' ');
// 이 배열은 객체가 아니라 iterable 요소

const iter = arr[Symbol.iterator]();
// arr 안에 내장된 걸 호출했을 때 비로소 iterable 객체

/* for (const a of iter) {
  console.log(a);
} */

console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);

// 위와 동일한 기능을 하는 함수 구현

const range = {
  from: 1,
  to: 5,
  length: 5,
  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;

    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

const a = range[Symbol.iterator]();

a.next();
a.next();
a.next();

/* -------------------------------------------------------------------------- */
/*                             generator function                             */
/* -------------------------------------------------------------------------- */
function* gen() {
  // function* 키워드 사용 -> 제너레이터 함수 정의
  // 제너레이터 함수는 호출될 때 실행되지 않고, 대신 제너레이터 객체를 반환함
  yield 1; // 제너레이터 함수가 실행을 일시 중단하고 1 반환
  yield 2;
  yield 3;
}

const gene = gen(); // gen 제너레이터 함수 호출, 제너레이터 객체 생성
// gene 변수에 저장
// 제너레이터 객체는 next 메서드를 사용하여 제너레이터 함수의 실행 제어
console.log(gene.next()); // gene.next()호출 -> 제너레이터 함수의 실행 제어
// 현재 위치에서 다음 yield 표현식까지 실행함
// next 메서드는 {value:X, done:Y}형태의 객체 반환함
// value는 yield 된 값, done은 제너레이터 함수가 끝났는지를 나타내는 불리언 값
console.log(gene.next());
console.log(gene.next());
// 까지 하고 다음 부터는 undefined 나옴

const customIter = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const a of customIter) {
  console.log(a);
}

// 일반 객체는 next를 호출할 수 없음

// 유사배열 vs. 이터러블
// - 유사배열 : 인덱스 키와 length 속성을 가진 객체
// - 이터러블 : Symbol.Iterator 메서드를 가지는 객체

function* idGenerator() {
  // let id = 1;
  while (true) {
    yield `user-${crypto.randomUUID}`;
  }
}

const id = idGenerator();

// generator
// 1. 일관된 반복 동작 제공 (for..of)
// 2. 커스텀 반복 제어 가능 (객체를 반복 가능한 상태로)
// 3. 지연 계산 (필요할 때 마다 반복을 돌림) 성능
// 4. 무한 시퀀스 생성 (무한대의 값 생성)
// 5. 비동기 반복 작업
// 6. 다양한 데이터 소스와의 통합 ( Map, Set )

// 유사배열, 이터러블 배열화
