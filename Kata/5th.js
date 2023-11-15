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