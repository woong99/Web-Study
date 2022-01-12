# Interface

## 예시

### interface 사용 X

```TS
function hello1(person: { name: string; age: number }): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: { name: string; age: number } = {
  name: 'Mark',
  age: 39,
};

hello1(p1);
```

### interface 사용 O

```TS
interface Person1 {
  name: string;
  age: number;
}

function hello1(person: Person1): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: Person1 = {
  name: 'Mark',
  age: 39,
};

hello1(p1);
```

---

## Optional Property

### ? 사용

```TS
interface Person1 {
  name: string;
  age: number;
}
interface Person2 {
  name: string;
  age?: number; // 없어도 된다
}

function hello1(person: Person1): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

hello1({ name: 'Mark' });      // error, age도 필요하다

function hello2(person: Person2): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}
hello2({ name: 'Mark' });   // 가능
```

### [ ] 사용

```TS
interface Person3 {
  name: string;
  age?: number;
  [index: string]: any; // 어떠한 Property가 들어와도 상관 없다
}

function hello3(person: Person3): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p31: Person3 = {
  name: 'Mark',
  age: 39,
};

const p32: Person3 = {
  name: 'Anna',
  systers: ['Sung', 'Chan'],
};

const p33: Person3 = {
  name: 'Bokdaengi',
  father: p31,
  mother: p32,
};
```

---

## Function in Interface

```TS
interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: 'Mark',
  age: 29,
  hello: function (): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  },
};

const p42: Person4 = {
  name: 'Mark',
  age: 29,
  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  },
};

p41.hello();
p42.hello();
```

---

## Class Implements Interface

```TS
interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요! ${this.name}입니다.`);
  }
}

const person = new Person('Mark');
person.hello();
```

---

## Interface Extends Interface

```TS
interface IPerson2 {
  name: string;
  age?: number;
}

interface IKorean extends IPerson2 {
  city: string;
}

const k: IKorean = {
  name: 'Woong',
  city: 'Seoul',
  age: 24,
};
```

---

## Function Interface

```TS
interface HelloPerson {
  (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function (name: string, age?: number) {
  console.log(`안녕하세요! ${name}입니다.`);
};
```

---

## Readonly Interface Properties

수정이 불가능하다!

```TS
interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: 'Woong',
  gender: 'male',
};

p81.gender = 'female';  // Error
```

---

## Type Alias VS Interface

### Function

```TS
// type alias
type EatType = (food: string) => void;

// interface
interface IEat {
  (food: string): void;
}
```

### Array

```TS
// type alias
type PersonList = string[];

// interface
interface IPersonList {
  [index: number]: string;
}
```

### Intersection

```TS
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtistsData {
  artists: { name: string }[];
}

// type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;

// interface
interface IArtistsResponse extends ErrorHandling, ArtistsData {}
```

### Union

```TS
interface Bird {
  fly(): void;
  layEggs(): void;
}
interface Fish {
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish;

interface Ipet extends PetType{}    // Error

class Pet implements PetType{}  // Error
```

### Declaration Merging - interface

Interface 만 가능!!

```TS
interface MergingInterface {
  a: string;
}

interface MergingInterface {
  b: string;
}
let mi: MergingInterface;   // 두 개가 합쳐진다
```
