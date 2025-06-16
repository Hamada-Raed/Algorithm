function arrayMadness(a, b) {
    sq_a = a.map(num => num*num).reduce((a,b) => a+b, 0)
    cu_b = b.map(num => num *num*num).reduce((a,b) => a+b, 0)
    return sq_a > cu_b
  
}

