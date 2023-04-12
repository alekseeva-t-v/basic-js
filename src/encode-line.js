const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else if (str[i] === str[i - 1] && str[i] !== str[i + 1]) {
      res.push(count + str[i]);
      count = 1;
    } else {
      res.push(str[i]);
    }
  }

  return res.join('');
}

module.exports = {
  encodeLine
};
