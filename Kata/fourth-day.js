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
