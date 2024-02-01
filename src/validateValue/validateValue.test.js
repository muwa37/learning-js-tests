const validateValue = require('./validateValue');

test('validation of value', () => {
	expect(validateValue(50)).toBe(true);
});

describe('validateValue', () => {
	test('correct', () => {
		expect(validateValue(50)).toBe(true);
	});
	test('less then correct', () => {
		expect(validateValue(-1)).toBe(false);
	});
	test('bigger then correct', () => {
		expect(validateValue(101)).toBe(false);
	});
	test('border smallest correct', () => {
		expect(validateValue(0)).toBe(true);
	});
	test('border biggest correct', () => {
		expect(validateValue(100)).toBe(true);
	});
});
