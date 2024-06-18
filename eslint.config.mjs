import globals from 'globals';
import pluginJs from '@eslint/js';

const type = {
  isString: true,
  isObject: true,
  isArray: true,
  isNull: true,
};

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...type,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
