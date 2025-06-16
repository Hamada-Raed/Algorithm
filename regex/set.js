function sets(arr) {
    let set = new Set();
    arr.forEach(num => set.add(num)); // Add all elements to the Set
    return [...set]; // Convert the Set to an array
}

console.log(sets([1, 1, 1, 1, 2, 3, 1])); // Output: [1, 2, 3]