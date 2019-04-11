(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.teeheo = factory());
}(this, function () { 'use strict';

	/**
	 * 
	 * @param {integer} min The minimum number to be included in the randomizer
	 * @param {*} max The maximum number to be included in the randomizer
	 * @param {*} options Optional - TBA
	 */
	function randomInteger (min, max, options) {
		if (!min) { return 0; }

		if (min && typeof min !== 'number') { throw new TypeError('First argument has to be a number'); }
		if (max && typeof max !== 'number') { throw new TypeError('Second argument has to be a number'); }
		
		if (!max) {
			max = min;
			min = 0;
		}

		return Math.floor(Math.random()*(max-min+1)+min);
	}

	// import ms from 'ms';

	const teeheo = {
		int: function(min, max) { return randomInteger(min, max); },

		str: (chars) => {
			return Math.random().toString(36).substring(2, chars + 2).toUpperCase()
		}
	};

	return teeheo;

}));
