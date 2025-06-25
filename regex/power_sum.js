// 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153
function eqSumPowdig(hMax, exp) {
    let sum = 0 
    let arr_num = hMax.toString().split("").map(Number);
    let power_of_exp = arr_num.map(num => {
        sum += Math.pow(num ,exp)
    })
    return sum !== hMax? [] : sum; 
}

console.log(eqSumPowdig(153, 3))




function eqSumPowdig(hMax, exp) {
    // Initialize an empty array to store valid numbers
    let result = [];

    // Iterate through all numbers from 1 to hMax (inclusive)
    for (let num = 1; num <= hMax; num++) {
        // Convert the number to an array of its digits
        let digits = num.toString().split("").map(Number);

        // Calculate the sum of the exp-th powers of the digits
        let sumOfPowers = digits.reduce((acc, digit) => acc + Math.pow(digit, exp), 0);

        // Check if the sum equals the original number
        if (sumOfPowers === num && num !== 1) {
            result.push(num);
        }
    }

    // Return the sorted list of valid numbers
    return result.sort((a, b) => a - b);
}