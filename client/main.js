/* global gsap */

import {
  tiger,
  delayP,
  getNode,
  changeColor,
  clearContents,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
} from './lib/index.js';

const ENDPOINT = 'http://localhost:3000/users';

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

  // await delayP(2000);

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

/* ---------------------------------- Event --------------------------------- */

function handleDeleteCard(e) {
  const button = e.target.closest('button');

  if (!button) return;

  const article = button.closest('article');
  const index = article.dataset.index.slice(5);

  console.log();

  tiger.delete(`${ENDPOINT}/${index}`).then(() => {
    // 요청 보내고 렌더링하기
    // 받아온 거 렌더링 하니까 기존에 있던 거에 계속 추가함
    // 기존 HTML 날려줘야 함 => clearContents
    clearContents(userCardInner);
    renderUserList();
  });
}

userCardInner.addEventListener('click', handleDeleteCard);

/* ------------------------------ button design ----------------------------- */
const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');

function handleCreate() {
  gsap.to('.pop', { autoAlpha: 1 });
  // createButton.classList.add('open')
}

function handleCancel(e) {
  e.stopPropagation(); // 버블링 막음
  gsap.to('.pop', { autoAlpha: 0 });
  // createButton.classList.remove('open');
}

function handleDone(e) {
  e.preventDefault(); // form 태그의 기본 동작을 차단. 그래서 추가하면 깜빡 안 함.

  const name = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  /* POST 통신 */
  const obj = {
    name,
    email,
    website,
  };
  tiger.post(ENDPOINT, obj).then(() => {
    // 1. 팝업 닫기
    gsap.to('.pop', { autoAlpha: 0 });
    // createButton.classList.remove('open');

    // 2. 카드 컨텐츠 비우기
    clearContents(userCardInner);

    // 3. 유저카드 렌더링하기
    renderUserList();
  });
}

createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);
