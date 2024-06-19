/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler() {
  console.log('클릭 이벤트 발생!!!');
}

// 2. DOM 프로퍼티 : element.onclick = handler
const first = getNode('.first');
// first.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick(e) {
  console.log(e.type);
  console.log(e.target);
  console.log(e.offsetX);
}

const second = getNode('.second');

// second.addEventListener('click',firstEventRemove)

/* function bindEvent(node, type, handler) {
  if (isString(node)) node = getNode(node);

  node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);
}

const firstEventRemove = bindEvent('.first', 'click', handleClick); */

// second.addEventListener('click', firstEventRemove);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

/* -------------------------------------------------------------------------- */
/*                                   soccer                                   */
/* -------------------------------------------------------------------------- */

const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClickBall({ offsetX: x, offsetY: y }) {
  // 2. let { offsetX: x, offsetY: y } = e;

  // 1. let x = e.offsetX;
  // let y = e.offsetY;

  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = `translate(${x - w / 2}px, ${y - h / 2}px)`; // 공의 크기의 절반을 빼자!
}

function handleMove({ offsetX: x, offsetY: y }) {
  console.log(x, y);
  // ball.style.transform = `translate(${x}px, ${y}px)`;
  let template = /*html*/ `
  <div class="emotion" style="top: ${y}px; left: ${x}px;">😍</div>
  `; // 이렇게 하면 div 무한 생성 => 부하가 걸림 => canvas 이용

  insertLast(ground, template);
}

let timeout; // 얘가 debounce 함수 안에 있으면 계속 초기화됨. 계속 새로 만들어짐.

// 타이머는 등록하고 해제할 수 있다.
function debounce(callback) {
  // 이 매개변수에 함수가 들어옴
  clearTimeout(timeout); // 다음 타이머를 날려라. 전달된 id를 clear함. 타이머 자체를 제거.

  timeout = setTimeout(() => {
    callback(); // callback 매개변수로 들어온 함수를 실행시켜라, 1초 뒤에
  }, 1000); // setTimeout() 실행하면 id가 튀어나옴. 그걸 timeout에 담으려고 변수 선언함.
}

debounce(() => {
  console.log('hello');
}); // 콘솔에 계속 복붙해도 마지막에 딱 하나만 찍힘
// 마지막에 실행한 debounce는 clearTimeout이 안 찍히니까 한 번 출력됨

// ground.addEventListener('click', handleClickBall);
// ground.addEventListener('mousemove', handleMove);
/* 
<단점>
성능이 안 좋음. handleMove()가 몇 백 개씩 호출됨.
window의 resize라는 것도 유사.
 */

/* 
throttle (수도꼭지) : 똑, 똑, 똑 ...
debounce (공 튀김 방지) : 한 번만 통!
*/

/* 위 함수 클로저로 */

function debounce(callback, limit = 500) {
  let timeout;

  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.call(this, e);
    }, limit);
  };
}

/* ground.addEventListener(
  'mousemove',
  debounce(function (e) {
    console.log(this);
  })
);
 */
ground.addEventListener('mousemove', debounce(handleMove));

/* -------------------------------------------------------------------------- */
/*                                  throttle                                  */
/* -------------------------------------------------------------------------- */

/* let waiting = false;

function throttle(callback) {
  if (!waiting) {
    callback();
    waiting = true;

    setTimeout(() => {
      waiting = false;
    }, 1000);
  }
} */

function throttle(callback, limit = 200) {
  let waiting = false;

  return function (...args) {
    if (!waiting) {
      // callback.call(this, e); 이 때는 매개변수 자리에 e만 쓰면 됨
      callback.apply(this, args);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

ground.addEventListener('mousemove', throttle(handleMove));

/* throttle(() => {
  console.log('hello throttle?');
}); */

/* ground.addEventListener('mousemove', (e) => {
  console.log(e);
});
 */
