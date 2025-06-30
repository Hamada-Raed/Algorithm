function isPal(arr) {
    if (arr.length == 1 || arr.length == 0) {
        return true
    }
    let word = arr.toLowerCase()
    let forward_arr = []
    let backward_arr = []
    for (var i = 0; i < word.length; i++) {
        forward_arr.push(word[i])
    }
    for (var i = word.length - 1; i >= 0; i--) {
        backward_arr.push(word[i])
    }
    if (forward_arr.join("") == backward_arr.join("")) {
        return true
    }
    else {
        return false
    }

}


// Or another solution

return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false


