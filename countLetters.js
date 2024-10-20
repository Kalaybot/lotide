const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(str) {
  let results = {};

  for (const count of str) {
    if (count !== ' ') {
      if (results[count]) {
        results[count] += 1;
      } else {
        results[count] = 1;
      }
    }
  }
  return results;
};
const word = countLetters("lighthouse is in the house");
console.log(word);

assertEqual(word['l'], 1);
assertEqual(word[' '], undefined);
assertEqual(word['h'], 4);

module.exports = countLetters;