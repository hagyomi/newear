import hooks from 'eslint-plugin-react-hooks';
import refresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['.tools/**', 'dist/**', 'node_modules/**', 'public/**'] },
  {
    files: ['src/**/*.{js,jsx}', '*.config.js'],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module', parserOptions: { ecmaFeatures: { jsx: true } } },
    plugins: { 'react-hooks': hooks, 'react-refresh': refresh },
    rules: { ...hooks.configs.recommended.rules, 'react-refresh/only-export-components': 'error', 'no-unreachable': 'error', 'no-duplicate-imports': 'error', 'no-constant-condition': 'error' },
  },
];
