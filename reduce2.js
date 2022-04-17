// ARRAY AND OBJECT FLATTENING: 

// Source: https://flexiple.com/flatten-array-javascript/


let arr = [
    [1, 2],
    [3, 4],
    [5, 6],[7, 8, 9],
    [10, 11, 12, 13, 14, 15]
];

// Method #1 using spread opertaor & concat()

// console.log(...arr)

let flatArray = [].concat(...arr)

console.log(flatArray)

// Method #2: using reduce()

const flattenArrayReducer = (acc, curr) => {
    return acc.concat(curr)
}

const flattenArray2 = arr.reduce(flattenArrayReducer, [])

console.log('flattenArray2', flattenArray2)

// Method #3: Using flat()

/*
    the flat() method accepts an optional parameter, which specifies the depth to which the array should be flattened

    by default, the depth will be one

    a depth of 1 means that the first nested array will be flattened and concatenated to the rest of teh array elements - all remianing nested arrays will remain as they are

    You can keep going further in depth, depending on how many nested arrays you have, if you are looking to flatten out ALL nested arrays

    let's say you have an array with nexted arrays up to a depth of 4, specifying 4 as your parameter to flat() will bring out all nested arrays to one completely flat array

*/

let arr1 = [1, 2, [3, [4, [5, 6]], 7], 8];

console.log('Using flat method', arr1.flat(3))

// Method #4: Using concat() & apply()
// let flatArray3 = [].concat.apply([], arr1)
let flatArray3 = [].concat(...arr1)

console.log('flatArray3', flatArray3)

//Notes to keep in mind:

/*

Using concat(), spread operator, apply() and reduce are good for when you have an array with nested arrays that need to be flattened to a depth of 1

But flat() is good to use for arrays that have nested arrays beyond a depth of 1

*/

/*
    Given an array of arrays, flatten them into a single array
*/

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const arrFlatten = (arr) => {
    return [].concat(...arr)
}

console.log('Special array flatten', arrFlatten(arrays))

/*
    Given an array of potential voters, return an object representing the results of the vote

    Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.
*/

const voters2 = [
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
const voterResultsReducer = (acc, currValue) => {
    if(acc[currValue.voted] == null){
        acc[currValue.voted] = 1
    } else {
        acc[currValue.voted] += 1
    }

    return acc
}

const voterGroups = voters2.reduce(voterResultsReducer, {})

console.log('voterGroups', voterGroups)

// Example with bank transactions:

const transactions = [
    {
        name: 'APPL',
        type: 'stock',
        amount: 8.75
    },
    {
        name: 'GOOGL',
        type: 'stock',
        amount: 3.85
    },
    {
        name: 'acct',
        type: 'deposit',
        amount: 3.60
    },
    {
        name: 'acct',
        type: 'withdrawal',
        amount: 2.00
    },
    {
        name: 'acct',
        type: 'deposit',
        amount: 14.05
    },
    {
        name: 'acct',
        type: 'withdrawal',
        amount: 3.00
    },
    {
        name: 'acct',
        type: 'deposit',
        amount: 6.75
    },
    {
        name: 'NETFL',
        type: 'stock',
        amount: 4.95
    },
    {
        name: 'acct',
        type: 'withdrawal',
        amount: 2.05
    },
    {
        name: 'NETFL',
        type: 'stock',
        amount: 2.95
    },
]

const mappedTransactions = transactions.map(transaction => {
    if(transaction.type === 'withdrawal'){
        transaction.amount *= -1
    }

    return transaction
})

console.log('filteredTransactions', mappedTransactions)

const convertNum = (num) => {
    const negNum = num * -1
    return negNum
}

// Reducer
const transactionsReducer = (acc, curr) => {
    console.log('AMOUNT', curr.type === 'withdrawal')
    if(acc[curr.name] == null){
        acc[curr.name] = curr.amount
    } else {
        acc[curr.name] += curr.amount
    }

    return acc
}

const sortedTransactions = mappedTransactions.reduce(transactionsReducer, {})

console.log('sortedTransactions', sortedTransactions)