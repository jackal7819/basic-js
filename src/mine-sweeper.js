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
	return matrix.map((row, r) =>
		row.map((cell, c) => {
			if (cell) return 1;
			let count = 0;
			for (let i = r - 1; i <= r + 1; i++) {
				for (let j = c - 1; j <= c + 1; j++) {
					if (
						i >= 0 &&
						i < matrix.length &&
						j >= 0 &&
						j < matrix[0].length &&
						matrix[i][j]
					) {
						count++;
					}
				}
			}
			return count;
		})
	);
}

module.exports = {
	minesweeper,
};
