abstract class Shape {
  abstract calculateArea(): number;
}

class MyRectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

class MySquare extends Shape {
  constructor(public side: number) {
    super();
  }

  calculateArea(): number {
    return this.side * this.side;
  }
}

class MyCircle extends Shape {
  constructor(public radius: number) {
    super();
  }
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

function calculateArea(shape: Shape) {
  return shape.calculateArea();
}

// Using the classes
const rectangle = new MyRectangle(3, 4);
const square = new MySquare(5);
const circle = new MyCircle(10);

console.log(calculateArea(rectangle));
console.log(calculateArea(square));
console.log(calculateArea(circle));

export {};
