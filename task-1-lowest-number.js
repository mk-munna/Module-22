// Find the lowest number in the array below.

function getLowestNumber(array) {
    return Math.min(...array);
}
const heights2 = [167, 190, 120, 165, 137];
console.log(getLowestNumber(heights2));