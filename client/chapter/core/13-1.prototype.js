/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// 생성자 함수

/* -------------------------------------------------------------------------- */
/*                  객체의 프로토타입 [[Prototype]] => __proto__로 접근         */
/* -------------------------------------------------------------------------- */

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  set eat(food) {
    // 값을 설정해야돼서 매개변수 필요
    this.stomach.push(food);
  },
  get eat() {
    // 값을 내뱉어야 돼서 return 필요
    return this.stomach;
  },
};

// animal.setEat('고기'); // setEat()안에 들어가도록

const tiger = {
  pattern: '호랑이 무늬',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal,
};

const 백두산호랑이 = {
  color: 'white',
  name: '백돌이',
  __proto__: tiger,
};

/* -------------------------------------------------------------------------- */ // 객체를 보다 편하게 만들고자
/*                                   생성자 함수                               */
/* -------------------------------------------------------------------------- */

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function () {
    return this.stomach;
  };
  this.setEat = function (food) {
    this.stomach.push(food);
  };
}

// const a1 = new Animal();
// 생성자 함수 => 컴포넌트라고도 부름. 재사용 형태라.
function Tiger(name) {
  Animal.call(this); // call 앞 함수에게 this 전달. 금강산호랑이가 this로 들어감. Tiger안에서 Animal을 호출하는 형태. Tiger가 Animal 상속 받게끔.
  // 현재 타이거가 가진 this를 Animal에 전달한 것. 그럼 Animal 안에서 금강산호랑이.legs, 금강산호랑이.tail, 금강산호랑이.stomach...
  this.name = name; // this는 실행할 때 생성된 것.
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    return `${target}에게 조용히 접근한다.`;
  };
}

// Tiger.prototype = a1; // Animal을 넣는 게 아니라 위에서 생성한 객체를 넣어줘야 함. 62번째줄 것.

// Tiger.prototype = Object.create(Animal.prototype);
// Tiger.prototype.constructor = Tiger;

const 금강산호랑이 = new Tiger('금순이'); // 전달해줬으니까 Tiger함수 내의 this는
// 전부 금강산호랑이가 됨.
// hunt는 금강산호랑이만이 가진 함수.
금강산호랑이.hunt('사슴'); // 꼭 먹이를 함수를 통해 전달해야?
// 위 const문에서 주면 안됨? ㄱㄴ const 금강산호랑이 = new Tiger('금순이', '사슴');
// 근데 그럼 사슴만 먹을 수 있음.
// instance만 쓸 수 있는 메서드 => 인스턴스 메서드. 0610 노션 참고

// static method
Tiger.bark = function (sound) {
  return sound;
}; // 얘를 밖에서 사용 안 하고 함수 내부에서 사용 못 함? => class 등장

/* 함수의 메서드 (함수의 능력)
call , , ,
apply [ , , ,]
bind

throttle, debounce
 */

function sum(a, b, c) {
  console.log(this); // 여기서의 this는 window. 누군가에 의해 호출된 형태가 아니라.
  return a + b + c;
}

sum.call('hello', 1, 2, 3); // this를 전달함 인수를 개별로 받음 => 함수 실행 o
// sum.apply('hello', 1, 2, 3); // this를 전달함 인수를 배열로 받음 => 함수 실행 o

const b = sum.bind('hello', 1, 2, 3); // this를 전달함 인수를 개별로 받음 => 함수 실행 안함

/* const user = {
  sayHi() {
    console.log(this); // 여기서 this는 user

    function sayBye() {
      console.log(this); // window
    }

    sayBye.call(this);
  },
}; */

function User(name, address, age) {
  this.name = name;
  this.address = address;
  this.age = age;

  this.sayHi = function () {
    return `안녕 ? 난 ${this.name} 이야 만나서 반가워~!`;
  };
}

const person1 = new User('심', '서울시 중랑구', 40);
const person2 = new User('beom', '서울시 ', 35);
const person3 = new User('tiger', '서울시', 30);
const person4 = new User('kindtiger', '서울시 중랑구', 10);
const person5 = new User('이아영', '서울시 중랑구', 25);
