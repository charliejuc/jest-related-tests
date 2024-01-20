const sum = require("../sum");

test("sum adds two numbers correctly", () => {
  const a = 5;
  const b = 3;

  const result = sum(a, b);

  expect(result).toBe(8);
});
