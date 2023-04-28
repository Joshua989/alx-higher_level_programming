#!/usr/bin/node
class Rectangle {
  // Constructor method takes width and height as arguments
  constructor(w, h) {
    // Check if width or height is negative, zero, or not an integer
    if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
      // Return an empty object if any of the conditions are true
      return {};
    }
    // Set the width and height properties of the object being constructed
    this.width = w;
    this.height = h;
  }

  // Method to print the rectangle as a string of X's
  print() {
    // Create an empty string to hold the row of X's
    let row = '';
    // Loop through the width of the rectangle
    for (let i = 0; i < this.width; i++) {
      // Add an X to the row string
      row += 'X';
    }
    // Loop through the height of the rectangle
    for (let i = 0; i < this.height; i++) {
      // Print the row string for each row
      console.log(row);
    }
  }
}
