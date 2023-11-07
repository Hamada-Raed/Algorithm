// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    // a place to store the result ;
    let result = ''
    // iterate over the string;
    for (var i = 0; i < s.length; i++) {
        //append the current letter i+1 times to the string
        for (var j = 0; j < i + 1; j++) {
            // capitalize the frist append  
            if (j == 0) {
                result += s[i].toUpperCase()
            }
            else {
                result += s[i].toLowerCase()
            }

        }
        // append the dash if is not the last
        if (i != s.length - 1) {
            result += '-'
        }
    }
    return result
}

////////////////////////////////////// 
// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"
// {
//     ['.....'] : 'H'; 
//     ['.'] : 'E'; 
// }
// Decode the Morse code 

decodeMorse = function (morseCode) {
    return morseCode.trim().split('   ').map(word => word.split(' ').map(code => MORSE_CODE[code]).join('')).join(' ');
}

//////////////////////////////// 
String.prototype.toJadenCase = function () {
    let str = this.split(' ')
    console.log(str)
    let JadenStr = '';
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < str[i].length; j++) {
            if (j == 0) {
                JadenStr += str[i][j].toUpperCase();
            }
            else {
                JadenStr += str[i][j].toLowerCase();
            }
        }
        if (i != str.length - 1) {
            JadenStr += ' '
        }
    }
    return JadenStr
};

////////////////////////////////// 
function getMiddle(s) {
    let string = ''
    let Qut = s.length % 2
    if (Qut == 0) {
        const midE = s.length / 2
        string = s[midE - 1] + s[midE]
    }
    else {
        const midO = Math.floor(s.length / 2)
        string = s[midO]
    }
    return string
}
console.log(getMiddle('testing')) 


////////////////////////////////// 

function XO(str) {
    let string = str.toUpperCase(); 
    let countX = 0; 
    let countO = 0; 
    for (var i = 0; i < string.length; i++){
        if (string[i] == 'X'){
            countX++ 
        }
        else if (string[i] == 'O'){
            countO++
        }
    }
    if (countO == countX){
        return true
    }
    return false
}

console.log(XO('xxooX')) 


//////////////// 
var fatFingers = function (str) {
    
};

 //////////////// 

// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

//////////////////////// 

// Test.assertEquals(findDup([1, 2, 2, 3]), 2);
// Test.assertEquals(findDup([1, 3, 2, 5, 4, 5, 7, 6]), 5);
function findDup(arr) {
    let dict = {};
    for (var i = 0; i < arr.length; i++) {
        const number = arr[i]
        if (!dict[number]) {
            dict[number] = 1
        }
        else {
            dict[number] += 1;
        }
    }
    for (const number in dict) {
        const count = dict[number];
        if (count >= 2) {
            return +number
        }
    }
}
//////////////////////////// 
function mostFrequentItemCount(collection) {
  if (collection.length == 0){
    return 0; 
  }
  let counts = {}; 
  for (var i=0; i < collection.length; i++){
    const number = collection[i]
    if (!counts[number]){
      counts[number] = 1
    }
    else {
      counts[number] += 1 
    }
  }
  let frequentItem = counts[collection[0]]
  for (const number in counts){
    if (frequentItem <= counts[number]){
      frequentItem = counts[number]
    }
  }
  return frequentItem
}
console.log(mostFrequentItemCount([1,2,2,3,1,4])) 
///////////////////////////////// 

function elevatorDistance(array) {

    if (array.length < 2) {
    return 0; // No movement required if there is only one or zero floor in the array.
  }

  let totalDistance = 0;
  
  for (let i = 1; i < array.length; i++) {
    totalDistance += Math.abs(array[i] - array[i - 1]);
  }
  
  return totalDistance;
}
/////////////////////////////
var fatFingers = function (str) {
    if (str == null) return null;
    if (str == '') return '';
    // a place to store the fat fingered string
    let fatFingered = '';
    // a place to store wether or not the current letter should be capitalized
    // initialize to false
    let capsLock = false;
    // iterate over the string
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        // if the current letter is an a or A
        if (letter == 'a' || letter == 'A') {
            // set capsLock to true
            capsLock = !capsLock;
        } else {
            // else append the current letter
            // append capitalized based on our boolean
            if (capsLock) {
                fatFingered += letter.toUpperCase();
            } else {
                fatFingered += letter;
            }
        }
    }

    // return the fat fingered string
    return fatFingered;
}; 
///////////////////////////////////// 

function sumPairs(numbers, sum) {
    const pairs = []; 
    numbers.forEach(leftNumber, leftIndex => { 
        for (var rightIndex = leftIndex + 1; rightIndex < numbers.length; rightIndex++){
            const rightNumber = numbers[rightIndex] 
            if (leftNumber + rightNumber == sum) {
                pairs.push({
                    pair : [leftNumber, rightNumber], 
                    rightIndex
                })
            }  
        }
    });
    let earliestPair = pairs[0]; 
    for (var i=1; i < pairs.length; i++){
        if (earliestPair.rightIndex > pairs[i].rightIndex){
            earliestPair = pairs[i]
        }
    } 
    return earliestPair.pair
}
console.log(sumPairs([11, 3, 7, 5]), 10)