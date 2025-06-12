function calculator(a, b, sign) {
    // Define the list of valid signs
    const signs = ["+", "-", "*", "/"];
    
    // Check if the sign is valid
    let isValidSign = false;
    for (let i = 0; i < signs.length; i++) {
        if (sign === signs[i]) {
            isValidSign = true;
            break;
        }
    }
    if (!isValidSign) {
        return "The sign is not valid.";
    }

    // Check if both inputs are numbers
    if (typeof a !== "number" || typeof b !== "number") {
        return "Enter a valid input, only numbers are allowed.";
    }

    // Perform the calculation based on the sign
    switch (sign) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            // Handle division by zero
            if (b === 0) {
                return "Cannot divide by zero.";
            }
            return a / b;
        default:
            return "An unexpected error occurred.";
    }
}

// Test the function
console.log(calculator(1, 1, "+")); // Output: 2
console.log(calculator(5, 3, "-")); // Output: 2
console.log(calculator(4, 6, "*")); // Output: 24
console.log(calculator(10, 2, "/")); // Output: 5
console.log(calculator(10, 0, "/")); // Output: Cannot divide by zero.
console.log(calculator(10, "a", "+")); // Output: Enter a valid input, only numbers are allowed.
console.log(calculator(10, 2, "%")); // Output: The sign is not valid.