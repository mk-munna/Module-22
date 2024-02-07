function person(obj) {
    if (typeof obj !== 'object') {
        return 'input must be an object'
    }
    else if (!obj.name || !obj.age || !obj.class) {
        return 'You did not fillup name, age, class'
    }
    else if (typeof obj.name !== 'string' || typeof obj.age !== 'number' || typeof obj.class !== 'string'){
        return 'Invalid Input!'
    } else {
        return 'name : Kamal Hossen, Age : 35, Class : Middle';
    }
}
const person1 = { name: 'Kamal Hossen', age: 35, class: 'Middle' }
console.log(person(person1));



