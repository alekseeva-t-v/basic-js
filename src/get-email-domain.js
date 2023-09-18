const { NotImplementedError } = require('../extensions/index.js');

/**
 * Учитывая адрес электронной почты, возврашает его домен.
 *
 * @param {string} email Исходный электронный адрес
 * @return {string} домен
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let adressArr = email.split('@');
  return adressArr[adressArr.length - 1];
}

module.exports = {
  getEmailDomain
};
