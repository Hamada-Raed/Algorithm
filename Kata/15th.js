function pofi(n) {
    // Determine the power of i based on the remainder when n is divided by 4
    const powerOfI = n % 4;

    // Define the mapping for powers of i
    const mapping = {0: '1', 1: 'i', 2: '-1', 3: '-i'};

    // Return the result as a string
    return mapping[powerOfI];
}

// Example usage:
const result = pofi(5);
console.log(result);  // Output: '-i'

////////////////////////////////////////////////

function catchSignChange(arr) {
    let signChanges = 0;

    for (let i = 1; i < arr.length; i++) {
        if ((arr[i] >= 0 && arr[i - 1] < 0) || (arr[i] < 0 && arr[i - 1] >= 0)) {
            signChanges++;
        }
    }

    return signChanges;

}

///////////////////////// 

function calculate(str) {
    const sanitizedStr = str.replace(/plus/g, '+').replace(/minus/g, '-');

    // Split the sanitized string into an array of terms
    const terms = sanitizedStr.split(/([+-])/);

    // Initialize the result with the first term
    let result = parseInt(terms[0]);

    // Loop through the terms, starting from index 1 with a step of 2
    for (let i = 1; i < terms.length; i += 2) {
        const operator = terms[i];
        const operand = parseInt(terms[i + 1]);

        // Perform addition or subtraction based on the operator
        if (operator === '+') {
            result += operand;
        } else if (operator === '-') {
            result -= operand;
        }
    }

    // Convert the result to a string and return it
    return result.toString();
}

///////////////////////////

function rowSumOddNumbers(n) {
    return Math.pow(n, 3)
}