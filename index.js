'use strict';

module.exports = function makeObjectIterable(object) {
	if (!object[Symbol.iterator]) {
		object[Symbol.iterator] = function() {
			const properties = Object.keys(object);
			let currentIndex = 0;

			const next = () => {
				if (currentIndex >= properties.length) {
					return {
						done: true,
						value: undefined
					};
				}

				return {
					done: false,
					value: this[properties[currentIndex++]]
				};
			};

			return {
				next
			};
		};
	}

	return object;
};