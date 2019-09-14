let matrix = [
    [true, true, true],
    [true, false, true],
    [true, true, true]
];

function minesweeper(matrix) {
    let mineArray = [];
    for (let i = 0; i < matrix.length; i++) {
        mineArray[i] = [];
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === true) {
                mineArray[i][j] = 'Bomb';
            } else {
                mineArray[i][j] = 0;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === false) {
                if (matrix[i - 1] && matrix[i - 1][j - 1]) {
                    mineArray[i][j]++;
                }
                if (matrix[i - 1] && matrix[i - 1][j]) {
                    mineArray[i][j]++;
                }
                if (matrix[i - 1] && matrix[i - 1][j + 1]) {
                    mineArray[i][j]++;
                }

                if (matrix[i][j - 1]) {
                    mineArray[i][j]++;
                }
                if (matrix[i][j + 1]) {
                    mineArray[i][j]++;
                }

                if (matrix[i + 1] && matrix[i + 1][j - 1]) {
                    mineArray[i][j]++;
                }
                if (matrix[i + 1] && matrix[i + 1][j]) {
                    mineArray[i][j]++;
                }
                if (matrix[i + 1] && matrix[i + 1][j + 1]) {
                    mineArray[i][j]++;
                }
            }
        }
    }
    return mineArray;
}

console.log(minesweeper(matrix));