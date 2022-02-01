const bigImg = document.querySelector('#cup');
const img = document.querySelectorAll('.small');
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener('click', () => {
    bigImg.src = img[i].src;
  });
}
