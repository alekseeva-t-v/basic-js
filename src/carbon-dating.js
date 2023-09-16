const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Возвращает возраст археологической находки
 *
 * @param {string} sampleActivity строковое представление текущей активности
 * @return {number | boolean} рассчитанный возраст в годах или falsе в случае некорректного sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let sampleActivityNum = Number(sampleActivity);
  if (
    typeof sampleActivity !== 'string' ||
    isNaN(sampleActivity) ||
    sampleActivityNum > 15 ||
    sampleActivityNum <= 0
  ) {
    return false;
  }

  let kt = Math.log(MODERN_ACTIVITY / sampleActivityNum);
  let t = 0.693 / HALF_LIFE_PERIOD;
  let age = Math.ceil(kt / t);
  return age;
}

module.exports = {
  dateSample
};
