const testing = require('./testing');
const reverseString = require('./reverseString');

test('characters count', () => {
  expect(testing('toto')).toBe(4);
});

test('check the string', () => {
  expect(() => testing('')).toThrow(Error);
})

test('characters count', () => {
  expect(reverseString('toto')).toBe('otot');
});