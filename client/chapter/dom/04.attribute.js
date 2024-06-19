/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
const first = getNode('.first');

console.log(first.hasAttribute('class'));

// console.log(first.getAttribute('class').split(' ')); 배열로 가져옴

// - elementNode.getAttribute(name) – 속성값을 가져옴
console.log(first.getAttribute('data-value')); // 모든 비표준 속성 순환 가능

// - elementNode.setAttribute(name, value) – 속성값을 변경함
first.setAttribute('id', 'tiger'); // first의 id를 tiger로 변경

// - elementNode.removeAttribute(name) – 속성값을 지움
first.removeAttribute('id');

// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
console.log(first.attributes);

/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

first.dataset.name = 'jisoo'; // 실제로 HTML에는 data-name="jisoo"로 들어감
console.log(first.dataset.value);

// getAttribute로도 접근 가능
console.log(first.getAttribute('data-name'));

first.removeAttribute('sayHi');

/* -------------------------------------------------------------------------- */
/*                                    함수 제작                                */
/* -------------------------------------------------------------------------- */
// function getAttr(node, prop) {
//   if (isString(node)) node = getNode(node);
//   // if(typeof node === 'string') node = document.querySelector(node);

//   if (!isString(prop))
//     throw new TypeError(
//       'getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
//     );

//   return node.getAttribute(prop);
// }

// getAttr('.first', 'sayHi'); // 'hola'

// /* -------------------------------------------------------------------------- */
// /*                               error function                               */
// /* -------------------------------------------------------------------------- */
// function typeError(message) {
//   return new TypeError(message + '문자 타입이어야 합니다.');
// }

// function setAttr(node, prop, value) {
//   if (isString(node)) node = getNode(node);

//   if (!isString(prop)) {
//     /* throw new TypeError(
//       'setAttr 함수의 두 번째 인수는 문자 타입이어야 합니다.'
//     ); */
//     typeError('setAttr함수의 두 번째 인수는');
//   }

//   if (value === '') {
//     node.removeAttribute(prop); // 1. 지웠는데
//     return; // 3. 그래서 리턴 필요
//   }

//   // prop에 data가 있어? 그럼 dataset으로 넣기 => first.dataset.name처럼 넣으라

//   if (!value)
//     // 참고로 얘가 위 if문의 아래에 위치해야 함
//     // 빈 문자열일 때 !value가 true가 돼서 아래 ReferenceError를 던져 버리니까!
//     throw new ReferenceError(
//       'setAttr 함수의 세 번째 인수는 필수 입력값 입니다.'
//     );
//   node.setAttribute(prop, value); // 2. class로 ''를 넣어서 속성이 남아있음
// }

// setAttr('.second', 'id', 'bye');
// setAttr('.second', 'class', '');

// /* function attr(node, prop, value) {
//   if (!value) {
//     return getAttr(node, prop);
//   } else {
//     setAttr(node, prop, value);
//   }
// } */

// const attr = (node, prop, value) =>
//   value ? getAttr(node, prop) : setAttr(node, prop, value);
// // 중괄호 없으니까 return 하라는 뜻

// // HTML에 class라는 속성은 남아 있음 => 상관은 없음. 거슬릴 뿐
// 함수 제작 부분부터 여기까지 다 lib/dom/attr.js에 넣음

/* -------------------------------------------------------------------------- */
/*                               small homework                               */
/* -------------------------------------------------------------------------- */
