const { NotImplementedError } = require('../extensions/index.js');

/**
 * Возвращает сумму всех значений, которые не отображаются ниже «0».
 *
 * @param {array<array>} matrix матрица значений
 * @return {number} сумма всех значений, которые не отображаются ниже «0»
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0 || matrix[i - 1][j] !== 0) {
        sum += Number(matrix[i][j]);
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
