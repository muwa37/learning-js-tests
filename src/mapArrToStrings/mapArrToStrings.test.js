const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
	test('correct', () => {
		expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
	});
	test('correct numbers extract', () => {
		expect(mapArrToStrings([1, 2, 3, null, undefined, 'str'])).toEqual([
			'1',
			'2',
			'3',
		]);
	});
	test('correct with empty array', () => {
		expect(mapArrToStrings([])).toEqual([]);
	});
	test('rejection', () => {
		expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3]);
	});
	test('correct', () => {
		expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
	});
});
