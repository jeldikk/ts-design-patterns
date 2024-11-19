/**
 * The prototype pattern allows cloning object, even more complex ones, without coupling to their specific classes.
 *
 * Prototype objects can produce full copies since objects of the same class can access each others private fields.
 *
 *
 * Firstly, we have an interface defining what all are present in instance of the class.
 * and we will have a interface called Prototype with clone and getUserDetails
 */

interface IUserDetails {
  name: string;
  age: number;
  email: string;
}

interface IUserDetailsPrototype {
  clone(): IUserDetailsPrototype;
  getUserDetails(): IUserDetails;
}

class ConcreteUserDetails implements IUserDetailsPrototype {
  constructor(private user: IUserDetails) {}

  public clone(): IUserDetailsPrototype {
    const clone = Object.create(this);
    clone.user = { ...this.user };
    return clone;
  }

  public getUserDetails(): IUserDetails {
    return this.user;
  }
}

// using the details
const user1 = new ConcreteUserDetails({
  name: "John",
  age: 32,
  email: "john@example.com",
});

const user2 = user1.clone();

if (user1 === user2) {
  console.log("Both instances are same");
} else {
  console.log("Cloned objects are seperate");
}
