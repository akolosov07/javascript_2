const {mortgage, overpayment} = require('./mortgage.js');

describe ('базовые тесты', () => {
    test('mortgage(1e7, 10, 15) будет 107460.51', () => {
        expect((mortgage(1e7, 10, 15)).toFixed(2)).toBe(107460.51);
    });

    test('overpayment(1e7, 10, 15) будет 9342892.12', () => {
        expect((overpayment(1e7, 10, 15)).toFixed(2)).toBe(9342892.12);
    });
})