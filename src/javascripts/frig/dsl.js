let React = require("react")
let frigForm = React.createFactory(require("./components/form.js"))

module.exports = {
  frig: function (props, form) {
    // inject the form content into the props
    let formProps = Object.assign({}, props, {
      form: form,
    })
    // return the frig form component
    return frigForm(formProps)
  },

}
