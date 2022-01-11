# Type-System

## structural type system - 구조가 같으면, 같은 타입이다.

### `타입스트립트는 이 방식을 따른다.`

```TS
interface IPerson {
  name: string;
  age: number;
  speak(): string;
}

type PersonType = {
  name: string;
  age: number;
  speak(): string;
};

let personInterface: IPerson = {} as any;
let personType: PersonType = {} as any;

personInterface = personType;
personType = personInterface;
```

## nominal type system - 구조가 같아도 이름이 다르면, 다른 타입이다.

```TS
type PersonID = string & { readonly brand: unique symbol };

function PersonID(id: string): PersonID {
  return id as PersonID;
}

function getPersonById(id: PersonID) {}

getPersonById(PersonID('id-aaaaaa'));
getPersonById('id-aaaaaa');
```

---

## 타입 호환성

### 서브 타입

```TS
// sub1 타입은 sup1 타입의 서브 타입이다.
let sub1: 1 = 1;
let sup1: number = sub1;
sub1 = sup1;    // error

// sub2 타입은 sup2 타입의 서브 타입이다.
let sub2: number[] = [1];
let sup2: object = sub2;
sub2 = sup2;    // error

// sub3 타입은 sup3 타입의 서브 타입이다.
let sub3: [number, number] = [1, 2];
let sup3: number[] = sub3;
sub3 = sup3;    // error

// sub4 타입은 sup4 타입의 서브 타입이다.
let sub4: number = 1;
let sup4: any = sub4;
sub4 = sup4;

// sub5 타입은 sup5 타입의 서브 타입이다.
let sub5: never = 0 as never;
let sup5: number = sub5;
sub5 = sup5;    // error

class Animal {}
class Dog extends Animal {
  eat() {}
}

// sub6 타입은 sup6 타입의 서브 타입이다.
let sub6: Dog = new Dog();
let sup6: Animal = sub6;
sub6 = sup6;    // error
```

### 1. 같거나 서브 타입인 경우, 할당이 가능하다 => `공변`

```TS
// primitive type
let sub7: string = '';
let sup7: string | number = sub7;

// object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
let sub8: { a: string; b: number } = { a: '', b: 1 };
let sup8: { a: string | number; b: number } = sub8;

// array - object 와 마찬가지
let sub9: Array<{ a: string; b: number }> = [{ a: '', b: 1 }];
let sup9: Array<{ a: string | number; b: number }> = sub8;
```

### 2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다 => `반병`

```TS
class Person {}
class Developer extends Person {
  coding() {}
}
class StartupDeveloper extends Developer {
  burning() {}
}

function tellme(f: (d: Developer) => Developer) {}

// Developer => Developer 에다가 Developer => Developer 를 할당하는 경우
tellme(function dToD(d: Developer): Developer {
  return new Developer();
});

// Developer => Developer 에다가 Person => Developer 를 할당하는 경우
tellme(function pToD(d: Person): Developer {
  return new Developer();
});

// Developer => Developer 에다가 StartupDeveloper => Developer 를 할당하는 경우
tellme(function sToD(d: StartupDeveloper): Developer {
  return new Developer();
}); // error
```

#### `strictFunctionTypes` 옵션을 켜면 함수를 할당할 시에 함수의 매개변수 타입이 같거나 슈퍼타입인 경우가 아닌 경우, 에러를 통해 경고한다.

---

## 타입 별칭

- Interface 랑 비슷해 보임
- Primitive, Union Type, Tuple, Function
- 기타 직접 작성해야하는 타입을 다른 이름으로 지정할 수 있음
- 만들어진 타입의 refer 로 사용하는 것이지 타입을 만드는 것은 아님

### Aliasing Primitive

```TS
type MyStringType = string;

const str = 'world';

let myStr: MyStringType = 'hello';
myStr = str;
// 별 의미가 없음,,,
```

### Aliasing Union TYpe

```TS
let person: string | number = 0;
person = 'Mark';

type StringOrNumber = string | number;

let another: StringOrNumber = 0;
another = 'Anna';
// 유니온 타입은 A도 가능하고 B도 가능한 타입
// 길게 쓰는 걸 짧게 가능
```

### Aliasing Tuple

```TS
let person: [string, number] = ['Mark', 35];

type PersonTuple = [string, number];

let another: PersonTuple = ['Anna', 24];
// 튜플 타입에 별칭을 줘서 여러 곳에서 사용 가능
```

### Aliasing Function

```TS
type EatType = (food: string) => void;
```

---
