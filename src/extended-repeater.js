const { NotImplementedError } = require('../extensions/index.js');

/**
 * Создает повторяющуюся строку на основе заданных параметров.
 *
 * @param {string} str исходная строка, которую необходимо повторять
 * @param {object} options объект опций
 * @return {string} повторяющаяся строка
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strUp = String(str);
  let additionUp = String(options.addition);
  let isAddition = Object.hasOwn(options, 'addition')
  let resStr = [];

  if ((options.repeatTimes === 1 || !options.repeatTimes) && !isAddition) {
    return str;
  }

  if (
    (options.repeatTimes === 1 || !options.repeatTimes) &&
    isAddition &&
    (!options.additionRepeatTimes || options.additionRepeatTimes < 2)
  ) {
    resStr.push(strUp);
    resStr.push(additionUp);
  }

  if (
    (options.repeatTimes === 1 || !options.repeatTimes) &&
    isAddition &&
    options.additionRepeatTimes >= 2
  ) {
    resStr.push(strUp);
    for (let j = 0; j < options.additionRepeatTimes - 1; j++) {
      resStr.push(additionUp);
      resStr.push(options.additionSeparator ? options.additionSeparator : '|');
    }
    resStr.push(additionUp);
  }

  if (
    options.repeatTimes &&
    options.repeatTimes > 1 &&
    !isAddition
  ) {
    for (let i = 0; i < options.repeatTimes - 1; i++) {
      resStr.push(strUp);
      resStr.push(options.separator ? options.separator : '+');
    }
    resStr.push(strUp);
  }

  if (
    (options.repeatTimes &&
      options.repeatTimes > 1 &&
      isAddition &&
      !options.additionRepeatTimes) ||
    options.additionRepeatTimes < 2
  ) {
    for (let i = 0; i < options.repeatTimes - 1; i++) {
      resStr.push(strUp);
      resStr.push(additionUp);
      resStr.push(options.separator ? options.separator : '+');
    }
    resStr.push(strUp);
    resStr.push(additionUp);
  }

  if (
    options.repeatTimes &&
    options.repeatTimes > 1 &&
    isAddition &&
    options.additionRepeatTimes >= 2
  ) {
    for (let i = 0; i < options.repeatTimes - 1; i++) {
      resStr.push(strUp);
      for (let j = 0; j < options.additionRepeatTimes - 1; j++) {
        resStr.push(additionUp);
        resStr.push(
          options.additionSeparator ? options.additionSeparator : '|'
        );
      }
      resStr.push(additionUp);
      resStr.push(options.separator ? options.separator : '+');
    }
    resStr.push(strUp);
    for (let j = 0; j < options.additionRepeatTimes - 1; j++) {
      resStr.push(additionUp);
      resStr.push(options.additionSeparator ? options.additionSeparator : '|');
    }
    resStr.push(additionUp);
  }

  return resStr.join('');
}

module.exports = {
  repeater,
};
