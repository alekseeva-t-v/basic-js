const { NotImplementedError } = require('../extensions/index.js');

/**
 * Учитывая некоторое целое число, находит максимальное число, которое можно получить, удалив ровно одну цифру данного числа.
 *
 * @param {number} n исходное число
 * @return {number} максимальное число, которое можно получить, удалив ровно одну цифру заданного числа
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maximumNumber = 0;
  let arrDigit = String(n).split('');

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
