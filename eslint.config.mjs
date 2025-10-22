import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import unusedImports from 'eslint-plugin-unused-imports';

const eslintConfig = [
  {
    ignores: ['generate-icons.js', '.next/**/*', 'node_modules/**/*']
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
      'import': importPlugin,
      'react': reactPlugin,
      'unused-imports': unusedImports
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'sort-imports': 'off',
      'import/order': [
        'error',
        {
          'groups': ['builtin', 'external', 'internal', ['parent', 'sibling']],
          'pathGroups': [
            {
              pattern: 'react',
              group: 'external',
              position: 'before'
            }
          ],
          'pathGroupsExcludedImportTypes': ['react'],
          'newlines-between': 'always',
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ],
      'import/no-relative-parent-imports': [
        'error',
        {
          ignore: ['@/']
        }
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      // Запрет function компонентов, только const
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function'
        }
      ],
      // Запрет FC типов через no-restricted-syntax
      'react/no-typos': 'error',
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSTypeReference[typeName.name="FC"]',
          message: 'Use explicit function return type instead of React.FC'
        },
        {
          selector: 'TSTypeReference[typeName.name="FunctionComponent"]',
          message:
            'Use explicit function return type instead of React.FunctionComponent'
        },
        {
          selector:
            'MemberExpression[object.name="React"][property.name=/^use[A-Z]/]',
          message: 'Import hooks directly from react, not React.hookName'
        }
      ]
    }
  }
];

export default eslintConfig;
