const { NotImplementedError } = require('../extensions/index.js');

/**
 * Производит проверку по заданной строке и возвращает ответ является ли это адресом MAC-48 или нет.
 *
 * @param {string} inputString исходная строка
 * @return {boolean} true, если то адрес MAC-48, иначе false
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arrValue = n.split('-');
  if (arrValue.length !== 6) {
    return false;
  }

  const elementExists = arrValue
    .join('')
    .split('')
    .every((value) => {
      return (
        (value >= 0 && value <= 9) ||
        value === 'A' ||
        value === 'B' ||
        value === 'C' ||
        value === 'D' ||
        value === 'E' ||
        value === 'F'
      );
    });

  return elementExists;
}
module.exports = {
  isMAC48Address,
};
