// Day 16 Problem for the 30 day HackerRank Code Challenge
// Exceptions - String to Integer
function main() {
    let S = readLine();
    S = parseInt(S);
    try {
        // this is a hacky way of doing this in javascript since it doesn't handle exceptions well. (not a hard typed lang)
        new Array(S);
        console.log(S);
    } catch(err) {
        console.log('Bad String');
    }
}
