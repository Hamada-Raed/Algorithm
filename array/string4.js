// Is Word Alphabetical
function isAlphabetical(word) {
    for (let i = 1; i < word.length; i++) {
        if (word[i] < word[i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(isAlphabetical("eee")); 

// D Gets Jiggy
function DGetsJiggy(name) {
    greeting = 'OH-SO-COOL';
    first_letter = name[0].charAt(0).toUpperCase();
    result = greeting + ' ' + first_letter
    return result
}
console.log(DGetsJiggy('hamada'))



function largestCommonSuffix(words) {
    if (words.length === 0) {
        return "";
    }

    let suffix = words[0]; // Initialize suffix with the first word in the array

    for (let i = 1; i < words.length; i++) {
        const currentWord = words[i]; // Get the current word being compared
        let j = 0;

        // Compare characters from the end of suffix and currentWord
        while (j < suffix.length && j < currentWord.length && suffix[suffix.length - 1 - j] === currentWord[currentWord.length - 1 - j]) {
            j++;
        }

        // If j becomes 0, there is no common suffix, so return an empty string
        if (j === 0) {
            return "";
        }

        // Update suffix by removing characters that are not common
        suffix = suffix.slice(suffix.length - j);
    }

    return suffix;
}

const input1 = ["deforestation", "citation", "conviction", "incarceration"];
console.log(largestCommonSuffix(input1)); // Output: "tion"