const testing = require('./testing');

test('characters count', () => {
  expect(testing('toto')).toBe(4);
});

test('check the string', () => {
  expect(() => testing('')).toThrow(Error);
})