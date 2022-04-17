// Use of the prototype is JS 

// Allows JS objects to inherit properties and methods from one another:

// Example #1:

const vehicle = {
    drive: function(){
        console.log("the car is driving")
    }
}

const car = {
    make: "Honda"
}

Object.setPrototypeOf(car, vehicle)

car.drive()

// Example #2:

const dog = {
    breed: "German Sheperd"
}

const puppy = {
    message: function(){
        console.log("Ruff!")
    }
}

Object.setPrototypeOf(dog, puppy)

dog.message()