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