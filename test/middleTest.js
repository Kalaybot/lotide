const middle = require("../middle");
const assert = require("chai").assert;


describe("#middle", () => {
  it("returns ['world'] for ['hello', 'world', 'lighthouse']" , () => {
    assert.deepEqual(middle(['hello', 'world', 'lighthouse']), ['world']);
  });
  it("returns [] for [abcde]", () => {
    assert.deepEqual(middle(['abcde']), []);
  });
  it("returns [12, 16] for [4, 8, 12, 16, 20, 24]", () => {
    assert.deepEqual(middle([4, 8, 12, 16, 20, 24]), [12, 16]);
  });
  it("make sure the original array was not altered by the middle function", () => {
    const words = ["hello", "world", "lighthouse"];
    const result = middle(words);
    assert.deepEqual(result, ["world"]);
    assert.strictEqual(words.length, 3);
  });
});