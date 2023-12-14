const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let obj = {};
  let result = 0;

  for (let i = 0; i < s1.length; i++) {
    obj[s1[i]] = (obj[s1[i]] || 0) + 1;
  }

  for (let j = 0; j < s2.length; j++) {
    if (obj[s2[j]] > 0) {
      result++;
      obj[s2[j]]--;
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
