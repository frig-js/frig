var React                         = require("react/addons")
var FormBuilder                   = require("../form_builder.coffee")

module.exports = frigMixin = {
  frig: function (props, children) {
    var isCoffeescript = props.content == undefined
    new FormBuilder(this, props, children, isCoffeescript).render()
  },

}