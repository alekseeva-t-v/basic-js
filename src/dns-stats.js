const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
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
      if (DNSStats[strDomain]) {
        DNSStats[strDomain] += 1;
      } else {
        DNSStats[strDomain] = 1;
      }
    }
  });
  return DNSStats;
}

module.exports = {
  getDNSStats
};
