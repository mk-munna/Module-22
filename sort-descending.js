
function getdescNumbers(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length;) {
        let max = numbers[0];
        for (let num of numbers) {
            if (num > max) {
                max = num;
            }
        }
        result.push(max);
        numbers.splice(numbers.indexOf(max), 1);
    }
    return result;
}

const numbers = [1, 3, 4, 5, 7, 9, 4, 69, 4, 56, 8, 99, 367];
const descNumbers = getdescNumbers(numbers);
console.log(descNumbers);
