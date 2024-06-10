/* 1. 객체와 키를 인수로 받아, 객체에 해당 키가 존재하면 그 키에 해당하는 값을 반환하고, 
존재하지 않으면 에러를 발생시키는 함수를 작성하세요.  */

// 1. obj가 객체인지 확인하기
// 2. key가 문자인지 확인하기
// 3. 해당 키 값을 가지고 있는지 확인하기

const person = {
  name: 'Alice',
  age: 25,
  city: 'Wonderland',
};

/* 타입 체크 함수 */
function isObject(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'object'
  );
}

function getValueAtObject(obj, key) {
  if (typeof key !== 'string') {
    throw new TypeError(
      'getValueAtObject 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  if (isObject(obj)) {
    // 근데 배열과 null도 object라고 뜸
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // 키를 확실하게 갖고 있어야 내보내 주니까
      return obj[key];
    } else {
      throw new Error(
        `getValueAtObject 함수의 해당 ${key}가 존재하지 않습니다.`
      );
    }
  } else {
    // obj가 객체 타입이 아니면
    throw new TypeError(
      'getValueAtObject 함수의 첫 번째 인수는 객체 타입 이어야 합니다.'
    );
  }
}
/* -------------------------------------------------------------------------- */
/*                                  정확한 타입 체크                           */
/* -------------------------------------------------------------------------- */

console.log(getValueAtObject(person, 'name')); // 'Alice'
console.log(getValueAtObject(person, 'age')); // 25
console.log(getValueAtObject(person, 'city')); // 'Wonderland'
console.log(getValueAtObject(person, 'country')); // Error !

/* 2. 배열과 인덱스를 인수로 받아, 인덱스가 배열의 유효한 범위 내에 있으면 그 인덱스에 
해당하는 값을 반환하고, 유효하지 않은 인덱스일 경우 에러 메시지를 반환하는 함수를 
작성하세요. */

// 1. arr 변수가 배열인 지 확인하기
// 2. 0보다 크거나 같음 && 배열의 길이보다 작을 때

// typeof arr === 'array' 는 불가. object로 나오니까
function getNumberAtArray(arr, index) {
  if (Array.isArray(arr)) {
    if (index >= 0 && index < arr.length) {
      return arr[index];
    } else {
      throw new Error('배열에 없는 index입니다.');
    }
  } else {
    throw new TypeError(
      'getNumberAtArray 함수의 첫 번째 인수는 배열 타입 이어야 합니다.'
    );
  }
}

const nameList = ['김현주', '심선범', '안재명'];

getNumberAtArray(numberList, 2);
