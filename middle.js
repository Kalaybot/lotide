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

module.exports = middle;