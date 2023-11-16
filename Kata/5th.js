// Isograms 


function isIsogram(str) {
    // a place to store the letter with number of repeating 
    str = str.toUpperCase();
    let Letters = {};
    let status = false
    // iterate over the str and store in object 
    for (var i = 0; i < str.length; i++) {
        const currentLetter = str[i];
        if (!Letters[currentLetter]) {
            Letters[currentLetter] = 1
        }
        else {
            Letters[currentLetter] += 1
            status = true
        }
    }
    if (status == true) {
        return false
    }
    return true
}
console.log(isIsogram('hHEelo')) 

///////////////////////////// 
// Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23
function solution(number) {
    // a place to store the number that divide 3 or 5 under the provided number (divides)
    let divides = [];
    // a place to store the sum
    let sum = 0;
    // iterate up the number
    for (var i = 1; i < number; i++) {
        // if the number is divided of 3 or 5 
        if (i % 3 == 0 || i % 5 == 0) {
            // push it divdies 
            divides.push(i)
        }
    }
    console.log(divides)
    // iterate again and and find the sum
    for (var j = 0; j < divides.length; j++) {
        sum += divides[j]
    }
    return sum
}
console.log(solution(10))

/////////////////////////////////////////////// 

// Convert string to camel case 
// "the-stealth-warrior" gets converted to "theStealthWarrior"

function toCamelCase(str) {
    // split the str by _ or - named words 
    const words = str.split(/-|_/g)
    // a place to store the camel case 
    let camelCase = words[0]
    // iterate over the words
    for (var i =1; i < words.length; i++) {
        camelCase += words[i][0].toUpperCase() + words[i].slice(1)
    }
    return camelCase
}
console.log(toCamelCase('the_stealth_warrior')) 


////////////////////////// 
function toCamelCase(str) {
    var regExp = /[-_]\w/ig;
    return str.replace(regExp, function (match) {
        return match.charAt(1).toUpperCase();
    });
}

////////////////////////////////////////// 

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

console.log(w.prioriIncantatem(), ['avadaKedavra', 'expelliarmus', 'alohomora']); 

////////////////////////////// 
// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case

function isIsogram(str) {
    // a place to store the counts
    const counts = {};

    // iterate over the string
    for (let i = 0; i < str.length; i++) {
        // see if we have seen this letter before
        const letter = str[i].toLowerCase();
        if (!counts[letter]) {
            // if not add it to the counts with a count of 1
            counts[letter] = 1;
        } else {
            // else 
            // NOT AN ISOGRAM
            return false;
        }
    }

    // IS AN ISOGRAM
    return true;
}

function isIsogram(str) {
    // a place to store the counts
    const counts = {};

    // iterate over the string
    return !str.split('').some((letter) => {
        letter = letter.toLowerCase();
        if (!counts[letter]) {
            counts[letter] = 1;
            return false;
        } else {
            return true;
        }
    });
}

function isIsogram(str) {
    // a place to store the counts
    const counts = {};

    // iterate over the string
    return !Array.prototype.some.call(str, (letter) => {
        letter = letter.toLowerCase();
        if (!counts[letter]) {
            counts[letter] = 1;
            return false;
        } else {
            return true;
        }
    });
}


