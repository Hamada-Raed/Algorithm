function sumPairs(ints, s) {
    const pairs = [];
    for (var i = 0; i < ints.length; i++) {
        for (var j = i + 1; j < ints.length; j++) {
            if (ints[i] + ints[j] == s) {
                pairs.push({
                    pair: [ints[i], ints[j]],
                    j
                })
            }
        }
    }
    let earliestPair = pairs[0];
    for (var i = 0; i < pairs.length; i++) {
        if (earliestPair.j > pairs[i].j) {
            earliestPair = pairs[i]
        }
    }
    return earliestPair.pair;
}
console.log(sumPairs([1, 2, 1, 2, 1], 3))
/////////////////////////////////////////////// 


function sumPairs(ints, s) {
    const haveSeen = {}
    for (var i = 0; i < ints.length; i++) {
        const currentNum = ints[i]
        const need = s - currentNum;
        if (haveSeen[need]) {
            return [need, currentNum]
        }
        else {
            haveSeen[currentNum] = true;
        }
    }
    return undefined
}
console.log(sumPairs([1, 2, 1, 2, 1], 3))
