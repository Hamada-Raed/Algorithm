// Even or Odd 
function evenOrOdd(number) {
    return number % 2 == 0 ? 'Even' : 'Odd';
} 

// Avarage  

function findAverage(array) {
    let sum = 0;
    if (array.length == 0) return 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }

    return sum / array.length;
}

// split string 
function stringToArray(string) {
    return string.split(' ')
} 

//Correct the mistakes of the character recognition software 
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1

function correct(string) {
    string = string.replace(/5/g, 'S') // g : globle 
    string = string.replace(/0/g, 'O')
    string = string.replace(/1/g, 'I')
    return string
}
