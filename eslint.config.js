import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		extends: [
			'plugin:prettier/recommended',
			'eslint:recommended',
			'plugin:@typescript-eslint/recommended',
			'prettier'
		],
		files: ['**/*.{js,mjs,cjs,ts}'],
		languageOptions: {
			globals: globals.node,
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module'
			}
		},
		plugins: {
			tsLintPlugin: '@typescript-eslint',
			prettier: 'prettier'
		},
		rules: {
			'prettier/prettier': 'error',
			'no-case-declarations': 'off',
			'no-constant-condition': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/no-var-requires': 'off',
			'no-unused-vars': 'off'
		}
	}
];
