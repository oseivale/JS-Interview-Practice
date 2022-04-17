/* 
    1. Implement ES6 features into the object
    2. Return the value after 2s
*/

/* 

Original object:

var john = {
    name: 'John Doe',
    balance: 1500,
    deduct: function(amount){
        this.balance = this.balance - amount;
        return this.name + ' has a blance of ' + this.balance;
    }
}

console.log(john.deduct(200))

*/

// Solution, inlcuding ES6 features
const john = {
    name: 'John Doe',
    balance: 1500,
    deduct(amount) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                this.balance = this.balance - amount;
                res(`${this.name} has a balance of ${this.balance}`);

            }, 2000)
        })
        
    }
}

/* -------------------------------

Ths is one way you could do it, but we want to include the setTimeout inside the function itself and then call the function as a whole

const myTimeout = setTimeout(() => {
    console.log(john.deduct(200))
}, 2000)

console.log(john.deduct(200))

--------------------------------

*/

// Update your console log to reflect the fact that your promise will need to be chained with a then() since it's resolved:

john.deduct(200)
    .then(res => {
        console.log(res)
    })


/* 
    1. Change from var to const - we don't want another dev to re-assign the value of john to another object
    We always want jhn to be referenced to one object

    2. Replace current function with an ES6 arrow function, however arrow function cannot make use of the "this" keywod and scoping is handled slightly differently
        - scoping is reserved to the arrow function scope
        - the "this" keyword refers to the object's scope

    3. Returning the vlaue after 2 seconds can be done using a promise, instead of explicitly returning a value - you can resolve the promise which will give you the value - this is a useful patter when dealing with setTimeout,as it mimics async behaviour
*/