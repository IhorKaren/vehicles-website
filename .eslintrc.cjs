module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: { react: { version: "detect" } },
  plugins: ["react", "react-refresh", "prettier", "simple-import-sort"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "prettier/prettier": ["warn", { endOfLine: "auto" }],
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Packages `react` related packages come first.
              ["react", "react(.*)"],
              ["@mui/(.*)"],
              // Side effect imports.
              ["^\\u0000", "^"],
              // Packages starter with "@" or "@components" or "./"
              ["^(@.*)(/.*|$)", "^\\."],
              // svg files
              ["^.+\\.?(svg|jpg|png|jpeg|gif|webp)$"],
              // Style imports.
              ["^.+\\.?(css|scss)$"],
            ],
          },
        ],
      },
    },
  ],
};
