/* -------------------------------------------------------------------------- */
/*                                    class                                   */
/* -------------------------------------------------------------------------- */
function addClass(node, ...className) {
  if (typeof node === 'string') node = document.querySelector(node);

  if (isArray(className)) {
    className.forEach((c) => node.classList.add(c));
    return;
  }

  if (isObject(className)) Object.values(className);

  if (typeof className !== 'string') {
    throw new TypeError(
      'addClass함수의 두 번째 인수는 문자 타입이어야 합니다.'
    );
  }
  node.classList.add(className);
}

function removeClass(node, className) {
  if (typeof node === 'string') node = document.querySelector(node);
  if (!className) {
    node.className = '';
    return;
  }

  if (typeof className !== 'string') {
    throw new TypeError(
      'removeClass 함수의 두 번째 인수는 문자 타입이어야 합니다.'
    );
  }

  node.classList.remove(className);
}

function toggleClass(node, className) {
  if (typeof node === 'string') node = document.querySelector(node);

  if (typeof className !== 'string') {
    throw new TypeError(
      'toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  return node.classList.toggle(className);
}

/* -------------------------------------------------------------------------- */
/*                                    style                                   */
/* -------------------------------------------------------------------------- */
function getStyle(node, prop) {
  if (isString(node)) node = getNode(node);

  if (!(prop in document.body.style)) {
    throw new SyntaxError(
      'getStyle 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.'
    );
  }

  return getComputedStyle(node)[prop];
}

function setStyle(node, prop, value) {
  if (isString(node)) node = getNode(node);

  if (!(prop in document.body.style)) {
    throw new SyntaxError(
      'setStyle 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.'
    );
  }

  if (!value)
    throw new ReferenceError(
      'setStyle 함수의 세 번째 인수는 필수 입력값 입니다.'
    );

  node.style[prop] = value;
}

const css = (node, prop, value) =>
  !value ? getStyle(node, prop) : setStyle(node, prop, value);