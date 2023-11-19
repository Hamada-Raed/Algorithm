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