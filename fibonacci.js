function fibs(number) {
    if (number <= 1) {
        return [0];
    }
    const resultArray = [0, 1];

    while (resultArray.length < number) {
        resultArray.push(
            resultArray[resultArray.length - 1] +
                resultArray[resultArray.length - 2],
        );
    }

    return resultArray;
}

console.log(`Listing the First element of the fibonacci sequence: ${fibs(1)} (solved iteratively)\n`);
console.log(`Listing the First 2 elements of the fibonacci sequence: ${fibs(2)} (solved iteratively)\n`);
console.log(`Listing the First 4 elements of the fibonacci sequence: ${fibs(4)} (solved iteratively)\n`);
console.log(`Listing the First 29 elements of the fibonacci sequence: ${fibs(29)} (solved iteratively)\n\n`);

function fibsRec(number) {
    if (number <= 1) {
        return [0];
    }

    if (number === 2) {
        return [0, 1];
    }

    const resultArray = fibsRec(number - 1);
    return resultArray.concat(
        resultArray[resultArray.length - 1] +
            resultArray[resultArray.length - 2],
    );
}

console.log(`Listing the First 3 elements of the fibonacci sequence: ${fibsRec(3)} (solved recursively)\n`);
console.log(`Listing the First 7 elements of the fibonacci sequence: ${fibsRec(7)} (solved recursively)\n`);
console.log(`Listing the First 12 elements of the fibonacci sequence: ${fibsRec(12)} (solved recursively)\n`);
console.log(`Listing the First 32 elements of the fibonacci sequence: ${fibsRec(32)} (solved recursively)\n\n`);

function fibonacci(num) {
    if (num === 0) {
        return 0;
    }

    if (num <= 2) {
        return 1;
    }
    let current = 1;
    let previous = 1;

    for (let i = 3; i <= num; i++) {
        current = current + previous;
        previous = current - previous;
    }

    return current;
}

console.log(`F1 = ${fibonacci(1)} (solved iteratively)\n`);
console.log(`F3 = ${fibonacci(3)} (solved iteratively)\n`);
console.log(`F10 = ${fibonacci(10)} (solved iteratively)\n`);
console.log(`F22 = ${fibonacci(22)} (solved iteratively)\n\n`);

function fibonacciRec(num) {
    if (num === 0) {
        return 0;
    }

    return (num <= 2) ? 1 : fibonacciRec(num - 1) + fibonacciRec(num - 2);
}

console.log(`F2 = ${fibonacciRec(2)} (solved recursively)\n`);
console.log(`F5 = ${fibonacciRec(5)} (solved recursively)\n`);
console.log(`F14 = ${fibonacciRec(14)} (solved recursively)\n`);
console.log(`F33 = ${fibonacciRec(33)} (solved recursively)\n\n`);

function fibonacciBinet(num) {
    return Math.floor(
        (((1 + Math.sqrt(5)) ** num) - ((1 - Math.sqrt(5)) ** num)) /
            ((2 ** num) * Math.sqrt(5)),
    );
}

console.log(`F6 = ${fibonacciBinet(6)} (solved via Binet's formula)\n`);
console.log(`F19 = ${fibonacciBinet(19)} (solved via Binet's formula)\n`);
console.log(`F45 = ${fibonacciBinet(45)} (solved via Binet's formula)\n`);
console.log(`F87 = ${fibonacciBinet(87)} (solved via Binet's formula)\n\n`);