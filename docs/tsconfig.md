# TypeScript 설정

**파일:** `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "esnext",
    "lib": ["es2017", "DOM"],
    "strict": true,
    "experimentalDecorators": true,
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "noImplicitAny": true,
    "noEmit": true,
    "skipLibCheck": true,
    "useUnknownInCatchVariables": false,
    "baseUrl": ".",
    "paths": {
      "@assets/*": ["src/assets/*"],
      "@constants/*": ["src/constants/*"],
      "@utils/*": ["src/utils/*"],
      "src/*": ["src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.js"],
  "exclude": ["node_modules", "dist", ".parcel-cache"]
}
```

- `compilerOptions`: TypeScript 컴파일러의 동작을 설정합니다.
- `target`: 최신 ECMAScript 문법을 사용하도록 설정합니다.
- `lib`: TypeScript가 사용할 라이브러리를 설정합니다. ES2017과 DOM을 포함합니다.
- `strict`: 엄격한 타입 검사를 활성화합니다.
- `experimentalDecorators`: 데코레이터를 사용할 수 있도록 설정합니다.
- `allowJs`: JavaScript 파일을 TypeScript에서 허용합니다.
- `allowSyntheticDefaultImports`: 기본값 가져오기를 허용합니다.
- `esModuleInterop`: CommonJS와 ES 모듈 간의 호환성을 설정합니다.
- `isolatedModules`: 모듈 격리 설정입니다.
- `noImplicitAny`: 암시적 `any` 타입을 허용하지 않습니다.
- `noEmit`: 컴파일된 결과물을 생성하지 않습니다.
- `skipLibCheck`: `node_modules`의 타입 선언 파일 검사를 생략합니다.
- `useUnknownInCatchVariables`: `try-catch` 블록에서 `unknown` 대신 `any`를 사용합니다.
- `baseUrl`: 모듈 경로의 기준 경로를 설정합니다.
- `paths`: 모듈 경로의 별칭을 설정합니다.
- `include`: TypeScript가 포함할 파일 경로를 설정합니다.
- `exclude`: TypeScript가 제외할 파일 및 디렉토리 패턴을 설정합니다.
