let itemList = [];
const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', () => {
  const item = document.querySelector('#item').value;
  if (item !== '') {
    itemList.push(item);
    document.querySelector('#item').value = '';
    document.querySelector('#item').focus();
  }
  showList();
});
function showList() {
  let list = '<ul>';
  for (let i = 0; i < itemList.length; i++) {
    list += '<li>' + itemList[i] + "<span class ='close' id=" + i + '>X</span>' + '</li>';
  }
  list += '</ul>';
  document.querySelector('#itemList').innerHTML = list;
  const remove = document.querySelectorAll('.close');
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', () => {
      itemList.splice(i, 1);
      showList();
    });
  }
}
