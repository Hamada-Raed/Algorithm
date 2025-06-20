// https://www.codewars.com/kata/571af500196bb01cc70014fa/train/javascript


function mirror(code){
    shifted_num = 7 
    let code_num = code.split("").map(char => char.charCodeAt())
    console.log(code_num)
    let message = ""
    let code_latter = code_num.map(num => {
        if (num == 32){
            message += " "
        }
        else{
            message += String.fromCharCode((97 - num)%26 + 104)
        }
    })
    return message

}



console.log(mirror("w"), "") //whole alphabet mirrored here
// mirror("hello", "abcdefgh"), "adllo" //notice only "h" and "e" get reversed
