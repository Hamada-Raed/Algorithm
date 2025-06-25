const fibonacci = n => {
  if (n === 0) return 0; // Base case: F(0) = 0
  if (n === 1) return 1; // Base case: F(1) = 1
  return fibonacci(n - 1) + fibonacci(n - 2); // Recurrence relation
};

console.log(fibonacci(6));