import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: ['generate-icons.js', '.next/**/*', 'node_modules/**/*']
  },
  {
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
      'import': importPlugin,
      'unused-imports': unusedImports
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
        }
      ],
      // Запрет React.useState и подобных
      'no-restricted-syntax': [
        'error',
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
