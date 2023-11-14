// For example, when an array is passed like[19, 5, 42, 2, 77], the output should be 7.

// Sum of two lowest positive integers 
function sumTwoSmallestNumbers(numbers) {
    let smallest = numbers[0]; 
    let secondSmallest = numbers[1]
    if (numbers[0]< numbers[1]){
        smallest = numbers[0]
        secondSmallest[1]
    }
    else{
        smallest = numbers[0]
        secondSmallest = numbers[1]
    }
    for (var i=2; i<numbers.length; i++){
        if (numbers[i]< smallest){
            secondSmallest = smallest
            smallest = numbers[i]
        }
        else if (numbers[i] < secondSmallest){
            secondSmallest = numbers[i]
        }
    }
    return smallest + secondSmallest
}
////////////////////////////////////////////// 
// "4556364607935616" -- > "############5616"
// "64607935616" -- > "#######5616"
// "1" -- > "1"
// "" -- > ""
function maskify(cc) {
    let masked = ''; 
    for (var i=cc.length -1; i>=0; i--){
        const currentItem = cc[i]
        if (i > cc.length -4){
            masked += currentItem
        }
        else {
            masked += '#' 
        }
    }
    return masked
}
console.log(maskify('11111')) 

///////////////////////////////////////// 

// Create Phone Number
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers) {
    let phoneNumber = '(' 
    phoneNumber += numbers[0] + numbers[1] + numbers[2] 
    phoneNumber += ') '
    phoneNumber += numbers[3] + numbers[4] + numbers[5]
    phoneNumber += '-' 
    phoneNumber += numbers[6] + numbers[7] + numbers[8] + numbers[9] 
    return phoneNumber
}

/////////////////////////// 
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
    // a place to store the movedZeros array
    const movedZeros = [];
    // a place to store the zero count
    let zeroCount = 0;

    // iterate over the array
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        // if the current value is not a zero
        if (value !== 0) {
            // push into movedZeros array
            movedZeros.push(value);
        } else {
            // increment zero count
            zeroCount++;
        }
    }

    // iterate up to zero count
    for (let i = 0; i < zeroCount; i++) {
        // push zero into the array
        movedZeros.push(0);
    }

    // return the movedZeros array
    return movedZeros;
}

var moveZeros = function (arr) {
    let zeroCount = 0;
    const movedZeros = arr.reduce((movedZeros, value, index) => {
        if (value !== 0) {
            movedZeros[index - zeroCount] = value;
        } else {
            zeroCount++;
        }
        return movedZeros;
    }, new Array(arr.length).fill(0));

    return movedZeros;
}

// NOT WORKING RIGHT NOW...
var moveZeros = function (arr) {
    let zeroCount = 0;
    for (let i = 0; i < arr.length - zeroCount; i++) {
        const value = arr[i];
        if (value === 0) {
            for (let j = i; j < arr.length - 1 - zeroCount; j++) {
                arr[j] = arr[j + 1];
                arr[arr.length - 1 - zeroCount] = 0;
            }
            zeroCount++;
            i--;
        }
    }

    return arr;
}

console.log(JSON.stringify(moveZeros([1, 2, 1, 0, 1, 0, 3, 0, 1, 0]))),
console.log(JSON.stringify([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])) 

///////////////////////////////////// 
// Given two integers a and b, which can be positive or negative, 
// find the sum of all the integers between and including them and return it. 
// If the two numbers are equal return a or b.

function getSum(a, b) {
    let sum = 0;
    if (a = b) {
        return a
    }
    else if (a > b) {
        for (var i = b; i <= a; i++) {
            sum += i
        }
    }
    else if (a < b) {
        for (var i = a; i <= b; i++) {
            sum += i
        }
    }

    return sum
}

/////////////////////////////////// 

function GetSum(a,b){
    smallest = Math.min(a,b)
    largest = Math.max(a,b) 
    let sum = 0;
    if (smallest = largest) {
        return smallest
    }
    for (var i=smallest; i<= largest; i++){
        sum += i
    }
    return sum
} 


//////////////////////////// 
// Moving Zeros To The End 

function moveZeros(arr) {
    // a place to store the movedZero array
    let movedZeros = []; 
    // a place to store the zero count
    let CountZero = 0;  
    // iterate over the arr
    for (var i=0; i<arr.length; i++){
        // if current value is not a zero 
        if (arr[i] !== 0){
            // push it the movedZero
            movedZeros.push(arr[i])
        }
        // else 
        else {
            // increment zero count
            CountZero++
        }
    } 
    // iterate up to zero count 
    for (var i=0; i<CountZero; i++){
        // push zero into the array 
        movedZeros.push(0)
    }
    // return the movedZero array
    return movedZeros
}

var moveZeros = function (arr) {
    let zeroCount = 0;
    for (let i = 0; i < arr.length - zeroCount; i++) {
        const value = arr[i];
        if (value === 0) {
            for (let j = i; j < arr.length - 1 - zeroCount; j++) {
                arr[j] = arr[j + 1];
                arr[arr.length - 1 - zeroCount] = 0;
            }
            zeroCount++;
            i--;
        }
    }

    return arr;
}
