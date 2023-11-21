
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