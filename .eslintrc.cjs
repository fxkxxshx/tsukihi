module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  plugins: ['simple-import-sort', 'import', 'unused-imports', 'tailwindcss'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'unused-imports/no-unused-imports': 'error',
  },
  env: {
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
  settings: {
    tailwindcss: {
      groupByResponsive: true,
      whitelist: ['^swiper(?:-[a-zA-Z]+)*$'],
    },
  },
};
