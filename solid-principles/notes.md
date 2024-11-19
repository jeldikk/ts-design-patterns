## SOLID Design principles

- nothing to do with GOF design patterns
- explains why GOF design patterns and their importance in understanding SOLID principles
  
### What are SOLID Design Principles ?

- **S**: Single Responsibility Principle
  
  description of Single Responsibility Principle

    > A class should have only one reason to change - Robert C Martin

  this means that a class should only have one *responsiblity or job.*

- **O**: Open Closed Principle

    > The Open-Closed Principle states that "software entities( classes, modules, functions etc.,) should be open for extension, but closed for modifications

  description of Open Closed Principle


- **L**: Liskov Substitution Principle
  
  > If S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without altering any of the desirable properties of that program

- **I**: Interface Segregation Principle
  > No client should be forced to depend on interfaces they do not use.

  > In layman's terms, don't add additional functionality to an existing interface by adding new methods. Instead, create a new interface
  
- **D**: Dependency Inversion Principle
  > High level modules should not depend on low level modules, Both should depend on abstractions
  > abstractions should not depend on details, Details should depend on abstractions.