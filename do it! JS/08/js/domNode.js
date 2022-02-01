const newP = document.createElement('p');
const newText = document.createTextNode('주문이 완료되었습니다.');
newP.appendChild(newText);
document.body.appendChild(newP);
newP.setAttribute('class', 'accent');
