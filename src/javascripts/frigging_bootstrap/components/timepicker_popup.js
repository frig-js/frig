let React = require("react")
let cx = require("classnames")
let BootstrapInput = require("./input.js")
let FrigInput = React.createFactory(require("frig/components/input"))
let BootstrapSwitch = require("./switch.js")
let {errorList, sizeClassNames, formGroupCx, label} = require("../util.js")
let {div, input} = React.DOM

export default class extends React.Component {
  static defaultProps = Object.assign(require("../default_props.js"))

  // Returns the number of hours from 12 to 1 to 11
  _getHour(minutesSinceMidnight = this._minutesSinceMidnight()) {
    let hour = this._hoursSinceMeridiem(minutesSinceMidnight)
    if (hour === 0) hour = 12
    return hour
  }

  // Returns the minutes portion of the valueLink's time value from 0 to 59
  _getMinutes(minutesSinceMidnight = this._minutesSinceMidnight()) {
    return minutesSinceMidnight % 60
  }

  _isMeridiemAM() {
    let [hours, minutes, isAM] = this._getValuesFromTimepicker()

    return isAM
  }

  _onHourChange(hour) {
    let val = this._calculateHourChange(hour)

    this._setMinutesSinceMidnight(val)
  }

  _onMinutesChange(minutes) {
    let val = this._calculateMinutesChange(minutes)

    this._setMinutesSinceMidnight(val)
  }

  _onMeridiemChange(isAM) {
    let [hours] = this._getValuesFromTimepicker()
    let val = this._calculateHourChange(hours)

    this._setMinutesSinceMidnight(val, isAM)
  }

  _inputWrapper(inputHtml) {
    return input(inputHtml)
  }

  _calculateHourChange(hour) {
    hour = (parseInt(hour)||0)
    let meridiem = this._isMeridiemAM()
    if (hour < 1 || hour > 11) meridiem = meridiem === true ? "AM" : "PM"
    hour = hour % 12

    return this._getMinutes() + hour * 60
  }

  _calculateMinutesChange(minutes) {
    minutes = (parseInt(minutes)||0)

    return minutes + this._hoursSinceMeridiem() * 60
  }

  _hoursSinceMeridiem(minutesSinceMidnight = this._minutesSinceMidnight()) {
    return Math.floor(minutesSinceMidnight / 60)
  }

  _getValuesFromTimepicker() {
    let val = this.props.valueLink.value || ""

    // Parsing the input string
    let [hours, minutes] = val.split(":").map((s) => parseInt(s))

    let isAM = /am$/i.test(val)

    return [hours, minutes, isAM]
  }

  _minutesSinceMidnight() {
    let [hours, minutes, isAM] = this._getValuesFromTimepicker()

    // Limiting the hours to a range of 0 to 11 and the minutes to 0 to 59
    hours = (hours || 0) % 12
    minutes = (minutes || 0) % 60

    // Calculating the number of minutes since midnight
    return hours * 60 + minutes
  }

  _setMinutesSinceMidnight(m, isAM = this._isMeridiemAM()) {
    let meridiem = isAM ? "AM" : "PM"

    m = m % (12 * 60)

    let s = `${this._getHour(m)}:${this._getMinutes(m)} ${meridiem}`
    this.props.valueLink.requestChange(s)
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

      FrigInput(
        Object.assign(
          {},
          this.props, {
            component: BootstrapSwitch,
            required: false,
            xs: 4,
            name: "meridiem",
            onText: "AM",
            offText: "PM",
            valueLink: {
              value: this._isMeridiemAM(),
              requestChange: this._onMeridiemChange.bind(this),
            },
            inputHtml: {
              type: "switch",
            },
          }
        )
      ),
    )
  }

}
