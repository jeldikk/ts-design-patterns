/**
 * Inheritance is a fundamental concept in OOP that allows
 * one class to inherit properties (attributes) and methods (functions)
 * from another class. thereby promoting code reusability and modularity.
 */

// In Typescript, inheritance is implemented using `extend` keyword

class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  constructor(name: string = "Dog") {
    super(name);
  }
}

const dog = new Dog();
const charlie = new Dog("charlie");

dog.move(10);
charlie.move(20);
