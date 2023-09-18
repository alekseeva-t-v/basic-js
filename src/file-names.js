const { NotImplementedError } = require('../extensions/index.js');

/**
 * Есть список файлов, так как два файла не могут иметь одинаковые имена, тот, который появится позже, будет иметь суффикс (k), где k — наименьшее целое число, которое не использовалось с данным именем файла. Возвращает массив имен, которые будут присвоены файлам.
 *
 * @param {array} names массив имен файлов
 * @return {array} преобразованный массив имен файлов
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let resultArr = [];
  names.forEach((value) => {
    if (resultArr.includes(value)) {
      let index = 1;
      while (true) {
        if (!resultArr.includes(`${value}(${index})`)) {
          resultArr.push(`${value}(${index})`);
          break;
        }
        index++;
      }
    } else {
      resultArr.push(value);
    }
  });

  return resultArr;
}
module.exports = {
  renameFiles,
};
