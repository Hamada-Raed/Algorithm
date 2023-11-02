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