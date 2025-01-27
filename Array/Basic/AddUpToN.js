// Function to calculate sum using the formula
function AddUpToN(n) {
    return n * (n + 1) / 2;
}

// Example: Call the function with n = 5
console.log(AddUpToN(5)); // Output: 15


// using for loop

// Function to calculate sum using a loop
function AddUpToN(n) {
    let total = 0; // Initialize total to 0
    for (let i = 1; i <= n; i++) { // Loop from 1 to n
        total += i; // Add the current number to total
    }
    return total; // Return the final sum
}

// Example: Call the function with n = 5
console.log(AddUpToN(5)); // Output: 15
