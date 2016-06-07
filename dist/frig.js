(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Frig"] = factory(require("react"), require("react-dom"));
	else
		root["Frig"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_17__) {
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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.factories = exports.util = exports.HigherOrderComponents = exports.FieldsetText = exports.Fieldset = exports.FormErrorList = exports.Submit = exports.UnboundInput = exports.Input = exports.Form = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _form = __webpack_require__(1);

	var _form2 = _interopRequireDefault(_form);

	var _input = __webpack_require__(4);

	var _input2 = _interopRequireDefault(_input);

	var _unbound_input = __webpack_require__(5);

	var _unbound_input2 = _interopRequireDefault(_unbound_input);

	var _submit = __webpack_require__(9);

	var _submit2 = _interopRequireDefault(_submit);

	var _form_error_list = __webpack_require__(10);

	var _form_error_list2 = _interopRequireDefault(_form_error_list);

	var _fieldset = __webpack_require__(11);

	var _fieldset2 = _interopRequireDefault(_fieldset);

	var _fieldset_text = __webpack_require__(13);

	var _fieldset_text2 = _interopRequireDefault(_fieldset_text);

	var _util = __webpack_require__(7);

	var _util2 = _interopRequireDefault(_util);

	var _type_mapping = __webpack_require__(8);

	var _type_mapping2 = _interopRequireDefault(_type_mapping);

	var _factories = __webpack_require__(14);

	var factories = _interopRequireWildcard(_factories);

	var _boolean = __webpack_require__(15);

	var _boolean2 = _interopRequireDefault(_boolean);

	var _focusable = __webpack_require__(16);

	var _focusable2 = _interopRequireDefault(_focusable);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HigherOrderComponents = {
	  Boolean: _boolean2.default,
	  Focusable: _focusable2.default
	};

	// Setter and getter for the Frig default theme
	function defaultTheme(theme) {
	  if (theme == null) return _form2.default.defaultProps.theme;
	  if ((typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
	    throw new Error('Invalid Frig theme. Expected an object');
	  }
	  _form2.default.defaultProps.theme = theme;
	  _unbound_input2.default.defaultProps.theme = theme;
	  return true;
	}

	// This is so consumers can call `Frig.defaultTheme()`.
	// All other exports are named and must be imported/destructured.
	exports.default = {
	  defaultTheme: defaultTheme,
	  typeMapping: _type_mapping2.default
	};
	exports.Form = _form2.default;
	exports.Input = _input2.default;
	exports.UnboundInput = _unbound_input2.default;
	exports.Submit = _submit2.default;
	exports.FormErrorList = _form_error_list2.default;
	exports.Fieldset = _fieldset2.default;
	exports.FieldsetText = _fieldset_text2.default;
	exports.HigherOrderComponents = HigherOrderComponents;
	exports.util = _util2.default;
	exports.factories = factories;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _abstract_form = __webpack_require__(3);

	var _abstract_form2 = _interopRequireDefault(_abstract_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*
	 * A JSX-compatible React DOM Component.
	 * Form should be used as the top level component above any other frig
	 * components.
	 */
	var Form = (_temp2 = _class = function (_AbstractForm) {
	  _inherits(Form, _AbstractForm);

	  function Form() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Form);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Form)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.displayName = 'Form', _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Form, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (!this.props.data) {
	        throw new Error('<Form data={} /> must always be defined, got: ' + this.props.data);
	      }
	      if (!this.props.onChange) {
	        throw new Error('<Form onChange={} /> must always be defined, got: ' + this.props.onChange);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var ThemedForm = this.props.theme.Form;
	      return _react2.default.createElement(
	        ThemedForm,
	        _extends({}, this._themedFormProps(), {
	          ref: 'form'
	        }),
	        this.props.children
	      );
	    }
	  }]);

	  return Form;
	}(_abstract_form2.default), _class.propTypes = {
	  data: _react2.default.PropTypes.object.isRequired,
	  onChange: _react2.default.PropTypes.func.isRequired,
	  errors: _react2.default.PropTypes.object.isRequired,
	  saved: _react2.default.PropTypes.object.isRequired,
	  theme: _react2.default.PropTypes.object.isRequired,
	  typeMapping: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.string),
	  layout: _react2.default.PropTypes.string.isRequired,
	  align: _react2.default.PropTypes.string.isRequired,
	  // Callbacks
	  onSubmit: _react2.default.PropTypes.func
	}, _class.defaultProps = {
	  errors: {},
	  saved: {},
	  theme: undefined,
	  typeMapping: {},
	  layout: 'vertical',
	  align: 'left',
	  onSubmit: function onSubmit() {}
	}, _class.childContextTypes = _abstract_form2.default.childContextTypes, _temp2);
	exports.default = Form;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Note about eslint rule below:
	// AbstractForm does not have a render() method (Form and FieldsetNestedForm do).
	// ESLint complains about render "not having a return statement", when really
	// there is no render method at all.
	var AbstractForm = (_temp2 = _class = function (_React$Component) {
	  _inherits(AbstractForm, _React$Component);

	  function AbstractForm() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, AbstractForm);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(AbstractForm)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._childComponentsByName = {}, _this.childComponentWillMount = function (name, component) {
	      _this._childComponentsByName[name] = component;
	    }, _this.childComponentWillUnmount = function (name) {
	      delete _this._childComponentsByName[name];
	    }, _this._onChildRequestChange = function (k, v) {
	      // Update the onChange listener with a copy of the existing data merged with
	      // this new input value
	      _this.props.onChange(Object.assign({}, _this.props.data, _defineProperty({}, k, v)));
	    }, _this._onSubmit = function (e) {
	      if (!_this.validate()) return e.preventDefault();
	      return _this.props.onSubmit(e);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  } // eslint-disable-line react/require-render-return,max-len


	  _createClass(AbstractForm, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      var _props = this.props;
	      var align = _props.align;
	      var layout = _props.layout;
	      var theme = _props.theme;
	      var errors = _props.errors;
	      var saved = _props.saved;
	      var data = _props.data;

	      return {
	        frigForm: {
	          align: align,
	          layout: layout,
	          theme: theme,
	          errors: errors,
	          saved: saved,
	          data: data,
	          requestChildComponentChange: this._onChildRequestChange,
	          childComponentWillMount: this.childComponentWillMount,
	          childComponentWillUnmount: this.childComponentWillUnmount,
	          submit: this._onSubmit
	        }
	      };
	    }
	  }, {
	    key: 'validate',


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
	    key: 'isValid',
	    value: function isValid() {
	      return this._childComponents().filter(function (c) {
	        return !c.isValid();
	      }).length === 0;
	    }
	  }, {
	    key: 'isModified',
	    value: function isModified() {
	      return this._childComponents().filter(function (c) {
	        return c.isModified();
	      }).length !== 0;
	    }
	  }, {
	    key: 'modifications',
	    value: function modifications() {
	      var _this2 = this;

	      var modifications = {};
	      var names = Object.keys(this._childComponentsByName);
	      names.forEach(function (name) {
	        var c = _this2._childComponentsByName[name];
	        if (c.isModified()) {
	          var isFieldset = c.modifications != null;
	          modifications[name] = isFieldset ? c.modifications() : true;
	        }
	      });
	      return modifications;
	    }
	  }, {
	    key: 'resetModified',
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
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'reset',
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
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'formData',
	    value: function formData() {
	      return new FormData(this.refs.form);
	    }

	    /*
	     * =========================================================================
	     * Private functions
	     * =========================================================================
	     */

	  }, {
	    key: '_themedFormProps',
	    value: function _themedFormProps() {
	      var formProps = Object.assign({}, this.props);
	      formProps.formHtml = Object.assign({}, formProps.formHtml || {}, {
	        onSubmit: this._onSubmit.bind(this)
	      });
	      return formProps;
	    }
	  }, {
	    key: '_childComponents',
	    value: function _childComponents() {
	      var componentsByName = this._childComponentsByName;
	      return Object.keys(componentsByName).map(function (k) {
	        return componentsByName[k];
	      });
	    }
	  }]);

	  return AbstractForm;
	}(_react2.default.Component), _class.childContextTypes = {
	  frigForm: _react2.default.PropTypes.object
	}, _class.propTypes = {
	  align: _react2.default.PropTypes.string.isRequired,
	  layout: _react2.default.PropTypes.string.isRequired,
	  theme: _react2.default.PropTypes.object.isRequired,
	  errors: _react2.default.PropTypes.object.isRequired,
	  saved: _react2.default.PropTypes.object.isRequired,
	  data: _react2.default.PropTypes.object.isRequired,
	  onChange: _react2.default.PropTypes.func.isRequired,
	  onSubmit: _react2.default.PropTypes.func
	}, _temp2);
	exports.default = AbstractForm;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _unbound_input = __webpack_require__(5);

	var _unbound_input2 = _interopRequireDefault(_unbound_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Input = (_temp2 = _class = function (_React$Component) {
	  _inherits(Input, _React$Component);

	  function Input() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Input);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Input)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.displayName = 'Frig.Input', _this._onChange = function (val, valid) {
	      // Update the value link (used by Frig form components)
	      _this.context.frigForm.requestChildComponentChange(_this.props.name, val);
	      // Run the external callbacks (external API, not used by Frig internally)
	      _this.props.onChange(val, valid);
	      if (valid) _this.props.onValidChange(val, valid);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Input, [{
	    key: 'componentWillMount',


	    /*
	     * =========================================================================
	     * React Lifecycle
	     * =========================================================================
	     */

	    value: function componentWillMount() {
	      this.context.frigForm.childComponentWillMount(this.props.name, this);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.context.frigForm.childComponentWillUnmount(this.props.name, this);
	    }

	    /*
	     * =========================================================================
	     * Public Functions
	     * =========================================================================
	     */

	  }, {
	    key: 'validate',
	    value: function validate() {
	      /* istanbul ignore next */
	      return this.refs.unboundInput.validate();
	    }
	  }, {
	    key: 'isValid',
	    value: function isValid() {
	      /* istanbul ignore next */
	      return this.refs.unboundInput.isValid();
	    }
	  }, {
	    key: 'isModified',
	    value: function isModified() {
	      /* istanbul ignore next */
	      return this.refs.unboundInput.isModified();
	    }
	  }, {
	    key: 'resetModified',
	    value: function resetModified() {
	      /* istanbul ignore next */
	      return this.refs.unboundInput.resetModified();
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      /* istanbul ignore next */
	      return this.refs.unboundInput.reset();
	    }

	    /*
	     * =========================================================================
	     * Private functions
	     * =========================================================================
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var value = this.context.frigForm.data[this.props.name];

	      return _react2.default.createElement(_unbound_input2.default, _extends({}, this.props, {
	        ref: 'unboundInput',
	        errors: (this.props.errors || []).slice().concat(this.context.frigForm.errors[this.props.name] || []),
	        saved: this.context.frigForm.saved[this.props.name],
	        value: value == null ? '' : value,
	        onChange: this._onChange
	      }));
	    }
	  }]);

	  return Input;
	}(_react2.default.Component), _class.propTypes = {
	  name: _react2.default.PropTypes.string.isRequired,
	  errors: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
	  layout: _react2.default.PropTypes.string,
	  align: _react2.default.PropTypes.string,
	  className: _react2.default.PropTypes.string,
	  disabled: _react2.default.PropTypes.bool,
	  multiple: _react2.default.PropTypes.bool,
	  type: _react2.default.PropTypes.string,
	  options: _react2.default.PropTypes.array,
	  validate: _react2.default.PropTypes.bool,
	  // Callbacks (Public API)
	  onChange: _react2.default.PropTypes.func.isRequired,
	  onValidChange: _react2.default.PropTypes.func.isRequired
	}, _class.contextTypes = {
	  frigForm: _react2.default.PropTypes.shape({
	    data: _react2.default.PropTypes.object.isRequired,
	    theme: _react2.default.PropTypes.object.isRequired,
	    errors: _react2.default.PropTypes.object.isRequired,
	    layout: _react2.default.PropTypes.string.isRequired,
	    align: _react2.default.PropTypes.string.isRequired,
	    saved: _react2.default.PropTypes.object.isRequired,
	    // Callbacks (Private API - reserved for frig form use only)
	    requestChildComponentChange: _react2.default.PropTypes.func.isRequired,
	    childComponentWillMount: _react2.default.PropTypes.func.isRequired,
	    childComponentWillUnmount: _react2.default.PropTypes.func.isRequired
	  }).isRequired
	}, _class.defaultProps = {
	  validate: true,
	  disabled: false,
	  errors: [],
	  onChange: function onChange() {},
	  onValidChange: function onValidChange() {}
	}, _temp2);
	exports.default = Input;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _validations2 = __webpack_require__(6);

	var _validations3 = _interopRequireDefault(_validations2);

	var _util = __webpack_require__(7);

	var _type_mapping = __webpack_require__(8);

	var _type_mapping2 = _interopRequireDefault(_type_mapping);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UnboundInput = (_temp2 = _class = function (_React$Component) {
	  _inherits(UnboundInput, _React$Component);

	  function UnboundInput() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, UnboundInput);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(UnboundInput)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.displayName = 'Frig.UnboundInput', _this.state = {
	      modified: false,
	      validationRequested: false
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(UnboundInput, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this._warnIfDuplicateOptionValue();
	    }

	    /*
	     * =========================================================================
	     * Public Functions
	     * =========================================================================
	     */

	  }, {
	    key: 'validate',
	    value: function validate() {
	      this.setState({ validationRequested: true });
	      return this.isValid();
	    }
	  }, {
	    key: 'isValid',
	    value: function isValid() {
	      return this._errors() == null;
	    }
	  }, {
	    key: 'isModified',
	    value: function isModified() {
	      return this.state.modified;
	    }
	  }, {
	    key: 'resetModified',
	    value: function resetModified() {
	      this.setState({ modified: false });
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.setState({
	        modified: false,
	        validationRequested: false
	      });
	    }

	    /*
	     * =========================================================================
	     * Private functions
	     * =========================================================================
	     */

	  }, {
	    key: '_errors',
	    value: function _errors() {
	      var nextValue = arguments.length <= 0 || arguments[0] === undefined ? this._value() : arguments[0];

	      var errors = this.props.errors;
	      var validate = (this.isModified() || this.state.validationRequested) && this.props.validate;
	      if (validate) {
	        // Create themed props for the next nextValue passed to this function
	        var nextProps = Object.assign({}, this.props);
	        nextProps.value = nextValue;

	        // Running each validation
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = (0, _util.entries)(this._validations())[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var _step$value = _slicedToArray(_step.value, 2);

	            var k = _step$value[0];
	            var validationOpts = _step$value[1];

	            if (validationOpts === false || validationOpts == null) continue;
	            errors = errors.concat(_validations3.default[k](nextProps, validationOpts) || []);
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
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
	    key: '_value',
	    value: function _value() {
	      return this.props.value;
	    }
	  }, {
	    key: '_themedInputProps',
	    value: function _themedInputProps() {
	      var title = this.props.title || (0, _util.humanize)(this.props.name);
	      // Defaults
	      var defaults = {
	        title: title,
	        label: title,
	        placeholder: title,
	        layout: this.context.frigForm.layout,
	        align: this.context.frigForm.align
	      };
	      // Mixing in the defaults
	      var themedProps = Object.assign(defaults, this.props);
	      var themedInputHtml = themedProps.inputHtml || {};
	      // Overrides
	      var overrides = {
	        options: this._normalizedOptions(),
	        modified: this.isModified(),
	        // DOM attributes for the label element
	        labelHtml: Object.assign({}, themedProps.labelHtml || {}, {
	          htmlFor: themedProps.name
	        }),
	        // DOM attributes + React ref + callbacks for the input element
	        inputHtml: Object.assign({}, themedInputHtml, {
	          onBlur: this._onBlur.bind(this),
	          autoFocus: themedProps.autoFocus,
	          className: themedProps.className,
	          disabled: themedProps.disabled,
	          multiple: themedProps.multiple,
	          name: themedProps.name,
	          placeholder: themedProps.placeholder,
	          type: themedInputHtml.type || this._typeMapping().htmlInputType,
	          ref: 'input'
	        }),
	        value: this._value(),
	        onChange: this._onChange.bind(this),
	        errors: this._errors()
	      };
	      // TODO: Add type mapping

	      // console.log('UnboundInput#_themedInputProps() rv:')
	      // console.log(Object.assign(themedProps, overrides))

	      return Object.assign(themedProps, overrides);
	    }
	  }, {
	    key: '_normalizedOptions',
	    value: function _normalizedOptions() {
	      return (this.props.options || []).map(this._normalizeOption);
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
	    key: '_normalizeOption',
	    value: function _normalizeOption(option) {
	      if (option == null) return undefined;

	      // if option is an object with a label and a key return it unchanged
	      if (option.label != null) return option;

	      // converting option in the format of [key] to key
	      if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' && option.length === 1) {
	        return {
	          value: option[0],
	          label: option[0]
	        };
	      }

	      // if option is in the format [key, value]
	      if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' && option.length === 2) {
	        return {
	          value: option[0],
	          label: option[1]
	        };
	      }
	      // if option is in the format key
	      return {
	        value: option,
	        label: option
	      };
	    }
	  }, {
	    key: '_warnIfDuplicateOptionValue',
	    value: function _warnIfDuplicateOptionValue() {
	      var _this2 = this;

	      var options = this._normalizedOptions();

	      var values = options.map(function (o) {
	        return o.value;
	      });
	      var seenValues = {};

	      values.forEach(function (v) {
	        if (seenValues[v]) {
	          console.warn('Frig: detected duplicate value in ' + _this2.props.name + '\'s <select>. Frig will only be able to select the first occurence of this value: ' + v); // eslint-disable-line
	        }
	        seenValues[v] = true;
	      });
	    }
	  }, {
	    key: '_validations',
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
	        for (var _iterator2 = (0, _util.entries)(_validations3.default)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var _step2$value = _slicedToArray(_step2.value, 1);

	          var k = _step2$value[0];

	          validations[k] = nextProps[k] == null ? defaults[k] : nextProps[k];
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
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
	    key: '_onChange',
	    value: function _onChange(val, opts) {
	      var realValue = val;

	      // `val` could be a real value, or it could be a SyntheticEvent
	      // This is because some components call this onChange event directly.
	      // Previously, this was implemented with valueLink.requestChange,
	      // which does not use SyntheticEvents (just values directly), but
	      // that is deprecated as of React 15.
	      //
	      // FIXME: At some point in the event bubble flow the event should
	      // be converted to a value, and passed to a function named something
	      // other than onChange.
	      if (val && val.target) {
	        // SyntheticEvent
	        if (!val.target.value) realValue = '';else realValue = val.target.value;
	      }

	      if (this.props.type === 'submit') return;
	      // Set the state and run validations
	      if ((opts || {}).setModified !== false) {
	        this.setState({ modified: true });
	      }
	      var valid = this._errors(realValue) == null;
	      this.props.onChange(realValue, valid);
	      if (valid) this.props.onValidChange(realValue, valid);
	    }
	  }, {
	    key: '_onBlur',
	    value: function _onBlur() {
	      this.validate();
	      var inputHtml = this.props.inputHtml;
	      if (inputHtml != null && inputHtml.onBlur != null) inputHtml.onBlur();
	    }
	  }, {
	    key: '_guessInputType',
	    value: function _guessInputType() {
	      var value = this._value();
	      var jsType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	      if (this.props.type != null) {
	        return this.props.type;
	      } else if (this.props.options != null) {
	        return 'select';
	      } else if (jsType === 'boolean') {
	        return 'boolean';
	      } else if (jsType === 'number') {
	        return 'float';
	      } else if (this.props.name.match(/password/i)) {
	        return 'password';
	      }

	      return 'string';
	    }

	    // Generate the type mapping for an input component

	  }, {
	    key: '_typeMapping',
	    value: function _typeMapping() {
	      var typeMapping = Object.assign({}, _type_mapping2.default, this.context.frigForm.theme.type_mapping);
	      return typeMapping[this._guessInputType()];
	    }
	  }, {
	    key: '_themedComponent',
	    value: function _themedComponent() {
	      var _props = this.props;
	      var name = _props.name;
	      var type = _props.type;

	      var typeName = this._typeMapping();
	      if (typeName == null) {
	        throw new Error(name + ': No type mapping found for type ' + type);
	      }

	      var component = this.context.frigForm.theme[typeName.component];
	      if (component == null) {
	        throw new Error(name + ': No ' + typeName.component + ' component found in theme');
	      }
	      return component;
	    }

	    /*
	     * =========================================================================
	     * React Lifecycle + Render
	     * =========================================================================
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var ThemedComponent = this._themedComponent();
	      return _react2.default.createElement(ThemedComponent, this._themedInputProps());
	    }
	  }]);

	  return UnboundInput;
	}(_react2.default.Component), _class.propTypes = {
	  name: _react2.default.PropTypes.string.isRequired,
	  errors: _react2.default.PropTypes.array,
	  layout: _react2.default.PropTypes.string,
	  align: _react2.default.PropTypes.string,
	  className: _react2.default.PropTypes.string,
	  disabled: _react2.default.PropTypes.bool,
	  multiple: _react2.default.PropTypes.bool,
	  type: _react2.default.PropTypes.string,
	  options: _react2.default.PropTypes.array,
	  validate: _react2.default.PropTypes.bool,
	  value: _react2.default.PropTypes.any,
	  saved: _react2.default.PropTypes.bool,
	  // Callbacks (Public API)
	  onChange: _react2.default.PropTypes.func.isRequired,
	  onValidChange: _react2.default.PropTypes.func.isRequired,
	  inputHtml: _react2.default.PropTypes.object,
	  title: _react2.default.PropTypes.string
	}, _class.contextTypes = {
	  frigForm: _react2.default.PropTypes.shape({
	    theme: _react2.default.PropTypes.object.isRequired,
	    layout: _react2.default.PropTypes.string.isRequired,
	    align: _react2.default.PropTypes.string.isRequired
	  }).isRequired
	}, _class.defaultProps = {
	  validate: true,
	  disabled: false,
	  errors: [],
	  onChange: function onChange() {},
	  onValidChange: function onValidChange() {}
	}, _temp2);
	exports.default = UnboundInput;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var validations = {
	  required: function required(props) {
	    var value = props.value;
	    // if there is a null option then null is a valid value and there are not
	    // any values for which required should return an error
	    if ((props.options || []).filter(function (o) {
	      return o.value == null;
	    }).length > 0) {
	      return undefined;
	    }
	    if (value != null && value !== '') return undefined;
	    return 'This field is required.';
	  },
	  min: function min(props, opts) {
	    var value = props.value;
	    if (value >= opts || value == null || value === '') return undefined;
	    return 'Value cannot be less than ' + opts;
	  },
	  max: function max(props, opts) {
	    var value = props.value;
	    if (value <= opts || value == null || value === '') return undefined;
	    return 'Value cannot be greater than ' + opts;
	  }
	};

	exports.default = validations;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	/*
	 * Similar to the ECMA Script 7 proposed Object values function.
	 * Returns an array of [key, value] arrays.
	 * See http://stackoverflow.com/a/16643074/386193
	 */
	var entries = function entries(object) {
	  var keys = Object.keys(object);
	  return keys.map(function (key) {
	    return [key, object[key]];
	  });
	};

	var humanize = function humanize(key) {
	  if (key == null) return undefined;
	  var startOfWord = /([A-Z]|[0-9]+|_[a-z])/g;
	  var humanString = key.replace(startOfWord, ' $1').replace(/_/g, '');
	  return humanString[0].toUpperCase() + humanString.slice(1).toLowerCase();
	};

	module.exports = {
	  entries: entries,
	  humanize: humanize
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  string: { component: 'Input', htmlInputType: 'text' },
	  password: { component: 'Input', htmlInputType: 'password' },
	  email: { component: 'Input', htmlInputType: 'email' },
	  url: { component: 'Input', htmlInputType: 'url' },
	  tel: { component: 'Input', htmlInputType: 'tel' },
	  // search: { component: 'Input', htmlInputType: 'search' },
	  // uuid: { component: 'Input', htmlInputType: 'text' },
	  boolean: { component: 'Checkbox', htmlInputType: 'checkbox' },
	  text: { component: 'Text' },
	  file: { component: 'File', htmlInputType: 'file' },
	  // hidden: { component: 'Input', htmlInputType: 'hidden' },
	  // integer: { component: 'Input', htmlInputType: 'number' },
	  float: { component: 'Number' },
	  // decimal: { component: 'Input', htmlInputType: 'number' },
	  // range: { component: 'Input', htmlInputType: 'range' },
	  switch: { component: 'Switch' },
	  // datetime: { component: 'Datetime' },
	  // date: { component: 'Datetime' },
	  time: { component: 'Timepicker' },
	  select: { component: 'Select' },
	  color: { component: 'Color' }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Submit = function Submit(props, context) {
	  var ThemedSubmit = context.frigForm.theme.Submit;
	  return _react2.default.createElement(ThemedSubmit, props);
	};

	Submit.contextTypes = {
	  frigForm: _react2.default.PropTypes.shape({
	    theme: _react2.default.PropTypes.object.isRequired
	  }).isRequired
	};
	Submit.displayName = 'Frig.Submit';

	exports.default = Submit;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormErrorList = (_temp2 = _class = function (_React$Component) {
	  _inherits(FormErrorList, _React$Component);

	  function FormErrorList() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, FormErrorList);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FormErrorList)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.displayName = 'Frig.FormErrorList', _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(FormErrorList, [{
	    key: '_errorsArray',
	    value: function _errorsArray() {
	      var errors = this.context.frigForm.errors;
	      var name = this.props.name;

	      return errors[name] || [];
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var ThemedErrorList = this.context.frigForm.theme.FormErrorList;
	      return _react2.default.createElement(ThemedErrorList, { errors: this._errorsArray() });
	    }
	  }]);

	  return FormErrorList;
	}(_react2.default.Component), _class.defaultProps = {
	  // This is the property of `errors` where Frig will look for form-level errors.
	  // Set to 'base' by default, for compatibility with Active Record.
	  name: 'base'
	}, _class.contextTypes = {
	  frigForm: _react2.default.PropTypes.shape({
	    errors: _react2.default.PropTypes.object.isRequired,
	    theme: _react2.default.PropTypes.shape({
	      FormErrorList: _react2.default.PropTypes.any.isRequired
	    }).isRequired
	  }).isRequired
	}, _class.propTypes = {
	  name: _react2.default.PropTypes.string
	}, _temp2);
	exports.default = FormErrorList;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	var _fieldset_nested_form = __webpack_require__(12);

	var _fieldset_nested_form2 = _interopRequireDefault(_fieldset_nested_form);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Fieldset = (_temp2 = _class = function (_React$Component) {
	  _inherits(Fieldset, _React$Component);

	  function Fieldset() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Fieldset);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Fieldset)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.displayName = 'Fieldset', _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Fieldset, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.context.frigForm.childComponentWillMount(this.props.name, this);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.context.frigForm.childComponentWillUnmount(this.props.name, this);
	    }
	  }, {
	    key: 'validate',
	    value: function validate() {
	      this._forms().forEach(function (form) {
	        return form.validate();
	      });
	      return this.isValid();
	    }
	  }, {
	    key: 'isValid',
	    value: function isValid() {
	      return this._forms().every(function (form) {
	        return form.isValid();
	      });
	    }
	  }, {
	    key: 'isModified',
	    value: function isModified() {
	      return this._forms().some(function (form) {
	        return form.isModified();
	      });
	    }
	  }, {
	    key: 'modifications',
	    value: function modifications() {
	      var mods = this._forms().map(function (form) {
	        return form.modifications();
	      });
	      var nestedFormData = this.context.frigForm.data[this.props.name] || [];
	      var isArray = Array.isArray(nestedFormData);
	      if (!isArray) {
	        // for the edge case where frigForm.data.myFieldset is a single
	        // object instead of an array of objects
	        return mods[0];
	      }

	      return mods;
	    }
	  }, {
	    key: 'resetModified',
	    value: function resetModified() {
	      this._forms().forEach(function (form) {
	        return form.resetModified();
	      });
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this._forms().forEach(function (form) {
	        return form.reset();
	      });
	    }
	  }, {
	    key: '_forms',
	    value: function _forms() {
	      var _this2 = this;

	      return Object.keys(this.refs).map(function (k) {
	        return _this2.refs[k];
	      });
	    }
	  }, {
	    key: '_contextAtIndex',
	    value: function _contextAtIndex(index, keys) {
	      var _this3 = this;

	      return keys.reduce(function (contextAtIndex, key) {
	        if (_this3.context.frigForm[key] == null) return {};

	        var values = _this3.context.frigForm[key][_this3.props.name];
	        var value = Array.isArray(values) ? values[index] : values;
	        contextAtIndex[key] = value || {}; // eslint-disable-line no-param-reassign
	        return contextAtIndex;
	      }, {});
	    }
	  }, {
	    key: '_formProps',
	    value: function _formProps(_ref) {
	      var data = _ref.data;
	      var index = _ref.index;

	      var _contextAtIndex2 = this._contextAtIndex(index, ['errors', 'saved']);

	      var errors = _contextAtIndex2.errors;
	      var saved = _contextAtIndex2.saved;

	      var onChange = this._onChange.bind(this, index);
	      return _extends({}, this.context.frigForm, {
	        index: index,
	        key: index,
	        ref: index,
	        errors: errors,
	        saved: saved,
	        data: data,
	        onChange: onChange
	      });
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange(index, nextFormData) {
	      var data = this.context.frigForm.data[this.props.name];
	      var nextData = void 0;
	      if (Array.isArray(data)) {
	        nextData = [].concat(_toConsumableArray(data));
	        nextData[index] = nextFormData;
	      } else {
	        nextData = nextFormData;
	      }
	      // Relaying the request change to the upstream data
	      this.context.frigForm.requestChildComponentChange(this.props.name, nextData);
	    }
	  }, {
	    key: '_nestedFormDatas',
	    value: function _nestedFormDatas() {
	      var nextContext = arguments.length <= 0 || arguments[0] === undefined ? this.context : arguments[0];

	      var dataValues = nextContext.frigForm.data[this.props.name] || [];
	      return Array.isArray(dataValues) ? dataValues : [dataValues];
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      var i = 0;
	      var FieldsetNestedForm = this.props.FieldsetNestedForm;

	      var nestedFormDatas = this._nestedFormDatas();
	      return _react2.default.createElement(
	        'div',
	        null,
	        nestedFormDatas.map(function (data) {
	          return _react2.default.createElement(
	            FieldsetNestedForm,
	            _this4._formProps({ data: data, index: i++ }),
	            _this4.props.children
	          );
	        })
	      );
	    }
	  }]);

	  return Fieldset;
	}(_react2.default.Component), _class.contextTypes = {
	  frigForm: _react2.default.PropTypes.shape({
	    data: _react2.default.PropTypes.object.isRequired,
	    theme: _react2.default.PropTypes.object.isRequired,
	    errors: _react2.default.PropTypes.object.isRequired,
	    layout: _react2.default.PropTypes.string.isRequired,
	    saved: _react2.default.PropTypes.object.isRequired,
	    // Callbacks (Private API - reserved for frig form use only)
	    requestChildComponentChange: _react2.default.PropTypes.func.isRequired,
	    childComponentWillMount: _react2.default.PropTypes.func.isRequired,
	    childComponentWillUnmount: _react2.default.PropTypes.func.isRequired
	  }).isRequired
	}, _class.propTypes = {
	  name: _react2.default.PropTypes.string.isRequired,
	  children: _react2.default.PropTypes.any.isRequired,
	  FieldsetNestedForm: _react2.default.PropTypes.func.isRequired
	}, _class.defaultProps = {
	  FieldsetNestedForm: _fieldset_nested_form2.default
	}, _temp2);
	exports.default = Fieldset;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _class, _temp2;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _abstract_form = __webpack_require__(3);

	var _abstract_form2 = _interopRequireDefault(_abstract_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Nested forms (forms inside nested fieldsets)
	var FieldsetNestedForm = (_temp2 = _class = function (_AbstractForm) {
	  _inherits(FieldsetNestedForm, _AbstractForm);

	  function FieldsetNestedForm() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, FieldsetNestedForm);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FieldsetNestedForm)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.displayName = 'Frig.FieldsetNestedForm', _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(FieldsetNestedForm, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return _extends({}, _get(Object.getPrototypeOf(FieldsetNestedForm.prototype), 'getChildContext', this).call(this), {
	        frigFieldset: {
	          index: this.props.index
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.children
	      );
	    }
	  }]);

	  return FieldsetNestedForm;
	}(_abstract_form2.default), _class.propTypes = _abstract_form2.default.propTypes, _class.defaultProps = _abstract_form2.default.defaultProps, _class.childContextTypes = _extends({}, _abstract_form2.default.childContextTypes, {
	  frigFieldset: _react2.default.PropTypes.object
	}), _temp2);
	exports.default = FieldsetNestedForm;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FieldsetText = function FieldsetText(props, context) {
	  var spanProps = Object.assign({}, props);
	  delete spanProps.text;
	  return _react2.default.createElement(
	    'span',
	    spanProps,
	    props.text(context.frigFieldset.index)
	  );
	};
	FieldsetText.propTypes = {
	  text: _react2.default.PropTypes.func.isRequired
	};
	FieldsetText.contextTypes = {
	  frigFieldset: _react2.default.PropTypes.object
	};
	FieldsetText.displayName = 'Frig.FieldsetText';

	exports.default = FieldsetText;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fieldsetText = exports.fieldset = exports.formErrorList = exports.submit = exports.unboundInput = exports.input = exports.form = undefined;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _form = __webpack_require__(1);

	var _form2 = _interopRequireDefault(_form);

	var _input = __webpack_require__(4);

	var _input2 = _interopRequireDefault(_input);

	var _unbound_input = __webpack_require__(5);

	var _unbound_input2 = _interopRequireDefault(_unbound_input);

	var _submit = __webpack_require__(9);

	var _submit2 = _interopRequireDefault(_submit);

	var _form_error_list = __webpack_require__(10);

	var _form_error_list2 = _interopRequireDefault(_form_error_list);

	var _fieldset = __webpack_require__(11);

	var _fieldset2 = _interopRequireDefault(_fieldset);

	var _fieldset_text = __webpack_require__(13);

	var _fieldset_text2 = _interopRequireDefault(_fieldset_text);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var form = exports.form = _react2.default.createFactory(_form2.default);
	var input = exports.input = _react2.default.createFactory(_input2.default);
	var unboundInput = exports.unboundInput = _react2.default.createFactory(_unbound_input2.default);
	var submit = exports.submit = _react2.default.createFactory(_submit2.default);
	var formErrorList = exports.formErrorList = _react2.default.createFactory(_form_error_list2.default);
	var fieldset = exports.fieldset = _react2.default.createFactory(_fieldset2.default);
	var fieldsetText = exports.fieldsetText = _react2.default.createFactory(_fieldset_text2.default);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*
	 * A higher order function wrapper for components that only allow 2 possible
	 * values in their props.values (an onValue and an offValue - true and false by
	 * default).
	 *
	 * This component will call onChange for any invalid value to convert it
	 * into the onValue or offValue.
	 */
	module.exports = function BooleanHOC(ComponentClass) {
	  var _class, _temp2;

	  return _temp2 = _class = function (_React$Component) {
	    _inherits(Boolean, _React$Component);

	    function Boolean() {
	      var _Object$getPrototypeO;

	      var _temp, _this, _ret;

	      _classCallCheck(this, Boolean);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Boolean)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.displayName = 'Frig.HigherOrderComponents.Boolean', _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(Boolean, [{
	      key: 'componentWillMount',
	      value: function componentWillMount() {
	        this._normalizeValue(this.props);
	      }
	    }, {
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(nextProps) {
	        this._normalizeValue(nextProps);
	      }
	    }, {
	      key: '_normalizeValue',
	      value: function _normalizeValue(nextProps) {
	        var value = nextProps.value;
	        if (value !== this.props.offValue && value !== this.props.onValue) {
	          this._change(value != null, { setModified: false });
	        }
	      }

	      /*
	       * Intercept the nested component's true/false value change and convert it
	       * into an onValue or offValue before relaying it to onChange.
	       */

	    }, {
	      key: '_change',
	      value: function _change(val) {
	        var _props;

	        var upstreamVal = val ? this.props.onValue : this.props.offValue;

	        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	          args[_key2 - 1] = arguments[_key2];
	        }

	        (_props = this.props).onChange.apply(_props, [upstreamVal].concat(args));
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var childProps = Object.assign({}, this.props, {
	          ref: 'child',
	          value: this.props.value === this.props.onValue,
	          onChange: this._change.bind(this)
	        });
	        return _react2.default.createElement(ComponentClass, childProps);
	      }
	    }]);

	    return Boolean;
	  }(_react2.default.Component), _class.propTypes = {
	    value: _react2.default.PropTypes.any,
	    onChange: _react2.default.PropTypes.func.isRequired,
	    onValue: _react2.default.PropTypes.any.isRequired,
	    offValue: _react2.default.PropTypes.any.isRequired
	  }, _class.defaultProps = {
	    onValue: true,
	    offValue: false
	  }, _temp2;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(17);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*
	 * A higher order component that passes a focused attribute to it's child
	 * component. The focused is true when the component should be focused
	 * (ie. when it is clicked on or tabbed into) and false when it is not (ie.
	 * initially, when it is clicked off of and when another input is selected).
	 *
	 * This is useful for implementing popups in Frig Themes.
	 */
	module.exports = function FocusableHOC(ComponentClass) {
	  var childName = ComponentClass.prototype.displayName;

	  return function (_React$Component) {
	    _inherits(Focusable, _React$Component);

	    function Focusable() {
	      _classCallCheck(this, Focusable);

	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Focusable).call(this));

	      _this.state = {
	        focused: false
	      };
	      _this.displayName = 'Frig.HigherOrderComponents.Focusable(' + childName + ')';

	      _this._onDocumentClick = _this._onDocumentClick.bind(_this);
	      _this._onFocus = _this._onFocus.bind(_this);
	      return _this;
	    }

	    _createClass(Focusable, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        window.addEventListener('click', this._onDocumentClick);
	        window.addEventListener('focus', this._onFocus, true);
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        window.removeEventListener('click', this._onDocumentClick);
	        window.removeEventListener('focus', this._onFocus, true);
	      }

	      // Handles most cases of the user clicking in another field, or anywhere
	      // outside the focusable element.

	    }, {
	      key: '_onDocumentClick',
	      value: function _onDocumentClick(e) {
	        this.setState({ focused: this._containsDOMElement(e.target) });
	      }

	      // Also cover the case where the user tabs out of a focusable element with
	      // keyboard (since this wouldn't create a click event).

	    }, {
	      key: '_onFocus',
	      value: function _onFocus() {
	        this.setState({ focused: this._containsDOMElement(document.activeElement) });
	      }
	    }, {
	      key: '_containsDOMElement',
	      value: function _containsDOMElement(otherElement) {
	        var el = _reactDom2.default.findDOMNode(this);
	        return el === otherElement || el.contains(otherElement);
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var childProps = Object.assign({}, this.props, {
	          focused: this.state.focused
	        });
	        return _react2.default.createElement(ComponentClass, childProps);
	      }
	    }]);

	    return Focusable;
	  }(_react2.default.Component);
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }
/******/ ])
});
;