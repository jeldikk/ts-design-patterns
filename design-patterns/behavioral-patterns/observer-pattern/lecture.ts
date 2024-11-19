/**
 * The Observer design pattern is behavioral design pattern that allows
 * you to define or create a subscription mechanism to send notification
 * to multiple objects about any new events that happen to the object they're
 * observing. The object that is being watched is often called the subject.
 * The object that are watching the state change are called as observers or listerners.
 */

/**
 * So basically, we will have a Subject Interface, that all concrete subject classes will implement
 * Later we have observer interface that concrete observers will implement
 *
 */

interface Observer {
  update(subject: Subject): void;
}

interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
  getState(): number;
  setState(value: number): void;
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state: number = 0;

  public addObserver(observer: Observer): void {
    const isExists = this.observers.find((obs) => obs === observer);
    if (!isExists) {
      this.observers.push(observer);
      console.log("observer added successfully");
    } else {
      console.log("Observer already exists in listeners");
    }
  }

  public removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
    console.log("Observer is removed");
  }

  public notifyObservers(): void {
    this.observers.forEach((obs) => {
      obs.update(this);
    });
  }

  public getState(): number {
    return this.state;
  }

  public setState(value: number) {
    this.state = value;
    console.log("Setting State ...");
    // to notify all observers when any state is changed
    this.notifyObservers();
  }
}

class ConcreteObserver implements Observer {
  constructor(private id: string) {}

  update(subject: Subject): void {
    console.log(
      `Observer ${this.id} updated, new state: ${subject.getState()}`
    );
  }
}

// Using the classes

const subject = new ConcreteSubject();

const observer1 = new ConcreteObserver("observer::1");
const observer2 = new ConcreteObserver("observer::2");
const observer3 = new ConcreteObserver("observer::3");

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer2);
subject.addObserver(observer3);

console.log({ state: subject.getState() });

subject.setState(10);
