module.exports = {
	parser: 'babel-eslint',
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
		'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
	parserOptions: {
		ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
		sourceType: 'module',  // Allows for the use of imports
		ecmaFeatures: {
			jsx: true,  // Allows for the parsing of JSX
		},
	},
	rules: {
		'curly': ['warn'],
		'no-return-assign': ['warn', 'always'],
		'react/prop-types': 'off',
		'react/jsx-fragments': ['warn', 'syntax'],
		'react/self-closing-comp': 'warn',
		'react/function-component-definition': 'warn',
		'react/jsx-sort-props': [
			'warn',
			{
				callbacksLast: true,
				shorthandFirst: true,
				noSortAlphabetically: true,
				reservedFirst: true,
			},
		],
	},
	settings: {
		react: {
			version: 'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
		},
	},
	env: {
		browser: true,
		node: true,
		jest: true,
		es6: true,
	},
};
