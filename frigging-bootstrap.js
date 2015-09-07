(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("Frig"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "Frig"], factory);
	else if(typeof exports === 'object')
		exports["FriggingBootstrap"] = factory(require("React"), require("Frig"));
	else
		root["FriggingBootstrap"] = factory(root["React"], root["Frig"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
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

	"use strict";

	__webpack_require__(1);

	module.exports = {

	  component: function component(name) {
	    return __webpack_require__(5)("./" + name + ".js");
	  }

	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./checkbox.js": 6,
		"./color.js": 12,
		"./color/higher_order_components/draggable.js": 16,
		"./color/hue_slider.js": 17,
		"./color/map.js": 15,
		"./errors.js": 18,
		"./file.js": 19,
		"./form.js": 20,
		"./input.js": 21,
		"./select.js": 22,
		"./submit.js": 23,
		"./switch.js": 24,
		"./text.js": 25,
		"./timepicker.js": 26,
		"./timepicker_popup.js": 27,
		"./typeahead.js": 28
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 5;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(7);

	var _require = __webpack_require__(8);

	var errorList = _require.errorList;
	var sizeClassNames = _require.sizeClassNames;
	var formGroupCx = _require.formGroupCx;
	var savedText = _require.savedText;
	var _React$DOM = React.DOM;
	var div = _React$DOM.div;
	var label = _React$DOM.label;
	var input = _React$DOM.input;
	var span = _React$DOM.span;

	var cx = __webpack_require__(9);
	var booleanHOC = __webpack_require__(10).HigherOrderComponents.Boolean;

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.friggingBootstrap.Checkbox";
	  }

	  _createClass(_default, [{
	    key: "_inputHtml",
	    value: function _inputHtml() {
	      return Object.assign({}, this.props.inputHtml, {
	        type: "checkbox",
	        value: this.props.key,
	        checkedLink: this.props.valueLink
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return div({ className: "form-group" }, div({ className: cx(sizeClassNames(this.props)) }, div({ className: formGroupCx(this.props) }, label(this.props.labelHtml, input(this._inputHtml()), this.props.label ? " " + this.props.label : ""), savedText({ saved: this.props.saved, className: "frigb-checkbox" }), errorList(this.props.errors))));
	    }
	  }], [{
	    key: "defaultProps",
	    value: __webpack_require__(11),
	    enumerable: true
	  }]);

	  var _default2 = _default;
	  _default = booleanHOC(_default) || _default;
	  return _default;
	})(React.Component);

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var React = __webpack_require__(7);
	var _React$DOM = React.DOM;
	var div = _React$DOM.div;
	var span = _React$DOM.span;
	var _label = _React$DOM.label;

	var cx = __webpack_require__(9);

	module.exports = {
	  errorList: function errorList(errors) {
	    var i = 0;
	    return (errors || []).map(function (msg) {
	      return module.exports.error(msg, i++);
	    });
	  },

	  error: function error(msg) {
	    var i = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	    return span({ className: "help-block", key: "error-" + i }, React.DOM.i({ className: "fa fa-exclamation-circle" }, " " + msg));
	  },

	  label: function label(props) {
	    var overrides = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var horizontalClasses = sizeClassNames(props.labelWidth, { offsets: false });
	    if (!props.label || props.block) {
	      if (props.layout === "horizontal" && !props.block) {
	        return div({ className: horizontalClasses });
	      } else {
	        return "";
	      }
	    }
	    var labelHtml = Object.assign({}, props, overrides);
	    labelHtml.className = cx(labelHtml.className, _defineProperty({}, horizontalClasses, props.layout === "horizontal"));
	    return div({}, _label(labelHtml, props.label), savedText({ saved: props.saved && props.layout === "vertical" }));
	  },

	  savedText: function savedText(_ref) {
	    var saved = _ref.saved;
	    var className = _ref.className;

	    className = className || "frigb-saved pull-right";
	    if (!saved) return "";
	    return span({ className: className, key: "saved" }, "saved");
	  },

	  savedNotification: function savedNotification(_ref2) {
	    var layout = _ref2.layout;
	    var label = _ref2.label;
	    var saved = _ref2.saved;
	    var className = _ref2.className;

	    className = className || "frigb-saved-inline";
	    var savedInline = savedText({ saved: saved, className: className });

	    if (label === false && saved) return savedInline;
	    if (label && saved && layout == "horizontal") return savedInline;
	  },

	  inputContainerCx: function inputContainerCx(props) {
	    var _cx2;

	    var labelWidth = props.labelWidth || {};
	    var inputWidth = {};
	    // The width of the input is the number of columns left after the label
	    // is placed on the row. If the label takes a full row (12 coluns) then
	    // the input is given another row (12 columns wide).
	    for (var k in labelWidth) {
	      inputWidth[k] = 12 - labelWidth[k] || 12;
	    }var horizontalClasses = sizeClassNames(inputWidth, { offsets: false });
	    return cx((_cx2 = {}, _defineProperty(_cx2, horizontalClasses, props.layout == "horizontal" && !props.block), _defineProperty(_cx2, "col-xs-12", props.layout == "horizontal" && props.block), _cx2));
	  },

	  sizeClassNames: function sizeClassNames() {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? { offsets: true } : arguments[1];

	    var classes = {};
	    var sizes = ["xs", "sm", "md", "lg"];
	    // Adding column classes
	    var _iteratorNormalCompletion = true;

	    // Adding offset classes
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = sizes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var k = _step.value;

	        if (props[k] != null) classes["col-" + k + "-" + props[k]] = true;
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator["return"]) {
	          _iterator["return"]();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    if (opts.offsets) {
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = sizes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var size = _step2.value;

	          k = size + "Offset";
	          if (props[k] == null) continue;
	          classes["col-" + size + "-offset-" + props[k]] = true;
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	            _iterator2["return"]();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }
	    return cx(classes);
	  },

	  formGroupCx: function formGroupCx(props) {
	    var overrides = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var isCheckbox = props.inputHtml.type === "checkbox";
	    return cx(Object.assign({
	      "form-group": !isCheckbox,
	      "checkbox": isCheckbox,
	      "has-error": props.errors != null,
	      "has-success": props.modified && props.errors == null
	    }, overrides));
	  }

	};

	var _module$exports = module.exports;
	var savedText = _module$exports.savedText;
	var sizeClassNames = _module$exports.sizeClassNames;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	'use strict';

	(function () {
		'use strict';

		function classNames() {

			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  // Sizes
	  xs: 12,
	  sm: undefined,
	  md: undefined,
	  lg: undefined,
	  // Offsets
	  xsOffset: undefined,
	  smOffset: undefined,
	  mdOffset: undefined,
	  lgOffset: undefined,
	  // Block changes inputs with layout: "horizontal" to use the full width of
	  // their container and disables the label.
	  block: false,
	  // Label width for horizontal labels
	  labelWidth: {
	    xs: 12,
	    sm: 2
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(7);
	var Colr = __webpack_require__(13);

	var _require = __webpack_require__(8);

	var errorList = _require.errorList;
	var sizeClassNames = _require.sizeClassNames;
	var formGroupCx = _require.formGroupCx;
	var label = _require.label;

	var _require2 = __webpack_require__(8);

	var savedNotification = _require2.savedNotification;
	var _React$DOM = React.DOM;
	var div = _React$DOM.div;
	var input = _React$DOM.input;
	var span = _React$DOM.span;

	var cx = __webpack_require__(9);

	var Focusable = __webpack_require__(10).HigherOrderComponents.Focusable;

	var colorMap = React.createFactory(__webpack_require__(15));
	var hue_slider = React.createFactory(__webpack_require__(17));

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), "constructor", this).apply(this, arguments);

	    this.state = { colr: Colr.fromHex("#fff") };
	  }

	  _createClass(_default, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this._updateColrCache(this.props);
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      this._updateColrCache(nextProps);
	    }
	  }, {
	    key: "_updateColrCache",
	    value: function _updateColrCache(nextProps) {
	      var nextColr = this._generateColr(nextProps.valueLink.value);
	      if (this.state.colr.toHex() === nextColr.toHex()) return;
	      this.setState({ colr: nextColr });
	    }
	  }, {
	    key: "_generateColr",
	    value: function _generateColr(hex) {
	      hex = hex || "#fff";
	      if (!hex.match(/^#?([a-f0-9]{3}|[a-f0-9]{6})$/i)) hex = "#fff";
	      return Colr.fromHex(hex);
	    }
	  }, {
	    key: "_requestColrChange",
	    value: function _requestColrChange(colr) {
	      var _this = this;

	      // Update state and then props so that the cache invalidation for incomming
	      // props (_updateColrCache) always sees the latest state.
	      var updateProps = function updateProps() {
	        return _this.props.valueLink.requestChange(colr.toHex());
	      };
	      this.setState({ colr: colr }, updateProps);
	    }
	  }, {
	    key: "_colrLink",
	    value: function _colrLink() {
	      return {
	        value: this.state.colr,
	        requestChange: this._requestColrChange.bind(this)
	      };
	    }
	  }, {
	    key: "_hsv",
	    value: function _hsv() {
	      return this.state.colr.toHsvObject();
	    }
	  }, {
	    key: "_onColorBlockClick",
	    value: function _onColorBlockClick() {
	      React.findDOMNode(this.refs.frigColorInput).select();
	    }
	  }, {
	    key: "_colorPopup",
	    value: function _colorPopup() {
	      if (this.props.focused === false) return undefined;
	      return div({ className: "controls frigb-colorpicker" }, div({ className: "frigb-hue-slider" }, hue_slider({
	        max: 360,
	        colrLink: this._colrLink(),
	        hsv: this._hsv()
	      })), colorMap({
	        max: 100,
	        colrLink: this._colrLink(),
	        hsv: this._hsv()
	      }));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return div({ className: cx(sizeClassNames(this.props)) }, div({ className: formGroupCx(this.props) }, label(this.props), input(Object.assign({}, this.props.inputHtml, {
	        valueLink: this.props.valueLink,
	        ref: "frigColorInput",
	        className: cx(this.props.inputHtml.className, "frigb-color-input", "form-control")
	      })), div({
	        className: "frigb-color-block",
	        style: { backgroundColor: this.state.colr.toHex() },
	        onClick: this._onColorBlockClick.bind(this)
	      }), this._colorPopup(), savedNotification({
	        parentProps: this.props,
	        className: "frigb-saved-inline frigb-colorpicker-inline"
	      }), errorList(this.props.errors)));
	    }
	  }], [{
	    key: "displayName",
	    value: "Frig.friggingBootstrap.Color",
	    enumerable: true
	  }, {
	    key: "defaultProps",
	    value: Object.assign(__webpack_require__(11)),

	    // Color information is stored in state (as well as being received in props)
	    // because the HSV format we use looses some accuracy when converted to the
	    // RGB format (ie. it is a lossy conversion). To maintain information we
	    // have to maintain the HSV non-lossy intermediate value.
	    //
	    // As an example if you were to set the saturation to 0 then the RGB color
	    // would set hue and value to zero as well (#000) loosing that hue and value
	    // context we need for the color map.
	    enumerable: true
	  }]);

	  var _default2 = _default;
	  _default = Focusable(_default) || _default;
	  return _default;
	})(React.Component);

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*
	 * DEPENDENCIES
	 */

	var convert = __webpack_require__(14);

	/*
	 * CONSTRUCTOR
	 */

	function Colr() {
	  if (this instanceof Colr === false) {
	    return new Colr();
	  }
	  this._ = {};
	}

	/*
	 * STATIC METHODS
	 */

	Colr.fromHex = function (hex) {
	  return new Colr().fromHex(hex);
	};

	Colr.fromGrayscale = function (value) {
	  return new Colr().fromGrayscale(value);
	};

	Colr.fromRgb = function (r, g, b) {
	  return new Colr().fromRgb(r, g, b);
	};

	Colr.fromRgbArray = function (arr) {
	  return new Colr().fromRgb(arr[0], arr[1], arr[2]);
	};

	Colr.fromRgbObject = function (obj) {
	  return new Colr().fromRgb(obj.r, obj.g, obj.b);
	};
	Colr.fromHsl = function (h, s, l) {
	  return new Colr().fromHsl(h, s, l);
	};

	Colr.fromHslArray = function (arr) {
	  return new Colr().fromHsl(arr[0], arr[1], arr[2]);
	};

	Colr.fromHslObject = function (obj) {
	  return new Colr().fromHsl(obj.h, obj.s, obj.l);
	};

	Colr.fromHsv = function (h, s, v) {
	  return new Colr().fromHsv(h, s, v);
	};

	Colr.fromHsvArray = function (arr) {
	  return new Colr().fromHsv(arr[0], arr[1], arr[2]);
	};

	Colr.fromHsvObject = function (obj) {
	  return new Colr().fromHsv(obj.h, obj.s, obj.v);
	};

	/*
	 * IMPORTERS
	 */

	// HEX

	Colr.prototype.fromHex = function (input) {
	  var value = convert.hex.rgb(input);
	  this._ = { rgb: value };
	  return this;
	};

	// GRAYSCALE

	Colr.prototype.fromGrayscale = function (input) {
	  input = clampByte(input);
	  var value = convert.grayscale.rgb(input);
	  this._ = { rgb: value };
	  return this;
	};

	// RGB

	Colr.prototype.fromRgb = function (r, g, b) {
	  if (typeof r !== 'number' || typeof g !== 'number' || typeof b !== 'number') {
	    throw new Error('Arguments must be numbers');
	  }
	  var value = clampRgb(r, g, b);
	  this._ = { rgb: value };
	  return this;
	};

	Colr.prototype.fromRgbArray = function (arr) {
	  return this.fromRgb(arr[0], arr[1], arr[2]);
	};

	Colr.prototype.fromRgbObject = function (obj) {
	  return this.fromRgb(obj.r, obj.g, obj.b);
	};

	// HSL

	Colr.prototype.fromHsl = function (h, s, l) {
	  if (typeof h !== 'number' || typeof s !== 'number' || typeof l !== 'number') {
	    throw new Error('Arguments must be numbers');
	  }
	  this._ = { hsl: clampHsx(h, s, l) };
	  return this;
	};

	Colr.prototype.fromHslArray = function (arr) {
	  return this.fromHsl(arr[0], arr[1], arr[2]);
	};

	Colr.prototype.fromHslObject = function (obj) {
	  return this.fromHsl(obj.h, obj.s, obj.l);
	};

	// HSV

	Colr.prototype.fromHsv = function (h, s, v) {
	  if (typeof h !== 'number' || typeof s !== 'number' || typeof v !== 'number') {
	    throw new Error('Arguments must be numbers');
	  }
	  this._ = { hsv: clampHsx(h, s, v) };
	  return this;
	};

	Colr.prototype.fromHsvArray = function (arr) {
	  return this.fromHsv(arr[0], arr[1], arr[2]);
	};

	Colr.prototype.fromHsvObject = function (obj) {
	  return this.fromHsv(obj.h, obj.s, obj.v);
	};

	/*
	 * EXPORTERS
	 */

	// HEX

	Colr.prototype.toHex = function () {
	  var cached = this._.hex;
	  if (cached !== undefined) {
	    return cached;
	  }

	  var input;
	  var cachedFrom = this._.rgb;

	  if (cachedFrom !== undefined) {
	    input = cachedFrom;
	  } else {
	    input = this.toRawRgbArray();
	  }

	  input[0] = Math.round(input[0]);
	  input[1] = Math.round(input[1]);
	  input[2] = Math.round(input[2]);

	  var value = convert.rgb.hex(input);
	  this._.hex = value;

	  return value;
	};

	// GRAYSCALE

	Colr.prototype.toGrayscale = function () {
	  var cached = this._.grayscale;
	  if (cached !== undefined) {
	    return cached;
	  }

	  var input;
	  var cachedFrom = this._.rgb;

	  if (cachedFrom !== undefined) {
	    input = cachedFrom;
	  } else {
	    input = this.toRawRgbArray();
	  }

	  var value = convert.rgb.grayscale(input);
	  this._.grayscale = value;
	  return value;
	};

	// RGB

	Colr.prototype.toRawRgbArray = function () {
	  var cached = this._.rgb;
	  if (cached !== undefined) {
	    return cached;
	  }

	  var value;

	  if ((value = this._.hsv) !== undefined) {
	    value = convert.hsv.rgb(value);
	  } else if ((value = this._.hsl) !== undefined) {
	    value = convert.hsl.rgb(value);
	  } else {
	    throw new Error('No data to convert');
	  }

	  this._.rgb = value;
	  return value;
	};

	Colr.prototype.toRawRgbObject = function () {
	  var arr = this.toRawRgbArray();
	  return { r: arr[0], g: arr[1], b: arr[2] };
	};

	Colr.prototype.toRgbArray = function () {
	  var arr = this.toRawRgbArray();
	  return [Math.round(arr[0]), Math.round(arr[1]), Math.round(arr[2])];
	};

	Colr.prototype.toRgbObject = function () {
	  var arr = this.toRgbArray();
	  return { r: arr[0], g: arr[1], b: arr[2] };
	};

	// HSL

	Colr.prototype.toRawHslArray = function () {
	  var cached = this._.hsl;
	  if (cached !== undefined) {
	    return cached;
	  }

	  var value;

	  if ((value = this._.hsv) !== undefined) {
	    value = convert.hsv.hsl(value);
	  } else if ((value = this._.rgb) !== undefined) {
	    value = convert.rgb.hsl(value);
	  } else {
	    throw new Error('No data to convert');
	  }

	  this._.hsl = value;
	  return value;
	};

	Colr.prototype.toRawHslObject = function () {
	  var arr = this.toRawHslArray();
	  return { h: arr[0], s: arr[1], l: arr[2] };
	};

	Colr.prototype.toHslArray = function () {
	  var arr = this.toRawHslArray();
	  return [Math.round(arr[0]), Math.round(arr[1]), Math.round(arr[2])];
	};

	Colr.prototype.toHslObject = function () {
	  var arr = this.toHslArray();
	  return { h: arr[0], s: arr[1], l: arr[2] };
	};

	// HSV

	Colr.prototype.toRawHsvArray = function () {
	  var cached = this._.hsv;
	  if (cached !== undefined) {
	    return cached;
	  }

	  var value;

	  if ((value = this._.hsl) !== undefined) {
	    value = convert.hsl.hsv(value);
	  } else if ((value = this._.rgb) !== undefined) {
	    value = convert.rgb.hsv(value);
	  } else {
	    throw new Error('No data to convert');
	  }

	  this._.hsv = value;
	  return value;
	};

	Colr.prototype.toRawHsvObject = function () {
	  var arr = this.toRawHsvArray();
	  return { h: arr[0], s: arr[1], v: arr[2] };
	};

	Colr.prototype.toHsvArray = function () {
	  var arr = this.toRawHsvArray();
	  return [Math.round(arr[0]), Math.round(arr[1]), Math.round(arr[2])];
	};

	Colr.prototype.toHsvObject = function () {
	  var arr = this.toHsvArray();
	  return { h: arr[0], s: arr[1], v: arr[2] };
	};

	/*
	 * MODIFIERS
	 */

	Colr.prototype.lighten = function (amount) {
	  var hsl = this.toRawHslArray();
	  hsl[2] = clampPercentage(hsl[2] + amount);
	  this._ = { hsl: hsl };
	  return this;
	};

	Colr.prototype.darken = function (amount) {
	  var hsl = this.toRawHslArray();
	  hsl[2] = clampPercentage(hsl[2] - amount);
	  this._ = { hsl: hsl };
	  return this;
	};

	/*
	 * MISC
	 */

	Colr.prototype.clone = function () {
	  var colr = new Colr();
	  colr._.hex = this._.hex;
	  colr._.grayscale = this._.grayscale;

	  if (this._.rgb !== undefined) {
	    colr._.rgb = this._.rgb.slice(0);
	  }
	  if (this._.hsv !== undefined) {
	    colr._.hsv = this._.hsv.slice(0);
	  }
	  if (this._.hsl !== undefined) {
	    colr._.hsl = this._.hsl.slice(0);
	  }

	  return colr;
	};

	/*
	 * UTILS
	 */

	function clampPercentage(val) {
	  return Math.max(Math.min(val, 100), 0);
	}

	function clampByte(byte) {
	  return Math.max(Math.min(byte, 255), 0);
	}

	function clampRgb(r, g, b) {
	  return [Math.max(Math.min(r, 255), 0), Math.max(Math.min(g, 255), 0), Math.max(Math.min(b, 255), 0)];
	}

	function clampHsx(h, s, x) {
	  return [Math.max(Math.min(h, 360), 0), Math.max(Math.min(s, 100), 0), Math.max(Math.min(x, 100), 0)];
	}

	module.exports = Colr;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  grayscale: {
	    rgb: grayscale2rgb
	  },
	  hex: {
	    rgb: hex2rgb
	  },
	  rgb: {
	    hsl: rgb2hsl,
	    hsv: rgb2hsv,
	    hex: rgb2hex,
	    grayscale: rgb2grayscale
	  },
	  hsl: {
	    rgb: hsl2rgb,
	    hsv: hsl2hsv
	  },
	  hsv: {
	    rgb: hsv2rgb,
	    hsl: hsv2hsl
	  }
	};

	// convert a charcode to a hex val
	function hexVal(c) {
	  return c < 58 ? c - 48 : // 0 - 9
	  c < 71 ? c - 55 : // A - F
	  c - 87 // a - f
	  ;
	}

	function hex2rgb(hex) {
	  var i = hex[0] === '#' ? 1 : 0;
	  var len = hex.length;

	  if (len - i < 3) {
	    throw new Error('hex input must be at least three chars long');
	  }

	  var r, g, b;

	  var h1 = hexVal(hex.charCodeAt(0 + i));
	  var h2 = hexVal(hex.charCodeAt(1 + i));
	  var h3 = hexVal(hex.charCodeAt(2 + i));

	  if (len - i >= 6) {
	    r = (h1 << 4) + h2;
	    g = (h3 << 4) + hexVal(hex.charCodeAt(3 + i));
	    b = (hexVal(hex.charCodeAt(4 + i)) << 4) + hexVal(hex.charCodeAt(5 + i));
	  } else {
	    r = (h1 << 4) + h1;
	    g = (h2 << 4) + h2;
	    b = (h3 << 4) + h3;
	  }

	  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
	    throw new Error('hex input is invalid');
	  }

	  return [r, g, b];
	}

	function rgb2hex(rgb) {
	  return '#' + ('000000' + ((rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16)).slice(-6);
	}

	function rgb2hsl(rgb) {
	  var r = rgb[0] / 255;
	  var g = rgb[1] / 255;
	  var b = rgb[2] / 255;

	  var min = Math.min(r, g, b);
	  var max = Math.max(r, g, b);
	  var delta = max - min;
	  var h, s, l;

	  if (max === min) {
	    h = 0;
	  } else if (r === max) {
	    h = (g - b) / delta;
	  } else if (g === max) {
	    h = 2 + (b - r) / delta;
	  } else if (b === max) {
	    h = 4 + (r - g) / delta;
	  }

	  h = Math.min(h * 60, 360);

	  if (h < 0) {
	    h += 360;
	  }

	  l = (min + max) / 2;

	  if (max === min) {
	    s = 0;
	  } else if (l <= 0.5) {
	    s = delta / (max + min);
	  } else {
	    s = delta / (2 - max - min);
	  }

	  return [h, s * 100, l * 100];
	}

	function rgb2hsv(rgb) {
	  var r = rgb[0];
	  var g = rgb[1];
	  var b = rgb[2];
	  var min = Math.min(r, g, b);
	  var max = Math.max(r, g, b);
	  var delta = max - min;
	  var h, s, v;

	  if (max === 0) {
	    s = 0;
	  } else {
	    s = delta / max * 100;
	  }

	  if (max === min) {
	    h = 0;
	  } else if (r === max) {
	    h = (g - b) / delta;
	  } else if (g === max) {
	    h = 2 + (b - r) / delta;
	  } else if (b === max) {
	    h = 4 + (r - g) / delta;
	  }

	  h = Math.min(h * 60, 360);

	  if (h < 0) {
	    h += 360;
	  }

	  v = max / 255 * 100;

	  return [h, s, v];
	}

	function hsl2rgb(hsl) {
	  var h = hsl[0] / 360;
	  var s = hsl[1] / 100;
	  var l = hsl[2] / 100;

	  var r, g, b;

	  if (s === 0) {
	    // monochrome
	    r = g = b = l;
	  } else {
	    var q = l < 0.5 ? l * (s + 1) : l + s - l * s;
	    var p = 2 * l - q;
	    var t;

	    // red
	    t = h + 1 / 3;
	    if (t < 0) {
	      t += 1;
	    } else if (t > 1) {
	      t -= 1;
	    }
	    if (t < 1 / 6) {
	      r = p + (q - p) * t * 6;
	    } else if (t < 1 / 2) {
	      r = q;
	    } else if (t < 2 / 3) {
	      r = p + (q - p) * (2 / 3 - t) * 6;
	    } else {
	      r = p;
	    }

	    // green
	    t = h;
	    if (t < 0) {
	      t += 1;
	    } else if (t > 1) {
	      t -= 1;
	    }
	    if (t < 1 / 6) {
	      g = p + (q - p) * t * 6;
	    } else if (t < 1 / 2) {
	      g = q;
	    } else if (t < 2 / 3) {
	      g = p + (q - p) * (2 / 3 - t) * 6;
	    } else {
	      g = p;
	    }

	    // blue
	    t = h - 1 / 3;
	    if (t < 0) {
	      t += 1;
	    } else if (t > 1) {
	      t -= 1;
	    }
	    if (t < 1 / 6) {
	      b = p + (q - p) * t * 6;
	    } else if (t < 1 / 2) {
	      b = q;
	    } else if (t < 2 / 3) {
	      b = p + (q - p) * (2 / 3 - t) * 6;
	    } else {
	      b = p;
	    }
	  }

	  return [r * 255, g * 255, b * 255];
	}

	function hsl2hsv(hsl) {
	  var h = hsl[0];
	  var s = hsl[1] / 100;
	  var l = hsl[2] / 100;
	  var sv, v;

	  if (s === 0) {
	    return [h, 0, l * 100];
	  }

	  if (l === 0) {
	    return [h, 0, 0];
	  }

	  l *= 2;
	  s *= l <= 1 ? l : 2 - l;
	  v = (l + s) / 2;
	  sv = 2 * s / (l + s);
	  return [h, sv * 100, v * 100];
	}

	function hsv2rgb(hsv) {
	  var h = hsv[0] / 60;
	  var s = hsv[1] / 100;
	  var v = hsv[2] / 100;

	  var hi = Math.floor(h) % 6;

	  var f = h - Math.floor(h);
	  var p = 255 * v * (1 - s);
	  var q = 255 * v * (1 - s * f);
	  var t = 255 * v * (1 - s * (1 - f));
	  v = 255 * v;

	  switch (hi) {
	    case 0:
	      return [v, t, p];
	    case 1:
	      return [q, v, p];
	    case 2:
	      return [p, v, t];
	    case 3:
	      return [p, q, v];
	    case 4:
	      return [t, p, v];
	    case 5:
	      return [v, p, q];
	  }
	}

	function hsv2hsl(hsv) {
	  var h = hsv[0];
	  var s = hsv[1] / 100;
	  var v = hsv[2] / 100;
	  var sl, l;

	  if (s === 0) {
	    return [h, 0, v * 100];
	  }

	  if (v === 0) {
	    return [h, 0, 0];
	  }

	  l = (2 - s) * v;
	  sl = s * v;
	  sl /= l <= 1 ? l : 2 - l;
	  l /= 2;
	  return [h, sl * 100, l * 100];
	}

	function grayscale2rgb(value) {
	  return [value, value, value];
	}

	function rgb2grayscale(rgb) {
	  return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(7);
	var Colr = __webpack_require__(13);
	var cx = __webpack_require__(9);
	var draggable = __webpack_require__(16);
	var div = React.DOM.div;

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: "_updatePosition",
	    value: function _updatePosition(clientX, clientY) {
	      var rect = React.findDOMNode(this).getBoundingClientRect();
	      var x = (clientX - rect.left) / rect.width;
	      var y = (rect.bottom - clientY) / rect.height;
	      var saturation = this.getScaledValue(x);
	      var value = this.getScaledValue(y);
	      var colr = Colr.fromHsv(this.props.hsv.h, saturation, value);

	      this.props.colrLink.requestChange(colr);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var x = this.props.hsv.s;
	      var y = this.props.hsv.v;
	      var hue = Colr.fromHsv(this.props.hsv.h, 100, 100).toHex();
	      var luminosity = this.props.colrLink.value.toGrayscale();

	      return div({
	        className: cx({
	          "frigb-map": true,
	          "frigb-active": this.props.activeLink.value,
	          "frigb-dark": luminosity <= 128,
	          "frigb-light": luminosity > 128
	        }),
	        onMouseDown: this.startUpdates.bind(this),
	        onTouchStart: this.startUpdates.bind(this)
	      }, div({
	        className: "frigb-background",
	        style: {
	          backgroundColor: hue
	        }
	      }), div({
	        className: "frigb-pointer",
	        style: {
	          left: this.getPercentageValue(x),
	          bottom: this.getPercentageValue(y)
	        }
	      }));
	    }
	  }]);

	  var _default2 = _default;
	  _default = draggable(_default) || _default;
	  return _default;
	})(React.Component);

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(7);

	exports['default'] = function (componentClass) {

	  return (function (_React$Component) {
	    _inherits(_class, _React$Component);

	    function _class() {
	      _classCallCheck(this, _class);

	      _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, arguments);

	      this.state = { active: false };
	    }

	    _createClass(_class, [{
	      key: '_changeActive',
	      value: function _changeActive(newActive) {
	        this.setState({ active: newActive });
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        Object.assign(componentClass.prototype, {
	          componentDidMount: function componentDidMount() {
	            document.addEventListener('mousemove', this.handleUpdate.bind(this));
	            document.addEventListener('touchmove', this.handleUpdate.bind(this));
	            document.addEventListener('mouseup', this.stopUpdates.bind(this));
	            document.addEventListener('touchend', this.stopUpdates.bind(this));
	          },

	          componentWillUnmount: function componentWillUnmount() {
	            document.removeEventListener('mousemove', this.handleUpdate.bind(this));
	            document.removeEventListener('touchmove', this.handleUpdate.bind(this));
	            document.removeEventListener('mouseup', this.stopUpdates.bind(this));
	            document.removeEventListener('touchend', this.stopUpdates.bind(this));
	          },

	          getPosition: function getPosition(e) {
	            if (e.touches) e = e.touches[0];
	            return { x: e.clientX, y: e.clientY };
	          },

	          startUpdates: function startUpdates(e) {
	            var coords = this.getPosition(e);
	            this.props.activeLink.requestChange(true);
	            this._updatePosition(coords.x, coords.y);
	          },

	          handleUpdate: function handleUpdate(e) {
	            if (this.props.activeLink.value) {
	              e.preventDefault();
	              var coords = this.getPosition(e);
	              this._updatePosition(coords.x, coords.y);
	            }
	          },

	          stopUpdates: function stopUpdates() {
	            if (this.props.activeLink.value) {
	              this.props.activeLink.requestChange(false);
	            }
	          },

	          getPercentageValue: function getPercentageValue(value) {
	            return value / this.props.max * 100 + "%";
	          },

	          getScaledValue: function getScaledValue(value) {
	            var min = 0;
	            var max = 1;
	            var clamp = value < min ? min : value > max ? max : value;
	            return clamp * this.props.max;
	          }
	        });

	        var childProps = Object.assign({}, this.props, {
	          activeLink: {
	            value: this.state.active,
	            requestChange: this._changeActive.bind(this)
	          }
	        });

	        return React.createElement(componentClass, childProps);
	      }
	    }], [{
	      key: 'propTypes',
	      value: {
	        max: React.PropTypes.number
	      },
	      enumerable: true
	    }, {
	      key: 'defaultProps',
	      value: {
	        max: 1
	      },
	      enumerable: true
	    }]);

	    return _class;
	  })(React.Component);
	};

	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(7);
	var Colr = __webpack_require__(13);
	var draggable = __webpack_require__(16);
	var div = React.DOM.div;

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: '_updatePosition',
	    value: function _updatePosition(clientX, clientY) {
	      var rect = React.findDOMNode(this).getBoundingClientRect();
	      var hue = this.getScaledValue((rect.bottom - clientY) / rect.height);
	      var colr = Colr.fromHsv(hue, this.props.hsv.s, this.props.hsv.v);

	      this.props.colrLink.requestChange(colr);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return div({
	        className: "frigb-slider frigb-vertical",
	        onMouseDown: this.startUpdates.bind(this),
	        onTouchStart: this.startUpdates.bind(this)
	      }, div({
	        className: "frigb-track"
	      }), div({
	        className: "frigb-pointer",
	        style: {
	          "bottom": this.getPercentageValue(this.props.hsv.h)
	        }
	      }));
	    }
	  }], [{
	    key: 'defaultProps',
	    value: Object.assign(__webpack_require__(11)),
	    enumerable: true
	  }]);

	  var _default2 = _default;
	  _default = draggable(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(7);
	var _React$DOM = React.DOM;
	var div = _React$DOM.div;
	var span = _React$DOM.span;
	var i = _React$DOM.i;

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.friggingBootstrap.Errors";
	  }

	  _createClass(_default, [{
	    key: "render",
	    value: function render() {
	      return div({}, this.props.errors.map(function (error) {
	        return [div({ className: "col-xs-12" }, div({ className: "frigb-error", ref: "error-" + error }, div({ className: "alert alert-danger" }, i({ className: "fa fa-exclamation-circle" }), span({ className: "sr-only" }, "Error:"), " " + error, div({ className: "clearfix" }))))];
	      }));
	    }
	  }], [{
	    key: "defaultProps",
	    value: __webpack_require__(11),
	    enumerable: true
	  }]);

	  return _default;
	})(React.Component);

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(7);

	var _require = __webpack_require__(8);

	var errorList = _require.errorList;
	var sizeClassNames = _require.sizeClassNames;
	var formGroupCx = _require.formGroupCx;
	var label = _require.label;
	var savedNotification = _require.savedNotification;
	var _React$DOM = React.DOM;
	var div = _React$DOM.div;
	var input = _React$DOM.input;
	var img = _React$DOM.img;
	var span = _React$DOM.span;

	var cx = __webpack_require__(9);

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.friggingBootstrap.FileInput";
	  }

	  _createClass(_default, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.setState({ image: this.props.initialValue });
	    }
	  }, {
	    key: "_input",
	    value: function _input() {
	      return input(Object.assign({}, this.props.inputHtml, {
	        className: cx(this.props.className, "form-control"),
	        type: "file",
	        accept: "image/png,image/gif,image/jpeg",
	        ref: "frigFile",
	        valueLink: {
	          requestChange: this._loadFile.bind(this)
	        }
	      }));
	    }
	  }, {
	    key: "_loadFile",
	    value: function _loadFile() {
	      this.fReader = new FileReader();
	      this.fReader.onloadend = this._onFileLoad.bind(this);
	      var file = React.findDOMNode(this.refs.frigFile).files[0];
	      this.fReader.readAsDataURL(file);
	    }
	  }, {
	    key: "_onFileLoad",
	    value: function _onFileLoad() {
	      var v = this.fReader.result.slice(0);
	      this.props.valueLink.requestChange(v);
	    }
	  }, {
	    key: "_image",
	    value: function _image() {
	      if (this.props.valueLink.value == null) return "";
	      return img({
	        className: "thumbnail",
	        height: "125",
	        width: "125",
	        src: this.props.valueLink.value
	      });
	    }
	  }, {
	    key: "_inputPrefix",
	    value: function _inputPrefix() {
	      if (this.props.prefix == null) return "";
	      return div({ className: "input-group-addon" }, this.props.prefix);
	    }
	  }, {
	    key: "_inputSuffix",
	    value: function _inputSuffix() {
	      if (this.props.suffix == null) return "";
	      div({ className: "input-group-addon" }, this.props.suffix);
	    }
	  }, {
	    key: "_inputGroup",
	    value: function _inputGroup() {
	      if (this.props.prefix || this.props.suffix) {
	        return div({ className: "input-group" }, this._inputPrefix(), this._input(), this._inputSuffix());
	      } else {
	        return this._input();
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return div({ className: cx(sizeClassNames(this.props)) }, div({ className: formGroupCx(this.props) }, label(this.props), div({ className: "controls" }, div({ className: "image-upload" }, this._image(), this._inputGroup(), savedNotification({ parentProps: this.props }))), errorList(this.props.errors)));
	    }
	  }], [{
	    key: "defaultProps",
	    value: Object.assign(__webpack_require__(11), {
	      prefix: undefined,
	      suffix: undefined
	    }),
	    enumerable: true
	  }]);

	  return _default;
	})(React.Component);

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(7);
	var form = React.DOM.form;

	var FriggingBootstrapForm = (function (_React$Component) {
	  _inherits(FriggingBootstrapForm, _React$Component);

	  function FriggingBootstrapForm() {
	    _classCallCheck(this, FriggingBootstrapForm);

	    _get(Object.getPrototypeOf(FriggingBootstrapForm.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(FriggingBootstrapForm, [{
	    key: "_formHtml",
	    value: function _formHtml() {
	      var className = this.props.layout ? "form-" + this.props.layout : "";
	      return Object.assign({}, this.props.formHtml, {
	        className: ((this.props.formHtml.className || "") + " " + className).trim()
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return form(this._formHtml(), this.props.children);
	    }
	  }], [{
	    key: "defaultProps",
	    value: {
	      layout: __webpack_require__(11).layout
	    },
	    enumerable: true
	  }]);

	  return FriggingBootstrapForm;
	})(React.Component);

	exports["default"] = FriggingBootstrapForm;
	module.exports = exports["default"];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(7);

	var _require = __webpack_require__(8);

	var errorList = _require.errorList;
	var sizeClassNames = _require.sizeClassNames;
	var formGroupCx = _require.formGroupCx;
	var label = _require.label;

	var _require2 = __webpack_require__(8);

	var savedNotification = _require2.savedNotification;
	var _React$DOM = React.DOM;
	var div = _React$DOM.div;
	var input = _React$DOM.input;
	var span = _React$DOM.span;
	var p = _React$DOM.p;

	var _require3 = __webpack_require__(8);

	var inputContainerCx = _require3.inputContainerCx;

	var cx = __webpack_require__(9);

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.friggingBootstrap.Input";
	  }

	  _createClass(_default, [{
	    key: "_inputHtml",
	    value: function _inputHtml() {
	      return Object.assign({}, this.props.inputHtml, {
	        className: ((this.props.inputHtml.className || "") + " form-control").trim(),
	        valueLink: this.props.valueLink
	      });
	    }
	  }, {
	    key: "_inputPrefix",
	    value: function _inputPrefix() {
	      if (this.props.prefix == null) return "";
	      return div({ className: "input-group-addon" }, this.props.prefix);
	    }
	  }, {
	    key: "_input",
	    value: function _input() {
	      return this.props.inputWrapper(this._inputHtml());
	    }
	  }, {
	    key: "_inputSuffix",
	    value: function _inputSuffix() {
	      if (this.props.suffix == null) return "";
	      div({ className: "input-group-addon" }, this.props.suffix);
	    }
	  }, {
	    key: "_inputGroup",
	    value: function _inputGroup() {
	      if (this.props.prefix || this.props.suffix) {
	        return div({ className: "input-group" }, this._inputPrefix(), this._input(), savedNotification({ parentProps: this.props }), this._inputSuffix());
	      } else {
	        return div({}, this._input(), savedNotification({ parentProps: this.props }));
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return div({ className: cx(sizeClassNames(this.props)) }, div({ className: formGroupCx(this.props) }, label(this.props), div({ className: inputContainerCx(this.props) }, this._inputGroup(), errorList(this.props.errors))));
	    }
	  }], [{
	    key: "defaultProps",
	    value: Object.assign(__webpack_require__(11), {
	      // Bootstrap input addon texts
	      prefix: undefined,
	      suffix: undefined,
	      inputWrapper: input
	    }),
	    enumerable: true
	  }]);

	  return _default;
	})(React.Component);

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(7);
	var cx = __webpack_require__(9);

	var _require = __webpack_require__(8);

	var errorList = _require.errorList;
	var sizeClassNames = _require.sizeClassNames;
	var formGroupCx = _require.formGroupCx;
	var label = _require.label;

	var _require2 = __webpack_require__(8);

	var savedNotification = _require2.savedNotification;
	var div = React.DOM.div;

	var select = React.createFactory(__webpack_require__(10).ValueLinkedSelect);

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.friggingBootstrap.Select";
	  }

	  _createClass(_default, [{
	    key: "_inputHtml",
	    value: function _inputHtml() {
	      return Object.assign({}, this.props.inputHtml, {
	        key: "input",
	        className: "form-control",
	        valueLink: this.props.valueLink,
	        options: this.props.options
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return div({ className: cx(sizeClassNames(this.props)) }, div({ className: formGroupCx(this.props) }, label(this.props, { className: "" }), div({ className: "controls" }, select(this._inputHtml()), savedNotification({ parentProps: this.props }), errorList(this.props.errors))));
	    }
	  }], [{
	    key: "defaultProps",
	    value: __webpack_require__(11),
	    enumerable: true
	  }]);

	  return _default;
	})(React.Component);

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(7);
	var _React$DOM = React.DOM;
	var div = _React$DOM.div;
	var button = _React$DOM.button;

	var _require = __webpack_require__(8);

	var sizeClassNames = _require.sizeClassNames;

	var cx = __webpack_require__(9);

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.friggingBootstrap.Submit";
	  }

	  _createClass(_default, [{
	    key: "_inputCx",
	    value: function _inputCx() {
	      var _optionalClasses;

	      var optionalClasses = (_optionalClasses = {
	        "btn-block": this.props.block
	      }, _defineProperty(_optionalClasses, "btn-" + this.props.bsSize, this.props.bsSize != null), _defineProperty(_optionalClasses, "pull-right", this.props.align == "right"), _optionalClasses);
	      return cx(this.props.className, "btn btn-" + this.props.bsStyle, optionalClasses);
	    }
	  }, {
	    key: "_inputHtml",
	    value: function _inputHtml() {
	      return Object.assign({}, this.props.inputHtml, {
	        className: this._inputCx(),
	        type: "submit"
	      });
	    }
	  }, {
	    key: "_submitContainerCx",
	    value: function _submitContainerCx() {
	      var _props = this.props;
	      var layout = _props.layout;
	      var block = _props.block;

	      if (layout !== "horizontal") return "";
	      return cx({
	        "col-sm-9 col-sm-offset-3": block === false,
	        "col-sm-12": block === true
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return div({ className: cx(sizeClassNames(this.props)) }, div({ className: "form-group" }, div({ className: this._submitContainerCx() }, button(this._inputHtml(), this.props.title))));
	    }
	  }], [{
	    key: "defaultProps",
	    value: Object.assign({}, __webpack_require__(11), {
	      bsStyle: "default",
	      bsSize: undefined,
	      block: false
	    }),
	    enumerable: true
	  }]);

	  return _default;
	})(React.Component);

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(7);
	var cx = __webpack_require__(9);
	var booleanHOC = __webpack_require__(10).HigherOrderComponents.Boolean;

	var _require = __webpack_require__(8);

	var errorList = _require.errorList;
	var sizeClassNames = _require.sizeClassNames;
	var formGroupCx = _require.formGroupCx;
	var label = _require.label;

	var _require2 = __webpack_require__(8);

	var savedNotification = _require2.savedNotification;

	var _require3 = __webpack_require__(8);

	var inputContainerCx = _require3.inputContainerCx;
	var _React$DOM = React.DOM;
	var div = _React$DOM.div;
	var span = _React$DOM.span;

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.friggingBootstrap.Switch";
	  }

	  _createClass(_default, [{
	    key: "_isChecked",
	    value: function _isChecked() {
	      return this.props.valueLink.value;
	    }
	  }, {
	    key: "_onClick",
	    value: function _onClick() {
	      if (this.props.disabled === true) return;
	      this.props.valueLink.requestChange(!this.props.valueLink.value);
	    }
	  }, {
	    key: "_switchCx",
	    value: function _switchCx() {
	      var _cx;

	      return cx("bootstrap-switch", "bootstrap-switch-wrapper", "bootstrap-switch-on", "bootstrap-switch-id-switch-state", "bootstrap-switch-animate", (_cx = {}, _defineProperty(_cx, "bootstrap-switch-" + this.props.bsSize, this.props.bsSize != null), _defineProperty(_cx, "bootstrap-switch-disabled", this.props.disabled), _defineProperty(_cx, "pull-right", this.props.align == "right"), _cx));
	    }
	  }, {
	    key: "_switchStyle",
	    value: function _switchStyle() {
	      var handleWidth = this.props.handleWidth;

	      return { width: handleWidth ? handleWidth * 2 + 2 + "px" : undefined };
	    }
	  }, {
	    key: "_onSpanCx",
	    value: function _onSpanCx() {
	      return cx("bootstrap-switch-handle-on", _defineProperty({}, "bootstrap-switch-" + this.props.onColor, this.props.onColor != null));
	    }
	  }, {
	    key: "_offSpanCx",
	    value: function _offSpanCx() {
	      return cx("bootstrap-switch-handle-off", _defineProperty({}, "bootstrap-switch-" + this.props.offColor, this.props.offColor != null));
	    }
	  }, {
	    key: "_input",
	    value: function _input() {
	      var handleWidth = this.props.handleWidth;

	      var handleStyle = { width: handleWidth };
	      var checkedOffset = handleWidth ? handleWidth : 50;
	      return div({
	        className: "bootstrap-switch-container",
	        ref: "switchContainer",
	        onClick: this._onClick.bind(this),
	        style: {
	          marginLeft: this._isChecked() ? "0" : "-" + checkedOffset + "px",
	          width: handleWidth ? handleWidth * 3 : undefined
	        }
	      }, span({ className: this._onSpanCx(), style: handleStyle }, this.props.onText), span({ className: "bootstrap-switch-label", style: handleStyle }, " "), span({ className: this._offSpanCx(), style: handleStyle }, this.props.offText));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var handleWidth = this.props.handleWidth;

	      return div({ className: cx(sizeClassNames(this.props)) }, div({ className: formGroupCx(this.props) }, label(this.props), div({ className: inputContainerCx(this.props) }, savedNotification({ parentProps: this.props }), div({ className: this._switchCx(), style: this._switchStyle() }, this._input()), errorList(this.props.errors))));
	    }
	  }], [{
	    key: "defaultProps",
	    value: Object.assign(__webpack_require__(11), {
	      onColor: "primary",
	      onText: "ON",
	      offColor: "default",
	      offText: "OFF",
	      size: "normal",
	      disabled: false,
	      handleWidth: undefined
	    }),
	    enumerable: true
	  }]);

	  var _default2 = _default;
	  _default = booleanHOC(_default) || _default;
	  return _default;
	})(React.Component);

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(7);

	var _require = __webpack_require__(8);

	var errorList = _require.errorList;
	var sizeClassNames = _require.sizeClassNames;
	var formGroupCx = _require.formGroupCx;
	var label = _require.label;

	var _require2 = __webpack_require__(8);

	var savedNotification = _require2.savedNotification;
	var _React$DOM = React.DOM;
	var div = _React$DOM.div;
	var textarea = _React$DOM.textarea;
	var span = _React$DOM.span;

	var cx = __webpack_require__(9);

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.friggingBootstrap.Text";
	  }

	  _createClass(_default, [{
	    key: "_inputHtml",
	    value: function _inputHtml() {
	      return Object.assign({}, this.props.inputHtml, {
	        className: cx(this.props.className, "form-control"),
	        valueLink: this.props.valueLink,
	        rows: this.props.rows
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return div({ className: cx(sizeClassNames(this.props)) }, div({ className: formGroupCx(this.props) }, label(this.props), div({ className: "controls" }, textarea(this._inputHtml())), savedNotification({ parentProps: this.props }), errorList(this.props.errors)));
	    }
	  }], [{
	    key: "defaultProps",
	    value: Object.assign(__webpack_require__(11)),
	    enumerable: true
	  }]);

	  return _default;
	})(React.Component);

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(7);
	var cx = __webpack_require__(9);

	var Focusable = __webpack_require__(10).HigherOrderComponents.Focusable;

	var popup = React.createFactory(__webpack_require__(27));

	var _require = __webpack_require__(8);

	var errorList = _require.errorList;
	var sizeClassNames = _require.sizeClassNames;
	var formGroupCx = _require.formGroupCx;
	var label = _require.label;

	var _require2 = __webpack_require__(8);

	var savedNotification = _require2.savedNotification;
	var _React$DOM = React.DOM;
	var div = _React$DOM.div;
	var input = _React$DOM.input;
	var span = _React$DOM.span;

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.friggingBootstrap.TimePicker";
	  }

	  _createClass(_default, [{
	    key: "_inputCx",
	    value: function _inputCx() {
	      return cx(this.props.inputHtml.className, "frigb-timepicker-input", "form-control");
	    }
	  }, {
	    key: "_input",
	    value: function _input() {
	      return input(Object.assign({}, this.props.inputHtml, {
	        valueLink: this.props.valueLink,
	        className: this._inputCx()
	      }));
	    }
	  }, {
	    key: "_timePopup",
	    value: function _timePopup() {
	      if (this.props.focused === false) return;

	      return popup({
	        valueLink: this.props.valueLink
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return div({ className: cx(sizeClassNames(this.props)) }, div({ className: formGroupCx(this.props) }, div({}, label(this.props)), this._input(), savedNotification({ parentProps: this.props }), errorList(this.props.errors)), this._timePopup());
	    }
	  }], [{
	    key: "defaultProps",
	    value: Object.assign(__webpack_require__(11)),
	    enumerable: true
	  }]);

	  var _default2 = _default;
	  _default = Focusable(_default) || _default;
	  return _default;
	})(React.Component);

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x5, _x6, _x7) { var _again = true; _function: while (_again) { var object = _x5, property = _x6, receiver = _x7; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x5 = parent; _x6 = property; _x7 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(7);
	var BootstrapInput = __webpack_require__(21);
	var FrigInput = React.createFactory(__webpack_require__(10).Input);
	var BootstrapSwitch = __webpack_require__(24);
	var div = React.DOM.div;

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.friggingBootstrap.TimePickerPopup";
	  }

	  _createClass(_default, [{
	    key: "_getHour",

	    // Returns the number of hours from 12 to 1 to 11
	    value: function _getHour() {
	      var minutesSinceMidnight = arguments.length <= 0 || arguments[0] === undefined ? this._minutesSinceMidnight() : arguments[0];

	      var hour = this._hoursSinceMeridiem(minutesSinceMidnight);
	      if (hour === 0) hour = 12;
	      return hour;
	    }

	    // Returns the minutes portion of the valueLink's time value from 0 to 59
	  }, {
	    key: "_getMinutes",
	    value: function _getMinutes() {
	      var minutesSinceMidnight = arguments.length <= 0 || arguments[0] === undefined ? this._minutesSinceMidnight() : arguments[0];

	      if (minutesSinceMidnight < 0) minutesSinceMidnight = minutesSinceMidnight * -1;

	      return minutesSinceMidnight % 60;
	    }
	  }, {
	    key: "_isMeridiemAM",
	    value: function _isMeridiemAM() {
	      var _getValuesFromTimepicker2 = this._getValuesFromTimepicker();

	      var _getValuesFromTimepicker22 = _slicedToArray(_getValuesFromTimepicker2, 3);

	      var isAM = _getValuesFromTimepicker22[2];

	      return isAM;
	    }
	  }, {
	    key: "_onHourChange",
	    value: function _onHourChange(hour) {
	      var val = this._calculateHourChange(hour);

	      this._setMinutesSinceMidnight(val);
	    }
	  }, {
	    key: "_onMinutesChange",
	    value: function _onMinutesChange(minutes) {
	      var val = this._calculateMinutesChange(minutes);

	      this._setMinutesSinceMidnight(val);
	    }
	  }, {
	    key: "_onMeridiemChange",
	    value: function _onMeridiemChange(isAM) {
	      var _getValuesFromTimepicker3 = this._getValuesFromTimepicker();

	      var _getValuesFromTimepicker32 = _slicedToArray(_getValuesFromTimepicker3, 1);

	      var hours = _getValuesFromTimepicker32[0];

	      var val = this._calculateHourChange(hours);

	      this._setMinutesSinceMidnight(val, isAM);
	    }
	  }, {
	    key: "_calculateHourChange",
	    value: function _calculateHourChange(hour) {
	      hour = parseInt(hour) || 0;
	      hour = hour % 12;

	      return this._getMinutes() + hour * 60;
	    }
	  }, {
	    key: "_calculateMinutesChange",
	    value: function _calculateMinutesChange(minutes) {
	      minutes = parseInt(minutes) || 0;

	      return minutes + this._hoursSinceMeridiem() * 60;
	    }
	  }, {
	    key: "_hoursSinceMeridiem",
	    value: function _hoursSinceMeridiem() {
	      var minutesSinceMidnight = arguments.length <= 0 || arguments[0] === undefined ? this._minutesSinceMidnight() : arguments[0];

	      return Math.floor(minutesSinceMidnight / 60);
	    }
	  }, {
	    key: "_getValuesFromTimepicker",
	    value: function _getValuesFromTimepicker() {
	      var val = this.props.valueLink.value || "";

	      // Parsing the input string

	      var _val$split$map = val.split(":").map(function (s) {
	        return parseInt(s);
	      });

	      var _val$split$map2 = _slicedToArray(_val$split$map, 2);

	      var hours = _val$split$map2[0];
	      var minutes = _val$split$map2[1];

	      var isAM = /am$/i.test(val);

	      return [hours, minutes, isAM];
	    }
	  }, {
	    key: "_minutesSinceMidnight",
	    value: function _minutesSinceMidnight() {
	      var _getValuesFromTimepicker4 = this._getValuesFromTimepicker();

	      // Limiting the hours to a range of 0 to 11 and the minutes to 0 to 59

	      var _getValuesFromTimepicker42 = _slicedToArray(_getValuesFromTimepicker4, 2);

	      var hours = _getValuesFromTimepicker42[0];
	      var minutes = _getValuesFromTimepicker42[1];
	      hours = (hours || 0) % 12;
	      minutes = (minutes || 0) % 60;

	      // Calculating the number of minutes since midnight
	      return hours * 60 + minutes;
	    }
	  }, {
	    key: "_setMinutesSinceMidnight",
	    value: function _setMinutesSinceMidnight(m) {
	      var isAM = arguments.length <= 1 || arguments[1] === undefined ? this._isMeridiemAM() : arguments[1];

	      m = m % (12 * 60);

	      var hours = this._getHour(m);
	      var minutes = this._getMinutes(m);

	      var _getValuesFromTimepicker5 = this._getValuesFromTimepicker();

	      var _getValuesFromTimepicker52 = _slicedToArray(_getValuesFromTimepicker5, 3);

	      var currentMeridiem = _getValuesFromTimepicker52[2];

	      if (hours < 0) hours = 11;
	      if (hours === 12 && minutes === 0) isAM = !currentMeridiem;
	      minutes = minutes < 10 ? "0" + minutes : minutes;

	      var meridiem = isAM ? "AM" : "PM";

	      var s = hours + ":" + minutes + " " + meridiem;
	      this.props.valueLink.requestChange(s);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var inputPropOverrides = {
	        component: BootstrapInput,
	        required: false,
	        xs: 4
	      };

	      return div({ className: "frigb-popup-container popover bottom" }, div({ className: "arrow" }), div({ className: "row" }, FrigInput(Object.assign({}, this.props, inputPropOverrides, {
	        name: "hours",
	        inputHtml: {
	          type: "number",
	          step: 1
	        },
	        valueLink: {
	          value: this._getHour(),
	          requestChange: this._onHourChange.bind(this)
	        }
	      })), FrigInput(Object.assign({}, this.props, inputPropOverrides, {
	        name: "minutes",
	        valueLink: {
	          value: this._getMinutes(),
	          requestChange: this._onMinutesChange.bind(this)
	        },
	        inputHtml: {
	          type: "number",
	          step: 15
	        }
	      })), FrigInput(Object.assign({}, this.props, {
	        component: BootstrapSwitch,
	        required: false,
	        xs: 4,
	        name: "meridiem",
	        onText: "AM",
	        onColor: "warning",
	        offText: "PM",
	        offColor: "primary",
	        valueLink: {
	          value: this._isMeridiemAM(),
	          requestChange: this._onMeridiemChange.bind(this)
	        },
	        inputHtml: {
	          type: "switch"
	        }
	      }))));
	    }
	  }], [{
	    key: "defaultProps",
	    value: Object.assign(__webpack_require__(11)),
	    enumerable: true
	  }]);

	  return _default;
	})(React.Component);

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x5, _x6, _x7) { var _again = true; _function: while (_again) { var object = _x5, property = _x6, receiver = _x7; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x5 = parent; _x6 = property; _x7 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(29);
	var React = __webpack_require__(7);
	var cx = __webpack_require__(9);
	var fuzzy = __webpack_require__(30);
	var _React$DOM = React.DOM;
	var div = _React$DOM.div;
	var a = _React$DOM.a;
	var input = _React$DOM.input;
	var i = _React$DOM.i;
	var ul = _React$DOM.ul;
	var li = _React$DOM.li;
	var span = _React$DOM.span;

	var BootstrapInput = __webpack_require__(21);
	var FrigInput = React.createFactory(__webpack_require__(10).Input);

	var _require = __webpack_require__(8);

	var errorList = _require.errorList;
	var savedNotification = _require.savedNotification;

	var promisedTimeout = __webpack_require__(10).util.promisedTimeout;

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.friggingBootstrap.Typeahead";
	    this.state = {
	      persistedOptions: []
	    };
	  }

	  _createClass(_default, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this._updateInputValueFromProps(this.props);
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      this._updateInputValueFromProps(nextProps, this.props);
	    }
	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this._onDocumentClick = this._onDocumentClick.bind(this);
	      document.addEventListener("click", this._onDocumentClick);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      document.removeEventListener("click", this._onDocumentClick);
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (this.state.inputValue === prevState.inputValue) return;
	      this._onInputChange(this.state.inputValue);
	    }
	  }, {
	    key: "_updateInputValueFromProps",
	    value: function _updateInputValueFromProps(nextProps) {
	      var prevProps = arguments.length <= 1 || arguments[1] === undefined ? { valueLink: {} } : arguments[1];

	      if (nextProps.valueLink.value === (prevProps.valueLink || {}).value) return;
	      var selections = this._selections(nextProps);
	      if (this.props.multiple || selections.length != 1) return;
	      var value = selections[0].label;
	      if (value !== this.state.inputValue) this.setState({ inputValue: value });
	    }

	    // Select the user-entered option if they press enter
	  }, {
	    key: "_onKeyDown",
	    value: function _onKeyDown(e) {
	      if (!(e.key === 'Enter') || !this.props.multiple) return;
	      e.preventDefault();
	      var option = this._optionForCurrentInput();
	      if (option == null) {
	        // TODO: Present the user with an error if their input is not an option
	      } else {
	          this._select(option);
	        }
	    }
	  }, {
	    key: "_optionForCurrentInput",
	    value: function _optionForCurrentInput() {
	      var inputValue = arguments.length <= 0 || arguments[0] === undefined ? this._inputValue() : arguments[0];

	      var filter = function filter(o) {
	        return o.label === inputValue;
	      };
	      return this._options().filter(filter)[0];
	    }
	  }, {
	    key: "_select",
	    value: function _select(option, e) {
	      if (e != null) {
	        e.stopPropagation();
	        e.preventDefault();
	      }
	      // Reseting the suggestions and input text for multiple-selects and updating
	      // the input text for single-selects
	      this.setState({
	        inputValue: this.props.multiple ? "" : option.label,
	        // Selected options are persisted so that they are not lost when the
	        // props.options updates
	        persistedOptions: this.state.persistedOptions.concat(option)
	      });
	      var requestChange = this.props.valueLink.requestChange;
	      if (this.props.multiple) {
	        var values = (this.props.valueLink.value || []).concat(option.value);
	        requestChange(values);
	      } else {
	        requestChange(option.value);
	      }
	    }
	  }, {
	    key: "_deselect",
	    value: function _deselect(option, e) {
	      if (e != null) {
	        e.stopPropagation();
	        e.preventDefault();
	      }
	      var filter = function filter(o) {
	        return o.hash !== option.hash;
	      };
	      var persistedOptions = this.state.persistedOptions.filter(filter);
	      this.setState({ persistedOptions: persistedOptions });
	      if (this.props.multiple) {
	        var value = this.props.valueLink.value.filter(function (val) {
	          return JSON.stringify(val) !== option.hash;
	        });
	        this.props.valueLink.requestChange(value);
	      } else {
	        this.props.valueLink.requestChange(undefined);
	      }
	    }
	  }, {
	    key: "_onInputChange",
	    value: function _onInputChange(val) {
	      // select the user's input if it matches an option (single-selects only)
	      var option = this._optionForCurrentInput(val);
	      if (!this.props.multiple && option != null) this._select(option);
	    }
	  }, {
	    key: "_options",
	    value: function _options() {
	      var nextProps = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	      var options = nextProps.options;
	      options = (options || []).concat(this.state.persistedOptions);
	      var hashes = [];
	      // Adding hashes (for selection lookup) and removing duplicates
	      for (var _i in options) {
	        var hash = options[_i].hash = JSON.stringify(options[_i].value);
	        if (hashes.indexOf(hash) >= 0) delete options[_i];
	        hashes.push(hash);
	      }
	      return options;
	    }
	  }, {
	    key: "_selections",
	    value: function _selections() {
	      var nextProps = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	      var values = nextProps.valueLink.value;
	      if (values == null) return [];
	      if (!nextProps.multiple) values = [values];
	      var hashedValues = values.map(function (value) {
	        return JSON.stringify(value);
	      });
	      var options = this._options(nextProps);
	      return options.filter(function (o) {
	        return hashedValues.indexOf(o.hash) >= 0;
	      });
	    }
	  }, {
	    key: "_suggestions",
	    value: function _suggestions() {
	      // fuzzy match on the options
	      var fuzzyOpts = { extract: function extract(o) {
	          return o.label;
	        } };
	      var matches = fuzzy.filter(this._inputValue(), this._options(), fuzzyOpts);
	      var suggestions = matches.map(function (match) {
	        return match.original;
	      });
	      // filter out already selected options from the suggestions
	      var selectionHashes = this._selections().map(function (o) {
	        return o.hash;
	      });
	      suggestions = suggestions.filter(function (o) {
	        return selectionHashes.indexOf(o.hash) < 0;
	      });
	      // truncate the suggestions to it's max length
	      suggestions.length = Math.min(suggestions.length, this.props.maxSuggestions);
	      return suggestions;
	    }
	  }, {
	    key: "_selectionsList",
	    value: function _selectionsList() {
	      var _this = this;

	      if (!this.props.multiple || !this.props.displaySelections) return "";
	      var className = "label label-primary frigb-ta-selection";
	      var index = 0;
	      // if there are selected items and multiple is true return the actual list
	      return this._selections().map(function (o) {
	        return div({ className: className, key: "selection-" + index++ }, o.label, " ", i({
	          className: "fa fa-times",
	          onClick: _this._deselect.bind(_this, o),
	          title: "Remove from list"
	        }));
	      });
	    }

	    // Transfers focus to the nested React.DOM.input component
	    // (nested inside the FriggingBootstrapInput inside the FrigInput)
	  }, {
	    key: "_focusInput",
	    value: function _focusInput() {
	      React.findDOMNode(this._inputComponent).focus();
	    }
	  }, {
	    key: "_onDocumentClick",
	    value: function _onDocumentClick(e) {
	      var target = e.originalTarget ? e.originalTarget : e.srcElement;
	      var isInside = React.findDOMNode(this._wrapperComponent).contains(target);
	      if (!isInside) this.setState({ focused: false });
	    }
	  }, {
	    key: "_suggestionsList",
	    value: function _suggestionsList() {
	      var _this2 = this;

	      var suggestions = this._suggestions();
	      var wrapperCx = cx("dropdown", {
	        open: suggestions.length > 0 && this.state.focused
	      });
	      return div({ className: wrapperCx }, ul({ className: "dropdown-menu frigb-ta-suggestions col-xs-12" }, suggestions.map(function (o) {
	        return li({ key: "option-" + o.hash }, a({ href: "#", onClick: _this2._select.bind(_this2, o) }, o.label));
	      })));
	    }
	  }, {
	    key: "_inputWrapper",
	    value: function _inputWrapper(inputHtml) {
	      var _this3 = this;

	      var className = inputHtml.className;
	      inputHtml = Object.assign({}, inputHtml, {
	        className: "frigb-ta-input",
	        ref: function ref(component) {
	          return _this3._inputComponent = component;
	        },
	        onFocus: function onFocus() {
	          return _this3.setState({ focused: true });
	        }
	      });
	      inputHtml.onKeyDown = this._onKeyDown.bind(this);
	      return div({ className: "frigb-ta", ref: function ref(c) {
	          return _this3._wrapperComponent = c;
	        } }, div({ className: className, onClick: this._focusInput.bind(this) }, this._selectionsList(), input(inputHtml)), savedNotification({ parentProps: this.props }), this._suggestionsList(), errorList(this.state.errors));
	    }
	  }, {
	    key: "_inputValue",
	    value: function _inputValue() {
	      return this.state.inputValue || "";
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this4 = this;

	      var inputPropOverrides = {
	        component: BootstrapInput,
	        inputWrapper: this._inputWrapper.bind(this),
	        valueLink: {
	          value: this._inputValue(),
	          requestChange: function requestChange(inputValue) {
	            return _this4.setState({ inputValue: inputValue });
	          }
	        },
	        validate: false,
	        ref: "frigInput",
	        onComponentMount: function onComponentMount() {},
	        onComponentUnmount: function onComponentUnmount() {}
	      };
	      return FrigInput(Object.assign({}, this.props, inputPropOverrides));
	    }
	  }], [{
	    key: "defaultProps",
	    value: Object.assign(__webpack_require__(11), {
	      minLength: 3,
	      maxSuggestions: 5,
	      displaySelections: true
	    }),
	    enumerable: true
	  }]);

	  return _default;
	})(React.Component);

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	(function () {
	  'use strict';

	  if (self.fetch) {
	    return;
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = name.toString();
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name');
	    }
	    return name.toLowerCase();
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = value.toString();
	    }
	    return value;
	  }

	  function Headers(headers) {
	    this.map = {};

	    if (headers instanceof Headers) {
	      headers.forEach(function (value, name) {
	        this.append(name, value);
	      }, this);
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function (name) {
	        this.append(name, headers[name]);
	      }, this);
	    }
	  }

	  Headers.prototype.append = function (name, value) {
	    name = normalizeName(name);
	    value = normalizeValue(value);
	    var list = this.map[name];
	    if (!list) {
	      list = [];
	      this.map[name] = list;
	    }
	    list.push(value);
	  };

	  Headers.prototype['delete'] = function (name) {
	    delete this.map[normalizeName(name)];
	  };

	  Headers.prototype.get = function (name) {
	    var values = this.map[normalizeName(name)];
	    return values ? values[0] : null;
	  };

	  Headers.prototype.getAll = function (name) {
	    return this.map[normalizeName(name)] || [];
	  };

	  Headers.prototype.has = function (name) {
	    return this.map.hasOwnProperty(normalizeName(name));
	  };

	  Headers.prototype.set = function (name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)];
	  };

	  Headers.prototype.forEach = function (callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function (name) {
	      this.map[name].forEach(function (value) {
	        callback.call(thisArg, value, name, this);
	      }, this);
	    }, this);
	  };

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'));
	    }
	    body.bodyUsed = true;
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function (resolve, reject) {
	      reader.onload = function () {
	        resolve(reader.result);
	      };
	      reader.onerror = function () {
	        reject(reader.error);
	      };
	    });
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    reader.readAsArrayBuffer(blob);
	    return fileReaderReady(reader);
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    reader.readAsText(blob);
	    return fileReaderReady(reader);
	  }

	  var support = {
	    blob: 'FileReader' in self && 'Blob' in self && (function () {
	      try {
	        new Blob();
	        return true;
	      } catch (e) {
	        return false;
	      }
	    })(),
	    formData: 'FormData' in self
	  };

	  function Body() {
	    this.bodyUsed = false;

	    this._initBody = function (body) {
	      this._bodyInit = body;
	      if (typeof body === 'string') {
	        this._bodyText = body;
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body;
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body;
	      } else if (!body) {
	        this._bodyText = '';
	      } else {
	        throw new Error('unsupported BodyInit type');
	      }
	    };

	    if (support.blob) {
	      this.blob = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob');
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]));
	        }
	      };

	      this.arrayBuffer = function () {
	        return this.blob().then(readBlobAsArrayBuffer);
	      };

	      this.text = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text');
	        } else {
	          return Promise.resolve(this._bodyText);
	        }
	      };
	    } else {
	      this.text = function () {
	        var rejected = consumed(this);
	        return rejected ? rejected : Promise.resolve(this._bodyText);
	      };
	    }

	    if (support.formData) {
	      this.formData = function () {
	        return this.text().then(decode);
	      };
	    }

	    this.json = function () {
	      return this.text().then(JSON.parse);
	    };

	    return this;
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method;
	  }

	  function Request(url, options) {
	    options = options || {};
	    this.url = url;

	    this.credentials = options.credentials || 'omit';
	    this.headers = new Headers(options.headers);
	    this.method = normalizeMethod(options.method || 'GET');
	    this.mode = options.mode || null;
	    this.referrer = null;

	    if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests');
	    }
	    this._initBody(options.body);
	  }

	  function decode(body) {
	    var form = new FormData();
	    body.trim().split('&').forEach(function (bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	    return form;
	  }

	  function headers(xhr) {
	    var head = new Headers();
	    var pairs = xhr.getAllResponseHeaders().trim().split('\n');
	    pairs.forEach(function (header) {
	      var split = header.trim().split(':');
	      var key = split.shift().trim();
	      var value = split.join(':').trim();
	      head.append(key, value);
	    });
	    return head;
	  }

	  Body.call(Request.prototype);

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }

	    this._initBody(bodyInit);
	    this.type = 'default';
	    this.url = null;
	    this.status = options.status;
	    this.ok = this.status >= 200 && this.status < 300;
	    this.statusText = options.statusText;
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
	    this.url = options.url || '';
	  }

	  Body.call(Response.prototype);

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function (input, init) {
	    // TODO: Request constructor should accept input, init
	    var request;
	    if (Request.prototype.isPrototypeOf(input) && !init) {
	      request = input;
	    } else {
	      request = new Request(input, init);
	    }

	    return new Promise(function (resolve, reject) {
	      var xhr = new XMLHttpRequest();

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL;
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL');
	        }

	        return;
	      }

	      xhr.onload = function () {
	        var status = xhr.status === 1223 ? 204 : xhr.status;
	        if (status < 100 || status > 599) {
	          reject(new TypeError('Network request failed'));
	          return;
	        }
	        var options = {
	          status: status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        };
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };

	      xhr.onerror = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.open(request.method, request.url, true);

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true;
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob';
	      }

	      request.headers.forEach(function (value, name) {
	        xhr.setRequestHeader(name, value);
	      });

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	    });
	  };
	  self.fetch.polyfill = true;
	})();

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Fuzzy
	 * https://github.com/myork/fuzzy
	 *
	 * Copyright (c) 2012 Matt York
	 * Licensed under the MIT license.
	 */

	'use strict';

	(function () {

	  var root = this;

	  var fuzzy = {};

	  // Use in node or in browser
	  if (true) {
	    module.exports = fuzzy;
	  } else {
	    root.fuzzy = fuzzy;
	  }

	  // Return all elements of `array` that have a fuzzy
	  // match against `pattern`.
	  fuzzy.simpleFilter = function (pattern, array) {
	    return array.filter(function (string) {
	      return fuzzy.test(pattern, string);
	    });
	  };

	  // Does `pattern` fuzzy match `string`?
	  fuzzy.test = function (pattern, string) {
	    return fuzzy.match(pattern, string) !== null;
	  };

	  // If `pattern` matches `string`, wrap each matching character
	  // in `opts.pre` and `opts.post`. If no match, return null
	  fuzzy.match = function (pattern, string, opts) {
	    opts = opts || {};
	    var patternIdx = 0,
	        result = [],
	        len = string.length,
	        totalScore = 0,
	        currScore = 0,

	    // prefix
	    pre = opts.pre || '',

	    // suffix
	    post = opts.post || '',

	    // String to compare against. This might be a lowercase version of the
	    // raw string
	    compareString = opts.caseSensitive && string || string.toLowerCase(),
	        ch,
	        compareChar;

	    pattern = opts.caseSensitive && pattern || pattern.toLowerCase();

	    // For each character in the string, either add it to the result
	    // or wrap in template if its the next string in the pattern
	    for (var idx = 0; idx < len; idx++) {
	      ch = string[idx];
	      if (compareString[idx] === pattern[patternIdx]) {
	        ch = pre + ch + post;
	        patternIdx += 1;

	        // consecutive characters should increase the score more than linearly
	        currScore += 1 + currScore;
	      } else {
	        currScore = 0;
	      }
	      totalScore += currScore;
	      result[result.length] = ch;
	    }

	    // return rendered string if we have a match for every char
	    if (patternIdx === pattern.length) {
	      return { rendered: result.join(''), score: totalScore };
	    }

	    return null;
	  };

	  // The normal entry point. Filters `arr` for matches against `pattern`.
	  // It returns an array with matching values of the type:
	  //
	  //     [{
	  //         string:   '<b>lah' // The rendered string
	  //       , index:    2        // The index of the element in `arr`
	  //       , original: 'blah'   // The original element in `arr`
	  //     }]
	  //
	  // `opts` is an optional argument bag. Details:
	  //
	  //    opts = {
	  //        // string to put before a matching character
	  //        pre:     '<b>'
	  //
	  //        // string to put after matching character
	  //      , post:    '</b>'
	  //
	  //        // Optional function. Input is an element from the passed in
	  //        // `arr`, output should be the string to test `pattern` against.
	  //        // In this example, if `arr = [{crying: 'koala'}]` we would return
	  //        // 'koala'.
	  //      , extract: function(arg) { return arg.crying; }
	  //    }
	  fuzzy.filter = function (pattern, arr, opts) {
	    opts = opts || {};
	    return arr.reduce(function (prev, element, idx, arr) {
	      var str = element;
	      if (opts.extract) {
	        str = opts.extract(element);
	      }
	      var rendered = fuzzy.match(pattern, str, opts);
	      if (rendered != null) {
	        prev[prev.length] = {
	          string: rendered.rendered,
	          score: rendered.score,
	          index: idx,
	          original: element
	        };
	      }
	      return prev;
	    }, [])

	    // Sort by score. Browsers are inconsistent wrt stable/unstable
	    // sorting, so force stable by using the index in the case of tie.
	    // See http://ofb.net/~sethml/is-sort-stable.html
	    .sort(function (a, b) {
	      var compare = b.score - a.score;
	      if (compare) return compare;
	      return a.index - b.index;
	    });
	  };
	})();

/***/ }
/******/ ])
});
;