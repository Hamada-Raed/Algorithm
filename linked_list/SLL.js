class Node { // to create a node
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLL { // the create a pointer, to go the next node
    constructor() {
        this.head = null;
    }
    // to print the list
    print() {
        let current = this.head; //current = the first node, because the linkedlist did not know the index for the first index
        while (current != null) { 
            console.log(current.data);
            current = current.next; // to move to next node
        }
    }
    // to add the front
    addFront(data) {
        let newNode = new Node(data); // to create a instance from node class. 
        if (this.head == null) { // if the node empty 
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    addEnd(data){
        let newNode = new Node(data);
        let current = this.head;
        while(current != null){
            current = current.next
        }
        current = newNode
    }
    dell(data){
        let previous = this.head; 
        let current = previous.next;
        while (current.data != data){
            previous = current 
            current = current.next
        }
        previous.next = current.next;
        current = null;
    }

    sum(data){
        let sum = 0; 
        let current = this.head; 
        while (current != null){
            sum += current
            current = current.next
        }
        return sum
    }
}


var myList = new SinglyLL();
myList.addFront(10);
myList.addFront(20);
myList.addFront(30);
myList.addEnd(100);
myList.addEnd(5);
myList.print();
console.log(myList.sum());