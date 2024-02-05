const number = [2, 7, 90, 3, 4, 5, 44, 6, 79, 5, 44, 5, 33, 4];
// const maxNumber = Math.max(24,34,57,78,55,46);

function getMaxNumber(NumberArray) {
    let max = NumberArray[0];
    for (let i = 1; i < NumberArray.length; i++) {
        if (NumberArray[i] > max) {
            max = NumberArray[i];
        }
    }
    return max;
}

const maxNumber = getMaxNumber(number);
console.log(maxNumber);
