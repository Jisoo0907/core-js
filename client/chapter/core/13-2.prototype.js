/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// 1. 객체의 상속
// 2. 생성자 함수의 상속
// 3. 생성자 함수 모던 방식 class

class Animal {
  legs = 4;
  tail = true;

  constructor(name) {
    // 생성자 함수
    // 객체 생성할 때 호출됨
    // name을 인자로 받아 객체의 초기 상태 설정
    this.name = name;
    this.stomach = [];
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.stomach.push(food);
  }
}

// 객체 생성
// Animal 클래스를 기반으로 새로운 객체 a를 생성
const a = new Animal('포동이'); // a객체의 name은 포동이로 설정됨
// a객체의 stomach는 빈 배열로 초기화됨
// 이렇게 생성된 a 객체는 Animal 클래스의 멤버 변수와 메서드를 상속 받음
// ex. a.eat은 stomach 배열을 반환, a.eat = "사료"는 stomach 배열에 "사료"를 추가함

/* Animal 클래스를 상속 받아 호랑이를 나타내는 클래스 */
class Tiger extends Animal {
  static options = {
    // static 키워드 사용하여 클래스 레벨 속성인 options 정의
    // 클래스 레벨 속성: 클래스 자체에 속하는 속성. 해당 클래스의 모든 인스턴스가 공유하는 속성
    version: '1.0.0',
    company: '8b-studio',
    ceo: '심선범',
  };

  constructor(name) {
    // name을 인자로 받아 호랑이 객체 초기화함
    // 호돌이가 이 name에 전달됨
    super(name); // Animal 안의 constructor를 실행하겠다
    // 상위 클래스인 Animal의 생성자를 호출하여 초기화 수행
    this.pattern = '호랑이무늬';
  }

  static bark(sound) {
    // 클래스 레벨의 정적 메서드 정의
    // static method가 됨
    return sound + '🐯';
  }

  hunt(target) {
    // 인스턴스 메서드
    // instance method
    return `${target}에게 조용히 접근한다.`;
  }
}

const 호랑이 = new Tiger('호돌이'); // Tiger 클래스를 기반으로 새로운 호랑이 객체 생성
// 생성된 호랑이 객체는 Animal 클래스의 멤버 변수와 메서드를 상속 받으며,
// Tiger 클래스의 고유한 속성과 메서드를 가지고 있음

/* -------------------------------------------------------------------------- */
/*                                    todo                                    */
/* -------------------------------------------------------------------------- */

class Todo {
  target = null;
  registerButton = null;
  list = null;

  // 클래스 생성자 정의 - input, button, renderPlace를 매개변수로 받음
  constructor({ input, button, renderPlace }) {
    this.target = document.querySelector(input);
    // target 속성을 input으로 지정된 요소로 설정함
    this.registerButton = document.querySelector(button);
    // registerButton 속성을 button으로 지정된 요소로 설정함
    this.list = document.querySelector(renderPlace);
    // list 속성을 renderPlace로 지정된 요소로 설정
    this.todoListArray = [];
    // todoList배열 생성하여 할 일 목록 저장
    this.data;
    // data 속성 선언

    this.registerEvent();

    // 입력 필드의 값이 변경될 때마다 실행되는 이벤트 리스너를 등록
    this.target.addEventListener('input', () => {
      this.data = this.currentInputTodoData;
    });
  }

  // 입력 필드의 현재 값을 가져오는 getter 메서드를 정의
  get currentInputTodoData() {
    return this.target.value;
  }

  // 입력 필드의 값을 설정하는 setter 메서드를 정의
  set currentInputTodoData(value) {
    this.target.value = value;
  }

  // 할 일 목록 배열을 가져오는 getter 메서드를 정의
  get todoList() {
    return this.todoListArray;
  }

  // 할 일 목록 배열에 값을 추가하는 setter 메서드를 정의
  set todoList(value) {
    this.todoList.push(value);
  }

  // 할 일 목록 항목을 생성하는 내부 메서드를 정의
  #createList() {
    let template = `
      <li>${this.data}</li>
    `;
    return template;
  }

  // 할 일 목록을 화면에 렌더링하는 메서드를 정의
  render() {
    this.list.insertAdjacentHTML('beforeend', this.#createList());
    this.target.value = '';
  }

  // 입력된 할 일 데이터를 목록에 추가하는 메서드를 정의
  addTodoData() {
    this.todoList = this.data;
  }

  // 버튼 클릭 이벤트를 처리하는 메서드를 정의
  registerEvent() {
    this.registerButton.addEventListener('click', () => {
      this.addTodoData();
      this.render();
    });
  }
}

const button = new Todo({
  // Todo 클래스의 인스턴스 생성
  // 생성자에 객체 전달
  input: '#todo',
  button: '.register',
  renderPlace: '.todoList',
});

const button2 = new Todo({
  input: '#todo2',
  button: '.register2',
  renderPlace: '.todoList2',
});
