class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      // Common rendering logic for all shapes
      return '';
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="150" r="100" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect width="200" height="200" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Shape, Triangle, Circle, Square };