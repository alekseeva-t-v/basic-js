const { NotImplementedError } = require('../extensions/index.js');

/**
 * Извлекает и возвращает сезон из заданной даты, определяет некорректные исходные данные
 *
 * @param {date | fakeDate} date реальная или фейковая дата
 * @returns {string} время года
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]' || Object.entries(date).length  > 0) {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth();
  if (month === 0 || month === 1 || month === 11) {
    return 'winter';
  }

  if (month === 2 || month === 3 || month === 4) {
    return 'spring';
  }

  if (month === 5 || month === 6 || month === 7) {
    return 'summer';
  }

  if (month === 8 || month === 9 || month === 10) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
