import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"));
console.log(p);
console.log(p.displayFullPrice());

const convertedPrice = Pricing.convertPrice(100, 1.15); // Example conversion rate: 1 EUR = 1.15 USD
console.log(convertedPrice); // Output should be 115, which is the converted price

