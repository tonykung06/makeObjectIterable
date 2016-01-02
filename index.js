'use strict';

module.exports = function makeObjectIterable(object) {
	if (!object[Symbol.iterator]) {
		object[Symbol.iterator] = function* () {
			const properties = Object.keys(object);
			
			for (let prop of properties) {
				yield this[prop];
			}
		};
	}

	return object;
};