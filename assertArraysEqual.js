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
    console.log(`Array ${arr1} is equal to ${arr2}`);
  } else {
    console.log(`Array ${arr1} is not equal to ${arr2} `);
  }
};

assertArraysEqual([1, 2, 3], [3, 2, 1]);
