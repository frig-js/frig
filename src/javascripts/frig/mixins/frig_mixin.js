var FormBuilder                   = require("../form_builder.js")

module.exports = {
  frig: function (props, children) {
    var isCoffeescript = props.content == null
    return new FormBuilder(this, props, children, isCoffeescript).render()
  },

}
