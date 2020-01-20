// Day 2 Problem for the 30 day HackerRank Code Challenge
// Operators
function solve(meal_cost, tip_percent, tax_percent) {
    let tip = tip_percent/100 * meal_cost;
    let tax = tax_percent/100 * meal_cost;
    let totalCost = meal_cost + tip + tax;
    console.log(Math.round(totalCost));
}