// Day 9 Problem for the 30 day HackerRank Code Challenge
// Recursion 3
// Complete the factorial function below.
function factorial(n) {
    // If the number equals 0, return the value of 1
    if(n === 0) {
        return 1;
    // Anything else, take the number and multiply it by the factorial of n minus one.
    } else {
        return n * factorial(n-1);
    }
}