const { NotImplementedError } = require('../extensions/index.js');

/**
 * Возвращает название команды мечты на основе имен ее участников
 *
 * @param {array} members имена членов команды
 * @return {string | boolean} название команды или false в случае неправильных аргументов
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let resArr = [];
  members.forEach((value) => {
    if (typeof value === 'string') {
      resArr.push(value.trim()[0].toUpperCase());
    }
  });

  return resArr.sort().join('');
}

module.exports = {
  createDreamTeam,
};
