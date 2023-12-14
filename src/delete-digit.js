const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numArr = Array.from(String(n), Number);
  let maxNum = -1;

  for (let i = 0; i < numArr.length; i++) {
    let tempArr = [...numArr];
    tempArr.splice(i, 1);
    let curNum = parseInt(tempArr.join(''));
    maxNum = Math.max(maxNum, curNum);
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
