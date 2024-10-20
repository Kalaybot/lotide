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
const letterPositions = function(sentence) {
  const results = {};
  let index = 0;
  
  for (const word of sentence) {
    if (word !== ' ') {
      if (!results[word]) {
        results[word] = [];
      }
      results[word].push(index);
    }
    index++;
  }
  return results;
};
const letter = letterPositions('lighthouse in the house');
console.log(letter);

assertArraysEqual(letterPositions("hello jello").l, [2, 3, 8, 9]);

module.exports = letterPositions;