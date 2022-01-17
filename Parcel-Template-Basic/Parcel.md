# Parcel

## 프로젝트 생성

1. 터미널에 `npm init -y` 입력
2. 터미널에 `npm i -D parcel-bundler` 입력
3. `package.json` 에 아래와 같이 입력
   ```JSON
    "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
   },
   ```
4. 터미널에 `npm run dev` 를 통해 기존에 사용하던 라이브 서버처럼 페이지를 열 수 있다!

---

## 정적 파일 연결

parcel-plugin-static-files-copy 설치

1. 터미널에 `npm i -D parcel-plugin-static-files-copy` 입력 해 설치
2. `package.json` 에 아래와 같이 입력
   ```JSON "staticFiles":{
    "staticPath": "static"
   }
   ```
3. 프로젝트 최상위 경로에 `static` 이라는 폴더를 만든 후 파일을 집어넣는다

---

## autoprefixer

1. 터미널에 `npm i -D postcss autoprefixer` 입력
2. `package.json` 에 아래와 같이 입력

   ```JSON
   // browserslist 옵션은 현재 NPM 프로젝트에서 지원할 브라우저의 범위를 명시하는 용도이다. 그 명시를 Autoprefixer 패키지가 활용하게 된다.
    "browserslist": [
        "> 1%",
        "last 2 versions"
   ]
   ```

3. 폴더의 최상위 경로에 `.postcssrc.js` 생성
4. 아래와 같이 입력
   ```JS
    module.exports = {
   plugins: [require('autoprefixer')],
   };
   ```

---

## babel

1. 터미널에 `npm i -D @babel/core @babel/preset-env` 입력
2. 최상위 경로에 `.babelrc.js` 를 만들고 아래와 같이 입력
   ```JS
    module.exports = {
   presets: ['@babel/preset-env'],
   };
   ```
3. 비동기 함수 사용법 예제
   1. 터미널에 `npm i -D @babel/plugin-transform-runtime` 입력
   2. `.babelrc.js` 에 아래와 같이 입력
      ```JS
        module.exports = {
        presets: ['@babel/preset-env'],
        plugins: [['@babel/plugin-transform-runtime']],
        };
      ```
