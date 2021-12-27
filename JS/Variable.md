# 변수

## let

```JavaScript
// 재사용이 가능
// 변수 선언!
let a = 2;
let b = 5;

console.log(a + b); // 7
console.log(a - b); // -3
console.log(a * b); // 10
console.log(a / b); // 0.4

// 값(데이터)의 재할당 가능!
a = 999;
console.log(a);     // 999
```

---

## const

```JavaScript
// 값(데이터)의 재할당 불가!
const a = 12;
console.log(a);     // 12

a = 999;
console.log(a);     // TypeError: Assignment to constant variable.
```

---

## 예약어

특별한 의미를 가지고 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어

```JavaScript
let this = 'Hello!';    // SyntaxError
let if = 123;           // SyntaxError
let break = true;       // SyntaxError
```
