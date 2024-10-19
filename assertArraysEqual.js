const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`❌ Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

assertArraysEqual([1, 2, 3], [3, 2, 1]); // assertion should fail
assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'c']); // assertion should passed
assertArraysEqual([1, 2], [1, 2, 3]); // Assertion should fail

module.exports = assertArraysEqual;
