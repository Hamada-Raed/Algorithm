function isPrime(num) {
    // Handle special cases:
    if (num <= 1) return false; // Negatives and 1 are not prime
    if (num === 2) return true; // 2 is the only even prime number
    if (num % 2 === 0) return false; // Even numbers (except 2) are not prime

    // Optimized loop for checking divisibility:
    for (let i = 3; i <= Math.sqrt(num); i += 2) { // Check odd numbers only
        if (num % i === 0) return false; // If divisible, not prime
    }

    return true; // If not divisible by any number in the loop, it's prime
} 


function divisors(integer) {
    const divs = []; 
    for (var i=2; i<integer/2 ; i++){
        if (integer % i == 0 ){
            divs.push(i)
        }
    }
    if (divs.length == 0){
        return integer + ' is prime'
    }
    return divs
}; 


function squareDigits(num) {
    let number = '' + num
    let result = "";

    for (var i = 0; i < number.length; i++) {
        result += "" + number[i] ** 2
    }
    return Number(result)
}
console.log(squareDigits(3213)) 






