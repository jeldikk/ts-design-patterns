/**
 * Builder pattern is a creational design pattern that lets you construct complex objects step by step.
 *
 * approach:
 * ---------
 * Firstly we will have class implemented with different parts needed
 *
 * Secondly, we define the ConcreteBuilder; which builds different parts of above instance
 *
 * this ConcreteBuilder implements an interface, thus forming first relation to any external directors
 *
 * A Director class will orchestracte different methods to build individual parts forming whole class
 *
 * Product1 ->builds-> Concrete Builder ---------> Builder(Interface) ---uses--> Director(builder: Builder)
 */

// First create a interface
// interface Builder {
//   setPartA(): void;
//   setPartB(): void;
//   setPartC(): void;
// }

// class ConcreteBuilder implements Builder {
//   private product: Product;
// }

/**
 * I wanted to build a House( with Walls, Furniture, Rooms, Doors, Swimming Pool, Garden)
 *
 * I also have multiple variants of House,
 * Standard - 2 BigRooms, 2 BigDoors, Walls, Small Furniture, Small Garden, Small Swimming Pool
 * Premium - 3 BigRooms, 1 small Room, 3 Big Doors, Walls, Large Furniture, Large Garden, small Swimming Pool
 * Golden - 4 Big Rooms, 3 Small Rooms, 4 Big Doors, Walls, Large Furniture, Large Garden, Large Swimming Pool
 *
 * Develop a Builder Pattern,
 * - with Director to create House Variants, Builder, Concrete Builders
 * - Application which can use the classes
 */

interface Room {}

class SmallRoom implements Room {}

class BigRoom implements Room {}

interface Door {}

class BigDoor implements Door {}

class Walls {}

interface Furniture {}

class SmallFurniture implements Furniture {}

class BigFurniture implements Furniture {}

interface Garden {}

class SmallGarden implements Garden {}

class LargeGarden implements Garden {}

interface SwimmingPool {}

class SmallSwimmingPool implements SwimmingPool {}

class LargeSwimmingPool implements SwimmingPool {}

interface House {
  setRooms(rooms: Room[]): void;
  setDoors(doors: Door[]): void;
  setWalls(walls: Walls): void;
  setFurniture(furniture: Furniture): void;
  setGarden(garden: Garden): void;
  setSwimmingPool(swimmingPool: SwimmingPool): void;

  //   getDetails(): void;
}

class StandardHouse implements House {
  setDoors(doors: Door[]): void {
    console.log({ doors });
  }
  setGarden(garden: Garden): void {
    console.log({ garden });
  }
  setFurniture(furniture: Furniture): void {
    console.log({ furniture });
  }
  setRooms(rooms: Room[]): void {
    console.log({ rooms });
  }
  setSwimmingPool(swimmingPool: SwimmingPool): void {
    console.log({ swimmingPool });
  }
  setWalls(walls: Walls): void {
    console.log({ walls });
  }

  //   getDetails(): void {
  //       console.log(`
  //         Rooms: ${this.}
  //         `)
  //   }
}

class PremiumHouse implements House {
  setDoors(doors: Door[]): void {}
  setGarden(garden: Garden): void {}
  setFurniture(furniture: Furniture): void {}
  setRooms(rooms: Room[]): void {}
  setSwimmingPool(swimmingPool: SwimmingPool): void {}
  setWalls(walls: Walls): void {}
}

class GoldenHouse implements House {
  setDoors(doors: Door[]): void {}
  setGarden(garden: Garden): void {}
  setFurniture(furniture: Furniture): void {}
  setRooms(rooms: Room[]): void {}
  setSwimmingPool(swimmingPool: SwimmingPool): void {}
  setWalls(walls: Walls): void {}
}

interface HouseBuilder {
  createHouse(): House;
}

class StandardHouseBuilder implements HouseBuilder {
  //  Standard - 2 BigRooms, 2 BigDoors, Walls, Small Furniture, Small Garden, Small Swimming Pool
  private standardHouse!: StandardHouse;
  reset() {
    this.standardHouse = new StandardHouse();
  }
  createHouse(): House {
    const house = new StandardHouse();
    house.setRooms([new BigRoom(), new BigRoom()]);
    house.setDoors([new BigRoom(), new BigRoom()]);
    house.setWalls(new Walls());
    house.setFurniture(new SmallFurniture());
    house.setGarden(new SmallGarden());
    house.setSwimmingPool(new SmallSwimmingPool());
    return house;
  }
}

class PremiumHouseBuilder implements HouseBuilder {
  //  Premium - 3 BigRooms, 1 small Room, 3 Big Doors, Walls, Large Furniture, Large Garden, small Swimming Pool
  createHouse(): House {
    const house = new PremiumHouse();
    house.setRooms([
      new BigRoom(),
      new BigRoom(),
      new BigRoom(),
      new SmallRoom(),
    ]);
    house.setDoors([new BigDoor(), new BigDoor(), new BigDoor()]);
    house.setWalls(new Walls());
    house.setFurniture(new BigFurniture());
    house.setGarden(new LargeGarden());
    house.setSwimmingPool(new SmallSwimmingPool());
    return house;
  }
}

class GoldenHouseBuilder implements HouseBuilder {
  //Golden - 4 Big Rooms, 3 Small Rooms, 4 Big Doors, Walls, Large Furniture, Large Garden, Large Swimming Pool
  createHouse(): House {
    const house = new GoldenHouse();
    house.setRooms([
      new BigRoom(),
      new BigRoom(),
      new BigRoom(),
      new BigRoom(),
      new SmallRoom(),
      new SmallRoom(),
      new SmallRoom(),
    ]);
    house.setDoors([
      new BigDoor(),
      new BigDoor(),
      new BigDoor(),
      new BigDoor(),
    ]);
    house.setWalls(new Walls());
    house.setFurniture(new BigFurniture());
    house.setGarden(new LargeGarden());
    house.setSwimmingPool(new LargeSwimmingPool());
    return house;
  }
}

class Director {
  constructor(private builder: HouseBuilder) {}

  setBuilder(builder: HouseBuilder) {
    this.builder = builder;
  }

  createHouse(): House {
    return this.builder.createHouse();
  }
}

class Application {
  static run() {
    console.log("running the application");
    const standardBuilder = new StandardHouseBuilder();
    const director = new Director(standardBuilder);

    const StandardHouse = director.createHouse();
    console.log({ StandardHouse });
  }
}

Application.run();

export {};
