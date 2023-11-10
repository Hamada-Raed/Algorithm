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
    return l.filter((currentItem)=> {
        return typeof currentItem === 'number'
    })
}