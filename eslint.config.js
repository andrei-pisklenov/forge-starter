import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin'; // https://eslint.style/guide/getting-started
import tseslint from 'typescript-eslint';

export default [
  eslint.configs.recommended, // eslint-disable-line @typescript-eslint/no-unsafe-member-access
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    braceStyle: '1tbs',
    semi: true,
    jsx: true,
  }),
  {
    languageOptions: {
      parserOptions: {
        project: [
          './packages/*/tsconfig.json',
          './tsconfig.json',
        ],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-invalid-void-type': 'off',
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/no-unsafe-enum-comparison': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false,
        },
      ],
      '@stylistic/member-delimiter-style': [
        'warn',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
        },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];
