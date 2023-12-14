function oneDown(str) {
    if (typeof str !== 'string') {
        return 'Input is not a string'
    }
    let alphaBete = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'


}
oneDown('')  

// Find the divisors 

function divisors(integer) {
    let divisorsArr = []
    for (var i = 2; i < integer; i++) {
        if (integer % i == 0) {
            divisorsArr.push(i);
        }
    }
    if (divisorsArr.length == 0) {
        return integer + ' is prime'
    }
    return divisorsArr
};

// 