export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter for the 'size' attribute
  get size() {
    return this._size;
  }

  // Getter for the 'location' attribute
  get location() {
    return this._location;
  }

  // Casting behavior when the class is cast into a Number
  valueOf() {
    return this._size;
  }

  // Casting behavior when the class is cast into a String
  toString() {
    return this._location;
  }
}

