// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const prettier = require("eslint-config-prettier");

module.exports = [
  {
    // Ignore patterns for common build artifacts and dependencies
    ignores: ["node_modules/", "dist/", "tmp/", ".angular/", "coverage/"],
  },
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    languageOptions: {
      // Define the environment for TypeScript files
      env: {
        browser: true, // Enable browser global variables
        es2022: true,  // Enable ES2022 global variables and syntax
      },
      parserOptions: {
        project: true, // Enable type-aware linting
        tsconfigRootDir: __dirname, // Specify the root directory for tsconfig.json
      },
    },
    rules: {
      // The processor is now part of languageOptions
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "eslg",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "eslg",
          style: "kebab-case",
        },
      ],
      // --- General ESLint Rules ---
      "no-console": ["warn", { allow: ["warn", "error"] }], // Warn about console.log, but allow warn/error
      "no-debugger": "warn", // Warn about debugger statements
      "eqeqeq": ["error", "always"], // Enforce strict equality (=== and !==)
      "prefer-const": "error", // Require const for variables that are never reassigned
      "no-var": "error", // Disallow var

      // --- TypeScript ESLint Rules ---
      "@typescript-eslint/no-explicit-any": "warn", // Warn about using 'any'
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_", // Ignore unused arguments starting with _
          varsIgnorePattern: "^_", // Ignore unused variables starting with _
          caughtErrorsIgnorePattern: "^_", // Ignore caught errors starting with _
        },
      ],
      // "@typescript-eslint/explicit-function-return-type": [ // Can be very strict, enable if desired
      //   "warn",
      //   {
      //     allowExpressions: true,
      //     allowTypedFunctionExpressions: true,
      //     allowHigherOrderFunctions: true,
      //   },
      // ],

      // --- Angular ESLint Rules ---
      "@angular-eslint/no-empty-lifecycle-method": "error", // Disallow empty lifecycle methods
      "@angular-eslint/no-host-metadata-property": "error", // Disallow 'host' metadata property
      "@angular-eslint/no-input-rename": "error", // Disallow renaming inputs
      "@angular-eslint/no-output-rename": "error", // Disallow renaming outputs
      "@angular-eslint/use-pipe-transform-interface": "error", // Enforce pipes to implement PipeTransform
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },
  prettier,
];
