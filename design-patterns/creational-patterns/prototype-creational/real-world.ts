interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  constructor(public properties: ShapeProperties) {}

  abstract clone(): Shape;
}

interface RectangelProperties {
  width: number;
  height: number;
}

class Rectangle extends Shape {
  constructor(
    properties: ShapeProperties,
    public width: number,
    public height: number
  ) {
    super(properties);
  }

  public clone(): Shape {
    const clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };

    return new Rectangle(clonedProperties, this.width, this.height);
  }
}

class Circle extends Shape {
  constructor(public properties: ShapeProperties, public radius: number) {
    super(properties);
  }

  public clone(): Shape {
    const clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Circle(clonedProperties, this.radius);
  }
}

// Using the classes

const redRectangle = new Rectangle(
  {
    color: "red",
    x: 20,
    y: 10,
  },
  100,
  200
);

const anotherRect = redRectangle.clone();

export {};
