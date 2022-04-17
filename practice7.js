// JS Object manual comparison examples:

function isHeroEqual(object1, object2) {
    return object1.name === object2.name;
  }
  const hero1 = {
    name: 'Batman'
  };
  const hero2 = {
    name: 'Batman'
  };
  const hero3 = {
    name: 'Joker'
  };
  isHeroEqual(hero1, hero2); // => true
  isHeroEqual(hero1, hero3); // => false

  // Shallow equality:
  
  function shallowEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }