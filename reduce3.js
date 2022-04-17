// 10 more example of reduce()
const people = [
    { id: "1", name: "Leigh", age: 35 },
    { id: "2", name: "Jenny", age: 30 },
    { id: "3", name: "Heather", age: 28 }
];

let result;

// use reduce to count # of ppl in this array
result = people.reduce((acc, currValue) => {
    return acc + 1
}, 0)

console.log(result)

// use reduce to find the sum of all ages
result = people.reduce((acc, currValue) => {
    return acc += currValue.age
}, 0)

console.log(result)

// use reduce like map() to return an array of names
result = people.reduce((acc, currValue) => {
    return acc.concat(currValue.name)
}, [])

// An alternative to the above solution 
result = people.reduce((acc, currValue) => {
    return [...acc, currValue.name]
}, [])

console.log(result)

// convert to a sort of dictionary that allows you to look up a record by id

result = people.reduce((acc, currValue) => {
    return { ...acc, [currValue.id]: currValue}
}, {})

console.log(result)

// Find max age
result = people.reduce((acc, currValue) => {
    if(acc === null || currValue.age > acc){
        return currValue.age
    }

    return acc

}, null)

console.log(result)

// Find min age
result = people.reduce((acc, currValue) => {
    if(acc === null || currValue.age < acc){
        return currValue.age
    }

    return acc

}, null)

console.log(result)

// Test to see the relationship between the accumulator and the current value:

/*
We simply return the most-updated current value and that gets set as the accumulator at the final iteration 

*/


result = people.reduce((acc, currValue) => {
    return currValue
}, null)

console.log(result)