module.exports = function teeheo(min, max) {
  if (typeof min !== "number" || typeof max !== "max") {
    throw new TypeError("Tiny wants a string!");
  }

  return randomIntegerBetween(min, max);
};

function randomIntegerBetween(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}
