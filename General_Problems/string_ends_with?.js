function solution(str, ending){
    return str.endsWith(ending);
}

// console.log(solution('abcde', 'cde', true));
// console.log(solution('abcde', 'abc', false));
// console.log(solution('', 'abc'));
// console.log(solution('', '', false));
console.log(solution('empty ending', '', false));