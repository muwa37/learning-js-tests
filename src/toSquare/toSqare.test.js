const toSquare = require('./toSquare');

describe('toSquare', () => {
	test('correct', () => {
		expect(toSquare(5)).toBe(25);
	});
	test('math pow works once', () => {
		const spyMathPow = jest.spyOn(Math, 'pow');
		toSquare(2);
		expect(spyMathPow).toBeCalledTimes(1);
	});
	test('no call math pow', () => {
		const spyMathPow = jest.spyOn(Math, 'pow');
		toSquare(1);
		expect(spyMathPow).toBeCalledTimes(0);
	});

	afterEach(() => jest.clearAllMocks());
});
