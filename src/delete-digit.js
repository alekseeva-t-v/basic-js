const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maximumNumber = 0;
  let arrDigit = String(n).split('');
  console.log(arrDigit);
  arrDigit.forEach((value, index, array) => {
    let item = array.splice(index, 1)[0];
    let currentNumber = Number(array.join(''));
    if (currentNumber > maximumNumber) {
      maximumNumber = currentNumber;
    }
    array.splice(index, 0, item);
  });
  return maximumNumber;
}

module.exports = {
  deleteDigit,
};
