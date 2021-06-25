const getRoute = require('./route');

describe('getRoute', () => {
    test('1. returns comma separated countries in order of visiting', () => {
        const tickets = [['JPN', 'PHL'], ['BRA', 'UAE'], ['USA', 'BRA'], ['UAE', 'JPN']];
        const result = getRoute(tickets);
        expect(result).toBe('USA,BRA,UAE,JPN,PHL');
    });

    test('2. returns comma separated countries in order of visiting', () => {
        const tickets = [['a', 'b'], ['b', 'c'], ['c', 'd'], ['d', 'e']];
        const result = getRoute(tickets);
        expect(result).toBe('a,b,c,d,e');
    });
});