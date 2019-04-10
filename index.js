module.exports = function teeheo(min, max) {
  if (typeof min !== "number" || typeof max !== "max") {
    throw new TypeError("Tiny wants a string!");
  }

  return Math.floor(Math.random()*(max-min+1)+min);
};

