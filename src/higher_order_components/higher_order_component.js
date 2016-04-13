import delegatesPublicFunctions from './delegates_public_functions.js'

/*
 * Returns a higher order function version of the component.
 *
 * Adds a ComponentClass() function and an opts() function to the component
 * for accessing the child component and the options argument to the higher
 * order function.
 */
const HigherOrderComponent = () => hocClass => opts => ComponentClass =>
  @delegatesPublicFunctions(opts)
  class HigherOrderComponent extends hocClass {
    static originalClass = (
      ComponentClass.originalClass || ComponentClass
    )

    ComponentClass() {
      return ComponentClass
    }

    opts() {
      return opts
    }
  }

export default HigherOrderComponent
