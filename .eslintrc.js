module.exports = {
	rules: {
		'indent': [
			2,
			'tab',
			{SwitchCase: 1}
		],
		'no-unused-expressions': [
			2,
			{allowShortCircuit: true}
		],
		'quotes': [
			2,
			'single',
			'avoid-escape'
		],
		'no-use-before-define': [
			0, // deli etti be abicim
			{"functions": false, "classes": true}
		],
		strict: [
			0 // to get rid of unnecessary
		],
		'max-len': 0,
		'guard-for-in': 0,
		'no-return-assign': 0
	},
	parserOptions: {
        ecmaVersion: 6
    },
	extends: 'google'
};
