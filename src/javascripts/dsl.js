let React = require("react")
let frigForm = React.createFactory(require("./components/form.js"))
let dslCallback

/*
 * The DSL wraps each of the components passed to the frig form's "form"
 * callback in a simplified interface.
 *
 * This is whats used behind the scenes of calls like `f.input("name", props)`
 */
let dsl = {
  errors(component, props = {}) {
    props = Object.assign({key: `frig-errors`}, props)
    return React.createElement(component, props)
  },

  input(component, name, props = {}) {
    props = Object.assign({key: `frig-${name}`}, props, {name})
    return React.createElement(component, props)
  },

  nestedFields(component, name, props = {}, form) {
    if (typeof(props) == "function") {
      form = props
      props = {}
    }
    props = Object.assign({key: `frig-${name}`}, props, {
      name,
      form: dslCallback.bind(window, form),
    })
    return React.createElement(component, props)
  },

  submit(component, title, props = {}) {
    if (arguments.length === 1 && typeof title != "string")
    {
      props = title
      title = undefined
    }
    props = Object.assign({key: `frig-submit`, title}, props)
    return React.createElement(component, props)
  },
}

/*
 * Intercepts the "form" callback from a Frig form component and sends a
 * coffeescript-style DSL to the callback instead of the usual JSX components
 */
dslCallback = function(formCallback, components, ...args) {
  let dslInstance = {}
  for (let k in dsl) {
    dslInstance[k] = dsl[k].bind(window, components[k])
  }
  return formCallback(dslInstance, ...args)
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
