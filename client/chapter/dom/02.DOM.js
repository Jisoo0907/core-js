/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

// 1. id가 visual-section인 section 태그 요소
// const section1 = document.getElementById('visual-section');
const section = document.querySelector('#visual-section');

// 2. class가 list인 ul 태그 요소
// const ul1 = document.getElementsByClassName('list');
// const list = document.querySelector('.list');
const list = section.querySelector('.list');

// 3. list 요소 안에 about li 태그 요소
// const li = document.querySelectorAll('.list > li:nth-child(2)');
const about = list.querySelector('li:nth-child(2)');
// document => context : 어디 안에서 찾아라
// document => object : 우리가 찾은 section도 태그이자 객체
// 요소가 많아지면 두 번째라는 보장이 없음
// 안에 든 컨텐츠로 찾는 방법
const aboutLi = [...list.children].find((li) => {
  // 유사배열을 배열로 만듦
  // console.log(li.textContent); // 안의 글자들만 뽑아옴
  return li.textContent === 'about';
});

// 4. name 속성이 search-box 인 form 태그 요소
// const form = document.querySelector('[name="search-box"]');
const form = section.querySelector('form[name="search-box"]');

// 5. form 요소 안에 있는 모든 자식 요소
// const parentElement = document.querySelector('form');
// const children = parentElement.children;
const children = form.children;
// const children = form.querySelectorAll('*');

// 6. form 요소 안에 있는 input 태그 요소
const formInput1 = document.querySelector('form > input');
const formInput = form.lastElementChild;
const input = children[1];
// const input = children[children.length - 1]; children 컬렉션에서 마지막 자식 요소 선택
// 자식 요소의 수를 기반으로 마지막 요소를 동적으로 선택함

/* -------------------------------------------------------------------------- */
/*                                   함수 만들기                               */
/* -------------------------------------------------------------------------- */
/* function getNode(node, context) {
  return context.querySelector(node);
}

getNode('.list', '#visual-section'); 
문자에 querySelector 돌려서 에러 뜸 */

/* function getNode(node, context) {
  if (typeof context === 'string') {
    context = document.querySelector(context);
  }
  return context.querySelector(node);
}

getNode('.list', '#visual-section');
getNode('.list') 모든 li 잡고자 하나만 넣으면 에러 뜸 */

/* function getNode(node, context = document) {
  // default parameter
  if (isString(context)) {
    context = document.querySelector(context);
  }
  return context.querySelector(node);
}

getNode('.list', '#visual-section'); */

// 단일 대상 잡는 함수
/* function getNode(node, context = document) {
  // default parameter
  // context가 document가 아니라면 querySelector를 돌아줘

  if (context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelector(node);
}

getNode('.list', '#visual-section');

// 모든 대상 찾는 함수
function getNodes(node, context = document) {
  // default parameter
  // context가 document가 아니라면 querySelector를 돌아줘
  if (context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelectorAll(node);
} */

// getNode('.list', '#visual-section');

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* 문서 대상 확인 */
// - matches
// - contains
