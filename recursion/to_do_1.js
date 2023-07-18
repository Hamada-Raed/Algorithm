// Recursive Sigma
function Sigma(num) {
    if (num < 0) {
        return 0
    }
    return num + Sigma(num - 1)
}
console.log(Sigma(-2))

// Factorial 
function Factorial(num) {
    if (num == 1) {
        return num
    }
    return num * Factorial(num - 1)
}
console.log(Factorial(4))