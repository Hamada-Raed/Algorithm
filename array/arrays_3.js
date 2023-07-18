// Remove Negatives 

function removeNegative(arr){
    index = 0
    for (var i=0; i<arr.length; i++){
        if (arr[i]>=0){
            arr[index] = arr[i]
            index++
        }
    }
    arr.length = index
    return arr
}
console.log(removeNegative([1,2,3,-4,3,-5,4,0]))

