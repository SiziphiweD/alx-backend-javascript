export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter for the 'name' attribute
  get name() {
    return this._name;
  }

  // Getter for the 'code' attribute
  get code() {
    return this._code;
  }

  // Override the toString() method to provide a custom string description
  toString() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}

