// Day 1 Problem for the 30 day HackerRank Code Challenge
function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    let secondInteger = parseInt(input_stdin_array[0]);
    let double = parseFloat(input_stdin_array[1]) + d;
    let stringVariables = input_stdin_array[2];
    // Read and save an integer, double, and String to your variables.
    // Print the sum of both integer variables on a new line.
    console.log(secondInteger + i);
    // Print the sum of the double variables on a new line.
    console.log(double.toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + stringVariables);
}