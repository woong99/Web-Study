# 함수

### 특정 동작(기능)을 수행하는 일부 코드의 집합(부분)

```JavaScript
// 함수 선언
function helloFunc() {
    // 실행 코드
    console.log(1234);
}

// 함수 호출
helloFunc();    // 1234
```

---

## 반환 가능

```JavaScript
function returnFunc(){
    return 123;
}

let a = returnFunc();
console.log(a);             // 123

console.log(returnFunc());  // 123
```

---

## 파라미터

```JavaScript
// 함수 선언!
function sum(a, b){     // a와 b는 매개변수(Parameters)
    return a + b;
}

// 재사용
let a = sum(1, 2);       // 1과 2는 인수(Arguments)
let b = sum(7, 12);
let c = sum(2, 4);

console.log(a, b, c);   // 3, 19, 6
```

---

## 기명 함수와 익명 함수

```JavaScript
// 기명(이름이 있는) 함수
// 함수 선언!
function hello(){
    console.log('Hello');
}

// 익명(이름이 없는) 함수
// 함수 표현!
let world = function (){
    console.log('World');
}

// 함수 호출!
hello();    // Hello
world();    // World
```

---

## 객체 내의 함수

```JavaScript
// 객체 데이터
const woong = {
    name: 'Woong',
    age: 85,
    // 메소드(Method)
    getName: function(){
        return this.name;
    }
};

const hisName = woong.getName();
console.log(hisName);           // Woong
// 혹은
console.log(woong.getName());   // Woong
```
