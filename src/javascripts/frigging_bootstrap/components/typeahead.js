require("whatwg-fetch/fetch.js")
let React = require("react")
let cx = require("classnames")
let fuzzy = require('fuzzy')
let {div, p, input, i, ul, li} = React.DOM
let BootstrapInput = React.createFactory(require("./input.js"))
let FrigInput = React.createFactory(require("frig/components/input"))
let {errorList, sizeClassNames, formGroupCx} = require("../util")

export default class extends React.Component {

  displayName = "Frig.friggingBootstrap.Typeahead"

  static defaultProps = Object.assign(require("../default_props.js"), {
    minLength: 3,
    maxSuggestions: 5,
  })

  state = {}

  // Add the user-entered option to the multiple-selection if they press enter
  _onKeyDown(e) {
    if (!(e.key === 'Enter') || !this.props.multiple) return
    e.preventDefault()
    let filter = (o) => o.label === this._inputValue()
    let option = this._options().filter(filter)[0]
    if (option == null) {
      // TODO: Present the user with an error if their input is not an option
    }
    else {
      this._select(option)
    }
  }

  _select(option) {
    let options = this.props.valueLink.value.concat(option.value)
    this.props.valueLink.requestChange(options)
  }

  _deselect(option) {
    let options = this.props.valueLink.value
    options = options.splice(options.indexOf(option.value))
    this.props.valueLink.requestChange(options)
  }

  async _onInputChange(val) {
    console.log("SHATE CHANGE!", val)
    this.setState({inputValue: val})
    // If the input text is greater then the mininum length and a remote is set
    // lookup the options that match the inputted value via AJAX.
    if (val.length < this.props.minLength || this.props.remote == null) return
    // Cancel the previous request
    if (this._suggestionReq != null) this._suggestionReq.abort()
    // Make the request and await an ajax response
    try {
      this._suggestionReq = await fetch(this.props.remote.url(val))
      await this._suggestionReq.json()
      // Parse the response and update the state
      let parser = this.props.remote.parser || ((res) => res.json())
      this.setState({options: parser(this._suggestionReq)})
      this._suggestionReq = undefined
    } catch (e) {
      // TODO: handle AJAX failures
      throw e
    }
  }

  _options() {
    return (this.props.remote == null ? this.props : this.state).options || []
  }

  _suggestions() {
    let suggestions = this._options()
    // If the suggestions are not loaded via ajax then fuzzy match on the
    // options
    if (!this.props.remote) {
      let fuzzyOpts = {extract: (o) => o.label}
      let matches = fuzzy.filter(this._inputValue(), this._options(), fuzzyOpts)
      suggestions = matches.map((match) => match.original)
    }
    // truncate the suggestions to it's max length
    suggestions.length = Math.min(suggestions.length, this.props.maxSuggestions)
    return suggestions
  }

  // _selectionsList() {
  //   if (!this.props.multiple) return ""
  //   if (this.selectedItems.length == 0) return this._emptyList()
  //   // if there are selected items and multiple is true return the actual list
  //   return this.state.selectedItems.map((item) => {
  //     return div({className: "row"},
  //       div({className: "col-xs-12 col-sm-12 col-md-12 col-lg-12"},
  //         p({className: "pull-left"}, item.name),
  //         i({
  //           className: "fa fa-times delete-trigger pull-right",
  //           onClick: this._deselect.bind(this, [item.key]),
  //           title: "Remove from list",
  //         }),
  //       ),
  //     )
  //   })
  // },

  _emptyList() {
    return div({className: "row"},
      div({className: "col-xs-12 col-sm-12 col-md-12 col-lg-12"},
        p({className: "pull-left"},
          `No ${this.props.label.toLowerCase()}...`
        ),
      ),
    )
  }

  _suggestionsList() {
    return ul({className: "frigb-typeahead-suggestions"},
      this._suggestions().map((o) => {
        return li({onClick: this._select.bind(this, o)}, o.label)
      })
    )
  }

  _wrapInput(inputHtml) {
    inputHtml.onKeyDown = this._onKeyDown.bind(this)
    return [
      input(inputHtml),
      // this._selectionsList(),
      this._suggestionsList(),
      errorList(this.state.errors),
    ]
  }

  _inputValue() {
    if (this.multiple) {
      return this.state.inputValue
    }
    else {
      return this.state.inputValue || this.props.valueLink.value
    }
  }

  render() {
    let inputPropOverrides = {
      component: BootstrapInput,
      inputWrapper: this._wrapInput.bind(this),
      valueLink: {
        value: this._inputValue(),
        requestChange: this._onInputChange.bind(this),
      },
      validations: [],
    }
    return FrigInput(Object.assign({}, this.props, inputPropOverrides))
  }

}
