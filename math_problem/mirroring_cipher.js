function decode(message) {
    const shifted_num = 25; // Shift by 25 positions
    let decoded_message = "";
    message.split("").forEach(char => {
        if (char === " ") {
            decoded_message += " "; // Preserve spaces
        } else {
            const shiftedCharCode = ((char.charCodeAt(0) - 97 + shifted_num) % 26) + 97;
            decoded_message += String.fromCharCode(shiftedCharCode);
        }
    });
    return decoded_message;
}

// Function to mirror a string based on a given parameter
function mirror(code, parameter) {
    let decoded_message = "";

    if (parameter === "abcdefgh") {
        // Define mappings for specific characters
        const dict1 = { "a": "h", "b": "g", "c": "f", "d": "e" };
        const dict2 = { "h": "a", "g": "b", "f": "c", "e": "d" };

        code.split("").forEach(char => {
            if (char in dict1) {
                decoded_message += dict1[char];
            } else if (char in dict2) {
                decoded_message += dict2[char];
            } else {
                decoded_message += char; // Non-mapped characters remain unchanged
            }
        });
    } else {
        // If no parameter is provided, use default decoding
        decoded_message = decode(code);
    }

    return decoded_message;
}

// Test cases
console.log(mirror("Welcome home", "abcdefgh")); // Output: "dvoxlnv slnv"
console.log(mirror("hello", "abcdefgh"));        // Output: "adllo"
console.log(mirror("abc", "")); 




// This is the solution of the problem  

function mirror(message, range = "abcdefghijklmnopqrstuvwxyz") {
    // Convert the range to lowercase for consistency
    range = range.toLowerCase();
    
    // Generate the mapping for the given range
    const mapping = {};
    for (const char of range) {
        const mirrorChar = range[range.length - 1 - range.indexOf(char)];
        mapping[char] = mirrorChar;
    }
    
    // Decrypt the message
    let decryptedMessage = "";
    for (const char of message) {
        if (/[a-z]/i.test(char)) { // Check if the character is alphabetic
            const lowerChar = char.toLowerCase(); // Normalize to lowercase for mapping
            decryptedMessage += mapping[lowerChar] || lowerChar; // Use the mapping or keep the original character
        } else {
            decryptedMessage += mapping[char] || char; // Handle non-alphabetic characters
        }
    }
    
    return decryptedMessage;
}