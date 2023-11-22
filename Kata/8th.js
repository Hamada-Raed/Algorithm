
const sortWord = word => [...word].sort().join('')
function anagrams(word, words) {
    const sortedWord = sortWord(word);
    const anagram = []
    for (var i = 0; i < words.length; i++) {
        const currentWord = words[i]
        const currentWordSorted = sortWord(currentWord)
        if (sortedWord == currentWordSorted) {
            anagram.push(currentWord)
        }
    }
    return anagram
}

/////////////////////////////// 
// RGB To Hex Conversion
// 255, 255, 255 -- > "FFFFFF"
// 255, 255, 300 -- > "FFFFFF"
// 0, 0, 0       -- > "000000"
// 148, 0, 211   -- > "9400D3"

const withinRange = value => value < 0 ? 0 : value > 255 ?  255 : value; 
const toHex = value => pad(value.toString(16).toUpperCase());
const pad = value => value.length === 1 ? "0" + value : value; 
const convert = value => toHex(withinRange(value))

function rgb(r, g, b) {
    return `${convert(r)}${convert(g)}${convert(b)}`
}

//////////////////////////////////////////////////// 

// Growth of a Population

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10

function nbYear(p0, percent, aug, p) {
    let TotalYear = 0; 
    
    const getNextPopluation = current => current + (current * percent/100) + aug
    while (p0 < p){
        p0 = getNextPopluation(p0)
        TotalYear +=1
    }
    return TotalYear
}

///////////////////////////////////////////////////////////// 


function nbYear(p0, percent, aug, p) {
    for (var y = 0; p0 < p; y++)  p0 = p0 * (1 + percent / 100) + aug;
    return y
} 
////////////////////////////////////////////////////////////////
 
function nbYear(p0, percent, aug, p) {

    for (var years = 0; p0 < p; years++) {
        p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
}


/////////////////////////////////////////////////////////////////// 

// Your order, please 

// example "is2 Thi1s T4est 3a"  -- > "Thi1s is2 3a T4est"

function order(words) {
    if (!words) return ''; 
    let spltiWords = words.split(' ');
    let dict = []; 
    for (var i=0; i<spltiWords.length; i++){
        const word = spltiWords[i]
        for (var j=0; j<word.length; j++){
            const letter = word[j];
            const digit = letter.charCodeAt(j);
            if (digit >= 48  || digit <= 57){
                dict.push({
                    digit : word 
                }) 
            }
        }
    }
    return dict
}
order('Thi1s is2 3a T4est"')
////////////////////////////////////////////////////

function order(words) {
    if (!words) return '';
    let spltiWords = words.split(' ');
    let dict = {};
    for (var i = 0; i < spltiWords.length; i++) {
        const word = spltiWords[i]
        for (var j = 0; j < word.length; j++) {
            const letter = word[j]
            const digit = letter.charCodeAt()
            if (digit > 47 && digit < 57) {
                dict[digit] = word
            }
        }
    }
    let result = ''
    for (var word in dict) {
        result += dict[word] + ' '
    }
    return result.trim()
}
console.log(order('is2 Thi1s T4est 3a')) 


////////////////////////////////////////////// 

function order(words) {
    if (!words) return '';

    let splitWords = words.split(' ');
    let dict = {};

    for (var i = 0; i < splitWords.length; i++) {
        const word = splitWords[i];

        for (var j = 0; j < word.length; j++) {
            const letter = word[j];
            const digit = parseInt(letter);

            if (!isNaN(digit)) {
                dict[digit] = word;
                break;  // Assuming there is only one consecutive number in each word
            }
        }
    }

    let result = '';
    for (var num in dict) {
        result += dict[num] + ' ';
    }

    return result.trim();
}

console.log(order('is2 Thi1s T4est 3a'));


