// Day 20 Problem for the 30 day HackerRank Code Challenge
// Sorting (Bubble)
function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here
    // A - Track # for elements swaped during traversal.
    let numSwaps = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n - 1; j++) {
            // B - Swap adjacent elements if they are in decreasing order.
             if(a[j] > a[j + 1]) {
                let tmp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = tmp;
                numSwaps = numSwaps + 1;
             }
        }
        // C - If no elements swapped during traversal, array is sorted.
        if (numSwaps === 0) {
            break
        }
    }
    console.log('Array is sorted in ' + numSwaps + ' swaps.');
    console.log('First Element: ' + a[0]);
    console.log('Last Element: ' + a[n - 1]);

}