// 3^k < n
function largestPower(n){
    let k = Math.floor(Math.log(n) / Math.log(3))
    if (Math.pow(3,k) == n){
        return k - 1
    } 
    else{
        return Math.floor(k)
    }  
}
console.log(largestPower(81)); // Example usage, should return 4 since 3^4 = 81 < 100 and 3^5 = 243 > 100