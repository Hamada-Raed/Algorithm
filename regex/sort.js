function solve(arr) {
    let arr_neg = [];
    let arr_pos = [];
    let dict = {};
    let freq = null; 
    let max = 0;

    arr.map(num => num < 0 ? arr_neg.push(num) : arr_pos.push(num));

    if (Math.abs(arr_neg.length - arr_pos.length) === 1) {
        return arr.reduce((a, b) => a + b, 0);
    }

    if (arr_neg.length - arr_pos.length > 0) {
        arr_neg.forEach(num => {
            dict[num] = (dict[num] || 0) + 1;
        });
    } else {
        arr_pos.forEach(num => {
            dict[num] = (dict[num] || 0) + 1;
        });
    }

    for (let key in dict) {
        if (dict[key] > max) {
            max = dict[key];
            freq = Number(key); 
        }
    }

    return freq;
}