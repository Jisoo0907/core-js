class Button extends HTMLButtonElement {
  constructor() {
    super();
  }

  connectedCallback() {}

  disconnectedCallback() {}
}

customElements.define('c-button', Button, { extends: 'button' }); // button태그를 c-button으로 확장시키겠다
