// Day 18 Problem for the 30 day HackerRank Code Challenge
// Queues and Stacks
function Solution(){
    //Write your code here
    // A: Write two instance variables for stack & queue
    let stack = [];
    let queue = [];
    
  
    // B: Method pushes character onto a stack
    this.pushCharacter = ((ch) => {
       return stack.push(ch);
    });
  
    // C: Method enques CH in the queue instance variable
    this.enqueueCharacter = ((ch) => {
        return queue.unshift(ch);
    });
  
    // D: Method pops and returns CH at the top of stack      instance variable
    this.popCharacter = (() => {
        return stack.shift();
    });
  
    // E: Method dequeue and return first CH in queue instance variable
    this.dequeueCharacter = (() => {
        return queue.shift();
    }); 
  }