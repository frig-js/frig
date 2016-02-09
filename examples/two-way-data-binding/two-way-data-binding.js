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
	var TwoWayDataBindingExample = (function (_React$Component) {
	  _inherits(TwoWayDataBindingExample, _React$Component);

	  function TwoWayDataBindingExample() {
	    _classCallCheck(this, TwoWayDataBindingExample);

	    _get(Object.getPrototypeOf(TwoWayDataBindingExample.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "TwoWayDataBindingExample";
	    this.state = { account: {} };
	  }

	  _createClass(TwoWayDataBindingExample, [{
	    key: "render",
	    value: function render() {
	      var _this = this;

	      return _react2["default"].createElement(
	        "div",
	        null,
	        _react2["default"].createElement(
	          _frig.Form,
	          {
	            data: this.state.account,
	            onChange: function (account) {
	              return _this.setState({ account: account });
	            }
	          },
	          _react2["default"].createElement(
	            "div",
	            { className: "row" },
	            _react2["default"].createElement(_frig.Input, { name: "email" }),
	            _react2["default"].createElement(_frig.Input, { name: "password" }),
	            _react2["default"].createElement(_frig.Input, { name: "rememberMe", type: "switch" }),
	            _react2["default"].createElement(_frig.Submit, { title: "Sign In" })
	          )
	        ),
	        _react2["default"].createElement(
	          "h3",
	          null,
	          "State:"
	        ),
	        _react2["default"].createElement(
	          "pre",
	          null,
	          JSON.stringify(this.state.account)
	        )
	      );
	    }
	  }]);

	  return TwoWayDataBindingExample;
	})(_react2["default"].Component);

	window.addEventListener('load', function () {
	  var el = document.getElementById('two-way-data-binding-example');
	  _reactDom2["default"].render(_react2["default"].createElement(TwoWayDataBindingExample, null), el);
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