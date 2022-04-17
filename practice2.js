// What is a closure in JS ?

// Basic example of a closure

let x = 100;

// function logx() {
//     console.log(x);
// }

// logx()

function makeAdder(x) {
    return function(y) {
        return x + y
    }
}

const add5 = makeAdder(5)

// console.log(add5(10))

function makeMultiply(num1){
    return function(num2){
        return num1 * num2
    }
}

const multiplyBy2 = makeMultiply(10)

console.log(multiplyBy2(2))

// Making use of a IIFE that returns a function:

/*
const sendMessage = (function() {
    let message = 'Hello ';
    return function(name){
        console.log(message + 'my name is '+ name);
    }
})()

const multiplyByFive = (function(){
    let num = 5;

    return function(num2){
        console.log(num * num2)
    }
})()

const increment = (function(){
    let counter = 0;

    return function(){
        counter += 2;
        return counter;
    }
})()

console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())


sendMessage("Valerie")
sendMessage("Stacey")
sendMessage("David")

multiplyByFive(2)
multiplyByFive(3)
multiplyByFive(4)

*/

// More closures:

// Wht will be the output of below?

var num = 4;

function outer(){
    var num = 2
    function inner(){
        num++;
        var num = 3;
        console.log(num)
    }
    inner()
}

outer()
