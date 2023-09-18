const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.numAlphabet = {};
    this.arrAlphabet = this.alphabet.split('');
  }

  /**
   * Проверяет наличие аргументов,выбрасывает ошибку, если хотя бы один из них не был передан
   *
   * @param {string} message Исходная строка.
   * @param {string} key Строка-кодовое слово
   */
  validate(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
  }

  /**
   * Прводит исходные данные к необходимому формату
   *
   * @param {string} message Исходная строка.
   * @param {string} key Строка-кодовое слово
   * @return {object} Объект содежащий следующие, полученные преобразованием значения: строка, приведенная к верхнему регистру, из которой исключены символы, которых нет в латинском алфавите; объект с исключенными символами и их индексами, кодовое слово, приведенное к верхнему регистру.
   */
  convertVar(message, key) {
    this.arrAlphabet.forEach((letter, index) => {
      this.numAlphabet[letter] = index;
    });

    const variables = {
      resMessage: '',
      exceptions: {},
      resKey: key.toUpperCase(),
    };

    const resMessageArr = message.toUpperCase().split('');
    resMessageArr.forEach((letter, index) => {
      if (this.arrAlphabet.includes(letter)) {
        variables.resMessage += letter;
      } else {
        variables.exceptions[index] = letter;
      }
    });

    return variables;
  }

  /**
   * Зашифровывает исходную строку и возвращает зашифрованный вариант
   *
   * @param {string} message Исходная строка.
   * @param {string} key Строка-кодовое слово
   * @return {string} Зашифрованный вариант строки.
   */
  encrypt(message, key) {
    this.validate(message, key);
    const variables = this.convertVar(message, key);
    const codeWordArr = [];
    const { resMessage, exceptions, resKey } = variables;

    for (let i = 0; i < resMessage.length; i++) {
      codeWordArr.push(
        this.arrAlphabet[
          (this.numAlphabet[resMessage[i]] +
            this.numAlphabet[resKey[i % resKey.length]]) %
            this.alphabet.length
        ]
      );
    }

    for (let index in exceptions) {
      codeWordArr.splice(index, 0, exceptions[index]);
    }

    return this.isDirect
      ? codeWordArr.join('')
      : codeWordArr.reverse().join('');
  }

  /**
   * Расшифровывает исходную строку и возвращает расшифрованный вариант
   *
   * @param {string} message Исходная строка.
   * @param {string} key Строка-кодовое слово
   * @return {string} Расшифрованный вариант строки.
   */
  decrypt(message, key) {
    this.validate(message, key);
    const variables = this.convertVar(message, key);
    const codeWordArr = [];
    const { resMessage, exceptions, resKey } = variables;

    for (let i = 0; i < resMessage.length; i++) {
      codeWordArr.push(
        this.arrAlphabet[
          (this.numAlphabet[resMessage[i]] -
            this.numAlphabet[resKey[i % resKey.length]] +
            this.alphabet.length) %
            this.alphabet.length
        ]
      );
    }

    for (let index in exceptions) {
      codeWordArr.splice(index, 0, exceptions[index]);
    }

    return this.isDirect
      ? codeWordArr.join('')
      : codeWordArr.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
