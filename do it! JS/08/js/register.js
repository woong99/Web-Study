const name = document.querySelector('#userName');
const btn = document.querySelector('button');
const list = document.querySelector('#nameList');
function newRegister() {
  const newP = document.createElement('p');
  const newText = document.createTextNode(name.value);
  newP.appendChild(newText);
  list.appendChild(newP);
  name.value = '';
  console.log(list.children);
}
