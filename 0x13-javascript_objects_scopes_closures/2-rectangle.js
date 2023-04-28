#!/usr/bin/node

// The class keyword is used to define the Rectangle class
class Rectangle {
  // The constructor method is used to initialize the object's properties when a new object is created with the class.
  constructor(w, h) {
    // Check if w or h is not a positive integer or equal to 0, or not a number, return an empty object
    if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
      return {}; // An empty object signals to the calling code that the constructor failed to create a valid Rectangle object.
    }

    // If w and h are valid, initialize the object's width and height properties with the passed values
    this.width = w;
    this.height = h;
  }
}
