function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(5, 10));

function productDescription(strings, productName, productPrice) {
    console.log(strings);
    console.log(productName);
    console.log(productPrice);
    let priceCategory = 'cheap';
    if (prodPrice > 20) {
        priceCategory = 'fair';
    }
    return `${strings[0]}${prodName}${strings[1]}${priceCategory}${strings[2]}`;
}

const prodName = 'JS';
const prodPrice = 27.99;

const productOutput = productDescription`this product(${prodName}) is ${prodPrice}.`;
console.log(productOutput);