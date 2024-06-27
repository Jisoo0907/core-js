import { renderUserCard } from './lib/dom/userList.js';
import { getNode, tiger } from './lib/index.js';

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
  const response = await tiger.get(ENDPOINT);

  const data = response.data;

  data.forEach((user) => renderUserCard(userCardInner, user));
}

renderUserList();
