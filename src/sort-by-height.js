const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const updatedArr = arr.filter((value) => {
    return value != -1;
  });

  updatedArr.sort((a, b) => {
    return a - b;
  });

  arr.forEach((value, index) => {
    if (value === -1) {
      updatedArr.splice(index, 0, value);
    }
  });
  return updatedArr
}

module.exports = {
  sortByHeight
};
