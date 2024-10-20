const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`❌ Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};
const flatten = function(array) {
  let result = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      for (let innerElement of element) {
        result.push(innerElement);
      }
    } else {
      result.push(element);
    }
  }
  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;