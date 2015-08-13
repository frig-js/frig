let React = require("react")
let cx = require("classnames")
let BootstrapInput = require("./input.js")
let FrigInput = React.createFactory(require("frig/components/input"))
let {errorList, sizeClassNames, formGroupCx, label} = require("../util.js")
let {div, input} = React.DOM

export default class extends React.Component {
  static defaultProps = Object.assign(require("../default_props.js"))

  _minutesSinceMidnight() {
    let val = this.props.valueLink.value || ""
    // Parsing the input string
    let [hours, minutes] = val.split(":").map((s) => parseInt(s))

    let isPM = /pm$/i.test(val)
    // Limiting the hours to a range of 0 to 11 and the minutes to 0 to 59
    hours = (hours || 0) % 12
    minutes = (minutes || 0) % 60

    // Calculating the number of minutes since midnight
    return hours * 60 + minutes + (isPM ? 12 * 60 : 0)
  }

  _setMinutesSinceMidnight(m) {
    m = m % (24 * 60)
    let s = `${this._getHour(m)}:${this._getMinutes(m)} ${this._getMeridiem(m)}`
    this.props.valueLink.requestChange(s)
  }

  _getMeridiem(minutesSinceMidnight = this._minutesSinceMidnight()) {
    return minutesSinceMidnight >= 12*60 ? "PM" : "AM"
  }

  // Returns the minutes portion of the valueLink's time value from 0 to 59
  _getMinutes(minutesSinceMidnight = this._minutesSinceMidnight()) {
    return minutesSinceMidnight % 60
  }

  _hoursSinceMeridiem(minutesSinceMidnight = this._minutesSinceMidnight()) {
    return Math.floor(minutesSinceMidnight / 60)
  }

  // Returns the number of hours from 12 to 1 to 11
  _getHour(minutesSinceMidnight = this._minutesSinceMidnight()) {
    let hour = this._hoursSinceMeridiem(minutesSinceMidnight)
    if (hour === 0) hour = 12
    return hour
  }

  _onHourChange(hour) {
    hour = (parseInt(hour)||0)
    let meridiem = this._getMeridiem()
    if (hour < 1 || hour > 11) meridiem = meridiem === "PM" ? "AM" : "PM"
    hour = hour % 12
    let val = this._getMinutes() + hour * 60
    val = val + (this._getMeridiem() === "PM" ? 12 * 60 : 0)
    this._setMinutesSinceMidnight(val)
  }

  _onMinutesChange(minutes) {
    minutes = (parseInt(minutes)||0)
    let val = minutes + this._hoursSinceMeridiem() * 60
    val = val + (this._getMeridiem() === "PM" ? 12 * 60 : 0)
    this._setMinutesSinceMidnight(val)
  }

  _onMeridiemChange(isPM) {
    let meridiem = isPM ? "PM" : "AM"
    let val = minutes + this._hoursSinceMeridiem() * 60
    val = val + (this._getMeridiem() === "PM" ? 12 * 60 : 0)
    this._setMinutesSinceMidnight(val)
  }

  _inputWrapper(inputHtml) {
    return input(inputHtml)
  }

  render() {
    let inputPropOverrides = {
      component: BootstrapInput,
      required: false,
      xs: 4,
    }

    return div({className: "row"},
      FrigInput(
        Object.assign(
          {},
          this.props,
          inputPropOverrides, {
            name: "hours",
            inputHtml: {
              type: "number",
              step: 1,
            },
            valueLink: {
              value: this._getHour(),
              requestChange: this._onHourChange.bind(this),
            },
          }
        )
      ),

      FrigInput(
        Object.assign(
          {},
          this.props,
          inputPropOverrides, {
            name: "minutes",
            valueLink: {
              value: this._getMinutes(),
              requestChange: this._onMinutesChange.bind(this),
            },
            inputHtml: {
              type: "number",
              step: 15,
            },
          }
        )
      ),

      // FrigInput(
      //   Object.assign(
      //     {},
      //     this.props,
      //     inputPropOverrides, {
      //       name: "meridiem",
      //       valueLink: {
      //         value: this._inputValue(),
      //         requestChange: this._onMeridiemChange.bind(this),
      //       },
      //       options: ['am', 'pm'],
      //       xs: 4,
      //     }
      //   )
      // ),
    )
  }

}
