function twoSort(s) {
    sorted_string = s.sort()
    first_sorted_word = sorted_string[0]
    let result = "" 
    for (var i=0; i<first_sorted_word.length -1; i++){
        result += first_sorted_word[i] + "***"
    }  
    let last_character = first_sorted_word[first_sorted_word.length -1]
    return result + last_character
    
    

}



// OR 

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}
console.log(twoSort(["take", "over", "the", "world", "maybe", "who", "knows", "perhaps", "bitcoin"]) );
