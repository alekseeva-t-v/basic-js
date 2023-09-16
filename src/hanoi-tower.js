const { NotImplementedError } = require('../extensions/index.js');

/**
 * Возвращает объект с двумя свойствами: минимальным числом ходов, необходимым для решения головоломки и числом секунд, необходимым для решения головоломки при заданной скорости
 *
 * @param {number} disks количество дисков
 * @param {number} turnsSpeed скорость (в оборотах/час)
 * @return {object} объект в который входит минимальное число ходов и необходимое время в секундах
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disks, turnsSpeed) {
  const resObj = {
    turns: 0,
    seconds: 0,
  };

  resObj.turns = 2 ** disks - 1;
  resObj.seconds = Math.floor(resObj.turns / (turnsSpeed / 3600));

  return resObj;
}

module.exports = {
  calculateHanoi,
};
