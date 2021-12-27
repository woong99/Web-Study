# DOM API

### Document Object Model, Application Programming Interface

---

## querySelector

```JavaScript
// HTML 요소(Element) 1개 검색/찾기
const boxEl = document.querySelector('.box');

// HTML 요소에 이벤트 적용
boxEl.addEventListener('click', function(){
    console.log('Click~');
});
```

---

## classList

```javascript
// HTML 요소(Element) 검색/찾기
const boxEl = document.querySelector('.box');

// 요소의 클래스 정보 객체 활용!
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains); // true

boxEl.classList.remove('active');
isContains = boxEl.classList.contains('active');
console.log(isContains); // false
```

---

## querySelectorAll

```JavaScript
// HTML 요소(Element) 모두 검색/찾기
const boxEls = document.querySelectorAll('.box');

// 찾은 요소들 반복해서 함슈 실행
// 익명 함수를 인수로 추가!
// 첫 번째 매개변수(boxEl) : 반복 중인 요소
// 두 번째 매개변수(index) : 반복 중인 번호

boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});
```

---

## textContent

```JavaScript
const boxEl = document.querySelector('.box');

// Getter, 값을 얻는 용도
console.log(boxEl.textContent); // .box에 담긴 택스트 내용 출력

// Setter, 값을 지정하는 용도
boxEl.textContent = 'Woong!!';
console.log(boxEl.textContent); // Woong!!
```
