const countries = require('./countries');

test('passing empty string returns an empty array', () => {
    expect(
        countries.find("")
    ).toEqual([]);

});

test('passing null returns an empty array', () => {
    expect(
        countries.find(null)
    ).toEqual([]);

});

test('no matching countries returns an empty array', () => {
    expect(countries.find("hghghhghg")).toEqual([]);
});


test('passing a valid string returns no more than 4 items', () => {
    const numOfCountries = countries.find("a").length;
    expect(
        numOfCountries <= 4
    ).toBe(true);
});
