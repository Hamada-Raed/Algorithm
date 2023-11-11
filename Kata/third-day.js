function filter_list(l) {
    // a place to store the filter result
    const filtered = []
    // iterate over the array
    for (var i = 0; i < l.length; i++) {
        const currentItem = l[i]
        // if the current item is number
        if (typeof currentItem === 'number') {
            // push it to the result
            filtered.push(currentItem)
        }
    }
    return filtered
}

function filter_list(l) {
    return l.filter((currentItem) => {
        return typeof currentItem === 'number'
    })
}

///////////////////////////// 
//return the total number of smiling faces in the array 

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
function countSmileys(arr) {
    // a place to keep track of the current count
    let count = 0
    // iterate over the arr
    for (var i = 0; i < arr.length; i++) {
        // iterate over the current face if the length of the face is either 2 or 3
        const face = arr[i]
        if (face.length == 2 || face.length == 3) {
            // if the first character is a : or ; 
            if (face[0] == ':' || face[0] == ';') {
                // if the second character is a - or ~
                if (face[1] == '-' || face[1] == '~') {
                    // if the third character is a ) or D  
                    if (face[2] == 'D' || face[2] == ')') {
                        //increment the count
                        count++
                    }
                }
                else if ((face[1] == 'D' || face[1] == ')') && face.length == 2) {
                    count++
                }
            }
        }
    }
    return count;
}

function countSmileys(arr) {
    let count = 0;

    const eyes = {
        ':': true,
        ';': true
    };

    const noses = {
        '-': true,
        '~': true
    };

    const mouths = {
        ')': true,
        'D': true
    };

    for (let i = 0; i < arr.length; i++) {
        const face = arr[i];
        if (face.length == 2) {
            if (eyes[face[0]] && mouths[face[1]]) {
                count++;
            }
        } else if (face.length == 3) {
            if (eyes[face[0]] && noses[face[1]] && mouths[face[2]]) {
                count++;
            }
        }
    }

    return count;
} 



/////////////////////////////////////// 

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False 

function scramble(str1, str2) {
    const LetterCount = {}
    for (var i=0; i<str1.length; i++){
        const currentLetter = str1[i]; 
        LetterCount[currentLetter] = LetterCount[currentLetter] || 0; 
        LetterCount[currentLetter]++
    }
    for (let i=0; i<str2.length; i++){
        const currentLetter = str2[i]
        if (LetterCount[currentLetter] > 0){
            LetterCount[currentLetter]--
        }
        else {
            return false
        }
    }
    return true
}


// ////////////////////////////////// 
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
 
function humanReadable(TotalSeconds) {
    // get total hour by dividing by 3600 drop the reminder
    const hours = Math.floor(TotalSeconds / 3600)
    // get total minutes by divifing by 60 drop the reminder
    const minutes = Math.floor((TotalSeconds % 3600) / 60)
    // get total second is the previous reminder 
    const seconds = (TotalSeconds % 3600) - minutes * 60
    // to make the form as HH:MM:SS us the build-in function padStart()
    const padNumber = (number) => number.toString().padStart(2, '0')
    return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
}
console.log(humanReadable(3660))