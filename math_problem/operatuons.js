
function process2Arrays(arr1, arr2, op) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    const union_set = new Set(arr1.concat(arr2));
    const intersection = new Set([...set1].filter(item => set2.has(item)));
    const difference = new Set([...set1].filter(item => !set2.has(item)));
   
    
    
}

console.log(process2Arrays([1, 2, 3,5,7], [2, 3, 6], 'difference')); // [-3, -3, -3]
console.log(process2Arrays([1, 2, 3], [3, 1, 6], 'union')); // [4, 10, 18]
console.log(process2Arrays([1, 2, 3], [3, 2, 6,4,3,5], 'intersection ')); // [0.25, 0.4, 0.5]