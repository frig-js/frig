import Form from "./components/form.js"
import Input from "./components/input.js"
import Submit from "./components/submit.js"
import NestedFieldset from "./components/value_linked_select.js"
import ValueLinkedSelect from "./components/value_linked_select.js"
import util from "./util.js"

module.exports = {
  Form,
  Input,
  NestedFieldset,
  Submit,
  util,
  ValueLinkedSelect,
  typeMapping: require("./type_mapping.js"),
  HigherOrderComponents: {
    Boolean: require("./higher_order_components/boolean.js"),
    Focusable: require("./higher_order_components/focusable.js"),
  },
  // Setter and getter for the Frig default theme
  defaultTheme(theme) {
    if (theme == null) return form.defaultProps.theme
    if (theme.component == null) throw "Invalid theme. Expected an object"
    Form.originalClass.defaultProps.theme = theme
    Input.originalClass.defaultProps.theme = theme
  },
}
