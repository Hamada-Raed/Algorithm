function oneDown(str) {
    if (typeof str !== 'string') {
        return 'Input is not a string'
    }
    let alphaBete = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'


}
oneDown('')  

// Find the divisors 

function divisors(integer) {
    let divisorsArr = []
    for (var i = 2; i < integer; i++) {
        if (integer % i == 0) {
            divisorsArr.push(i);
        }
    }
    if (divisorsArr.length == 0) {
        return integer + ' is prime'
    }
    return divisorsArr
};

// Stop gninnipS My sdroW! 
function reverseString(input) {
    return input.split('').reverse().join('');
}

function spinWords(string) {
    let result = '';
    const words = string.split(' ');

    for (var i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length >= 5) {
            word = reverseString(word);
        }
        result += ' ' + word; // Add the modified or unmodified word to the result
    }

    return result.trim();
}
//

function spinWords(words) {
    return words.split(' ').map(function (word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}