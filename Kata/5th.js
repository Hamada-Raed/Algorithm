// Isograms 


function isIsogram(str) {
    // a place to store the letter with number of repeating 
    str = str.toUpperCase();
    let Letters = {};
    let status = false
    // iterate over the str and store in object 
    for (var i = 0; i < str.length; i++) {
        const currentLetter = str[i];
        if (!Letters[currentLetter]) {
            Letters[currentLetter] = 1
        }
        else {
            Letters[currentLetter] += 1
            status = true
        }
    }
    if (status == true) {
        return false
    }
    return true
}
console.log(isIsogram('hHEelo')) 

///////////////////////////// 
// Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23
function solution(number) {
    // a place to store the number that divide 3 or 5 under the provided number (divides)
    let divides = [];
    // a place to store the sum
    let sum = 0;
    // iterate up the number
    for (var i = 1; i < number; i++) {
        // if the number is divided of 3 or 5 
        if (i % 3 == 0 || i % 5 == 0) {
            // push it divdies 
            divides.push(i)
        }
    }
    console.log(divides)
    // iterate again and and find the sum
    for (var j = 0; j < divides.length; j++) {
        sum += divides[j]
    }
    return sum
}
console.log(solution(10))