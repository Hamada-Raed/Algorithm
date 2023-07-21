class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = null;
    }

}
class singlyLL {
    constructor() {
        this.head = null
    }
    addFirst(data){
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            return this
        }
        newNode.next = this.head 
        this.head = newNode;
        return this
    }
    addBack(data){
        let newNode = new Node(data);
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        console.log(current.next)


    }
    removeFront() {
        this.head = this.head.next
        return this
    }
    print() {
        let current = this.head;
        while (current != null) {
            console.log(current.data)
            current = current.next;
        }
    }

}
const ll = new singlyLL();
ll.addFirst(100);
ll.addFirst(200);
ll.addFirst(300);
ll.removeFront();
ll.print()

