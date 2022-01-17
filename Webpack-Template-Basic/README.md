# Webpack

## 프로젝트 생성

1. 터미널에 `npm init -y` 입력
2. 터미널에 `npm i -D webpack webpack-cli webpack-dev-server@next` 입력
3. `package.json` 에 아래와 같이 입력
   ```JSON
    "scripts": {
    "dev": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
   },
   ```
4. 최상위 경로에 `webpack.config.js` 생성 및 아래와 같이 추가

   ```JS
    // import
    const path = require('path');

    // export
    module.exports = {
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',

    // 결과물(번들)을 반환하는 설정
    output: {
        // 기본 값
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',
        clean: true,
    },
    };
   ```

---

## Plugins

1. 터미널에 `npm i -D html-webpack-plugin` 입력
2. `webpack.config.js` 에 아래 내용 추가

   ```JS
    const HtmlPlugin = require('html-webpack-plugin');

     // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
        template: './index.html',
        }),
    ],
    devServer: {
        host: 'localhost',
    },
   ```

---

## 정적 파일 연결

1. 터미널에서 `npm i -D copy-webpack-plugin` 입력
2. `webpack.config.js` 에 아래 내용 추가
   ```JS
    const CopyPlugin = require('copy-webpack-plugin');
    plugins: [
    new CopyPlugin({
      patterns: [{ from: 'static' }],
        }),
    ],
   ```

---

## Modules

### CSS 적용 방법 1

`static` 폴더 안에 집어 넣는다.

### CSS 적용 방법 2

1. 최상위 경로에 CSS 를 만든다.
2. 터미널에 `npm i -D css-loader style-loader` 입력
3. `main.js` 에 `import '../css/main.css'` 입력
4. `webpack.config.js` 에 아래 내용 추가
   ```JS
    module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
   }
   ```

---

## SCSS 적용

1. 최상위 경로에 SCSS 폴더 및 파일 생성
2. 터미널에 `npm i -D sass-loader sass` 입력
3. `webpack.config.js` 에 test 를 `test: /\.s?css$/` 로 변경
4. `webpack.config.js` 에 `module/rules/use` 에 `'sass-loader'` 추가

---

## Autoprefixer(PostCSS)

1. 터미널에 `npm i -D postcss autoprefixer postcss-loader` 입력
2. `webpack.config.js` 의 use 를 `use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],` 로 변경
3. `package.json` 에 아래 내용 추가
   ```JSON
    "browserslist": [
        "> 1%",
        "last 2 versions"
    ]
   ```
4. 최상위 경로에 `.postcssrc.js` 추가 및 아래 내용 추가
   ```JS
    module.exports = {
        plugins: [require('autoprefixer')],
    };
   ```

---

## Babel

1. 터미널에 `npm i -D @babel/core @babel/preset-env @babel/plugin-transform-runtime` 입력
2. 최상위 경로에 `.babelrc.js` 생성 및 아래 내용 추가
   ```JS
    module.exports = {
        presets: ['@babel/preset-env'],
        plugins: [['@babel/plugin-transform-runtime']],
    };
   ```
3. `webpack.config.js` 에 `module/rules` 에 아래 내용 추가
   ```JS
    {
    test: /\.js$/,
    use: ['babel-loader'],
    },
   ```
4. 터미널에 `npm i -D babel-loader` 입력
