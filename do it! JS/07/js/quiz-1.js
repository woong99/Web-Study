const numbers = [2, 4, 6, 8, 10];
showArray(numbers);
showFinalArray(numbers);

function showArray(arr) {
  let str = '<table><tr>';
  for (let i = 0; i < arr.length; i++) {
    str += '<td>' + arr[i] + '</td>';
  }
  str += '</tr></table>';
  document.write(str);
}
function showFinalArray(arr) {
  let sum = 0;
  let str = '<table><tr>';
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  arr.push(sum);
  for (let i = 0; i < arr.length; i++) {
    str += '<td>' + arr[i] + '</td>';
  }
  str += '</tr></table>';
  document.write(str);
}
