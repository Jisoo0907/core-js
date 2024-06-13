/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;
console.log(stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
console.log(extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P' + message.slice(1); // e부터 끝까지만 가져가겠다
console.log(immutableChangeCharacter);

/* -------------------------------------------------------------------------- */
/*                                  알아야 하는 용어                           */
/* -------------------------------------------------------------------------- */
// enumerable // 열거 가능한
// iterable // 반복 가능한
// immutable // 불변의
// mutable // 변경 가능한

// const a = {...immutable}

// 부분 문자열 추출
let slice = message.slice(4, -1);
console.log(slice); // ' is more'

let subString = message.substring(2, 5);
console.log(subString); // 'ss '

// let subStr = message.subStr();

// 문자열 포함 여부 확인
let indexOf = message.indexOf('hi');
console.log(`indexOf: ${indexOf}`); // -1 없으면 음수 반환, 있으면 양수

function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf('edg') > -1:
      browserName = 'MS Edge';
      break;
    case agent.indexOf('chrome') > -1 && !!window.chrome:
      browserName = 'Chrome';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Safari';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'Firefox';
      break;
    case agent.indexOf('trident') > -1:
      browserName = 'IE';
      break;
    default:
      browserName = '무슨 브라우저 쓰세요..?';
  }

  return browserName;
}

checkBrowser(); // chrome

let lastIndexOf = message.lastIndexOf('s'); // 뒤에서부터 찾지만 앞에서부터의 인덱스 반환
console.log('lastIndexOf: ', lastIndexOf);

let includes = message.includes('Less');
console.log('includes: ', includes);

let startsWith = message.startsWith('Less');
console.log('startsWith', startsWith);

let endsWith = message.endsWith('.'); // 모든 문장이 마침표로 끝나야 될 때 유용
console.log('endWith: ', endsWith);

let str = '       a     b   c             d';

// 공백 잘라내기
let trimLeft = str.trimLeft(); // deprecated 왼쪽 값 지움
console.log('trimLeft: ', trimLeft);
// 보통 justify-content: flex-start/flex-end로 지정. 글을 꼭 왼쪽에서 읽진 console.error('않으니까',않으니까)
// left-right 개념 요즘 잘 사용 안 한대.

let trimRight = str.trimRight();
console.log('trimRight:', trimRight);

let trim = str.trim();
console.log('trim: ', trim);

// 중간 공백 잘라내기
const replaceAll = str.replaceAll(' ', ''); // 모든 좌변 값을 찾아서 우변 껄로 바꿔치기
console.log('replaceAll:', replaceAll);

const replace = str.replace(/\s*/g, '');
console.log('replace: ', replace);

// 공백 제거해주는 함수 작성
const trimText = (s) => s.replaceAll(' ', '');

trimText(str); // abcd

// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat:', repeat);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase:', toLowerCase);

let toUpperCase = message.toUpperCase();
console.log('toUpperCase:', toUpperCase);

console.clear();

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(
    /(\s|-|_)+./g,
    (
      $1 // .찍으면 뒤의 알파벳 하나 선택
    ) =>
      $1
        .trim()
        .replace(/(-|_)+/, '')
        .toUpperCase()
  );
}
// replace가 callback 함수 제공해줌
// 앞에서 걸러진 문자들이 뒤의 매개변수로 들어가게 됨

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
