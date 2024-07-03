class Button extends HTMLElement {
  constructor() {
    super();

    this.button = document.querySelector('button');
  }

  connectedCallback() {
    this._render();
  }

  disconnectedCallback() {}

  static get observedAttributes() {
    return ['id'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this._render();
    }
  }

  _render() {
    this.button.textContent = this.id;
  }
}

customElements.define('c-button', Button);

const c = document.querySelector('c-button');

let count = 0;

c.addEventListener('click', () => {
  c.setAttribute('id', ++count);
});

// console.log(this); // this 찍으면 <c-button id="10"></c-button>
// this.id 찍으면 10
// label 같은 건 못 가져옴. 비표준이라.
// this.getAttribute('label')로 가져올 수 있음.
// data-label이면 this.dataset.label로 가져옴.
