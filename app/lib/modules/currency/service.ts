import currencies  from "./currencies";

export default class CurrencyService {

    public getCurrencyByCountry(country: string) {
        // get the default one if no country is selected
        if (!country) return currencies;
        // filter the list of currencies depending on the country
        return currencies.filter(item => item.countries.includes(country));
    }
}
