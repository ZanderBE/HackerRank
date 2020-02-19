// Day 15 Problem for the 30 day HackerRank Code Challenge
// Linked List
function Solution(){
	this.insert=function(head,data){
        // complete this method
        // Using the provided Node function, create a new node with the data value provided.
        let node = new Node(data);
          // If the head is null, set the current node as the head of linked list.  
          if (head === null) {
               head = node; 
               return head;
           // Otherwise loop through list to find the last node and insert the new node.    
           } else {
              // Start at the beginning of the list  
              let tail = head;
              // While tail.next exists keep looping
              while(tail.next) {
                  // Use .next pointer to go to next node
                  tail = tail.next;
              }
              // Once tail.next is null, replace it with new node
              tail.next = node;
              return head;
          }
    };
