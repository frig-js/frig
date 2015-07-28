var React                         = require("react/addons")
var friggingBootstrap             = require("../frigging_bootstrap.js")
var FormMixin                     = require("../../mixins/form_mixin.js")
var {errorList}                   = friggingBootstrap
var {div, form, label, input}     = React.DOM

friggingBootstrap.Form = React.createClass({

  displayName: 'Frig.friggingBootstrap.Form',

  mixins: [FormMixin],

  getFriggingProps: function() {
    return {
      formHtml: {
        className: () => {@frigProps.layout ? "form-#{@frigProps.layout}" : ""}
      },
    }
  },

  render: function() {
    return form(@frigProps.formHtml, @friggingChildren())
  },

}