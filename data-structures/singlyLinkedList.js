
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * In computer science, a singly-linked list is a data structure that holds a sequence of linked nodes. Each node,
 * in turn, contains data and a pointer, which can point to another node.
 */
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Push a new node to the end of the list.
     * @param {*} data 
     */
    push(data = null) {
        // Create a new node
        const node = new Node(data);
        // Check if the list is empty
        if (!this.head) {
            // Set the tail and the head to point to the same new node
            this.head = node;
            this.tail = this.head;
        } else {
            // the old tail should point to the new node
            this.tail.next = node;
            // Set the new node as the tail
            this.tail = node;
        }
        // Increment instance length
        this.length++;
        // return this udpated instanceF
        return this;
    }

    /**
     * Removes a node from the end of the list (removes the tail)
     */
    pop() {
        // Make sure the list is not empty
        if (!this.head) {
            return undefined;
        }

        let current = this.head;
        let newTail = current;

        while (current.next) {
            // New tail is always lagging behind current
            newTail = current;
            // Move current forward
            current = current.next;
        }
        // Set the new tail
        this.tail = newTail;
        // Old tail will be deleted if nothing is pointing to it
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        // return the removed node
        return current;
    }

    /**
     * Removes a node from the begining of the list (removes the head)
     */
    shift() {
        // Make sure the list is not empty
        if (!this.head) {
            return undefined;
        }
        const currentHead = this.head;
        // move the head 1 forward
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentHead;
    }

    /**
     * Add a new node to the start of the list, making it the new head
     * @param {*} data 
     */
    unshift(data) {
        const newNode = new Node(data);
        if (!this.head) { // In case of empty list
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * Gets a node based on its index
     * @param {Number} index 
     */
    get(index) {
        // Make sure index is in range of list
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        let current = this.head;
        let counter = 0;
        while (counter < index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    /**
     * Sets the data of a node in a spcified index
     * @param {Number} index 
     * @param {*} data 
     * @return {Boolean} - success indicator
     */
    set(index, data) {
        const node = this.get(index);
        if (!node) {
            return false
        }
        node.data = data;
        return true;
    }
    
}

const list = new SinglyLinkedList();