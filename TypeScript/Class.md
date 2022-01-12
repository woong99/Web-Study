# Class

## What is Class

- class 키워드를 이용하여 클래스를 만들 수 있다.
- class 이름은 보통 대문자를 이용한다.
- new 를 이용하여 class 를 통해 object 를 만들 수 있다.
- constructor 를 이용하여 object 를 생성하면서 값을 전달할 수 있다.
- this 를 이용해서 만들어진 object 를 가리킬 수 있다.
- JS 로 컴파일되면 es5의 경우 function 으로 변경된다.

```TS
// Ex)
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p1 = new Person('Mark');

console.log(p1);
```

---

## Constructor & Initialize

- 생성자 함수가 없으면, 디폴트 생성자가 불린다.
- 프로그래머가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다.
- strict 모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당해야 한다.
- 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당하지 않는 경우에는 !를 붙여서 위험을 표현한다.
- 클래스의 프로퍼티가 정의되어 있지만, 값을 대입하지 않으면 undefined 이다.
- 생성자에는 async 를 설정할 수 없다.

---

## 접근 제어자

- 접근 제어자에는 `public, private, protected` 가 있다.
- 설정하지 않으면 public 이다.
- 클래스 내부의 모든 곳에 (생성자, 프로퍼티, 메소드) 설정 가능하다.
- private 으로 설정하면 클래스 외부에서 접근할 수 없다.
- JS 에서는 private 를 지원하지 않아 오랜동안 프로퍼티나 메소드 이름 앞에 \_를 붙여서 표현했다.

---

## 생성자를 편하게 만드는 방법!!

```TS
class Person {
  public constructor(public name: string, public age: number) {}
}   // public 을 이용하면 알아서 this.~~~ = ~~~ 형태로 들어간다.

const p1: Person = new Person('Mark', 23);

console.log(p1);
```

---

## Getters & Setters

```TS
class Person {
  public constructor(private _name: string, public age: number) {}

  get name() {
    return this._name + ' Jeong';
  }

  set name(n: string) {
    this._name = n;
  }
}

const p1: Person = new Person('Mark', 23);

console.log(p1.name);   // get 을 하는 함수 getter
p1.name = 'kim';    // set 을 하는 함수 setter
console.log(p1.name);
```

---

## Readonly Properties

`constructor`안에서만 수정이 가능하다!!

```TS
class Person {
  public readonly name: String = 'Mark';
  private readonly country: string = 'Korea';
  public constructor(private _name: string, public age: number) {
        this.country = 'Japan'; // 가능

  hello(): void {
    this.country = 'China'; // error
  }
}

const p1: Person = new Person('Mark', 23);

console.log(p1.name);
p1.name = 'kim'; // error
console.log(p1.name);
```

---

## Index Signatures

```TS
// class => object
// {mark: 'male', jade: 'male'}
// {chloe: 'female', alex: 'male', anna: 'female'}

class Students {
  [index: string]: 'male' | 'female';
}

const a = new Students();
a.mark = 'male';
a.jade = 'male';

console.log(a); // Students { mark: 'male', jade: 'male' }

const b = new Students();
b.chloe = 'female';
b.alex = 'male';
b.anna = 'female';

console.log(b); // Students { chloe: 'female', alex: 'male', anna: 'female' }
```

---

## Static Properties & Methods

```TS
class Person {
  public static CITY = 'Seoul';
  public static hello() {
    console.log('Hi~', Person.CITY);
  }
}

const p1 = new Person();
p1.hello(); // error
Person.hello();
console.log(Person.CITY);
```

공유가 가능하다.

```TS
class Person {
  public static CITY = 'Seoul';
  public hello() {
    console.log('Hi~', Person.CITY);
  }
  public change() {
    Person.CITY = 'LA';
  }
}

const p1 = new Person();
p1.hello();

const p2 = new Person();
p2.hello();     // Hi~ Seoul
p1.change();    // Hi~ Seoul
p2.hello();     // Hi~ LA
```

---

## Singletons

```TS
class ClassName {
  private static instance: ClassName | null = null;
  public static getInstance(): ClassName {
    // ClassName 으로 부터 만든 object 가 있으면 그걸 Return
    // 없으면, 만들어서 리턴
    if (ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }
    return ClassName.instance;
  }
  private constructor() {}
}

const a = ClassName.getInstance();
const b = ClassName.getInstance();

console.log(a === b); // true
```

---

## 상속

```TS
class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this._name} 이고, 나이는 ${this._age}`);
  }
}

const p = new Parent('Woong', 28);
p.print();  // 이름은 Woong 이고, 나이는 28

class Child extends Parent {
  public gender = 'male';

  constructor(age: number) {
    super('Mark Jr.', age);
  }
}
const c = new Child(23);

c.print();  // 이름은 Mark Jr. 이고, 나이는 23
```

---

## Abstract Class

```TS
abstract class AbstractPerson {
  protected _name: string = 'Mark';

  abstract setName(name: string): void;
}

// new AbstractPerson()

class Person extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}
const p = new Person();
p.setName('Woong');
```
