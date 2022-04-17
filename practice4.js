// const person = {
//     name: "Val",
//     sayName: function(){
//         console.log(this.name)
//     }
// }

/*
    Calling sayName off the person object means that the "this" 
    keyword takes on the identity/scope of the person object, 
    or whatever entity is calling the function
*/

// person.sayName()

/*

    Setting the sayName function to a variable and calling that variable, 
    means that now you are calling the function in the global scope and this 
    is no longer defined, because there is no definition of it in the global scope

*/

// const localSayName = person.sayName

// localSayName()

// WORK-AROUND

/*

    Using the bind() method allows you to explicitly bind the scope of 
    your object to the function call so that when you assign the function 
    to a variable/ create a function expression, the scope has been bound 
    to the object that calls the method

*/

// const boundSayName = person.sayName.bind(person)
// boundSayName()

// Arrow funciton change the behaviour of the this keyword: 

const person = {
    name: "Val",
    sayName: () => {
        console.log(this.name)
    }
}

person.sayName()