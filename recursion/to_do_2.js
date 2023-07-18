// Recursive Fibonacci

function fib(num) {
    if (num < 0) {
        return null
    }
    if (num == 1 || num == 0) {
        return num
    }

    return fib(num - 1) + fib(num - 2)
}
console.log(fib(20))

// Recursive “Tribonacci”
function Trib(num) {
    if (num == 0 || num == 1) {
        return 0
    }
    if (num == 2) {
        return 2
    }
    return Trib(num - 2) + Trib(num - 3) + Trib(num - 3)
}
console.log(Trib(4))

//Zibonacci 
function Zibonacci(num){
    if (num == 0) {
       return 1;
    }
    if (num == 1 || num == 2) {
       return num;
    }
    if (num > 0 && num % 2 != 0){
       return Zibonacci((num - 1) / 2) + Zibonacci((num - 3) / 2) + 1;
    }
    if (num > 1 && num % 2 == 0) {
       return Zibonacci(num / 2) + Zibonacci((num + 2) / 2) + 1;
    }
}

for (let i = 0; i < 10; i++) {
    console.log(i, Zibonacci(i));
    }