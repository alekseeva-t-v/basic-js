const { NotImplementedError } = require('../extensions/index.js');

/**
 * Принимает две строки: находит количество общих символов между ними.
 *
 * @param {string} s1
 * @param {string} s2
 * @return {number} число общих символов
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arrS = s2.split('')
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (arrS.indexOf(s1[i]) !== -1) {
      count++;
      arrS.splice(arrS.indexOf(s1[i]), 1)
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
