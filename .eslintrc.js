require('@babel/register');

module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    allowImportExportEverywhere: true,
    codeFrame: false,
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  extends: ["airbnb", "prettier"],
  env: {
    browser: true,
    jest: true
  },
  rules: {
    "max-len": ["error", { code: 100 }],
    "prefer-promise-reject-errors": ["off"],
    "react/jsx-filename-extension": ["off"],
    "react/prop-types": ["warn"],
    "react/forbid-prop-types": ["off"],
    "no-return-assign": ["off"],
    "import/prefer-default-export": ["off"],
    "no-console": ["off"],
    "import/no-extraneous-dependencies": ["off"],
    "import/order": ["off"]
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "webpack.config.prod.js"
      }
    }
  }
};
