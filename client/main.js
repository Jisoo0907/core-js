class MyElement extends HTMLElement {
  constructor() {
    super(); // 부모의 능력 상속 받겠다
  }

  connectedCallback() {
    console.log('탄생함');
  }

  disconnectedCallback() {
    console.log('죽음');
  }
}

customElements.define('c-element', MyElement); // HTML에서 사용할 태그 이름

const elem = document.createElement('c-element');
const app = document.getElementById('app');

app.appendChild(elem);
