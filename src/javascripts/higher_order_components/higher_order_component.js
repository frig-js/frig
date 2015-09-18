let delegatesPublicFunctions = require("./delegates_public_functions.js")

/*
 * Returns a higher order function version of the component.
 *
 * Adds a componentClass() function and an opts() function to the component
 * for accessing the child component and the options argument to the higher
 * order function.
 */
module.exports = function() {
  return function(hocClass) {
    return function(opts) {
      return function(componentClass) {
        let childName = componentClass.prototype.displayName
        /*
         * Creating a subclass of the higher order component with getters for
         * the component class and opts.
         */
        return (
          @delegatesPublicFunctions(componentClass)
          class extends hocClass {
            displayName = (
              `${hocClass.prototype.displayName}(${childName})`
            )
            componentClass() {
              return componentClass
            }
            opts() {
              return opts
            }
          }
        )
      }
    }
  }
}