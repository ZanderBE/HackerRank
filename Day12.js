// Day 12 Problem for the 30 day HackerRank Code Challenge
// Inheritance
class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, idNumber, scores) {
        super(firstName, lastName, idNumber);
        this.scores = scores;
    }
    
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate() {
        let A = ''; 
        let sum = 0;
        for(let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i]
        }
        let average = (sum/this.scores.length);
        if(average >= 90 && average <= 100) {
            A = 'O';
        } else if (average < 90 && average >= 80) {
            A = 'E';
        } else if (average < 80 && average >= 70){
            A = 'A';
        } else if (average < 70 && average >= 55) {
            A ='P';
        } else if (average < 55 && average >= 40) {
            A = 'D';
        } else {
            A = 'T';
        }
        return A;
    }
}