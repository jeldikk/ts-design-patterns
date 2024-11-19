/**
 * The Decorator design pattern is a structural design pattern that allows you to dynamically add or override behaviour
 * in an existing object without changing its implementation.
 *
 * You see, here this is a structural design pattern, but it can alter the behavior of the object.
 *
 * The pattern is useful when you want to modify the behavior of an object without affecting other objects of the same class.
 *
 * In Decorator pattern, we have few important constructs ...
 *
 * 1. Component: base interface or abstract class, which defines the method that will be implemented
 * 2. ConcreteComponent: Class that implements the Component Interface
 * 3. Decorator: an interface or abstract class which implements the Component interface
 * 4. ConcreteDecorator: class which implements the Decorator interface. it extends the Decorator to decorate the component.
 */

var variable = 2;
interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  cost(): number {
    return 10;
  }

  description(): string {
    return "Hot Water + Coffee";
  }
}

abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}
  abstract cost(): number;
  abstract description(): string;
}

class MilkCoffee extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  cost(): number {
    return 20;
  }

  description(): string {
    return this.coffee.description() + " Milk";
  }
}

// Using the classes

const coffee = new SimpleCoffee();
console.log(coffee.description());

const milkCoffee = new MilkCoffee(coffee);

console.log(milkCoffee.description());

const anotherMilkCoffee = new MilkCoffee(milkCoffee);

console.log(anotherMilkCoffee.description());
