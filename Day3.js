// Day 3 Problem for the 30 day HackerRank Code Challenge
// Intro to Conditional Statements
function main() {
    const N = parseInt(readLine(), 10);
    if (N % 2 === 1) {
        console.log('Weird');
    } else if(N % 2 === 0 && N >= 2 && N <= 5) {
        console.log('Not Weird');
    } else if(N % 2 === 0 && N >= 6 && N <= 20) {
        console.log('Weird');
    } else if(N % 2 === 0 && N >= 20) {
        console.log('Not Weird');
    }
}

