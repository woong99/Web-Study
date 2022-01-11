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
