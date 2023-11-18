// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


// n
// n log n
// n
// n
const sortWord = word => [...word].sort().join('').toLowerCase();

function anagrams(word, words) {
    // sort characters in word
    const sortedWord = sortWord(word); // m log m
    // a place to store the anagrams
    const anagrams = [];

    // iterate over words
    // n
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        // sort characters in the current word
        const currentWordSorted = sortWord(currentWord); // m log m
        // if the current word sorted is equal to the sorted word
        if (sortedWord === currentWordSorted) {
            // push into anagarams array
            anagrams.push(currentWord);
        }
    }

    // n * m log m

    return anagrams;
}

// m
const countLetters = word => Array.prototype.reduce.call(word, (counts, letter) => {
    letter = letter.toLowerCase();
    counts[letter] = counts[letter] || 0;
    counts[letter]++;
    return counts;
}, {});

// k
const looseEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if (obj1Keys.length != obj2Keys.length) {
        return false;
    }
    return obj1Keys.every(key => obj1[key] === obj2[key]);
};

function anagrams(word, words) {
    // count the occurences of each letter in the input word
    const letterCount = countLetters(word);  // m
    const anagarams = [];

    // iterate over words
    // n
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        // count the occurences of each letter in the current word
        const currentWordLetterCount = countLetters(currentWord); // m
        if (looseEqual(currentWordLetterCount, letterCount)) { // k
            anagarams.push(currentWord);
        }
    }

    return anagarams;
}

function anagrams(word, words) {
    const letterCount = countLetters(word);
    return words.filter(currentWord => looseEqual(letterCount, countLetters(currentWord)));
}

console.log(anagrams('aBba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa'])

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer'])

console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']), []) 


//////////////////////////////////////////// 

// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

// senior >= 55
// -2 to +26;
function openOrSenior(data) {
    // an array to store the categories
    const categories = [];

    // iterate over the data
    for (let i = 0; i < data.length; i++) {
        const member = data[i];
        const age = member[0];
        const handicap = member[1];
        // check if the current item index 0 is greater than or equal to 55
        if (age >= 55 && handicap > 7) {
            categories.push('Senior');
        } else {
            categories.push('Open');
        }
    }

    return categories;
}

// ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {
    return data.map(([age, handicap]) => {
        if (age >= 55 && handicap > 7) {
            return 'Senior';
        } else {
            return 'Open';
        }
    });
}

function openOrSenior(data) {
    return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
}

////////////////////////////////////////////////// 


const MAX_PRIOR_SPELLS = 13;

class Wand {
    constructor(spells = {}) {
        this.casted = [];
        Object.assign(this, spells);

        return new Proxy(this, {
            get: (target, property) => {
                const value = target[property];
                if (typeof value === 'function') {
                    target.casted.unshift(property);
                }
                return value;
            }
        });
    }

    prioriIncantatem() {
        return this.casted.slice(1, MAX_PRIOR_SPELLS + 1);
    }

    deletrius() {
        this.casted = ['deletrius'];
    }
}

const w = new Wand({
    expelliarmus: function () { },
    alohomora: function () { },
    avadaKedavra: function () { }
});

w.alohomora();
w.expelliarmus();
w.avadaKedavra();

console.log(w.prioriIncantatem(), ['avadaKedavra', 'expelliarmus', 'alohomora']);g

//////////////////////////////// 
// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

// senior >= 55
// -2 to +26;
function openOrSenior(data) {
    // an array to store the categories
    const categories = [];

    // iterate over the data
    for (let i = 0; i < data.length; i++) {
        const member = data[i];
        const age = member[0];
        const handicap = member[1];
        // check if the current item index 0 is greater than or equal to 55
        if (age >= 55 && handicap > 7) {
            categories.push('Senior');
        } else {
            categories.push('Open');
        }
    }

    return categories;
}

// ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {
    return data.map(([age, handicap]) => {
        if (age >= 55 && handicap > 7) {
            return 'Senior';
        } else {
            return 'Open';
        }
    });
}

function openOrSenior(data) {
    return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
}
