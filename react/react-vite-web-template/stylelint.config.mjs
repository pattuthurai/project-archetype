/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-tailwindcss',
    'stylelint-config-standard-scss',
  ],

  plugins: ['stylelint-order', 'stylelint-scss'],

  customSyntax: 'postcss-html',

  ignoreFiles: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/coverage/**'],

  rules: {
    /* General */
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'declaration-block-no-duplicate-properties': true,
    'no-empty-source': true,

    /* Selectors */
    'selector-max-id': 0,
    'selector-max-universal': 0,
    'max-nesting-depth': 3,

    /* Vendor prefixes */
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,

    /* Property ordering */
    'order/properties-alphabetical-order': true,

    /* Tailwind */
    'at-rule-no-unknown': null,

    'scss/at-rule-no-unknown': true,
  },
};
