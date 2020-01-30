// Day 7 Problem for the 30 day HackerRank Code Challenge
// Arrays
function main() {
    const n = parseInt(readLine(), 10);
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    // Create empty variable to hold reversed numbers
    let reverseArray = "";
    // Loop through the array backwards and add numbers to variable
    for (var i = arr.length - 1; i >= 0; i--) {
        reverseArray += arr[i] + " ";
    }
    // Print the completed reversed number string
    console.log(reverseArray);
}