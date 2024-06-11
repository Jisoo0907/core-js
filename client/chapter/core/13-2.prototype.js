/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// 1. 객체의 상속
// 2. 생성자 함수의 상속
// 3. 생성자 함수의 모던 방식 class

class Animal {
  constructor(name) {
    this.name = name;
    this.legs = 4;
    this.tail = true;
    this.stomach = [];
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.stomach.push(food);
  }
}

const a = new Animal('포동이'); // 객체 생성

class Tiger extends Animal {
  // Animal에서 확장된 class로 선언

  static options = {
    version: ' 1.0.0',
    company: '8b-studio',
    ceo: '심선범',
  };

  // 부모의 능력 쓰고 싶으면 super 콜 해
  constructor(name) {
    super(name); // super 호출하는데 name 같이 전달. => 위의 Animal class의 name에 들어감.
    this.pattern = '호랑이무늬';
  }

  /*   bark(sound) { // 지금은 instance method. 
    return sound + '🐅';
  } */

  static bark(sound) {
    return sound + '🐅'; // 호출할 때 Tiger.bark('어흥!')
  }

  hunt(target) {
    return `${target}에게 조용히 접근한다.`;
  }
}

const 호랑이 = new Tiger('호돌이');
