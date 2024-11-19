/**
 * Singleton pattern is a creational design pattern that lets you ensure that
 * a class has only one instance, while providing a global access point to this instance
 *
 * Firstly, we restrict the creating instance of Singleton class by making the constructor of the class private
 * Also, since we cannot have instance of the class, we will have our class properties to be static
 * and the method that is publicly available is also a static one i.e., we call this method directly on the class
 *
 * but this does not restrict having a non-static methods defined in the class, you have to use getInstance static method
 * to get the instance
 */

class Singleton {
  private static instance: Singleton;

  private _value: number;

  private constructor() {
    this._value = 0;
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  set value(value: number) {
    this._value = value;
  }

  get value(): number {
    return this._value;
  }
}

// Using the classes
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

instance1.value = 100;

console.log({ instance2Value: instance2.value });
