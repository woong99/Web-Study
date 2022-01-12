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
