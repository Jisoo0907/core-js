/* const template = document.createElement('template');

template.innerHTML = `
<div>bye</div>
<div>javascript</div>
`;

console.log(template);
 */
const app = document.querySelector('#app');
const temp = document.querySelector('#temp');

const clone = temp.content.cloneNode(true);

// console.log(temp.content); // temp.content: document-fragment

app.appendChild(clone);
