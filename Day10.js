// Day 10 Problem for the 30 day HackerRank Code Challenge
// Binary Numbers
function main() {
    const n = parseInt(readLine(), 10);
    // Turn 10 base integer into 2-base binary number
    let binaryNumber = (n.toString(2));
    // Take binary string and turn it into array seperated at each character
    let splitBinary = binaryNumber.split('');
    // Integer to hold the amount of consecutive ones found 
    let consecutiveOnes = 1;
    // Track if the last integer found is a one or a zero
    let foundOne = 0;
    // Keep track of the longest consecutive ones in a binary number
    let longestConsecutiveOnes = 0;
    // Find how many consecutive 1's exist within the converted 2-base binary number
    for(let i = 0; i < splitBinary.length; i++) {
        // check if the last integer was a one and if the current integer is a one
        if (foundOne === 1 && splitBinary[i] === '1') {
            // If so, add one to the consecutiveOnes integer
            consecutiveOnes += 1;
        // Since last integer was not a one, check to see if current one is
        } else if (splitBinary[i] === '1') {
            // If so, change foundOne integer to 1
            foundOne = 1;
        } else {
            // If so, change foundOne integer to 0
            foundOne = 0;
            // Check to see if current streak is longer than current longest
            if(consecutiveOnes >= longestConsecutiveOnes) {
                // If so make current streak, current longest
                longestConsecutiveOnes = consecutiveOnes;
            } 
            // Reset current streak back to 1
            consecutiveOnes = 1;   
        }
    }
    // Catch any 1s on the last index that get missed and add to longest variable if longer than current integer
    if(consecutiveOnes >= longestConsecutiveOnes) {
                longestConsecutiveOnes = consecutiveOnes;
            } 
    // Print a 10-base integer number of how many consecutive 1's that were found        
    console.log(longestConsecutiveOnes);
}