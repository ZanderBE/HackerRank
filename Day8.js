// Day 8 Problem for the 30 day HackerRank Code Challenge
// Dictionaries and Maps
function processData(input) {
    //Enter your code here
    // Change string input into an array
    newInputArray = input.split("\n");
    // Store the integer for amount keys to a variable
    let amountOfKeys = parseInt(newInputArray[0]);
    // Empty array to store the key values before they get mapped
    let keyValues = [];
    // Store the query statements in this empty array
    let queries = [];
    // Loop through the keys and store them on the keyValues array
    for(let i = 1; i <= amountOfKeys; i++) {
        keyValues.push(newInputArray[i].split(" "));
    }
    // Loop through the queries and store them in the query array
    for(let i = amountOfKeys + 1; i < newInputArray.length; i++) {
        queries.push(newInputArray[i]);
    }
    // Map the array values for keyValues and store them in phoneBook
    let phoneBook = new Map(keyValues);
    // Loop through the queries and check them against the phoneBook map
    for(let i = 0; i < queries.length; i++) {
        // Store the query results in the phoneBookCheck variable
        let phoneBookCheck = phoneBook.get(queries[i]);
        // If phoneBookCheck returns undefined, alert user this query was not found.
        if (phoneBookCheck === undefined) {
            console.log("Not found");
        // Anything else, return the query with the results from the phoneBook results    
        } else {
            console.log(queries[i] + '=' + phoneBook.get(queries[i]))
        }
    }
} 