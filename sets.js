/*
    Set: Like an array, except there are no duplicate items and are in no particular order

    Use case: Simply check for the presence of an item

*/

function mySet() {
    // initialize a collection that will hold the set
    var collection = []

    // this method checks for the presence of an element and returns true if element is present and false if element is not present
    this.has = function(element){
        return (collection.indexOf(element) !== -1)
    }

    // returns all values in the set
    this.values = function(){
        return collection
    }
    // add element to set, but first check if element is already present in set
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element)
            return true;
        } else {
            return false
        }
    }

    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true
        }
        return false
    }

    // returns the size of the collection
    this.size = function(){
        return collection.length;
    };

    // returns the union of two sets
    this.unionSet = function(otherSet){
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e)
        })
        secondSet.forEach(function(e){
            unionSet.add(e)
        })
        return unionSet;
    }

    // Intersection = a set that represents all items that are in both sets/common between two sets

    // returns the intersection of two sets as a new set
    this.intersection = function(otherSet){
        var intersectionSet = new mySet()
        var firstSet = this.values()
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e)
            }
        })

        return intersectionSet
    }

    // returns the difference of two sets as a new set 
    this.difference = function(otherSet){
        var differenceSet = new mySet()
        var firstSet = this.values()
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e)
            }
        })
        return differenceSet;
    }

    // tests if the set is a subset of a different set
    // this.subset = function(otherSet){
    //     var firstSet = new mySet();
    //     return firstSet.every(function(value){
    //         return otherSet.has(value)
    //     })
    // }
}

var setA = new mySet()
var setB = new mySet()

setA.add("a")
setB.add("b")
setA.add("a")
setB.add("b")
setA.add("a")
setB.add("b")

console.log(setA.add("c"))

