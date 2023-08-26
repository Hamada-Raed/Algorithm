// write me a function stringy that takes a size
// and returns a string of alternating 1s and 0s. 
// with size 12 should return : '101010101010'. 

function stringy(size) {
    let string = ''; 
    for (var i=1; i<size+1; i++){
        string += i%2
    }  
    return string
}
console.log(stringy(12))

