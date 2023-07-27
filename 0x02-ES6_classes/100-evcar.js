import Car from "./10-car.js";

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    const clone = new Car();
    Object.getOwnPropertySymbols(this).forEach(symbol => {
      if (symbol === this.constructor[Symbol.species]) {
        clone[symbol] = Car;
      } else {
        clone[symbol] = this[symbol];
      }
    });
    return clone;
  }
}

