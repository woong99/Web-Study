# Compilation-Context

## 최상위 프로퍼티

- compileOnSave
- extends
- compileOptions
- files
- include
- exclude
- references
- ~~typeAcquisiton~~
- ~~tsNode~~

---

## compileOnSave

```TS
// tsconfig.json
"compileOnSave": true
```

- true / false (default false)
- save 시 compile 을 시켜줌

---

## extends

```TS
// tsconfig.json
"extedns": "./base.json",
```

- 파일 경로명 : string
- 부모 설정을 상속받아 사용한다.

---

## files, include, exclude

- 셋 다 설정이 없으면, 전부 다 컴파일
- files
  - 상대 혹은 절대 경로의 리스트 배열
  - exclude 보다 쎄다
- include, exclude
  - glob 패턴 (마치 .gitignore)
  - include
    - exclude 보다 약함
    - - 같은걸 사용하면, .ts/ .tsx/ .d.ts 만 include
  - exclude
    - 설장 안하면 4가지(node_modules, bower_components, jspm_packages, \<outDir\>)를 default 로 제외
    - \<outDir\>은 항상 제외(include 에 있어도)

---

## compileOptions

### @types

- TypeScript 2.0 부터 사용 가능해진 내장 type definition 시스템
- 아무 설정을 안하면?
  - `node_modules/@types` 라는 모든 경로를 찾아서 사용
- typeRoots 를 사용하면?
  - 배열 안에 들어있는 경로들 아래서만 가져옴
- types 를 사용하면?
  - 배열 안의 모듈 혹은 `./node_modules/@types/` 안의 모듈 이름에서 찾아옴
  - [] 빈 배열을 넣는다는건 이 시스템을 이용하지 않겠다는 것
- typeRoots 와 types 를 같이 사용하지 않음

### target

- 빌드의 결과물을 어떤 버전으로 할 것이냐
- 지정을 안하면 es3

### lib

- 기본 type definition 라이브러리를 이떤 것을 사용할 것이냐
- lib 를 지정하지 않을 때
  - target 이 'es3' 이고, 디폴트로 lib.d.ts 를 사용
  - target 이 'es5' 이면, 디폴트로 dom, es5, scripthost 를 사용
  - target 이 'es6' 이면, 디폴트로 dom, es6, dom.iterable, scripthost 를 사용
- lib 를 지정하면 그 lib 배열로만 라이브러리를 사용
  - 빈 [] => 'no definition found 어쩌구'

### strict

- --noImplicitAny
  - 명시적이지 않게 any 타입을 사용하여, 표현식과 선언에 사용하면, 에러를 발생
    ![image](./assets/noImplicitAny.png)
    - 타입스크립트가 추론을 실패한 경우, any 가 맞으면, any 라고 지정하라
    - 아무것도 쓰지 않으면, 에러를 발생
    - 이 오류를 해결하면, any 라고 지정되어 있지 않은 경우는 any 가 아닌 것이다. (타입 추론이 되었으므로)
- --noImplicitThis
  - 명시적이지 않게 any 타입을 사용하여, this 표현식에 사용하면, 에러를 발생
    ![image](./assets/noImplicitThis.png)
    - 첫번째 매개변수 자리에 this 를 놓고, this 에 대한 타입을 어떤 것이라도 표현하지 않으면, noImplicitAny 가 오류를 발생시킴
    - JS 에서는 매개변수에 this 를 넣으면, 이미 예약된 키워드라 SyntaxError 를 발생시킴
    - call/ apply/ bind 와 같이 this 를 대체하여 함수 콜을 하는 용도로도 쓰임
    - 그래서 this 를 any 로 명시적으로 지정하는 것은 함리적
- --strictNullChecks
  - strictNullChecks 모드에서, null 및 undefined 값이 모든 유형의 도메인에 속하지 않으며, 그 자신을 타입으로 가지거나, any 일 경우에만 할당 가능
  - 한 가지 예외는 undefined 에 void 할당 가능
    ![image](./assets/strictNullChecks.png)
    - strictNullChecks 를 적용하지 않으면
      - 모든 타입은 null, undefined 값을 가질 수 있음
      - string 으로 타입을 지정해도, null 혹은 undefined 값을 할당할 수 있다는 것
    - strictNullChecks 를 적용하면
      - 모든 타입은 null, undefined 값을 가질 수 없고, 가지려면 union type 을 이용해서 직접 명시
      - any 타입은 null 과 undefined 를 가짐. 예외적으로 void 타입의 경우 undefined 를 가짐
    - strictNullChecks 를 적용하지 않고, 어떤 값이 null 과 undefined 를 가진다는 것은 암묵적으로 인정하고 계속 사용하다 보면, 정확히 어떤 타입이 오는지를 개발자 스스로가 간과할 수 있음
    - 정말고 null 과 undefined 를 가질 수 있는 경우, 해당 값을 조건부로 제외하고 사용하는 것이 좋음
    - 이 옵션을 켜고 사용하는 경우 사용하려는 함수를 선언할 때부터 매개변수와 리턴 값에 정확한 타입을 지엉하려는 노력을 기울여야 하고, 기울이게 될 것임
- --strictFunctionTypes
  - 함수 타입에 대한 bivariant 매개변수 검사를 비활성
  - 반환 타입은 공변적
  - 인자 타입은 반공변적
  - 그런데 타입스크립트에서 인자 타입은 공변적이면서, 반공변적인게 문제!
  - 이 문제를 해결하는 옵션이 strictFunctionTypes
  - 옵션을 켜면, 에러가 안나던걸 에러 나게 한다
    ![image](./assets/strictFunctionTypes.png)
- --strictPropertyInitialization
  - 정의되지 않은 클래스의 속성이 생성자에서 초기화되었는지 확인
  - 이 옵션을 사용하려면 `--strictNullChecks`를 사용하도록 설정
    ![image](./assets/strictPropertyInitialization_error.png)
  - constructor 에서 초기 값을 할당한 경우 => 정상
    ![image](./assets/strictPropertyInitialization1.png)
  - constructor 에서 안하는 경우
    - 보통 다른 함수로 이니셜라이즈 하는 경우 (async 함수)
    - constructor 에는 async 를 사용할 수 없다
      ![image](./assets/strictPropertyInitialization2.png)
- --strictBindCallApply
  - Function 의 내장 함수인 bind/ call/ apply 를 사용할 때, 엄격하게 체크하도록 하는 옵션
  - bind 는 해당 함수 안에서 사용할 this 와 인자를 설정해주는 역할을 하고, call 과 apply 는 this 와 인자를 설정한 후, 실행까지 함
  - call 과 apply 는 인자를 설정하는 방식에서 차이점이 있음
    - call 은 함수의 인자를 여러 인자의 나열로 넣어서 사용하고, apply 는 모든 인자를 배열 하나로 넣어서 사용함
- --alwaysStrict
  - 각 소스 파일에 대해 JS 의 strict mode 로 코드를 분석하고, "엄격하게 사용"을 해제함
  - syntax 에러가 ts error 로 나옴
  - 컴파일된 JS 파일에 "use strict" 추가됨
