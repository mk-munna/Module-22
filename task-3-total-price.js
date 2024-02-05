// calculate the total budget required to buy electronics:

// laptop = 35000 tk
// tablet = 15000 tk
// mobile = 20000 tk

function calculateElectronicsBudget() {
    let total = 0;
    for (product of products) {
        // total += product.price * product.quantity;
        total = total + product.price * product.quantity;
    }
    return total;
}
const products = [
    { name : 'laptop', price : 35000, quantity : 3,},
    { name : 'tablet', price : 15000, quantity : 5,},
    { name : 'mobile', price : 20000, quantity : 3,},
    { name : 'stand',  price : 990,   quantity : 6,},
] 
const total = calculateElectronicsBudget(products)
console.log(total);