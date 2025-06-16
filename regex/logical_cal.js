function logicalCalc(array, op){
    let set_true = new Set()
    let set_false = new Set()
    array.map(bool => bool == true ? set_true.add(bool) : set_false.add(bool))
    for (var true_val of set_true){
        for(false_val of set_false){
          if (true_val  ){

          }
        }
    }
    
}


console.log(logicalCalc([true, true, true, false], "AND"));
console.log(logicalCalc([true, true, true, false], "OR"));
console.log(logicalCalc([true, true, true, false], "XOR"));
