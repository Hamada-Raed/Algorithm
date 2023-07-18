class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class singlyll {
    constructor() {
        this.head;
    }
    addFront(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    Back() { // print the last element in the linkedlist
        let current = this.head;
        while (current !== null) {
            if (current.next == null);
            console.log(current.data);
            return this
        }
        current = current.next;
    }
    deleteLastNode() {
        if (this.head == null){
            return null
        }
        let current = this.head; 
        let previous = null; 
        while(current !== null){
            if (current.next == null){
                previous = current;
            } 
            current = current.next;
        }
    }
    addBack(val){
        let newNode = new Node(val);
        let current = this.head; 
        while(current !== null){
            if (current.next == null){
                current = newNode
            }
            current = current.next;
        }
        return current
    }
}
const ll = new singlyll();
ll.addFront(100);
ll.addFront(100);
ll.addFront(200);
console.log(ll)
console.log(ll.deleteLastNode())
