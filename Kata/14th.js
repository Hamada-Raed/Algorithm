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

console.log(isPrime(9))