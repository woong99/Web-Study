const btn = document.querySelector('#view');
const detail = document.querySelector('#detail').style;
btn.addEventListener('click', () => {
  if (btn.textContent === '상세 설명 보기') {
    detail.display = 'block';
    btn.textContent = '상세 설명 닫기';
  } else {
    detail.display = 'none';
    btn.textContent = '상세 설명 보기';
  }
});
