### When to use Prototype Pattern

- prototype pattern is used when creating a new object instance is costlier than copying an existing one.


### Advantages of Prototype pattern

- Avoid Reference Errors
  
  In javascript or typescript, when we assign an object to a variable, we are actually storing the reference the new variable.
  with prototype pattern, we can always assure that we are cloning a object with new reference.

- Efficient object cloning
  
  if creating a new object is heavy operation, cloning an existing object can save these resources.  