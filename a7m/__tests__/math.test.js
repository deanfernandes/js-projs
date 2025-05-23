const { add, sub } = require("../math");

test("add two numbers", () => {
  //arrange
  const a = 1;
  const b = 2;

  //act
  const sum = add(a, b);

  //assert
  expect(sum).toBe(3);
});

test("subtract two numbers", () => {
  //arrange
  const a = 2;
  const b = 1;

  //act
  const sum = sub(a, b);

  //assert
  expect(sum).toBe(1);
});
