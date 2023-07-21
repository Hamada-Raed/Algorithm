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
        while(current) {
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
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Search for a node with the given value
    find(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    // Convert the linked list to an array for easier visualization
    toArray() {
        const result = [];
        let currentNode = this.head;
        while (currentNode) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return result;
    }
}

const linkedList = new singlyll();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);
console.log(linkedList.toArray()); // Output: [0, 1, 2]
linkedList.remove(1);
console.log(linkedList.toArray()); // Output: [0, 2]
console.log(linkedList.find(2)); // Output: Node { value: 2, next: null }

