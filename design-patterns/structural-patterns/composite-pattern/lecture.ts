/**
 * Composite design pattern is a structural design pattern, that lets you compose objects into tree-like structures and then
 * work with these structures as if they were individual objects
 *
 * Three important entities of composite design pattern are :
 * 1. Component : Main element of the whole pattern or root interface that defines method that can be used in composite, which defines the data part of the tree
 * 2. Leaf: Any concrete implementations of interface of Component.
 * 3. Composite : Interface
 */
interface Employee {
  getName(): string;
  getSalary(): number;
  getRole(): string;
}

class Developer implements Employee {
  constructor(private name: string, private salary: number) {}

  getName(): string {
    return this.name;
  }

  getSalary(): number {
    return this.salary;
  }

  getRole(): string {
    return "DEVELOPER";
  }
}

class Designer implements Employee {
  constructor(private name: string, private salary: number) {}

  getName(): string {
    return this.name;
  }

  getSalary(): number {
    return this.salary;
  }

  getRole(): string {
    return "DESIGNER";
  }
}

interface CompositeEmployee extends Employee {
  addEmployee(employee: Employee): void;
  removeEmployee(employee: Employee): void;
  getEmployees(): Employee[];
}

class Manager implements CompositeEmployee {
  private employees: Employee[] = [];
  constructor(private name: string, private salary: number) {}

  getName(): string { 
    return this.name;
  }

  getSalary(): number {
    return this.salary;
  }

  getRole(): string {
    return "MANAGER";
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  removeEmployee(employee: Employee): void {
    this.employees = this.employees.filter((emp) => false);
  }

  getEmployees(): Employee[] {
    return this.employees;
  }
}

// Using the classes

const manager = new Manager("Kishore", 30);
const abhijit = new Developer("Abhijit", 20);
const subrot = new Designer("Subrot", 20);
const kamal = new Developer("Kamal", 22);

manager.addEmployee(abhijit);
manager.addEmployee(subrot);
manager.addEmployee(kamal);

console.log("Manager Name: ", manager.getName());
console.log("Manager Employees :", manager.getEmployees());
