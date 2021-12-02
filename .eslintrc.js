module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    es6: true,
    browser: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from the plugin:react/recommended
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-uses-react': 'off', // With the new transform, you can use JSX without importing React. See https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    'react/react-in-jsx-scope': 'off', // With the new transform, you can use JSX without importing React. See https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'import/extensions': 'off',
    'no-unused-vars': 'off', // Turn off "native" TS rule
    '@typescript-eslint/explicit-module-boundary-types': ['off'], // Allow inferred function return type
    '@typescript-eslint/no-unused-vars': ['error'], // Enable TS no unused var role
    '@typescript-eslint/no-explicit-any': ['error'], // Block "any" as a type
  },
};
