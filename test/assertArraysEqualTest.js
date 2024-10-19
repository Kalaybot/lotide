const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [3, 2, 1]); // assertion should fail
assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'c']); // assertion should passed
assertArraysEqual([1, 2], [1, 2, 3]); // Assertion should fail