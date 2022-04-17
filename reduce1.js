const groceryReciept = [
    {
        item: 'Apple',
        price: 0.5,
        category: 'produce'
    },
    {
        item: 'Cereal',
        price: 6.00,
        category: 'breakfast'
    },
    {
        item: 'lettuce',
        price: 0.75,
        category: 'produce'
    },
    {
        item: 'Tofu',
        price: 2.5,
        category: 'protein'
    },
    {
        item: 'Rice',
        price: 8.5,
        category: 'grains'
    },
    {
        item: 'Milk',
        price: 4.5,
        category: 'dairy'
    },
    {
        item: 'Eggs',
        price: 3.5,
        category: 'protein'
    },

]

/*
    Design and alogorithm that outputs the total of a certain grocery category and the total amount spent in that category.
*/

// EXAMPLE #1:

// Function that maps over the array, giving us back a new array of the mapped items:
const categories = groceryReciept.map(item => {
    return item.category
})

console.log(categories)

// Reducer function:

/*
    -reduce() --> takes in a callback and the starting value
    -callback takes two arguments: accumulator (final value to be returned at the end of reduce) & current value
    -the reducer is called on each item of the array
    -each items is set to the currentValue as the reducer function moves thru the array
    -the current value is then added to the accumulator
    -as the second argument to the reducer function, you can pass 0, an empty array, or an empty object - this represents the initial value of the accumulator


*/

/*
    map --> accumulator
    item --> currentValue

    reduce() executes a user-supplied "reducer" call-back function
    meaning that that the reducer function is set by the user

    the final result of running the reducer on all array elements is a sincle value


*/

const reducer = (map, item) => {
    if(map[item] == null){
        map[item] = 1 // if null, we set to an initial value
    } else {
        map[item]++  // if exists, then we add to what exists for a new total
    }

    return map
}

// Using reduce to grab the total of each category, set the category as the key and the total as the value
const total = categories.reduce(reducer, {})

console.log(total)

// EXAMPLE #2: Grouping cateogries together and adding their totals
const secondReducer = (accumulator, currentValue, index) => {
    console.log(currentValue)
    if(accumulator[currentValue.category] == null){
        accumulator[currentValue.category] = currentValue.price
    } else {
        accumulator[currentValue.category] += currentValue.price
    }

    return accumulator
}

const secondTotal = groceryReciept.reduce(secondReducer, {})
console.log('second total', secondTotal)

// Another example:

// Let's grab the total of all the items in this array: 

const items = [
   { name: "Rice", price: 5},
   { name: "Book", price: 20},
   { name: "Chicken", price: 10},
   { name: "Monitor", price: 100},
]

// Reducer function to get the total price
const priceReducer = (acc, curr) => {
    return acc += curr.price
}

const totalPrice = items.reduce(priceReducer, 0)

console.log(totalPrice)

// EXAMPLE #4: Another example of summing totals:

// Starting data:
const lineItems = [
    { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
    { description: 'Cheese', quantity: 0.5, price: 5, total: 2.5 },
    { description: 'Butter', quantity: 2, price: 6, total: 12 }
  ];

// Our reducer function:
const lineItemReducer = (acc, curr) => {
    return acc += curr.total
}

const completeTotal = lineItems.reduce(lineItemReducer, 0)

console.log('complete total', completeTotal)

const itemDescriptions = lineItems.map(desc => {
    return desc
})

// Second reducer to print the items that were bought:
// const printItemReducer = (acc, curr) => {
//     return`Today, I went to the store and bought ${acc+curr.description}, `
// }

// const finalmessage = lineItems.reduce(printItemReducer, '')

// console.log('finalmessage', finalmessage)

// EXAMPLE #5: 

/*
    How do you return a map that contains how many characters have a given age? For example, the correct output on the above array would be { 29: 2, 59: 1 }.
*/

const characters = [
    { name: 'Jean-Luc Picard', age: 59 },
    { name: 'Will Riker', age: 29 },
    { name: 'Steph Troi', age: 29 },
    { name: 'John Smith', age: 36 },
    { name: 'Katie Johnson', age: 18 },
    { name: 'David Smith', age: 36 }
  ];

// REDUCER FUNCTION:
const charReducer = (acc, curr) => {
    if(acc[curr.age] == null){
        acc[curr.age] = 1
    } else {
        acc[curr.age] +=1
    }

    return acc
}

const totalForAge = characters.reduce(charReducer, {})

console.log('total for ages', totalForAge)

/*
    Turn an array of voter objects into a count of how many people voted
*/


const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

    // Reducer:
    const voterReducer = (acc, currValue) => {
        if(currValue.voted == true){
           acc += 1
        }
        return acc
    }

    const voterTotal = voters.reduce(voterReducer, 0)

    console.log('voter total', voterTotal)

/*
    Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
*/

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

// Reducer:
const shoppingSpreeReducer = (acc, currValue) => {
    return acc += currValue.price
}

const totalWishList = wishlist.reduce(shoppingSpreeReducer, 0)

console.log('total wish list', totalWishList)