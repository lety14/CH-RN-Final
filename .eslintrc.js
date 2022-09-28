module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
};
