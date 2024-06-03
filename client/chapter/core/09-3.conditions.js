/* ---------------- */
/* Switch           */
/* ---------------- */
let a = 10;

switch (a) {
  case 10:
    console.log('10입니다!');
    break;
  case 11:
    console.log('11입니다!');
    break;
  default:
    console.log('10, 11이 없습니다.');
}

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = LATE_NIGHT;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;
  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log('새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}

/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else {
  console.log('새벽이니 아마도 꿈나라에 있을 것이다.');
}

/* switch vs. if -------------------------------------------------------- */

// prompt를 통해 숫자 입력 받음. (0~6까지)
/* let num = prompt('숫자를 입력하세요.(0~6)');
switch (+num) {
  case 0:
    console.log('일');
    break;
  case 1:
    console.log('월');
    break;
  case 2:
    console.log('화');
    break;
  case 3:
    console.log('수');
    break;
  case 4:
    console.log('목');
    break;
  case 5:
    console.log('금');
    break;
  case 6:
    console.log('토');
    break;
} */

// 0~6까지 랜덤수를 받아서

function getDay() {
  const randomNum = Math.floor(Math.random() * 7);

  switch (randomNum) {
    case 0:
      console.log('일');
      break;
    case 1:
      console.log('월');
      break;
    case 2:
      console.log('화');
      break;
    case 3:
      console.log('수');
      break;
    case 4:
      console.log('목');
      break;
    case 5:
      console.log('금');
      break;
    case 6:
      console.log('토');
      break;
  }
}
