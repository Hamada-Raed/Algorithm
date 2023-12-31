// THIS ONE TIMES OUT!!

function dblLinear(n) {
    // a place to store the sequence
    const sequence = [1]; // start the sequence with 1
    const seen = {};
    // a place to keep track of the length, set to 0
    let length = 0;
    // a place to keep track of current x index, set to 0
    let xIndex = 0;

    // while length is less than n
    while (length < n) {
        const x = sequence[xIndex];
        // calculate y given the current x
        const y = 2 * x + 1;
        // insert y into the sequence in sorted order
        if (!seen[y]) {
            for (var i = sequence.length - 1; i >= 0; i--) {
                if (sequence[i] < y) {
                    break;
                }
            }
            sequence.splice(i + 1, 0, y);
            seen[y] = true;
        }
        // calcuate z given the current x
        const z = 3 * x + 1;
        // insert z into the sequence in sorted order
        sequence.push(z);
        seen[z] = true;
        // increase length
        length++;
        // increase x index
        xIndex++;
    }
    // return sequence at n
    return sequence[n];
}

// DOES NOT TIME OUT - We are using less memory...
function dblLinear(n) {
    // a place to store the sequence
    const sequence = [1]; // start the sequence with 1
    const seen = {};
    // a place to keep track of the length, set to 0
    let length = 0;
    let last = 0;

    // while length is less than n
    while (length < n) {
        const x = sequence.shift(); // remove first value from array
        delete seen[x]; // remove from seen
        // calculate y given the current x
        const y = 2 * x + 1;
        // insert y into the sequence in sorted order
        if (!seen[y]) {
            for (var i = last; i < sequence.length; i++) {
                if (sequence[i] > y) {
                    break;
                }
            }
            sequence.splice(i, 0, y);
            seen[y] = true;
            last = i;
        }
        // calcuate z given the current x
        const z = 3 * x + 1;
        // insert z into the sequence in sorted order
        sequence.push(z);
        seen[z] = true;
        // increase length
        length++;
    }
    return sequence[0]; // return the first value in the array
}

console.log(dblLinear(10), 22);
console.log(dblLinear(20), 57);
console.log(dblLinear(30), 91);
console.log(dblLinear(50), 175);
console.log(dblLinear(100), 447); 



////// 


// Regex Password Validation 
// assign your RegExp to REGEXP:
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;


// Small enough? - Beginner 

function smallEnough(a, limit) {
    for (var i=0; i<a.length; i++){
        if (a[i] > limit){
            return false
        }
    }
    return true
} 


// Triangle area 

function tArea(tStr) {
    let count = 0;
    for (var i = 0; i < tStr.length; i++) {
        if (tStr[i] == '\n') {
            count++
        }
    }
    count = count - 2
    return 0.5 * Math.pow(count, 2)
}

function tArea(tStr) {
    const side = tStr.split('\n').length - 3
    return (side * side) / 2
} 

// Plus - minus - plus - plus - ... - Sum

function getSolution(arr, sum) {
    let sumArr = 0;
    for (var i=0; i<arr.length; i++){
        if (arr[i] < sum) {
            
        } 
    }
}
console.log(getSolution([1, 3, 4, 6, 8], 20))

// Find the remainder 

function remainder(n, m) {
    let largerst = Math.max(n, m);
    if (largerst == n) {
        return n % m
    }
    else {
        return m % n
    }
}

// 

function min(arr, toReturn) {
    let smallest = arr[0];
    let index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= smallest) {
            smallest = arr[i]
            index = i
        }
    }
    if (toReturn == 'value') {
        return smallest;
    }
    else if (toReturn == 'index') {
        return index
    }
}
console.log(min([1, 2, 3, 4, 0], 'value'))

// simple validation of a username with regex 

function validateUsr(username) {
    const regex = /^[a-z0-9_]{4,16}$/;
    return regex.test(username);
}

// XO 

function XO(str) {
    let xcount = 0; 
    let ocount = 0; 
  for (var i=0; i<str.length; i++){
    if (str[i] == 'X' || str[i] == 'x'){
        xcount++
    }
    else if (str[i] == 'O' || str[i] == 'o'){
      ocount++
    }
  }
  if (ocount == xcount) return true
  return false
}


