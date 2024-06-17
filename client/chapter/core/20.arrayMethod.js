/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

// function isArray(data){
//   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
// }

// function typeOf(data){
//   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase()
// }

const people = [
  {
    id: 0,
    name: '안재명',
    age: 25,
    job: '물음표살인마',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/50.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
  {
    id: 1,
    name: '황선우',
    age: 51,
    job: '요식업 사장님',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
  {
    id: 2,
    name: '유진',
    job: '디스코드 봇',
    age: 12,
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
  {
    id: 3,
    name: '김한울',
    job: '비둘기',
    age: 39,
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/78.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
];

/* 요소 순환 ---------------------------- */

// forEach

people.forEach((user) => {
  console.log(user.job);
});

const span = document.querySelectorAll('span');

span.forEach((tag) => {
  tag.addEventListener('click', function () {
    this.style.color = 'dodgerblue';
  });
});

// const first = document.querySelector('.first');
// const second = document.querySelector('.second');
// const third = document.querySelector('.third');

// first.addEventListener('click',()=>{
//   console.log('first를 클릭하셨습니다.');
// })

// second.addEventListener('click',()=>{
//   console.log('second를 클릭하셨습니다.');
// })

// third.addEventListener('click',()=>{
//   console.log('third를 클릭하셨습니다.');
// })

//

// event delegation (이벤트 위임)

/* 원형 파괴 ----------------------------- */

// push
// people.push('admin')

// pop
// people.pop()

// unshift

// shift

// reverse
const arr = [...people];
arr.reverse();

// console.log(arr);

// splice

// people.splice(0,2,'안녕','잘가')

// sort

function compare({ age: a }, { age: b }) {
  if (a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
  if (a == b) return 0; // 두 값이 같은 경우
  if (a < b) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우
}

// people.sort(compare)

/* 새로운 배열 반환 ------------------------ */

// concat
// toSpliced

const toSpliced = people.toSpliced(0, 2);

// toSorted
const toSorted = people.toSorted(compare);

// toReversed

const toReversed = people.toReversed();

// map

// 이름만 담은 배열 반환

// const nameList = people.map((user)=>{
//   return user.name
// })

const nameList = people.map((u) => u.name);

// 현재 나이에 + 2 배열 반환

// const age = people.map((user)=>{
//   return user.age + 2
// })

const age = people.map((u) => u.age + 2);

const cardTag = people.map(({ name, age, job, imgSrc, imgAlt }) => {
  let template = /* html */ `
    <li class="userCard">
      <div class="imageField">
        <img src="${imgSrc}" alt="${imgAlt}" />
      </div>
      <ul class="contents">
        <li> <span class="strong">이름</span> : ${name}</li>
        <li> <span class="strong">나이</span> : ${age}</li>
        <li> <span class="strong">직업</span> : ${job}</li>
      </ul>
    </li>
  `;
  return template;
});

const ul = document.querySelector('ul');

cardTag.forEach((tag) => ul.insertAdjacentHTML('beforeend', tag));

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find

const 황 = people.find((item) => {
  return item.name === '황선우';
});

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

const filter = people.filter((item) => {
  return item.age > 20;
});

// console.log( ...filter );

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce

// const reduce = people.reduce((acc,cur)=>{
//   return acc + cur.age
// },0)

const reduce = people.reduce((acc, cur) => acc + cur.age, 0);

const template = people.reduce((acc, cur) => {
  return acc + `<li class="userCard"> ${cur.name} : ${cur.age} </li>`;
}, '');

ul.insertAdjacentHTML('beforeend', template);

// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '유진 정민 현주 재명';

// split : 문자 → 배열
const stringToArray = str.split(' ');
console.log(stringToArray);

// join : 배열 → 문자
const arrayToString = stringToArray.join('/');
console.log(arrayToString);

// const user = {
//   grades:[1,2,3],
//   sayHi(){

//     this.grades.forEach(()=>{
//       this
//     })
//   }
// }

const products = [
  { name: '냉동 만두', price: 10000, brand: '비비고' },
  { name: '냉동 피자', price: 15000, brand: '오뚜기' },
  { name: '냉동 치킨 너겟', price: 12000, brand: '하림' },
  { name: '냉동 감자튀김', price: 8000, brand: '맥케인' },
  { name: '냉동 새우', price: 18000, brand: '곰곰' },
];

const forEach = (f, i) => {
  // f - 함수, i - iterable(반복 가능한 객체)
  for (const a of i) f(a); // 반복문 내 - i의 각 요소가 a에 할당
  // 각 반복마다 f(a)를 호출하여 a를 인수로 f 함수 실행
};

forEach(
  (item) => {
    // item이라는 인자를 받아 다음 코드 실행
    console.log(item);
  },
  [1, 2, 3] // 두 번째 인수로 배열 전달. forEach 함수의 두 번째 인자인 i에 해당
);
// 배열 1, 2, 3 각 요소를 순회하면서, 각 요소를 인수로 받아 console.log(item)을 실행
// f(1), f(2), f(3)을 차례대로 호출

const map = (f, i) => {
  let result = [];

  for (const a of i) {
    result.push(f(a));
  }

  return result;
};

const _filter = (f, i) => {
  let result = [];

  for (const a of i) {
    if (f(a)) result.push(a);
  }
  return result;
};

_filter((n) => n > 3, [1, 2, 3, 4, 5]);

const _reduce = (f, acc, i) => {
  if (!i) {
    // i가 없을 때. undefined가 들어가면 이 조건식이 true가 되니까.
    i = acc;
    acc = i.shift(); // 첫 번째 값을 빼서 acc에 담음
    // i = acc[Symbol.iterator]();
    // acc = i.next().value // next를 통해 항목을 하나 빼긴
  }

  for (const a of i) {
    acc = f(acc, a);
  }

  return acc;
};

const add = (a, b) => a + b;

console.log(_reduce((t, p) => t + p.price, 0, products));

console.log(
  _reduce(
    add,
    map(
      (p) => p.price,
      _filter((p) => p.price < 10000, products)
    )
  )
);
