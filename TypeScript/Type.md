# TypeScript

## Type Annotation

```JS
let a = 37;
a = 'Woong';
```

기존 JS에서는 위와 같이 let으로 변수를 선언해주면 그 변수에 어떠한 자료형이라도 넣을 수 있다.

```TS
let a: number;
a = 39;
// a = 'Mark';
```

하지만 TypeScript에서는 위와 같이 변수 뒤에 : 기호를 통해 자료형을 지정해준다. 그렇기 때문에 정해진 자료형에 따른 값만 변수에 들어갈 수 있다.

---

## Boolean

```TS
let isDone: boolean = false;
isDone = true;
console.log(typeof isDone); // 'boolean'
```

---

## Number

JS와 같이 TS의 모든 숫자는 부동 소수점 값이다.

```TS
let decimal: number = 6;

let hex: number = 0xf00d;   // 16진수 리터럴

let binary: number = 0b1010;    // 2진수 리터럴

let octal: number = 0o744;  // 8진수 리터럴

let notANumber: number = NaN;   // NaN 리터럴

let underscoreNum: number = 1_000_000;  // 가독성 좋게 지원, 출력 값은 1000000
```

---

## String

JS와 동일하게 "", '' 를 사용한다.

```TS
let myName: string = "woong";
```

### Template String

- 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
- 이 문자열은 backtick 기호에 둘러쌓여 있다.
- 포함된 표현식은 \`${expr}\` 와 같은 형태로 사용

```TS
let myName: string = 'Woong';

let fullName: string = `Bob Bobbington`;
let age: number = 38;

let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;

// template string 을 사용하지 않을 경우
let sentence1: string =
  'Hello, my name is ' + fullName + '.\n\n' + "I'll be " + (age + 1) + ' years old next month.';

```

---

## Symbol

- ECMAScript 2015의 Symbol
- new Symbol 로 사용할 수 없음
- Symbol 을 함수로 사용해서 symbol 타입을 만들어낼 수 있음
- 프리미티브 타입의 값을 담아서 사용
- 고유하고 수정 불가능한 값으로 만들어 줌
- 주로 접근을 제어하는데 쓰는 경우가 많음

```TS
console.log(Symbol('foo') === Symbol('foo'));   // false
// 각각 고유함

const sym = Symbol();

const obj = {
  [sym]: 'value',   // 접근 제어
};
obj[sym];
```

---

## Null & Undefined

- 컴파일 옵션에서 \`--strictNullChecks\` 사용하면, null 과 undefined 는 void 나 자기 자신들에게만 할당할 수 있음

  - 이 경우, null 과 undefined 를 할당할 수 있게 하려면, union type 을 이용

```TS
// let MyName: string = null;

// let u: undefined = null;

let v: void = undefined;    // void는 가능

let union: string | null = null;    // union type

union = 'Mark';

```

### null

- null 이라는 값으로 할당된 것을 null 이라고 함
- 무언가가 있는데, 사용할 준비가 덜 된 상태
- null 이라는 타입은 null 이라는 값만 가질 수 있음
- 런타임에서 `typeof` 연산자를 이용해서 알아내면, object임

```TS
let n : null = null;

console.log(n); // null
console.log(typeof n);  // object
```

### undefined

- 값을 할당하지 않은 변수는 undefined 라는 값을 가짐
- 무언가가 아예 준비가 안된 상태
- object 의 property 가 없을 때도 undefined 임
- 런타임에서 `typeof` 연산자를 이용해서 알아내면, `undefined` 임

```TS
let u: undefined = undefined;

console.log(u); // undefined
console.log(typeof u);  // undefined
```

---

## Object

`primitive type` 이 아닌 것을 나타내고 싶을 때 사용하는 타입<br>
`non-primitive type` 은 사용이 불가능하다.

```TS
let obj: object = {};

obj = { name: 'Mark' };

obj = [{ name: 'Mark' }];

obj = 39;   // Error

obj = 'Mark';   // Error

obj = true; // Error

obj = 100n; // Error

obj = Symbol(); // Error

obj = null; // Error

obj = undefined;    // Error

```

---

## Array & Tuple

Array는 객체이다.

```TS
// --------------Array---------------
// 배열에 들어가는 타입이 다르면 유니온을 이용해 해결
let list1: (number | String)[] = [1, 2, 3, '4']; // 이걸 더 선호

let list2: Array<Number> = [1, 2, 3];

// --------------Tuple---------------
let x: [string, number];
x = ['hello', 2];

// x = [10, 'hello'];

// x[3] = 'world';

const person: [string, number] = ['Mark', 39];
const [first, second] = person;

```

Array 는 타입을 지정할 때 순서 상관없이 가능하다.
Tuple 은 타입 지정 순서에 맞게 값을 할당해야한다.

---

## Any & Unknown

### Any

- 어떤 타입이어도 상관없는 타입
- `최대한 쓰지 않는게 핵심`
  - 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문
  - 그래서 컴파일 옵션 중에는 any 를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션 존재(`noImplicitAny`)

### Unknown

- Typescript 3.0 버전부터 지원
- any와 짝으로 any보다 `Type-safe`한 타입
  - any와 같이 아무거나 할당 가능
  - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
  - 타입을 확정해주지 않으면 다른 곳에 할당할 수 없고, 사용할 수 없음
- unknown 타입을 사용하면 Runtime Error를 줄일 수 있을 것 같다
  - 사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있을 것 같다

```TS
function returnAny(msg: any): any {
  console.log(msg);
}
const any1 = returnAny('아무거나');

any1.toString(); // 가능
```

```TS
declare const maybe: unknown;


const aNumber: number = maybe;  // Error

if (maybe === true) {
  const aBoolean: boolean = maybe;
}
if (typeof maybe === 'string') {
  const aString: string = maybe;
}
```

---

## Never

- never 타입은 모든 타입의 subtype 이며, 모든 타입에 할당 가능
- 하지만, never 에는 그 어떤 것도 할당할 수 없음
- any 조차도 never 에게 할당할 수 없음
- 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 함
