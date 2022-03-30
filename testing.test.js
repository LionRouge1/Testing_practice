const testing = require('./testing');
const reverseString = require('./reverseString');
const calculator = require('./calculator');

test('characters count', () => {
  expect(testing('toto')).toBe(4);
});

test('check the string', () => {
  expect(() => testing('')).toThrow(Error);
})

test('ReverseString', () => {
  expect(reverseString('toto')).toBe('otot');
});

describe('A simple calculator', () => {
  describe.each([
    [1, 2, 3],
    [2, 2, 4],
    [5, 3, 8]
  ])('.add(%i, %i)', (a, b, expected) => {
    test(`Sum ${a} and ${b}`, () => {
      const calc = new calculator(a, b);
      expect(calc.add()).toBe(expected);
    });
  });

  describe.each([
    [4, 2, 2],
    [10, 6, 4],
    [15, 3, 12]
  ])('.subtract(%i, %i)', (a, b, expected) => {
    test(`Subtraction : ${a} and ${b}`, () => {
      const calc = new calculator(a, b);
      expect(calc.subtract()).toBe(expected);
    });
  });

  describe.each([
    [16, 2, 8],
    [15, 3, 5],
    [25, 6, 4.1666]
  ])('.divide(%i, %i)', (a, b, expected) => {
    test(`divide ${a} by ${b}`, () => {
      const calc = new calculator(a, b);
      expect(calc.divide()).toBeCloseTo(expected);
    });
  });

  describe.each([
    [1, 2, 2],
    [2, 2, 4],
    [5, 3, 15]
  ])('.multiply(%i, %i)', (a, b, expected) => {
    test(`Sum ${a} and ${b}`, () => {
      const calc = new calculator(a, b);
      expect(calc.mutiply()).toBe(expected);
    });
  })
});
