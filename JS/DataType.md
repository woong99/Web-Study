# 자료형

## String

```JavaScript
let myName = "Woong";
let hello = `Hello ${myName}?`; // 안에 다른 변수를 넣을 때에는 '가 아닌 `이다.

console.log(myName);    // Woong
console.log(hello);     // Hello Woong?
```

- let을 이용한 변수 선언
- console.log를 통해 개발자 도구로 확인 가능

---

## Number

```JavaScript
let number = 123;
let opacity = 1.57;

console.log(number);    // 123
console.log(opacity);   // 1.57
```

- 숫자 데이터
- 정수 및 부동소수점 숫자를 나타냄

---

## Boolean

```JavaScript
let checked = true;
let isShow = false;

colsole.log(checked);   // true
colsole.log(isShow);    // false
```

- true, false 두 가지 값이 있는 논리 데이터

---

## Undefined

```JavaScript
let undef;
let obj = { abc: 123 };

console.log(undef);     // undefined
console.log(obj.abc);   // 123
console.log(obj.xyz);   // undefined
```

- 값이 할당되지 않은 상태를 나타냄

---

## Null

```JavaScript
let empty = null;

console.log(empty); // null
```

- 어떤 값이 의도적으로 비어있음을 의미

---

## Object

```JavaScript
let user = {
    // Key: Value
    name: 'Woong'
    age: 85,
    isValid: true
};

console.log(user.name);     // Woong
console.log(user.age);      // 85
console.log(user.isValid);  // true
```

- 객체 데이터
- 여러 데이터를 Key: Value 형태로 저장

---

## Array

```JavaScript
let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]); // 'Apple'
console.log(fruits[1]); // 'Banana'
console.log(fruits[2]); // 'Cherry'
```

- 배열 데이터
- 여러 데이터를 순차적으로 저장

---
