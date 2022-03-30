const capitalize = require('./capitalize');

test('Capitalize', () => {
 expect(capitalize('toto')).toBe('Toto');
});