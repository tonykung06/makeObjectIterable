'use strict';

var assert = require('assert');
var makeObjectIterable = require('../');

describe('makeObjectIterable', function() {
	it('should make an object can be used in for...of loop', function () {
		const originalObj = {
			prop1: 'value1',
			prop2: 'value2'
		};

		const iterableObj = makeObjectIterable(originalObj);
		const results = [];

		for (let value of iterableObj) {
			results.push(value);
		}

		assert.equal(results.length, 2);
		assert.equal(results.indexOf('value1') > -1, true);
		assert.equal(results.indexOf('value2') > -1, true);
	});

	it('could be used with spread operator', function() {
		const originalObj = {
		    prop1: 'value1',
		    prop2: 'value2'
		};

		const iterableObj = makeObjectIterable(originalObj);

		assert.equal([...iterableObj].length, 2);
		assert.equal([...iterableObj].indexOf('value1') > -1, true);
		assert.equal([...iterableObj].indexOf('value2') > -1, true);
	});
});