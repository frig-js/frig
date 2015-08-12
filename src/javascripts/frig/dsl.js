let React = require("react")
let frigForm = React.createFactory(require("./components/form.js"))

/*
 * The DSL wraps each of the components passed to the frig form's "form"
 * callback in a simplified interface.
 *
 * This is whats used behind the scenes of calls like `f.input("name", props)`
 */
let dsl = {
  errors(component, props = {}) {
    props = Object.assign({key: `${name}Input`}, props)
    return React.createElement(component, props)
  },

  input(component, name, props = {}) {
    props = Object.assign({key: `${name}Input`}, props, {name})
    return React.createElement(component, props)
  },

  submit(component, value, props = {}) {
    if (arguments.length === 1 && typeof value != "string")
    {
      props = value
      value = undefined
    }
    props = Object.assign({key: `${name}Input`, value}, props)
    return React.createElement(component, props)
  },
}

/*
 * Intercepts the "form" callback from a Frig form component and sends a
 * coffeescript-style DSL to the callback instead of the usual JSX components
 */
let dslCallback = function(formCallback, components) {
  let dslInstance = {}
  for (let k in dsl) {
    dslInstance[k] = dsl[k].bind(window, components[k])
  }
  return formCallback(dslInstance)
}

module.exports = {
  frig: function (props, form) {
    // inject the form content into the props
    let formProps = Object.assign({}, props, {
      form: dslCallback.bind(window, form),
    })
    // return the frig form component
    return frigForm(formProps)
  },

}
