var React                         = require("react/addons")
var frigDefaults                  = require("./defaults.js")
var frigThemes                    = require("./themes.js")

module.exports = class FormBuilder {
  constructor(parent, opts = {}, cb = function() {}, isCoffeescript) {
    this.parent = parent
    this.opts = opts
    this.cb = cb
    this.isCoffeescript = isCoffeescript
    this.props = {}
    for (k in ["data", "ref", "typeMapping", "errors", "onChange"]) {
      this.props[k] = this.opts[k]
      delete this.opts[k]
    }
    # this.props.validationState = {}
    for (k, v of this._defaults()) this.props[k] = v
  }

  _defaults() {
    {
      type:          "form",
      ref:           "form",
      cb:            this.cb,
      parent:        this.parent,
      theme:         this._theme(),
      themeDefaults: this._theme().defaults,
      formDefaults:  this.opts
    }
  }

  # Create a theme-specific form React element
  render() {
    Form = this._theme().Form
    if (this.isCoffeescript) Form = React.createFactory(Form)
    return Form(this.props)
  }

  # returns the theme based on a cascading lookup
  _theme() {
    themeName = this.opts.theme ||= frigDefaults.theme
    if (themeName == undefined) throw "A theme name is required"
    theme = frigThemes[themeName]
    if (theme == undefined) throw "Frig.#{themeName} does not exist"
    return theme
  }

}