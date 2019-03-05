
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
            return false;
        }
        node.data = data;
        return true;
    }

    /**
     * Adds a node to a specific index
     * @param {Number} index 
     * @param {*} value 
     * @return {Boolean} - success indicator
     */
    insert(index, value) {
        // verify correct index. index === list length is ok (will create a new node).
        if (index < 0 || index > this.length) {
            return false;
        }
        // If add to end of list, use existing method
        if (index === this.length) {
            this.push(value);
            return true;
        }
        // If add to beginning of list, use existing method
        if (index === 0) {
            this.unshift(value);
            return true;
        }
        // To insert in middle of list
        const newNode = new Node(value);
        const previousNode = this.get(index - 1); // node before the inserted new node
        const temp = previousNode.next; // save next node pointer
        previousNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    /**
     * Removes a node from a list at a spcecific index
     * @param {Number} index 
     * @returns {Node} = return removed node
     */
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined; // indicate node not found
        }
        // use existing methods for removing from beginning or end of list
        if (index === 0) { return this.shift(); }
        if (index === this.length - 1) { return this.pop(); }

        const prevNode = this.get(index - 1);
        const removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        this.length--;

        return removedNode
    }

}

const list = new SinglyLinkedList();