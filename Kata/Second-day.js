function sumPairs(ints, s) {
    const pairs = [];
    for (var i = 0; i < ints.length; i++) {
        for (var j = i + 1; j < ints.length; j++) {
            if (ints[i] + ints[j] == s) {
                pairs.push({
                    pair: [ints[i], ints[j]],
                    j
                })
            }
        }
    }
    let earliestPair = pairs[0];
    for (var i = 0; i < pairs.length; i++) {
        if (earliestPair.j > pairs[i].j) {
            earliestPair = pairs[i]
        }
    }
    return earliestPair.pair;
}
console.log(sumPairs([1, 2, 1, 2, 1], 3))
/////////////////////////////////////////////// 


function sumPairs(ints, s) {
    const haveSeen = {}
    for (var i = 0; i < ints.length; i++) {
        const currentNum = ints[i]
        const need = s - currentNum;
        if (haveSeen[need]) {
            return [need, currentNum]
        }
        else {
            haveSeen[currentNum] = true;
        }
    }
    return haveSeen
}
console.log(sumPairs([1, 2, 1, 2, 1], 3))


//////////////////////////////////////// ////// 

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                vowelsCount++;
            }
        }
    }

    return vowelsCount;
}

/////////////////////////////////// 

function getCount(str) {
    var vowelsCount = 0;
    for (index in str) {
        switch (str[index]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowelsCount++;
                break;
        }
    }
    return vowelsCount;
}

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
    let complementDNA = ''
    for (var i = 0; i < dna.length; i++) {
        if (dna[i] == 'A') {
            complementDNA += 'T'
        }
        else if (dna[i] == 'T') {
            complementDNA += 'A'
        }
        else if (dna[i] == 'G') {
            complementDNA += 'C'
        }
        else if (dna[i] == 'C') {
            complementDNA += 'G'
        }
    }
    return complementDNA
}

/////////////////////////////

function DNAStrand(dna) {
    let complementDNA = ''
    DNA = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C',
    }
    for (var i = 0; i < dna.length; i++) {
        complementDNA += DNA[dna[i]]
    }
    return complementDNA
}

////////////////////// 
function isValidWalk(walk) {
    if (walk.length != 10) return false
    let directions = {
        'n': 0,
        's': 0,
        'e': 0,
        'w': 0,
    }
    for (var i = 0; i < walk.length; i++) {
        directions[walk[i]]++
    }
    if (directions.n - directions.s == 0 && directions.e - directions.w == 0) {
        return true
    }
    else {
        return false
    }

}

///////////////////////////// 
function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length

    for (var i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n': dy--; break
            case 's': dy++; break
            case 'w': dx--; break
            case 'e': dx++; break
        }
    }

    return dt === 10 && dx === 0 && dy === 0
}


//////////////////////////////////// 

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers) {
    numbers = numbers.split(' ');
    // keep track of even count, and the last index we saw of even
    const even = {
        count: 0,
        lastIndex: -1
    };
    // keep track of odd count, and the last index we saw of odd
    const odd = {
        count: 0,
        lastIndex: -1
    };

    // iterate over numbers
    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        // if even, increment even count and store index
        if (currentNumber % 2 == 0) {
            even.count++;
            even.lastIndex = i + 1;
        } else {
            // if odd, increment odd count and store index
            odd.count++;
            odd.lastIndex = i + 1;
        }
    }

    // if even count is 1
    if (even.count == 1) {
        // return the last even index we saw
        return even.lastIndex;
    }
    // else if the odd count is 1
    else {
        // return the last odd index we saw
        return odd.lastIndex;
    }
}

console.log(iqTest("2 4 7 8 10"), 3);
console.log(iqTest("1 2 2"), 1);