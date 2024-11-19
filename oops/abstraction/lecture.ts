/**
 * Main Idea is to calculate area and perimeter of different shapes
 * shapes can be added more and more in future
 *
 * The User doesn't know about the implementation detail for calculating area and perimeter
 * we will provide simple functions like calculateTotalArea and calculatePerimeter
 */

interface IShape {
  area(): number;
  perimeter(): number;
}

class Rectangle implements IShape {
  length: number;
  breadth: number;
  constructor(length: number, breadth: number) {
    this.length = length;
    this.breadth = breadth;
  }

  area() {
    return this.length * this.breadth;
  }

  perimeter(): number {
    return 2 * (this.length + this.breadth);
  }
}

class Circle implements IShape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// Using the classes

function calculateArea(shape: IShape): number {
  return shape.area();
}

function calculatePerimeter(shape: IShape): number {
  return shape.perimeter();
}

const circle: Circle = new Circle(10);
const rect: Rectangle = new Rectangle(3, 4);
// const area = rect.calculateArea();
// const perimeter = rect.calculatePerimeter();
console.log({
  area: calculateArea(circle),
  perimeter: calculatePerimeter(circle),
});

console.log({
  area: calculateArea(rect),
  perimeter: calculatePerimeter(rect),
});

// console.log({ circleArea, circlePerimeter });

export {};
