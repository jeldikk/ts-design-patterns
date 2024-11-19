/**
 * Factory Design pattern is a type of creational design pattern that provides an interface for creating
 * objects in a superclass, but allows subclasses to alter the type of objects that will be created.
 *
 * We have a class whose objects we want to instantiate,
 * This class has many subclasses, which will define concrete classes (like types)
 * Then we will have a class Factory, which will have a method to create the classes
 */

abstract class Car {
  constructor(public model: string, public productionYear: number) {}

  abstract displayCarInfo(): void;
}

class Sedan extends Car {
  //   constructor() {
  //     super("sedan", 2023);
  //   }

  displayCarInfo(): void {
    console.log(
      `This is a Sedan, Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}

class SUV extends Car {
  //   constructor() {
  //     super("suv", 2023);
  //   }

  displayCarInfo(): void {
    console.log(
      `This is a SUV, Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}

class Hatchback extends Car {
  //   constructor(pri) {
  //     super("sedan", 2023);
  //   }

  displayCarInfo(): void {
    console.log(
      `This is a Hatchback, Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}

class CarFactory {
  createCar(
    type: "sedan" | "suv" | "hatchback",
    model: string,
    productionYear: number
  ): Car {
    switch (type) {
      case "sedan":
        return new Sedan(model, productionYear);
      case "suv":
        return new SUV(model, productionYear);
      case "hatchback":
        return new Hatchback(model, productionYear);
    }
  }
}

// Using the classes
const carFactory = new CarFactory();

const sedan = carFactory.createCar("sedan", "Camry", 2023);
const suv = carFactory.createCar("suv", "SUV Model", 2023);
const hatchback = carFactory.createCar("hatchback", "Hatchback Model", 2034);

sedan.displayCarInfo();
suv.displayCarInfo();
hatchback.displayCarInfo();
