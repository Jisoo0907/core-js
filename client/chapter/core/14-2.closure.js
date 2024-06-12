// function earth() {
//   let water = true;
//   let gravity = 10;

//   return function (value) {
//     // 2. 그래서 function tiger(value)일 필요 없음
//     gravity = value;
//     // return [water, gravity];
//     return;
//   };
//   // return tiger;
// }

// 1. 외계인 입장에서는 정보만 전달해주면 됨. 호랑인지 아닌지는 상관 없음.

/* -------------------------------------------------------------------------- */
/*                             arrow function으로 변경                         */
/* -------------------------------------------------------------------------- */
const earth = () => {
  let water = true;
  let gravity = 10;

  return (value) => {
    gravity = value;

    return [water, gravity];
  };
};

const ufo = earth(); // earth를 실행한 결과가 tiger니까.
ufo(-10); // function tiger(10) {}이 됨

/* -------------------------------------------------------------------------- */
/*                                  button 실습                                */
/* -------------------------------------------------------------------------- */

const button = document.querySelector('button');

/* normal function */
// function handleClick(){

//   let isClicked = false;

//   function inner() {
//     if(!isClicked){

//       document.body.style.background = 'orange'
//     }else{

//       document.body.style.background = 'white'
//     }

//     isClicked = !isClicked;
//   }

//   return inner;
// }

// IIFE
/* arrow function */
const handleClick = (() => {
  let isClicked = false;

  return () => {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    isClicked = !isClicked;
  };
})();

button.addEventListener('click', handleClick);

/* -------------------------------------------------------------------------- */
/*                                 new example                                */
/* -------------------------------------------------------------------------- */

function useState(init) {
  let value = init; // 이 값이 기억됨

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write]; // 함수 본문 두 개가 들어감
  // [()=>{}, ()=>{}]
}

// const result = state(10); // 그럼 result는 배열
// // 그 배열의 0번째 실행
// result[0](); // 10
// result[1](100);
// result[0]();

// const getter = result[0];
// const setter = result[1];
// 이제 state의 value에 접근할 수 있는 건 getter랑 setter 뿐
// 배열이면, 구조 분해 할당 가능하지 않음?
const [getNumber, setNumber] = useState(10);
// React의 hook
