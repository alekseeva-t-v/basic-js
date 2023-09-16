const { NotImplementedError } = require('../extensions/index.js');

/**
 * Находит котов по ушам "^^", возвращает их количество
 *
 * @param {object} arr исходный массив значений (может включать в себя вложенные массивы)
 * @return {number} количество найденных котов
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let count = 0;
  let resArr = [];

  arr.forEach((arrItem) => {
    resArr = [...resArr, ...arrItem];
  });

  resArr.forEach((value) => {
    if (value === '^^') {
      count++
    }
  })
  return count;
}

module.exports = {
  countCats,
};
