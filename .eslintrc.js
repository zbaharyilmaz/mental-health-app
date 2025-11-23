module.exports = {
  extends: [
    "react-app",
    "react-app/jest"
  ],
  rules: {
    // TypeScript kurallarını kapat
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-var-requires": "off",
    "typescript-eslint/no-var-requires": "off",
    // React kurallarını kapat
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "off",
    // Genel kurallar
    "no-undef": "off",
    "no-unused-vars": "off"
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "no-undef": "off"
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  }
};

