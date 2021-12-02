module.exports = {
  singleQuote: true,
  printWidth: 84,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  arrowParens: 'avoid',
  parser: 'typescript',

  // @trivago/prettier-plugin-sort-imports
  importOrder: [
    '^@components/(.*)$',
    '^@config/(.*)$',
    '^@stores/(.*)$',
    '^@hooks/(.*)$',
    '^@layouts/(.*)$',
    '^@models/(.*)$',
    '^@about-us/(.*)$',
    '^@cart/(.*)$',
    '^@checkout/(.*)$',
    '^@contact/(.*)$',
    '^@home/(.*)$',
    '^@password/(.*)$',
    '^@product/(.*)$',
    '^@user/(.*)$',
    '^@themes/(.*)$',
    '^@utils/(.*)$',
    '^@services',
    '^[./]', // ./styles, ./types, ./anything
  ],
  importOrderSeparation: true,
};
