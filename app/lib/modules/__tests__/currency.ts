import CurrencyService from '../currency/service';

describe('Currency test', () => {
    it('should return all currencies', function () {
        const currencies: CurrencyService = new CurrencyService();
        const response = currencies.getCurrencyByCountry("");

        expect(response.length).toBeGreaterThan(1);
    });

    it('should return only the currencies of USA', function () {
        const currencies: CurrencyService = new CurrencyService();
        const response = currencies.getCurrencyByCountry("US");

        expect(response.length).toEqual(1);
    });
})
