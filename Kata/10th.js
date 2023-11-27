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

//////////////////////////// 

// reverse str  

// "This is an example!" ==> "sihT si na !elpmaxe" 

function reverseWords(str) {
    // Split the string into words
    const words = str.split(' ');

    // Reverse each word
    const reversedWords = words.map(word => reverseWord(word));

    // Join the reversed words back into a string
    const reversedString = reversedWords.join(' ');

    return reversedString;
}

function reverseWord(word) {
    // Convert the word to an array of characters, reverse it, and join it back
    return word.split('').reverse().join('');
}

// Example usage
const inputString = "Hello World";
const reversedString = reverseWords(inputString);
console.log(reversedString);  // Output: "olleH dlroW" 
///////////////////////

function reverseWords(str) {
    return str.split(' ').map(function (word) {
        return word.split('').reverse().join('');
    }).join(' ');
} 

////////////////////////// 


function getASCII(c) {
    return c.charCodeAt()
}

//////////////////////////////// 

// find the uniqe number  

function findUniq(arr) {
    let numbers = {}
    for (var i = 0; i < arr.length; i++) {
        const currentNumber = arr[i]
        if (!numbers[currentNumber]) {
            numbers[currentNumber] = 1
        }
        else {
            numbers[currentNumber]++
        }
    }
    let uniq = 0
    for (var num in numbers) {
        if (numbers[num] == 1) {
            uniq = num
        }
    }
    return +uniq
} 

///////////////////////////////////////////////// 

// Given 2 strings, a and b, return a string of the form short + long + short,
//  with the shorter string on the outside and the longer string on the inside.
//  The strings will not be the same length, but they may be empty(zero length). 

function solution(a, b) {
    let result = ""
    if (a.length <= b.length) {
        result += a.toString() + b.toString() + a.toString()
    }
    if (b.length <= a.length) {
        result += b.toString() + a.toString() + b.toString()
    }
    return result
}
console.log(solution('45', '1')) 




