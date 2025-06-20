function logicalCalc(array, op){
    let set_true = new Set()
    let set_false = new Set()
    array.map(bool => bool == true ? set_true.add(bool) : set_false.add(bool))
    arr_true = [...set_true]
    arr_false = [...set_false]
    
    return [arr_false, arr_true]

    
}


console.log(logicalCalc([true, true, true, false], "AND"));
console.log(logicalCalc([true, true, true, false], "OR"));
console.log(logicalCalc([true, true, true, false], "XOR"));
