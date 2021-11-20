let sum = (numbers) => {
    return numbers.reduce((acc, cur) => acc + cur, 0); 
}
let max = (numbers) => {
    return numbers.reduce((max, cur) => (max > cur? max: cur), numbers[0]);
}
let avg = (numbers) => {
    return sum(numbers)/numbers.length;
}
module.exports = {
    sum,
    avg,
    max,
};
// exports.sum = sum;
// exports.max = max;
// exports.avg = avg;