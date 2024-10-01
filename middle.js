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
const middle = function(arr) {
  let result = [];
  if (arr.length < 3) {
    return result;
  }

  if (arr.length % 2 === 1) {
    const midIndex = Math.floor(arr.length / 2);
    result.push(arr[midIndex]);
  } else {
    const midIndex1 = arr.length / 2 - 1;
    const midIndex2 = arr.length / 2;
    result.push(arr[midIndex1], arr[midIndex2]);
  }
  return result;
};
console.log(middle(["hello", "world", "lighthouse"]));
console.log(middle(['abcde']));
console.log(middle([40, 45, 50, 52, 53]));
console.log(middle([4, 8, 12, 16, 20, 24]));