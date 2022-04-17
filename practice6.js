// Maintaining basic state in JS, using IIFEs:

const setPerson = (function(){
    // Initialize your state:
    const person = {
        firstName: '',
        lastName: '',
        age: null,
        faveFood: ''
    }

    function setProperties(firstName, lastName, age, faveFood){
        person.firstName = firstName
        person.lastName = lastName
        person.age = age
        person.faveFood = faveFood

        console.log(person)
    }

    function updateAge(){
        person.age += 1
        console.log(person)
    }

    function updateName(newName){
        person.firstName = newName

        console.log(person)
    }

    return [setProperties, updateAge, updateName]
})()

// setPerson("Valerie", "Osei", 25, "Pizza")

const [setProperties, updateAge, updateName] = setPerson 

setProperties("Valerie", "Osei", 25, "Pizza")
updateAge()
updateAge()

updateName("Katie")