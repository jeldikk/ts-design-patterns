/**
 * Adatper pattern is a software design pattern that allows the interface of an existing class to be used from another interface.
 * It's often used to make existing classes work with others without modifying their source code. Especially useful when the classes
 * that need to communicate with each other do not have compatiable interfaces.
 *
 * For Example, if we are writing an adapter to communicate with two incompatible classes like Square, Rectangle ...
 * we first implement an abstraction that can communicate methods provided in Square class to Rectangle class
 * So here Square becomes the adaptee and Rectangle class becomed adapted class ...
 *
 * There are two different ways of implementing adapter pattern ...
 *
 * Object based adapter:
 * Class based adapter:
 */

class Rectangle {
  constructor(private width: number, private height: number) {}

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public area(): number {
    return this.width * this.height;
  }
}

class Square {
  constructor(private side: number) {}

  public getSide(): number {
    return this.side;
  }

  public area(): number {
    return this.side * this.side;
  }
}

// Now we need to implement, so that Square class adapts to Rectangle class
class SquareToRectangleAdapter {
  constructor(private square: Square) {}

  public getWidth(): number {
    return this.square.getSide();
  }

  public getHeight(): number {
    return this.square.getSide();
  }

  public area(): number {
    return this.square.area();
  }
}

// Using the classes

const square = new Square(10);

const adapter = new SquareToRectangleAdapter(square);

console.log(adapter.getWidth());
console.log(adapter.getHeight());
console.log(adapter.area());
