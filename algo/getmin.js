function getMin(numbers) {
    let currentMinimum;
    if (!numbers.length) {
        throw new Error('empty array');
    }

    currentMinimum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (currentMinimum > numbers[i]) {
            currentMinimum = numbers[i]
        }
    }

    return currentMinimum;
}

function getMin2(numbers) {
    if (!numbers.length) {
        throw new Error('empty array');
    }
    let sortedNumbers;

    for (let i = 0; i < numbers.length; i++) {
        let outerElement = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            let innerElement = numbers[j];

            if (outerElement > innerElement) {
                numbers[i] = innerElement;
                numbers[j] = outerElement;

                outerElement = numbers[i];
                innerElement = numbers[j];
            }
        }
    }

    return numbers[0];
}

const testNumbers = [3, 1, -4];

const min = getMin2(testNumbers);

console.log(min);