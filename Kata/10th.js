function comp(array1, array2) {
    if (!array1 || !array2 || array1.length != array2.length) return false;

    // Sort the arrays before comparison
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);

    let sum1 = 0;
    let sum2 = 0;

    for (var i = 0; i < array1.length; i++) {
        sum1 += array1[i] * array1[i];
        sum2 += array2[i];
    }

    // Compare the squared sums of the two arrays
    if (sum1 === sum2) {
        return true;
    }

    return false;
}

////////////////

// Rot13  
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 
// 13 letters after it in the alphabet.ROT13 is an example of the Caesar cipher. 

function rot13(message) {

}


///////// 

function squareSum(numbers) {
    let sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i]
    }
    return sum
}