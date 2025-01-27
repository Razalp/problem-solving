/**
 * Function to reverse a given string.
 * @param {string} str - The input string to be reversed.
 * @returns {string} - The reversed string.
 */
function reverseString(str) {
    // Initialize an empty string to store the reversed result
    let reversed = '';

    // Loop through the input string from the last character to the first
    for (let i = str.length - 1; i >= 0; i--) {
        // Append each character to the 'reversed' variable
        reversed += str[i];
    }

    // Return the final reversed string
    return reversed;
}

// Test the function with a sample string
console.log(reverseString("CodeLooper")); // Output: "repoLedoC"
