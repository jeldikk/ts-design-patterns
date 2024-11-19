/**
 * Facade design pattern is a structural design pattern that provides a simplified interface
 * to a complex system. It involves creating a wrapper interface over a complex system to hide its complexities.
 */

class CoffeeMakerFacade {
  constructor(
    private grinder: Grinder,
    private boiler: Boiler,
    private brewer: Brewer
  ) {}

  public makeCoffee(): void {
    this.grinder.grindBeans();
    console.log("Grinding Done");
    this.boiler.boilWater();
    console.log("Boiling Done");
    this.brewer.brewCofee();
    console.log("Brewing Done");
    console.log("Coffee is Ready");
  }
}

class Grinder {
  public grindBeans(): void {
    console.log("Boiling Water ...");
  }
}

class Boiler {
  public boilWater(): void {
    console.log("Boiling Water ...");
  }
}

class Brewer {
  public brewCofee(): void {
    console.log("Brewing Coffee ...");
  }
}

// Using the classes

const grinder = new Grinder();
const boiler = new Boiler();
const brewer = new Brewer();

const coffeeMaker = new CoffeeMakerFacade(grinder, boiler, brewer);

coffeeMaker.makeCoffee();
