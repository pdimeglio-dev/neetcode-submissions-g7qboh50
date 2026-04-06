class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let columns = matrix[0].length;

        if (rows === 1 && columns === 1) {
            return matrix[0][0] === target;
        }

        // we treat it as a long array one row after the other as they are ordered
        let start = 0;
        let end = rows * columns - 1;

        while (start < end) {
            let mid = Math.floor(start + (end - start) / 2);

            // now we need to calculate the real index in the matrix
            let midRow = Math.floor(mid / columns);
            let midColumn = mid % columns;

            const midValue = matrix[midRow][midColumn];

            if (midValue === target) {
                return true;
            }

            if (midValue < target) {
                start = mid + 1;
            }  else {
                end = end - 1;
            }
        }

        // if we got here start is end and we have not found yet.. could be this value.
        // calculate again the real value
        let valRow = Math.floor(start / columns);
        let valCol = start % columns;

        return matrix[valRow][valCol] === target;
    }
}
