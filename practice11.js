/*
    Object flattening: 
*/

// Declare an object:
const person = {
    name: 'Valerie',
    age: 31,
    address: {
        aptNum: '709',
        street: 'Echo Point',
        city: 'Scarborough'
    }
}

// Initialize a new object:
const newObj = {} // this will represent your flattened object

// Create a recursive function that goes through each object property
const getFlattenObj = (obj) => {
    /* 
        Turn the object into an array of keys so that you have a way to access the value by its keys in an iterative.
    */
   Object.keys(obj).forEach(key => {
       // Check for nested objects:
       if (typeof obj[key] == "object"){
        getFlattenObj(obj[key])
       } else {
           // if not a nested object, then set the property of the new object to the original object's property:
           newObj[key] = obj[key]
       }
   })
}

// console.log(typeof person)
getFlattenObj(person)
console.log(newObj)

// Using reduce():
const user = {
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX'
        }
    }
}

const newObj2 = {}

const flattenObj2 = (obj) => {
    Object.keys(obj).forEach(item => {
      if(typeof obj[item] == 'object'){
          flattenObj2(obj[item])
      }  else {
          newObj2[item] = obj[item]
      }
    })
}

// const newFlatObject = flattenObj2(user)

console.log('This is the second flattening', flattenObj2(user))
console.log(newObj2)

let instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

const newObj3 = {}
const flattenObj3 = (obj) => {
    Object.keys(obj).forEach(item => {
        if(typeof obj[item] == 'object' && !Array.isArray(obj[item])){
            flattenObj3(obj[item])
        } else {
            newObj3[item] = obj[item]
        }
    })
}

console.log('flattenObj3', flattenObj3(instructorData))
console.log(newObj3)

const myObject = {
    baz: {
        message: 'hello world',
        test: 'test',
        foo: {
            bar: 5
        }
    }
}

/*
    Since this is a recursive function, you should set your initial state outside of the function
    otherwise, with the recursion, the state will be set and reset on each recursive call
*/
const newObj4 = {}
const flattenObj4 = (obj) => {
    Object.keys(obj).forEach(item => {
       if(typeof obj[item] == 'object'){
           flattenObj4(obj[item])
       } else {
           newObj4[item] = obj[item]
       }
    })
}
console.log('flattenObj4', flattenObj4(myObject))
console.log(newObj4)

const myObject2 = {
    name: 'Valerie',
    age: 31,
    FaveColor: 'purple',
    address: {
        aptNum: '709',
        street: 'Echo Point',
        location: {
            city: 'Scarborough',
            province: 'ON',
            country: 'Canada'
        }
    }
}

let newObj5 = {}
const flattenObject5 = (obj) => {
    Object.keys(obj).forEach(item => {
        if(typeof obj[item] == 'object'){
            flattenObject5(obj[item])
        } else {
            newObj5[item] = obj[item]
        }
    })
}

flattenObject5(myObject2)
console.log('This is the fifth flatten', newObj5)

const newObject = {
    firstName: "Elon",
    lastName: "Musk",
    age: 25,
    address: {
        id: 1,
        country: "UK"
    }
};

let newObj6 = {}

const flattenObj6 = (obj) => {
    Object.keys(obj).forEach(item => {
        if(typeof obj[item] == 'object'){
            flattenObj6(obj[item])
        } else {
            newObj6[item] = obj[item]
        }
    })
}

flattenObj6(newObject)
console.log('newObj6', newObj6)




