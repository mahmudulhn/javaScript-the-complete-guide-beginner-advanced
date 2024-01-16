function add(num1, num2) {
    return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

function addRandom(num1) {
    return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumber(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
}

console.log(addMoreNumber(1, 5));

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
    h.push('New Hobby');
    console.log(h);
}

printHobbies(hobbies);

function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount * tax;
    }

    return calculateTax;
}

const calculateVatAmount = createTaxCalculator(.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(100));

let username = 'Nihad';

function greetUser() {
    // let name = 'Hasan';
    console.log('Hi ' + name);
}

let name = 'Hassan';

username = 'Mahmudul';

greetUser();

// function powerOf(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

function powerOf(x, n) {
    return (n === 1) ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));

const myself = {
    name: 'nihad',
    friends: [
        {
            name: 'manuel',
            friends: [
                {
                    name: 'chris'
                }
            ]
        },
        {
            name: 'julia'
        }
    ]
};

function getFriendsName(person) {
    const collectedNames = [];

    if (!person.friends) {
        return [];
    }

    for (const friend of person.friends) {
        collectedNames.push(friend.name);
        collectedNames.push(...getFriendsName(friend));
    }
    return collectedNames;
}

console.log(getFriendsName(myself));