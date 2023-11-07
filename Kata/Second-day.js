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
        'A' : 'T', 
        'T' : 'A', 
        'C' : 'G', 
        'G' : 'C', 
    }
    for (var i=0; i<dna.length; i++){
        complementDNA += DNA[dna[i]]
    }
    return complementDNA
}