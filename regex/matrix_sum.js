function sum(matrix) {
console.log(matrix)
  let sum1 = 0 
  let sum2 = 0
  for (var i=0; i<matrix.length; i++){
    sum1 += matrix[i][i]
  }
  for (var j=0; j<matrix.length; j++){
    len = matrix[0].length - 1
    sum2 += matrix[j][len-j]

  }
  return sum1 + sum2
}

console.log((sum([[1,2,3], [4,5,6], [7,8,9]])))