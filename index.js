(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.teeheo = factory());
}(this, function () { 'use strict';

	// import ms from 'ms';
	// import lunchtime from './lunchtime.js';
	// import millisecondsUntil from './millisecondsUntil.js';

	const teeheo = {
		int: (min, max) => {
			if (typeof min !== 'number' || typeof max !== 'number') {
				throw new TypeError('Missing arguments');
			}
		
			return Math.floor(Math.random()*(max-min+1)+min);
		},

		str: (chars) => {
			return Math.random().toString(36).substring(2, chars + 2).toUpperCase()
		}
	};

	return teeheo;

}));
