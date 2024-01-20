const operation = require("../operation");

test("operation subtracts the sum of a and b from c", () => {
  const a = 5;
  const b = 3;
  const c = 2;

  const result = operation(a, b, c);

  expect(result).toBe(6);
});
