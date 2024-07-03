class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
     <button type="button">btn</button>
    `;

    this.button = this.shadowRoot.querySelector('button');
    console.log(this.button);
  }

  connectedCallback() {
    // DOM 조작할 거면 이 안에 넣는 게 좋음
    this.button.addEventListener('click', () => this.clickMe());
  }

  clickMe() {
    console.log(this);
  }
}

customElements.define('user-card', UserCard);
// console.log( document.querySelector('user-card').shadowRoot.querySelector('button') );

// sum() // undefined
// sum.call({}) // {} => 실행
// sum.apply({}) // {} => 실행
// const n = sum.bind({}) // {} => 실행 x

// n()
