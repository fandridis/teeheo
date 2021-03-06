'use strict';

/**
 * @param {number} min The minimum number to be included in the randomizer
 * @param {number} max The maximum number to be included in the randomizer
 * @param {object} options Optional - TBA
 */
function randomInteger (min, max, opts) {
	if (!min) { min = 1; }

	if (typeof min !== 'number') { throw new TypeError('Min(1st arg) has to be a number'); }
	if (max && typeof max !== 'number') { throw new TypeError('Max(2nd arg) has to be a number'); }
	if (max && max < min) { throw new TypeError('Max(2nd arg) must be larger than Min(1st arg)'); }
	
	if (!max && max !== 0) {
		if (min > 0) {
			max = min;
			min = 0;
		}
		else {
			max = 0;
		}
	}

	return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * @param {number} min The minimum number to be included in the randomizer
 * @param {number} max The maximum number to be included in the randomizer
 * @param {object} opts Optional - TBA
 */
function randomFloat(min, max, opts) {
	if (!min) { min = 1; }

	if (typeof min !== 'number') { throw new TypeError('Min(1st arg) must be a number'); }
	if (max && typeof max !== 'number') { throw new TypeError('Max(2nd arg) must be a number'); }
	if (max && max < min) { throw new TypeError('Max(2nd arg) must be larger than the Min(1st arg)'); }
	if (opts) {
		if (typeof opts !== 'object') { throw new TypeError('Options (3rd arg) argument must be an object'); }
		if (opts.decimals && typeof opts.decimals !== 'number') { throw new TypeError('Options decimals must be a number'); }
	}

	if (!max && max !== 0) {
		if (min > 0) {
			max = min;
			min = 0;
		}
		else {
			max = 0;
		}
	}

	const num =  Math.random() * (max - min) + min;

	if (opts && (opts.decimals || opts.decimals === 0)) {
		const decimals = opts.decimals > 0 ? Math.floor(opts.decimals) : 0;
    num = parseFloat(num.toFixed(decimals));
  }
	
	return num;
}

/**
 * @param {number} length The length of the random string generated
 * @param {object} options Optional - TBA
 */

function randomString(len, opts) {
	if (typeof len !== 'number') { throw new TypeError('Length (1st arg) has to be a number'); }
	if (opts) {
		if (typeof opts !== 'object') { throw new TypeError('Options (2rd arg) argument must be an object'); }
		if (opts.excludeLower && typeof opts.excludeLower !== 'boolean') { throw new TypeError('Option excludeLower must be a boolean'); }
		if (opts.excludeUpper && typeof opts.excludeUpper !== 'boolean') { throw new TypeError('Option excludeUpper must be a boolean'); }
		if (opts.excludeZero && typeof opts.excludeZero !== 'boolean') { throw new TypeError('Option excludeZero must be a boolean'); }
		if (opts.excludeNumbers && typeof opts.excludeNumbers !== 'boolean') { throw new TypeError('Option excludeNumbers must be a boolean'); }
		if (opts.customList && typeof opts.customList !== 'string') { throw new TypeError('Option customList must be a string'); }
	}

  let list = [
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '123456789',
    '0'
  ];
  
  if (opts) {
    if (opts.customList) {
      list = [opts.customList];
    }
    else {
      if (opts.excludeLower) { list[0] = ''; }
      if (opts.excludeUpper) { list[1] = ''; }
      if (opts.excludeZero) { list[3] = ''; }
      if (opts.excludeNumbers) { 
        list[2] = '';
        list[3] = '';
      }
    }
  }
  
  let chars = list.join('');

  return [...Array(len)].map(i=>chars[Math.random()*chars.length|0]).join``;
}

/**
 * From the world-famous gist: https://gist.github.com/jed/982883
 */
function randomUuid () {
	function uuid(a,b) { for(b=a='';a++<36;b+=a*51&52?(a^15?8^Math.random()*(a^20?16:4):4).toString(16):'-');return b }

	return uuid();
}

const teeheo = {
	int: (min, max, opts) => randomInteger(min, max, opts),
	float: (min, max, opts) => randomFloat(min, max, opts),
	str:(len, opts) => randomString(len, opts),
	uuid4: () => randomUuid(),
};

module.exports = teeheo;
