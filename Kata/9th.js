// Are they the "same" ? 

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

function comp(array1, array2) {
    if (!array1 ||
        !array2 ||
        array1.length != array2.length) return false;

    // create an object where the keys are the squared values and the values are true
    const squaredValues = array2.reduce((values, value) => {
        values[value] = values[value] || 0;
        values[value]++;
        return values;
    }, {});

    // iterate over the first array
    for (let i = 0; i < array1.length; i++) {
        const value = array1[i];
        const valueSqrd = value * value;
        // if the current value squared is not in the object
        if (!squaredValues[valueSqrd]) {
            return false;
        } else {
            squaredValues[valueSqrd]--;
        }
    }

    return true;
}