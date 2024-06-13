/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */

const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q',
  },
  /*  getFullName() {
    return `${this.brand}, ${this.maker}`;
  }, */
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }

// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

// portableFan && portableFan.photos && portableFan.photos.animate;

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

portableFan.photos?.animate;

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

const fullName = portableFan.getFullName?.(); // 만약 getFullName없으면 에러 터짐
// 나중에 try catch로 잡긴 함

console.log(fullName);

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.

/* -------------------------------------------------------------------------- */
/*                             sync(동기) async(비동기)                        */
/* -------------------------------------------------------------------------- */
// 세탁기 - 하나 끝나야 돌릴 수 있음
// 세탁기 여러 대 - 한꺼번에 돌릴 수 있음

// 연산 오래 걸리는 작업 ex. 피보나치 => 아래 코드가 실행이 안됨

// JS는 동기적으로 동작, 우리가 비동기로 동작하도록 할 수 있음
// JS는 싱글 스레드라 동기적 처리밖에 못 함
// 단일 스레드 영역 안에서 얘를 따로 뽑아내서 비동기로 처리하도록 -> web이 도와줌

/* web API */

console.log(1);
console.log(2);

function print() {
  console.log(3);
}

const button = document.querySelector('.my-button');
// my-button이 늦게 생기면 위 코드가 문제가 될 수 있음

const id = setTimeout(() => {
  // timer의 고유한 id
  const template = /* html */ `
    <button type="button" class="my-button">my-button</button>
  `;
  document.body.insertAdjacentHTML('beforeend', template); // 어디에      무엇을
}, 3000);

clearTimeout(id); // 우리가 만든 id 넣어주면 제거가 됨

console.log(4);
console.log(5);

/* -------------------------------------------------------------------------- */
/*                                 setInterval                                */
/* -------------------------------------------------------------------------- */

let count = 0;

const id2 = setInterval(() => {
  console.log(++count);

  document.querySelector('.first').style.transform =
    `translateY(${count}px) rotate(${count}deg)`;

  if (count >= 100) {
    clearInterval(id2); // web API 삭제
  }
}, 10);
clearTimeout(id2);

/* -------------------------------------------------------------------------- */
/*                            requestAnimationFrame                           */
/* -------------------------------------------------------------------------- */

let counter = 0;

function animation() {
  console.log(++counter);

  const id = requestAnimationFrame(animation); // 재귀함수처럼 동작하도록 함. 함수 안에서 자기 호출하니까.

  if (counter >= 100) {
    cancelAnimationFrame(id); // 모니터. 주사율에 따라 부드럽게 보이거나 끊겨 보이거나 함.
  }
}

animation();

// 다른 페이지 보고 있을 때 멈춤
