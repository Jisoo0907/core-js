function getNode(node, context = document) {
  if (context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelector(node);
}

// 모든 대상 찾는 함수
function getNodes(node, context = document) {
  if (context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelectorAll(node);
}
