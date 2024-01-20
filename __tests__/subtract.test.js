const subtract = require("../subtract");

test("subtract function subtracts two numbers correctly", () => {
  const a = 5;
  const b = 3;

  const result = subtract(a, b);

  expect(result).toBe(2);
});
