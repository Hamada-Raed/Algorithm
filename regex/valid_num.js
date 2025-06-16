// console.log("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(0,15))
 
function validateBase(num, base) {
    // Validate input
      if (base < 2 || base > 36) {
          throw new Error("Base must be between 2 and 36.");
      }

      if (num < 0) {
          throw new Error("Number must be a non-negative integer.");
      }

      // Convert the number to its string representation
      const numStr = num.toString();

      // Define the valid characters based on the base
      const validDigits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const validChars = validDigits.slice(0, base);

      // Check each character in the num string
      for (const char of numStr) {
          if (!validChars.includes(char)) {
              return false;
          }
      }

      return true;
    }


// I found the following two funcitons: 
//     1. if you want to convert number to any base use "num.toString(base)"
//     2. if you have the number and you want to return it from 
//     base to the binary use the following function parseInt(num, base)

// example: 

// num  = 10001
// console.log(num.toString(2))
// console.log(num.toString(10))
// console.log(num.toString(8))
// console.log(num.toString(16))


// console.log(parseInt(num , 2))
// console.log(parseInt(num , 4))
// console.log(parseInt(num , 16))
// console.log(parseInt(num , 8)) 

// console.log(Math.log(4)/Math.log(2)) this concept is very important in number and bases

// const isPowerOfBase = (number, base) => {
//   let num = parseInt(number , base)
//   return Math.log(number) / Math.log(base) % 1 === 0;
// }

// console.log(isPowerOfBase("F", 2)); // Output: true (8 is 2^3)
// console.log(isPowerOfBase(9, 2)); // Output: false (9 is not a power of 2)