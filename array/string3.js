// Parens Valid

function ParensValid(string) {
    myarr = []
    for (var s of string) {
        if (s === '(') {
            myarr.push('(')
        }
        else if (s === ')') {
            if (myarr.length == 0) {
                return false
            }
            myarr.pop()
        }
    }
    return myarr.length == 0
}
console.log(ParensValid('(cbvhncfn())')) 

// Is Palindrome 

function is_Palindrome(string) {
    string = string.split(' ').join('')
    for (var left = 0; left < string.length/2; left++){
        var right = (string.length-1) - left 
        if (string[left] !== string[right]){
            return false 
        }
    }
    return ture
}
is_Palindrome('Ha Ha') 


//Longest Palindrome
function LongestPalindrome(string) {
    string = string.split(" ")
    longest = string[0];
    for (var i = 0; i < string.length; i++) {
        if (string[i].length > longest.length) {
            longest = string[i]
        }
    }
    return longest
}
console.log(LongestPalindrome("Hamada Raed Mohammad AbuAYYASH"))
