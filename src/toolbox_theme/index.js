// Those files are used directly by webpack and postcss so couldn't handle ES6 + ES7 features.

const variables = require('./variables');
const button = require('./button');

const merged = Object.assign({}, variables, button);

module.exports = merged;
