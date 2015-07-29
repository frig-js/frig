var React                         = require("react/addons")
var frigDefaults                  = require("./defaults.js")
var frigThemes                    = require("./themes.js")
var {entries}                     = require("./helpers.js")

module.exports = class FormBuilder {
  constructor(parent, opts = {}, cb = function() {}, isCoffeescript) {
    this.parent = parent
    this.opts = opts
    this.cb = cb
    this.isCoffeescript = isCoffeescript
    this.props = {}
    for (let k of ["data", "ref", "typeMapping", "errors", "onChange"]) {
      this.props[k] = this.opts[k]
      delete this.opts[k]
    }
    // this.props.validationState = {}
    for (let [k, v] of entries(this._defaults())) this.props[k] = v
  }

  _defaults() {
    return {
      type:          "form",
      ref:           "form",
      cb:            this.cb,
      parent:        this.parent,
      theme:         this._theme(),
      themeDefaults: this._theme().defaults,
      formDefaults:  this.opts,
    }
  }

  // Create a theme-specific form React element
  render() {
    var form = this._theme().Form
    if (this.isCoffeescript) form = React.createFactory(form)
    return form(this.props)
  }

  // returns the theme based on a cascading lookup
  _theme() {
    this.opts.theme = this.opts.theme || frigDefaults.theme
    let themeName = this.opts.theme
    if (themeName == null) throw "A theme name is required"
    let theme = frigThemes[themeName]
    if (theme == null) throw `Frig.${themeName} does not exist`
    return theme
  }

}
