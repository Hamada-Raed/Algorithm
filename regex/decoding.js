// For example: "a" is encoded with "z", "b" with "y", "c" with "x", etc

// You read the first sentence:

// "r slkv mlylwb wvxlwvh gsrh nvhhztv"

// "i hope nobody decodes this message"

function decode(message){
    let shifted_num = 25
    let message_number = message.split("").map(char => char.charCodeAt())
    console.log(message_number)
    decoded_message  = ""
    let message_latter = message_number.map(num =>{
        if (num == 32){
            decoded_message += " " 
        }
        else{
            decoded_message += String.fromCharCode((((97 - num)%26 + (97 + shifted_num))))
        }
    } )
    return decoded_message
}

console.log(decode("abc"), "zyx")
console.log(decode("sr"),"hi")
console.log(decode("svool"),"hello")
console.log(decode("r slkv mlylwb wvxlwvh gsrh nvhhztv"),"i hope nobody decodes this message")
