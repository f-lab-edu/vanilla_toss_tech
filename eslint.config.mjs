import eslint from '@eslint/js'
import typescriptEslint from 'typescript-eslint'
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
    ignores: ['dist/*', 'node_modules/*', 'parcel-cache/*'],
    rules: {},
  },
]
