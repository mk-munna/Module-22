const mobiles = [
    {name: 'mobile', brand : 'xaiomi', price : 14000},
    {name: 'mobile', brand : 'samsung', price : 40000},
    {name: 'mobile', brand : 'Iphone', price : 120000},
    {name: 'mobile', brand : 'Nokia', price : 34000},
    {name: 'mobile', brand : 'walton', price : 12000},
    {name: 'mobile', brand : 'Oneplus', price : 56000}
]
// --------------function type one--------------

// function getMobileMaxPrice(mobiles) {
//     return Math.max(...mobiles.map(mobile => mobile.price))
// }

// ---------------function type two--------------


// -----------------------Max-Price -----------------------------------------
// function getMobileMaxPrice(mobiles) {
//     let maxPrice = mobiles[0]
//     for (let mobile of mobiles) {
        
//         if (maxPrice.price < mobile.price) {
//             maxPrice = mobile;
//         }
//     }
//     return maxPrice.brand;
// }

// console.log(getMobileMaxPrice(mobiles))

// -----------------------Min Price----------------------------------------

function getMobileMaxPrice(mobiles) {
    let minPrice = mobiles[0]
    for (let mobile of mobiles) {
        
        if (minPrice.price > mobile.price) {
            minPrice = mobile;
        }
    }
    return minPrice.brand;
}

console.log(getMobileMaxPrice(mobiles))
const names = 'mkmunna'
console.log(names.toUpperCase());