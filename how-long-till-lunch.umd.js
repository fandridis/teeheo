(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.howLongUntilLunch = factory());
}(this, function () { 'use strict';

  /**
   * Helpers.
   */

  var main = teeheo = {
  	int: (from, to) => {
  		if (typeof from !== 'number' || typeof to !== 'number') {
  			throw new TypeError('Missing arguments');
  		}
  	
  		return Math.floor(Math.random()*(max-min+1)+min);
  	},

  	str: (chars) => {
  		return Math.random().toString(36).substring(2, chars + 2).toUpperCase()
  	}
  };

  return main;

}));
