# SCSS

## 설치

1. `npm init -y`

2. `npm i -D parcel-bundler`

3. `package.json` 수정

- ```json
  "scripts": {
    "dev": "parcel index.html",
    "build": " parcel build index.html"
  },
  ```

4. `index.html` 에 연결

- ```HTML
  <link rel="stylesheet" href="main.scss" />
  ```

---

## 중첩

### 기본 중첩

```CSS
/* CSS */
.container ul li {
  font-size: 40px;
}
.container ul li .name {
  color: royalblue;
}
.container ul li .age {
  color: orange;
}
```

```SCSS
// SCSS
.container {
  ul {
    li {
      font-size: 40px;
      .name {
        color: royalblue;
      }
      .age {
        color: orange;
      }
    }
  }
}
```

### 자식 선택자가 필요한 중첩

```CSS
/* CSS */
.container > ul li {
  font-size: 40px;
}
.container > ul li .name {
  color: royalblue;
}
.container > ul li .age {
  color: orange;
}
```

```SCSS
// SCSS
.container {
  > ul {
    li {
      font-size: 40px;
      .name {
        color: royalblue;
      }
      .age {
        color: orange;
      }
    }
  }
}
```

---

## & - 상위 선택자 참조

### & 에 바로 위의 상위 선택자 문자가 들어온다.

```CSS
/* CSS */
.btn {
  position: absolute;
}
.btn.active {
  color: red;
}

.list li:last-child {
  margin-right: 0;
}

.fs-small {
  font-size: 12px;
}
.fs-medium {
  font-size: 14px;
}
.fs-large {
  font-size: 16px;
}
```

```SCSS
// SCSS
.btn {
  position: absolute;
  &.active {
    color: red;
  }
}

.list {
  li {
    &:last-child {
      margin-right: 0;
    }
  }
}

.fs {
  &-small {
    font-size: 12px;
  }
  &-medium {
    font-size: 14px;
  }
  &-large {
    font-size: 16px;
  }
}
```

---

## 중첩된 속성

```CSS
/* CSS */
.box {
  font-weight: bold;
  font-size: 10px;
  font-family: sans-serif;
  margin-top: 10px;
  margin-left: 20px;
  padding-top: 10px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 30px;
}
```

```SCSS
// SCSS
.box {
  font: {
    weight: bold;
    size: 10px;
    family: sans-serif;
  }
  margin: {
    top: 10px;
    left: 20px;
  }
  padding: {
    top: 10px;
    bottom: 40px;
    left: 20px;
    right: 30px;
  }
}
```

---

## 변수

### 다른 언어의 변수처럼 변수의 유효 범위가 있다. (전역, 지역)

```CSS
/* CSS */
.container {
  position: fixed;
  top: 100px;
}
.container .item {
  width: 100px;
  height: 100px;
  transform: translateX(100px);
}
```

```SCSS
// SCSS
$size: 100px;

.container {
  position: fixed;
  top: $size;
  .item {
    width: $size;
    height: $size;
    transform: translateX($size);
  }
}
```

---

## 산술 연산

```CSS
/* CSS */
div {
  width: 40px;
  height: 30px;
  font-size: 20px;
  margin: 15px;
  padding: 6px;
}
```

```SCSS
// SCSS
div {
  width: 20px + 20px;
  height: 40px - 10px;
  font-size: 10px * 2;
  margin: (30px / 2); // 괄호로 묶거나 다른 방법을 사용한다. 그냥 쓰면 안됩니다!!
  padding: 20px % 7;
}
```

---

## 재활용(Mixins)

### `@mixin` 과 `@include` 를 이용해 자주 사용하는 코드를 재활용한다.

```CSS
/* CSS */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container .item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```SCSS
// SCSS
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  @include center;
  .item {
    @include center;
  }
}
.box {
  @include center;
}
```

### 변수를 이용해 인자로 넘겨주어 값을 바꿀 수도 있다.

```CSS
/* CSS */
.container {
  width: 200px;
  height: 200px;
  background-color: tomato;
}
.container .item {
  width: 100px;
  height: 100px;
  background-color: tomato;
}

.box {
  width: 100px;
  height: 100px;
  background-color: tomato;
}
```

```SCSS
// SCSS
@mixin box($size) {
  width: $size;
  height: $size;
  background-color: tomato;
}
.container {
  @include box(200px);
  .item {
    @include box(100px);
  }
}
.box {
  @include box(100px);
}
```

### : 을 이용해 기본 값을 지정 할 수 있다.

```CSS
/* CSS */
.container {
  width: 200px;
  height: 200px;
  background-color: tomato;
}
.container .item {
  width: 80px;
  height: 80px;
  background-color: tomato;
}

.box {
  width: 80px;
  height: 80px;
  background-color: tomato;
}
```

```SCSS
// SCSS
@mixin box($size: 80px) {
  width: $size;
  height: $size;
  background-color: tomato;
}
.container {
  @include box(200px);
  .item {
    @include box;
  }
}
.box {
  @include box;
}
```

### 2개 이상의 인자도 사용 가능하다!

```CSS
/* CSS */
.container {
  width: 200px;
  height: 200px;
  background-color: tomato;
}
.container .item {
  width: 200px;
  height: 200px;
  background-color: red;
}

.box {
  width: 80px;
  height: 80px;
  background-color: tomato;
}
```

```SCSS
// SCSS
@mixin box($size: 80px, $color: tomato) {
  width: $size;
  height: $size;
  background-color: $color;
}
.container {
  @include box(200px);
  .item {
    @include box($color: red);  // 키워드 인수
  }
}
.box {
  @include box;
}
```

---

## 반복문

```CSS
/* CSS */
.box:nth-child(1) {
  width: 100px;
}

.box:nth-child(2) {
  width: 200px;
}

.box:nth-child(3) {
  width: 300px;
}
```

```SCSS
// SCSS
@for $i from 1 through 3 {
  .box:nth-child(#{$i}) {
    width: 100px * $i;
  }
}
```

---

## 함수

```CSS
/* CSS */
.box {
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```SCSS
// SCSS
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@function ratio($size, $ratio) {
  @return $size * $ratio;
}

.box {
  $width: 100px;
  width: $width;
  height: ratio($width, 1/2);
  @include center();
}
```

---

## 색상 내장 함수

### `mix` - 색상이 섞인다

```CSS
/* CSS */
.box {
  background-color: #a03571;
}
```

```SCSS
// SCSS
.box {
  $color: royalblue;
  background-color: mix($color, red);
}
```

### `lighten` - % 만큼 색상이 밝아진다

```CSS
/* CSS */
.box {
  background-color: #6d8ce8;
}
```

```SCSS
// SCSS
.box {
  $color: royalblue;
  background-color: lighten($color, 10%);
}
```

### `darken` - % 만큼 색상이 어두워진다

```CSS
/* CSS */
.box {
  background-color: #214cce;
}
```

```SCSS
// SCSS
.box {
  $color: royalblue;
  background-color: darken($color, 10%);
}
```

### `saturate` - 채도가 % 만큼 올라간다

```CSS
/* CSS */
.box {
  background-color: #235aff;
}
```

```SCSS
// SCSS
.box {
  $color: royalblue;
  background-color: saturate($color, 40%);
}
```

### `desaturate` - 채도가 % 만큼 떨어진다

```CSS
/* CSS */
.box {
  background-color: #6d7fb5;
}
```

```SCSS
// SCSS
.box {
  $color: royalblue;
  background-color: desaturate($color, 40%);
}
```

### `grayscale` - 회색으로 바꾸어준다

```CSS
/* CSS */
.box {
  background-color: #919191;
}
```

```SCSS
// SCSS
.box {
  $color: royalblue;
  background-color: grayscale($color);
}
```

### `invert` - 색을 반전시킨다

```CSS
/* CSS */
.box {
  background-color: #be961e;
}
```

```SCSS
// SCSS
.box {
  $color: royalblue;
  background-color: invert($color);
}
```

---

## 가져오기

#### CSS 와는 다르게 아래와 같이 간단한 구조로 다른 SCSS 파일을 가져올 수 있다.

```SCSS
// SCSS
@import './sub', '/sub2.scss';  // 확장자 생략 가능!
```

---

## 데이터 종류

```SCSS
// SCSS
$number: 1; // .5, 100px, 1em
$string: bold; // relative, "../images/a.png"
$color: red; // blue, #FFFF00, rgba(0,0,0,.1)
$boolean: true; // false
$null: null;
$list: orange, royalblue, yellow;
$map: (
  o: orange,
  r: royalblue,
  y: yellow,
); ;
```

---

## @each

```CSS
/* CSS */
.box {
  color: orange;
}

.box {
  color: royalblue;
}

.box {
  color: yellow;
}

.box-o {
  color: orange;
}

.box-r {
  color: royalblue;
}

.box-y {
  color: yellow;
}
```

```SCSS
// SCSS
$list: orange, royalblue, yellow;
$map: (
  o: orange,
  r: royalblue,
  y: yellow,
);

@each $c in $list {
  .box {
    color: $c;
  }
}
@each $k, $v in $map {
  .box-#{$k} {
    color: $v;
  }
}
```

---

## @content

#### `@content` 를 이용해서 코드를 재활용하면서 내용을 추가할 수 있다

```CSS
/* CSS */
.container {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
}

.box {
  width: 200px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
```

```SCSS
// SCSS
@mixin left-top {
  position: absolute;
  top: 0;
  left: 0;
  @content;
}
.container {
  width: 100px;
  height: 100px;
  @include left-top();
}
.box {
  width: 200px;
  height: 300px;
  @include left-top {
    bottom: 0;
    right: 0;
    margin: auto;
  }
}
```
