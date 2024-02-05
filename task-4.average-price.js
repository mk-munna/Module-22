// A JavaScript function named findAveragePhonePrice that
// takes this array as input and returns the average price of phone.

function findAveragePhonePrice(phones) {
    let total = 0;
    for (phone of phones) {
        total = total + phone.price
    }
    const average = total / phones.length
    return average.toFixed(2);
}
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
const average = findAveragePhonePrice(phones)
console.log(average);
