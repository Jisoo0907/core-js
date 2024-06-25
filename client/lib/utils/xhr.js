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

function xhr(method, url, body) {
  const xhr = new XMLHttpRequest(); // 데이터 얻으려는 것.

  xhr.open(method, url);

  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr; // 이 코드 추가 후 xhr.뫄뫄를 다 없앰

    // on 붙은 이벤트는 다 on떼고 쓸 수 있대
    // readyState === 4 : xhr.response 조회하면 데이터 떨어진 순간이니까 데이터 가져올 수 있지 않을까?
    if (readyState === 4) {
      // complete. 실패할 수도.
      if (status >= 200 && status < 400) {
        console.log(JSON.parse(response)); // xhr.status: 상태 코드. parse하면 객체.
      } else {
        console.log('실패!');
      }
    }
  }); // 상태가 바뀔 때마다 호출

  xhr.send(JSON.stringify(body)); // id만 나오고 우리가 넣은 값은 안 나옴
}

xhr('POST', ENDPOINT, user);
