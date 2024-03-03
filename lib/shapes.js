// shapes.js

class Shape {
  constructor() {
    this.shapeColor = '';
    this.textColor = '';
    this.text = '';
  }

  setShapeColor(color) {
    this.shapeColor = color;
  }

  setTextColor(color) {
    this.textColor = color;
  }

  setText(text) {
    this.text = text;
  }

  render() {
    
  }
}

class Triangle extends Shape {
  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
      <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle" font-size="20">${this.text}</text>
    </svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
      <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle" font-size="20">${this.text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="${this.shapeColor}" />
      <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle" font-size="20">${this.text}</text>
    </svg>`;
  }
}

module.exports = { Triangle, Circle, Square };
