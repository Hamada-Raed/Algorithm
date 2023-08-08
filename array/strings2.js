favoriteLanguageString = 'PL/I'
switch (favoriteLanguageString) {
    case 'JavaScript': console.log("Ah so, we thrive on chaos!"); break;
    case 'Python': console.log("Parenthesis-haters, unite!"); break;
    case 'PL/I': console.log("Wha? Who let you in here?");
    default: console.log("Why don't you choose a different one.");
}
// Output:
// Wha ? Who let you in here ?
// Why don't you choose a different one.

// Reverse
// Implement reverseString(str) that, given string,
// returns that string with characters reversed.
//Given "creature", return "erutaerc".Tempting as it seems,
//do not use the built -in reverse()!
function reverseString(str) {
    myarr = []
    mystring = str.split('');
    for (var i = mystring.length - 1; i >= 0; i--) {
        myarr.push(mystring[i])
    }
    return myarr.join('')
}
console.log(reverseString('Hamada'))

// another way 
function reverseString(str) {
    mystring = ''
    for (var i = str.length - 1; i >= 0; i--) {
        mystring += str[i]
    }
    return mystring
}
console.log(reverseString('Hamada'))


function removeOddStr(arr) {
    myarr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 == 0) {
            myarr.push(arr[i])
        }
    }
    return myarr
}
console.log(removeEvenStr(['hi', "hello", 'Reem', 'Haha']))

function removeEvenLengthStrings(arr) {
    let idx = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 !== 0) {
            arr[idx] = arr[i];
            idx++
        }
    }

    arr.length = idx;
    return arr;
}
console.log(removeEvenLengthStrings(['hi', "hello", 'Reem', 'Haha'])) 

let numberAndnumerals = [
    { number: 1000, roman: 'M' },
    { number: 900, roman: 'CM' },
    { number: 500, roman: 'D' },
    { number: 400, roman: 'CD' },
    { number: 100, roman: 'C' },
    { number: 90, roman: 'XC' },
    { number: 50, roman: 'L' },
    { number: 40, roman: 'XL' },
    { number: 10, roman: 'X' },
    { number: 9, roman: 'IX' },
    { number: 5, roman: 'V' },
    { number: 4, roman: 'IV' },
    { number: 1, roman: 'I' },
];

function convert(arabicNumber) {
    let romanLetter = ' ';
    for (var i = 0; i < numberAndnumerals.length; i++) {
        if (numberAndnumerals[i].number <= arabicNumber) {
            arabicNumber = arabicNumber - numberAndnumerals[i].number
            romanLetter = romanLetter + numberAndnumerals[i].roman
            i--
        }
    }
    console.log(romanLetter)

}
convert(3);


