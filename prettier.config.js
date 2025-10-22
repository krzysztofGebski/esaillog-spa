/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100,
  singleQuote: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'es5',
  semi: true,
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'angular',
      },
    },
  ],
};
