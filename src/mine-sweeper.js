const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
    
    for (let i = 0; i < matrix.length; i++) {
        result.push([]);
        for (let j = 0; j < matrix[0].length; j++) {
            let count = 0;
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    if (i + x >= 0 && i + x < matrix.length && j + y >= 0 && j + y < matrix[0].length && !(x === 0 && y === 0)) {
                        if (matrix[i + x][j + y]) {
                            count++;
                        }
                    }
                }
            }
            result[i].push(count);
        }
    }
    return result;
}

module.exports = {
  minesweeper
};
