const cloneCarSymbol = Symbol();

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const clone = new Car();
    Object.getOwnPropertySymbols(this).forEach(symbol => {
      if (symbol === cloneCarSymbol) return;
      clone[symbol] = this[symbol];
    });
    return clone;
  }
}

