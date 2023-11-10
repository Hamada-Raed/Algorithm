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