import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = 0;
    this._currency = new Currency('', '');

    this.amount = amount;
    this.currency = currency;
  }

  // Getter and setter for the 'amount' attribute
  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // Getter and setter for the 'currency' attribute
  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be an instance of Currency');
    }
  }

  // Method to display the full price in the format: amount currency_name (currency_code)
  displayFullPrice() {
    const { _name, _code } = this._currency;
    return `${this._amount} ${_name} (${_code})`;
  }

  // Static method to convert price based on conversionRate
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}

