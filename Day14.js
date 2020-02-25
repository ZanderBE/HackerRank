// Day 14 Problem for the 30 day HackerRank Code Challenge
// Scope
// C# solution as JS was not an option
public Difference(int[] a )
{
elements = a;
}
public void computeDifference(){
int max = elements.Max();
int min = elements.Min();
maximumDifference = max - min;
}
