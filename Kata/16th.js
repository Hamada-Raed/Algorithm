function solution(number) {
    let sum = 0;
    for (var i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    return sum
}
console.log(solution(10)) 


//////////////////////// 

function solution(numbers) {
    let dict = {}
    for (var i = 0; i < numbers.length; i++) {
        const num = numbers[i]
        if (!dict[num]) {
            dict[num] = 1
        }
        else {
            dict[num] += 1
            return true
        }
    }
    return false
}

console.log(solution([1, 2, 3]), false);
console.log(solution([1, 2, 3, 6, 5, 6]), true);
console.log(solution(['a', 'b', 'c', 'a']), true);
console.log(solution([1, 2, 3, 'a', 'b']), false);


////////////////////// 


function solution() {
    const seen = new Set();
    for (let i = 0; i < arguments.length; i++) {
        if (seen.has(arguments[i])) {
            return true;
        }
        seen.add(arguments[i]);
    }
    return false;
}



