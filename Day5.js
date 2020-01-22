// Day 5 Problem for the 30 day HackerRank Code Challenge
// Loops
function main() {
    const n = parseInt(readLine(), 10);
    for(let i=1; i <= 10; i++) {
        let result = n * i;
        console.log(n + " x " + i + " = " + result);
    }
}