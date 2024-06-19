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

ground.addEventListener('click', handleClickBall);
