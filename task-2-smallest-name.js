
// Find the friend with the smallest name.


function getFriendWithSmallestName(array) {
    let smallestName = array[0];
    for (nam of array) {
        if (nam.length < smallestName.length) {
            smallestName = nam;
        }
    }
    return smallestName;
}

const heights2 = ['rahim', 'kamalasx', 'robin', 'rafidwwfwef', 'ronfefef', 'rashed', 'rofe'];
const lowestName = getFriendWithSmallestName(heights2) 

console.log(lowestName);

