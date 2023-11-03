// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    // a place to store the result ;
    let result = ''
    // iterate over the string;
    for (var i = 0; i < s.length; i++) {
        //append the current letter i+1 times to the string
        for (var j = 0; j < i + 1; j++) {
            // capitalize the frist append  
            if (j == 0) {
                result += s[i].toUpperCase()
            }
            else {
                result += s[i].toLowerCase()
            }

        }
        // append the dash if is not the last
        if (i != s.length - 1) {
            result += '-'
        }
    }
    return result
}

////////////////////////////////////// 
// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"
// {
//     ['.....'] : 'H'; 
//     ['.'] : 'E'; 
// }
// Decode the Morse code 

decodeMorse = function (morseCode) {
    return morseCode.trim().split('   ').map(word => word.split(' ').map(code => MORSE_CODE[code]).join('')).join(' ');
}

//////////////////////////////// 
String.prototype.toJadenCase = function () {
    let str = this.split(' ')
    console.log(str)
    let JadenStr = '';
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < str[i].length; j++) {
            if (j == 0) {
                JadenStr += str[i][j].toUpperCase();
            }
            else {
                JadenStr += str[i][j].toLowerCase();
            }
        }
        if (i != str.length - 1) {
            JadenStr += ' '
        }
    }
    return JadenStr
};

////////////////////////////////// 
function getMiddle(s) {
    let string = ''
    let Qut = s.length % 2
    if (Qut == 0) {
        const midE = s.length / 2
        string = s[midE - 1] + s[midE]
    }
    else {
        const midO = Math.floor(s.length / 2)
        string = s[midO]
    }
    return string
}
console.log(getMiddle('testing'))