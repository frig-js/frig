(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Frig"] = factory(require("react"));
	else
		root["Frig"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

	var Form = __webpack_require__(1);
	var Input = __webpack_require__(3);
	var ValueLinkedSelect = __webpack_require__(12);
	var util = __webpack_require__(5);
	var dsl = __webpack_require__(13);

	module.exports = {
	  Form: Form,
	  Input: Input,
	  dsl: dsl,
	  util: util,
	  ValueLinkedSelect: ValueLinkedSelect,
	  typeMapping: __webpack_require__(11),
	  HigherOrderComponents: {
	    Boolean: __webpack_require__(14),
	    Focusable: __webpack_require__(15)
	  },
	  // Setter and getter for the Frig default theme
	  defaultTheme: function defaultTheme(theme) {
	    if (theme == null) return form.defaultProps.theme;
	    if (theme.component == null) throw "Invalid theme. Expected an object";
	    Form.originalClass.defaultProps.theme = theme;
	    Input.originalClass.defaultProps.theme = theme;
	  }
	};

/***/ },
/* 1 */
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

	var React = __webpack_require__(2);
	var frigInput = __webpack_require__(3);
	var propsClosure = __webpack_require__(9);
	var NestedFeildset = __webpack_require__(10);
	var ErrorsNormalizer = __webpack_require__(6);

	/*
	 * A JSX-compatible React DOM Component.
	 * FrigForm should be used as the top level component for Frig forms in JSX.
	 * In coffeescript FrigForm is called by FrigDSL.
	 */

	var FrigForm = (function (_React$Component) {
	  _inherits(FrigForm, _React$Component);

	  function FrigForm() {
	    _classCallCheck(this, _FrigForm);

	    _get(Object.getPrototypeOf(_FrigForm.prototype), "constructor", this).apply(this, arguments);

	    this._childComponentsByName = [];
	  }

	  _createClass(FrigForm, [{
	    key: "validate",

	    /*
	     * =========================================================================
	     * Public Functions
	     * =========================================================================
	     */

	    value: function validate() {
	      return this._childComponents().filter(function (c) {
	        return !c.validate();
	      }).length === 0;
	    }
	  }, {
	    key: "isValid",
	    value: function isValid() {
	      return this._childComponents().filter(function (c) {
	        return !c.isValid();
	      }).length === 0;
	    }
	  }, {
	    key: "isModified",
	    value: function isModified() {
	      return this._childComponents().filter(function (c) {
	        return c.isModified();
	      }).length !== 0;
	    }
	  }, {
	    key: "resetModified",
	    value: function resetModified() {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = this._childComponents()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var c = _step.value;
	          c.resetModified();
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
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = this._childComponents()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var c = _step2.value;
	          c.reset();
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

	    /*
	     * =========================================================================
	     * React Lifecycle + Render
	     * =========================================================================
	     */

	  }, {
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this._updateDataLink(this.props);
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      this._updateDataLink(nextProps);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      // Nested forms (forms inside nested fieldsets)
	      if (this.props.nestedForm) {
	        return React.DOM.div({}, this._friggingChildren());
	      }
	      // Top-level forms
	      else {
	          var themedForm = this.props.theme.component("form");
	          var props = this._themedFormProps();
	          var children = this._friggingChildren();
	          return React.createElement(themedForm, props, children);
	        }
	    }

	    /*
	     * =========================================================================
	     * Private functions
	     * =========================================================================
	     */

	  }, {
	    key: "_themedFormProps",
	    value: function _themedFormProps() {
	      var formProps = Object.assign({}, this.props);
	      formProps.formHtml = Object.assign({}, formProps.formHtml || {}, {
	        ref: "form",
	        onSubmit: this._onSubmit.bind(this)
	      });
	      return formProps;
	    }

	    // Generate the type mapping for an input component
	  }, {
	    key: "_typeMapping",
	    value: function _typeMapping() {
	      return Object.assign({}, __webpack_require__(11), this.props.theme.type_mapping);
	    }

	    /*
	     * Normalizes a valueLink-type data object out of the nextProps regardless of
	     * whether the nextProps.data is a value or value link and stores it in state.
	     *
	     * If the nextProps.data is a valueLink then state.dataLink is a reference
	     * to that same valueLink object.
	     *
	     * If the nextProps.data is not a valueLink then state.dataLink is a valueLink
	     * to this component's state (only updating it's internal value). In this
	     * scenario changes to nextProps.data will override any state stored in the
	     * dataLink.
	     */
	  }, {
	    key: "_updateDataLink",
	    value: function _updateDataLink(nextProps) {
	      var _this = this;

	      var data = nextProps.data || {};
	      var requestChange = data.requestChange;

	      var dataLink = {
	        value: (requestChange ? data.value : data) || {},
	        requestChange: requestChange || function (data) {
	          return _this._updateDataLink({ data: data });
	        }
	      };
	      this.setState({ dataLink: dataLink });
	    }
	  }, {
	    key: "_data",
	    value: function _data() {
	      return this.state.dataLink.value;
	    }

	    // Generates React DOM elements to pass to the themed form component as
	    // child components.
	  }, {
	    key: "_friggingChildren",
	    value: function _friggingChildren() {
	      return this.props.form(this._componentClasses());
	    }
	  }, {
	    key: "childComponentWillMount",
	    value: function childComponentWillMount(name, component) {
	      this._childComponentsByName[name] = component;
	    }
	  }, {
	    key: "childComponentWillUnmount",
	    value: function childComponentWillUnmount(name) {
	      delete this._childComponentsByName[name];
	    }
	  }, {
	    key: "_childComponents",
	    value: function _childComponents() {
	      var list = [];
	      var componentsByName = this._childComponentsByName;
	      for (var k in componentsByName) {
	        list.push(componentsByName[k]);
	      }return list;
	    }
	  }, {
	    key: "_onChildRequestChange",
	    value: function _onChildRequestChange(k, v) {
	      // Update the ReactLink with a copy of the existing data merged with this
	      // new input value
	      this.state.dataLink.requestChange(Object.assign({}, this._data(), _defineProperty({}, k, v)));
	    }
	  }, {
	    key: "_onSubmit",
	    value: function _onSubmit(e) {
	      if (!this.validate()) return e.preventDefault();
	      this.props.onSubmit(e);
	    }
	  }, {
	    key: "_guessInputType",
	    value: function _guessInputType(inputProps) {
	      var jsType = typeof inputProps.valueLink.value;
	      if (inputProps.type != null) {
	        return inputProps.type;
	      } else if (inputProps.multiple || Array.isArray(inputProps.initialValue)) {
	        return "multiselect";
	      } else if (inputProps.options != null) {
	        return "select";
	      } else if (jsType === "boolean") {
	        return "boolean";
	      } else if (jsType === "number") {
	        return "float";
	      } else if (inputProps.name.match(/password$/i)) {
	        return "password";
	      } else {
	        return "string";
	      }
	    }
	  }, {
	    key: "_getThemedInputComponent",
	    value: function _getThemedInputComponent(props, componentName) {
	      if (componentName == null) {
	        throw props.name + ": No type mapping found for type " + props.type;
	      }
	      var component = this.props.theme.component(componentName);
	      if (component == null) {
	        throw props.name + ": No " + componentName + " component found in theme";
	      }
	      return component;
	    }

	    /*
	     * =========================================================================
	     * DSL
	     * =========================================================================
	     */

	    /*
	     * Component classes for children
	     */
	  }, {
	    key: "_componentClasses",
	    value: function _componentClasses() {
	      if (this._componentClassesCache != null) return this._componentClassesCache;
	      return this._componentClassesCache = {
	        errors: this._errorsComponentClass(),
	        input: this._inputComponentClass(),
	        nestedFields: this._nestedFieldsComponentClass(),
	        submit: this._submitComponentClass()
	      };
	    }
	  }, {
	    key: "_errorsComponentClass",
	    value: function _errorsComponentClass() {
	      // Returning a input component modified with this form's defaults and
	      // overrides
	      var mapping = this._typeMapping().errors;
	      var component = this._getThemedInputComponent({}, mapping.component);
	      var _props = this.props;
	      var layout = _props.layout;
	      var align = _props.align;

	      return propsClosure(component, {
	        defaults: { key: "errors", layout: layout, align: align },
	        overrides: this._errorsOverrides.bind(this)
	      });
	    }
	  }, {
	    key: "_errorsOverrides",
	    value: function _errorsOverrides() {
	      return {
	        type: "errors",
	        errors: this.props.errors.base || []
	      };
	    }
	  }, {
	    key: "_nestedFieldsComponentClass",
	    value: function _nestedFieldsComponentClass() {
	      // Returning a frig form component with this form's props set as defaults
	      return propsClosure(NestedFeildset, {
	        defaults: this._nestedFieldsDefaults.bind(this)
	      });
	    }
	  }, {
	    key: "_nestedFieldsDefaults",
	    value: function _nestedFieldsDefaults(_ref) {
	      var name = _ref.name;

	      return {
	        key: name + "-nestedfields",
	        layout: this.props.layout,
	        align: this.props.align,
	        theme: this.props.theme,
	        typeMapping: this.props.typeMapping,
	        onComponentMount: this.childComponentWillMount.bind(this, [name]),
	        onComponentUnmount: this.childComponentWillUnmount.bind(this, [name]),
	        data: {
	          value: this._data()[name] || {},
	          requestChange: this._onChildRequestChange.bind(this, [name])
	        },
	        internalErrors: this.props.errors[name]
	      };
	    }

	    // Create a submit button
	    // value: [STRING] The label text for the submit button
	    // props: [OBJECT] properties to send to the React Component (see input props)
	  }, {
	    key: "_submitComponentClass",
	    value: function _submitComponentClass() {
	      // Returning a input component modified with this form's defaults and
	      // overrides
	      var mapping = this._typeMapping().submit;
	      var component = this._getThemedInputComponent({}, mapping.component);
	      var _props2 = this.props;
	      var layout = _props2.layout;
	      var align = _props2.align;

	      return propsClosure(component, {
	        defaults: { key: "submit", layout: layout, align: align },
	        overrides: this._submitOverrides.bind(this)
	      });
	    }
	  }, {
	    key: "_submitOverrides",
	    value: function _submitOverrides(submitProps) {
	      return {
	        type: "submit",
	        inputHtml: {
	          defaultValue: submitProps.value
	        }
	      };
	    }

	    // Creates a form field
	    // key: [STRING] the name of the field in the data
	    // props:
	    //   required: (default: true)
	    //   inputHtml: specify html attributes for the input React DOM element
	    //   labelHtml: specify html attributes for the label React DOM element
	    //   placeholder:
	    //     true: (default) adds a placeholder with a name based on a humanization
	    //           of the key
	    //     false: disables the placeholder
	    //     [STRING]: sets the placeholder to the given string
	    //  label:
	    //     true: (default) adds a label with a name based on a humanization
	    //           of the key
	    //     false: disables the label
	    //     [STRING]: sets the label to the given string
	  }, {
	    key: "_inputComponentClass",
	    value: function _inputComponentClass() {
	      // Returning a input component modified with this form's defaults and
	      // overrides
	      return propsClosure(frigInput, {
	        defaults: this._inputDefaults.bind(this),
	        overrides: this._inputOverrides.bind(this)
	      });
	    }
	  }, {
	    key: "_inputDefaults",
	    value: function _inputDefaults(_ref2) {
	      var name = _ref2.name;

	      return {
	        name: name,
	        layout: this.props.layout,
	        align: this.props.align,
	        key: name + "-input",
	        valueLink: {
	          value: this._data()[name],
	          requestChange: this._onChildRequestChange.bind(this, [name])
	        },
	        onComponentMount: this.childComponentWillMount.bind(this, [name]),
	        onComponentUnmount: this.childComponentWillUnmount.bind(this, [name]),
	        internalErrors: this.props.errors[name]
	      };
	    }
	  }, {
	    key: "_inputOverrides",
	    value: function _inputOverrides(inputProps) {
	      var name = inputProps.name;
	      // Guessing the type and using it to lookup the template
	      var type = this._guessInputType(inputProps);
	      // looking up the template name with the type mappings and the type
	      var mapping = this._typeMapping()[type];
	      var component = this._getThemedInputComponent(inputProps, mapping.component);
	      var inputHtmlDefaults = { type: mapping.htmlInputType };
	      // Generating the overrides object
	      return Object.assign({}, inputProps, {
	        type: type,
	        component: component,
	        ref: name + "Input",
	        inputHtml: Object.assign(inputHtmlDefaults, inputProps.inputHtml)
	      });
	    }
	  }], [{
	    key: "propTypes",
	    value: {
	      data: React.PropTypes.object.isRequired,
	      errors: React.PropTypes.object.isRequired,
	      form: React.PropTypes.func.isRequired,
	      theme: React.PropTypes.object.isRequired,
	      typeMapping: React.PropTypes.objectOf(React.PropTypes.string),
	      layout: React.PropTypes.string.isRequired,
	      align: React.PropTypes.string.isRequired,
	      // Callbacks
	      onSubmit: React.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: "defaultProps",
	    value: {
	      errors: [],
	      theme: undefined,
	      typeMapping: {},
	      layout: "vertical",
	      align: "left",
	      onSubmit: function onSubmit() {}
	    },
	    enumerable: true
	  }]);

	  var _FrigForm = FrigForm;
	  FrigForm = ErrorsNormalizer({ as: Object })(FrigForm) || FrigForm;
	  return FrigForm;
	})(React.Component);

	exports["default"] = FrigForm;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var frigValidations = __webpack_require__(4);

	var _require = __webpack_require__(5);

	var entries = _require.entries;
	var humanize = _require.humanize;

	var ErrorsNormalizer = __webpack_require__(6);

	var FrigInput = (function (_React$Component) {
	  _inherits(FrigInput, _React$Component);

	  function FrigInput() {
	    _classCallCheck(this, _FrigInput);

	    _get(Object.getPrototypeOf(_FrigInput.prototype), "constructor", this).apply(this, arguments);

	    this.state = {
	      modified: false,
	      validationRequested: false
	    };
	  }

	  _createClass(FrigInput, [{
	    key: "validate",

	    /*
	     * =========================================================================
	     * Public Functions
	     * =========================================================================
	     */

	    value: function validate() {
	      this.setState({ validationRequested: true });
	      return this.isValid();
	    }
	  }, {
	    key: "isValid",
	    value: function isValid() {
	      return this._errors() == null;
	    }
	  }, {
	    key: "isModified",
	    value: function isModified() {
	      return this.state.modified;
	    }
	  }, {
	    key: "resetModified",
	    value: function resetModified() {
	      this.setState({ modified: false });
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      this.setState({
	        modified: false,
	        validationRequested: false
	      });
	    }

	    /*
	     * =========================================================================
	     * React Lifecycle + Render
	     * =========================================================================
	     */

	  }, {
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.props.onComponentMount(this);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.props.onComponentUnmount(this);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return React.createElement(this.props.component, this._themedInputProps());
	    }

	    /*
	     * =========================================================================
	     * Private functions
	     * =========================================================================
	     */

	  }, {
	    key: "_errors",
	    value: function _errors() {
	      var value = arguments.length <= 0 || arguments[0] === undefined ? this._value() : arguments[0];

	      var errors = this.props.errors.slice();
	      var validate = (this.isModified() || this.state.validationRequested) && this.props.validate;
	      if (validate) {
	        // Running each validation
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = entries(this._validations())[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var _step$value = _slicedToArray(_step.value, 2);

	            var k = _step$value[0];
	            var validationOpts = _step$value[1];

	            if (validationOpts === false || validationOpts == null) continue;
	            var opts = {
	              data: this.props.data,
	              name: this.props.name,
	              value: value,
	              opts: validationOpts
	            };
	            errors = errors.concat(frigValidations[k](opts) || []);
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
	      }
	      // If there are no errors then errors should be falsie
	      if (errors.length === 0) errors = undefined;
	      // Return the errors
	      return errors;
	    }
	  }, {
	    key: "_value",
	    value: function _value() {
	      return this.props.valueLink.value;
	    }
	  }, {
	    key: "_themedInputProps",
	    value: function _themedInputProps() {
	      var nextProps = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	      var title = nextProps.title || humanize(nextProps.name);
	      // Defaults
	      var defaults = {
	        title: title,
	        label: title,
	        placeholder: title
	      };
	      // Mixing in the defaults
	      var themedProps = Object.assign(defaults, nextProps);
	      // Overrides
	      var overrides = {
	        options: (nextProps.options || []).map(this._normalizeOption),
	        modified: this.isModified(),
	        // DOM attributes for the label element
	        labelHtml: Object.assign({}, themedProps.labelHtml || {}, {
	          htmlFor: themedProps.name
	        }),
	        // DOM attributes + React ref + callbacks for the input element
	        inputHtml: Object.assign({}, themedProps.inputHtml || {}, {
	          onBlur: this._onBlur.bind(this),
	          autoFocus: themedProps.autoFocus,
	          className: themedProps.className,
	          disabled: themedProps.disabled,
	          multiple: themedProps.multiple,
	          name: themedProps.name,
	          placeholder: themedProps.placeholder,
	          // type:          themedProps.typeMapping[themedProps.type].htmlInputType,
	          ref: "input"
	        }),
	        valueLink: {
	          value: this._value(),
	          requestChange: this._onChange.bind(this)
	        },
	        errors: this._errors()
	      };
	      // TODO: Add type mapping
	      return Object.assign(themedProps, overrides);
	    }

	    /*
	     * Normalizes a set of arguments into an object with a value and a label
	     * to be used to generate an option DOM element for use in a select input.
	     * Accepts:
	     * - a string (taken as both the label and value)
	     * - an array of length 1 (first argument is both the label and value)
	     * - an array of length 2 (first argument is the value, second is the label)
	     * - an object with a value and label key (passthrough / no-change)
	     */
	  }, {
	    key: "_normalizeOption",
	    value: function _normalizeOption(option) {
	      if (option == null) return undefined;
	      // if option is an object with a label and a key return it unchanged
	      if (option.label != null && option.value != null) return option;
	      // converting option in the format of [key] to key
	      if (typeof option == "object" && option.length === 1) option = option[0];
	      // if option is in the format [key, value]
	      if (typeof option == "object" && option.length === 2) {
	        return {
	          value: option[0],
	          label: option[1]
	        };
	      }
	      // if option is in the format key
	      else {
	          return {
	            value: option,
	            label: option
	          };
	        }
	    }
	  }, {
	    key: "_validations",
	    value: function _validations() {
	      var nextProps = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	      // Validations (these get mixed into the overrides)
	      var defaults = {
	        required: true
	      };
	      var validations = {};
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = entries(frigValidations)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var _step2$value = _slicedToArray(_step2.value, 1);

	          var k = _step2$value[0];

	          validations[k] = nextProps[k] == null ? defaults[k] : nextProps[k];
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

	      return validations;
	    }
	  }, {
	    key: "_onChange",
	    value: function _onChange(val, opts) {
	      if (this.props.type === "submit") return;
	      // Set the state and run validations
	      if ((opts || {}).setModified !== false) this.setState({ modified: true });
	      var valid = this._errors(val) == null;
	      // Update the value link (used by Frig form components)
	      this.props.valueLink.requestChange(val, valid);
	      // Run the external callbacks (external API, not used by Frig internally)
	      this.props.onChange(val, valid);
	      if (valid) this.props.onValidChange(val, valid);
	    }
	  }, {
	    key: "_onBlur",
	    value: function _onBlur() {
	      this.validate();
	      var inputHtml = this.props.inputHtml;
	      if (inputHtml != null && inputHtml.onBlur != null) inputHtml.onBlur();
	    }
	  }], [{
	    key: "propTypes",
	    value: {
	      name: React.PropTypes.string.isRequired,
	      component: React.PropTypes.func.isRequired,
	      valueLink: React.PropTypes.object.isRequired,
	      theme: React.PropTypes.object.isRequired,
	      errors: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
	      type: React.PropTypes.string,
	      options: React.PropTypes.array,
	      layout: React.PropTypes.string,
	      className: React.PropTypes.string,
	      disabled: React.PropTypes.bool,
	      multiple: React.PropTypes.bool,
	      saved: React.PropTypes.bool,
	      validate: React.PropTypes.bool.isRequired,
	      // Callbacks (Public API)
	      onChange: React.PropTypes.func.isRequired,
	      onValidChange: React.PropTypes.func.isRequired,
	      // Callbacks (Private API - reserved for form use only)
	      onComponentMount: React.PropTypes.func.isRequired,
	      onComponentUnmount: React.PropTypes.func.isRequired
	    },
	    enumerable: true
	  }, {
	    key: "defaultProps",
	    value: {
	      theme: undefined,
	      validate: true,
	      saved: false,
	      errors: [],
	      onChange: function onChange() {},
	      onValidChange: function onValidChange() {},
	      onComponentMount: function onComponentMount() {},
	      onComponentUnmount: function onComponentUnmount() {}
	    },
	    enumerable: true
	  }]);

	  var _FrigInput = FrigInput;
	  FrigInput = ErrorsNormalizer({ as: Array })(FrigInput) || FrigInput;
	  return FrigInput;
	})(React.Component);

	exports["default"] = FrigInput;
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  required: function required(_ref) {
	    var value = _ref.value;

	    if (value != null && value !== "") return undefined;
	    return "This field is required.";
	  },

	  min: function min(_ref2) {
	    var value = _ref2.value;
	    var opts = _ref2.opts;

	    if (value >= opts || value != null || value === "") return undefined;
	    return "Value cannot be less than " + opts;
	  },

	  max: function max(_ref3) {
	    var value = _ref3.value;
	    var opts = _ref3.opts;

	    if (value <= opts || value != null || value === "") return undefined;
	    return "Value cannot be greater than " + opts;
	  }

	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var isConfigObj = undefined,
	    entries = undefined;
	var util = module.exports = {
	  /*
	   * Similar to the ECMA Script 7 proposed Object values function.
	   * Returns an array of [key, value] arrays.
	   * See http://stackoverflow.com/a/16643074/386193
	   */
	  entries: entries = function (object) {
	    var values = [];
	    for (var k in object) {
	      values.push([k, object[k]]);
	    }return values;
	  },

	  isConfigObj: isConfigObj = function (obj) {
	    var type = typeof obj;
	    return type !== "string" && type !== "number" && type !== "boolean" && type !== "function" && type !== "undefined" && obj != null && obj.length == null;
	  },

	  humanize: function humanize(key) {
	    if (key == null) return undefined;
	    var startOfWord = /([A-Z]|[0-9]+|_[a-z])/g;
	    var humanString = key.replace(startOfWord, " $1").replace(/_/g, "");
	    return humanString[0].toUpperCase() + humanString.slice(1).toLowerCase();
	  },

	  clone: function clone(obj) {
	    var objClone = {};
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = entries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var _step$value = _slicedToArray(_step.value, 2);

	        var k = _step$value[0];
	        var v = _step$value[1];
	        objClone[k] = v;
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

	    return objClone;
	  },

	  merge: function merge(target) {
	    target = target || {};
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	      for (var _len = arguments.length, others = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        others[_key - 1] = arguments[_key];
	      }

	      for (var _iterator2 = others[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var other = _step2.value;
	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;

	        try {
	          for (var _iterator3 = entries(other || {})[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var _step3$value = _slicedToArray(_step3.value, 2);

	            var k = _step3$value[0];
	            var v = _step3$value[1];
	            target[k] = v;
	          }
	        } catch (err) {
	          _didIteratorError3 = true;
	          _iteratorError3 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
	              _iterator3["return"]();
	            }
	          } finally {
	            if (_didIteratorError3) {
	              throw _iteratorError3;
	            }
	          }
	        }
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

	    return target;
	  },

	  promisedTimeout: function promisedTimeout(duration) {
	    return new Promise(function (resolve) {
	      return setTimeout(resolve, duration);
	    });
	  },

	  map: function map(array, fn) {
	    var out = [];
	    var _iteratorNormalCompletion4 = true;
	    var _didIteratorError4 = false;
	    var _iteratorError4 = undefined;

	    try {
	      for (var _iterator4 = array[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	        var k = _step4.value;
	        out.push(fn(k));
	      }
	    } catch (err) {
	      _didIteratorError4 = true;
	      _iteratorError4 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
	          _iterator4["return"]();
	        }
	      } finally {
	        if (_didIteratorError4) {
	          throw _iteratorError4;
	        }
	      }
	    }

	    return out;
	  },

	  mapObj: function mapObj(obj, fn) {
	    var out = {};
	    var _iteratorNormalCompletion5 = true;
	    var _didIteratorError5 = false;
	    var _iteratorError5 = undefined;

	    try {
	      for (var _iterator5 = entries(obj)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	        var _step5$value = _slicedToArray(_step5.value, 2);

	        var k = _step5$value[0];
	        var v = _step5$value[1];
	        out[k] = fn(k, v);
	      }
	    } catch (err) {
	      _didIteratorError5 = true;
	      _iteratorError5 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
	          _iterator5["return"]();
	        }
	      } finally {
	        if (_didIteratorError5) {
	          throw _iteratorError5;
	        }
	      }
	    }

	    return out;
	  },

	  // Takes a list of defaults to inherit from, the object itself and an optional
	  // callback parameter which can be used to adjust the value of each parameter.
	  // This function operates deeply on nested objects.
	  // The returned value has the following properties:
	  // * The keys are the superset of all keys from all the layer.
	  // * The keys are in the same order as the defaults with keys from other layers
	  //   being appended after the defaults.
	  setDefaults: function setDefaults() {
	    for (var _len2 = arguments.length, layers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      layers[_key2] = arguments[_key2];
	    }

	    var cb = layers.pop();
	    // No callback: Defaulting the callback to a passthrough function
	    if (typeof cb != "function") {
	      layers.push(cb);
	      cb = function (k, v) {
	        return v;
	      };
	    }
	    // setting the target to the first layer
	    var target = layers[layers.length - 1] || {};
	    // cloning and reversing the layers for use in the iterator
	    var reversedLayers = layers.slice(0).reverse();
	    // The iterator is used to set a final value for each key in the returned
	    // object
	    var iterator = function iterator(k) {
	      // Setting the value for non-objects by "failing through" the defaults
	      // until a non-null value is found
	      var val = undefined;
	      var _iteratorNormalCompletion6 = true;
	      var _didIteratorError6 = false;
	      var _iteratorError6 = undefined;

	      try {
	        for (var _iterator6 = reversedLayers[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	          var layer = _step6.value;

	          if (val == null) val = layer[k];
	        }
	      } catch (err) {
	        _didIteratorError6 = true;
	        _iteratorError6 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
	            _iterator6["return"]();
	          }
	        } finally {
	          if (_didIteratorError6) {
	            throw _iteratorError6;
	          }
	        }
	      }

	      return cb(k, val, layers);
	    };
	    // Recursively mapping the iterator over nested objects
	    var _iteratorNormalCompletion7 = true;
	    var _didIteratorError7 = false;
	    var _iteratorError7 = undefined;

	    try {
	      var _loop = function () {
	        var _step7$value = _slicedToArray(_step7.value, 2);

	        var k = _step7$value[0];
	        var v = _step7$value[1];

	        if (isConfigObj(layers[0][k])) {
	          var namespacedLayers = util.map(layers, function (layer) {
	            return layer[k] || {};
	          });
	          v = util.setDefaults.apply(util, _toConsumableArray(namespacedLayers).concat([cb]));
	        } else {
	          v = iterator(k);
	        }
	        target[k] = v;
	      };

	      for (var _iterator7 = entries(util.merge.apply(util, [{}].concat(layers)))[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	        _loop();
	      }
	    } catch (err) {
	      _didIteratorError7 = true;
	      _iteratorError7 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
	          _iterator7["return"]();
	        }
	      } finally {
	        if (_didIteratorError7) {
	          throw _iteratorError7;
	        }
	      }
	    }

	    return target;
	  },

	  capitalize: function capitalize(string) {
	    if (string == null) return undefined;
	    return "" + string[0].toUpperCase() + string.slice(1);
	  }

	};

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

	var React = __webpack_require__(2);
	var higherOrderComponent = __webpack_require__(7);

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.HigherOrderComponents.ErrorNormalizer";
	  }

	  _createClass(_default, [{
	    key: "_toErrorObject",
	    value: function _toErrorObject(errors) {
	      var isArray = Array.isArray(errors);
	      if (errors == null || isArray && errors.length == 0) return {};
	      // If errors is an array then convert it into an object. "base" is
	      // used to store all top-level errors that are not specific to an
	      // input.
	      if (isArray) errors = { base: errors };
	      return errors;
	    }
	  }, {
	    key: "_errors",
	    value: function _errors() {
	      var errors = {};
	      var _arr = ["errors", "internalErrors"];
	      for (var _i = 0; _i < _arr.length; _i++) {
	        var k = _arr[_i];
	        var errorsSubset = this._toErrorObject(this.props[k]);
	        for (var k2 in errorsSubset) {
	          errors[k2] = (errors[k2] || []).concat(errorsSubset[k2]);
	        }
	      }
	      return errors;
	    }
	  }, {
	    key: "_normalizedErrors",
	    value: function _normalizedErrors() {
	      var errors = this._errors();
	      // let normalizedErrorClass = opts.as
	      var normalizedErrorClass = this.opts().as;
	      // Convert the errors object into the normalized error class
	      if (normalizedErrorClass == Array) {
	        var errorsArray = [];
	        for (var k in errors) {
	          errorsArray = errorsArray.concat(errors[k]);
	        }return errorsArray;
	      } else if (normalizedErrorClass == Object) {
	        return errors;
	      } else {
	        throw "ErrorsNormalizer \"as\" attribute must be either Array or Object";
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var childProps = Object.assign({}, this.props, {
	        ref: "child",
	        errors: this._normalizedErrors()
	      });
	      delete childProps.internalErrors;

	      return React.createElement(this.componentClass(), childProps);
	    }
	  }], [{
	    key: "propTypes",
	    value: {
	      errors: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
	      internalErrors: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array])
	    },
	    enumerable: true
	  }]);

	  var _default2 = _default;
	  _default = higherOrderComponent()(_default) || _default;
	  return _default;
	})(React.Component);

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var delegatesPublicFunctions = __webpack_require__(8);

	/*
	 * Returns a higher order function version of the component.
	 *
	 * Adds a componentClass() function and an opts() function to the component
	 * for accessing the child component and the options argument to the higher
	 * order function.
	 */
	module.exports = function () {
	  return function (hocClass) {
	    return function (_opts) {
	      return function (_componentClass) {
	        var childName = _componentClass.prototype.displayName;
	        /*
	         * Creating a subclass of the higher order component with getters for
	         * the component class and opts.
	         */
	        return (function (_hocClass) {
	          _inherits(_class, _hocClass);

	          function _class() {
	            _classCallCheck(this, _class2);

	            _get(Object.getPrototypeOf(_class2.prototype), "constructor", this).apply(this, arguments);

	            this.displayName = hocClass.prototype.displayName + "(" + childName + ")";
	          }

	          _createClass(_class, [{
	            key: "componentClass",
	            value: function componentClass() {
	              return _componentClass;
	            }
	          }, {
	            key: "opts",
	            value: function opts() {
	              return _opts;
	            }
	          }], [{
	            key: "originalClass",
	            value: _componentClass.originalClass || _componentClass,
	            enumerable: true
	          }]);

	          var _class2 = _class;
	          _class = delegatesPublicFunctions(_componentClass)(_class) || _class;
	          return _class;
	        })(hocClass);
	      };
	    };
	  };
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (componentClass) {
	  return function (hoc) {
	    // delegate all the public functions of the child component to the child
	    var blackList = ["constructor", "state", "props", "componentWillMount", "componentDidMount", "componentWillReceiveProps", "componentWillUpdate", "render"];
	    var propertyNames = Object.getOwnPropertyNames(componentClass.prototype);
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      var _loop = function () {
	        var k = _step.value;

	        if (blackList.indexOf(k) != -1 || hoc[k] != null) return "continue";
	        if (!k.startsWith("_")) {
	          hoc.prototype[k] = function () {
	            var _refs$child;

	            return (_refs$child = this.refs.child)[k].apply(_refs$child, arguments);
	          };
	        }
	      };

	      for (var _iterator = propertyNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var _ret = _loop();

	        if (_ret === "continue") continue;
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
	  };
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);

	/*
	 * A higher order function wrapper for components that only allow true or false
	 * values in their valueLinks.
	 *
	 * This component will request a change to the valueLink for any non-boolean
	 * valueLink value to convert it into a boolean.
	 */
	module.exports = function (componentClass, opts) {
	  var childName = componentClass.prototype.displayName;

	  return (function (_React$Component) {
	    _inherits(_class, _React$Component);

	    function _class() {
	      _classCallCheck(this, _class);

	      _get(Object.getPrototypeOf(_class.prototype), "constructor", this).apply(this, arguments);

	      this.displayName = "Frig.HigherOrderComponents.PropsClosure(" + childName + ")";
	    }

	    _createClass(_class, [{
	      key: "componentDidMount",
	      value: function componentDidMount() {
	        var _this = this,
	            _arguments2 = arguments;

	        var _loop = function (k) {
	          _this[k] = function () {
	            var _refs$child;

	            return (_refs$child = _this.refs.child)[k].apply(_refs$child, _arguments2);
	          };
	        };

	        // Adding function proxies
	        for (var k in opts.functionProxies || []) {
	          _loop(k);
	        }
	      }
	    }, {
	      key: "_get",
	      value: function _get(k, props) {
	        if (typeof opts[k] == "function") {
	          return opts[k](props);
	        } else {
	          return opts[k];
	        }
	      }
	    }, {
	      key: "render",
	      value: function render() {
	        var childProps = {};
	        // Adding the defaults
	        childProps = Object.assign(childProps, this._get("defaults", this.props));
	        // Adding the props
	        childProps = Object.assign(childProps, this.props);
	        // Adding the overrides
	        childProps = Object.assign(childProps, this._get("overrides", childProps));
	        childProps.key = "child";
	        // Rendering
	        return React.createElement(componentClass, childProps);
	      }
	    }], [{
	      key: "defaultProps",
	      value: { ref: opts.ref, key: opts.key },
	      enumerable: true
	    }]);

	    return _class;
	  })(React.Component);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var div = React.DOM.div;

	var NestedFieldset = (function (_React$Component) {
	  _inherits(NestedFieldset, _React$Component);

	  function NestedFieldset() {
	    _classCallCheck(this, NestedFieldset);

	    _get(Object.getPrototypeOf(NestedFieldset.prototype), "constructor", this).apply(this, arguments);

	    this.state = {
	      invalidForms: []
	    };
	  }

	  _createClass(NestedFieldset, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.props.onComponentMount(this);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.props.onComponentUnmount(this);
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      // Truncating the invalid forms list to prevent ghosting of invalid
	      // forms that are removed in the props.
	      var invalidForms = this.state.invalidForms;
	      var numberOfForms = this._dataValues(nextProps).length;
	      invalidForms = invalidForms.slice(0, numberOfForms);
	      this.setState({ invalidForms: invalidForms });
	    }
	  }, {
	    key: "validate",
	    value: function validate() {
	      this._forms().forEach(function (form) {
	        return form.validate();
	      });
	      return this.isValid();
	    }
	  }, {
	    key: "isValid",
	    value: function isValid() {
	      return this._forms().every(function (form) {
	        return form.isValid();
	      });
	    }
	  }, {
	    key: "isModified",
	    value: function isModified() {
	      return this._forms().some(function (form) {
	        return form.isModified();
	      });
	    }
	  }, {
	    key: "resetModified",
	    value: function resetModified() {
	      this._forms().forEach(function (form) {
	        return form.resetModified();
	      });
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      this._forms().forEach(function (form) {
	        return form.reset();
	      });
	    }
	  }, {
	    key: "_forms",
	    value: function _forms() {
	      var _this = this;

	      return Object.keys(this.refs || {}).map(function (k) {
	        return _this.refs[k];
	      });
	    }
	  }, {
	    key: "_errorsForKey",
	    value: function _errorsForKey(errors, key) {
	      return Array.isArray(errors) ? errors[key] : errors;
	    }
	  }, {
	    key: "_formProps",
	    value: function _formProps(_ref) {
	      var _this2 = this;

	      var data = _ref.data;
	      var key = _ref.key;

	      return Object.assign({}, this.props, {
	        key: key,
	        ref: key,
	        form: function form(f) {
	          return _this2.props.form(f, key);
	        },
	        nestedForm: true,
	        errors: this._errorsForKey(this.props.errors, key),
	        internalErrors: this._errorsForKey(this.props.internalErrors, key),
	        data: {
	          value: data,
	          requestChange: this._onFormRequestChange.bind(this, key)
	        }
	      });
	    }
	  }, {
	    key: "_onFormRequestChange",
	    value: function _onFormRequestChange(key, formData, valid) {
	      var data = this.props.data.value;
	      // Combine the updated data from the form with the other forms or if this
	      // is a single form fieldset overwriting the previous form data.
	      if (Array.isArray(data)) {
	        data = data.slice();
	        data[key] = formData;
	      } else {
	        data = formData;
	      }
	      // Combine this valid flag with the other nested form valid flags and relay
	      // a valid state to the upstream only if all nested forms are valid
	      var invalidForms = this.state.invalidForms;
	      if (valid) {
	        invalidForms[key] = true;
	      } else {
	        delete invalidForms[key];
	      }
	      valid = invalidForms.filter(function (invalid) {
	        return invalid === true;
	      }).length === 0;
	      this.setState({ invalidForms: invalidForms });
	      // Relaying the request change to the upstream data
	      this.props.data.requestChange(data, valid);
	    }
	  }, {
	    key: "_dataValues",
	    value: function _dataValues() {
	      var nextProps = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	      var dataValues = nextProps.data.value || [];
	      return Array.isArray(dataValues) ? dataValues : [dataValues];
	    }
	  }, {
	    key: "_renderForm",
	    value: function _renderForm(formProps) {
	      var component = __webpack_require__(1);
	      return React.createElement(component, formProps);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this3 = this;

	      var i = 0;
	      var datas = this._dataValues();
	      return div({}, datas.map(function (data) {
	        return _this3._renderForm(_this3._formProps({ data: data, key: i++ }));
	      }));
	    }
	  }], [{
	    key: "propTypes",
	    value: {
	      form: React.PropTypes.func.isRequired,
	      // Provided by the parent Frig Form's HOC props closure
	      data: React.PropTypes.object.isRequired,
	      theme: React.PropTypes.object.isRequired,
	      typeMapping: React.PropTypes.objectOf(React.PropTypes.string),
	      errors: React.PropTypes.object
	    },
	    enumerable: true
	  }]);

	  return NestedFieldset;
	})(React.Component);

	exports["default"] = NestedFieldset;
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  form: { component: "form" },
	  errors: { component: "errors" },
	  submit: { component: "submit", htmlInputType: "submit" },
	  string: { component: "input", htmlInputType: "string" },
	  password: { component: "input", htmlInputType: "password" },
	  email: { component: "input", htmlInputType: "email" },
	  url: { component: "input", htmlInputType: "url" },
	  tel: { component: "input", htmlInputType: "tel" },
	  // search:       {component: "input",    htmlInputType: "search"},
	  // uuid:         {component: "input",    htmlInputType: "text"},
	  boolean: { component: "checkbox", htmlInputType: "checkbox" },
	  text: { component: "text" },
	  file: { component: "file", htmlInputType: "file" },
	  // hidden:       {component: "input",    htmlInputType: "hidden"},
	  // integer:      {component: "input",    htmlInputType: "number"},
	  float: { component: "input", htmlInputType: "number" },
	  // decimal:      {component: "input",    htmlInputType: "number"},
	  // range:        {component: "input",    htmlInputType: "range"},
	  "switch": { component: "switch" },
	  // datetime:     {component: "datetime"},
	  // date:         {component: "datetime"},
	  time: { component: "timepicker" },
	  select: { component: "select" },
	  typeahead: { component: "typeahead" },
	  color: { component: "color" }
	};
	// radioButtons: {component: "radioButtons"},
	// checkBoxes:   {component: "checkBoxes"},
	// country:      {component: "country"},
	// timeZone:     {component: "timeZone"},

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

	var React = __webpack_require__(2);
	var _React$DOM = React.DOM;

	/*
	 * A minimal wrapper for the select component to provide the correct value
	 * for valueLinks.
	 *
	 * Basically it's a solution to this: http://stackoverflow.com/q/24470852/386193
	 *
	 * Note: This class, unlike React.DOM.select, does not expect options to be
	 * passed as child components. Instead you should pass your options as an array
	 * of objects containing a label and a value.
	 *
	 * Example:
	 *
	 * ValueLinkedSelect({
	 *   options: [
	 *     {label: "Canada", value: "CA"}
	 *     {label: "United States", value: "US"}
	 *   ]
	 * })
	 *
	 * Asside from the options change and the fact that valueLink works else should
	 * be the same as React.DOM.select.
	 *
	 */
	var select = _React$DOM.select;
	var option = _React$DOM.option;

	var ValueLinkedSelect = (function (_React$Component) {
	  _inherits(ValueLinkedSelect, _React$Component);

	  function ValueLinkedSelect() {
	    _classCallCheck(this, ValueLinkedSelect);

	    _get(Object.getPrototypeOf(ValueLinkedSelect.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(ValueLinkedSelect, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      var hasOptions = (this.props.options || []).length !== 0;
	      if (hasOptions && this.props.valueLink.value == null) {
	        this._setInitialValue(this.props);
	      }
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      var hasOptions = (nextProps.options || []).length !== 0;
	      // Setting the intial value of the select when the options load
	      if (hasOptions && nextProps.valueLink.value == null) {
	        this._setInitialValue(nextProps);
	      }
	      // Nulling the select's value when the options are removed
	      if (!hasOptions && nextProps.valueLink.value != null) {
	        nextProps.valueLink.requestChange(undefined, { setModified: false });
	      }
	    }
	  }, {
	    key: "_setInitialValue",
	    value: function _setInitialValue(nextProps) {
	      var value = nextProps.valueLink.value || nextProps.options[0].value;
	      nextProps.valueLink.requestChange(value, { setModified: false });
	    }

	    // Reads the value from the DOM for the select input fields
	  }, {
	    key: "_getValue",
	    value: function _getValue() {
	      var el = React.findDOMNode(this.refs.input);
	      // The value is cast to a string when we get it from DOM.value. This is a
	      // mapping of those strings to their original values in the options list.
	      var originalValues = {};
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = this.props.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var _option = _step.value;

	          originalValues[_option.value.toString()] = _option.value;
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

	      if (el.type === "select-multiple") {
	        return (function () {
	          var _ref = [];
	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = el.options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var o = _step2.value;

	              if (o.selected) {
	                _ref.push(originalValues[o.value]);
	              }
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

	          return _ref;
	        })();
	      } else {
	        return originalValues[el.value] || el.value;
	      }
	    }
	  }, {
	    key: "_onChange",
	    value: function _onChange() {
	      this.props.valueLink.requestChange(this._getValue());
	    }
	  }, {
	    key: "_inputHtml",
	    value: function _inputHtml() {
	      var value = this.props.valueLink.value;
	      if (this.props.multiple) value = value.map(function (o) {
	        return o.value.toString();
	      });
	      var inputHtml = Object.assign({}, this.props, {
	        ref: "input",
	        valueLink: {
	          value: value,
	          requestChange: this._onChange.bind(this)
	        }
	      });
	      for (var k in ["valueLink", "options"]) {
	        delete inputHtml[k];
	      }return inputHtml;
	    }
	  }, {
	    key: "_selectOption",
	    value: function _selectOption(o) {
	      var attrs = {
	        key: "option-" + o.label,
	        value: o.value
	      };
	      return option(attrs, o.label);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return select(this._inputHtml(), this.props.options.map(this._selectOption));
	    }
	  }], [{
	    key: "propTypes",
	    value: {
	      options: React.PropTypes.array.isRequired,
	      valueLink: React.PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);

	  return ValueLinkedSelect;
	})(React.Component);

	exports["default"] = ValueLinkedSelect;
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(2);
	var frigForm = React.createFactory(__webpack_require__(1));
	var dslCallback = undefined;

	/*
	 * The DSL wraps each of the components passed to the frig form's "form"
	 * callback in a simplified interface.
	 *
	 * This is whats used behind the scenes of calls like `f.input("name", props)`
	 */
	var dsl = {
	  errors: function errors(component) {
	    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    props = Object.assign({ key: "frig-errors" }, props);
	    return React.createElement(component, props);
	  },

	  input: function input(component, name) {
	    var props = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    props = Object.assign({ key: "frig-" + name }, props, { name: name });
	    return React.createElement(component, props);
	  },

	  nestedFields: function nestedFields(component, name, props, form) {
	    if (props === undefined) props = {};

	    if (typeof props == "function") {
	      form = props;
	      props = {};
	    }
	    props = Object.assign({ key: "frig-" + name }, props, {
	      name: name,
	      form: dslCallback.bind(window, form)
	    });
	    return React.createElement(component, props);
	  },

	  submit: function submit(component, title) {
	    var props = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    if (arguments.length === 1 && typeof title != "string") {
	      props = title;
	      title = undefined;
	    }
	    props = Object.assign({ key: "frig-submit", title: title }, props);
	    return React.createElement(component, props);
	  }
	};

	/*
	 * Intercepts the "form" callback from a Frig form component and sends a
	 * coffeescript-style DSL to the callback instead of the usual JSX components
	 */
	dslCallback = function (formCallback, components) {
	  var dslInstance = {};
	  for (var k in dsl) {
	    dslInstance[k] = dsl[k].bind(window, components[k]);
	  }

	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  return formCallback.apply(undefined, [dslInstance].concat(args));
	};

	module.exports = {
	  frig: function frig(props, form) {
	    // inject the form content into the props
	    var formProps = Object.assign({}, props, {
	      form: dslCallback.bind(window, form)
	    });
	    // return the frig form component
	    return frigForm(formProps);
	  }

	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);

	/*
	 * A higher order function wrapper for components that only allow 2 possible
	 * values in their valueLinks (an onValue and an offValue - true and false by
	 * default).
	 *
	 * This component will request a change to the valueLink for any invalid
	 * valueLink value to convert it into the onValue or offValue.
	 */
	module.exports = function (componentClass) {
	  var childName = componentClass.prototype.displayName;

	  return (function (_React$Component) {
	    _inherits(_class, _React$Component);

	    function _class() {
	      _classCallCheck(this, _class);

	      _get(Object.getPrototypeOf(_class.prototype), "constructor", this).apply(this, arguments);

	      this.displayName = "Frig.HigherOrderComponents.Boolean(" + childName + ")";
	    }

	    _createClass(_class, [{
	      key: "componentWillMount",
	      value: function componentWillMount() {
	        this._normalizeValue(this.props);
	      }
	    }, {
	      key: "componentWillReceiveProps",
	      value: function componentWillReceiveProps(nextProps) {
	        this._normalizeValue(nextProps);
	      }
	    }, {
	      key: "_normalizeValue",
	      value: function _normalizeValue(nextProps) {
	        var value = nextProps.valueLink.value;
	        if (value !== this.props.offValue && value !== this.props.onValue) {
	          this._change(value != null, { setModified: false });
	        }
	      }

	      /*
	       * Intercept the nested component's true/false value change and convert it
	       * into an onValue or offValue before relaying it to the valueLink.
	       */
	    }, {
	      key: "_change",
	      value: function _change(val) {
	        var _props$valueLink;

	        var upstreamVal = val ? this.props.onValue : this.props.offValue;

	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }

	        (_props$valueLink = this.props.valueLink).requestChange.apply(_props$valueLink, [upstreamVal].concat(args));
	      }
	    }, {
	      key: "render",
	      value: function render() {
	        var childProps = Object.assign({}, this.props, {
	          valueLink: {
	            value: this.props.valueLink.value === this.props.onValue,
	            requestChange: this._change.bind(this)
	          }
	        });
	        return React.createElement(componentClass, childProps);
	      }
	    }], [{
	      key: "propTypes",
	      value: {
	        valueLink: React.PropTypes.object.isRequired,
	        onValue: React.PropTypes.any.isRequired,
	        offValue: React.PropTypes.any.isRequired
	      },
	      enumerable: true
	    }, {
	      key: "defaultProps",
	      value: {
	        onValue: true,
	        offValue: false
	      },
	      enumerable: true
	    }]);

	    return _class;
	  })(React.Component);
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);

	/*
	 * A higher order component that passes a focused attribute to it's child
	 * component. The focused is true when the component should be focused
	 * (ie. when it is clicked on or tabbed into) and false when it is not (ie.
	 * initially, when it is clicked off of and when another input is selected).
	 *
	 * This is useful for implementing popups in Frig Themes.
	 */
	module.exports = function (componentClass) {
	  var childName = componentClass.prototype.displayName;

	  return (function (_React$Component) {
	    _inherits(_class, _React$Component);

	    function _class() {
	      _classCallCheck(this, _class);

	      _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this);
	      this.state = {
	        focused: false
	      };
	      this.displayName = "Frig.HigherOrderComponents.Focusable(" + childName + ")";
	      this._onDocumentClick = this._onDocumentClick.bind(this);
	      this._onFocus = this._onFocus.bind(this);
	    }

	    _createClass(_class, [{
	      key: "componentDidMount",
	      value: function componentDidMount() {
	        window.addEventListener("click", this._onDocumentClick);
	        window.addEventListener("focus", this._onFocus, true);
	      }
	    }, {
	      key: "componentWillUnmount",
	      value: function componentWillUnmount() {
	        window.removeEventListener("click", this._onDocumentClick);
	        window.removeEventListener("focus", this._onFocus);
	      }
	    }, {
	      key: "_onDocumentClick",
	      value: function _onDocumentClick(e) {
	        this.setState({ focused: this._containsDOMElement(e.target) });
	      }
	    }, {
	      key: "_onFocus",
	      value: function _onFocus(e) {
	        this.setState({ focused: this._containsDOMElement(document.activeElement) });
	      }
	    }, {
	      key: "_containsDOMElement",
	      value: function _containsDOMElement(otherElement) {
	        var el = React.findDOMNode(this);
	        return el == otherElement || el.contains(otherElement);
	      }
	    }, {
	      key: "render",
	      value: function render() {
	        var childProps = Object.assign({}, this.props, {
	          focused: this.state.focused
	        });
	        return React.createElement(componentClass, childProps);
	      }
	    }]);

	    return _class;
	  })(React.Component);
	};

/***/ }
/******/ ])
});
;