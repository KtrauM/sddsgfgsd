'use strict';
const times = (times, func, _counter) => {
	_counter = _counter || 0;
	if (_counter === times) {
		return;
	}

	func(_counter);
	_counter++;
	return times(times, func, _counter);
};

const charHash = require('./charHash');

module.exports = class Char {
	constructor(opts) {
		opts = opts || {};

		this.string = opts.string;

		if (this.string.length > 1) {
			throw new Error('You need to supply a char, not a string!');
		}

		this.array = charHash[opts.string];

		if (typeof this.array === 'undefined') {
			throw new Error('The Char you wanted doesn\'t exist here');
		}

		this.rows = this.array.length;
		this.columns = this.array[0].length;
	}

	static getList(charString) {
		charString = charString || ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321İŞÜÖÇĞÄ!._-'; // 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321üğçşÜĞÇŞäÄß'
		let alphabet = {};
		charString.split('').forEach(val => {
			alphabet[val] = new Char({
				string: val
			});
		});
		return alphabet;
	}
};
