
// Pop Front
// Given an array, remove and return the value at the beginning of the array.
// Prove the value is removed from the array by printing it.
newarr = []
function Popfront(arr) {
    for (var i = 1; i < arr.length; i++) {
        newarr.push(arr[i])
    }
    return newarr
}
console.log(Popfront([1, 2, 3, 4]))
// another way 
function Popfront(arr) {
    temp = arr[0]
    arr[0] = arr[arr.length - 1]
    arr[arr.length - 1] = temp
    arr.pop()
    x = arr[0]
    for (var i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]
    }
    arr[arr.length - 1] = x
    return arr
}
console.log(Popfront([1, 2, 3, 4]))

///////////////////////////////////////////// 
// Insert At
// Given an array, index, and additional value, 
// insert the value into array at given index.You can think of pushFront(arr, val) as equivalent to insertAt(arr, 0, val).
// You may use.push(), you are able do this without it though!
// insertAt([100, 200, 5], 2, 311) => [100, 200, 311, 5]
// insertAt([9, 33, 7], 1, 42) => [9, 42, 33, 7]

newarr = []
function InsertAt(arr, index, value) {
    for (var i = 0; i < index; i++) {
        newarr.push(arr[i])
    }
    newarr.push(value)

    for (var i = index; i < arr.length; i++) {
        newarr.push(arr[i])

    }
    return newarr
}
console.log(InsertAt([1, 2, 3, 4, 5, 6], 4, 7)) 

//another way 
function InsertAt(arr, index, value) {
    x = arr[index]  //x=3
    arr[arr.length] = value //to add value
    arr[index] = arr[arr.length - 1] // swap
    arr[arr.length - 1] = x
    for (var i = arr.length - 1; i > index; i--) {
        arr[i] = arr[i - 1]
    }
    arr[index + 1] = x
    return arr
}
console.log(InsertAt([100, 200, 5], 2, 311)) 


// BONUS: Remove At
// Given an array and an index into array,
//  remove and return the array value at that index.Prove the value is removed from the array by printing it.
// Think of popFront(arr) as equivalent to removeAt(arr, 0).
// removeAt([1000, 3, 204, 77], 1) => 3 returned, with [1000, 204, 77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8, 20, 55, 98] printed in the function
newarr = []
function RemoveAt(arr, index) {
    for (var i = 0; i < index; i++) {
        newarr.push(arr[i])
    }
    for (var i = index; i < arr.length - 1; i++) {
        newarr.push(arr[i + 1])
    }

    return newarr
}

console.log(RemoveAt([1, 2, 3, 4, 5, 5], 0))

//another way 
function RemoveAt(arr, index) {
    for (var i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr.pop()
    return arr
}
console.log(RemoveAt([1, 2, 3, 4, 5], 1))


// BONUS: Swap Pairs
// Swap positions of successive pairs of values of given array.If length is odd, do not change the final element.
// Examples:

//     insertAt([1, 2, 3, 4]) => [2, 1, 4, 3]
// insertAt(["Brendan", true, 42]) => [true, "Brendan", 42]

function Swap(arr) {
    if (arr.length % 2 == 0) {
        for (var i = 2; i < arr.length - 1; i = i + 2) {
            temp = arr[i - 2]
            arr[i - 2] = arr[i - 1]
            arr[i - 1] = temp
        }
    }
    else if (arr.length % 2 != 0) {
        for (var i = 0; i < arr.length - 1; i = i + 2) {
            temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
        }
    }
    console.log(arr)
}

Swap([1, 2, 3, 4, 5])


// BONUS: Remove Duplicates

newarr = []
function remove(arr) {
    newarr.push(arr[0])

    for (var i = 1; i < arr.length - 1; i++) {
        if (arr[i] != newarr[i - 1]) {
            newarr.push(arr[i])
        }
    }
    return newarr
}

console.log(remove([1, 2, 2, 3, 4, 4]))



