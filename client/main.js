import { attr, getNode, insertLast, clearContents } from './lib/index.js';

function phase1() {
  /* 
1. input value 값 가져오기 (first, second)
  - input 선택하기
  - input에게 input 이벤트를 걸어준다.
  - input.value 값을 가져온다.
*/
  const first = getNode('#firstNumber');
  const second = getNode('#secondNumber');
  const result = getNode('.result');
  const clear = getNode('#clear');

  function handleInput() {
    const firstValue = Number(first.value);
    const secondValue = +second.value;
    const total = firstValue + secondValue;
    // 명시적 형변환 Number()
    // 암시적 형변환 +

    clearContents(result); // 비워주기

    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();

    clearContents(first);
    clearContents(second);
    result.textContents = '-';
  }

  first.addEventListener('input', handleInput);
  second.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
  // 글자를 쓰는 순간마다 계속 함수 실행하니까 이 코드는 위험할 수 있음
  // debounce(handleInput), throttle(handleInput) 이런 식으로 사용하기
}

phase1();

function phase2() {
  const calculator = getNode('.calculator');
  const result = getNode('.result');
  const clear = getNode('#clear');
  const numberInputs = [...document.querySelectorAll('input:not(#clear)')];

  function handleInput() {
    const total = numberInputs.reduce((acc, cur) => acc + Number(cur.value), 0);

    clearContents(result);
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();
    numberInputs.forEach(clearContents);
    result.textContent = '-';
  }

  calculator.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}
