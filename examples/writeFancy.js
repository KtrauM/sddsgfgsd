'use strict';
const alphabet = require('../').Char.getList();
const widthMultiplier = 1;
const _ = require('lodash');

const printHorizontal = arr => {
	const printLine = firAr => {
		let arr = [];

		for (let j = 0; j < firAr.length; j++) {
			let char = firAr[j];
			char = char.array;
			for (let i = 0; i < char.length; i++) {
				let row = char[i];
				arr[i] = arr[i] || [];
				if (j === firAr.length - 1) {
					arr[i] = arr[i].concat(row);
				} else {
					arr[i] = arr[i].concat(row).concat(Array.apply(null, Array(1)).map(Number.prototype.valueOf, 0));
				}
			}
		}

		for (let row of arr) {
			for (let column of row) {
				if (column) {
					column = String(column);
					for (let i = 0; i < widthMultiplier; i++) {
						process.stdout.write('█');
					}
				} else {
					for (let i = 0; i < widthMultiplier; i++) {
						process.stdout.write(' ');
					}
				}
			}
			console.log();
		}
		for (let i = 0; i < widthMultiplier; i++) { // burası satır arası
			console.log();
		}
	};

	let width = process.stdout.columns / widthMultiplier;
	let max = Math.round(width / 8) ; // -1 for guarantee
	console.log(max)

	let chunks = _.chunk(arr, max);

	chunks.forEach(arr => printLine(arr));
};

const printVertical = arr => {
	for (let char of arr) {
		char = char.array;

		for (let row of char) {
			for (let column of row) {
				if (column) {
					column = String(column);
					for (let i = 0; i < widthMultiplier; i++) {
						process.stdout.write('█');
					}
				} else {
					for (let i = 0; i < widthMultiplier; i++) {
						process.stdout.write(' ');
					}
				}
			}
			console.log();
		}
		console.log();
	}
};

let arr = 'BENİM ADIM ÖMER ERDİNÇ YAĞMURLU.'.split('').map(val => alphabet[val]);

printHorizontal(arr);
