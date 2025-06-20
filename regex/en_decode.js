function encode(string) {
    let dict_encode = 
    { 
        "a" : "1",
        "e" : "2", 
        "i" : "3", 
        "o" : "4", 
        "u" : "5" 
    }

    string = string.split("")
    string_encoded = ""
    
    string.map(char => {
       if (char in dict_encode){
        string_encoded += dict_encode[char]
       }
       else {
        string_encoded += char
       }
    })

    return string_encoded
   
  
}


function decode(string) {
  let dict_decode = 
  { 
    "1" : "a", 
    "2" : "e", 
    "3" : "i", 
    "4" : "o", 
    "5" : "u"
    
  }
    string = string.split("")
    string_decoded = ""
    
    string.map(char => {
       if (char in dict_decode){
        string_decoded += dict_decode[char]
       }
       else {
        string_decoded += char
       }
    })

    return string_decoded
}

console.log(decode("h2ll4"))




function encode(string) {
    let dict_encode = 
    { 
        "a" : "1",
        "e" : "2", 
        "i" : "3", 
        "o" : "4", 
        "u" : "5" 
    }
    
    let result = string.split("").map(char => {
        return dict_encode[char] || char
    })
    return result.join('')
   
  
}

console.log(encode("Hello"))