const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual")

assertArraysEqual(middle(["hello", "world", "lighthouse"]), ["world"]); // return world
assertArraysEqual(middle(['abcde']), []); // reurn empty arrays
assertArraysEqual(middle([40, 45, 50, 52, 53]), [50]); // return 50
assertArraysEqual(middle([4, 8, 12, 16, 20, 24]), [12, 16]); // return 12, 16