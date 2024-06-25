import data from './data/data.js';
import {
  getNode,
  getRandom,
  insertLast,
  clearContents,
  addClass,
  removeClass,
  showAlert,
  isNumericString,
  shake,
  copy,
} from './lib/index.js';

// [phase-1]
// 1. 주접 떨기 버튼을 클릭 하는 함수
//    - 주접 떨기 버튼 가져오기
//    - 이벤트 연결하기 addEventListener('click')

// 2. input 값 가져오기
//    - input.value

// 3. data함수에서 주접 1개 꺼내기
//    - data(name)
//    - getRandom()

// 4. pick 항목 랜더링하기

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result');

function handleSubmit(e) {
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];

  if (!name || name.replace(/\s*/g, '') === '') {
    showAlert('.alert-error', '공백은 허용하지 않습니다.');
    // addClass('#nameField', 'shake') 하면 한 번만 떪
    // 바로 remove하면 동일 선상에 넣으니까 당연히 안 됨
    // setTimeout(() => {removeClass('#nameField'), 'shake'}, 1000) 애니메이션 끝난 시점에 지워지리란 보장이 없음

    shake('#nameField').restart();
    return;
  }

  // 왜 isNaN으로 체크 - Number('a123') === NaN으로 체크 안 됨
  // isNaN(Number('a123')) => true 떨굼
  if (!isNumericString(name)) {
    showAlert('.alert-error', '제대로 된 이름을 입력해 주세요.');

    shake('#nameField').restart();
  }

  clearContents(result);
  insertLast(result, pick);
}

function handleCopy() {
  const text = result.textContent;

  if (nameField.value) {
    copy(text).then(() => {
      showAlert('.alert-success', '클립보드 복사 완료!');
    });
  }
}

submit.addEventListener('click', handleSubmit);
result.addEventListener('click', handleCopy);
