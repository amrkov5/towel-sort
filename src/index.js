
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = []
    if(!matrix) return []
    matrix.map(el => matrix.indexOf(el) % 2 != 0 ? result = result.concat(el.reverse()) : result = result.concat(el));
    return result
}

