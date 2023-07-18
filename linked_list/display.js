class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
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
    display() {
        let current = this.head;
        let mystring = '';
        while (current !== null) {
            mystring += current.data
            current = current.next
        }
        return mystring
    }
}
const ll = new LinkedList();
ll.addFront(100);
ll.addFront(100);
ll.addFront(100);
ll.addFront(100);
ll.addFront(100);
ll.addFront(100);
console.log(ll.display())
console.log(typeof (ll.display()))