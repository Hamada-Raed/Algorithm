
//               abcdefghijklmnopqrstuvwxyz
//   hello ==>   |||||||||||||||||||||||||| ==> bshhk
//               wednsaybcfghijklmopqrtuvxz
//               secrtabdfghijklmnopquvwxyz 

function keywordCipher(string, keyword){
    const new_string = string.toLowerCase()
    const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz").join("")
    const unique = Array.from(new Set(keyword)).join("")
    const combine = Array.from(new Set (unique.concat(alphabet))).join("")
    console.log(combine)
    let dict = {}
    for (var i=0; i<alphabet.length; i++){
        const key = alphabet[i];
        const value = combine[i];
        dict[key] = value;
    }
    console.log(dict)

    let result = ""
    for (var i=0; i<new_string.length; i++){
        if (new_string[i] in dict){
            result += dict[new_string[i]]
        }
        if (string[i] == " "){
            result += " "
        }
    }
    return result
    
   
    
}

console.log(keywordCipher("Welcome home","secret"), "wlfimhl kmhl");


// Step 1: Normalize the keyword by removing duplicate letters and sorting it.
    const uniqueKeyword = [...new Set(keyword.toLowerCase())].join('');
    
    // Step 2: Create the full encryption key by appending remaining unused letters.
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const encryptionKey = uniqueKeyword + alphabet.split('').filter(char => !uniqueKeyword.includes(char)).join('');
    
    // Step 3: Create a mapping from original alphabet to the encryption key.
    const mapping = {};
    for (let i = 0; i < alphabet.length; i++) {
        mapping[alphabet[i]] = encryptionKey[i];
    }
    
    // Step 4: Encrypt the input string using the mapping.
    let encryptedString = '';
    for (const char of string.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            encryptedString += mapping[char] || char;
        } else {
            encryptedString += char; // Keep non-alphabetic characters unchanged
        }
    }
    
    return encryptedString;