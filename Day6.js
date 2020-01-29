// Day 6 Problem for the 30 day HackerRank Code Challenge
// Let's Review
function processData(input) {
    //Enter your code here
    // Take input string and turn it into an array of strings
    let inputArray = input.split("\n");
    // Take the test case number string and turn it into a integer
    let testCases = parseInt(inputArray[0])
    // Loop through rest of array based on the amount of test cases given
    for(let i=1; i <= testCases; i++) {
        // Remove the string at index 1 from the array and store it in the variable
        let wordArray = inputArray.splice(1,1);
        // Holds even index characters
        let even = "";
        // Holds odd index characters
        let odd = "";
        // Loop through string taken from the array at index 1
        for(let j=0; j < wordArray[0].length; j++) {   
            // If the index value is even, add the character to even variable          
             if(j % 2 == 0) {
                 even += wordArray[0].charAt(j);
            // Anything else, store the character to the odd variable
             } else {
                 odd += wordArray[0].charAt(j);
             }     
         }
         // Print the results of even and odd variables sepereated by space
         console.log(even + " " + odd);
    }
 }