/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/

/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window; //  전역 객체가 제공해주는 것
// 우리는 구조분해할당 해서 뽑아내진 걸

/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title

const { href, protocol, host, port, search, hash, replace, reload } = location;
// 페이지 전환 통신 할 때 접근해야 되는 순간이 옴
// 그럴 때 꺼내서 쓰면 됨
/* console.log(href);
console.log(protocol); // http or https로 통신할 건지 - 통신 규약
console.log(host);
console.log(port);
console.log(search); // 뭔가 검색했을 때 파라미터로 떨어지는 결과들을 검색해줌
console.log(hash); */
// console.clear();

const urlParams = new URLSearchParams(location.search);

for (const [key, value] of urlParams) {
  console.log(`${key}:${value}`); // 왜 주석의 링크로 들어갔을 때만 결과가 출력됨?
}

/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;

// 우리 위치 찍어내게 도와주는 함수 - 웹 API
navigator.geolocation.getCurrentPosition((data) => {
  // 저 data 찍어보면 객체가 떨어짐
  if (data) {
    const { latitude: lat, longitude: long } = data.coords;
    // data.coords : 위치 좌표와 관련된 세부 정보를 담고 있는 객체
    // data 객체의 구조는 latitude, longitude, altitude(고도), accuracy 등

    // console.log(lat, long);
  } else {
    // console.error('위치 서비스 동의 하세요');
  }
});

/* -------------------------------------------------------------------------- */
/*                            getGeolocation 함수 작성                         */
/* -------------------------------------------------------------------------- */
/* function getGeolocation(success) {
  navigator.geolocation.getCurrentPosition((data) => {
    // 얘 앞에 return 붙여도 얘는 비동기로 동작하는 애라
    // 안 기다려 주고 바로 undefined 내보냄
    if (data) {
      const { latitude: lat, longitude: long } = data.coords;

      const geo = {
        // 왜 객체로 만들어서 내보내냐? => 우리가 원하는 결과가 { let: 뭐시기, long: 뭐시기} 니까.
        // 단축 프로퍼티
        lat, // : lat
        long, // : long
      };

      success(geo); // 값이 떨어지는 순간에 success를 실행하고 geo 전달
    } else {
      console.error('위치 서비스 동의 하세요');
    }
  });
}

// 콜백 함수
getGeolocation((s{lat, long}) => {
  console.log(data);
}); */

// fail 있는 코드는
/* -------------------------------------------------------------------------- */
/*                                   promise                                  */
/* -------------------------------------------------------------------------- */
// callback -> promise -> async await

/* function getGeolocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((data) => {
      if (data) {
        const { latitude: lat, longitude: long } = data.coords;
        const geo = { lat, long };
        resolve(geo);
      } else {
        reject({ message: '위치 서비스 동의 하세요' });
      }
    });
  });
}

getGeolocation().then((res) => console.log(res)); */

/* navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  document.querySelector('#videoElement').srcObject = stream;
}); */

/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;

// interactive 웹에서 많이 사용
// window.innerHeight
// window.innerWidth

/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;

// history.back(1);
// history.go(10)
