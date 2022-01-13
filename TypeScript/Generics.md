# Generics

## Generics VS Any

```TS
function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 더 많은 반복된 함수들...

// Any
function hello(message: any): any {
  return message;
}

// Any 타입으로 선언 시 반환 타입도 Any 이기 때문에 여러 가지 기능들을 사용하지 못한다.
console.log(hello('Mark').length); // 사용 불가
console.log(hello(30));

// Generics
function helloGeneric<T>(message: T): T {
  return message;
}

console.log(helloGeneric('Hello').legnth);  // 사용 가능
console.log(helloGeneric(39));
console.log(helloGeneric(true));

```

---

## Generics Basic

```TS
function helloBasic<T>(message: T): T {
  return message;
}

helloBasic<string>(32); // error
helloBasic<string>('hello!');
helloBasic(36);

// 여러 개의 타입도 사용이 가능하다!
function helloBasic1<T, U>(message: T, comment: U): T {
  return message;
}

helloBasic1<string, number>('hello!', 32);
helloBasic1('Hi~', 36);
```

---

## Generics Array & Tuple

```TS
// Array
function helloArray<T>(message: T[]): T {
  return message[0];
}

helloArray(['Hello', 'World']);
helloArray(['Hello', 5]);

// Tuple
function helloTuple<T, U>(message: [T, U]): T {
  return message[0];
}

helloTuple(['Hello', 'World']);
helloTuple(['Hello', 5]);
```

---

## Generics Function

```TS
// Type Alias
type HelloFunctionGeneric1 = <T>(message: T) => T;

const helloFunction1: HelloFunctionGeneric1 = <T>(message: T): T => {
  return message;
};

// Interface
interface HelloFunctionGeneric2 {
  <T>(message: T): T;
}

const helloFunction2: HelloFunctionGeneric2 = <T>(message: T): T => {
  return message;
};
```

---

## Generics Class

```TS
class Person<T, K> {
  private _name: T;
  private _age: K;
  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Person('Mark', 32);
new Person<string, number>('Kim', 32);
new Person(32, 12);
```

---

## Generics with Extends

```TS
// Generics 를 사용 할 때는 이 기능을 필수적으로 사용하자!
class PersonExtends<T extends string | number> {// string | number 만 가능
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends('Mark');
new PersonExtends(348);
new PersonExtends(true); // error
```

---

## keyof & type lookup

```TS
interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: 'Mark',
  age: 39,
};

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}
```
