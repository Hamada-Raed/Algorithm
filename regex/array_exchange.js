
function exchangeWith(a, b) {
    let new_a = []
    let new_b = [] 
    
    for(var i=0; i<a.length; i++){
        new_b.push(a[i])
    }
    
    for(var i=0; i<b.length; i++){
        new_a.push(b[i])
    }
    
    a = new_a.reverse() 
    b = new_b.reverse()

    console.log(a)
    console.log(b)

}

const a = [
  '7', '6', '5',
  '4', '3', '2',
  '1'
];
const b = [ 'c', 'b', 'a' ];
console.log(exchangeWith(a, b))
