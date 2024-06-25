const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

// [readyState]
/* 0 : uninitialized 받기 전
1 : loading 로딩
2 : loaded 로딩이 끝남
3 : interactive
4 : complete => 성공 / 실패 (그냥 통신이 끝남. 성공을 의미하진 않음)
*/
const user = {
  name: 'rabbit',
  age: 40,
  gender: 'male',
};

const xhr = new XMLHttpRequest(); // 데이터 얻으려는 것.

xhr.open('GET', ENDPOINT);

xhr.addEventListener('readystatechange', () => {
  const { readyState, status, response } = xhr; // 이 코드 추가 후 xhr.뫄뫄를 다 없앰

  // on 붙은 이벤트는 다 on떼고 쓸 수 있대
  // readyState === 4 : xhr.response 조회하면 데이터 떨어진 순간이니까 데이터 가져올 수 있지 않을까?
  if (readyState === 4) {
    // complete. 실패할 수도.
    if (status >= 200 && status < 400) {
      console.log(response); // xhr.status: 상태 코드
    } else {
      // 실패
    }
  }
}); // 상태가 바뀔 때마다 호출

xhr.send();
