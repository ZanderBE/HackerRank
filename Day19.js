// Day 19 Problem for the 30 day HackerRank Code Challenge
// Interfaces
// C# solution as JS was not an option
public class Calculator : AdvancedArithmetic {
    public int divisorSum(int n) {
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) sum += i;
        }
        return sum;
    }
}