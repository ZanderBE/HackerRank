// Day 11 Problem for the 30 day HackerRank Code Challenge
// 2d Arrays
function main() {
    // Hold each hourglass sum
    let hourglasses = [];
    // Initially set to the lowest possible outcome (7 x -9)
    let largestHourglassSum = -63;
    // Loop through the rows of the matrix
    for(let i = 0; i <= 3; i++) {
        // Loop through the columns of the index
        for(let j = 0; j <=3; j++) {
            // Holds sum of hour glass integers
            let sum = 0;
            // Structure of hourglass in matrix
            sum +=  arr[i][j] // top-left
            sum +=  arr[i][j + 1] // top-middle
            sum +=  arr[i][j + 2] // top-right
            sum +=  arr[i + 1][j + 1] // middle
            sum +=  arr[i + 2][j] // bottom left
            sum +=  arr[i + 2][j + 1] // bottom middle
            sum +=  arr[i + 2][j + 2] // bottom right 
            // Push sum of hourglass to array
            hourglasses.push(sum);
        }
    }
    // Loop through hourglass array of sums
    for(let i = 0; i <= hourglasses.length; i++) {
        // If current hourglass number is bigger, store as largest sum
        if (hourglasses[i] >= largestHourglassSum) {
            // store largest number
            largestHourglassSum = hourglasses[i];
        }
    }
    // Print largest hourglass sum
    console.log(largestHourglassSum);
}