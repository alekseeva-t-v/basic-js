const { NotImplementedError } = require('../extensions/index.js');

/**
 * Учитывая массив доменов, возвращает объект с имеющимися в нем DNS.
 *
 * @param {array} domains массив доменов
 * @return {object} объект с имеющимися в нем DNS
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let DNSStats = {};
  domains.forEach((domain) => {
    let arrDomain = domain.split('.');
    let strDomain = '';
    for (let i = arrDomain.length; i > 0; i--) {
      strDomain += `.${arrDomain.slice(i - 1, i)}`;

      DNSStats[strDomain] = DNSStats[strDomain] ? DNSStats[strDomain] + 1 : 1;
    }
  });
  return DNSStats;
}

module.exports = {
  getDNSStats,
};
