class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class singlyLL {
    constructor() {
        this.head = null //pointer
    }
    addFirst(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            return this
        }
        newNode.next = this.head
        this.head = newNode;
        return this
    }
    contain(val) {
        let current = this.head;
        while (current !== null) {
            if (current.data == val) {
                return true
            }
            current = current.next
        }
        return false
    }
}
const ll = new singlyLL();
ll.addFirst(100);
ll.addFirst(200);
ll.addFirst(300);
console.log(ll.contain(400))
