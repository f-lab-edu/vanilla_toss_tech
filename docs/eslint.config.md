# ESLint 설정

**파일:** `eslint.config.js`

```javascript
import eslint from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import importPlugin from 'eslint-plugin-import'

export default [
  eslint.configs.recommended,
  ...typescriptEslint.configs.recommended,
  {
    files: ['src/**/*.ts', 'src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: '@typescript-eslint/parser',
    },
    plugins: {
      import: importPlugin,
    },
    ignorePatterns: ['dist/*', 'node_modules/*', 'parcel-cache/*'],
    rules: {},
  },
]
```

- `ESLint`: 기본적으로 `eslint:recommended` 규칙을 사용하여 기본적인 코드 품질 검사를 수행합니다.
- `TypeScript ESLint`: TypeScript 코드에 대해 ESLint 규칙을 적용하기 위한 플러그인입니다. `@typescript-eslint/recommended` 설정을 포함하여 TypeScript에 적합한 규칙을 적용합니다.
- `files`: ESLint가 적용될 파일 경로를 지정합니다. TypeScript와 JavaScript 파일이 포함됩니다.
- `languageOptions`: ECMAScript 버전과 모듈 시스템을 설정합니다. 최신 ECMAScript 버전과 모듈을 사용하도록 설정됩니다.
- `parserOptions`: TypeScript를 파싱하기 위해 `@typescript-eslint/parser`를 사용합니다.
- `ignorePatterns`: ESLint가 무시할 파일 및 디렉토리 패턴을 설정합니다.
