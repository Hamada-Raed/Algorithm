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
    counter() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++
            current = current.next
        }
        return count

    }
}
const ll = new LinkedList();
ll.addFront(100);
ll.addFront(100);
ll.addFront(100);
ll.addFront(100);
ll.addFront(100);
ll.addFront(100);
console.log(ll.counter())

