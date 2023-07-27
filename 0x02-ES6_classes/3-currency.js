export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter and setter for the 'code' attribute
  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code === "string") {
      this._code = code;
    } else {
      throw new TypeError("Code must be a string");
    }
  }

  // Getter and setter for the 'name' attribute
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === "string") {
      this._name = name;
    } else {
      throw new TypeError("Name must be a string");
    }
  }

  // Method to display the currency in the format: name (code)
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

