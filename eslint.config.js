import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
  {
    ignores: [
      'build/**',
      'node_modules/**',
      'vite.config.ts',
      '**/*.module.d.scss.ts',
    ],
  },
  tseslint.configs.recommended,
  {
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      curly: ['error', 'all'],
    },
  },
);
