/* ------------------------- */
/* Copy object by reference  */
/* ------------------------- */

// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao',
};

let text = message;
let conversationTool = messenger;

// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);

// 객체 복사
// 1. for ~ in 문을 사용한 복사
const cloneObject = {};

for (let key in messenger) {
  cloneObject[key] = messenger[key]; // messenger의 모든 키를 cloneObject의 key로 설정, value도.
}

console.log(cloneObject);

// 2. Object.assign()을 사용한 복사
const copyObject = Object.assign({}, messenger);
console.log(copyObject);

// 3. 전개 연산자(...)를 사용한 복사
const spreadObject = { ...messenger };
console.log(spreadObject);

// 4. 객체를 복사해주는 유틸 함수
const copiedObject = (obj) => Object.assign({}, obj);

const newObject = copiedObject(messenger);

// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

// mixin

// let combinedCssMap = Object.assign({}, cssMapA, cssMapB);
let combinedCssMap = { ...cssMapA, ...cssMapB };

// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140,
  },
};

let copiedContainerStyles = {
  ...containerStyles,
  ['max-width']: {
    ...containerStyles['max-width'],
  },
};
// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(
    // fromEntries: 객체의 속성을 [key, value]쌍의 배열로 반환
    Object.entries(object).map(([key, value]) => {
      // 배열의 각 [key, value] 쌍에 대해 콜백 함수 적용
      // [key, value] 쌍을 받아서 깊은 복사 수행, [key, newValue] 반환
      let type = typeof value; // 현재 값의 타입 확인
      // typeof는 원시 타입과 객체인지 여부 확인 가능
      if (value && type === 'object') {
        // 값이 null이 아닌 객체인 경우에 참이 됨
        // null도 object로 판별돼서 추가적으로 value의 존재 여부 체크
        value = cloneDeep(value); // 배열이나 객체인 경우 재귀적으로 cloneDeep 함수 호출
        // 중첩된 모든 객체와 배열 깊은 복사함
      }
      return [key, value]; // value가 기본형이면 그대로 반환, 객체면 깊은 복사된 객체 반환
    })
  );
}

console.clear();

// 객체 합성을 언제 쓰는지?
/* ajax 함수에서 defaultOptions 객체와 options 객체를 병합하여 새 설정 객체 생성 과정 */

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    content: 'application/json',
    access: '*',
  },
};

function ajax(options) {
  // const newOptions = { ...defaultOptions, ...options }; 사용자가 정의한 ...options를 꼭 뒤쪽에. overwrite 되게.
  // 기본 구조와 전달된 구조를 합쳐서 사용

  const { method, headers, body } = {
    // 객체 구조 분해 -> 병합된 설정 객체에서 method, headers, body 속성을
    // 구조 분해 할당하여 상수로 선언
    /* spread 연산자를 이용한 얕은 복사 */
    ...defaultOptions, // defaultOptions 객체의 모든 속성을 새로운 객체로 복사
    ...options, // options 객체의 모든 속성을 defaultOptions의 복사본에 추가
    // defaultOptions와 동일한 속성 있을 시 options의 속성 우선시
    headers: {
      /* 기본 헤더와 사용자 제공 헤더 병합 */
      ...defaultOptions.headers, // defaultOptions.headers객체의 모든 속성을 새로운 headers 객체에 복사
      ...options.headers, // options.headers객체의 모든 속성을 새로운 headers 객체에 추가.
    },
  };

  //console.log(newOptions);

  /* defaultOptions.headers;
  defaultOptions.method;
  defaultOptions.body; */

  console.log(method);
}

ajax({
  method: 'POST',
  body: '데이터',
});

// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
