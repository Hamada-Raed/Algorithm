// 1. (.): Matches Any Single Character Except Newline

// This function is to check if the string has a specific character  
// It is senstive for upper/lower latters 
const regex = /.ll/;
const str = "Hello World";

console.log(regex.test(str)); // Output: true

// 2. \d: Matches Any Digit (Equivalent to [0-9]) 

const regex1 = /\d/;
const str1 = "There are 2 apples.";

console.log(regex1.test(str1)); // Output: true


// 3. \w: Matches Any Word Character (Letters, Digits, or Underscore) 

const regex2 = /\w/;
const str2 = "_Hello";

console.log(regex2.test(str2)); // Output: true


// 4. \s: Matches Any Whitespace Character (Spaces, Tabs, etc.)
// This matches spaces, tabs (\t), and other whitespace characters.

const regex3 = /\s/;
const str3 = " Hello   World ";

console.log(regex3.test(str3)); // Output: true 


// 5. *: Matches Zero or More Occurrences of the Preceding Element

const regex4 = /ab*/;
const str4 = "aabbbcc";

console.log(regex4.test(str4)); // Output: true


// 6. +: Matches One or More Occurrences of the Preceding Element 

const regex6 = /ab+/;
const str6 = "aabbbcc";

console.log(regex6.test(str6)); // Output: true

// 7. ?: Matches Zero or One Occurrence of the Preceding Element
 
const regex7 = /colou?r/;
const str7 = "color";

console.log(regex7.test(str7)); // Output: true


//8. []: Defines a Character Set

const regex8 = /[auioe]/;
const str8 = "Hello World";

console.log(regex8.test(str8)); // Output: true


// 9. [^...]: Negates a Character Set
// The regex /[^aeiou]/ looks for any character that is not a vowel.

const regex9 = /[^aeiou]/;
const str9 = "Hello World";

console.log(regex9.test(str9)); // Output: true

// 10. |: Acts as an OR Operator 

const regex10 = /cat|dog/;
const str10 = "I have a cat and a dog.";

console.log(regex10.test(str10)); //



// 11. ^: Matches the Start of a Line

const regex11 = /^Start/;
const str11 = "Start the day.";

console.log(regex11.test(str11)); // Output: true

// 12. $: Matches the End of a Line 

const regex12 = /day.$/;
const str12 = "Start the day.";

console.log(regex12.test(str12)); // 