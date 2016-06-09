'use strict';
const Parser = require('./parser');
const Char = require('./char');

exports.Parser = Parser;
exports.Char = Char;

exports.createParser = opts => new Parser(opts);
exports.createChar = opts => new Char(opts);

exports.decode = (thing, opts) => new Parser(opts).decode(thing); // çöz
exports.encode = (text, opts) => new Parser(opts).encode(text); // şifrele
