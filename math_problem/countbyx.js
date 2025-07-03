function countBy(x, n) {
    let z = [];
  
    for (var i=x; i<=n; i+=x){
      z.push(i)
    }
    return z
  }

console.log(countBy(2,10))