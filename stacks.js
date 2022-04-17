/*
    Implementing stacks in JS using some common methods
*/

// Functions: push, pop, peek, length

// We can implement and example stack using an array:
var letters = []

// your input, to test if it is a palindrome
var word = "Valerie" 

var reversedWord = ""

// Step #1: Push each letter into our stack
for(var i = 0; i < word.length; i++){
    letters.push(word[i])
}

// Step #2: Pop each letter off the stack
for(var i = 0; i < word.length; i++){
    reversedWord += letters.pop()
} 

console.log(reversedWord)

if(reversedWord === word){
    console.log(word + " is a palindrome.")
} else {
    console.log(word + " is not a palindrome")
}

// A more complicated example:

var Stack1 = function(){
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = function(value){
       this.storage[this.count] = value; 
       this.count++;
    }

    // Removes and returns the value at the end of the stack
    this.pop = function(){
        if(this.count === 0){
            return undefined
        }
        this.count--

        var result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    this.size = function(){
        return this.count
    }

    this.peek = function(){
        return this.storage[this.count - 1]
    }
}

var myStack = new Stack1();

myStack.push(1)
myStack.push(2)
myStack.push(3)

console.log('peeking my stack', myStack.peek())

console.log(myStack.pop())
console.log('peeking again...', myStack.peek())


// Implementing a Stack Class:
class Stack {

    // Initializing an array to implement the stack:
    constructor() {
        this.items = []
    }

    // Functions to be implemented when dealing with a stack:

    // push(item)
    push(element){
        this.items.push(element)
    }

    // pop()
    pop(){
        this.items.pop()
    }

    // peek()
    peek(){
        this.items[this.items.length-1]
    }

    // isEmpty()
    // Checks if stack is empty and returns TRUE
    isEmpty(){
        if(this.items.length === 0){
            return true
        } else {
            return false
        }
    }

    // printStack()
    printStack(){
        var str = ""
        for(var i = 0; i < this.items.length; i++){
            str += this.items[i] + " "; 
        }

        return str
    }
}

var stack1 = new Stack()

console.log(stack1)

stack1.push("Apples")
stack1.push("Bananas")
stack1.push("Lettuce")

stack1.isEmpty()

console.log(stack1.printStack())