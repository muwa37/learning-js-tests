const validateValue = require('./validateValue');

test('validation of value', () => {
    expect(validateValue(50)).toBe(true);
});