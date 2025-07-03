
// ["dell", "ledl", "abc", "cba"] returns 2 
function anagramCounter (wordsArray) {
    let anagram_count = 0;
 
    // let dixtionary = {
    //     "name" : "Hamada",
    //     "age" : 25, 

    // };
    // // how to find the size or length of the dictionary? 
    // console.log(Object.keys(dixtionary).length);

    for (var i=0; i<wordsArray.length; i++){
        let set1 = new Set(wordsArray[i]);
        let set2 = new Set(wordsArray[i+1]);
        let difference = new Set([...set1].filter(item => !set2.has(item)));
        if (difference.size === 0) {
            anagram_count++;
        }
    }


    // for (let i = 0; i < wordsArray.length; i++) {
    //     for (let j = i + 1; j < wordsArray.length; j++) {
    //         let word1 = wordsArray[i].split('').sort().join('');
    //         let word2 = wordsArray[j].split('').sort().join('');
    //         if (word1 === word2) {
    //             anagram_count++;
    //         }
    //     }
    // }
    return anagram_count;
   

  
}
console.log(anagramCounter(["dell", "ledl", "abc", "cba"]))