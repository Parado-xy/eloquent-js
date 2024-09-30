/**
 * Class representing a basic stack.
 */
class BasicStack {
    /**
     * Create a stack.
     */
    constructor() {
        /**
         * The container to hold the stack elements.
         * @type {Array}
         */
        this.container = [];
    }

    /**
     * Push an element onto the stack.
     * @param {*} element - The element to be added to the stack.
     */
    push(element) {
        this.container.push(element);
    }

    /**
     * Peek at the top element of the stack without removing it.
     * @returns {*} The top element of the stack.
     */
    peek() {
        return this.container[this.container.length - 1] || null;
    }

    /**
     * Pop and remove the top element from the stack.
     * @returns {*} The top element, or null if the stack is empty.
     */
    pop() {
        if (this.container.length === 0) {
            return null;
        }
        return this.container.pop();
    }

    /**
     * Check if the stack is empty.
     * @returns {boolean} True if the stack is empty, otherwise false.
     */
    isEmpty() {
        return this.container.length === 0;
    }

    /**
     * Get the size of the stack.
     * @returns {number} The number of elements in the stack.
     */
    get size() {
        return this.container.length;
    }
}


let exampleStack = new BasicStack()
exampleStack.push(4)
exampleStack.push(5)
exampleStack.push(6)
exampleStack.push(7)

console.log(exampleStack.pop())
console.log(exampleStack.isEmpty())
console.log(exampleStack.size)

module.exports = {BasicStack}