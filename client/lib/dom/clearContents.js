function clearContents(node) {
  if (isString(node)) node = getNode(node);

  if (node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA') {
    node.value = '';
    return;
  }

  node.textContent = '';
}

// clearContents(result); result가 비워지게
// textarea도 조건 처리 해주기
