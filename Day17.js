// Day 17 Problem for the 30 day HackerRank Code Challenge
// Exceptions - String to Integer
// Write your code here
class Calculator {
    // Power Method 
    power(n, p) {
         if (n < 0 || p < 0) {
          throw 'n and p should be non-negative';
         } else {
          let answer = n**p;
          return answer;
         }
     } 
 }
 