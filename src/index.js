import Form from './components/form.js'
import Input from './components/input.js'
import UnboundInput from './components/unbound_input.js'
import Submit from './components/submit.js'
import FormErrorList from './components/form_error_list.js'
import Fieldset from './components/fieldset.js'
import FieldsetText from './components/fieldset_text.js'
import ValueLinkedSelect from './components/value_linked_select.js'
import util from './util.js'
import typeMapping from './type_mapping.js'
import * as factories from './factories.js'

const HigherOrderComponents = {
  Boolean: require('./higher_order_components/boolean.js'),
  Focusable: require('./higher_order_components/focusable.js'),
}

// Setter and getter for the Frig default theme
function defaultTheme(theme) {
  if (theme === null) return Form.defaultProps.theme
  if (typeof theme !== 'object') {
    throw new Error('Invalid Frig theme. Expected an object')
  }
  Form.defaultProps.theme = theme
  UnboundInput.defaultProps.theme = theme
  return true
}

// This is so consumers can call `Frig.defaultTheme()`.
// All other exports are named and must be imported/destructured.
export default {
  defaultTheme,
  typeMapping,
}

export {
  Form,
  Input,
  UnboundInput,
  Submit,
  FormErrorList,
  Fieldset,
  FieldsetText,
  ValueLinkedSelect,
  HigherOrderComponents,
  util,
  factories,
}
