

// [2, 10, 9, 3] is a nice array because

//  2 =  3 - 1
// 10 =  9 + 1
//  3 =  2 + 1
//  9 = 10 - 1

function isNice(arr){
    let isNice = true
    let sorted_arr = arr.sort((a, b) => a - b);
    if (sorted_arr.length % 2 == 0) {
        for (var i=0; i<sorted_arr.length; i+=2){
            if (sorted_arr[i] + 1 !== sorted_arr[i+1]) {
                isNice = false 
                break
            }
        }
    }
    else {
        for (var i=0; i<sorted_arr.length; i++){
            if (sorted_arr[i] + 1 !== sorted_arr[i+1]) {
                isNice = false
                break
            }
        }
        return isNice
        
    }
    return isNice 
}
console.log(isNice([4, 2, 3])); // 2,3,4// Example usage, should print the sorted array [2, 3, 9, 10]