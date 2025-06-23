function findArray(arr1, arr2){
    new_arr = []
        for (var i=0; i<arr1.length; i++){
            new_arr.push(arr1[arr2[i]])
        }      
    return new_arr.filter((num) => typeof(num) == 'number' || typeof(num) == 'string')
}

console.log(findArray(['a', 'a', 'a', 'a', 'a'], [2, 4]))
console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]), [1, 1, 1])
console.log(findArray([1, 2, 3, 4, 5], [0]), [1])
console.log(findArray([1, 2, 3, 4, 5], [4,2,0]), [5,3,1])
console.log(findArray([1, 2, 3, 4, 5], [2,2,2]), [3,3,3])
console.log(findArray(['this', 'is', 'test'], [0, 1, 2]), ['this', 'is', 'test'])