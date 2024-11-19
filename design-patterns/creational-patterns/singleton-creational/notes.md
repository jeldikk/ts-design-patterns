### When to use Singleton Pattern

- If you wanted have global variable which should not be modified and accessible from anywhere we can use Singleton Pattern
- Global values also mean where you have objects that have multiple access points, but single control. like data cache or a system wide configuration setting. for example, Logger class

- if you want to manage a global single connection to a database system. this pattern will be very handy

- If you have a system that deeply nested components or object wants to access the state without any concern of mutation, we can use singleton pattern.

