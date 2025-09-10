function reject(array, predicate) {
    let arr = []
    for (var i=0; i< array.length; i++){
      if (typeof (array[i]) !== 'number'){
        return 
      }
      else if (array[i] %2 == 0){
        arr.push(array[i])
      }
      else return 
    }
    return arr 
}
console.log(reject([]))