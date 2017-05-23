module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		sourceType: 'module',

		// Enable JSX
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: [
		'react',
	],
	rules: {
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-unused-vars': ['warn'],
		'no-console': 0,
	},
};