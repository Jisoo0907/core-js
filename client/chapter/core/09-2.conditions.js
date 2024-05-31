/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB); // 마지막 falsy 찾아

/* -------------------------------------------------------------------------- */
/*                                 논리곱 할당 연산자                          */
/* -------------------------------------------------------------------------- */
/* a = a&&b 는 a &&= b와 같음 */

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB); // 첫 번째 truthy 찾아

/* -------------------------------------------------------------------------- */
/*                                 논리합 할당 연산자                                 */
/* -------------------------------------------------------------------------- */
/* a ||= b */

// 부정 연산자
let reverseValue = !value;
console.log(reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };
// true 공백 문자-true 빈 배열-true  객체-true
// 만약 다 true면 마지막꺼 반환
// false는 객체 안의 value기 때문에 저 객체 자체는 true임.

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };
//  [2, 3].length의 변환 전 원래 값이 2. 변환해서 true가 된 것. 그래서 2가 나옴.

let userName = prompt('누구세요?');

if (userName?.toLowerCase() === 'admin') {
  const password = prompt('비밀번호를 입력하세요.');
  if (password?.toLowerCase() === 'themaster') {
    alert('환영합니다!');
  } else if (password?.replace(/\s*/g, '') === '' || password === null) {
    alert('취소되었습니다');
  } else {
    alert('인증에 실패하였습니다.');
  }
} else if (userName === null || userName?.replace(/\s*/g, '') === '') {
  // 공백 찾아서 빈 문자로 바꾸기
  alert('취소되었습니다.');
} else {
  alert('누군지 모르겠습니다.');
}
