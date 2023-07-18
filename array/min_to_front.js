
function shifit(arr) {
    min = arr[0]
    index = 0
    // to find the min
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= min) {
            min = arr[i]
            index = i
        }
    }
    // swap the min into front
    temp = arr[0]
    arr[0] = arr[index]
    arr[index] = temp
    // shifit
    for (var i = index; i > 1; i--) {
        temp = arr[i]
        arr[i] = arr[i - 1]
        arr[i - 1] = temp
    }
    return arr
}
console.log(shifit([4, 2, 3, 1, 5]))