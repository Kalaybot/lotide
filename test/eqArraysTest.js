const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // should return false === false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // should return false === false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // should return true === true