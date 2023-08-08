// Write code that enhances all arrays such that you can call the array.last() 
// method on any array and it will return the last element.If there are no elements
//  in the array, it should return -1.

function last(arr) {
    if (arr.length == 0) {
        return -1
    }
    // else {
    //     // return (arr[arr.length-1])
    //     return arr.slice(-1)
    // }
    else{
        let lastElement = arr.pop()
        console.log(lastElement)

    }
}
console.log(last([1,2,3,4,5]))

// Given an array of integers nums and an integer target,
//  return indices of the two numbers such that they add up to target. 
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function sum(arr, target) {
    for (var i = 0; i < arr.length / 2; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                console.log(i, j)
            }
        }
    }
}
(sum([2, 7, 11, 15], 18)) 

// another one 




