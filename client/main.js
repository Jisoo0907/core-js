import {
  renderEmptyCard,
  renderSpinner,
  renderUserCard,
} from './lib/dom/userList.js';
import { changeColor, delayP, getNode, tiger } from './lib/index.js';
/* global gsap */
const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

/* ---------------------------------- 함수 사용 --------------------------------- */
/* const response = await tiger.get(ENDPOINT);

console.log(response.data); */

/* ---------------------------- user card list 실습 --------------------------- */
/* 
1. user 데이터 fetch 해주세요
  - tiger.get
2. fetch 데이터의 유저 이름만 콘솔 출력
  - 데이터 유형 파악 ex) 객체, 배열, 숫자, 문자
3. html에 각 유저 이름, 메일, 사이트 뿌리기
4. 각자 id
 */

const userCardInner = getNode('.user-card-inner');

async function renderUserList() {
  // 로딩 스피너 렌더링
  renderSpinner(userCardInner); // 여기서 loadingSpinner를 생성했기 때문에
  // 함수 밖에서 getNode('.loadingSpinner')하면 에러

  await delayP(2000);

  try {
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        // 이 안에서 this는 tween 반환 => 이 안에 _targets가 있음.
        // _targets에 loadingSpinner가 들어 있음.
        // 애니메이션이 끝나고도 존재해서 삭제 버튼에 영향을 줘서
        this._targets[0].remove(); // 이 코드 추가함
      },
    });
    // getNode('.loadingSpinner').remove();

    const response = await tiger.get(ENDPOINT);

    const data = response.data;

    data.forEach((user) => renderUserCard(userCardInner, user));
    changeColor('.user-card');

    gsap.from('.user-card', {
      x: -100,
      opacity: 0,
      stagger: {
        amount: 1,
        from: 'start',
      },
    });
  } catch {
    console.error('에러가 발생했습니다!');
    renderEmptyCard(userCardInner);
  }
}

renderUserList();

// to는 현재 위치부터 ~까지 가. from은 ~부터 현재 위치까지 와.
