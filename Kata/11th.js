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