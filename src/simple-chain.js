const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  length: 0,
  /**
   * Возвращает текущую длину цепи в виде числа.
   *
   * @return {number} текущая длина цепи.
   */
  getLength() {
    return this.length;
  },

  /**
   * Добавляет звено, содержащее строковое представление `value` к цепочке
   *
   * @param {string | number | boolean} value исходное значение.
   * @return {object} возвращает объект.
   */
  addLink(value) {
    value = typeof value === undefined ? '' : `${value}`;
    this.chain = !this.length ? `( ${value} )` : this.chain + `~~( ${value} )`;
    this.length++;
    return this;
  },

  /**
   * Удаляет звено цепи, находящееся в заданном положении
   *
   * @param {number} position позиция удаляемого звена.
   * @return {object} возвращает объект.
   */
  removeLink(position) {
    if (
      position <= 0 ||
      position > this.length ||
      !Number.isInteger(position)
    ) {
      this.finishChain();
      throw new Error("You can't remove incorrect link!");
    }
    this.chain = this.chain
      .split('~~')
      .filter((value, index) => {
        return index + 1 !== position;
      })
      .join('~~');
    this.length--;
    return this;
  },

  /**
   * Разворачивает цепь задом наперед.
   *
   * @return {object} возвращает объект.
   */
  reverseChain() {
    if (this.length) {
      this.chain = this.chain.split('~~').reverse().join('~~');
    }
    return this;
  },

  /**
   * Завершает цепь и возвращает ее.
   *
   * @return {string} возвращает строковое представление цепи.
   */
  finishChain() {
    const chain = this.chain;
    delete this.chain;
    this.length = 0;
    return chain;
  },
};

module.exports = {
  chainMaker,
};
