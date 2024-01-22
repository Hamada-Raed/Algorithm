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