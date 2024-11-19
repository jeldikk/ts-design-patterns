/**
 * Defines the skeleton of an algorithm in a base class.
 * But lets subclasses override specific steps of the algorithms without changing its structure
 */
/**
 * Understanding: If suppose, we have a algorithm whose specific method needs customisation,
 * optional( by providing default implementation )
 * we implement customisation through concrete subclasses of this algorithm
 */

class CakeRecipe {
  protected preHeatOven(): void {
    console.log("Pre Heating oven to 175 degrees");
  }

  protected bake(): void {
    console.log("bake the cake");
  }
}
