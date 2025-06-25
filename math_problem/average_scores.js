function average(scores) {
    return Math.round(scores.reduce((a,b)=> a+b, 0) / scores.length);
}

console.log(average([49,3,5,300,7]));