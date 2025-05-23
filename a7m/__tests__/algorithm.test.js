const { binarySearch, bubbleSort } = require("../algorithm");

//binarySearch
test("finds element in sorted array", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
});

test("finds first element in sorted array", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
});

test("finds last element in sorted array", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
});

//bubbleSort
test("bubble sort unsorted array", () => {
  expect(bubbleSort([3, 1, 5, 2, 4])).toEqual([1, 2, 3, 4, 5]);
});
