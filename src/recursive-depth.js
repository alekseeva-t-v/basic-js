const { NotImplementedError } = require('../extensions/index.js');

/**
 * Реализован класс DepthCalculator с методом CalculateDepth, который вычисляет глубину вложенного массива
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  /**
   * Вычисляет глубину вложенного массива
   *
   * @param {object} arr исходный массив.
   * @return {number} глубина вложенного массива.
   */
  calculateDepth(arr) {
    let res = 1;
    arr.forEach((value) => {
      if (Array.isArray(value)) {
        res = Math.max(res, 1 + this.calculateDepth(value));
      }
    });
    return res;
  }
}

module.exports = {
  DepthCalculator
};
