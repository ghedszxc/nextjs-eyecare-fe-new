import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'
import storybook from 'eslint-plugin-storybook'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'

export default tseslint.config(
  // 1. Base JS & TS Recommended
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': hooksPlugin,
      import: importPlugin,
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
      // Logic & Cleanliness
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'import/no-duplicates': 'error',

      // TypeScript
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',

      // React (Library standard)
      ...reactPlugin.configs.recommended.rules,
      ...hooksPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unstable-nested-components': 'warn',

      // Import hygiene
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
    },
  },

  // 2. Storybook configuration
  ...storybook.configs['flat/recommended'],

  // 3. Prettier (Must be last to override other rules)
  prettierConfig,

  // 4. Global Ignores
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', 'coverage/**', '.storybook/static/**'],
  }
)
