import {
  diceAnimation,
  getNode,
  getNodes,
  attr,
  insertLast,
} from './lib/index.js';

// 1. 주사위 애니메이션
// 2. 주사위 굴리기 버튼 클릭 => diceAnimation() 실행될 수 있도록

// const buttonGroups = getNodes('.buttonGroup > button');
/* const rollingButton = buttonGroups[0];
const recordButton = buttonGroups[1];
const resetButton = buttonGroups[2]; */

const [rollingButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button'
);
const recordListWrapper = getNode('.recordListWrapper');

const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }

    isClicked = !isClicked;
  };
})();

let count = 0;
let total = 0;

// 함수는 하나의 일만 처리
function renderRecordItem() {
  // const diceValue = getNode('#cube').getAttribute('dice');
  const diceValue = attr(getNode('#cube'), 'dice') * 1; // Number() 하든지ㅂ
  const template = `
            <tr>
              <td>${++count}</td>
              <td>${diceValue}</td>
              <td>${(total += diceValue)}</td>
            </tr>`; // 얘를 렌더링 -(2)
  /* 
1. insertList 함수 사용 || element.insertAdjacentHTML
2. template 전달
3. diceValue interpolation(보간법) 하기 ex) <td>${diceValue}</td>
*/
  insertLast('.recordList tbody', template); // 렌더링 뭐를? -(1)
}

function handleRecord() {
  recordListWrapper.hidden = false;

  renderRecordItem();
}

function handleReset() {
  recordListWrapper.hidden = true;
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
