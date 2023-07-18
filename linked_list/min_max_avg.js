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
    min() {
        let current = this.head;
        let min = current.data;
        while (current !== null) {
            if (current.data <= min) {
                min = current.data
            }
            current = current.next
        }
        return min
    }
    max() {
        let current = this.head;
        let max = current.data;
        while (current !== null) {
            if (current.data >= max) {
                max = current.data
            }
            current = current.next
        }
        return max
    }
    avarage() {
        if(this.head == null){
            return null
        }
        let count = 0;
        let sum = 0;
        let current = this.head;
        while (current !== null) {
            count++
            sum += current.data
            current = current.next
        }
        return sum / count
    }
}
const ll = new LinkedList();
ll.addFront(100);
ll.addFront(100);
ll.addFront(100);
ll.addFront(100);
ll.addFront(100);
ll.addFront(100);
console.log(ll.avarage())
