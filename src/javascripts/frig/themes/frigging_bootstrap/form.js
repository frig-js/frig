var React                         = require("react/addons")
var friggingBootstrap             = require("../frigging_bootstrap.js")
var FormMixin                     = require("../../mixins/form_mixin.js")
var {form}                        = React.DOM

friggingBootstrap.Form = React.createClass({

  displayName: "Frig.friggingBootstrap.Form",

  mixins: [FormMixin],

  getFriggingProps: function() {
    return {
      formHtml: {
        className: () => {
          return this.frigProps.layout ? `form-${this.frigProps.layout}` : ""
        },
      },
    }
  },

  render: function() {
    return form(this.frigProps.formHtml, this.friggingChildren())
  },

})
