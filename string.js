// String reversal:

/*
    takes string input and returns output as reversed string
*/

// String reversal method:
const reverseString = (str) => {
    // Initialize empty arr to be used to store string characters
    const tempArr = []

    // Initialize empty string to be used for the final result
    let reversedString = ""

    // Loop #1 for pushing string characters into the array
    for(let i = 0; i < str.length; i++){
        tempArr.push(str[i])
    }

    // Loop #2 for popping characters off the array and adding them into empty string
    for(let i = 0; i < str.length; i++){
        reversedString += tempArr.pop()
    }

    // return reversed string 
    return reversedString
}

console.log(reverseString("Eleven"))

// Integer reversal method: