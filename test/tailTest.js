const tail = require("../tail");
const { assert } = require("chai");


describe("Tail Function Tests", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const hello = ['Hello', 'Lighthouse', 'Labs'];
    assert.deepEqual(tail(hello), ['Lighthouse', 'Labs']);
  });
  it("returns [] for an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});