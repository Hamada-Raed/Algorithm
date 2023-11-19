// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy', 'lacer']) => [] 

function anagrams(word, words) {

}

////////////////////////////// 

function songDecoder(song) {
    // split the string on WUB
    const split = song.split('WUB');
    console.log(split);

    // filter out empty strings
    const words = split.filter(word => word.trim());
    console.log(words);

    // join back together on a space
    const result = words.join(' ');

    return result;
}

function songDecoder(song) {
    return song.replace(/(WUB)+/g, ' ').trim();
}

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));      




////////////////////////////////////////


// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
    // a place to store the movedZeros array
    const movedZeros = [];
    // a place to store the zero count
    let zeroCount = 0;

    // iterate over the array
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        // if the current value is not a zero
        if (value !== 0) {
            // push into movedZeros array
            movedZeros.push(value);
        } else {
            // increment zero count
            zeroCount++;
        }
    }

    // iterate up to zero count
    for (let i = 0; i < zeroCount; i++) {
        // push zero into the array
        movedZeros.push(0);
    }

    // return the movedZeros array
    return movedZeros;
}

var moveZeros = function (arr) {
    let zeroCount = 0;
    const movedZeros = arr.reduce((movedZeros, value, index) => {
        if (value !== 0) {
            movedZeros[index - zeroCount] = value;
        } else {
            zeroCount++;
        }
        return movedZeros;
    }, new Array(arr.length).fill(0));

    return movedZeros;
}

// NOT WORKING RIGHT NOW...
var moveZeros = function (arr) {
    let zeroCount = 0;
    for (let i = 0; i < arr.length - zeroCount; i++) {
        const value = arr[i];
        if (value === 0) {
            for (let j = i; j < arr.length - 1 - zeroCount; j++) {
                arr[j] = arr[j + 1];
                arr[arr.length - 1 - zeroCount] = 0;
            }
            zeroCount++;
            i--;
        }
    }

    return arr;
}

console.log(JSON.stringify(moveZeros([1, 2, 1, 0, 1, 0, 3, 0, 1, 0]))),
    console.log(JSON.stringify([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]))


////////

// doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);

function findOdd(array) {
    // a place to store the counts
    const counts = {};

    // iterate over the array
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        // if we have not seen this number before
        if (!counts[number]) {
            // add it to counts with a value of 1
            counts[number] = 1;
        } else {
            // if we have seen this number before  
            // increment its count
            counts[number]++;
        }
    }

    // iterate over the counts
    for (const number in counts) {
        const count = counts[number];
        // if the count is odd
        if (count % 2 !== 0) {
            // return that number
            return +number;
        }
    }
}

function findOdd(array) {
    const counts = array.reduce((counts, number) => {
        counts[number] = counts[number] || 0;
        counts[number]++;
        return counts;
    }, {});

    const numbers = Object.keys(counts);

    const oddIndex = numbers.findIndex((number) => {
        const count = counts[number];
        return count % 2 !== 0;
    });

    return +numbers[oddIndex];
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]), 5);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
console.log(findOdd([10]), 10);
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);