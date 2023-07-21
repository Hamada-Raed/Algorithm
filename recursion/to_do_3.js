// Recursive Binary Search

function BinarySearch(arr, val){
    let start = 0; end = arr.length -1
    while (start <= end){
        let mid = Math.floor((end+start)/2)
        if (arr[mid] == val){
            return true
        }
        else if (arr[mid] < val){
            start = mid + 1 
        }
        else {
            end = mid - 1
        }
    }
    return false
}
console.log(BinarySearch([1,2,3,4],5))


let arr = [1,2,3,4,5];
function BinarySearch(arr, start, end, key) {
    if(start > end) return -1;
    let mid = Math.floor((start + end) / 2);

    if(arr[mid] === key) return mid;
    if(key > arr[mid]) {
        return BinarySearch(arr, mid + 1, end, key);
    } else if(key < arr[mid]) {
        return BinarySearch(arr, start, mid -1, key);
    }
}
console.log (BinarySearch([1,3,4,5,5], 0, arr.length - 1, 4)); // it will return 0;

//Greatest commen diviser gcd
function gcf(a, b) {
    var result
    if (a == b) {
        result = a
    } else if (a > b) {
        if ((a / b) % 1 === 0) {
            result = b;
        } else {
            result = gcf(a - b, b);
        }
    } else if (a < b) {
        if ((a / b) % 1 === 0) {
            result = b;
        } else {
            result = gcf(a, b - a);
        }

    }
    return result
}
console.log(gcf(6, 8))

// tarai

function tarai(x, y, z) {
    var result
    if (x <= y) {
        result = y
    } else {
        result = tarai(tarai(x - 1, y, z), tarai(y - 1, z, x), tarai(z - 1, x, y))
    }
    return result
}

console.log(tarai(10, 2, 9))
