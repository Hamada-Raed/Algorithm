// Remove Blanks 
// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
function removeBlanks(mystring) {
    mystringArr = mystring.split(' ')
    console.log(mystringArr)
    console.log(mystringArr.join(''))
}
removeBlanks('hi my name is Hamada')   

// Get Digits 
// getDigits("abc8c0d1ngd0j0!8") => 801008

function getDigits(mystring) {
    result = ''
    for (var i = 0; i < mystring.length; i++) {
        digit = Number(mystring[i])
        if (!isNaN(digit)) {
            result = result + digit
        }
    }
    return result
}
console.log(getDigits('abc8c0d1ngd0j0!8'))

// Acronyms
// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

function acronym(str) {
    arr = str.split(' ')
    result = ''
    for (var i = 0; i < arr.length; i++) {
        result += arr[i][0]
    }
    console.log(result.toUpperCase())
}
acronym('theres no free lunch - gotta pay yer way.')


// Count Non - Spaces
// countNonSpaces("Honey pie, you are driving me crazy") => 29
function countNonSpaces(str) {
    count = 0
    arr = str.split(" ")
    for (var i = 0; i < arr.length; i++) {
        count += arr[i].length
    }
    console.log(count)
}
countNonSpaces('Honey pie, you are driving me crazy')

// Remove Shorter Strings
function removeShorter(arr, val) {
    index = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length >= val) {
            arr[index] = arr[i]
            index++
        }
    }
    arr.length = index
    return arr
}
console.log(removeShorter(['Hello', 'World!', "Hamada Raed"], 7))

// find the word that lowest letters
function removeShorter(str) {
    count = 0
    arr = str.split(' ')
    shorter = arr[0]
    for (var i = 0; i < arr.length; i++) {
        len = shorter.length
        if (arr[i].length <= len) {
            shorter = arr[i]
        }
    }
    console.log(shorter)
}
removeShorter('There is a bug')

// counter letters in arr 
function removeShorter(arr) {
    counter = 0
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            counter += arr[i][j].length
        }
    }
    console.log(counter)
}
removeShorter(['hello', 'world!'])