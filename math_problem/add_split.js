// 6ktu
function splitAndAdd(arr, n) {
    // Declare the arraies
    let array = Array()
    // Check if the length of the array input if not divided by n
    if (arr.length%n !== 0){
        array.push(0)
        arr.map(num => array.push(num))
    }
    let length_array = array.length/n 
    
}

console.log(splitAndAdd([1, 2, 5, 7, 2, 3, 5, 7, 8], 2))

//[1, 2, 5, 7, 2, 3, 5, 7, 8] divided to [1, 2, 5, 7] and [2, 3, 5, 7, 8]