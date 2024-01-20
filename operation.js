const subtract = require("./subtract");
const sum = require("./sum");

const operation = (a, b, c) => {
  const value = subtract(sum(a, b), c);

  return value;
};

module.exports = operation;
