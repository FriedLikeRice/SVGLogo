class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      // rendering logic for all shapes
      return '';
    }
  }
  
  class Triangle extends Shape {
    render() {
      // Render Triangle SVG code with this.color
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      // Implement Circle rendering logic
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      // Implement Square rendering logic
      return `<rect width="200" height="200" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Shape, Triangle, Circle, Square };
  