const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const findKey  = (object, callback) => {
  for (const key in object) { // Loops through object // Uses for in instead of Object.keys()
    if (callback(object[key])) {
      return key; // returns key when callback becomes truthy
    }
  }
  return undefined; // returns undefined if no key is found in callback
};
const result = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 4
);
assertEqual(result, undefined);