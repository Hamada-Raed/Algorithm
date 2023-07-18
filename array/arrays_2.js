// Reverse 

newarr = []
function Reverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        newarr.push(arr[i])
    }
    return newarr
}
console.log(Reverse([1, 2, 3, 4, 5])) 

// anothr way 

function Reverse(arr) {
    for (var i = 0; i < (arr.length - 1) / 2; i++) {
        temp = arr[i]
        arr[i] = arr[arr.length - (i + 1)]
        arr[arr.length - (i + 1)] = temp
    }
    return arr
}
console.log(Reverse([1, 2, 3, 4, 5])) 

// Rotate 

function rotateArr(arr, shiftBy) {
    for (var i = 0; i < shiftBy; i++) {
        current = arr.pop();
        arr.unshift(current);
    }
    return arr;
}
console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 9));


function rotateArr(arr, shifitby) {
    len = arr.length
    reminder = shifitby % len // mod(len)
    temp = arr[len - 1]
    for (var i = len - 1; i > 0; i = i - reminder) {
        arr[i] = arr[i - 1]
    }
    arr[reminder - 1] = temp

    return arr
}
console.log(rotateArr([1, 2, 3], 1)) //expected value = [3,1,2]

//Filter Range
function filterRange(arr, min, max) {
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            arr[index] = arr[i];
            index++;
        }
    }
    console.log(index)

    for (var i = arr.length; i > index; i--) {
        arr.pop()
    }
    //   arr.length = index; //

    return arr;
}
console.log(filterRange([1, 2, 3, 4, 5, 6, 7], 1, 7))

// Concat
function concat(arr1, arr2) {

    newarr = []
    for (var i = 0; i < arr1.length; i++) {
        newarr.push(arr1[i])
    }
    for (var j = 0; j < arr2.length; j++) {
        newarr.push(arr2[j])
    }

    return newarr
}
console.log(concat(["hi", 2, 3], [4, 5, 6]))