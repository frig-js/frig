/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// One time theme setup (put this in an initialization file and call it once)
	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _frig = __webpack_require__(1);

	var _frig2 = _interopRequireDefault(_frig);

	var _friggingBootstrap = __webpack_require__(2);

	var _friggingBootstrap2 = _interopRequireDefault(_friggingBootstrap);

	// Libraries needed for each component

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(4);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	_frig2["default"].defaultTheme(_friggingBootstrap2["default"]);
	_frig2["default"].typeMapping.boolean = { component: "switch" };
	var KitchenSinkExample = (function (_React$Component) {
	  _inherits(KitchenSinkExample, _React$Component);

	  function KitchenSinkExample() {
	    _classCallCheck(this, KitchenSinkExample);

	    _get(Object.getPrototypeOf(KitchenSinkExample.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "KitchenSinkExample";
	    this.state = {
	      account: {
	        email: "me@test.com",
	        cost: "12.245",
	        password: "test",
	        shareSketchyInfo: false,
	        addresses: [{ address: "55 Actual Place Rd." }, {}],
	        select_example: "thing-value",
	        colorTwo: "#999",
	        colorThree: "#000"
	      }
	    };
	  }

	  _createClass(KitchenSinkExample, [{
	    key: "onSubmit",
	    value: function onSubmit(e) {
	      e.preventDefault();
	    }
	  }, {
	    key: "formOpts",
	    value: function formOpts() {
	      var _this = this;

	      return {
	        data: this.state.account,
	        onChange: function onChange(account) {
	          return _this.setState({ account: account });
	        },
	        errors: {
	          base: ["Test Error", "Moo"],
	          email: ["This Error is a Test"],
	          addresses: [{ address: "This is a Nested Field Error Test" }]
	        },
	        saved: {
	          select_example: true,
	          time_of_day: true,
	          colorTwo: true,
	          addresses: [{ address: true }, {}]
	        },
	        // errors: ["Test Error", "Moo"]
	        onSubmit: this.onSubmit
	      };
	    }
	  }, {
	    key: "customSelections",
	    // layout: "horizontal"
	    value: function customSelections() {
	      return this.state.account.customSelectionRendering || [];
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        _frig.Form,
	        this.formOpts(),
	        _react2["default"].createElement(
	          "div",
	          null,
	          _react2["default"].createElement(
	            "div",
	            { className: "row" },
	            _react2["default"].createElement(
	              "div",
	              { className: "col-xs-12" },
	              _react2["default"].createElement(
	                "h2",
	                null,
	                "The Frigging Kitchen Sink"
	              )
	            )
	          ),
	          _react2["default"].createElement(
	            "div",
	            { className: "row" },
	            _react2["default"].createElement(_frig.FormErrorList, null)
	          ),
	          _react2["default"].createElement(
	            "div",
	            { className: "row" },
	            _react2["default"].createElement(_frig.Input, {
	              name: "InputWithoutALabel",
	              xs: 12,
	              label: false,
	              placeholder: "Input Without a Label"
	            }),
	            _react2["default"].createElement(_frig.Input, {
	              name: "price",
	              type: "float",
	              format: "0,0.00",
	              xs: 12,
	              min: 0,
	              placeholder: "0.00"
	            }),
	            _react2["default"].createElement(_frig.Input, {
	              name: "cost",
	              type: "float"
	            }),
	            _react2["default"].createElement(_frig.Input, {
	              name: "email"
	            }),
	            _react2["default"].createElement(_frig.Input, {
	              name: "select_example",
	              options: [
	              // The 3 formats for options
	              // 1. An object with a label and a value (perfered)
	              { label: "Stuff", value: "stuff-value" },
	              // 2. An array of the [value, label]
	              ["thing-value", "Things"],
	              // 3. A string. For scenarios where the label equals the value.
	              "why not both?"]
	            })
	          ),
	          _react2["default"].createElement(
	            "div",
	            { className: "row" },
	            _react2["default"].createElement(
	              "div",
	              { className: "col-xs-12" },
	              _react2["default"].createElement(
	                "h2",
	                null,
	                "Passwords"
	              )
	            ),
	            _react2["default"].createElement(_frig.Input, {
	              name: "password",
	              xs: 6
	            }),
	            _react2["default"].createElement(_frig.Input, {
	              name: "passwordConfirmation",
	              xs: 6
	            })
	          ),
	          _react2["default"].createElement(
	            "div",
	            { className: "row" },
	            _react2["default"].createElement(_frig.Input, {
	              name: "description",
	              className: "testing-class-name",
	              type: "text",
	              rows: 5,
	              xs: 12
	            }),
	            _react2["default"].createElement(_frig.Input, {
	              name: "description-two",
	              className: "testing-class-name",
	              type: "text",
	              rows: 5,
	              label: false,
	              placeholder: "Description without a label",
	              xs: 12
	            })
	          ),
	          _react2["default"].createElement(
	            "div",
	            { className: "row" },
	            _react2["default"].createElement(_frig.Input, {
	              name: "time_of_day",
	              type: "switch",
	              xs: 6,
	              label: "Time of Day",
	              handleWidth: 100,
	              onText: "Enabled",
	              offText: "Disabled",
	              errors: ["This error is an example", "As is this one"]
	            }),
	            _react2["default"].createElement(_frig.Input, {
	              name: "time_of_night",
	              type: "switch",
	              xs: 6,
	              label: false
	            }),
	            _react2["default"].createElement(_frig.Input, {
	              name: "red_or_blue",
	              type: "switch",
	              onText: "Red",
	              offText: "Blue",
	              onValue: "red",
	              offValue: "blue"
	            })
	          ),
	          _react2["default"].createElement(
	            "div",
	            { className: "row" },
	            _react2["default"].createElement(_frig.Input, {
	              name: "uploadAvatar",
	              type: "file",
	              xs: 6,
	              label: "Uploading Avatar"
	            }),
	            _react2["default"].createElement(_frig.Input, {
	              name: "uploadVirus",
	              type: "file",
	              xs: 6,
	              label: false
	            })
	          ),
	          _react2["default"].createElement(
	            "div",
	            { className: "row" },
	            _react2["default"].createElement(_frig.Input, {
	              name: "startTime",
	              type: "time",
	              xs: "12",
	              placeholder: "12:00pm",
	              label: "Start Time"
	            }),
	            _react2["default"].createElement(_frig.Input, {
	              name: "endTime",
	              type: "time",
	              xs: "12",
	              placeholder: "End Time",
	              label: false
	            })
	          ),
	          _react2["default"].createElement(
	            "div",
	            { className: "row" },
	            _react2["default"].createElement(_frig.Input, {
	              name: "colorOne",
	              type: "color",
	              xs: "12",
	              label: "Color One"
	            }),
	            _react2["default"].createElement(_frig.Input, {
	              name: "colorTwo",
	              type: "color",
	              xs: "12",
	              label: false
	            }),
	            _react2["default"].createElement(_frig.Input, {
	              name: "colorThree",
	              type: "color",
	              xs: "12",
	              label: false
	            })
	          ),
	          _react2["default"].createElement(
	            "div",
	            { className: "row" },
	            _react2["default"].createElement(
	              "div",
	              { className: "col-xs-12" },
	              _react2["default"].createElement(
	                "h3",
	                null,
	                "Nested Fields (Eg. Has Many)"
	              )
	            ),
	            _react2["default"].createElement(
	              _frig.Fieldset,
	              { name: "addresses" },
	              _react2["default"].createElement(
	                "div",
	                null,
	                _react2["default"].createElement(
	                  "div",
	                  { className: "col-xs-12" },
	                  _react2["default"].createElement(
	                    "h4",
	                    null,
	                    _react2["default"].createElement(_frig.FieldsetText, {
	                      text: function (index) {
	                        return "Address #" + (index + 1);
	                      }
	                    })
	                  )
	                ),
	                _react2["default"].createElement(_frig.Input, { name: "address" }),
	                _react2["default"].createElement(_frig.Input, { name: "city" }),
	                _react2["default"].createElement(_frig.Input, { name: "postal_code" })
	              )
	            )
	          ),
	          _react2["default"].createElement(
	            "div",
	            { className: "row" },
	            _react2["default"].createElement(
	              "div",
	              { className: "col-xs-12" },
	              _react2["default"].createElement(
	                "h3",
	                null,
	                "Additional Sketchy Info"
	              )
	            )
	          ),
	          _react2["default"].createElement(
	            "div",
	            { className: "row" },
	            _react2["default"].createElement(_frig.Input, { name: "shareSketchyInfo" }),
	            this.state.account.shareSketchyInfo === true ? [_react2["default"].createElement(_frig.Input, { name: "socialSecurityNumber", key: "ssn" }), _react2["default"].createElement(_frig.Input, { name: "fullName", key: "fullName" }), _react2["default"].createElement(_frig.Input, {
	              name: "eyeColor",
	              key: "eyeColor",
	              options: ["blue", "green", "red", "left"]
	            })] : null,
	            _react2["default"].createElement(_frig.Submit, { title: "Save" })
	          )
	        )
	      );
	    }
	  }]);

	  return KitchenSinkExample;
	})(_react2["default"].Component);

	document.addEventListener("DOMContentLoaded", function () {
	  var el = document.getElementById("kitchen-sink");
	  _reactDom2["default"].render(_react2["default"].createElement(KitchenSinkExample, null), el);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Frig;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = FriggingBootstrap;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);