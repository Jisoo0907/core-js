class Button extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' }); // c-button의 쉐도우 돔을 열어줘
    this.shadowRoot.innerHTML = ` 
    <button>hello</button>
    `;
    // console.log(this.shadowRoot); // 위에서 close하면 안 나옴
  }

  connectedCallback() {}

  disconnectedCallback() {}
}

customElements.define('c-button', Button); // button태그를 c-button으로 확장시키겠다

// 밖에서 수집이 될까?
console.log(document.querySelector('button')); // null
// 접근 자체가 막혀 있음
// 쉐도우 루트를 직접 잡고 접근해야 함
console.log(document.querySelector('c-button').shadowRoot);
