var Frig =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var AddBootstrapInputs;
	
	module.exports = {
	  Mixin: __webpack_require__(1),
	  InputMixin: __webpack_require__(13),
	  FormMixin: __webpack_require__(16),
	  typeMapping: __webpack_require__(6),
	  validations: __webpack_require__(15)
	};
	
	AddBootstrapInputs = function(inputs) {
	  var i, k, len, results;
	  results = [];
	  for (i = 0, len = inputs.length; i < len; i++) {
	    k = inputs[i];
	    results.push(__webpack_require__(18)("./" + k + ".coffee"));
	  }
	  return results;
	};
	
	AddBootstrapInputs(["checkbox", "errors", "form", "input", "select", "submit", "switch", "text", "typeahead"]);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var FormBuilder, React, frigMixin;
	
	React = __webpack_require__(2);
	
	FormBuilder = __webpack_require__(3);
	
	module.exports = frigMixin = {
	  frig: function(props, children) {
	    var isCoffeescript;
	    isCoffeescript = props.content == null;
	    return new FormBuilder(this, props, children, isCoffeescript).render();
	  }
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React.addons;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var FormBuilder, React, frigDefaults, frigThemes;
	
	React = __webpack_require__(2);
	
	frigDefaults = __webpack_require__(4);
	
	frigThemes = __webpack_require__(7);
	
	module.exports = FormBuilder = (function() {
	  function FormBuilder(parent, opts, cb, isCoffeescript) {
	    var i, k, len, ref, ref1, v;
	    this.parent = parent;
	    this.opts = opts != null ? opts : {};
	    this.cb = cb != null ? cb : (function() {});
	    this.isCoffeescript = isCoffeescript;
	    this.props = {};
	    ref = ["data", "ref", "typeMapping", "errors", "onChange"];
	    for (i = 0, len = ref.length; i < len; i++) {
	      k = ref[i];
	      this.props[k] = this.opts[k];
	      delete this.opts[k];
	    }
	    ref1 = this._defaults();
	    for (k in ref1) {
	      v = ref1[k];
	      this.props[k] = v;
	    }
	  }
	
	  FormBuilder.prototype._defaults = function() {
	    return {
	      type: "form",
	      ref: "form",
	      cb: this.cb,
	      parent: this.parent,
	      theme: this._theme(),
	      themeDefaults: this._theme().defaults,
	      formDefaults: this.opts
	    };
	  };
	
	  FormBuilder.prototype.render = function() {
	    var Form;
	    Form = this._theme().Form;
	    if (this.isCoffeescript) {
	      Form = React.createFactory(Form);
	    }
	    return Form(this.props);
	  };
	
	  FormBuilder.prototype._theme = function() {
	    var base, theme, themeName;
	    themeName = (base = this.opts).theme || (base.theme = frigDefaults.theme);
	    if (themeName == null) {
	      throw "A theme name is required";
	    }
	    theme = frigThemes[themeName];
	    if (theme == null) {
	      throw "Frig." + themeName + " does not exist";
	    }
	    return theme;
	  };
	
	  return FormBuilder;

	})();


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var capitalize, clone, defaults, frigHelpers, guessType, humanize, map, merge, typeMapping;
	
	frigHelpers = __webpack_require__(5);
	
	typeMapping = __webpack_require__(6);
	
	humanize = frigHelpers.humanize, clone = frigHelpers.clone, merge = frigHelpers.merge, map = frigHelpers.map, capitalize = frigHelpers.capitalize, guessType = frigHelpers.guessType;
	
	module.exports = defaults = {
	  children: void 0,
	  fieldKey: void 0,
	  formRef: void 0,
	  onFriggingChildInit: void 0,
	  onFriggingChildChange: void 0,
	  validationState: void 0,
	  data: function() {
	    return {};
	  },
	  type: void 0,
	  initialValue: void 0,
	  title: function() {
	    return humanize(this.frigProps.fieldKey);
	  },
	  label: function() {
	    return this.frigProps.title;
	  },
	  placeholder: function() {
	    return this.frigProps.title;
	  },
	  htmlInputType: function() {
	    return typeMapping[this.frigProps.type].htmlInputType;
	  },
	  options: void 0,
	  layout: void 0,
	  className: void 0,
	  disabled: void 0,
	  multiple: void 0,
	  theme: "friggingBootstrap",
	  required: function() {
	    return this.frigProps.type !== "boolean";
	  },
	  min: void 0,
	  max: void 0,
	  onChange: void 0,
	  onSubmit: void 0,
	  formHtml: {
	    ref: function() {
	      return this.frigProps.formRef;
	    },
	    onSubmit: function() {
	      return this._frigOnSubmit;
	    }
	  },
	  labelHtml: {
	    htmlFor: function() {
	      return this.frigProps.fieldKey;
	    }
	  },
	  inputHtml: {
	    ref: "input",
	    name: function() {
	      return this.frigProps.fieldKey;
	    },
	    autoFocus: function() {
	      return this.frigProps.autoFocus;
	    },
	    onChange: function() {
	      return this._frigOnChange;
	    },
	    onBlur: function() {
	      return this._frigOnBlur;
	    },
	    className: function() {
	      return this.frigProps.className;
	    },
	    disabled: function() {
	      return this.frigProps.disabled;
	    },
	    multiple: function() {
	      return this.frigProps.multiple;
	    }
	  },
	  validations: function() {
	    return {
	      required: this.frigProps.required,
	      min: this.frigProps.min != null ? this.frigProps.min : void 0,
	      max: this.frigProps.max != null ? this.frigProps.max : void 0
	    };
	  }
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	var clone, helpers, humanize, isConfigObj, map, mapObj, merge, setDefaults,
	  slice = [].slice;
	
	module.exports = helpers = {
	  humanize: function(key) {
	    var humanString;
	    if (key == null) {
	      return void 0;
	    }
	    humanString = key.replace(/([A-Z]|[0-9]+|_[a-z])/g, " $1").replace(/_/g, "");
	    return humanString[0].toUpperCase() + humanString.slice(1).toLowerCase();
	  },
	  clone: function(obj) {
	    var k, objClone, v;
	    objClone = {};
	    for (k in obj) {
	      v = obj[k];
	      objClone[k] = v;
	    }
	    return objClone;
	  },
	  merge: function() {
	    var i, k, len, other, others, ref, target, v;
	    target = arguments[0], others = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    target || (target = {});
	    for (i = 0, len = others.length; i < len; i++) {
	      other = others[i];
	      ref = other || {};
	      for (k in ref) {
	        v = ref[k];
	        target[k] = v;
	      }
	    }
	    return target;
	  },
	  map: function(array, fn) {
	    var i, k, len, out;
	    out = [];
	    for (i = 0, len = array.length; i < len; i++) {
	      k = array[i];
	      out.push(fn(k));
	    }
	    return out;
	  },
	  mapObj: function(obj, fn) {
	    var k, out, v;
	    out = {};
	    for (k in obj) {
	      v = obj[k];
	      out[k] = fn(k, v);
	    }
	    return out;
	  },
	  setDefaults: function() {
	    var cb, i, iterator, k, layers, namespacedLayers, ref, reversedLayers, target, v;
	    layers = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), cb = arguments[i++];
	    if (typeof cb !== "function") {
	      layers.push(cb);
	      cb = function(k, v) {
	        return v;
	      };
	    }
	    target = layers[layers.length - 1] || {};
	    reversedLayers = layers.slice(0).reverse();
	    iterator = function(k, v) {
	      var j, layer, len, val;
	      val = void 0;
	      for (j = 0, len = reversedLayers.length; j < len; j++) {
	        layer = reversedLayers[j];
	        if (val == null) {
	          val = layer[k];
	        }
	      }
	      return cb(k, val, layers);
	    };
	    ref = helpers.merge.apply(helpers, [{}].concat(slice.call(layers)));
	    for (k in ref) {
	      v = ref[k];
	      if (isConfigObj(layers[0][k])) {
	        namespacedLayers = helpers.map(layers, function(layer) {
	          return layer[k] || {};
	        });
	        v = helpers.setDefaults.apply(helpers, slice.call(namespacedLayers).concat([cb]));
	      } else {
	        v = iterator(k, v);
	      }
	      target[k] = v;
	    }
	    return target;
	  },
	  isConfigObj: function(obj) {
	    var type;
	    type = typeof obj;
	    return type !== "string" && type !== "number" && type !== "boolean" && type !== "function" && type !== "undefined" && obj !== null && obj.length === void 0;
	  },
	  capitalize: function(string) {
	    if (string == null) {
	      return void 0;
	    }
	    return "" + (string[0].toUpperCase()) + string.slice(1);
	  }
	};
	
	humanize = helpers.humanize, clone = helpers.clone, merge = helpers.merge, map = helpers.map, mapObj = helpers.mapObj, isConfigObj = helpers.isConfigObj, setDefaults = helpers.setDefaults;


/***/ },
/* 6 */
/***/ function(module, exports) {

	var typeMapping;
	
	module.exports = typeMapping = {
	  form: {
	    template: "form"
	  },
	  errors: {
	    template: "errors"
	  },
	  submit: {
	    template: "submit",
	    htmlInputType: "submit"
	  },
	  string: {
	    template: "input",
	    htmlInputType: "string"
	  },
	  password: {
	    template: "input",
	    htmlInputType: "password"
	  },
	  email: {
	    template: "input",
	    htmlInputType: "email"
	  },
	  url: {
	    template: "input",
	    htmlInputType: "url"
	  },
	  tel: {
	    template: "input",
	    htmlInputType: "tel"
	  },
	  search: {
	    template: "input",
	    htmlInputType: "search"
	  },
	  uuid: {
	    template: "input",
	    htmlInputType: "text"
	  },
	  boolean: {
	    template: "checkbox",
	    htmlInputType: "checkbox"
	  },
	  text: {
	    template: "text"
	  },
	  file: {
	    template: "file",
	    htmlInputType: "file"
	  },
	  hidden: {
	    template: "input",
	    htmlInputType: "hidden"
	  },
	  integer: {
	    template: "input",
	    htmlInputType: "number"
	  },
	  float: {
	    template: "input",
	    htmlInputType: "number"
	  },
	  decimal: {
	    template: "input",
	    htmlInputType: "number"
	  },
	  range: {
	    template: "input",
	    htmlInputType: "range"
	  },
	  select: {
	    template: "select"
	  },
	  multiselect: {
	    template: "select"
	  },
	  typeahead: {
	    template: "typeahead"
	  }
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var themes;
	
	module.exports = themes = {
	  friggingBootstrap: __webpack_require__(8)
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var React, clone, frigHelpers, friggingBootstrap, humanize, i, map, merge, ref, span;
	
	React = __webpack_require__(2);
	
	frigHelpers = __webpack_require__(5);
	
	humanize = frigHelpers.humanize, clone = frigHelpers.clone, merge = frigHelpers.merge, map = frigHelpers.map;
	
	ref = React.DOM, span = ref.span, i = ref.i;
	
	__webpack_require__(9);
	
	module.exports = friggingBootstrap = {
	  defaults: {
	    layout: "vertical",
	    xs: "12",
	    sm: function() {
	      return this.frigProps.xs || "12";
	    },
	    md: function() {
	      return this.frigProps.sm || "12";
	    },
	    lg: function() {
	      return this.frigProps.md || "12";
	    },
	    xsOffset: void 0,
	    smOffset: function() {
	      return this.frigProps.xsOffset;
	    },
	    mdOffset: function() {
	      return this.frigProps.smOffset;
	    },
	    lgOffset: function() {
	      return this.frigProps.mdOffset;
	    }
	  },
	  errorList: function(errors) {
	    if (errors != null) {
	      return map(errors, friggingBootstrap.error);
	    }
	  },
	  error: function(msg) {
	    return span({
	      className: "help-block"
	    }, i({
	      className: "fa fa-exclamation-circle"
	    }, " " + msg));
	  },
	  sizeClassNames: function(props) {
	    var classes, j, k, l, len, len1, size, sizes;
	    classes = {};
	    sizes = ["xs", "sm", "md", "lg"];
	    for (j = 0, len = sizes.length; j < len; j++) {
	      k = sizes[j];
	      if (props[k] != null) {
	        classes["col-" + k + "-" + props[k]] = true;
	      }
	    }
	    for (l = 0, len1 = sizes.length; l < len1; l++) {
	      size = sizes[l];
	      k = size + "Offset";
	      if (props[k] == null) {
	        continue;
	      }
	      classes["col-" + size + "-offset-" + props[k]] = true;
	    }
	    return classes;
	  }
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var React, clone, frigHelpers, frigValidations, friggingPropsMixin, humanize, inputMixin, isConfigObj, map, mapObj, merge, setDefaults;
	
	React = __webpack_require__(2);
	
	friggingPropsMixin = __webpack_require__(14);
	
	frigHelpers = __webpack_require__(5);
	
	frigValidations = __webpack_require__(15);
	
	humanize = frigHelpers.humanize, clone = frigHelpers.clone, merge = frigHelpers.merge, map = frigHelpers.map, mapObj = frigHelpers.mapObj, isConfigObj = frigHelpers.isConfigObj, setDefaults = frigHelpers.setDefaults;
	
	module.exports = inputMixin = {
	  mixins: [friggingPropsMixin],
	  componentWillMount: function() {
	    return this.getFriggingValue || (this.getFriggingValue = this.defaultGetFriggingValue);
	  },
	  componentDidMount: function() {
	    var base, val, valid;
	    val = this.getFriggingValue();
	    valid = this.validate(val, false);
	    return typeof (base = this.frigProps).onFriggingChildInit === "function" ? base.onFriggingChildInit(this.frigProps.fieldKey, val, valid) : void 0;
	  },
	  defaultGetFriggingValue: function() {
	    var el, i, len, option, ref, ref1, val;
	    ref = this.refs[this.frigProps.inputHtml.ref];
	    val = ref != null ? (el = ref.getDOMNode(), el.type === 'checkbox' ? el.checked : el.type === 'select-multiple' ? $(el).val() : el.value) : this.frigProps.initialValue;
	    if (this.frigProps.options != null) {
	      ref1 = this.frigProps.options;
	      for (i = 0, len = ref1.length; i < len; i++) {
	        option = ref1[i];
	        option = this.normalizeFriggingOption(option);
	        if (option.value.toString() === val) {
	          return option.value;
	        }
	      }
	    }
	    return val;
	  },
	  normalizeFriggingOption: function(opts) {
	    if (opts == null) {
	      return void 0;
	    }
	    if (typeof opts === "object" && opts.length === 1) {
	      opts = opts[0];
	    }
	    if (typeof opts === "object" && opts.length === 2) {
	      return {
	        value: opts[0],
	        label: opts[1]
	      };
	    } else {
	      return {
	        value: opts,
	        label: opts
	      };
	    }
	  },
	  validate: function(value, renderErrors) {
	    var base, errors, k, opts, ref1, validationOpts;
	    if (value == null) {
	      value = this.getFriggingValue();
	    }
	    if (renderErrors == null) {
	      renderErrors = true;
	    }
	    if (this.frigProps.type === "submit" || (typeof (base = this.frigProps).validate === "function" ? base.validate() : void 0) === false) {
	      this.setState({
	        errors: void 0
	      });
	      return true;
	    }
	    errors = [];
	    ref1 = this.frigProps.validations;
	    for (k in ref1) {
	      validationOpts = ref1[k];
	      if (validationOpts === false || (validationOpts == null)) {
	        continue;
	      }
	      opts = {
	        data: this.frigProps.data,
	        fieldkey: this.frigProps.fieldKey,
	        value: value,
	        opts: validationOpts
	      };
	      errors = errors.concat(frigValidations[k](opts) || []);
	    }
	    if (errors.length === 0) {
	      errors = void 0;
	    }
	    if (renderErrors) {
	      this.setState({
	        errors: errors
	      });
	    }
	    return errors == null;
	  },
	  _frigOnChange: function() {
	    var base, base1, valid, value;
	    if (this.frigProps.type === "submit") {
	      return;
	    }
	    value = this.getFriggingValue();
	    valid = this.validate(value);
	    if (typeof (base = this.frigProps).onFriggingChildChange === "function") {
	      base.onFriggingChildChange(this.frigProps.fieldKey, value, valid);
	    }
	    return typeof (base1 = this.frigProps).onChange === "function" ? base1.onChange(value, valid) : void 0;
	  },
	  _frigOnBlur: function() {
	    return this.validate();
	  }
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var React, clone, frigDefaults, frigHelpers, friggingPropsMixin, humanize, isConfigObj, map, mapObj, merge, setDefaults,
	  slice = [].slice;
	
	React = __webpack_require__(2);
	
	frigHelpers = __webpack_require__(5);
	
	frigDefaults = __webpack_require__(4);
	
	humanize = frigHelpers.humanize, clone = frigHelpers.clone, merge = frigHelpers.merge, map = frigHelpers.map, mapObj = frigHelpers.mapObj, isConfigObj = frigHelpers.isConfigObj, setDefaults = frigHelpers.setDefaults;
	
	module.exports = friggingPropsMixin = {
	  componentWillReceiveProps: function(nextProps) {
	    return this._frigRefreshProps(nextProps);
	  },
	  componentWillMount: function() {
	    return this._frigRefreshProps(this.props);
	  },
	  frigDefaultLayers: function() {
	    return [frigDefaults, this.props.themeDefaults || {}, this.props.formDefaults || {}];
	  },
	  _frigPropLayers: function(props) {
	    return slice.call(this.frigDefaultLayers()).concat([(typeof this.getFriggingProps === "function" ? this.getFriggingProps() : void 0) || {}], [props]);
	  },
	  _frigRefreshProps: function(props) {
	    if (props == null) {
	      props = {};
	    }
	    this.frigProps = {};
	    return setDefaults.apply(null, slice.call(this._frigPropLayers(props)).concat([this.frigProps], [this._frigPropVal]));
	  },
	  _frigPropVal: function(k, obj, layers) {
	    var defaultVal, fnNameRegex;
	    defaultVal = layers[0][k];
	    if (k === "className") {
	      return this._frigClassName(layers);
	    }
	    fnNameRegex = /^on|^cb$|^validate$/;
	    if (typeof obj === "function" && (obj === defaultVal || !k.match(fnNameRegex))) {
	      obj = obj.call(this, this);
	    }
	    return obj;
	  },
	  _frigClassName: function(sources) {
	    var className, classNames, i, len, source;
	    classNames = [];
	    for (i = 0, len = sources.length; i < len; i++) {
	      source = sources[i];
	      className = source.className;
	      if (typeof className === "function") {
	        className = className.call(this, this);
	      }
	      if (className) {
	        classNames.push(className);
	      }
	    }
	    return classNames.join(" ");
	  }
	};


/***/ },
/* 15 */
/***/ function(module, exports) {

	var validation;
	
	module.exports = validation = {
	  required: function(arg) {
	    var data, key, opts, value;
	    key = arg.key, value = arg.value, opts = arg.opts, data = arg.data;
	    if ((value != null) && value !== "") {
	      return void 0;
	    }
	    return "This field is required.";
	  },
	  min: function(arg) {
	    var data, key, opts, value;
	    key = arg.key, value = arg.value, opts = arg.opts, data = arg.data;
	    if (value >= opts || (value == null) || value === "") {
	      return void 0;
	    }
	    return "Value cannot be less than " + opts;
	  },
	  max: function(arg) {
	    var data, key, opts, value;
	    key = arg.key, value = arg.value, opts = arg.opts, data = arg.data;
	    if (value <= opts || (value == null) || value === "") {
	      return void 0;
	    }
	    return "Value cannot be greater than " + opts;
	  }
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var React, capitalize, dslMixin, formMixin, frigHelpers, friggingPropsMixin, getTemplate, guessType, map, merge, setDefaults;
	
	React = __webpack_require__(2);
	
	friggingPropsMixin = __webpack_require__(14);
	
	dslMixin = __webpack_require__(17);
	
	frigHelpers = __webpack_require__(5);
	
	merge = frigHelpers.merge, map = frigHelpers.map, capitalize = frigHelpers.capitalize, getTemplate = frigHelpers.getTemplate, guessType = frigHelpers.guessType, setDefaults = frigHelpers.setDefaults;
	
	module.exports = formMixin = {
	  mixins: [friggingPropsMixin, dslMixin],
	  componentWillMount: function() {
	    this._frigChanges = {};
	    this._frigFormData = {};
	    return this._frigValidFormData = {};
	  },
	  friggingChildren: function() {
	    return this.props.cb(this.frigDSL());
	  },
	  validate: function() {
	    var input, key, ref, valid;
	    valid = true;
	    ref = this.refs;
	    for (key in ref) {
	      input = ref[key];
	      if ((key.match(/Input$/) != null) && (input.validate != null)) {
	        valid &= input.validate();
	      }
	    }
	    return valid;
	  },
	  getData: function() {
	    return this._frigFormData;
	  },
	  getValidData: function() {
	    return this._frigValidFormData;
	  },
	  initialValues: function() {
	    if (this.frigProps.data.requestChange != null) {
	      return this.frigProps.data.value;
	    } else {
	      return this.frigProps.data;
	    }
	  },
	  _onFriggingChildInit: function(k, v, valid) {
	    this._frigFormData[k] = v;
	    return this._frigValidFormData[k] = v;
	  },
	  _onFriggingChildChange: function(k, v, valid) {
	    var base, base1, base2, reactLinkData;
	    this._frigFormData[k] = v;
	    if (valid) {
	      this._frigValidFormData[k] = v;
	    } else {
	      delete this._frigValidFormData[k];
	    }
	    if (typeof (base = this.frigProps).onChange === "function") {
	      base.onChange(this._frigFormData);
	    }
	    if (valid) {
	      if (typeof (base1 = this.frigProps).onValidChange === "function") {
	        base1.onValidChange(this._frigFormData);
	      }
	    }
	    reactLinkData = merge({}, this.initialValues(), this._frigFormData);
	    return typeof (base2 = this.frigProps.data).requestChange === "function" ? base2.requestChange(reactLinkData) : void 0;
	  },
	  _frigOnSubmit: function(e) {
	    var base;
	    e.preventDefault();
	    if (!this.validate()) {
	      return;
	    }
	    return typeof (base = this.frigProps).onSubmit === "function" ? base.onSubmit(e, this._frigFormData) : void 0;
	  }
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var React, capitalize, dslMixin, frigHelpers, getTemplate, globalTypeMapping, guessType, humanize, map, setDefaults;
	
	React = __webpack_require__(2);
	
	globalTypeMapping = __webpack_require__(6);
	
	frigHelpers = __webpack_require__(5);
	
	humanize = frigHelpers.humanize, map = frigHelpers.map, capitalize = frigHelpers.capitalize, getTemplate = frigHelpers.getTemplate, guessType = frigHelpers.guessType, setDefaults = frigHelpers.setDefaults;
	
	module.exports = dslMixin = {
	  frigDSL: function() {
	    return {
	      errors: this._frigErrors,
	      input: this._frigInput,
	      submit: this._frigSubmit
	    };
	  },
	  _frigErrors: function() {
	    return this._frigInput("errors", {
	      type: "errors",
	      errors: this.props.errors
	    });
	  },
	  _frigSubmit: function(value, props) {
	    if (props == null) {
	      props = {};
	    }
	    if (arguments.length === 1 && typeof value !== "string") {
	      props = value;
	      value = void 0;
	    }
	    setDefaults(this._frigSubmitDefaults(value), props);
	    return this._frigInput("submit", props);
	  },
	  _frigSubmitDefaults: function(value) {
	    return {
	      type: "submit",
	      inputHtml: value != null ? {
	        defaultValue: value
	      } : void 0
	    };
	  },
	  _frigInput: function(key, inputProps) {
	    var isCoffeescript, template, templateName, typeMapping;
	    if (inputProps == null) {
	      inputProps = {};
	    }
	    isCoffeescript = key != null;
	    typeMapping = inputProps.typeMapping;
	    delete inputProps.typeMapping;
	    setDefaults(this._frigInputDefaults(key), inputProps);
	    inputProps.type = this._frigGuessInputType(inputProps);
	    templateName = this._frigGetTemplateName(inputProps, this.props.theme, typeMapping);
	    template = this._frigLoadTemplate(inputProps, templateName);
	    if (isCoffeescript) {
	      template = React.createFactory(template);
	    }
	    return template(inputProps);
	  },
	  _frigInputDefaults: function(key) {
	    return {
	      ref: key + "Input",
	      fieldKey: key,
	      initialValue: this.initialValues()[key],
	      onFriggingChildChange: this._onFriggingChildChange,
	      onFriggingChildInit: this._onFriggingChildInit,
	      formDefaults: this.props.formDefaults,
	      themeDefaults: this.props.theme.defaults || {}
	    };
	  },
	  _frigGuessInputType: function(inputProps) {
	    var jsType;
	    jsType = typeof inputProps.initialValue;
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
	    } else if (inputProps.fieldKey.match(/[pP]assword^/)) {
	      return "password";
	    } else {
	      return "string";
	    }
	  },
	  _frigGetTemplateName: function(arg, theme, inputTypeMapping) {
	    var i, key, len, mapping, sources, template, type, typeMapping;
	    type = arg.type, key = arg.key, template = arg.template;
	    if (template != null) {
	      return capitalize(template);
	    }
	    sources = [inputTypeMapping, this.typeMapping, theme.typeMapping, globalTypeMapping];
	    for (i = 0, len = sources.length; i < len; i++) {
	      typeMapping = sources[i];
	      mapping = (typeMapping || {})[type];
	      if (mapping != null) {
	        return capitalize(mapping.template || mapping);
	      }
	    }
	  },
	  _frigLoadTemplate: function(props, templateName) {
	    if (templateName == null) {
	      throw props.key + ": No type mapping found for type " + props.type;
	    }
	    if (this.props.theme[templateName] == null) {
	      throw props.key + ": No " + templateName + " template found in theme";
	    }
	    return this.props.theme[templateName];
	  }
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./checkbox.coffee": 19,
		"./errors.coffee": 20,
		"./file.coffee": 21,
		"./form.coffee": 22,
		"./input.coffee": 23,
		"./select.coffee": 24,
		"./submit.coffee": 25,
		"./switch.coffee": 26,
		"./text.coffee": 27,
		"./typeahead.coffee": 28
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
	webpackContext.id = 18;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, cx, div, errorList, friggingBootstrap, input, label, ref, sizeClassNames;
	
	React = __webpack_require__(2);
	
	friggingBootstrap = __webpack_require__(8);
	
	InputMixin = __webpack_require__(13);
	
	errorList = friggingBootstrap.errorList, sizeClassNames = friggingBootstrap.sizeClassNames;
	
	ref = React.DOM, div = ref.div, label = ref.label, input = ref.input;
	
	cx = React.addons.classSet;
	
	friggingBootstrap.Checkbox = React.createClass({
	  displayName: 'Frig.friggingBootstrap.Checkbox',
	  mixins: [InputMixin],
	  getInitialState: function() {
	    return {
	      errors: void 0,
	      edited: false
	    };
	  },
	  getFriggingProps: function() {
	    return {
	      inputHtml: {
	        type: "checkbox",
	        value: this.frigProps.key,
	        checked: function() {
	          return this.frigProps.initialValue;
	        }
	      }
	    };
	  },
	  _cx: function() {
	    return cx({
	      "checkbox": true,
	      "has-error": this.state.errors != null,
	      "has-success": this.state.edited && (this.state.errors == null)
	    });
	  },
	  render: function() {
	    var ref1;
	    return div({
	      className: "form-group"
	    }, div({
	      className: cx(sizeClassNames(this.frigProps))
	    }, div({
	      className: this._cx()
	    }, label(this.frigProps.labelHtml, input(this.frigProps.inputHtml), this.frigProps.label ? " " + this.frigProps.label : void 0), ((ref1 = this.state) != null ? ref1.errors : void 0) != null ? errorList(this.state.errors) : void 0)));
	  }
	});


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var React, div, errorList, friggingBootstrap, i, ref, span;
	
	React = __webpack_require__(2);
	
	friggingBootstrap = __webpack_require__(8);
	
	errorList = friggingBootstrap.errorList;
	
	ref = React.DOM, div = ref.div, span = ref.span, i = ref.i;
	
	friggingBootstrap.Errors = React.createClass({
	  displayName: 'Frig.friggingBootstrap.Errors',
	  render: function() {
	    return div({
	      className: "row"
	    }, _.map(this.props.errors, function(error) {
	      return div({
	        className: "col-xs-12 col-sm-12 col-md-12 col-lg-12"
	      }, div({
	        className: "frigging-bootstrap-error",
	        ref: "error-" + error
	      }, div({
	        className: "alert alert-danger"
	      }, i({
	        className: "fa fa-exclamation-circle"
	      }), span({
	        className: "sr-only"
	      }, "Error:"), " " + error, div({
	        className: "clearfix"
	      }))));
	    }));
	  }
	});


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, clone, cx, div, errorList, friggingBootstrap, humanize, img, input, label, map, merge, ref, ref1, sizeClassNames;
	
	React = __webpack_require__(2);
	
	friggingBootstrap = __webpack_require__(8);
	
	InputMixin = __webpack_require__(13);
	
	ref = __webpack_require__(5), humanize = ref.humanize, clone = ref.clone, merge = ref.merge, map = ref.map;
	
	errorList = friggingBootstrap.errorList, sizeClassNames = friggingBootstrap.sizeClassNames;
	
	ref1 = React.DOM, div = ref1.div, label = ref1.label, input = ref1.input, img = ref1.img;
	
	cx = React.addons.classSet;
	
	friggingBootstrap.File = React.createClass({
	  displayName: 'Frig.friggingBootstrap.FileInput',
	  mixins: [InputMixin],
	  getInitialState: function() {
	    return {
	      errors: void 0,
	      edited: false
	    };
	  },
	  getFriggingProps: function() {
	    return {
	      prefix: void 0,
	      suffix: void 0,
	      inputHtml: {
	        className: "form-control",
	        placeholder: function() {
	          return this.frigProps.placeholder;
	        },
	        type: function() {
	          return 'file';
	        },
	        accept: function() {
	          return 'image/png,image/gif,image/jpeg';
	        },
	        defaultValue: function() {
	          return this.frigProps.initialValue;
	        }
	      }
	    };
	  },
	  componentDidMount: function() {
	    return this.setState({
	      image: this.frigProps.initialValue
	    });
	  },
	  _cx: function() {
	    return cx({
	      "has-error": this.state.errors != null,
	      "has-success": this.state.edited && (this.state.errors == null)
	    });
	  },
	  _input: function() {
	    return input(this.frigProps.inputHtml);
	  },
	  _loadFile: function() {
	    this.fReader = new FileReader();
	    this.fReader.onloadend = this._onFileLoad;
	    return this.fReader.readAsDataURL(this.refs[this.frigProps.inputHtml.ref].getDOMNode().files[0]);
	  },
	  _onFileLoad: function() {
	    var base, v;
	    v = _.clone(this.fReader.result);
	    this.setState({
	      image: v
	    });
	    this.getFriggingValue = (function(_this) {
	      return function() {
	        return v;
	      };
	    })(this);
	    return typeof (base = this.frigProps).onFriggingChildChange === "function" ? base.onFriggingChildChange('image', v, true) : void 0;
	  },
	  render: function() {
	    var ref2;
	    this.frigProps.inputHtml.onChange = this._loadFile;
	    return div({
	      className: cx(sizeClassNames(this.frigProps))
	    }, div({
	      className: this._cx()
	    }, this.frigProps.label ? label(this.frigProps.labelHtml, this.frigProps.label) : void 0, div({
	      className: "controls"
	    }, div({
	      className: "image-upload"
	    }, this.state.image ? img({
	      className: "thumbnail",
	      height: '125',
	      width: '125',
	      src: this.state.image
	    }) : void 0, (this.frigProps.prefix != null) || (this.frigProps.suffix != null) ? div({
	      className: "input-group"
	    }, this.frigProps.prefix ? div({
	      className: "input-group-addon"
	    }, this.frigProps.prefix) : void 0, this._input(), this.frigProps.suffix ? div({
	      className: "input-group-addon"
	    }, this.frigProps.suffix) : void 0) : this._input())), ((ref2 = this.state) != null ? ref2.errors : void 0) != null ? errorList(this.state.errors) : void 0));
	  }
	});


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var FormMixin, React, div, errorList, form, friggingBootstrap, input, label, ref;
	
	React = __webpack_require__(2);
	
	friggingBootstrap = __webpack_require__(8);
	
	FormMixin = __webpack_require__(16);
	
	errorList = friggingBootstrap.errorList;
	
	ref = React.DOM, div = ref.div, form = ref.form, label = ref.label, input = ref.input;
	
	friggingBootstrap.Form = React.createClass({
	  displayName: 'Frig.friggingBootstrap.Form',
	  mixins: [FormMixin],
	  getFriggingProps: function() {
	    return {
	      formHtml: {
	        className: function() {
	          if (this.frigProps.layout) {
	            return "form-" + this.frigProps.layout;
	          }
	        }
	      }
	    };
	  },
	  render: function() {
	    return form(this.frigProps.formHtml, this.friggingChildren());
	  }
	});


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, clone, cx, div, errorList, frigHelpers, friggingBootstrap, humanize, input, label, map, merge, ref, sizeClassNames;
	
	React = __webpack_require__(2);
	
	friggingBootstrap = __webpack_require__(8);
	
	frigHelpers = __webpack_require__(5);
	
	InputMixin = __webpack_require__(13);
	
	errorList = friggingBootstrap.errorList, sizeClassNames = friggingBootstrap.sizeClassNames;
	
	humanize = frigHelpers.humanize, clone = frigHelpers.clone, merge = frigHelpers.merge, map = frigHelpers.map;
	
	ref = React.DOM, div = ref.div, label = ref.label, input = ref.input;
	
	cx = React.addons.classSet;
	
	friggingBootstrap.Input = React.createClass({
	  displayName: 'Frig.friggingBootstrap.Input',
	  mixins: [InputMixin],
	  getInitialState: function() {
	    return {
	      errors: void 0,
	      edited: false
	    };
	  },
	  getFriggingProps: function() {
	    return {
	      prefix: void 0,
	      suffix: void 0,
	      inputHtml: {
	        className: "form-control",
	        placeholder: function() {
	          return this.frigProps.placeholder;
	        },
	        type: function() {
	          return this.frigProps.htmlInputType;
	        },
	        defaultValue: function() {
	          return this.frigProps.initialValue;
	        }
	      }
	    };
	  },
	  _cx: function() {
	    return cx({
	      "form-group": true,
	      "has-error": this.state.errors != null,
	      "has-success": this.state.edited && (this.state.errors == null)
	    });
	  },
	  _input: function() {
	    return input(this.frigProps.inputHtml);
	  },
	  render: function() {
	    var ref1;
	    return div({
	      className: cx(sizeClassNames(this.frigProps))
	    }, div({
	      className: this._cx()
	    }, this.frigProps.label ? label(this.frigProps.labelHtml, this.frigProps.label) : void 0, div({
	      className: "controls"
	    }, (this.frigProps.prefix != null) || (this.frigProps.suffix != null) ? div({
	      className: "input-group"
	    }, this.frigProps.prefix ? div({
	      className: "input-group-addon"
	    }, this.frigProps.prefix) : void 0, this._input(), this.frigProps.suffix ? div({
	      className: "input-group-addon"
	    }, this.frigProps.suffix) : void 0) : this._input()), ((ref1 = this.state) != null ? ref1.errors : void 0) != null ? errorList(this.state.errors) : void 0));
	  }
	});


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, clone, cx, div, errorList, frigHelpers, friggingBootstrap, humanize, label, map, merge, option, ref, select, sizeClassNames;
	
	React = __webpack_require__(2);
	
	friggingBootstrap = __webpack_require__(8);
	
	frigHelpers = __webpack_require__(5);
	
	InputMixin = __webpack_require__(13);
	
	errorList = friggingBootstrap.errorList, sizeClassNames = friggingBootstrap.sizeClassNames;
	
	humanize = frigHelpers.humanize, clone = frigHelpers.clone, merge = frigHelpers.merge, map = frigHelpers.map;
	
	ref = React.DOM, div = ref.div, label = ref.label, select = ref.select, option = ref.option;
	
	cx = React.addons.classSet;
	
	friggingBootstrap.Select = React.createClass({
	  displayName: 'Frig.friggingBootstrap.Select',
	  mixins: [InputMixin],
	  getInitialState: function() {
	    return {
	      errors: void 0,
	      edited: false
	    };
	  },
	  getFriggingProps: function() {
	    return {
	      inputHtml: {
	        className: "form-control",
	        defaultValue: function() {
	          return this.frigProps.initialValue;
	        }
	      },
	      labelHtml: {
	        className: ""
	      }
	    };
	  },
	  _cx: function() {
	    return cx({
	      "form-group": true,
	      "has-error": this.state.errors != null,
	      "has-success": this.state.edited && (this.state.errors == null)
	    });
	  },
	  _selectOption: function(opts) {
	    opts = this.normalizeFriggingOption(opts);
	    return option({
	      value: opts.value
	    }, opts.label);
	  },
	  render: function() {
	    var ref1;
	    return div({
	      className: cx(sizeClassNames(this.frigProps))
	    }, div({
	      className: this._cx()
	    }, this.frigProps.label ? label(this.frigProps.labelHtml, this.frigProps.label) : void 0, div({
	      className: "controls"
	    }, select(this.frigProps.inputHtml, map(this.frigProps.options, this._selectOption))), ((ref1 = this.state) != null ? ref1.errors : void 0) != null ? errorList(this.state.errors) : void 0));
	  }
	});


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, cx, div, friggingBootstrap, input, ref, sizeClassNames;
	
	React = __webpack_require__(2);
	
	friggingBootstrap = __webpack_require__(8);
	
	InputMixin = __webpack_require__(13);
	
	ref = React.DOM, div = ref.div, input = ref.input;
	
	sizeClassNames = friggingBootstrap.sizeClassNames;
	
	cx = React.addons.classSet;
	
	friggingBootstrap.Submit = React.createClass({
	  displayName: 'Frig.friggingBootstrap.Submit',
	  mixins: [InputMixin],
	  getFriggingProps: function() {
	    return {
	      inputHtml: {
	        placeholder: function() {
	          return this.frigProps.placeholder;
	        },
	        defaultValue: function() {
	          return this.frigProps.initialValue;
	        },
	        className: function() {
	          return this.frigProps.className || "btn btn-default";
	        },
	        type: function() {
	          return this.frigProps.htmlInputType;
	        }
	      }
	    };
	  },
	  render: function() {
	    return div({
	      className: cx(sizeClassNames(this.frigProps))
	    }, div({
	      className: "form-group"
	    }, input(this.frigProps.inputHtml)));
	  }
	});


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, clone, cx, div, errorList, frigHelpers, friggingBootstrap, humanize, input, label, map, merge, ref, sizeClassNames, span;
	
	React = __webpack_require__(2);
	
	friggingBootstrap = __webpack_require__(8);
	
	frigHelpers = __webpack_require__(5);
	
	InputMixin = __webpack_require__(13);
	
	errorList = friggingBootstrap.errorList, sizeClassNames = friggingBootstrap.sizeClassNames;
	
	humanize = frigHelpers.humanize, clone = frigHelpers.clone, merge = frigHelpers.merge, map = frigHelpers.map;
	
	ref = React.DOM, div = ref.div, span = ref.span, input = ref.input, label = ref.label;
	
	cx = React.addons.classSet;
	
	friggingBootstrap.Switch = React.createClass({
	  displayName: 'Frig.friggingBootstrap.Switch',
	  mixins: [InputMixin],
	  getFriggingProps: function() {
	    return {
	      handleWidth: void 0,
	      inputHtml: {
	        className: "switch",
	        type: "checkbox"
	      },
	      offColor: void 0,
	      offText: void 0,
	      offValue: false,
	      onColor: "success",
	      onText: void 0,
	      onValue: true
	    };
	  },
	  componentDidMount: function() {
	    return this._$el().bootstrapSwitch({
	      disabled: this.frigProps.disabled,
	      handleWidth: this.frigProps.handleWidth,
	      offColor: this.frigProps.offColor,
	      offText: this.frigProps.offText,
	      onColor: this.frigProps.onColor,
	      onText: this.frigProps.onText,
	      size: "small",
	      state: this._getBooleanVal(),
	      onSwitchChange: this._onSwitchChange
	    });
	  },
	  _getBooleanVal: function() {
	    return this._booleanVal != null ? this._booleanVal : this._booleanVal = this.frigProps.onValue === this.frigProps.initialValue;
	  },
	  getFriggingValue: function() {
	    return this.frigProps[this._getBooleanVal() ? 'onValue' : 'offValue'];
	  },
	  _$el: function() {
	    return $(this.refs[this.frigProps.inputHtml.ref].getDOMNode());
	  },
	  _onSwitchChange: function(e, val) {
	    this._booleanVal = val;
	    this._$el().val(this.getFriggingValue());
	    return this.frigProps.inputHtml.onChange();
	  },
	  _labelContainerCx: function() {
	    return cx({
	      "pull-left": this.frigProps.layout === "horizontal"
	    });
	  },
	  _inputContainerCx: function() {
	    return cx({
	      "pull-right": this.frigProps.layout === "horizontal",
	      "controls": this.frigProps.layout === "vertical"
	    });
	  },
	  render: function() {
	    var ref1;
	    return div({
	      className: cx(sizeClassNames(this.frigProps))
	    }, div({
	      className: this._labelContainerCx()
	    }, this.frigProps.label ? label(this.frigProps.labelHtml, this.frigProps.label) : void 0), div({
	      className: this._inputContainerCx()
	    }, input(this.frigProps.inputHtml), ((ref1 = this.state) != null ? ref1.errors : void 0) != null ? errorList(this.state.errors) : void 0));
	  }
	});


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, clone, cx, div, errorList, frigHelpers, friggingBootstrap, humanize, label, map, merge, ref, sizeClassNames, textarea;
	
	React = __webpack_require__(2);
	
	friggingBootstrap = __webpack_require__(8);
	
	frigHelpers = __webpack_require__(5);
	
	InputMixin = __webpack_require__(13);
	
	errorList = friggingBootstrap.errorList, sizeClassNames = friggingBootstrap.sizeClassNames;
	
	humanize = frigHelpers.humanize, clone = frigHelpers.clone, merge = frigHelpers.merge, map = frigHelpers.map;
	
	ref = React.DOM, div = ref.div, label = ref.label, textarea = ref.textarea;
	
	cx = React.addons.classSet;
	
	friggingBootstrap.Text = React.createClass({
	  displayName: 'Frig.friggingBootstrap.Text',
	  mixins: [InputMixin],
	  getInitialState: function() {
	    return {
	      errors: void 0,
	      edited: false
	    };
	  },
	  getFriggingProps: function() {
	    return {
	      inputHtml: {
	        className: "form-control",
	        placeholder: function() {
	          return this.frigProps.placeholder;
	        },
	        rows: 3,
	        defaultValue: function() {
	          return this.frigProps.initialValue;
	        }
	      },
	      labelHtml: {
	        className: "control-label"
	      }
	    };
	  },
	  _cx: function() {
	    return cx({
	      "form-group": true,
	      "has-error": this.state.errors != null,
	      "has-success": this.state.edited && (this.state.errors == null)
	    });
	  },
	  render: function() {
	    var ref1;
	    return div({
	      className: cx(sizeClassNames(this.frigProps))
	    }, div({
	      className: this._cx()
	    }, this.frigProps.label ? label(this.frigProps.labelHtml, this.frigProps.label) : void 0, div({
	      className: "controls"
	    }, textarea(this.frigProps.inputHtml)), ((ref1 = this.state) != null ? ref1.errors : void 0) != null ? errorList(this.state.errors) : void 0));
	  }
	});


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, clone, cx, errorList, frigHelpers, friggingBootstrap, humanize, map, merge, sizeClassNames,
	  slice = [].slice;
	
	React = __webpack_require__(2);
	
	friggingBootstrap = __webpack_require__(8);
	
	frigHelpers = __webpack_require__(5);
	
	InputMixin = __webpack_require__(13);
	
	errorList = friggingBootstrap.errorList, sizeClassNames = friggingBootstrap.sizeClassNames;
	
	humanize = frigHelpers.humanize, clone = frigHelpers.clone, merge = frigHelpers.merge, map = frigHelpers.map;
	
	cx = React.addons.classSet;
	
	friggingBootstrap.Typeahead = React.createClass({
	  displayName: 'Frig.friggingBootstrap.Select',
	  mixins: [InputMixin],
	  getInitialState: function() {
	    return {
	      errors: void 0,
	      edited: false,
	      selectedItems: []
	    };
	  },
	  getFriggingProps: function() {
	    return {
	      inputHtml: {
	        className: "form-control typeahead",
	        defaultValue: function() {
	          return this.frigProps.initialValue;
	        },
	        placeholder: function() {
	          return this.frigProps.placeholder;
	        }
	      },
	      labelHtml: {
	        className: ""
	      }
	    };
	  },
	  componentDidMount: function() {
	    var options, source;
	    source = this.frigProps.options.length > -1 ? this.frigProps.options : this.frigProps.options.execute;
	    options = {
	      source: source,
	      updater: this._afterSelect,
	      minLength: 0,
	      items: 5,
	      showHintOnFocus: true
	    };
	    if (this.frigProps.addToListMessage) {
	      options['addItem'] = {
	        name: this.frigProps.addToListMessage
	      };
	    }
	    if (this.frigProps.multiple) {
	      options['afterSelect'] = this._clearTypeahead;
	    }
	    this._setInitialValue();
	    return this._$el().typeahead(options);
	  },
	  _setInitialValue: function() {
	    var initialItems, initialValue;
	    if (initialValue = this._$el().val()) {
	      if (this.frigProps.multiple) {
	        initialItems = this._multipleInitialItems(initialValue);
	        this._clearTypeahead();
	      } else {
	        initialItems = [this._initalItem(initialValue)];
	        if (initialItems[0]) {
	          this._$el().val(initialItems[0].name);
	        }
	      }
	      return this.setState({
	        selectedItems: initialItems
	      });
	    }
	  },
	  _multipleInitialItems: function(initialValue) {
	    var initialItems, initialVals;
	    initialVals = initialValue.split(',');
	    if (this.frigProps.options.length > -1) {
	      initialItems = _.filter(this.frigProps.options, function(item) {
	        return _.includes(initialVals, item.id.toString());
	      });
	      _.pull.apply(_, [this.frigProps.options].concat(slice.call(initialItems)));
	    } else {
	      initialItems = this.frigProps.initialItems;
	    }
	    return initialItems;
	  },
	  _initalItem: function(initialValue) {
	    return _.find(this.frigProps.options, {
	      id: parseInt(initialValue)
	    });
	  },
	  _$el: function() {
	    return $(this.refs[this.frigProps.inputHtml.ref].getDOMNode());
	  },
	  _afterSelect: function(item) {
	    if (this.frigProps.addToListMessage && item.name === this.frigProps.addToListMessage) {
	      this.frigProps.addToList.execute(this._$el().val(), (function(_this) {
	        return function(data, itemType) {
	          item = data[itemType];
	          _this.frigProps.options.push(item);
	          _this._$el().val(item.name);
	          return _this._addToSelectedItems(item);
	        };
	      })(this));
	    } else {
	      this._addToSelectedItems(item);
	    }
	    return item;
	  },
	  _addToSelectedItems: function(item) {
	    if (this.frigProps.multiple) {
	      this.setState({
	        selectedItems: this.state.selectedItems.concat(item)
	      });
	      _.pull(this.frigProps.options, item);
	    } else {
	      this.setState({
	        selectedItems: [item]
	      });
	    }
	    return setTimeout(this.frigProps.inputHtml.onChange, 0);
	  },
	  _clearTypeahead: function() {
	    return this._$el().val('');
	  },
	  getFriggingValue: function() {
	    if (this.frigProps.multiple) {
	      return _.map(this.state.selectedItems, 'id');
	    } else {
	      if (this.state.selectedItems[0]) {
	        return this.state.selectedItems[0].id;
	      }
	    }
	  },
	  _cx: function() {
	    return cx({
	      "form-group": true,
	      "has-error": this.state.errors != null,
	      "has-success": this.state.edited && (this.state.errors == null),
	      "items": true
	    });
	  },
	  _deleteItem: function(item) {
	    this.setState({
	      selectedItems: _.without(this.state.selectedItems, item)
	    });
	    if (this.frigProps.options.length > -1) {
	      this.frigProps.options.push(item);
	    }
	    return setTimeout(this.frigProps.inputHtml.onChange, 0);
	  },
	  render: function() {
	    var ref;
	    return div({
	      className: cx(sizeClassNames(this.props)) + " typeahead"
	    }, div({
	      className: "controls"
	    }, !this.frigProps.multiple ? label(this.frigProps.labelHtml, this.frigProps.label) : void 0, input(this.frigProps.inputHtml), this.frigProps.multiple ? label(this.frigProps.labelHtml, this.frigProps.label) : void 0), div({
	      className: this._cx()
	    }, this.frigProps.multiple ? _.map(this.state.selectedItems, (function(_this) {
	      return function(item) {
	        return div({
	          className: "row"
	        }, div({
	          className: "col-xs-12 col-sm-12 col-md-12 col-lg-12"
	        }, p({
	          className: 'pull-left'
	        }, item.name), i({
	          className: "fa fa-times delete-trigger pull-right",
	          onClick: _.partial(_this._deleteItem, item),
	          title: "Remove from list"
	        })));
	      };
	    })(this)) : void 0, this.state.selectedItems.length < 1 && this.frigProps.multiple ? div({
	      className: "row"
	    }, div({
	      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12"
	    }, p({
	      className: 'pull-left'
	    }, "No " + this.frigProps.label.toLowerCase() + "..."))) : void 0, ((ref = this.state) != null ? ref.errors : void 0) != null ? errorList(this.state.errors) : void 0));
	  }
	});


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjY3ZjBlN2M2MjlkNDJlZGMzMmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL21peGlucy9mcmlnX21peGluLmNvZmZlZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdC5hZGRvbnNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9mb3JtX2J1aWxkZXIuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL2RlZmF1bHRzLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9oZWxwZXJzLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90eXBlX21hcHBpbmcuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC5zdHlsIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL21peGlucy9pbnB1dF9taXhpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvbWl4aW5zL2ZyaWdnaW5nX3Byb3BzX21peGluLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy92YWxpZGF0aW9ucy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvbWl4aW5zL2Zvcm1fbWl4aW4uY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL21peGlucy9kc2xfbWl4aW4uY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAgXlxcLlxcLy4qXFwuY29mZmVlJCIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwL2NoZWNrYm94LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwL2Vycm9ycy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9maWxlLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwL2Zvcm0uY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAvaW5wdXQuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAvc2VsZWN0LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwL3N1Ym1pdC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9zd2l0Y2guY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAvdGV4dC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC90eXBlYWhlYWQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFBQSxPQUFNLENBQUMsT0FBUCxHQUVFO0dBQUEsT0FBTyxvQkFBUSxDQUFSLENBQVA7R0FDQSxZQUFZLG9CQUFRLEVBQVIsQ0FEWjtHQUVBLFdBQVcsb0JBQVEsRUFBUixDQUZYO0dBS0EsYUFBYSxvQkFBUSxDQUFSLENBTGI7R0FNQSxhQUFhLG9CQUFRLEVBQVIsQ0FOYjs7O0FBU0Ysc0JBQXFCLFNBQUMsTUFBRDtBQUNuQjtBQUFBO1FBQUE7O2tCQUFBLDRCQUFRLEdBQW9DLENBQXBDLEdBQXNDLFNBQTlDO0FBQUE7O0FBRG1COztBQUdyQixvQkFBbUIsQ0FDakIsVUFEaUIsRUFFakIsUUFGaUIsRUFHakIsTUFIaUIsRUFJakIsT0FKaUIsRUFLakIsUUFMaUIsRUFNakIsUUFOaUIsRUFPakIsUUFQaUIsRUFRakIsTUFSaUIsRUFTakIsV0FUaUIsQ0FBbkI7Ozs7Ozs7QUNkQTs7QUFBQSxTQUFnQyxvQkFBUSxDQUFSOztBQUNoQyxlQUFnQyxvQkFBUSxDQUFSOztBQUVoQyxPQUFNLENBQUMsT0FBUCxHQUFpQixZQUNmO0dBQUEsTUFBTSxTQUFDLEtBQUQsRUFBUSxRQUFSO0FBQ0o7S0FBQSxpQkFBa0I7WUFDZCxnQkFBWSxJQUFaLEVBQWUsS0FBZixFQUFzQixRQUF0QixFQUFnQyxjQUFoQyxDQUErQyxDQUFDLE1BQWhEO0dBRkEsQ0FBTjs7Ozs7Ozs7QUNKRiwrQjs7Ozs7O0FDQUE7O0FBQUEsU0FBZ0Msb0JBQVEsQ0FBUjs7QUFDaEMsZ0JBQWdDLG9CQUFRLENBQVI7O0FBQ2hDLGNBQWdDLG9CQUFRLENBQVI7O0FBRWhDLE9BQU0sQ0FBQyxPQUFQLEdBQXVCO0dBQ1IscUJBQUMsTUFBRCxFQUFVLElBQVYsRUFBc0IsRUFBdEIsRUFBa0MsY0FBbEM7QUFDWDtLQURZLElBQUMsVUFBRDtLQUFTLElBQUMsdUJBQUQsT0FBUTtLQUFJLElBQUMsbUJBQUQsS0FBTSxDQUFDLGFBQUQ7S0FBTSxJQUFDLGtCQUFEO0tBQzdDLElBQUMsTUFBRCxHQUFTO0FBQ1Q7QUFBQTs7T0FDRSxJQUFDLE1BQU0sR0FBUCxHQUFZLElBQUMsS0FBSztPQUNsQixPQUFPLElBQUMsS0FBSztBQUZmO0FBSUE7QUFBQTs7T0FBQSxJQUFDLE1BQU0sR0FBUCxHQUFZO0FBQVo7R0FOVzs7eUJBUWIsWUFBVztZQUNUO09BQUEsTUFBZSxNQUFmO09BQ0EsS0FBZSxNQURmO09BRUEsSUFBZSxJQUFDLEdBRmhCO09BR0EsUUFBZSxJQUFDLE9BSGhCO09BSUEsT0FBZSxJQUFDLE9BQUQsRUFKZjtPQUtBLGVBQWUsSUFBQyxPQUFELEVBQVMsQ0FBQyxRQUx6QjtPQU1BLGNBQWUsSUFBQyxLQU5oQjs7R0FEUzs7eUJBVVgsU0FBUTtBQUNOO0tBQUEsT0FBTyxJQUFDLE9BQUQsRUFBUyxDQUFDO0tBQ2pCLElBQW1DLElBQUMsZUFBcEM7T0FBQSxPQUFPLEtBQUssQ0FBQyxhQUFOLENBQW9CLElBQXBCLEVBQVA7O1lBQ0EsS0FBSyxJQUFDLE1BQU47R0FITTs7eUJBTVIsU0FBUTtBQUNOO0tBQUEsb0JBQVksSUFBQyxNQUFJLENBQUMsY0FBRCxDQUFDLFFBQVUsWUFBWSxDQUFDO0tBQ3pDLElBQXdDLGlCQUF4QztBQUFBLGFBQU0sMkJBQU47O0tBQ0EsUUFBUSxVQUFXO0tBQ25CLElBQWdELGFBQWhEO0FBQUEsYUFBTSxVQUFRLFNBQVIsR0FBa0Isa0JBQXhCOztBQUNBLFlBQU87R0FMRDs7Ozs7Ozs7Ozs7QUM3QlY7O0FBQUEsZUFBYyxvQkFBUSxDQUFSOztBQUNkLGVBQWMsb0JBQVEsQ0FBUjs7QUFDYixnQ0FBRCxFQUFXLHlCQUFYLEVBQWtCLHlCQUFsQixFQUF5QixxQkFBekIsRUFBOEIsbUNBQTlCLEVBQTBDOztBQUsxQyxPQUFNLENBQUMsT0FBUCxHQUFpQixXQUVmO0dBQUEsVUFBdUIsTUFBdkI7R0FDQSxVQUF1QixNQUR2QjtHQUVBLFNBQXVCLE1BRnZCO0dBR0EscUJBQXVCLE1BSHZCO0dBSUEsdUJBQXVCLE1BSnZCO0dBS0EsaUJBQXVCLE1BTHZCO0dBUUEsTUFBaUI7WUFBRztHQUFILENBUmpCO0dBU0EsTUFBaUIsTUFUakI7R0FVQSxjQUFpQixNQVZqQjtHQVdBLE9BQWlCO1lBQUcsU0FBUyxJQUFDLFVBQVMsQ0FBQyxRQUFwQjtHQUFILENBWGpCO0dBWUEsT0FBaUI7WUFBRyxJQUFDLFVBQVMsQ0FBQztHQUFkLENBWmpCO0dBYUEsYUFBaUI7WUFBRyxJQUFDLFVBQVMsQ0FBQztHQUFkLENBYmpCO0dBY0EsZUFBaUI7WUFBRyxXQUFZLEtBQUMsVUFBUyxDQUFDLElBQVgsQ0FBZ0IsQ0FBQztHQUFoQyxDQWRqQjtHQWVBLFNBQWlCLE1BZmpCO0dBZ0JBLFFBQWlCLE1BaEJqQjtHQWlCQSxXQUFpQixNQWpCakI7R0FrQkEsVUFBaUIsTUFsQmpCO0dBbUJBLFVBQWlCLE1BbkJqQjtHQW9CQSxPQUFpQixtQkFwQmpCO0dBdUJBLFVBQWlCO1lBQUcsSUFBQyxVQUFTLENBQUMsSUFBWCxLQUFtQjtHQUF0QixDQXZCakI7R0F3QkEsS0FBaUIsTUF4QmpCO0dBeUJBLEtBQWlCLE1BekJqQjtHQTRCQSxVQUFpQixNQTVCakI7R0E2QkEsVUFBaUIsTUE3QmpCO0dBZ0NBLFVBQ0U7S0FBQSxLQUFlO2NBQUcsSUFBQyxVQUFTLENBQUM7S0FBZCxDQUFmO0tBQ0EsVUFBZTtjQUFHLElBQUM7S0FBSixDQURmO0lBakNGO0dBb0NBLFdBQ0U7S0FBQSxTQUFlO2NBQUcsSUFBQyxVQUFTLENBQUM7S0FBZCxDQUFmO0lBckNGO0dBdUNBLFdBQ0U7S0FBQSxLQUFlLE9BQWY7S0FDQSxNQUFlO2NBQUcsSUFBQyxVQUFTLENBQUM7S0FBZCxDQURmO0tBRUEsV0FBZTtjQUFHLElBQUMsVUFBUyxDQUFDO0tBQWQsQ0FGZjtLQUdBLFVBQWU7Y0FBRyxJQUFDO0tBQUosQ0FIZjtLQUlBLFFBQWU7Y0FBRyxJQUFDO0tBQUosQ0FKZjtLQUtBLFdBQWU7Y0FBRyxJQUFDLFVBQVMsQ0FBQztLQUFkLENBTGY7S0FNQSxVQUFlO2NBQUcsSUFBQyxVQUFTLENBQUM7S0FBZCxDQU5mO0tBT0EsVUFBZTtjQUFHLElBQUMsVUFBUyxDQUFDO0tBQWQsQ0FQZjtJQXhDRjtHQWlEQSxhQUFhO1lBQ1g7T0FBQSxVQUFlLElBQUMsVUFBUyxDQUFDLFFBQTFCO09BQ0EsS0FBaUMsMEJBQWxCLE9BQUMsVUFBUyxDQUFDLEdBQVgsU0FEZjtPQUVBLEtBQWlDLDBCQUFsQixPQUFDLFVBQVMsQ0FBQyxHQUFYLFNBRmY7O0dBRFcsQ0FqRGI7Ozs7Ozs7O0FDVEY7R0FBQTs7QUFBQSxPQUFNLENBQUMsT0FBUCxHQUFpQixVQUNmO0dBQUEsVUFBVSxTQUFDLEdBQUQ7QUFDUjtLQUFBLElBQXdCLFdBQXhCO0FBQUEsY0FBTyxPQUFQOztLQUNBLGNBQWMsR0FBRyxDQUFDLE9BQUosQ0FBWSx3QkFBWixFQUFzQyxLQUF0QyxDQUE0QyxDQUFDLE9BQTdDLENBQXFELElBQXJELEVBQTJELEVBQTNEO0FBQ2QsWUFBTyxXQUFZLEdBQUUsQ0FBQyxXQUFmLEtBQStCLFdBQVksU0FBSSxDQUFDLFdBQWpCO0dBSDlCLENBQVY7R0FLQSxPQUFPLFNBQUMsR0FBRDtBQUNMO0tBQUEsV0FBVztBQUNYOztPQUFBLFFBQVMsR0FBVCxHQUFjO0FBQWQ7QUFDQSxZQUFPO0dBSEYsQ0FMUDtHQVVBLE9BQU87QUFDTDtLQURNLHVCQUFRO0tBQ2Qsb0JBQVc7QUFDWDs7QUFDRTtBQUFBOztTQUFBLE1BQU8sR0FBUCxHQUFZO0FBQVo7QUFERjtBQUVBLFlBQU87R0FKRixDQVZQO0dBZ0JBLEtBQUssU0FBQyxLQUFELEVBQVEsRUFBUjtBQUNIO0tBQUEsTUFBTTtBQUNOOztPQUFBLEdBQUcsQ0FBQyxJQUFKLENBQVMsR0FBRyxDQUFILENBQVQ7QUFBQTtBQUNBLFlBQU87R0FISixDQWhCTDtHQXFCQSxRQUFRLFNBQUMsR0FBRCxFQUFNLEVBQU47QUFDTjtLQUFBLE1BQU07QUFDTjs7T0FBQSxHQUFJLEdBQUosR0FBUyxHQUFHLENBQUgsRUFBTSxDQUFOO0FBQVQ7QUFDQSxZQUFPO0dBSEQsQ0FyQlI7R0FpQ0EsYUFBYTtBQUVYO0tBRlksbUdBQVc7S0FFdkIsSUFBRyxPQUFPLEVBQVAsS0FBYyxVQUFqQjtPQUNFLE1BQU0sQ0FBQyxJQUFQLENBQVksRUFBWjtPQUNBLEtBQUssU0FBQyxDQUFELEVBQUksQ0FBSjtnQkFBVTtPQUFWLEVBRlA7O0tBSUEsU0FBUyxNQUFPLE9BQU0sQ0FBQyxNQUFQLEdBQWdCLENBQWhCLENBQVAsSUFBNkI7S0FFdEMsaUJBQWlCLE1BQU0sQ0FBQyxLQUFQLENBQWEsQ0FBYixDQUFlLENBQUMsT0FBaEI7S0FHakIsV0FBVyxTQUFDLENBQUQsRUFBSSxDQUFKO0FBR1Q7T0FBQSxNQUFNO0FBQ047OztXQUFBLE1BQU8sS0FBTTs7QUFBYjtjQUNBLEdBQUcsQ0FBSCxFQUFNLEdBQU4sRUFBVyxNQUFYO0tBTFM7QUFPWDtBQUFBOztPQUNFLElBQUcsWUFBWSxNQUFPLEdBQUcsR0FBdEIsQ0FBSDtTQUNFLG1CQUFtQixPQUFPLENBQUMsR0FBUixDQUFZLE1BQVosRUFBb0IsU0FBQyxLQUFEO2tCQUFXLEtBQU0sR0FBTixJQUFZO1NBQXZCLENBQXBCO1NBQ25CLElBQUksT0FBTyxDQUFDLFdBQVIsZ0JBQW9CLG9DQUFxQixJQUFyQixDQUFwQixFQUZOO1FBQUE7U0FJRSxJQUFJLFNBQVMsQ0FBVCxFQUFZLENBQVosRUFKTjs7T0FLQSxNQUFPLEdBQVAsR0FBWTtBQU5kO0FBT0EsWUFBTztHQXpCSSxDQWpDYjtHQTREQSxhQUFhLFNBQUMsR0FBRDtBQUNYO0tBQUEsT0FBTyxPQUFPO0FBQ2QsWUFDRSxTQUFRLFFBQVIsSUFDQSxTQUFRLFFBRFIsSUFFQSxTQUFRLFNBRlIsSUFHQSxTQUFRLFVBSFIsSUFJQSxTQUFRLFdBSlIsSUFLQSxRQUFRLElBTFIsSUFNQSxHQUFHLENBQUMsTUFBSixLQUFjO0dBVEwsQ0E1RGI7R0F3RUEsWUFBWSxTQUFDLE1BQUQ7S0FDVixJQUF3QixjQUF4QjtBQUFBLGNBQU8sT0FBUDs7WUFDQSxLQUFFLENBQUMsTUFBTyxHQUFFLENBQUMsV0FBVixFQUFELENBQUYsR0FBNkIsTUFBTztHQUYxQixDQXhFWjs7O0FBNkVELDRCQUFELEVBQVcscUJBQVgsRUFBa0IscUJBQWxCLEVBQXlCLGlCQUF6QixFQUE4Qix1QkFBOUIsRUFBc0MsaUNBQXRDLEVBQW1EOzs7Ozs7O0FDOUVuRDs7QUFBQSxPQUFNLENBQUMsT0FBUCxHQUFpQixjQUNmO0dBQUEsTUFBYztLQUFDLFVBQVUsTUFBWDtJQUFkO0dBQ0EsUUFBYztLQUFDLFVBQVUsUUFBWDtJQURkO0dBRUEsUUFBYztLQUFDLFVBQVUsUUFBWDtLQUF1QixlQUFlLFFBQXRDO0lBRmQ7R0FHQSxRQUFjO0tBQUMsVUFBVSxPQUFYO0tBQXVCLGVBQWUsUUFBdEM7SUFIZDtHQUlBLFVBQWM7S0FBQyxVQUFVLE9BQVg7S0FBdUIsZUFBZSxVQUF0QztJQUpkO0dBS0EsT0FBYztLQUFDLFVBQVUsT0FBWDtLQUF1QixlQUFlLE9BQXRDO0lBTGQ7R0FNQSxLQUFjO0tBQUMsVUFBVSxPQUFYO0tBQXVCLGVBQWUsS0FBdEM7SUFOZDtHQU9BLEtBQWM7S0FBQyxVQUFVLE9BQVg7S0FBdUIsZUFBZSxLQUF0QztJQVBkO0dBUUEsUUFBYztLQUFDLFVBQVUsT0FBWDtLQUF1QixlQUFlLFFBQXRDO0lBUmQ7R0FTQSxNQUFjO0tBQUMsVUFBVSxPQUFYO0tBQXVCLGVBQWUsTUFBdEM7SUFUZDtHQVVBLFNBQWM7S0FBQyxVQUFVLFVBQVg7S0FBdUIsZUFBZSxVQUF0QztJQVZkO0dBV0EsTUFBYztLQUFDLFVBQVUsTUFBWDtJQVhkO0dBWUEsTUFBYztLQUFDLFVBQVUsTUFBWDtLQUF1QixlQUFlLE1BQXRDO0lBWmQ7R0FhQSxRQUFjO0tBQUMsVUFBVSxPQUFYO0tBQXVCLGVBQWUsUUFBdEM7SUFiZDtHQWNBLFNBQWM7S0FBQyxVQUFVLE9BQVg7S0FBdUIsZUFBZSxRQUF0QztJQWRkO0dBZUEsT0FBYztLQUFDLFVBQVUsT0FBWDtLQUF1QixlQUFlLFFBQXRDO0lBZmQ7R0FnQkEsU0FBYztLQUFDLFVBQVUsT0FBWDtLQUF1QixlQUFlLFFBQXRDO0lBaEJkO0dBaUJBLE9BQWM7S0FBQyxVQUFVLE9BQVg7S0FBdUIsZUFBZSxPQUF0QztJQWpCZDtHQXFCQSxRQUFjO0tBQUMsVUFBVSxRQUFYO0lBckJkO0dBc0JBLGFBQWM7S0FBQyxVQUFVLFFBQVg7SUF0QmQ7R0F1QkEsV0FBYztLQUFDLFVBQVUsV0FBWDtJQXZCZDs7Ozs7Ozs7QUNERjs7QUFBQSxPQUFNLENBQUMsT0FBUCxHQUFpQixTQUVmO0dBQUEsbUJBQW1CLG9CQUFRLENBQVIsQ0FBbkI7Ozs7Ozs7O0FDRkY7O0FBQUEsU0FBZ0Msb0JBQVEsQ0FBUjs7QUFDaEMsZUFBZ0Msb0JBQVEsQ0FBUjs7QUFDL0IsZ0NBQUQsRUFBVyx5QkFBWCxFQUFrQix5QkFBbEIsRUFBeUI7O0FBQ3pCLE9BQWdDLEtBQUssQ0FBQyxHQUF0QyxFQUFDLGVBQUQsRUFBTzs7QUFDUCxxQkFBUSxDQUFSOztBQUVBLE9BQU0sQ0FBQyxPQUFQLEdBQWlCLG9CQUdmO0dBQUEsVUFDRTtLQUFBLFFBQWlCLFVBQWpCO0tBRUEsSUFBaUIsSUFGakI7S0FHQSxJQUFpQjtjQUFHLElBQUMsVUFBUyxDQUFDLEVBQVgsSUFBaUI7S0FBcEIsQ0FIakI7S0FJQSxJQUFpQjtjQUFHLElBQUMsVUFBUyxDQUFDLEVBQVgsSUFBaUI7S0FBcEIsQ0FKakI7S0FLQSxJQUFpQjtjQUFHLElBQUMsVUFBUyxDQUFDLEVBQVgsSUFBaUI7S0FBcEIsQ0FMakI7S0FPQSxVQUFpQixNQVBqQjtLQVFBLFVBQWlCO2NBQUcsSUFBQyxVQUFTLENBQUM7S0FBZCxDQVJqQjtLQVNBLFVBQWlCO2NBQUcsSUFBQyxVQUFTLENBQUM7S0FBZCxDQVRqQjtLQVVBLFVBQWlCO2NBQUcsSUFBQyxVQUFTLENBQUM7S0FBZCxDQVZqQjtJQURGO0dBYUEsV0FBVyxTQUFDLE1BQUQ7S0FDVCxJQUF1QyxjQUF2QztjQUFBLElBQUksTUFBSixFQUFZLGlCQUFpQixDQUFDLEtBQTlCOztHQURTLENBYlg7R0FnQkEsT0FBTyxTQUFDLEdBQUQ7WUFDTCxLQUFLO09BQUEsV0FBVyxZQUFYO01BQUwsRUFDRSxFQUFFO09BQUEsV0FBVywwQkFBWDtNQUFGLEVBQXlDLE1BQUksR0FBN0MsQ0FERjtHQURLLENBaEJQO0dBb0JBLGdCQUFnQixTQUFDLEtBQUQ7QUFDZDtLQUFBLFVBQVU7S0FDVixRQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CO0FBRVI7O09BQ0UsSUFBMEMsZ0JBQTFDO1NBQUEsT0FBUSxVQUFPLENBQVAsR0FBUyxHQUFULEdBQVksS0FBTSxHQUFsQixDQUFSLEdBQWtDLEtBQWxDOztBQURGO0FBR0E7O09BQ0UsSUFBTyxJQUFELEdBQU07T0FDWixJQUFnQixnQkFBaEI7QUFBQTs7T0FDQSxPQUFRLFVBQU8sSUFBUCxHQUFZLFVBQVosR0FBc0IsS0FBTSxHQUE1QixDQUFSLEdBQTRDO0FBSDlDO0FBSUEsWUFBTztHQVhPLENBcEJoQjs7Ozs7Ozs7QUNURiwwQzs7Ozs7Ozs7O0FDQUE7O0FBQUEsU0FBZ0Msb0JBQVEsQ0FBUjs7QUFDaEMsc0JBQWdDLG9CQUFRLEVBQVI7O0FBQ2hDLGVBQWdDLG9CQUFRLENBQVI7O0FBQ2hDLG1CQUFnQyxvQkFBUSxFQUFSOztBQUMvQixnQ0FBRCxFQUFXLHlCQUFYLEVBQWtCLHlCQUFsQixFQUF5QixxQkFBekIsRUFBOEIsMkJBQTlCLEVBQXNDLHFDQUF0QyxFQUFtRDs7QUFFbkQsT0FBTSxDQUFDLE9BQVAsR0FBaUIsYUFFZjtHQUFBLFFBQVEsQ0FDTixrQkFETSxDQUFSO0dBSUEsb0JBQW9CO1lBQ2xCLElBQUMsc0JBQUQsSUFBQyxvQkFBcUIsSUFBQztHQURMLENBSnBCO0dBT0EsbUJBQW1CO0FBQ2pCO0tBQUEsTUFBTSxJQUFDLGlCQUFEO0tBQ04sUUFBUSxJQUFDLFNBQUQsQ0FBVSxHQUFWLEVBQWUsS0FBZjtvRkFDRSxDQUFDLG9CQUFxQixJQUFDLFVBQVMsQ0FBQyxVQUFVLEtBQUs7R0FIekMsQ0FQbkI7R0FZQSx5QkFBeUI7QUFDdkI7S0FBQSxNQUFNLElBQUMsS0FBSyxLQUFDLFVBQVMsQ0FBQyxTQUFTLENBQUMsR0FBckI7S0FDWixNQUFTLFdBQUgsR0FDSixNQUFLLEdBQUcsQ0FBQyxVQUFKLEVBQUwsRUFDRyxFQUFFLENBQUMsSUFBSCxLQUFXLFVBQWQsR0FDRSxFQUFFLENBQUMsT0FETCxHQUVRLEVBQUUsQ0FBQyxJQUFILEtBQVcsaUJBQWQsR0FFSCxFQUFFLEVBQUYsQ0FBSyxDQUFDLEdBQU4sRUFGRyxHQUlILEVBQUUsQ0FBQyxLQVBMLENBREksR0FVSixJQUFDLFVBQVMsQ0FBQztLQUdiLElBQUcsOEJBQUg7QUFDRTtBQUFBOztTQUNFLFNBQVMsSUFBQyx3QkFBRCxDQUF5QixNQUF6QjtTQUNULElBQXVCLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBYixPQUEyQixHQUFsRDtBQUFBLGtCQUFPLE1BQU0sQ0FBQyxNQUFkOztBQUZGLFFBREY7O0FBSUEsWUFBTztHQW5CZ0IsQ0FaekI7R0FpQ0EseUJBQXlCLFNBQUMsSUFBRDtLQUN2QixJQUF3QixZQUF4QjtBQUFBLGNBQU8sT0FBUDs7S0FFQSxJQUFrQixPQUFPLElBQVAsS0FBZ0IsUUFBaEIsSUFBNkIsSUFBSSxDQUFDLE1BQUwsS0FBZSxDQUE5RDtPQUFBLE9BQU8sSUFBSyxJQUFaOztLQUVBLElBQUcsT0FBTyxJQUFQLEtBQWdCLFFBQWhCLElBQTZCLElBQUksQ0FBQyxNQUFMLEtBQWUsQ0FBL0M7Y0FDRTtTQUFBLE9BQU8sSUFBSyxHQUFaO1NBQ0EsT0FBTyxJQUFLLEdBRFo7U0FERjtNQUFBO2NBS0U7U0FBQSxPQUFPLElBQVA7U0FDQSxPQUFPLElBRFA7U0FMRjs7R0FMdUIsQ0FqQ3pCO0dBOENBLFVBQVUsU0FBQyxLQUFELEVBQThCLFlBQTlCO0FBQ1I7O09BRFMsUUFBUSxJQUFDLGlCQUFEOzs7T0FBcUIsZUFBZTs7S0FDckQsSUFBRyxJQUFDLFVBQVMsQ0FBQyxJQUFYLEtBQW1CLFFBQW5CLGtFQUF5QyxDQUFDLG9CQUFYLEtBQTBCLEtBQTVEO09BQ0UsSUFBQyxTQUFELENBQVU7U0FBQSxRQUFRLE1BQVI7UUFBVjtBQUNBLGNBQU8sS0FGVDs7S0FHQSxTQUFTO0FBRVQ7QUFBQTs7T0FDRSxJQUFZLG1CQUFrQixLQUFsQixJQUE0Qix3QkFBeEM7QUFBQTs7T0FDQSxPQUNFO1NBQUEsTUFBWSxJQUFDLFVBQVMsQ0FBQyxJQUF2QjtTQUNBLFVBQVksSUFBQyxVQUFTLENBQUMsUUFEdkI7U0FFQSxPQUFZLEtBRlo7U0FHQSxNQUFZLGNBSFo7O09BSUYsU0FBUyxNQUFNLENBQUMsTUFBUCxDQUFjLGVBQWdCLEdBQWhCLENBQW1CLElBQW5CLEtBQTRCLEVBQTFDO0FBUFg7S0FTQSxJQUFzQixNQUFNLENBQUMsTUFBUCxLQUFpQixDQUF2QztPQUFBLFNBQVMsT0FBVDs7S0FFQSxJQUE0QixZQUE1QjtPQUFBLElBQUMsU0FBRCxDQUFVO1NBQUEsUUFBUSxNQUFSO1FBQVY7O0FBRUEsWUFBUTtHQW5CQSxDQTlDVjtHQW1FQSxlQUFlO0FBQ2I7S0FBQSxJQUFVLElBQUMsVUFBUyxDQUFDLElBQVgsS0FBbUIsUUFBN0I7QUFBQTs7S0FDQSxRQUFRLElBQUMsaUJBQUQ7S0FDUixRQUFRLElBQUMsU0FBRCxDQUFVLEtBQVY7O1dBRUUsQ0FBQyxzQkFBdUIsSUFBQyxVQUFTLENBQUMsVUFBVSxPQUFPOzsyRUFFcEQsQ0FBQyxTQUFVLE9BQU87R0FQZixDQW5FZjtHQTRFQSxhQUFhO1lBQ1gsSUFBQyxTQUFEO0dBRFcsQ0E1RWI7Ozs7Ozs7O0FDUkY7R0FBQTs7QUFBQSxTQUFnQyxvQkFBUSxDQUFSOztBQUNoQyxlQUFnQyxvQkFBUSxDQUFSOztBQUNoQyxnQkFBZ0Msb0JBQVEsQ0FBUjs7QUFDL0IsZ0NBQUQsRUFBVyx5QkFBWCxFQUFrQix5QkFBbEIsRUFBeUIscUJBQXpCLEVBQThCLDJCQUE5QixFQUFzQyxxQ0FBdEMsRUFBbUQ7O0FBRW5ELE9BQU0sQ0FBQyxPQUFQLEdBQWlCLHFCQUVmO0dBQUEsMkJBQTJCLFNBQUMsU0FBRDtZQUN6QixJQUFDLGtCQUFELENBQW1CLFNBQW5CO0dBRHlCLENBQTNCO0dBR0Esb0JBQW9CO1lBQ2xCLElBQUMsa0JBQUQsQ0FBbUIsSUFBQyxNQUFwQjtHQURrQixDQUhwQjtHQU1BLG1CQUFtQjtZQUNqQixDQUVFLFlBRkYsRUFJRSxJQUFDLE1BQUssQ0FBQyxhQUFQLElBQXdCLEVBSjFCLEVBTUUsSUFBQyxNQUFLLENBQUMsWUFBUCxJQUF1QixFQU56QjtHQURpQixDQU5uQjtHQWtCQSxpQkFBaUIsU0FBQyxLQUFEO1lBRWIsZUFBQyxrQkFBRCxXQUVBLG9EQUFDLDZCQUFELElBQXdCLEVBQXhCLENBRkEsRUFJQSxPQUpBO0dBRmEsQ0FsQmpCO0dBMkJBLG1CQUFtQixTQUFDLEtBQUQ7O09BQUMsUUFBUTs7S0FFMUIsSUFBQyxVQUFELEdBQWE7WUFDYix3QkFBWSxlQUFDLGdCQUFELENBQWlCLEtBQWpCLFVBQTRCLEtBQUMsVUFBRCxDQUE1QixFQUF3QyxLQUFDLGFBQUQsQ0FBeEMsQ0FBWjtHQUhpQixDQTNCbkI7R0FpQ0EsY0FBYyxTQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsTUFBVDtBQUNaO0tBQUEsYUFBYSxNQUFPLEdBQUc7S0FFdkIsSUFBaUMsTUFBSyxXQUF0QztBQUFBLGNBQU8sSUFBQyxlQUFELENBQWdCLE1BQWhCLEVBQVA7O0tBSUEsY0FBYztLQUNkLElBQUcsT0FBTyxHQUFQLEtBQWUsVUFBZixJQUE4QixDQUFDLFFBQU8sVUFBUCxJQUFxQixDQUFDLENBQUMsQ0FBQyxLQUFGLENBQVEsV0FBUixDQUF2QixDQUFqQztPQUNFLE1BQU0sR0FBRyxDQUFDLElBQUosQ0FBUyxJQUFULEVBQVksSUFBWixFQURSOztBQUVBLFlBQU87R0FWSyxDQWpDZDtHQStDQSxnQkFBZ0IsU0FBQyxPQUFEO0FBQ2Q7S0FBQSxhQUFhO0FBQ2I7O09BQ0UsWUFBWSxNQUFNLENBQUM7T0FDbkIsSUFBbUMsT0FBTyxTQUFQLEtBQXFCLFVBQXhEO1NBQUEsWUFBWSxTQUFTLENBQUMsSUFBVixDQUFlLElBQWYsRUFBa0IsSUFBbEIsRUFBWjs7T0FDQSxJQUE2QixTQUE3QjtTQUFBLFVBQVUsQ0FBQyxJQUFYLENBQWdCLFNBQWhCOztBQUhGO1lBTUEsVUFBVSxDQUFDLElBQVgsQ0FBZ0IsR0FBaEI7R0FSYyxDQS9DaEI7Ozs7Ozs7O0FDUEY7O0FBQUEsT0FBTSxDQUFDLE9BQVAsR0FBaUIsYUFDZjtHQUFBLFVBQVUsU0FBQyxHQUFEO0FBQ1I7S0FEVSxlQUFLLG1CQUFPLGlCQUFNO0tBQzVCLElBQW9CLG1CQUFXLFVBQVMsRUFBeEM7QUFBQSxjQUFPLE9BQVA7O1lBQ0E7R0FGUSxDQUFWO0dBSUEsS0FBSyxTQUFDLEdBQUQ7QUFDSDtLQURLLGVBQUssbUJBQU8saUJBQU07S0FDdkIsSUFBb0IsU0FBUyxJQUFULElBQWtCLGVBQWxCLElBQTRCLFVBQVMsRUFBekQ7QUFBQSxjQUFPLE9BQVA7O1lBQ0EsK0JBQTZCO0dBRjFCLENBSkw7R0FRQSxLQUFLLFNBQUMsR0FBRDtBQUNIO0tBREssZUFBSyxtQkFBTyxpQkFBTTtLQUN2QixJQUFvQixTQUFTLElBQVQsSUFBa0IsZUFBbEIsSUFBNEIsVUFBUyxFQUF6RDtBQUFBLGNBQU8sT0FBUDs7WUFDQSxrQ0FBZ0M7R0FGN0IsQ0FSTDs7Ozs7Ozs7QUNERjs7QUFBQSxTQUFnQyxvQkFBUSxDQUFSOztBQUNoQyxzQkFBZ0Msb0JBQVEsRUFBUjs7QUFDaEMsWUFBZ0Msb0JBQVEsRUFBUjs7QUFDaEMsZUFBZ0Msb0JBQVEsQ0FBUjs7QUFDL0IsMEJBQUQsRUFBUSxxQkFBUixFQUFhLG1DQUFiLEVBQXlCLHFDQUF6QixFQUFzQyxpQ0FBdEMsRUFBaUQ7O0FBRWpELE9BQU0sQ0FBQyxPQUFQLEdBQWlCLFlBRWY7R0FBQSxRQUFRLENBQ04sa0JBRE0sRUFFTixRQUZNLENBQVI7R0FLQSxvQkFBb0I7S0FDbEIsSUFBQyxhQUFELEdBQWdCO0tBQ2hCLElBQUMsY0FBRCxHQUFpQjtZQUNqQixJQUFDLG1CQUFELEdBQXNCO0dBSEosQ0FMcEI7R0FVQSxrQkFBa0I7WUFDaEIsSUFBQyxNQUFLLENBQUMsRUFBUCxDQUFVLElBQUMsUUFBRCxFQUFWO0dBRGdCLENBVmxCO0dBYUEsVUFBVTtBQUNSO0tBQUEsUUFBUTtBQUNSO0FBQUE7O09BQ0UsSUFBNkIsaUNBQXlCLHdCQUF0RDtTQUFBLFNBQVMsS0FBSyxDQUFDLFFBQU4sR0FBVDs7QUFERjtBQUVBLFlBQU87R0FKQyxDQWJWO0dBbUJBLFNBQVM7WUFDUCxJQUFDO0dBRE0sQ0FuQlQ7R0FzQkEsY0FBYztZQUNaLElBQUM7R0FEVyxDQXRCZDtHQXlCQSxlQUFlO0tBRWIsSUFBRyx5Q0FBSDtjQUNFLElBQUMsVUFBUyxDQUFDLElBQUksQ0FBQyxNQURsQjtNQUFBO2NBR0UsSUFBQyxVQUFTLENBQUMsS0FIYjs7R0FGYSxDQXpCZjtHQWdDQSxzQkFBc0IsU0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEtBQVA7S0FDcEIsSUFBQyxjQUFjLEdBQWYsR0FBb0I7WUFDcEIsSUFBQyxtQkFBbUIsR0FBcEIsR0FBeUI7R0FGTCxDQWhDdEI7R0FvQ0Esd0JBQXdCLFNBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxLQUFQO0FBQ3RCO0tBQUEsSUFBQyxjQUFjLEdBQWYsR0FBb0I7S0FDcEIsSUFBRyxLQUFIO09BQ0UsSUFBQyxtQkFBbUIsR0FBcEIsR0FBeUIsRUFEM0I7TUFBQTtPQUdFLE9BQU8sSUFBQyxtQkFBbUIsSUFIN0I7OztXQU1VLENBQUMsU0FBVSxJQUFDOztLQUN0QixJQUFHLEtBQUg7O2NBQ1ksQ0FBQyxjQUFlLElBQUM7UUFEN0I7O0tBS0EsZ0JBQWdCLE1BQU0sRUFBTixFQUFVLElBQUMsY0FBRCxFQUFWLEVBQTRCLElBQUMsY0FBN0I7cUZBQ0QsQ0FBQyxjQUFlO0dBZlQsQ0FwQ3hCO0dBcURBLGVBQWUsU0FBQyxDQUFEO0FBQ2I7S0FBQSxDQUFDLENBQUMsY0FBRjtLQUNBLEtBQWMsSUFBQyxTQUFELEVBQWQ7QUFBQTs7eUVBQ1UsQ0FBQyxTQUFVLEdBQUcsSUFBQztHQUhaLENBckRmOzs7Ozs7OztBQ1JGOztBQUFBLFNBQStCLG9CQUFRLENBQVI7O0FBQy9CLHFCQUErQixvQkFBUSxDQUFSOztBQUMvQixlQUErQixvQkFBUSxDQUFSOztBQUM5QixnQ0FBRCxFQUFXLHFCQUFYLEVBQWdCLG1DQUFoQixFQUE0QixxQ0FBNUIsRUFBeUMsaUNBQXpDLEVBQW9EOztBQUVwRCxPQUFNLENBQUMsT0FBUCxHQUFpQixXQUVmO0dBQUEsU0FBUztZQUNQO09BQUEsUUFBUSxJQUFDLFlBQVQ7T0FDQSxPQUFPLElBQUMsV0FEUjtPQUVBLFFBQVEsSUFBQyxZQUZUOztHQURPLENBQVQ7R0FLQSxhQUFhO1lBQ1gsSUFBQyxXQUFELENBQVksUUFBWixFQUFzQjtPQUFBLE1BQU0sUUFBTjtPQUFnQixRQUFRLElBQUMsTUFBSyxDQUFDLE1BQS9CO01BQXRCO0dBRFcsQ0FMYjtHQVdBLGFBQWEsU0FBQyxLQUFELEVBQVEsS0FBUjs7T0FBUSxRQUFROztLQUMzQixJQUFHLFNBQVMsQ0FBQyxNQUFWLEtBQW9CLENBQXBCLElBQTBCLE9BQU8sS0FBUCxLQUFpQixRQUE5QztPQUNFLFFBQVE7T0FDUixRQUFRLE9BRlY7O0tBR0EsWUFBWSxJQUFDLG9CQUFELENBQXFCLEtBQXJCLENBQVosRUFBeUMsS0FBekM7WUFDQSxJQUFDLFdBQUQsQ0FBWSxRQUFaLEVBQXNCLEtBQXRCO0dBTFcsQ0FYYjtHQWtCQSxxQkFBcUIsU0FBQyxLQUFEO1lBQ25CO09BQUEsTUFBTSxRQUFOO09BQ0EsV0FDeUIsYUFBdkI7U0FBQSxjQUFjLEtBQWQ7UUFBQSxTQUZGOztHQURtQixDQWxCckI7R0F1Q0EsWUFBWSxTQUFDLEdBQUQsRUFBTSxVQUFOO0FBQ1Y7O09BRGdCLGFBQWE7O0tBQzdCLGlCQUFpQjtLQUNqQixjQUFjLFVBQVUsQ0FBQztLQUN6QixPQUFPLFVBQVUsQ0FBQztLQUVsQixZQUFZLElBQUMsbUJBQUQsQ0FBb0IsR0FBcEIsQ0FBWixFQUFzQyxVQUF0QztLQUVBLFVBQVUsQ0FBQyxJQUFYLEdBQWtCLElBQUMsb0JBQUQsQ0FBcUIsVUFBckI7S0FFbEIsZUFBZSxJQUFDLHFCQUFELENBQXNCLFVBQXRCLEVBQWtDLElBQUMsTUFBSyxDQUFDLEtBQXpDLEVBQWdELFdBQWhEO0tBQ2YsV0FBVyxJQUFDLGtCQUFELENBQW1CLFVBQW5CLEVBQStCLFlBQS9CO0tBQ1gsSUFBMkMsY0FBM0M7T0FBQSxXQUFXLEtBQUssQ0FBQyxhQUFOLENBQW9CLFFBQXBCLEVBQVg7O0FBRUEsWUFBTyxTQUFTLFVBQVQ7R0FiRyxDQXZDWjtHQXNEQSxvQkFBb0IsU0FBQyxHQUFEO1lBQ2xCO09BQUEsS0FBMkIsR0FBRCxHQUFLLE9BQS9CO09BQ0EsVUFBd0IsR0FEeEI7T0FFQSxjQUF3QixJQUFDLGNBQUQsRUFBaUIsS0FGekM7T0FHQSx1QkFBd0IsSUFBQyx1QkFIekI7T0FJQSxxQkFBd0IsSUFBQyxxQkFKekI7T0FLQSxjQUF3QixJQUFDLE1BQUssQ0FBQyxZQUwvQjtPQU1BLGVBQXdCLElBQUMsTUFBSyxDQUFDLEtBQUssQ0FBQyxRQUFiLElBQXlCLEVBTmpEOztHQURrQixDQXREcEI7R0ErREEscUJBQXFCLFNBQUMsVUFBRDtBQUNuQjtLQUFBLFNBQVMsT0FBTyxVQUFVLENBQUM7S0FDM0IsSUFBRyx1QkFBSDtjQUNFLFVBQVUsQ0FBQyxLQURiO01BQUEsTUFFSyxJQUFHLFVBQVUsQ0FBQyxRQUFYLElBQXVCLEtBQUssQ0FBQyxPQUFOLENBQWMsVUFBVSxDQUFDLFlBQXpCLENBQTFCO2NBQ0gsY0FERztNQUFBLE1BRUEsSUFBRywwQkFBSDtjQUNILFNBREc7TUFBQSxNQUVBLElBQUcsV0FBVSxTQUFiO2NBQ0gsVUFERztNQUFBLE1BRUEsSUFBRyxXQUFVLFFBQWI7Y0FDSCxRQURHO01BQUEsTUFFQSxJQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBcEIsQ0FBMEIsY0FBMUIsQ0FBSDtjQUNILFdBREc7TUFBQTtjQUdILFNBSEc7O0dBWmMsQ0EvRHJCO0dBa0ZBLHNCQUFzQixTQUFDLEdBQUQsRUFBd0IsS0FBeEIsRUFBK0IsZ0JBQS9CO0FBQ3BCO0tBRHNCLGlCQUFNLGVBQUs7S0FDakMsSUFBOEIsZ0JBQTlCO0FBQUEsY0FBTyxXQUFXLFFBQVgsRUFBUDs7S0FDQSxVQUFVLENBQ1IsZ0JBRFEsRUFDVSxJQUFDLFlBRFgsRUFDd0IsS0FBSyxDQUFDLFdBRDlCLEVBQzJDLGlCQUQzQztBQUdWOztPQUNFLFVBQVUsQ0FBQyxlQUFhLEVBQWQsQ0FBa0I7T0FHNUIsSUFBaUQsZUFBakQ7QUFBQSxnQkFBTyxXQUFXLE9BQU8sQ0FBQyxRQUFSLElBQW9CLE9BQS9CLEVBQVA7O0FBSkY7R0FMb0IsQ0FsRnRCO0dBNkZBLG1CQUFtQixTQUFDLEtBQUQsRUFBUSxZQUFSO0tBQ2pCLElBQUksb0JBQUo7QUFDRSxhQUFTLEtBQUssQ0FBQyxHQUFQLEdBQVcsbUNBQVgsR0FBOEMsS0FBSyxDQUFDLEtBRDlEOztLQUVBLElBQUksc0NBQUo7QUFDRSxhQUFTLEtBQUssQ0FBQyxHQUFQLEdBQVcsT0FBWCxHQUFrQixZQUFsQixHQUErQiwyQkFEekM7O0FBRUEsWUFBTyxJQUFDLE1BQUssQ0FBQyxLQUFNO0dBTEgsQ0E3Rm5COzs7Ozs7OztBQ1BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLHVEQUF1RDtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3ZCQTs7QUFBQSxTQUFnQyxvQkFBUSxDQUFSOztBQUNoQyxxQkFBZ0Msb0JBQVEsQ0FBUjs7QUFDaEMsY0FBZ0Msb0JBQVEsRUFBUjs7QUFDL0Isd0NBQUQsRUFBWTs7QUFDWixPQUFnQyxLQUFLLENBQUMsR0FBdEMsRUFBQyxhQUFELEVBQU0saUJBQU4sRUFBYTs7QUFDYixNQUFLLEtBQUssQ0FBQyxNQUFNLENBQUM7O0FBRWxCLGtCQUFpQixDQUFDLFFBQWxCLEdBQTZCLEtBQUssQ0FBQyxXQUFOLENBRTNCO0dBQUEsYUFBYSxpQ0FBYjtHQUVBLFFBQVEsQ0FBQyxVQUFELENBRlI7R0FJQSxpQkFBaUI7WUFDZjtPQUFBLFFBQVEsTUFBUjtPQUNBLFFBQVEsS0FEUjs7R0FEZSxDQUpqQjtHQVFBLGtCQUFtQjtZQUNqQjtPQUFBLFdBQ0U7U0FBQSxNQUFNLFVBQU47U0FDQSxPQUFPLElBQUMsVUFBUyxDQUFDLEdBRGxCO1NBRUEsU0FBUztrQkFBRyxJQUFDLFVBQVMsQ0FBQztTQUFkLENBRlQ7UUFERjs7R0FEaUIsQ0FSbkI7R0FjQSxLQUFLO1lBQ0gsR0FDRTtPQUFBLFlBQVksSUFBWjtPQUNBLGFBQWEseUJBRGI7T0FFQSxlQUFlLElBQUMsTUFBSyxDQUFDLE1BQVAsSUFBa0IsMkJBRmpDO01BREY7R0FERyxDQWRMO0dBb0JBLFFBQVE7QUFDTjtZQUFBLElBQUk7T0FBQSxXQUFXLFlBQVg7TUFBSixFQUNFLElBQUk7T0FBQSxXQUFXLEdBQUcsZUFBZSxJQUFDLFVBQWhCLENBQUgsQ0FBWDtNQUFKLEVBQ0UsSUFBSTtPQUFBLFdBQVcsSUFBQyxJQUFELEVBQVg7TUFBSixFQUNFLE1BQU0sSUFBQyxVQUFTLENBQUMsU0FBakIsRUFDRSxNQUFNLElBQUMsVUFBUyxDQUFDLFNBQWpCLENBREYsRUFFNEIsSUFBQyxVQUFTLENBQUMsS0FBckMsU0FBSSxJQUFDLFVBQVMsQ0FBQyxLQUFmLFNBRkYsQ0FERixFQUk2Qiw0REFBM0IsYUFBVSxJQUFDLE1BQUssQ0FBQyxNQUFqQixVQUpGLENBREYsQ0FERjtHQURNLENBcEJSO0VBRjJCOzs7Ozs7O0FDUDdCOztBQUFBLFNBQWdDLG9CQUFRLENBQVI7O0FBQ2hDLHFCQUFnQyxvQkFBUSxDQUFSOztBQUMvQixhQUErQixrQkFBL0I7O0FBQ0QsT0FBZ0MsS0FBSyxDQUFDLEdBQXRDLEVBQUMsYUFBRCxFQUFNLGVBQU4sRUFBWTs7QUFFWixrQkFBaUIsQ0FBQyxNQUFsQixHQUEyQixLQUFLLENBQUMsV0FBTixDQUV6QjtHQUFBLGFBQWEsK0JBQWI7R0FFQSxRQUFRO1lBQ04sSUFBSTtPQUFDLFdBQVcsS0FBWjtNQUFKLEVBQ0UsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxJQUFDLE1BQUssQ0FBQyxNQUFiLEVBQXFCLFNBQUMsS0FBRDtjQUNuQixJQUFJO1NBQUMsV0FBVyx5Q0FBWjtRQUFKLEVBQ0UsSUFBSTtTQUFBLFdBQVcsMEJBQVg7U0FBdUMsS0FBSyxXQUFTLEtBQXJEO1FBQUosRUFDRSxJQUFJO1NBQUEsV0FBVyxvQkFBWDtRQUFKLEVBQ0UsRUFBRTtTQUFBLFdBQVUsMEJBQVY7UUFBRixDQURGLEVBRUUsS0FBSztTQUFBLFdBQVcsU0FBWDtRQUFMLEVBQTJCLFFBQTNCLENBRkYsRUFHRSxNQUFJLEtBSE4sRUFJRSxJQUFJO1NBQUEsV0FBVyxVQUFYO1FBQUosQ0FKRixDQURGLENBREY7S0FEbUIsQ0FBckIsQ0FERjtHQURNLENBRlI7RUFGeUI7Ozs7Ozs7QUNMM0I7O0FBQUEsU0FBZ0Msb0JBQVEsQ0FBUjs7QUFDaEMscUJBQWdDLG9CQUFRLENBQVI7O0FBQ2hDLGNBQWdDLG9CQUFRLEVBQVI7O0FBQ2hDLE9BQWdDLG9CQUFRLENBQVIsQ0FBaEMsRUFBQyx1QkFBRCxFQUFXLGlCQUFYLEVBQWtCLGlCQUFsQixFQUF5Qjs7QUFDeEIsd0NBQUQsRUFBWTs7QUFDWixRQUFnQyxLQUFLLENBQUMsR0FBdEMsRUFBQyxjQUFELEVBQU0sa0JBQU4sRUFBYSxrQkFBYixFQUFvQjs7QUFDcEIsTUFBSyxLQUFLLENBQUMsTUFBTSxDQUFDOztBQUVsQixrQkFBaUIsQ0FBQyxJQUFsQixHQUF5QixLQUFLLENBQUMsV0FBTixDQUV2QjtHQUFBLGFBQWEsa0NBQWI7R0FFQSxRQUFRLENBQUMsVUFBRCxDQUZSO0dBSUEsaUJBQWlCO1lBQ2Y7T0FBQSxRQUFRLE1BQVI7T0FDQSxRQUFRLEtBRFI7O0dBRGUsQ0FKakI7R0FRQSxrQkFBa0I7WUFFaEI7T0FBQSxRQUFpQixNQUFqQjtPQUNBLFFBQWlCLE1BRGpCO09BRUEsV0FDRTtTQUFBLFdBQVcsY0FBWDtTQUNBLGFBQWE7a0JBQUcsSUFBQyxVQUFTLENBQUM7U0FBZCxDQURiO1NBRUEsTUFBTTtrQkFBRztTQUFILENBRk47U0FHQSxRQUFRO2tCQUFHO1NBQUgsQ0FIUjtTQUlBLGNBQWM7a0JBQUcsSUFBQyxVQUFTLENBQUM7U0FBZCxDQUpkO1FBSEY7O0dBRmdCLENBUmxCO0dBbUJBLG1CQUFtQjtZQUNqQixJQUFDLFNBQUQsQ0FBVTtPQUFBLE9BQU8sSUFBQyxVQUFTLENBQUMsWUFBbEI7TUFBVjtHQURpQixDQW5CbkI7R0FzQkEsS0FBSztZQUNILEdBQ0U7T0FBQSxhQUFhLHlCQUFiO09BQ0EsZUFBZSxJQUFDLE1BQUssQ0FBQyxNQUFQLElBQWtCLDJCQURqQztNQURGO0dBREcsQ0F0Qkw7R0EyQkEsUUFBUTtZQUNOLE1BQU0sSUFBQyxVQUFTLENBQUMsU0FBakI7R0FETSxDQTNCUjtHQThCQSxXQUFXO0tBQ1QsSUFBQyxRQUFELEdBQWU7S0FDZixJQUFDLFFBQU8sQ0FBQyxTQUFULEdBQXFCLElBQUM7WUFDdEIsSUFBQyxRQUFPLENBQUMsYUFBVCxDQUF1QixJQUFDLEtBQUssS0FBQyxVQUFTLENBQUMsU0FBUyxDQUFDLEdBQXJCLENBQXlCLENBQUMsVUFBaEMsRUFBNEMsQ0FBQyxLQUFNLEdBQTFFO0dBSFMsQ0E5Qlg7R0FtQ0EsYUFBYTtBQUNYO0tBQUEsSUFBSSxDQUFDLENBQUMsS0FBRixDQUFRLElBQUMsUUFBTyxDQUFDLE1BQWpCO0tBQ0osSUFBQyxTQUFELENBQVU7T0FBQSxPQUFPLENBQVA7TUFBVjtLQUNBLElBQUMsaUJBQUQsR0FBb0I7Y0FBQTtnQkFBRztPQUFIO0tBQUE7c0ZBQ1YsQ0FBQyxzQkFBdUIsU0FBUyxHQUFHO0dBSm5DLENBbkNiO0dBeUNBLFFBQVE7QUFDTjtLQUFBLElBQUMsVUFBUyxDQUFDLFNBQVMsQ0FBQyxRQUFyQixHQUFnQyxJQUFDO1lBQ2pDLElBQUk7T0FBQSxXQUFXLEdBQUcsZUFBZSxJQUFDLFVBQWhCLENBQUgsQ0FBWDtNQUFKLEVBQ0UsSUFBSTtPQUFBLFdBQVcsSUFBQyxJQUFELEVBQVg7TUFBSixFQUNrRCxJQUFDLFVBQVMsQ0FBQyxLQUEzRCxTQUFNLElBQUMsVUFBUyxDQUFDLFNBQWpCLEVBQTRCLElBQUMsVUFBUyxDQUFDLEtBQXZDLFVBREYsRUFFRSxJQUFJO09BQUEsV0FBVyxVQUFYO01BQUosRUFDRSxJQUFJO09BQUEsV0FBVyxjQUFYO01BQUosRUFDSyxJQUFDLE1BQUssQ0FBQyxLQUFWLEdBQ0UsSUFDRTtPQUFBLFdBQVcsV0FBWDtPQUNBLFFBQVEsS0FEUjtPQUNlLE9BQU8sS0FEdEI7T0FFQSxLQUFLLElBQUMsTUFBSyxDQUFDLEtBRlo7TUFERixDQURGLFNBREYsRUFNSyxtQ0FBc0IsK0JBQXpCLEdBQ0UsSUFBSTtPQUFBLFdBQVcsYUFBWDtNQUFKLEVBQ0ssSUFBQyxVQUFTLENBQUMsTUFBZCxHQUNFLElBQUk7T0FBQSxXQUFXLG1CQUFYO01BQUosRUFBb0MsSUFBQyxVQUFTLENBQUMsTUFBL0MsQ0FERixTQURGLEVBR0UsSUFBQyxPQUFELEVBSEYsRUFJSyxJQUFDLFVBQVMsQ0FBQyxNQUFkLEdBQ0UsSUFBSTtPQUFBLFdBQVcsbUJBQVg7TUFBSixFQUFvQyxJQUFDLFVBQVMsQ0FBQyxNQUEvQyxDQURGLFNBSkYsQ0FERixHQVFFLElBQUMsT0FBRCxFQWRKLENBREYsQ0FGRixFQWtCNkIsNERBQTNCLGFBQVUsSUFBQyxNQUFLLENBQUMsTUFBakIsVUFsQkYsQ0FERjtHQUZNLENBekNSO0VBRnVCOzs7Ozs7O0FDUnpCOztBQUFBLFNBQWdDLG9CQUFRLENBQVI7O0FBQ2hDLHFCQUFnQyxvQkFBUSxDQUFSOztBQUNoQyxhQUFnQyxvQkFBUSxFQUFSOztBQUMvQixhQUErQixrQkFBL0I7O0FBQ0QsT0FBZ0MsS0FBSyxDQUFDLEdBQXRDLEVBQUMsYUFBRCxFQUFNLGVBQU4sRUFBWSxpQkFBWixFQUFtQjs7QUFFbkIsa0JBQWlCLENBQUMsSUFBbEIsR0FBeUIsS0FBSyxDQUFDLFdBQU4sQ0FFdkI7R0FBQSxhQUFhLDZCQUFiO0dBRUEsUUFBUSxDQUFDLFNBQUQsQ0FGUjtHQUlBLGtCQUFrQjtZQUNoQjtPQUFBLFVBQ0U7U0FBQSxXQUFXO1dBQUcsSUFBK0IsSUFBQyxVQUFTLENBQUMsTUFBMUM7b0JBQUEsVUFBUSxJQUFDLFVBQVMsQ0FBQyxPQUFuQjs7U0FBSCxDQUFYO1FBREY7O0dBRGdCLENBSmxCO0dBUUEsUUFBUTtZQUNOLEtBQUssSUFBQyxVQUFTLENBQUMsUUFBaEIsRUFBMEIsSUFBQyxpQkFBRCxFQUExQjtHQURNLENBUlI7RUFGdUI7Ozs7Ozs7QUNOekI7O0FBQUEsU0FBZ0Msb0JBQVEsQ0FBUjs7QUFDaEMscUJBQWdDLG9CQUFRLENBQVI7O0FBQ2hDLGVBQWdDLG9CQUFRLENBQVI7O0FBQ2hDLGNBQWdDLG9CQUFRLEVBQVI7O0FBQy9CLHdDQUFELEVBQVk7O0FBQ1gsZ0NBQUQsRUFBVyx5QkFBWCxFQUFrQix5QkFBbEIsRUFBeUI7O0FBQ3pCLE9BQWdDLEtBQUssQ0FBQyxHQUF0QyxFQUFDLGFBQUQsRUFBTSxpQkFBTixFQUFhOztBQUNiLE1BQUssS0FBSyxDQUFDLE1BQU0sQ0FBQzs7QUFFbEIsa0JBQWlCLENBQUMsS0FBbEIsR0FBMEIsS0FBSyxDQUFDLFdBQU4sQ0FFeEI7R0FBQSxhQUFhLDhCQUFiO0dBRUEsUUFBUSxDQUFDLFVBQUQsQ0FGUjtHQUlBLGlCQUFpQjtZQUNmO09BQUEsUUFBUSxNQUFSO09BQ0EsUUFBUSxLQURSOztHQURlLENBSmpCO0dBUUEsa0JBQWtCO1lBRWhCO09BQUEsUUFBaUIsTUFBakI7T0FDQSxRQUFpQixNQURqQjtPQUdBLFdBQ0U7U0FBQSxXQUFXLGNBQVg7U0FDQSxhQUFhO2tCQUFHLElBQUMsVUFBUyxDQUFDO1NBQWQsQ0FEYjtTQUVBLE1BQU07a0JBQUcsSUFBQyxVQUFTLENBQUM7U0FBZCxDQUZOO1NBR0EsY0FBYztrQkFBRyxJQUFDLFVBQVMsQ0FBQztTQUFkLENBSGQ7UUFKRjs7R0FGZ0IsQ0FSbEI7R0FtQkEsS0FBSztZQUNILEdBQ0U7T0FBQSxjQUFjLElBQWQ7T0FDQSxhQUFhLHlCQURiO09BRUEsZUFBZSxJQUFDLE1BQUssQ0FBQyxNQUFQLElBQWtCLDJCQUZqQztNQURGO0dBREcsQ0FuQkw7R0F5QkEsUUFBUTtZQUNOLE1BQU0sSUFBQyxVQUFTLENBQUMsU0FBakI7R0FETSxDQXpCUjtHQTRCQSxRQUFRO0FBQ047WUFBQSxJQUFJO09BQUEsV0FBVyxHQUFHLGVBQWUsSUFBQyxVQUFoQixDQUFILENBQVg7TUFBSixFQUNFLElBQUk7T0FBQSxXQUFXLElBQUMsSUFBRCxFQUFYO01BQUosRUFDa0QsSUFBQyxVQUFTLENBQUMsS0FBM0QsU0FBTSxJQUFDLFVBQVMsQ0FBQyxTQUFqQixFQUE0QixJQUFDLFVBQVMsQ0FBQyxLQUF2QyxVQURGLEVBRUUsSUFBSTtPQUFBLFdBQVcsVUFBWDtNQUFKLEVBQ0ssbUNBQXNCLCtCQUF6QixHQUNFLElBQUk7T0FBQSxXQUFXLGFBQVg7TUFBSixFQUNLLElBQUMsVUFBUyxDQUFDLE1BQWQsR0FDRSxJQUFJO09BQUEsV0FBVyxtQkFBWDtNQUFKLEVBQW9DLElBQUMsVUFBUyxDQUFDLE1BQS9DLENBREYsU0FERixFQUdFLElBQUMsT0FBRCxFQUhGLEVBSUssSUFBQyxVQUFTLENBQUMsTUFBZCxHQUNFLElBQUk7T0FBQSxXQUFXLG1CQUFYO01BQUosRUFBb0MsSUFBQyxVQUFTLENBQUMsTUFBL0MsQ0FERixTQUpGLENBREYsR0FRRSxJQUFDLE9BQUQsRUFUSixDQUZGLEVBWTZCLDREQUEzQixhQUFVLElBQUMsTUFBSyxDQUFDLE1BQWpCLFVBWkYsQ0FERjtHQURNLENBNUJSO0VBRndCOzs7Ozs7O0FDVDFCOztBQUFBLFNBQWdDLG9CQUFRLENBQVI7O0FBQ2hDLHFCQUFnQyxvQkFBUSxDQUFSOztBQUNoQyxlQUFnQyxvQkFBUSxDQUFSOztBQUNoQyxjQUFnQyxvQkFBUSxFQUFSOztBQUMvQix3Q0FBRCxFQUFZOztBQUNYLGdDQUFELEVBQVcseUJBQVgsRUFBa0IseUJBQWxCLEVBQXlCOztBQUN6QixPQUFnQyxLQUFLLENBQUMsR0FBdEMsRUFBQyxhQUFELEVBQU0saUJBQU4sRUFBYSxtQkFBYixFQUFxQjs7QUFDckIsTUFBSyxLQUFLLENBQUMsTUFBTSxDQUFDOztBQUVsQixrQkFBaUIsQ0FBQyxNQUFsQixHQUEyQixLQUFLLENBQUMsV0FBTixDQUV6QjtHQUFBLGFBQWEsK0JBQWI7R0FFQSxRQUFRLENBQUMsVUFBRCxDQUZSO0dBSUEsaUJBQWlCO1lBQ2Y7T0FBQSxRQUFRLE1BQVI7T0FDQSxRQUFRLEtBRFI7O0dBRGUsQ0FKakI7R0FRQSxrQkFBa0I7WUFDaEI7T0FBQSxXQUNFO1NBQUEsV0FBVyxjQUFYO1NBQ0EsY0FBYztrQkFBRyxJQUFDLFVBQVMsQ0FBQztTQUFkLENBRGQ7UUFERjtPQUdBLFdBQ0U7U0FBQSxXQUFXLEVBQVg7UUFKRjs7R0FEZ0IsQ0FSbEI7R0FlQSxLQUFLO1lBQ0gsR0FDRTtPQUFBLGNBQWMsSUFBZDtPQUNBLGFBQWEseUJBRGI7T0FFQSxlQUFlLElBQUMsTUFBSyxDQUFDLE1BQVAsSUFBa0IsMkJBRmpDO01BREY7R0FERyxDQWZMO0dBcUJBLGVBQWUsU0FBQyxJQUFEO0tBQ2IsT0FBTyxJQUFDLHdCQUFELENBQXlCLElBQXpCO1lBQ1AsT0FBTztPQUFBLE9BQU8sSUFBSSxDQUFDLEtBQVo7TUFBUCxFQUEwQixJQUFJLENBQUMsS0FBL0I7R0FGYSxDQXJCZjtHQXlCQSxRQUFRO0FBQ047WUFBQSxJQUFJO09BQUEsV0FBVyxHQUFHLGVBQWUsSUFBQyxVQUFoQixDQUFILENBQVg7TUFBSixFQUNFLElBQUk7T0FBQSxXQUFXLElBQUMsSUFBRCxFQUFYO01BQUosRUFDa0QsSUFBQyxVQUFTLENBQUMsS0FBM0QsU0FBTSxJQUFDLFVBQVMsQ0FBQyxTQUFqQixFQUE0QixJQUFDLFVBQVMsQ0FBQyxLQUF2QyxVQURGLEVBRUUsSUFBSTtPQUFBLFdBQVcsVUFBWDtNQUFKLEVBQ0UsT0FBTyxJQUFDLFVBQVMsQ0FBQyxTQUFsQixFQUNFLElBQUksSUFBQyxVQUFTLENBQUMsT0FBZixFQUF3QixJQUFDLGNBQXpCLENBREYsQ0FERixDQUZGLEVBSzZCLDREQUEzQixhQUFVLElBQUMsTUFBSyxDQUFDLE1BQWpCLFVBTEYsQ0FERjtHQURNLENBekJSO0VBRnlCOzs7Ozs7O0FDVDNCOztBQUFBLFNBQWdDLG9CQUFRLENBQVI7O0FBQ2hDLHFCQUFnQyxvQkFBUSxDQUFSOztBQUNoQyxjQUFnQyxvQkFBUSxFQUFSOztBQUNoQyxPQUFnQyxLQUFLLENBQUMsR0FBdEMsRUFBQyxhQUFELEVBQU07O0FBQ0wsa0JBQStCLGtCQUEvQjs7QUFDRCxNQUFLLEtBQUssQ0FBQyxNQUFNLENBQUM7O0FBRWxCLGtCQUFpQixDQUFDLE1BQWxCLEdBQTJCLEtBQUssQ0FBQyxXQUFOLENBRXpCO0dBQUEsYUFBYSwrQkFBYjtHQUVBLFFBQVEsQ0FBQyxVQUFELENBRlI7R0FJQSxrQkFBa0I7WUFDaEI7T0FBQSxXQUNFO1NBQUEsYUFBYztrQkFBRyxJQUFDLFVBQVMsQ0FBQztTQUFkLENBQWQ7U0FDQSxjQUFjO2tCQUFHLElBQUMsVUFBUyxDQUFDO1NBQWQsQ0FEZDtTQUVBLFdBQWM7a0JBQUcsSUFBQyxVQUFTLENBQUMsU0FBWCxJQUF3QjtTQUEzQixDQUZkO1NBR0EsTUFBYztrQkFBRyxJQUFDLFVBQVMsQ0FBQztTQUFkLENBSGQ7UUFERjs7R0FEZ0IsQ0FKbEI7R0FXQSxRQUFRO1lBQ04sSUFBSTtPQUFBLFdBQVcsR0FBRyxlQUFlLElBQUMsVUFBaEIsQ0FBSCxDQUFYO01BQUosRUFDRSxJQUFJO09BQUEsV0FBVyxZQUFYO01BQUosRUFDRSxNQUFNLElBQUMsVUFBUyxDQUFDLFNBQWpCLENBREYsQ0FERjtHQURNLENBWFI7RUFGeUI7Ozs7Ozs7QUNQM0I7O0FBQUEsU0FBZ0Msb0JBQVEsQ0FBUjs7QUFDaEMscUJBQWdDLG9CQUFRLENBQVI7O0FBQ2hDLGVBQWdDLG9CQUFRLENBQVI7O0FBQ2hDLGNBQWdDLG9CQUFRLEVBQVI7O0FBQy9CLHdDQUFELEVBQVk7O0FBQ1gsZ0NBQUQsRUFBVyx5QkFBWCxFQUFrQix5QkFBbEIsRUFBeUI7O0FBQ3pCLE9BQWdDLEtBQUssQ0FBQyxHQUF0QyxFQUFDLGFBQUQsRUFBTSxlQUFOLEVBQVksaUJBQVosRUFBbUI7O0FBQ25CLE1BQUssS0FBSyxDQUFDLE1BQU0sQ0FBQzs7QUEwQmxCLGtCQUFpQixDQUFDLE1BQWxCLEdBQTJCLEtBQUssQ0FBQyxXQUFOLENBRXpCO0dBQUEsYUFBYSwrQkFBYjtHQUVBLFFBQVEsQ0FBQyxVQUFELENBRlI7R0FJQSxrQkFBa0I7WUFDaEI7T0FBQSxhQUFpQixNQUFqQjtPQUNBLFdBQ0U7U0FBQSxXQUFlLFFBQWY7U0FDQSxNQUFlLFVBRGY7UUFGRjtPQUlBLFVBQWlCLE1BSmpCO09BS0EsU0FBaUIsTUFMakI7T0FNQSxVQUFpQixLQU5qQjtPQU9BLFNBQWlCLFNBUGpCO09BUUEsUUFBaUIsTUFSakI7T0FTQSxTQUFpQixJQVRqQjs7R0FEZ0IsQ0FKbEI7R0FnQkEsbUJBQW1CO1lBR2pCLElBQUMsS0FBRCxFQUFPLENBQUMsZUFBUixDQUNFO09BQUEsVUFBVSxJQUFDLFVBQVMsQ0FBQyxRQUFyQjtPQUNBLGFBQWEsSUFBQyxVQUFTLENBQUMsV0FEeEI7T0FFQSxVQUFVLElBQUMsVUFBUyxDQUFDLFFBRnJCO09BR0EsU0FBUyxJQUFDLFVBQVMsQ0FBQyxPQUhwQjtPQUlBLFNBQVMsSUFBQyxVQUFTLENBQUMsT0FKcEI7T0FLQSxRQUFRLElBQUMsVUFBUyxDQUFDLE1BTG5CO09BTUEsTUFBTSxPQU5OO09BT0EsT0FBTyxJQUFDLGVBQUQsRUFQUDtPQVFBLGdCQUFnQixJQUFDLGdCQVJqQjtNQURGO0dBSGlCLENBaEJuQjtHQThCQSxnQkFBZ0I7dUNBQ2QsSUFBQyxlQUFELElBQUMsZUFBZSxJQUFDLFVBQVMsQ0FBQyxPQUFYLEtBQXNCLElBQUMsVUFBUyxDQUFDO0dBRG5DLENBOUJoQjtHQWlDQSxrQkFBa0I7WUFFaEIsSUFBQyxVQUFVLENBQUcsSUFBQyxlQUFELEVBQUgsR0FBMEIsU0FBMUIsR0FBeUMsVUFBekM7R0FGSyxDQWpDbEI7R0FxQ0EsTUFBTTtZQUNKLEVBQUUsSUFBQyxLQUFLLEtBQUMsVUFBUyxDQUFDLFNBQVMsQ0FBQyxHQUFyQixDQUF5QixDQUFDLFVBQWhDLEVBQUY7R0FESSxDQXJDTjtHQXdDQSxpQkFBaUIsU0FBQyxDQUFELEVBQUksR0FBSjtLQUNmLElBQUMsWUFBRCxHQUFlO0tBQ2YsSUFBQyxLQUFELEVBQU8sQ0FBQyxHQUFSLENBQVksSUFBQyxpQkFBRCxFQUFaO1lBQ0EsSUFBQyxVQUFTLENBQUMsU0FBUyxDQUFDLFFBQXJCO0dBSGUsQ0F4Q2pCO0dBNkNBLG1CQUFtQjtZQUNqQixHQUNFO09BQUEsYUFBYSxJQUFDLFVBQVMsQ0FBQyxNQUFYLEtBQXFCLFlBQWxDO01BREY7R0FEaUIsQ0E3Q25CO0dBaURBLG1CQUFtQjtZQUNqQixHQUNFO09BQUEsY0FBYyxJQUFDLFVBQVMsQ0FBQyxNQUFYLEtBQXFCLFlBQW5DO09BQ0EsWUFBWSxJQUFDLFVBQVMsQ0FBQyxNQUFYLEtBQXFCLFVBRGpDO01BREY7R0FEaUIsQ0FqRG5CO0dBc0RBLFFBQVE7QUFDTjtZQUFBLElBQUk7T0FBQSxXQUFXLEdBQUcsZUFBZSxJQUFDLFVBQWhCLENBQUgsQ0FBWDtNQUFKLEVBQ0UsSUFBSTtPQUFBLFdBQVcsSUFBQyxrQkFBRCxFQUFYO01BQUosRUFDa0QsSUFBQyxVQUFTLENBQUMsS0FBM0QsU0FBTSxJQUFDLFVBQVMsQ0FBQyxTQUFqQixFQUE0QixJQUFDLFVBQVMsQ0FBQyxLQUF2QyxVQURGLENBREYsRUFHRSxJQUFJO09BQUEsV0FBVyxJQUFDLGtCQUFELEVBQVg7TUFBSixFQUNFLE1BQU0sSUFBQyxVQUFTLENBQUMsU0FBakIsQ0FERixFQUU2Qiw0REFBM0IsYUFBVSxJQUFDLE1BQUssQ0FBQyxNQUFqQixVQUZGLENBSEY7R0FETSxDQXREUjtFQUZ5Qjs7Ozs7OztBQ2pDM0I7O0FBQUEsU0FBZ0Msb0JBQVEsQ0FBUjs7QUFDaEMscUJBQWdDLG9CQUFRLENBQVI7O0FBQ2hDLGVBQWdDLG9CQUFRLENBQVI7O0FBQ2hDLGNBQWdDLG9CQUFRLEVBQVI7O0FBQy9CLHdDQUFELEVBQVk7O0FBQ1gsZ0NBQUQsRUFBVyx5QkFBWCxFQUFrQix5QkFBbEIsRUFBeUI7O0FBQ3pCLE9BQWdDLEtBQUssQ0FBQyxHQUF0QyxFQUFDLGFBQUQsRUFBTSxpQkFBTixFQUFhOztBQUNiLE1BQUssS0FBSyxDQUFDLE1BQU0sQ0FBQzs7QUFFbEIsa0JBQWlCLENBQUMsSUFBbEIsR0FBeUIsS0FBSyxDQUFDLFdBQU4sQ0FFdkI7R0FBQSxhQUFhLDZCQUFiO0dBRUEsUUFBUSxDQUFDLFVBQUQsQ0FGUjtHQUlBLGlCQUFpQjtZQUNmO09BQUEsUUFBUSxNQUFSO09BQ0EsUUFBUSxLQURSOztHQURlLENBSmpCO0dBUUEsa0JBQWtCO1lBQ2hCO09BQUEsV0FDRTtTQUFBLFdBQVcsY0FBWDtTQUNBLGFBQWE7a0JBQUcsSUFBQyxVQUFTLENBQUM7U0FBZCxDQURiO1NBRUEsTUFBTSxDQUZOO1NBR0EsY0FBYztrQkFBRyxJQUFDLFVBQVMsQ0FBQztTQUFkLENBSGQ7UUFERjtPQUtBLFdBQ0U7U0FBQSxXQUFXLGVBQVg7UUFORjs7R0FEZ0IsQ0FSbEI7R0FpQkEsS0FBSztZQUNILEdBQ0U7T0FBQSxjQUFjLElBQWQ7T0FDQSxhQUFhLHlCQURiO09BRUEsZUFBZSxJQUFDLE1BQUssQ0FBQyxNQUFQLElBQWtCLDJCQUZqQztNQURGO0dBREcsQ0FqQkw7R0F1QkEsUUFBUTtBQUNOO1lBQUEsSUFBSTtPQUFBLFdBQVcsR0FBRyxlQUFlLElBQUMsVUFBaEIsQ0FBSCxDQUFYO01BQUosRUFDRSxJQUFJO09BQUEsV0FBVyxJQUFDLElBQUQsRUFBWDtNQUFKLEVBQ2tELElBQUMsVUFBUyxDQUFDLEtBQTNELFNBQU0sSUFBQyxVQUFTLENBQUMsU0FBakIsRUFBNEIsSUFBQyxVQUFTLENBQUMsS0FBdkMsVUFERixFQUVFLElBQUk7T0FBQSxXQUFXLFVBQVg7TUFBSixFQUNFLFNBQVMsSUFBQyxVQUFTLENBQUMsU0FBcEIsQ0FERixDQUZGLEVBSTZCLDREQUEzQixhQUFVLElBQUMsTUFBSyxDQUFDLE1BQWpCLFVBSkYsQ0FERjtHQURNLENBdkJSO0VBRnVCOzs7Ozs7O0FDVHpCO0dBQUE7O0FBQUEsU0FBZ0Msb0JBQVEsQ0FBUjs7QUFDaEMscUJBQWdDLG9CQUFRLENBQVI7O0FBQ2hDLGVBQWdDLG9CQUFRLENBQVI7O0FBQ2hDLGNBQWdDLG9CQUFRLEVBQVI7O0FBQy9CLHdDQUFELEVBQVk7O0FBQ1gsZ0NBQUQsRUFBVyx5QkFBWCxFQUFrQix5QkFBbEIsRUFBeUI7O0FBQ3pCLE1BQUssS0FBSyxDQUFDLE1BQU0sQ0FBQzs7QUFFbEIsa0JBQWlCLENBQUMsU0FBbEIsR0FBOEIsS0FBSyxDQUFDLFdBQU4sQ0FFNUI7R0FBQSxhQUFhLCtCQUFiO0dBRUEsUUFBUSxDQUFDLFVBQUQsQ0FGUjtHQUlBLGlCQUFpQjtZQUNmO09BQUEsUUFBUSxNQUFSO09BQ0EsUUFBUSxLQURSO09BRUEsZUFBZSxFQUZmOztHQURlLENBSmpCO0dBU0Esa0JBQWtCO1lBQ2hCO09BQUEsV0FDRTtTQUFBLFdBQVcsd0JBQVg7U0FDQSxjQUFjO2tCQUFHLElBQUMsVUFBUyxDQUFDO1NBQWQsQ0FEZDtTQUVBLGFBQWM7a0JBQUcsSUFBQyxVQUFTLENBQUM7U0FBZCxDQUZkO1FBREY7T0FJQSxXQUNFO1NBQUEsV0FBVyxFQUFYO1FBTEY7O0dBRGdCLENBVGxCO0dBaUJBLG1CQUFtQjtBQUNqQjtLQUFBLFNBQVksSUFBQyxVQUFTLENBQUMsT0FBTyxDQUFDLE1BQW5CLEdBQTRCLENBQUMsQ0FBaEMsR0FDUCxJQUFDLFVBQVMsQ0FBQyxPQURKLEdBR1AsSUFBQyxVQUFTLENBQUMsT0FBTyxDQUFDO0tBQ3JCLFVBQ0U7T0FBQSxRQUFRLE1BQVI7T0FDQSxTQUFTLElBQUMsYUFEVjtPQUVBLFdBQVcsQ0FGWDtPQUdBLE9BQU8sQ0FIUDtPQUlBLGlCQUFpQixJQUpqQjs7S0FLRixJQUFHLElBQUMsVUFBUyxDQUFDLGdCQUFkO09BQ0UsT0FBUSxXQUFSLEdBQXFCO1NBQUEsTUFBTSxJQUFDLFVBQVMsQ0FBQyxnQkFBakI7U0FEdkI7O0tBRUEsSUFBRyxJQUFDLFVBQVMsQ0FBQyxRQUFkO09BQ0UsT0FBUSxlQUFSLEdBQXlCLElBQUMsaUJBRDVCOztLQUVBLElBQUMsaUJBQUQ7WUFDQSxJQUFDLEtBQUQsRUFBTyxDQUFDLFNBQVIsQ0FBa0IsT0FBbEI7R0FoQmlCLENBakJuQjtHQW1DQSxrQkFBa0I7QUFDaEI7S0FBQSxJQUFHLGVBQWUsSUFBQyxLQUFELEVBQU8sQ0FBQyxHQUFSLEVBQWxCO09BQ0UsSUFBRyxJQUFDLFVBQVMsQ0FBQyxRQUFkO1NBQ0UsZUFBZSxJQUFDLHNCQUFELENBQXVCLFlBQXZCO1NBQ2YsSUFBQyxnQkFBRCxHQUZGO1FBQUE7U0FJRSxlQUFlLENBQUMsSUFBQyxZQUFELENBQWEsWUFBYixDQUFEO1NBQ2YsSUFBb0MsWUFBYSxHQUFqRDtXQUFBLElBQUMsS0FBRCxFQUFPLENBQUMsR0FBUixDQUFZLFlBQWEsR0FBRSxDQUFDLElBQTVCO1VBTEY7O2NBTUEsSUFBQyxTQUFELENBQVU7U0FBQSxlQUFlLFlBQWY7UUFBVixFQVBGOztHQURnQixDQW5DbEI7R0E2Q0EsdUJBQXVCLFNBQUMsWUFBRDtBQUNyQjtLQUFBLGNBQWMsWUFBWSxDQUFDLEtBQWIsQ0FBbUIsR0FBbkI7S0FDZCxJQUFHLElBQUMsVUFBUyxDQUFDLE9BQU8sQ0FBQyxNQUFuQixHQUE0QixDQUFDLENBQWhDO09BRUUsZUFBZSxDQUFDLENBQUMsTUFBRixDQUFTLElBQUMsVUFBUyxDQUFDLE9BQXBCLEVBQTZCLFNBQUMsSUFBRDtnQkFDMUMsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxXQUFYLEVBQXdCLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUixFQUF4QjtPQUQwQyxDQUE3QjtPQUdmLENBQUMsQ0FBQyxJQUFGLFVBQU8sS0FBQyxVQUFTLENBQUMsT0FBUyxrQ0FBM0IsRUFMRjtNQUFBO09BUUUsZUFBZSxJQUFDLFVBQVMsQ0FBQyxhQVI1Qjs7WUFTQTtHQVhxQixDQTdDdkI7R0EwREEsYUFBYSxTQUFDLFlBQUQ7WUFDWCxDQUFDLENBQUMsSUFBRixDQUFPLElBQUMsVUFBUyxDQUFDLE9BQWxCLEVBQTJCO09BQUEsSUFBSSxTQUFTLFlBQVQsQ0FBSjtNQUEzQjtHQURXLENBMURiO0dBNkRBLE1BQU07WUFDSixFQUFFLElBQUMsS0FBSyxLQUFDLFVBQVMsQ0FBQyxTQUFTLENBQUMsR0FBckIsQ0FBeUIsQ0FBQyxVQUFoQyxFQUFGO0dBREksQ0E3RE47R0FnRUEsY0FBYyxTQUFDLElBQUQ7S0FDWixJQUFHLElBQUMsVUFBUyxDQUFDLGdCQUFYLElBQWdDLElBQUksQ0FBQyxJQUFMLEtBQWEsSUFBQyxVQUFTLENBQUMsZ0JBQTNEO09BRUUsSUFBQyxVQUFTLENBQUMsU0FBUyxDQUFDLE9BQXJCLENBQTZCLElBQUMsS0FBRCxFQUFPLENBQUMsR0FBUixFQUE3QixFQUE0QztnQkFBQSxTQUFDLElBQUQsRUFBTyxRQUFQO1dBRzFDLE9BQU8sSUFBSztXQUVaLEtBQUMsVUFBUyxDQUFDLE9BQU8sQ0FBQyxJQUFuQixDQUF3QixJQUF4QjtXQUNBLEtBQUMsS0FBRCxFQUFPLENBQUMsR0FBUixDQUFZLElBQUksQ0FBQyxJQUFqQjtrQkFDQSxLQUFDLG9CQUFELENBQXFCLElBQXJCO1NBUDBDO09BQUEsUUFBNUMsRUFGRjtNQUFBO09BV0UsSUFBQyxvQkFBRCxDQUFxQixJQUFyQixFQVhGOztZQVlBO0dBYlksQ0FoRWQ7R0ErRUEscUJBQXFCLFNBQUMsSUFBRDtLQUNuQixJQUFHLElBQUMsVUFBUyxDQUFDLFFBQWQ7T0FDRSxJQUFDLFNBQUQsQ0FBVTtTQUFBLGVBQWUsSUFBQyxNQUFLLENBQUMsYUFBYSxDQUFDLE1BQXJCLENBQTRCLElBQTVCLENBQWY7UUFBVjtPQUNBLENBQUMsQ0FBQyxJQUFGLENBQU8sSUFBQyxVQUFTLENBQUMsT0FBbEIsRUFBMkIsSUFBM0IsRUFGRjtNQUFBO09BSUUsSUFBQyxTQUFELENBQVU7U0FBQSxlQUFlLENBQUMsSUFBRCxDQUFmO1FBQVYsRUFKRjs7WUFLQSxXQUFXLElBQUMsVUFBUyxDQUFDLFNBQVMsQ0FBQyxRQUFoQyxFQUEwQyxDQUExQztHQU5tQixDQS9FckI7R0F1RkEsaUJBQWlCO1lBQ2YsSUFBQyxLQUFELEVBQU8sQ0FBQyxHQUFSLENBQVksRUFBWjtHQURlLENBdkZqQjtHQTBGQSxrQkFBa0I7S0FDaEIsSUFBRyxJQUFDLFVBQVMsQ0FBQyxRQUFkO2NBQ0UsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxJQUFDLE1BQUssQ0FBQyxhQUFiLEVBQTRCLElBQTVCLEVBREY7TUFBQTtPQUdFLElBQThCLElBQUMsTUFBSyxDQUFDLGFBQWMsR0FBbkQ7Z0JBQUEsSUFBQyxNQUFLLENBQUMsYUFBYyxHQUFFLENBQUMsR0FBeEI7UUFIRjs7R0FEZ0IsQ0ExRmxCO0dBZ0dBLEtBQUs7WUFDSCxHQUNFO09BQUEsY0FBYyxJQUFkO09BQ0EsYUFBYSx5QkFEYjtPQUVBLGVBQWUsSUFBQyxNQUFLLENBQUMsTUFBUCxJQUFrQiwyQkFGakM7T0FHQSxTQUFTLElBSFQ7TUFERjtHQURHLENBaEdMO0dBdUdBLGFBQWEsU0FBQyxJQUFEO0tBQ1gsSUFBQyxTQUFELENBQVU7T0FBQSxlQUFlLENBQUMsQ0FBQyxPQUFGLENBQVUsSUFBQyxNQUFLLENBQUMsYUFBakIsRUFBZ0MsSUFBaEMsQ0FBZjtNQUFWO0tBQ0EsSUFBZ0MsSUFBQyxVQUFTLENBQUMsT0FBTyxDQUFDLE1BQW5CLEdBQTRCLENBQUMsQ0FBN0Q7T0FBQSxJQUFDLFVBQVMsQ0FBQyxPQUFPLENBQUMsSUFBbkIsQ0FBd0IsSUFBeEI7O1lBQ0EsV0FBVyxJQUFDLFVBQVMsQ0FBQyxTQUFTLENBQUMsUUFBaEMsRUFBMEMsQ0FBMUM7R0FIVyxDQXZHYjtHQTRHQSxRQUFRO0FBQ047WUFBQSxJQUFJO09BQUEsV0FBVyxHQUFHLGVBQWUsSUFBQyxNQUFoQixDQUFILElBQTRCLFlBQXZDO01BQUosRUFDRSxJQUFJO09BQUEsV0FBVyxVQUFYO01BQUosRUFDa0QsQ0FBQyxJQUFDLFVBQVMsQ0FBQyxRQUE1RCxTQUFNLElBQUMsVUFBUyxDQUFDLFNBQWpCLEVBQTRCLElBQUMsVUFBUyxDQUFDLEtBQXZDLFVBREYsRUFFRSxNQUFNLElBQUMsVUFBUyxDQUFDLFNBQWpCLENBRkYsRUFHa0QsSUFBQyxVQUFTLENBQUMsUUFBM0QsU0FBTSxJQUFDLFVBQVMsQ0FBQyxTQUFqQixFQUE0QixJQUFDLFVBQVMsQ0FBQyxLQUF2QyxVQUhGLENBREYsRUFLRSxJQUFJO09BQUEsV0FBVyxJQUFDLElBQUQsRUFBWDtNQUFKLEVBQ0ssSUFBQyxVQUFTLENBQUMsUUFBZCxHQUNFLENBQUMsQ0FBQyxHQUFGLENBQU0sSUFBQyxNQUFLLENBQUMsYUFBYixFQUE0QjtjQUFBLFNBQUMsSUFBRDtnQkFDMUIsSUFBSTtXQUFBLFdBQVcsS0FBWDtVQUFKLEVBQ0UsSUFBSTtXQUFBLFdBQVcseUNBQVg7VUFBSixFQUNFLEVBQUU7V0FBQSxXQUFXLFdBQVg7VUFBRixFQUEwQixJQUFJLENBQUMsSUFBL0IsQ0FERixFQUVFLEVBQ0U7V0FBQSxXQUFXLHVDQUFYO1dBQ0EsU0FBUyxDQUFDLENBQUMsT0FBRixDQUFVLEtBQUMsWUFBWCxFQUF3QixJQUF4QixDQURUO1dBRUEsT0FBTyxrQkFGUDtVQURGLENBRkYsQ0FERjtPQUQwQjtLQUFBLFFBQTVCLENBREYsU0FERixFQVVLLElBQUMsTUFBSyxDQUFDLGFBQWEsQ0FBQyxNQUFyQixHQUE4QixDQUE5QixJQUFtQyxJQUFDLFVBQVMsQ0FBQyxRQUFqRCxHQUNFLElBQUk7T0FBQSxXQUFXLEtBQVg7TUFBSixFQUNFLElBQUk7T0FBQSxXQUFXLHlDQUFYO01BQUosRUFDRSxFQUFFO09BQUEsV0FBVyxXQUFYO01BQUYsRUFBMEIsUUFDeEIsSUFBQyxVQUFTLENBQUMsS0FBSyxDQUFDLFdBQWpCLEVBRHdCLEdBQ1MsS0FEbkMsQ0FERixDQURGLENBREYsU0FWRixFQWU2QiwwREFBM0IsYUFBVSxJQUFDLE1BQUssQ0FBQyxNQUFqQixVQWZGLENBTEY7R0FETSxDQTVHUjtFQUY0QiIsImZpbGUiOiJmcmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBmNjdmMGU3YzYyOWQ0MmVkYzMyZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID1cbiAgIyBGcmlnIGNvcmUgbWl4aW5zXG4gIE1peGluOiByZXF1aXJlIFwiLi9mcmlnL21peGlucy9mcmlnX21peGluLmNvZmZlZVwiXG4gIElucHV0TWl4aW46IHJlcXVpcmUgXCIuL2ZyaWcvbWl4aW5zL2lucHV0X21peGluLmNvZmZlZVwiXG4gIEZvcm1NaXhpbjogcmVxdWlyZSBcIi4vZnJpZy9taXhpbnMvZm9ybV9taXhpbi5jb2ZmZWVcIlxuXG4gICMgRnJpZyBleHRlbnNpb24gcG9pbnRzXG4gIHR5cGVNYXBwaW5nOiByZXF1aXJlIFwiLi9mcmlnL3R5cGVfbWFwcGluZy5jb2ZmZWVcIlxuICB2YWxpZGF0aW9uczogcmVxdWlyZSBcIi4vZnJpZy92YWxpZGF0aW9ucy5jb2ZmZWVcIlxuXG4jIEZyaWdnaW5nIEJvb3RzdHJhcCdzIGRlZmF1bHQgaW5wdXQgY29tcG9uZW50c1xuQWRkQm9vdHN0cmFwSW5wdXRzID0gKGlucHV0cykgLT5cbiAgcmVxdWlyZSBcIi4vZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwLyN7a30uY29mZmVlXCIgZm9yIGsgaW4gaW5wdXRzXG5cbkFkZEJvb3RzdHJhcElucHV0cyBbXG4gIFwiY2hlY2tib3hcIlxuICBcImVycm9yc1wiXG4gIFwiZm9ybVwiXG4gIFwiaW5wdXRcIlxuICBcInNlbGVjdFwiXG4gIFwic3VibWl0XCJcbiAgXCJzd2l0Y2hcIlxuICBcInRleHRcIlxuICBcInR5cGVhaGVhZFwiXG5dXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy5jb2ZmZWVcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuRm9ybUJ1aWxkZXIgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vZm9ybV9idWlsZGVyLmNvZmZlZVwiXG5cbm1vZHVsZS5leHBvcnRzID0gZnJpZ01peGluID1cbiAgZnJpZzogKHByb3BzLCBjaGlsZHJlbikgLT5cbiAgICBpc0NvZmZlZXNjcmlwdCA9ICFwcm9wcy5jb250ZW50P1xuICAgIG5ldyBGb3JtQnVpbGRlcihALCBwcm9wcywgY2hpbGRyZW4sIGlzQ29mZmVlc2NyaXB0KS5yZW5kZXIoKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9taXhpbnMvZnJpZ19taXhpbi5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmFkZG9ucztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3QuYWRkb25zXCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZnJpZ0RlZmF1bHRzICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi9kZWZhdWx0cy5jb2ZmZWVcIlxuZnJpZ1RoZW1lcyAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi90aGVtZXMuY29mZmVlXCJcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBGb3JtQnVpbGRlclxuICBjb25zdHJ1Y3RvcjogKEBwYXJlbnQsIEBvcHRzID0ge30sIEBjYiA9ICgtPiksIEBpc0NvZmZlZXNjcmlwdCkgLT5cbiAgICBAcHJvcHMgPSB7fVxuICAgIGZvciBrIGluIFtcImRhdGFcIiwgXCJyZWZcIiwgXCJ0eXBlTWFwcGluZ1wiLCBcImVycm9yc1wiLCBcIm9uQ2hhbmdlXCJdXG4gICAgICBAcHJvcHNba10gPSBAb3B0c1trXVxuICAgICAgZGVsZXRlIEBvcHRzW2tdXG4gICAgIyBAcHJvcHMudmFsaWRhdGlvblN0YXRlID0ge31cbiAgICBAcHJvcHNba10gPSB2IGZvciBrLCB2IG9mIEBfZGVmYXVsdHMoKVxuXG4gIF9kZWZhdWx0czogLT5cbiAgICB0eXBlOiAgICAgICAgICBcImZvcm1cIlxuICAgIHJlZjogICAgICAgICAgIFwiZm9ybVwiXG4gICAgY2I6ICAgICAgICAgICAgQGNiXG4gICAgcGFyZW50OiAgICAgICAgQHBhcmVudFxuICAgIHRoZW1lOiAgICAgICAgIEBfdGhlbWUoKVxuICAgIHRoZW1lRGVmYXVsdHM6IEBfdGhlbWUoKS5kZWZhdWx0c1xuICAgIGZvcm1EZWZhdWx0czogIEBvcHRzXG5cbiAgIyBDcmVhdGUgYSB0aGVtZS1zcGVjaWZpYyBmb3JtIFJlYWN0IGVsZW1lbnRcbiAgcmVuZGVyOiAtPlxuICAgIEZvcm0gPSBAX3RoZW1lKCkuRm9ybVxuICAgIEZvcm0gPSBSZWFjdC5jcmVhdGVGYWN0b3J5IEZvcm0gaWYgQGlzQ29mZmVlc2NyaXB0XG4gICAgRm9ybSBAcHJvcHNcblxuICAjIHJldHVybnMgdGhlIHRoZW1lIGJhc2VkIG9uIGEgY2FzY2FkaW5nIGxvb2t1cFxuICBfdGhlbWU6IC0+XG4gICAgdGhlbWVOYW1lID0gQG9wdHMudGhlbWUgfHw9IGZyaWdEZWZhdWx0cy50aGVtZVxuICAgIHRocm93IFwiQSB0aGVtZSBuYW1lIGlzIHJlcXVpcmVkXCIgdW5sZXNzIHRoZW1lTmFtZT9cbiAgICB0aGVtZSA9IGZyaWdUaGVtZXNbdGhlbWVOYW1lXVxuICAgIHRocm93IFwiRnJpZy4je3RoZW1lTmFtZX0gZG9lcyBub3QgZXhpc3RcIiB1bmxlc3MgdGhlbWU/XG4gICAgcmV0dXJuIHRoZW1lXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnL2Zvcm1fYnVpbGRlci5jb2ZmZWVcbiAqKi8iLCJmcmlnSGVscGVycyA9IHJlcXVpcmUgXCIuL2hlbHBlcnMuY29mZmVlXCJcbnR5cGVNYXBwaW5nID0gcmVxdWlyZSBcIi4vdHlwZV9tYXBwaW5nLmNvZmZlZVwiXG57aHVtYW5pemUsIGNsb25lLCBtZXJnZSwgbWFwLCBjYXBpdGFsaXplLCBndWVzc1R5cGV9ID0gZnJpZ0hlbHBlcnNcblxuIyBXaGVuIGluIGRvdWJ0IGFkZCBkZWZhdWx0cyBpbiBhbHBoYWJldGljYWwgb3JkZXJcbiMgRGVmYXVsdHMgY2FuIGRlcGVuZCBvbiBwcmV2aW91cyBkZWZhdWx0IHZhbHVlcyBpZiB0aGV5IGFyZVxuIyBkZWZpbmVkIGFmdGVyIHRoZWlyIGRlcGVuZGVuY2llcy5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHMgPVxuICAjIEZvciBGcmlnIGludGVybmFsIHVzZSBvbmx5XG4gIGNoaWxkcmVuOiAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gIGZpZWxkS2V5OiAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gIGZvcm1SZWY6ICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gIG9uRnJpZ2dpbmdDaGlsZEluaXQ6ICAgdW5kZWZpbmVkXG4gIG9uRnJpZ2dpbmdDaGlsZENoYW5nZTogdW5kZWZpbmVkXG4gIHZhbGlkYXRpb25TdGF0ZTogICAgICAgdW5kZWZpbmVkXG5cbiAgIyBQdWJsaWMgc2V0dGluZ3NcbiAgZGF0YTogICAgICAgICAgICAtPiB7fVxuICB0eXBlOiAgICAgICAgICAgIHVuZGVmaW5lZFxuICBpbml0aWFsVmFsdWU6ICAgIHVuZGVmaW5lZFxuICB0aXRsZTogICAgICAgICAgIC0+IGh1bWFuaXplIEBmcmlnUHJvcHMuZmllbGRLZXlcbiAgbGFiZWw6ICAgICAgICAgICAtPiBAZnJpZ1Byb3BzLnRpdGxlXG4gIHBsYWNlaG9sZGVyOiAgICAgLT4gQGZyaWdQcm9wcy50aXRsZVxuICBodG1sSW5wdXRUeXBlOiAgIC0+IHR5cGVNYXBwaW5nW0BmcmlnUHJvcHMudHlwZV0uaHRtbElucHV0VHlwZVxuICBvcHRpb25zOiAgICAgICAgIHVuZGVmaW5lZFxuICBsYXlvdXQ6ICAgICAgICAgIHVuZGVmaW5lZFxuICBjbGFzc05hbWU6ICAgICAgIHVuZGVmaW5lZFxuICBkaXNhYmxlZDogICAgICAgIHVuZGVmaW5lZFxuICBtdWx0aXBsZTogICAgICAgIHVuZGVmaW5lZFxuICB0aGVtZTogICAgICAgICAgIFwiZnJpZ2dpbmdCb290c3RyYXBcIlxuXG4gICMgVmFsaWRhdGlvbiBmbGFnc1xuICByZXF1aXJlZDogICAgICAgIC0+IEBmcmlnUHJvcHMudHlwZSAhPSBcImJvb2xlYW5cIlxuICBtaW46ICAgICAgICAgICAgIHVuZGVmaW5lZFxuICBtYXg6ICAgICAgICAgICAgIHVuZGVmaW5lZFxuXG4gICMgQ2FsbGJhY2tzXG4gIG9uQ2hhbmdlOiAgICAgICAgdW5kZWZpbmVkXG4gIG9uU3VibWl0OiAgICAgICAgdW5kZWZpbmVkXG5cbiAgIyBET00gYXR0cmlidXRlcyArIFJlYWN0IHJlZiArIGNhbGxiYWNrcyBmb3IgdGhlIGZvcm0gZWxlbWVudFxuICBmb3JtSHRtbDpcbiAgICByZWY6ICAgICAgICAgICAtPiBAZnJpZ1Byb3BzLmZvcm1SZWYgICAgICMgRm9yIEZyaWcgaW50ZXJuYWwgdXNlIG9ubHlcbiAgICBvblN1Ym1pdDogICAgICAtPiBAX2ZyaWdPblN1Ym1pdCAgICAgICAgICMgRm9yIEZyaWcgaW50ZXJuYWwgdXNlIG9ubHlcbiAgIyBET00gYXR0cmlidXRlcyBmb3IgdGhlIGxhYmVsIGVsZW1lbnRcbiAgbGFiZWxIdG1sOlxuICAgIGh0bWxGb3I6ICAgICAgIC0+IEBmcmlnUHJvcHMuZmllbGRLZXlcbiAgIyBET00gYXR0cmlidXRlcyArIFJlYWN0IHJlZiArIGNhbGxiYWNrcyBmb3IgdGhlIGlucHV0IGVsZW1lbnRcbiAgaW5wdXRIdG1sOlxuICAgIHJlZjogICAgICAgICAgIFwiaW5wdXRcIiAgICAgICAgICAgICAgICAgICAjIEZvciBGcmlnIGludGVybmFsIHVzZSBvbmx5XG4gICAgbmFtZTogICAgICAgICAgLT4gQGZyaWdQcm9wcy5maWVsZEtleVxuICAgIGF1dG9Gb2N1czogICAgIC0+IEBmcmlnUHJvcHMuYXV0b0ZvY3VzXG4gICAgb25DaGFuZ2U6ICAgICAgLT4gQF9mcmlnT25DaGFuZ2UgICAgICAgICAjIEZvciBGcmlnIGludGVybmFsIHVzZSBvbmx5XG4gICAgb25CbHVyOiAgICAgICAgLT4gQF9mcmlnT25CbHVyICAgICAgICAgICAjIEZvciBGcmlnIGludGVybmFsIHVzZSBvbmx5XG4gICAgY2xhc3NOYW1lOiAgICAgLT4gQGZyaWdQcm9wcy5jbGFzc05hbWVcbiAgICBkaXNhYmxlZDogICAgICAtPiBAZnJpZ1Byb3BzLmRpc2FibGVkXG4gICAgbXVsdGlwbGU6ICAgICAgLT4gQGZyaWdQcm9wcy5tdWx0aXBsZVxuICAjIFRoZSBjb21waWxlZCBsaXN0IG9mIHZhbGlkYXRpb25zIHRvIHJ1biAoYmFzZWQgb24gdmFsaWRhdGlvbiBmbGFncyAvXFwpXG4gIHZhbGlkYXRpb25zOiAtPlxuICAgIHJlcXVpcmVkOiAgICAgIEBmcmlnUHJvcHMucmVxdWlyZWRcbiAgICBtaW46ICAgICAgICAgICBAZnJpZ1Byb3BzLm1pbiBpZiBAZnJpZ1Byb3BzLm1pbj9cbiAgICBtYXg6ICAgICAgICAgICBAZnJpZ1Byb3BzLm1heCBpZiBAZnJpZ1Byb3BzLm1heD9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvZGVmYXVsdHMuY29mZmVlXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBoZWxwZXJzID1cbiAgaHVtYW5pemU6IChrZXkpIC0+XG4gICAgcmV0dXJuIHVuZGVmaW5lZCB1bmxlc3Mga2V5P1xuICAgIGh1bWFuU3RyaW5nID0ga2V5LnJlcGxhY2UoLyhbQS1aXXxbMC05XSt8X1thLXpdKS9nLCBcIiAkMVwiKS5yZXBsYWNlIC9fL2csIFwiXCJcbiAgICByZXR1cm4gaHVtYW5TdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIGh1bWFuU3RyaW5nWzEuLl0udG9Mb3dlckNhc2UoKVxuXG4gIGNsb25lOiAob2JqKSAtPlxuICAgIG9iakNsb25lID0ge31cbiAgICBvYmpDbG9uZVtrXSA9IHYgZm9yIGssIHYgb2Ygb2JqXG4gICAgcmV0dXJuIG9iakNsb25lXG5cbiAgbWVyZ2U6ICh0YXJnZXQsIG90aGVycy4uLikgLT5cbiAgICB0YXJnZXQgfHw9IHt9XG4gICAgZm9yIG90aGVyIGluIG90aGVyc1xuICAgICAgdGFyZ2V0W2tdID0gdiBmb3IgaywgdiBvZiAob3RoZXIgfHwge30pXG4gICAgcmV0dXJuIHRhcmdldFxuXG4gIG1hcDogKGFycmF5LCBmbikgLT5cbiAgICBvdXQgPSBbXVxuICAgIG91dC5wdXNoIGZuIGsgZm9yIGsgaW4gYXJyYXlcbiAgICByZXR1cm4gb3V0XG5cbiAgbWFwT2JqOiAob2JqLCBmbikgLT5cbiAgICBvdXQgPSB7fVxuICAgIG91dFtrXSA9IGZuIGssIHYgZm9yIGssIHYgb2Ygb2JqXG4gICAgcmV0dXJuIG91dFxuXG4gICMgVGFrZXMgYSBsaXN0IG9mIGRlZmF1bHRzIHRvIGluaGVyaXQgZnJvbSwgdGhlIG9iamVjdCBpdHNlbGYgYW5kIGFuIG9wdGlvbmFsXG4gICMgY2FsbGJhY2sgcGFyYW1ldGVyIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGFkanVzdCB0aGUgdmFsdWUgb2YgZWFjaCBwYXJhbWV0ZXIuXG4gICMgVGhpcyBmdW5jdGlvbiBvcGVyYXRlcyBkZWVwbHkgb24gbmVzdGVkIG9iamVjdHMuXG4gICMgVGhlIHJldHVybmVkIHZhbHVlIGhhcyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICMgKiBUaGUga2V5cyBhcmUgdGhlIHN1cGVyc2V0IG9mIGFsbCBrZXlzIGZyb20gYWxsIHRoZSBsYXllci5cbiAgIyAqIFRoZSBrZXlzIGFyZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgZGVmYXVsdHMgd2l0aCBrZXlzIGZyb20gb3RoZXIgbGF5ZXJzXG4gICMgICBiZWluZyBhcHBlbmRlZCBhZnRlciB0aGUgZGVmYXVsdHMuXG4gIHNldERlZmF1bHRzOiAobGF5ZXJzLi4uLCBjYikgLT5cbiAgICAjIE5vIGNhbGxiYWNrOiBEZWZhdWx0aW5nIHRoZSBjYWxsYmFjayB0byBhIHBhc3N0aHJvdWdoIGZ1bmN0aW9uXG4gICAgaWYgdHlwZW9mKGNiKSAhPSBcImZ1bmN0aW9uXCJcbiAgICAgIGxheWVycy5wdXNoIGNiXG4gICAgICBjYiA9IChrLCB2KSAtPiB2XG4gICAgIyBzZXR0aW5nIHRoZSB0YXJnZXQgdG8gdGhlIGZpcnN0IGxheWVyXG4gICAgdGFyZ2V0ID0gbGF5ZXJzW2xheWVycy5sZW5ndGggLSAxXSB8fCB7fVxuICAgICMgY2xvbmluZyBhbmQgcmV2ZXJzaW5nIHRoZSBsYXllcnMgZm9yIHVzZSBpbiB0aGUgaXRlcmF0b3JcbiAgICByZXZlcnNlZExheWVycyA9IGxheWVycy5zbGljZSgwKS5yZXZlcnNlKClcbiAgICAjIFRoZSBpdGVyYXRvciBpcyB1c2VkIHRvIHNldCBhIGZpbmFsIHZhbHVlIGZvciBlYWNoIGtleSBpbiB0aGUgcmV0dXJuZWRcbiAgICAjIG9iamVjdFxuICAgIGl0ZXJhdG9yID0gKGssIHYpIC0+XG4gICAgICAjIFNldHRpbmcgdGhlIHZhbHVlIGZvciBub24tb2JqZWN0cyBieSBcImZhaWxpbmcgdGhyb3VnaFwiIHRoZSBkZWZhdWx0c1xuICAgICAgIyB1bnRpbCBhIG5vbi1udWxsIHZhbHVlIGlzIGZvdW5kXG4gICAgICB2YWwgPSB1bmRlZmluZWRcbiAgICAgIHZhbCA/PSBsYXllcltrXSBmb3IgbGF5ZXIgaW4gcmV2ZXJzZWRMYXllcnNcbiAgICAgIGNiIGssIHZhbCwgbGF5ZXJzXG4gICAgIyBSZWN1cnNpdmVseSBtYXBwaW5nIHRoZSBpdGVyYXRvciBvdmVyIG5lc3RlZCBvYmplY3RzXG4gICAgZm9yIGssIHYgb2YgaGVscGVycy5tZXJnZSB7fSwgbGF5ZXJzLi4uXG4gICAgICBpZiBpc0NvbmZpZ09iaiBsYXllcnNbMF1ba11cbiAgICAgICAgbmFtZXNwYWNlZExheWVycyA9IGhlbHBlcnMubWFwIGxheWVycywgKGxheWVyKSAtPiBsYXllcltrXSB8fCB7fVxuICAgICAgICB2ID0gaGVscGVycy5zZXREZWZhdWx0cyBuYW1lc3BhY2VkTGF5ZXJzLi4uLCBjYlxuICAgICAgZWxzZVxuICAgICAgICB2ID0gaXRlcmF0b3IgaywgdlxuICAgICAgdGFyZ2V0W2tdID0gdlxuICAgIHJldHVybiB0YXJnZXRcblxuICBpc0NvbmZpZ09iajogKG9iaikgLT5cbiAgICB0eXBlID0gdHlwZW9mIG9ialxuICAgIHJldHVybiAoXG4gICAgICB0eXBlICE9IFwic3RyaW5nXCIgYW5kXG4gICAgICB0eXBlICE9IFwibnVtYmVyXCIgYW5kXG4gICAgICB0eXBlICE9IFwiYm9vbGVhblwiIGFuZFxuICAgICAgdHlwZSAhPSBcImZ1bmN0aW9uXCIgYW5kXG4gICAgICB0eXBlICE9IFwidW5kZWZpbmVkXCIgYW5kXG4gICAgICBvYmogICE9IG51bGwgYW5kXG4gICAgICBvYmoubGVuZ3RoID09IHVuZGVmaW5lZFxuICAgIClcblxuICBjYXBpdGFsaXplOiAoc3RyaW5nKSAtPlxuICAgIHJldHVybiB1bmRlZmluZWQgdW5sZXNzIHN0cmluZz9cbiAgICBcIiN7c3RyaW5nWzBdLnRvVXBwZXJDYXNlKCl9I3tzdHJpbmdbMS4uXX1cIlxuXG5cbntodW1hbml6ZSwgY2xvbmUsIG1lcmdlLCBtYXAsIG1hcE9iaiwgaXNDb25maWdPYmosIHNldERlZmF1bHRzfSA9IGhlbHBlcnNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvaGVscGVycy5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHR5cGVNYXBwaW5nID1cbiAgZm9ybTogICAgICAgICB7dGVtcGxhdGU6IFwiZm9ybVwifVxuICBlcnJvcnM6ICAgICAgIHt0ZW1wbGF0ZTogXCJlcnJvcnNcIn1cbiAgc3VibWl0OiAgICAgICB7dGVtcGxhdGU6IFwic3VibWl0XCIsICAgaHRtbElucHV0VHlwZTogXCJzdWJtaXRcIn1cbiAgc3RyaW5nOiAgICAgICB7dGVtcGxhdGU6IFwiaW5wdXRcIiwgICAgaHRtbElucHV0VHlwZTogXCJzdHJpbmdcIn1cbiAgcGFzc3dvcmQ6ICAgICB7dGVtcGxhdGU6IFwiaW5wdXRcIiwgICAgaHRtbElucHV0VHlwZTogXCJwYXNzd29yZFwifVxuICBlbWFpbDogICAgICAgIHt0ZW1wbGF0ZTogXCJpbnB1dFwiLCAgICBodG1sSW5wdXRUeXBlOiBcImVtYWlsXCJ9XG4gIHVybDogICAgICAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwidXJsXCJ9XG4gIHRlbDogICAgICAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwidGVsXCJ9XG4gIHNlYXJjaDogICAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwic2VhcmNoXCJ9XG4gIHV1aWQ6ICAgICAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwidGV4dFwifVxuICBib29sZWFuOiAgICAgIHt0ZW1wbGF0ZTogXCJjaGVja2JveFwiLCBodG1sSW5wdXRUeXBlOiBcImNoZWNrYm94XCJ9XG4gIHRleHQ6ICAgICAgICAge3RlbXBsYXRlOiBcInRleHRcIn1cbiAgZmlsZTogICAgICAgICB7dGVtcGxhdGU6IFwiZmlsZVwiLCAgICAgaHRtbElucHV0VHlwZTogXCJmaWxlXCJ9XG4gIGhpZGRlbjogICAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwiaGlkZGVuXCJ9XG4gIGludGVnZXI6ICAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwibnVtYmVyXCJ9XG4gIGZsb2F0OiAgICAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwibnVtYmVyXCJ9XG4gIGRlY2ltYWw6ICAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwibnVtYmVyXCJ9XG4gIHJhbmdlOiAgICAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwicmFuZ2VcIn1cbiAgIyBkYXRldGltZTogICAgIHt0ZW1wbGF0ZTogXCJkYXRldGltZVwifVxuICAjIGRhdGU6ICAgICAgICAge3RlbXBsYXRlOiBcImRhdGV0aW1lXCJ9XG4gICMgdGltZTogICAgICAgICB7dGVtcGxhdGU6IFwiZGF0ZXRpbWVcIn1cbiAgc2VsZWN0OiAgICAgICB7dGVtcGxhdGU6IFwic2VsZWN0XCJ9XG4gIG11bHRpc2VsZWN0OiAge3RlbXBsYXRlOiBcInNlbGVjdFwifVxuICB0eXBlYWhlYWQ6ICAgIHt0ZW1wbGF0ZTogXCJ0eXBlYWhlYWRcIn1cbiAgIyByYWRpb0J1dHRvbnM6IHt0ZW1wbGF0ZTogXCJyYWRpb0J1dHRvbnNcIn1cbiAgIyBjaGVja0JveGVzOiAgIHt0ZW1wbGF0ZTogXCJjaGVja0JveGVzXCJ9XG4gICMgY291bnRyeTogICAgICB7dGVtcGxhdGU6IFwiY291bnRyeVwifVxuICAjIHRpbWVab25lOiAgICAge3RlbXBsYXRlOiBcInRpbWVab25lXCJ9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3R5cGVfbWFwcGluZy5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHRoZW1lcyA9XG4gICMgRnJpZyBkZWZhdWx0IHRoZW1lIChGcmlnZ2luZyBCb290c3RyYXApXG4gIGZyaWdnaW5nQm9vdHN0cmFwOiByZXF1aXJlIFwiLi90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwLmNvZmZlZVwiXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy5jb2ZmZWVcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZnJpZ0hlbHBlcnMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vaGVscGVycy5jb2ZmZWVcIlxue2h1bWFuaXplLCBjbG9uZSwgbWVyZ2UsIG1hcH0gPSBmcmlnSGVscGVyc1xue3NwYW4sIGl9ICAgICAgICAgICAgICAgICAgICAgPSBSZWFjdC5ET01cbnJlcXVpcmUgXCIuLi8uLi8uLi9zdHlsZXNoZWV0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAuc3R5bFwiXG5cbm1vZHVsZS5leHBvcnRzID0gZnJpZ2dpbmdCb290c3RyYXAgPVxuICAjICMgT3B0aW9uYWw6IGEgdGhlbWUtc3BlY2lmaWMgbGlzdCBvZiBkZWZhdWx0cyB0aGF0IG92ZXJyaWRlIHRoZSBnbG9iYWxcbiAgIyAjIEZyaWcuZGVmYXVsdHNcbiAgZGVmYXVsdHM6XG4gICAgbGF5b3V0OiAgICAgICAgICBcInZlcnRpY2FsXCJcbiAgICAjIFNpemVzXG4gICAgeHM6ICAgICAgICAgICAgICBcIjEyXCJcbiAgICBzbTogICAgICAgICAgICAgIC0+IEBmcmlnUHJvcHMueHMgfHwgXCIxMlwiXG4gICAgbWQ6ICAgICAgICAgICAgICAtPiBAZnJpZ1Byb3BzLnNtIHx8IFwiMTJcIlxuICAgIGxnOiAgICAgICAgICAgICAgLT4gQGZyaWdQcm9wcy5tZCB8fCBcIjEyXCJcbiAgICAjIE9mZnNldHNcbiAgICB4c09mZnNldDogICAgICAgIHVuZGVmaW5lZFxuICAgIHNtT2Zmc2V0OiAgICAgICAgLT4gQGZyaWdQcm9wcy54c09mZnNldFxuICAgIG1kT2Zmc2V0OiAgICAgICAgLT4gQGZyaWdQcm9wcy5zbU9mZnNldFxuICAgIGxnT2Zmc2V0OiAgICAgICAgLT4gQGZyaWdQcm9wcy5tZE9mZnNldFxuXG4gIGVycm9yTGlzdDogKGVycm9ycykgLT5cbiAgICBtYXAgZXJyb3JzLCBmcmlnZ2luZ0Jvb3RzdHJhcC5lcnJvciBpZiBlcnJvcnM/XG5cbiAgZXJyb3I6IChtc2cpIC0+XG4gICAgc3BhbiBjbGFzc05hbWU6IFwiaGVscC1ibG9ja1wiLFxuICAgICAgaSBjbGFzc05hbWU6IFwiZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlXCIsIFwiICN7bXNnfVwiXG5cbiAgc2l6ZUNsYXNzTmFtZXM6IChwcm9wcykgLT5cbiAgICBjbGFzc2VzID0ge31cbiAgICBzaXplcyA9IFtcInhzXCIsIFwic21cIiwgXCJtZFwiLCBcImxnXCJdXG4gICAgIyBBZGRpbmcgY29sdW1uIGNsYXNzZXNcbiAgICBmb3IgayBpbiBzaXplc1xuICAgICAgY2xhc3Nlc1tcImNvbC0je2t9LSN7cHJvcHNba119XCJdID0gdHJ1ZSBpZiBwcm9wc1trXT9cbiAgICAjIEFkZGluZyBvZmZzZXQgY2xhc3Nlc1xuICAgIGZvciBzaXplIGluIHNpemVzXG4gICAgICBrID0gXCIje3NpemV9T2Zmc2V0XCJcbiAgICAgIGNvbnRpbnVlIHVubGVzcyBwcm9wc1trXT9cbiAgICAgIGNsYXNzZXNbXCJjb2wtI3tzaXplfS1vZmZzZXQtI3twcm9wc1trXX1cIl0gPSB0cnVlXG4gICAgcmV0dXJuIGNsYXNzZXNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC5jb2ZmZWVcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3R5bGVzaGVldHMvZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwLnN0eWxcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZnJpZ2dpbmdQcm9wc01peGluICAgICAgICAgICAgPSByZXF1aXJlIFwiLi9mcmlnZ2luZ19wcm9wc19taXhpbi5jb2ZmZWVcIlxuZnJpZ0hlbHBlcnMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vaGVscGVycy5jb2ZmZWVcIlxuZnJpZ1ZhbGlkYXRpb25zICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vdmFsaWRhdGlvbnMuY29mZmVlXCJcbntodW1hbml6ZSwgY2xvbmUsIG1lcmdlLCBtYXAsIG1hcE9iaiwgaXNDb25maWdPYmosIHNldERlZmF1bHRzfSA9IGZyaWdIZWxwZXJzXG5cbm1vZHVsZS5leHBvcnRzID0gaW5wdXRNaXhpbiA9XG5cbiAgbWl4aW5zOiBbXG4gICAgZnJpZ2dpbmdQcm9wc01peGluXG4gIF1cblxuICBjb21wb25lbnRXaWxsTW91bnQ6IC0+XG4gICAgQGdldEZyaWdnaW5nVmFsdWUgfHw9IEBkZWZhdWx0R2V0RnJpZ2dpbmdWYWx1ZVxuXG4gIGNvbXBvbmVudERpZE1vdW50OiAtPlxuICAgIHZhbCA9IEBnZXRGcmlnZ2luZ1ZhbHVlKClcbiAgICB2YWxpZCA9IEB2YWxpZGF0ZSh2YWwsIGZhbHNlKVxuICAgIEBmcmlnUHJvcHMub25GcmlnZ2luZ0NoaWxkSW5pdD8oQGZyaWdQcm9wcy5maWVsZEtleSwgdmFsLCB2YWxpZClcblxuICBkZWZhdWx0R2V0RnJpZ2dpbmdWYWx1ZTogLT5cbiAgICByZWYgPSBAcmVmc1tAZnJpZ1Byb3BzLmlucHV0SHRtbC5yZWZdXG4gICAgdmFsID0gaWYgcmVmP1xuICAgICAgZWwgPSByZWYuZ2V0RE9NTm9kZSgpXG4gICAgICBpZiBlbC50eXBlID09ICdjaGVja2JveCdcbiAgICAgICAgZWwuY2hlY2tlZFxuICAgICAgZWxzZSBpZiBlbC50eXBlID09ICdzZWxlY3QtbXVsdGlwbGUnXG4gICAgICAgICMgVE9ETzogRE8gTk9UIFVTRSBKUVVFUlkgSU4gRlJJRyFcbiAgICAgICAgJChlbCkudmFsKClcbiAgICAgIGVsc2VcbiAgICAgICAgZWwudmFsdWVcbiAgICBlbHNlXG4gICAgICBAZnJpZ1Byb3BzLmluaXRpYWxWYWx1ZVxuICAgICMgVGhlIHZhbHVlIGlzIGNhc3QgdG8gYSBzdHJpbmcgd2hlbiB3ZSBnZXQgaXQgZnJvbSBET00udmFsdWUuIExvb2t1cFxuICAgICMgdGhlIG9yaWdpbmFsIHZhbHVlIGluIHRoZSBvcHRpb25zIGxpc3QgYW5kIHJldHVybiB0aGF0IGluc3RlYWQuXG4gICAgaWYgQGZyaWdQcm9wcy5vcHRpb25zP1xuICAgICAgZm9yIG9wdGlvbiBpbiBAZnJpZ1Byb3BzLm9wdGlvbnNcbiAgICAgICAgb3B0aW9uID0gQG5vcm1hbGl6ZUZyaWdnaW5nT3B0aW9uKG9wdGlvbilcbiAgICAgICAgcmV0dXJuIG9wdGlvbi52YWx1ZSBpZiBvcHRpb24udmFsdWUudG9TdHJpbmcoKSA9PSB2YWxcbiAgICByZXR1cm4gdmFsXG5cbiAgbm9ybWFsaXplRnJpZ2dpbmdPcHRpb246IChvcHRzKSAtPlxuICAgIHJldHVybiB1bmRlZmluZWQgdW5sZXNzIG9wdHM/XG4gICAgIyBjb252ZXJ0aW5nIG9wdHMgaW4gdGhlIGZvcm1hdCBvZiBba2V5XSB0byBrZXlcbiAgICBvcHRzID0gb3B0c1swXSBpZiB0eXBlb2Yob3B0cykgPT0gXCJvYmplY3RcIiBhbmQgb3B0cy5sZW5ndGggPT0gMVxuICAgICMgaWYgb3B0cyBpcyBpbiB0aGUgZm9ybWF0IFtrZXksIHZhbHVlXVxuICAgIGlmIHR5cGVvZihvcHRzKSA9PSBcIm9iamVjdFwiIGFuZCBvcHRzLmxlbmd0aCA9PSAyXG4gICAgICB2YWx1ZTogb3B0c1swXVxuICAgICAgbGFiZWw6IG9wdHNbMV1cbiAgICAjIGlmIG9wdHMgaXMgaW4gdGhlIGZvcm1hdCBrZXlcbiAgICBlbHNlXG4gICAgICB2YWx1ZTogb3B0c1xuICAgICAgbGFiZWw6IG9wdHNcblxuICB2YWxpZGF0ZTogKHZhbHVlID0gQGdldEZyaWdnaW5nVmFsdWUoKSwgcmVuZGVyRXJyb3JzID0gdHJ1ZSkgLT5cbiAgICBpZiBAZnJpZ1Byb3BzLnR5cGUgPT0gXCJzdWJtaXRcIiB8fCBAZnJpZ1Byb3BzLnZhbGlkYXRlPygpID09IGZhbHNlXG4gICAgICBAc2V0U3RhdGUgZXJyb3JzOiB1bmRlZmluZWRcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZXJyb3JzID0gW11cbiAgICAjIFJ1bm5pbmcgZWFjaCB2YWxpZGF0aW9uXG4gICAgZm9yIGssIHZhbGlkYXRpb25PcHRzIG9mIEBmcmlnUHJvcHMudmFsaWRhdGlvbnNcbiAgICAgIGNvbnRpbnVlIGlmIHZhbGlkYXRpb25PcHRzID09IGZhbHNlIG9yICF2YWxpZGF0aW9uT3B0cz9cbiAgICAgIG9wdHMgPVxuICAgICAgICBkYXRhOiAgICAgICBAZnJpZ1Byb3BzLmRhdGFcbiAgICAgICAgZmllbGRrZXk6ICAgQGZyaWdQcm9wcy5maWVsZEtleVxuICAgICAgICB2YWx1ZTogICAgICB2YWx1ZVxuICAgICAgICBvcHRzOiAgICAgICB2YWxpZGF0aW9uT3B0c1xuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCBmcmlnVmFsaWRhdGlvbnNba10ob3B0cykgfHwgW11cbiAgICAjIElmIHRoZXJlIGFyZSBubyBlcnJvcnMgdGhlbiBlcnJvcnMgc2hvdWxkIGJlIGZhbHNpZVxuICAgIGVycm9ycyA9IHVuZGVmaW5lZCBpZiBlcnJvcnMubGVuZ3RoID09IDBcbiAgICAjIEFkZGluZyB0aGUgZXJyb3JzIHRvIHRoZSBzdGF0ZVxuICAgIEBzZXRTdGF0ZSBlcnJvcnM6IGVycm9ycyBpZiByZW5kZXJFcnJvcnNcbiAgICAjIFJldHVybiB0cnVlIGlmIHRoZXJlIGFyZSBubyBlcnJvcnNcbiAgICByZXR1cm4gIWVycm9ycz9cblxuICBfZnJpZ09uQ2hhbmdlOiAtPlxuICAgIHJldHVybiBpZiBAZnJpZ1Byb3BzLnR5cGUgPT0gXCJzdWJtaXRcIlxuICAgIHZhbHVlID0gQGdldEZyaWdnaW5nVmFsdWUoKVxuICAgIHZhbGlkID0gQHZhbGlkYXRlIHZhbHVlXG4gICAgIyBDYWxsIHRoZSBmb3JtLWxldmVsIHVzZXIgc3BlY2lmaWVkIG9uQ2hhbmdlIGZ1bmN0aW9uXG4gICAgQGZyaWdQcm9wcy5vbkZyaWdnaW5nQ2hpbGRDaGFuZ2U/KEBmcmlnUHJvcHMuZmllbGRLZXksIHZhbHVlLCB2YWxpZClcbiAgICAjIENhbGwgdGhlIHVzZXIgc3BlY2lmaWVkIG9uQ2hhbmdlIGZ1bmN0aW9uXG4gICAgQGZyaWdQcm9wcy5vbkNoYW5nZT8odmFsdWUsIHZhbGlkKVxuXG4gIF9mcmlnT25CbHVyOiAtPlxuICAgIEB2YWxpZGF0ZSgpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnL21peGlucy9pbnB1dF9taXhpbi5jb2ZmZWVcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZnJpZ0hlbHBlcnMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vaGVscGVycy5jb2ZmZWVcIlxuZnJpZ0RlZmF1bHRzICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vZGVmYXVsdHMuY29mZmVlXCJcbntodW1hbml6ZSwgY2xvbmUsIG1lcmdlLCBtYXAsIG1hcE9iaiwgaXNDb25maWdPYmosIHNldERlZmF1bHRzfSA9IGZyaWdIZWxwZXJzXG5cbm1vZHVsZS5leHBvcnRzID0gZnJpZ2dpbmdQcm9wc01peGluID1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiAobmV4dFByb3BzKSAtPlxuICAgIEBfZnJpZ1JlZnJlc2hQcm9wcyhuZXh0UHJvcHMpXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiAtPlxuICAgIEBfZnJpZ1JlZnJlc2hQcm9wcyhAcHJvcHMpXG5cbiAgZnJpZ0RlZmF1bHRMYXllcnM6IC0+XG4gICAgW1xuICAgICAgIyBHbG9iYWwgZGVmYXVsdHNcbiAgICAgIGZyaWdEZWZhdWx0c1xuICAgICAgIyBUaGVtZS1sZXZlbCBkZWZhdWx0c1xuICAgICAgQHByb3BzLnRoZW1lRGVmYXVsdHMgfHwge31cbiAgICAgICMgRm9ybS1sZXZlbCBkZWZhdWx0c1xuICAgICAgQHByb3BzLmZvcm1EZWZhdWx0cyB8fCB7fVxuICAgIF1cblxuICAjIFRoZSBkZWZhdWx0IGxheWVycyBwbHVzIHRoZSBsYXllcnMgcmVsYXRlZCB0byB0aGlzIGNvbXBvbmVudCdzIHByb3BzIGFuZFxuICAjIGZyaWdnaW5nUHJvcHNcbiAgX2ZyaWdQcm9wTGF5ZXJzOiAocHJvcHMpIC0+XG4gICAgW1xuICAgICAgQGZyaWdEZWZhdWx0TGF5ZXJzKCkuLi5cbiAgICAgICMgQ29tcG9uZW50LWxldmVsIGRlZmF1bHRzXG4gICAgICBAZ2V0RnJpZ2dpbmdQcm9wcz8oKSB8fCB7fVxuICAgICAgIyBVc2VyLWVudGVyZWQgb3B0aW9uc1xuICAgICAgcHJvcHNcbiAgICBdXG5cbiAgX2ZyaWdSZWZyZXNoUHJvcHM6IChwcm9wcyA9IHt9KSAtPlxuICAgICMgU2V0dGluZyBkZWZhdWx0c1xuICAgIEBmcmlnUHJvcHMgPSB7fVxuICAgIHNldERlZmF1bHRzIEBfZnJpZ1Byb3BMYXllcnMocHJvcHMpLi4uLCBAZnJpZ1Byb3BzLCBAX2ZyaWdQcm9wVmFsXG5cbiAgIyBSZXR1cm4gYSBub3JtYWxpemVkIHZhbHVlIGZvciBhIGZyaWcgcHJvcGVydHlcbiAgX2ZyaWdQcm9wVmFsOiAoaywgb2JqLCBsYXllcnMpIC0+XG4gICAgZGVmYXVsdFZhbCA9IGxheWVyc1swXVtrXVxuICAgICMgQ2xhc3MgbmFtZXMgYXJlIG1lcmdlZFxuICAgIHJldHVybiBAX2ZyaWdDbGFzc05hbWUgbGF5ZXJzIGlmIGsgPT0gXCJjbGFzc05hbWVcIlxuICAgICMgVHJ1ZSBwcm9wZXJ0aWVzIHNob3VsZCBlbmFibGUgZnJpZ0RlZmF1bHRzIGJlaGF2aW9yXG4gICAgIyBvYmogPSBkZWZhdWx0VmFsIGlmIEBmcmlnUHJvcHNba10gPT0gdHJ1ZVxuICAgICMgZXZhbHVhdGUgdmFsdWUgZnVuY3Rpb25zIGFuZCByZXBsYWNlIHRoZW0gd2l0aCB0aGVpciB2YWx1ZXNcbiAgICBmbk5hbWVSZWdleCA9IC9eb258XmNiJHxedmFsaWRhdGUkL1xuICAgIGlmIHR5cGVvZihvYmopID09IFwiZnVuY3Rpb25cIiBhbmQgKG9iaiA9PSBkZWZhdWx0VmFsIG9yICFrLm1hdGNoIGZuTmFtZVJlZ2V4KVxuICAgICAgb2JqID0gb2JqLmNhbGwgQCwgQFxuICAgIHJldHVybiBvYmpcblxuICAjIFJldHVybiBhIGNsYXNzbmFtZXMgYnkgY29uY2F0aW5hdGlvbiBhbGwgb2YgdGhlIGNsYXNzTmFtZXMgaW4gdGhlIHByb3BcbiAgIyBsYXllcnMuXG4gIF9mcmlnQ2xhc3NOYW1lOiAoc291cmNlcykgLT5cbiAgICBjbGFzc05hbWVzID0gW11cbiAgICBmb3Igc291cmNlIGluIHNvdXJjZXNcbiAgICAgIGNsYXNzTmFtZSA9IHNvdXJjZS5jbGFzc05hbWVcbiAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5jYWxsIEAsIEAgaWYgdHlwZW9mKGNsYXNzTmFtZSkgPT0gXCJmdW5jdGlvblwiXG4gICAgICBjbGFzc05hbWVzLnB1c2ggY2xhc3NOYW1lIGlmIGNsYXNzTmFtZVxuICAgICMgUmV0dXJuIHRoZSBjb25jYXRpbmF0ZWQgY2xhc3NOYW1lLiBTZXQgaXQgaW4gQGZyaWdQcm9wcyB0byBvdmVycmlkZVxuICAgICMgZXZlcnl0aGluZyBlbHNlLlxuICAgIGNsYXNzTmFtZXMuam9pbiBcIiBcIlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9taXhpbnMvZnJpZ2dpbmdfcHJvcHNfbWl4aW4uY29mZmVlXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0aW9uID1cbiAgcmVxdWlyZWQ6ICh7a2V5LCB2YWx1ZSwgb3B0cywgZGF0YX0pIC0+XG4gICAgcmV0dXJuIHVuZGVmaW5lZCBpZiB2YWx1ZT8gYW5kIHZhbHVlICE9IFwiXCJcbiAgICBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWQuXCJcblxuICBtaW46ICh7a2V5LCB2YWx1ZSwgb3B0cywgZGF0YX0pIC0+XG4gICAgcmV0dXJuIHVuZGVmaW5lZCBpZiB2YWx1ZSA+PSBvcHRzIG9yICF2YWx1ZT8gb3IgdmFsdWUgPT0gXCJcIlxuICAgIFwiVmFsdWUgY2Fubm90IGJlIGxlc3MgdGhhbiAje29wdHN9XCJcblxuICBtYXg6ICh7a2V5LCB2YWx1ZSwgb3B0cywgZGF0YX0pIC0+XG4gICAgcmV0dXJuIHVuZGVmaW5lZCBpZiB2YWx1ZSA8PSBvcHRzIG9yICF2YWx1ZT8gb3IgdmFsdWUgPT0gXCJcIlxuICAgIFwiVmFsdWUgY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiAje29wdHN9XCJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdmFsaWRhdGlvbnMuY29mZmVlXG4gKiovIiwiUmVhY3QgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwicmVhY3QvYWRkb25zXCJcbmZyaWdnaW5nUHJvcHNNaXhpbiAgICAgICAgICAgID0gcmVxdWlyZSBcIi4vZnJpZ2dpbmdfcHJvcHNfbWl4aW4uY29mZmVlXCJcbmRzbE1peGluICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4vZHNsX21peGluLmNvZmZlZVwiXG5mcmlnSGVscGVycyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi9oZWxwZXJzLmNvZmZlZVwiXG57bWVyZ2UsIG1hcCwgY2FwaXRhbGl6ZSwgZ2V0VGVtcGxhdGUsIGd1ZXNzVHlwZSwgc2V0RGVmYXVsdHN9ID0gZnJpZ0hlbHBlcnNcblxubW9kdWxlLmV4cG9ydHMgPSBmb3JtTWl4aW4gPVxuXG4gIG1peGluczogW1xuICAgIGZyaWdnaW5nUHJvcHNNaXhpblxuICAgIGRzbE1peGluXG4gIF1cblxuICBjb21wb25lbnRXaWxsTW91bnQ6IC0+XG4gICAgQF9mcmlnQ2hhbmdlcyA9IHt9XG4gICAgQF9mcmlnRm9ybURhdGEgPSB7fVxuICAgIEBfZnJpZ1ZhbGlkRm9ybURhdGEgPSB7fVxuXG4gIGZyaWdnaW5nQ2hpbGRyZW46IC0+XG4gICAgQHByb3BzLmNiIEBmcmlnRFNMKClcblxuICB2YWxpZGF0ZTogLT5cbiAgICB2YWxpZCA9IHRydWVcbiAgICBmb3Iga2V5LCBpbnB1dCBvZiBAcmVmc1xuICAgICAgdmFsaWQgJj0gaW5wdXQudmFsaWRhdGUoKSBpZiBrZXkubWF0Y2goL0lucHV0JC8pPyBhbmQgaW5wdXQudmFsaWRhdGU/XG4gICAgcmV0dXJuIHZhbGlkXG5cbiAgZ2V0RGF0YTogLT5cbiAgICBAX2ZyaWdGb3JtRGF0YVxuXG4gIGdldFZhbGlkRGF0YTogLT5cbiAgICBAX2ZyaWdWYWxpZEZvcm1EYXRhXG5cbiAgaW5pdGlhbFZhbHVlczogLT5cbiAgICAjIElmIHRoZSBkYXRhIGlzIGEgUmVhY3RMaW5rIGV4dHJhY3QgaXRzIHZhbHVlXG4gICAgaWYgQGZyaWdQcm9wcy5kYXRhLnJlcXVlc3RDaGFuZ2U/XG4gICAgICBAZnJpZ1Byb3BzLmRhdGEudmFsdWVcbiAgICBlbHNlXG4gICAgICBAZnJpZ1Byb3BzLmRhdGFcblxuICBfb25GcmlnZ2luZ0NoaWxkSW5pdDogKGssIHYsIHZhbGlkKSAtPlxuICAgIEBfZnJpZ0Zvcm1EYXRhW2tdID0gdlxuICAgIEBfZnJpZ1ZhbGlkRm9ybURhdGFba10gPSB2XG5cbiAgX29uRnJpZ2dpbmdDaGlsZENoYW5nZTogKGssIHYsIHZhbGlkKSAtPlxuICAgIEBfZnJpZ0Zvcm1EYXRhW2tdID0gdlxuICAgIGlmIHZhbGlkXG4gICAgICBAX2ZyaWdWYWxpZEZvcm1EYXRhW2tdID0gdlxuICAgIGVsc2VcbiAgICAgIGRlbGV0ZSBAX2ZyaWdWYWxpZEZvcm1EYXRhW2tdXG4gICAgIyBjbG9uZSB0aGUgZm9ybSBkYXRhIG9iamVjdCB0byBhdm9pZCB0aGUgc2l0dWF0aW9uIHdoZXJlIHN1YnNlcXVlbnQgZm9ybVxuICAgICMgdXBkYXRlcyB1bmV4cGVjdGVkbHkgbXV0YXRlIHRoZSBkYXRhIG9iamVjdFxuICAgIEBmcmlnUHJvcHMub25DaGFuZ2U/KEBfZnJpZ0Zvcm1EYXRhKVxuICAgIGlmIHZhbGlkXG4gICAgICBAZnJpZ1Byb3BzLm9uVmFsaWRDaGFuZ2U/KEBfZnJpZ0Zvcm1EYXRhKVxuICAgICMgVXBkYXRlIHRoZSBSZWFjdExpbmsgd2l0aCB0aGUgbWVyZ2VkIGNvbWJpbmF0aW9uIG9mIGZvcm0gZGF0YSBhbmQgdGhlXG4gICAgIyBpbml0aWFsIHZhbHVlcyBwYXNzZWQgaW4gdG8gdGhlIGZvcm0gKGFsbG93aW5nIG5vbi1mb3JtIGRhdGEgdG8gYmVcbiAgICAjIHBlcnNpc3RlZClcbiAgICByZWFjdExpbmtEYXRhID0gbWVyZ2Uge30sIEBpbml0aWFsVmFsdWVzKCksIEBfZnJpZ0Zvcm1EYXRhXG4gICAgQGZyaWdQcm9wcy5kYXRhLnJlcXVlc3RDaGFuZ2U/KHJlYWN0TGlua0RhdGEpXG5cbiAgX2ZyaWdPblN1Ym1pdDogKGUpIC0+XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuIHVubGVzcyBAdmFsaWRhdGUoKVxuICAgIEBmcmlnUHJvcHMub25TdWJtaXQ/KGUsIEBfZnJpZ0Zvcm1EYXRhKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9taXhpbnMvZm9ybV9taXhpbi5jb2ZmZWVcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcInJlYWN0L2FkZG9uc1wiXG5nbG9iYWxUeXBlTWFwcGluZyAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uL3R5cGVfbWFwcGluZy5jb2ZmZWVcIlxuZnJpZ0hlbHBlcnMgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi9oZWxwZXJzLmNvZmZlZVwiXG57aHVtYW5pemUsIG1hcCwgY2FwaXRhbGl6ZSwgZ2V0VGVtcGxhdGUsIGd1ZXNzVHlwZSwgc2V0RGVmYXVsdHN9ID0gZnJpZ0hlbHBlcnNcblxubW9kdWxlLmV4cG9ydHMgPSBkc2xNaXhpbiA9XG5cbiAgZnJpZ0RTTDogLT5cbiAgICBlcnJvcnM6IEBfZnJpZ0Vycm9yc1xuICAgIGlucHV0OiBAX2ZyaWdJbnB1dFxuICAgIHN1Ym1pdDogQF9mcmlnU3VibWl0XG5cbiAgX2ZyaWdFcnJvcnM6IC0+XG4gICAgQF9mcmlnSW5wdXQgXCJlcnJvcnNcIiwgdHlwZTogXCJlcnJvcnNcIiwgZXJyb3JzOiBAcHJvcHMuZXJyb3JzXG5cbiAgIyBDcmVhdGUgYSBzdWJtaXQgYnV0dG9uXG4gICMgdmFsdWU6IFtTVFJJTkddIFRoZSBsYWJlbCB0ZXh0IGZvciB0aGUgc3VibWl0IGJ1dHRvblxuICAjIHByb3BzOiBbT0JKRUNUXSBwcm9wZXJ0aWVzIHRvIHNlbmQgdG8gdGhlIFJlYWN0IENvbXBvbmVudCAoc2VlIGlucHV0IHByb3BzKVxuICBfZnJpZ1N1Ym1pdDogKHZhbHVlLCBwcm9wcyA9IHt9KSAtPlxuICAgIGlmIGFyZ3VtZW50cy5sZW5ndGggPT0gMSBhbmQgdHlwZW9mKHZhbHVlKSAhPSBcInN0cmluZ1wiXG4gICAgICBwcm9wcyA9IHZhbHVlXG4gICAgICB2YWx1ZSA9IHVuZGVmaW5lZFxuICAgIHNldERlZmF1bHRzIEBfZnJpZ1N1Ym1pdERlZmF1bHRzKHZhbHVlKSwgcHJvcHNcbiAgICBAX2ZyaWdJbnB1dCBcInN1Ym1pdFwiLCBwcm9wc1xuXG4gIF9mcmlnU3VibWl0RGVmYXVsdHM6ICh2YWx1ZSkgLT5cbiAgICB0eXBlOiBcInN1Ym1pdFwiXG4gICAgaW5wdXRIdG1sOlxuICAgICAgZGVmYXVsdFZhbHVlOiB2YWx1ZSBpZiB2YWx1ZT9cblxuICAjIENyZWF0ZXMgYSBmb3JtIGZpZWxkXG4gICMga2V5OiBbU1RSSU5HXSB0aGUgbmFtZSBvZiB0aGUgZmllbGQgaW4gdGhlIGRhdGFcbiAgIyBwcm9wczpcbiAgIyAgIHJlcXVpcmVkOiAoZGVmYXVsdDogdHJ1ZSlcbiAgIyAgIGlucHV0SHRtbDogc3BlY2lmeSBodG1sIGF0dHJpYnV0ZXMgZm9yIHRoZSBpbnB1dCBSZWFjdCBET00gZWxlbWVudFxuICAjICAgbGFiZWxIdG1sOiBzcGVjaWZ5IGh0bWwgYXR0cmlidXRlcyBmb3IgdGhlIGxhYmVsIFJlYWN0IERPTSBlbGVtZW50XG4gICMgICBwbGFjZWhvbGRlcjpcbiAgIyAgICAgdHJ1ZTogKGRlZmF1bHQpIGFkZHMgYSBwbGFjZWhvbGRlciB3aXRoIGEgbmFtZSBiYXNlZCBvbiBhIGh1bWFuaXphdGlvblxuICAjICAgICAgICAgICBvZiB0aGUga2V5XG4gICMgICAgIGZhbHNlOiBkaXNhYmxlcyB0aGUgcGxhY2Vob2xkZXJcbiAgIyAgICAgW1NUUklOR106IHNldHMgdGhlIHBsYWNlaG9sZGVyIHRvIHRoZSBnaXZlbiBzdHJpbmdcbiAgIyAgbGFiZWw6XG4gICMgICAgIHRydWU6IChkZWZhdWx0KSBhZGRzIGEgbGFiZWwgd2l0aCBhIG5hbWUgYmFzZWQgb24gYSBodW1hbml6YXRpb25cbiAgIyAgICAgICAgICAgb2YgdGhlIGtleVxuICAjICAgICBmYWxzZTogZGlzYWJsZXMgdGhlIGxhYmVsXG4gICMgICAgIFtTVFJJTkddOiBzZXRzIHRoZSBsYWJlbCB0byB0aGUgZ2l2ZW4gc3RyaW5nXG4gIF9mcmlnSW5wdXQ6IChrZXksIGlucHV0UHJvcHMgPSB7fSkgLT5cbiAgICBpc0NvZmZlZXNjcmlwdCA9IGtleT9cbiAgICB0eXBlTWFwcGluZyA9IGlucHV0UHJvcHMudHlwZU1hcHBpbmdcbiAgICBkZWxldGUgaW5wdXRQcm9wcy50eXBlTWFwcGluZ1xuICAgICMgU2V0dGluZyB0aGUgZGVmYXVsdHNcbiAgICBzZXREZWZhdWx0cyBAX2ZyaWdJbnB1dERlZmF1bHRzKGtleSksIGlucHV0UHJvcHNcbiAgICAjIEd1ZXNzaW5nIHRoZSB0eXBlIGFuZCB1c2luZyBpdCB0byBsb29rdXAgdGhlIHRlbXBsYXRlXG4gICAgaW5wdXRQcm9wcy50eXBlID0gQF9mcmlnR3Vlc3NJbnB1dFR5cGUgaW5wdXRQcm9wc1xuICAgICMgbG9va2luZyB1cCB0aGUgdGVtcGxhdGUgbmFtZSB3aXRoIHRoZSB0eXBlIG1hcHBpbmdzIGFuZCB0aGUgdHlwZVxuICAgIHRlbXBsYXRlTmFtZSA9IEBfZnJpZ0dldFRlbXBsYXRlTmFtZSBpbnB1dFByb3BzLCBAcHJvcHMudGhlbWUsIHR5cGVNYXBwaW5nXG4gICAgdGVtcGxhdGUgPSBAX2ZyaWdMb2FkVGVtcGxhdGUgaW5wdXRQcm9wcywgdGVtcGxhdGVOYW1lXG4gICAgdGVtcGxhdGUgPSBSZWFjdC5jcmVhdGVGYWN0b3J5IHRlbXBsYXRlIGlmIGlzQ29mZmVlc2NyaXB0XG4gICAgIyBDcmVhdGluZyBhbmQgcmV0dXJuaW5nIHRoZSB0ZW1wbGF0ZSBpbnN0YW5jZVxuICAgIHJldHVybiB0ZW1wbGF0ZSBpbnB1dFByb3BzXG5cbiAgX2ZyaWdJbnB1dERlZmF1bHRzOiAoa2V5KSAtPlxuICAgIHJlZjogICAgICAgICAgICAgICAgICAgIFwiI3trZXl9SW5wdXRcIlxuICAgIGZpZWxkS2V5OiAgICAgICAgICAgICAgIGtleVxuICAgIGluaXRpYWxWYWx1ZTogICAgICAgICAgIEBpbml0aWFsVmFsdWVzKClba2V5XVxuICAgIG9uRnJpZ2dpbmdDaGlsZENoYW5nZTogIEBfb25GcmlnZ2luZ0NoaWxkQ2hhbmdlXG4gICAgb25GcmlnZ2luZ0NoaWxkSW5pdDogICAgQF9vbkZyaWdnaW5nQ2hpbGRJbml0XG4gICAgZm9ybURlZmF1bHRzOiAgICAgICAgICAgQHByb3BzLmZvcm1EZWZhdWx0c1xuICAgIHRoZW1lRGVmYXVsdHM6ICAgICAgICAgIEBwcm9wcy50aGVtZS5kZWZhdWx0cyB8fCB7fVxuXG4gIF9mcmlnR3Vlc3NJbnB1dFR5cGU6IChpbnB1dFByb3BzKSAtPlxuICAgIGpzVHlwZSA9IHR5cGVvZiBpbnB1dFByb3BzLmluaXRpYWxWYWx1ZVxuICAgIGlmIGlucHV0UHJvcHMudHlwZT9cbiAgICAgIGlucHV0UHJvcHMudHlwZVxuICAgIGVsc2UgaWYgaW5wdXRQcm9wcy5tdWx0aXBsZSBvciBBcnJheS5pc0FycmF5IGlucHV0UHJvcHMuaW5pdGlhbFZhbHVlXG4gICAgICBcIm11bHRpc2VsZWN0XCJcbiAgICBlbHNlIGlmIGlucHV0UHJvcHMub3B0aW9ucz9cbiAgICAgIFwic2VsZWN0XCJcbiAgICBlbHNlIGlmIGpzVHlwZSA9PSBcImJvb2xlYW5cIlxuICAgICAgXCJib29sZWFuXCJcbiAgICBlbHNlIGlmIGpzVHlwZSA9PSBcIm51bWJlclwiXG4gICAgICBcImZsb2F0XCJcbiAgICBlbHNlIGlmIGlucHV0UHJvcHMuZmllbGRLZXkubWF0Y2ggL1twUF1hc3N3b3JkXi9cbiAgICAgIFwicGFzc3dvcmRcIlxuICAgIGVsc2VcbiAgICAgIFwic3RyaW5nXCJcblxuICAjIExvb2t1cCB0aGUgdGVtcGxhdGUgbmFtZSB2aWEgYSBjYXNjYWRpbmcgbG9va3VwIG9mIHRoZSB0eXBlIHRocm91Z2ggdGhlXG4gICMgdHlwZSBtYXBwaW5nIHNvdXJjZXNcbiAgX2ZyaWdHZXRUZW1wbGF0ZU5hbWU6ICh7dHlwZSwga2V5LCB0ZW1wbGF0ZX0sIHRoZW1lLCBpbnB1dFR5cGVNYXBwaW5nKSAtPlxuICAgIHJldHVybiBjYXBpdGFsaXplIHRlbXBsYXRlIGlmIHRlbXBsYXRlP1xuICAgIHNvdXJjZXMgPSBbXG4gICAgICBpbnB1dFR5cGVNYXBwaW5nLCBAdHlwZU1hcHBpbmcsIHRoZW1lLnR5cGVNYXBwaW5nLCBnbG9iYWxUeXBlTWFwcGluZ1xuICAgIF1cbiAgICBmb3IgdHlwZU1hcHBpbmcgaW4gc291cmNlc1xuICAgICAgbWFwcGluZyA9ICh0eXBlTWFwcGluZ3x8e30pW3R5cGVdXG4gICAgICAjIG1hcHBpbmcgaXMgZWl0aGVyIGEgdGVtcGxhdGUgbmFtZSBzdHJpbmcgb3IgYW4gb2JqZWN0IG9mIHRoZSBmb3JtXG4gICAgICAjIHt0ZW1wbGF0ZTogU1RSSU5HLCBodG1sSW5wdXRUeXBlOiBTVFJJTkd9XG4gICAgICByZXR1cm4gY2FwaXRhbGl6ZSBtYXBwaW5nLnRlbXBsYXRlIHx8IG1hcHBpbmcgaWYgbWFwcGluZz9cblxuICBfZnJpZ0xvYWRUZW1wbGF0ZTogKHByb3BzLCB0ZW1wbGF0ZU5hbWUpIC0+XG4gICAgaWYgIXRlbXBsYXRlTmFtZT9cbiAgICAgIHRocm93IFwiI3twcm9wcy5rZXl9OiBObyB0eXBlIG1hcHBpbmcgZm91bmQgZm9yIHR5cGUgI3twcm9wcy50eXBlfVwiXG4gICAgaWYgIUBwcm9wcy50aGVtZVt0ZW1wbGF0ZU5hbWVdP1xuICAgICAgdGhyb3cgXCIje3Byb3BzLmtleX06IE5vICN7dGVtcGxhdGVOYW1lfSB0ZW1wbGF0ZSBmb3VuZCBpbiB0aGVtZVwiXG4gICAgcmV0dXJuIEBwcm9wcy50aGVtZVt0ZW1wbGF0ZU5hbWVdXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnL21peGlucy9kc2xfbWl4aW4uY29mZmVlXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL2NoZWNrYm94LmNvZmZlZVwiOiAxOSxcblx0XCIuL2Vycm9ycy5jb2ZmZWVcIjogMjAsXG5cdFwiLi9maWxlLmNvZmZlZVwiOiAyMSxcblx0XCIuL2Zvcm0uY29mZmVlXCI6IDIyLFxuXHRcIi4vaW5wdXQuY29mZmVlXCI6IDIzLFxuXHRcIi4vc2VsZWN0LmNvZmZlZVwiOiAyNCxcblx0XCIuL3N1Ym1pdC5jb2ZmZWVcIjogMjUsXG5cdFwiLi9zd2l0Y2guY29mZmVlXCI6IDI2LFxuXHRcIi4vdGV4dC5jb2ZmZWVcIjogMjcsXG5cdFwiLi90eXBlYWhlYWQuY29mZmVlXCI6IDI4XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDE4O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAgXlxcLlxcLy4qXFwuY29mZmVlJFxuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZnJpZ2dpbmdCb290c3RyYXAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vZnJpZ2dpbmdfYm9vdHN0cmFwLmNvZmZlZVwiXG5JbnB1dE1peGluICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9taXhpbnMvaW5wdXRfbWl4aW4uY29mZmVlXCJcbntlcnJvckxpc3QsIHNpemVDbGFzc05hbWVzfSAgID0gZnJpZ2dpbmdCb290c3RyYXBcbntkaXYsIGxhYmVsLCBpbnB1dH0gICAgICAgICAgID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5mcmlnZ2luZ0Jvb3RzdHJhcC5DaGVja2JveCA9IFJlYWN0LmNyZWF0ZUNsYXNzXG5cbiAgZGlzcGxheU5hbWU6ICdGcmlnLmZyaWdnaW5nQm9vdHN0cmFwLkNoZWNrYm94J1xuXG4gIG1peGluczogW0lucHV0TWl4aW5dXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIGVycm9yczogdW5kZWZpbmVkXG4gICAgZWRpdGVkOiBmYWxzZVxuXG4gIGdldEZyaWdnaW5nUHJvcHM6ICAtPlxuICAgIGlucHV0SHRtbDpcbiAgICAgIHR5cGU6IFwiY2hlY2tib3hcIlxuICAgICAgdmFsdWU6IEBmcmlnUHJvcHMua2V5XG4gICAgICBjaGVja2VkOiAtPiBAZnJpZ1Byb3BzLmluaXRpYWxWYWx1ZVxuXG4gIF9jeDogLT5cbiAgICBjeFxuICAgICAgXCJjaGVja2JveFwiOiB0cnVlXG4gICAgICBcImhhcy1lcnJvclwiOiBAc3RhdGUuZXJyb3JzP1xuICAgICAgXCJoYXMtc3VjY2Vzc1wiOiBAc3RhdGUuZWRpdGVkICYmICFAc3RhdGUuZXJyb3JzP1xuXG4gIHJlbmRlcjogLT5cbiAgICBkaXYgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIixcbiAgICAgIGRpdiBjbGFzc05hbWU6IGN4KHNpemVDbGFzc05hbWVzIEBmcmlnUHJvcHMpLFxuICAgICAgICBkaXYgY2xhc3NOYW1lOiBAX2N4KCksXG4gICAgICAgICAgbGFiZWwgQGZyaWdQcm9wcy5sYWJlbEh0bWwsXG4gICAgICAgICAgICBpbnB1dCBAZnJpZ1Byb3BzLmlucHV0SHRtbFxuICAgICAgICAgICAgXCIgI3tAZnJpZ1Byb3BzLmxhYmVsfVwiIGlmIEBmcmlnUHJvcHMubGFiZWxcbiAgICAgICAgICBlcnJvckxpc3QgQHN0YXRlLmVycm9ycyBpZiBAc3RhdGU/LmVycm9ycz9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9jaGVja2JveC5jb2ZmZWVcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZnJpZ2dpbmdCb290c3RyYXAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vZnJpZ2dpbmdfYm9vdHN0cmFwLmNvZmZlZVwiXG57ZXJyb3JMaXN0fSAgICAgICAgICAgICAgICAgICA9IGZyaWdnaW5nQm9vdHN0cmFwXG57ZGl2LCBzcGFuLCBpfSAgICAgICAgICAgICAgICA9IFJlYWN0LkRPTVxuXG5mcmlnZ2luZ0Jvb3RzdHJhcC5FcnJvcnMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuXG4gIGRpc3BsYXlOYW1lOiAnRnJpZy5mcmlnZ2luZ0Jvb3RzdHJhcC5FcnJvcnMnXG5cbiAgcmVuZGVyOiAtPlxuICAgIGRpdiB7Y2xhc3NOYW1lOiBcInJvd1wifSxcbiAgICAgIF8ubWFwIEBwcm9wcy5lcnJvcnMsIChlcnJvcikgLT5cbiAgICAgICAgZGl2IHtjbGFzc05hbWU6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTEyXCJ9LFxuICAgICAgICAgIGRpdiBjbGFzc05hbWU6IFwiZnJpZ2dpbmctYm9vdHN0cmFwLWVycm9yXCIsIHJlZjogXCJlcnJvci0je2Vycm9yfVwiLFxuICAgICAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJhbGVydCBhbGVydC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgaSBjbGFzc05hbWU6XCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIlxuICAgICAgICAgICAgICBzcGFuIGNsYXNzTmFtZTogXCJzci1vbmx5XCIsIFwiRXJyb3I6XCJcbiAgICAgICAgICAgICAgXCIgI3tlcnJvcn1cIlxuICAgICAgICAgICAgICBkaXYgY2xhc3NOYW1lOiBcImNsZWFyZml4XCJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9lcnJvcnMuY29mZmVlXG4gKiovIiwiUmVhY3QgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwicmVhY3QvYWRkb25zXCJcbmZyaWdnaW5nQm9vdHN0cmFwICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uL2ZyaWdnaW5nX2Jvb3RzdHJhcC5jb2ZmZWVcIlxuSW5wdXRNaXhpbiAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vLi4vbWl4aW5zL2lucHV0X21peGluLmNvZmZlZVwiXG57aHVtYW5pemUsIGNsb25lLCBtZXJnZSwgbWFwfSA9IHJlcXVpcmUgXCIuLi8uLi9oZWxwZXJzLmNvZmZlZVwiXG57ZXJyb3JMaXN0LCBzaXplQ2xhc3NOYW1lc30gICA9IGZyaWdnaW5nQm9vdHN0cmFwXG57ZGl2LCBsYWJlbCwgaW5wdXQsIGltZ30gICAgICA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuZnJpZ2dpbmdCb290c3RyYXAuRmlsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzXG5cbiAgZGlzcGxheU5hbWU6ICdGcmlnLmZyaWdnaW5nQm9vdHN0cmFwLkZpbGVJbnB1dCdcblxuICBtaXhpbnM6IFtJbnB1dE1peGluXVxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICBlcnJvcnM6IHVuZGVmaW5lZFxuICAgIGVkaXRlZDogZmFsc2VcblxuICBnZXRGcmlnZ2luZ1Byb3BzOiAtPlxuICAgICMgQm9vdHN0cmFwIGlucHV0IGFkZG9uIHRleHRzXG4gICAgcHJlZml4OiAgICAgICAgICB1bmRlZmluZWRcbiAgICBzdWZmaXg6ICAgICAgICAgIHVuZGVmaW5lZFxuICAgIGlucHV0SHRtbDpcbiAgICAgIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIlxuICAgICAgcGxhY2Vob2xkZXI6IC0+IEBmcmlnUHJvcHMucGxhY2Vob2xkZXJcbiAgICAgIHR5cGU6IC0+ICdmaWxlJ1xuICAgICAgYWNjZXB0OiAtPiAnaW1hZ2UvcG5nLGltYWdlL2dpZixpbWFnZS9qcGVnJ1xuICAgICAgZGVmYXVsdFZhbHVlOiAtPiBAZnJpZ1Byb3BzLmluaXRpYWxWYWx1ZVxuXG4gIGNvbXBvbmVudERpZE1vdW50OiAtPlxuICAgIEBzZXRTdGF0ZSBpbWFnZTogQGZyaWdQcm9wcy5pbml0aWFsVmFsdWVcblxuICBfY3g6IC0+XG4gICAgY3hcbiAgICAgIFwiaGFzLWVycm9yXCI6IEBzdGF0ZS5lcnJvcnM/XG4gICAgICBcImhhcy1zdWNjZXNzXCI6IEBzdGF0ZS5lZGl0ZWQgJiYgIUBzdGF0ZS5lcnJvcnM/XG5cbiAgX2lucHV0OiAtPlxuICAgIGlucHV0IEBmcmlnUHJvcHMuaW5wdXRIdG1sXG5cbiAgX2xvYWRGaWxlOiAtPlxuICAgIEBmUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIEBmUmVhZGVyLm9ubG9hZGVuZCA9IEBfb25GaWxlTG9hZFxuICAgIEBmUmVhZGVyLnJlYWRBc0RhdGFVUkwgQHJlZnNbQGZyaWdQcm9wcy5pbnB1dEh0bWwucmVmXS5nZXRET01Ob2RlKCkuZmlsZXNbMF1cblxuICBfb25GaWxlTG9hZDogLT5cbiAgICB2ID0gXy5jbG9uZSBAZlJlYWRlci5yZXN1bHRcbiAgICBAc2V0U3RhdGUgaW1hZ2U6IHZcbiAgICBAZ2V0RnJpZ2dpbmdWYWx1ZSA9ID0+IHZcbiAgICBAZnJpZ1Byb3BzLm9uRnJpZ2dpbmdDaGlsZENoYW5nZT8gJ2ltYWdlJywgdiwgdHJ1ZVxuXG4gIHJlbmRlcjogLT5cbiAgICBAZnJpZ1Byb3BzLmlucHV0SHRtbC5vbkNoYW5nZSA9IEBfbG9hZEZpbGVcbiAgICBkaXYgY2xhc3NOYW1lOiBjeChzaXplQ2xhc3NOYW1lcyBAZnJpZ1Byb3BzKSxcbiAgICAgIGRpdiBjbGFzc05hbWU6IEBfY3goKSxcbiAgICAgICAgbGFiZWwgQGZyaWdQcm9wcy5sYWJlbEh0bWwsIEBmcmlnUHJvcHMubGFiZWwgaWYgQGZyaWdQcm9wcy5sYWJlbFxuICAgICAgICBkaXYgY2xhc3NOYW1lOiBcImNvbnRyb2xzXCIsXG4gICAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJpbWFnZS11cGxvYWRcIixcbiAgICAgICAgICAgIGlmIEBzdGF0ZS5pbWFnZVxuICAgICAgICAgICAgICBpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwidGh1bWJuYWlsXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTI1Jywgd2lkdGg6ICcxMjUnLFxuICAgICAgICAgICAgICAgIHNyYzogQHN0YXRlLmltYWdlXG4gICAgICAgICAgICBpZiBAZnJpZ1Byb3BzLnByZWZpeD8gfHwgQGZyaWdQcm9wcy5zdWZmaXg/XG4gICAgICAgICAgICAgIGRpdiBjbGFzc05hbWU6IFwiaW5wdXQtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICBpZiBAZnJpZ1Byb3BzLnByZWZpeFxuICAgICAgICAgICAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJpbnB1dC1ncm91cC1hZGRvblwiLCBAZnJpZ1Byb3BzLnByZWZpeFxuICAgICAgICAgICAgICAgIEBfaW5wdXQoKVxuICAgICAgICAgICAgICAgIGlmIEBmcmlnUHJvcHMuc3VmZml4XG4gICAgICAgICAgICAgICAgICBkaXYgY2xhc3NOYW1lOiBcImlucHV0LWdyb3VwLWFkZG9uXCIsIEBmcmlnUHJvcHMuc3VmZml4XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIEBfaW5wdXQoKVxuICAgICAgICBlcnJvckxpc3QgQHN0YXRlLmVycm9ycyBpZiBAc3RhdGU/LmVycm9ycz9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9maWxlLmNvZmZlZVxuICoqLyIsIlJlYWN0ICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcInJlYWN0L2FkZG9uc1wiXG5mcmlnZ2luZ0Jvb3RzdHJhcCAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi9mcmlnZ2luZ19ib290c3RyYXAuY29mZmVlXCJcbkZvcm1NaXhpbiAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uLy4uL21peGlucy9mb3JtX21peGluLmNvZmZlZVwiXG57ZXJyb3JMaXN0fSAgICAgICAgICAgICAgICAgICA9IGZyaWdnaW5nQm9vdHN0cmFwXG57ZGl2LCBmb3JtLCBsYWJlbCwgaW5wdXR9ICAgICA9IFJlYWN0LkRPTVxuXG5mcmlnZ2luZ0Jvb3RzdHJhcC5Gb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3NcblxuICBkaXNwbGF5TmFtZTogJ0ZyaWcuZnJpZ2dpbmdCb290c3RyYXAuRm9ybSdcblxuICBtaXhpbnM6IFtGb3JtTWl4aW5dXG5cbiAgZ2V0RnJpZ2dpbmdQcm9wczogLT5cbiAgICBmb3JtSHRtbDpcbiAgICAgIGNsYXNzTmFtZTogLT4gXCJmb3JtLSN7QGZyaWdQcm9wcy5sYXlvdXR9XCIgaWYgQGZyaWdQcm9wcy5sYXlvdXRcblxuICByZW5kZXI6IC0+XG4gICAgZm9ybSBAZnJpZ1Byb3BzLmZvcm1IdG1sLCBAZnJpZ2dpbmdDaGlsZHJlbigpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAvZm9ybS5jb2ZmZWVcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZnJpZ2dpbmdCb290c3RyYXAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vZnJpZ2dpbmdfYm9vdHN0cmFwLmNvZmZlZVwiXG5mcmlnSGVscGVycyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9oZWxwZXJzLmNvZmZlZVwiXG5JbnB1dE1peGluICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9taXhpbnMvaW5wdXRfbWl4aW4uY29mZmVlXCJcbntlcnJvckxpc3QsIHNpemVDbGFzc05hbWVzfSAgID0gZnJpZ2dpbmdCb290c3RyYXBcbntodW1hbml6ZSwgY2xvbmUsIG1lcmdlLCBtYXB9ID0gZnJpZ0hlbHBlcnNcbntkaXYsIGxhYmVsLCBpbnB1dH0gICAgICAgICAgID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5mcmlnZ2luZ0Jvb3RzdHJhcC5JbnB1dCA9IFJlYWN0LmNyZWF0ZUNsYXNzXG5cbiAgZGlzcGxheU5hbWU6ICdGcmlnLmZyaWdnaW5nQm9vdHN0cmFwLklucHV0J1xuXG4gIG1peGluczogW0lucHV0TWl4aW5dXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIGVycm9yczogdW5kZWZpbmVkXG4gICAgZWRpdGVkOiBmYWxzZVxuXG4gIGdldEZyaWdnaW5nUHJvcHM6IC0+XG4gICAgIyBCb290c3RyYXAgaW5wdXQgYWRkb24gdGV4dHNcbiAgICBwcmVmaXg6ICAgICAgICAgIHVuZGVmaW5lZFxuICAgIHN1ZmZpeDogICAgICAgICAgdW5kZWZpbmVkXG5cbiAgICBpbnB1dEh0bWw6XG4gICAgICBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCJcbiAgICAgIHBsYWNlaG9sZGVyOiAtPiBAZnJpZ1Byb3BzLnBsYWNlaG9sZGVyXG4gICAgICB0eXBlOiAtPiBAZnJpZ1Byb3BzLmh0bWxJbnB1dFR5cGVcbiAgICAgIGRlZmF1bHRWYWx1ZTogLT4gQGZyaWdQcm9wcy5pbml0aWFsVmFsdWVcblxuICBfY3g6IC0+XG4gICAgY3hcbiAgICAgIFwiZm9ybS1ncm91cFwiOiB0cnVlXG4gICAgICBcImhhcy1lcnJvclwiOiBAc3RhdGUuZXJyb3JzP1xuICAgICAgXCJoYXMtc3VjY2Vzc1wiOiBAc3RhdGUuZWRpdGVkICYmICFAc3RhdGUuZXJyb3JzP1xuXG4gIF9pbnB1dDogLT5cbiAgICBpbnB1dCBAZnJpZ1Byb3BzLmlucHV0SHRtbFxuXG4gIHJlbmRlcjogLT5cbiAgICBkaXYgY2xhc3NOYW1lOiBjeChzaXplQ2xhc3NOYW1lcyBAZnJpZ1Byb3BzKSxcbiAgICAgIGRpdiBjbGFzc05hbWU6IEBfY3goKSxcbiAgICAgICAgbGFiZWwgQGZyaWdQcm9wcy5sYWJlbEh0bWwsIEBmcmlnUHJvcHMubGFiZWwgaWYgQGZyaWdQcm9wcy5sYWJlbFxuICAgICAgICBkaXYgY2xhc3NOYW1lOiBcImNvbnRyb2xzXCIsXG4gICAgICAgICAgaWYgQGZyaWdQcm9wcy5wcmVmaXg/IHx8IEBmcmlnUHJvcHMuc3VmZml4P1xuICAgICAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJpbnB1dC1ncm91cFwiLFxuICAgICAgICAgICAgICBpZiBAZnJpZ1Byb3BzLnByZWZpeFxuICAgICAgICAgICAgICAgIGRpdiBjbGFzc05hbWU6IFwiaW5wdXQtZ3JvdXAtYWRkb25cIiwgQGZyaWdQcm9wcy5wcmVmaXhcbiAgICAgICAgICAgICAgQF9pbnB1dCgpXG4gICAgICAgICAgICAgIGlmIEBmcmlnUHJvcHMuc3VmZml4XG4gICAgICAgICAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJpbnB1dC1ncm91cC1hZGRvblwiLCBAZnJpZ1Byb3BzLnN1ZmZpeFxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIEBfaW5wdXQoKVxuICAgICAgICBlcnJvckxpc3QgQHN0YXRlLmVycm9ycyBpZiBAc3RhdGU/LmVycm9ycz9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9pbnB1dC5jb2ZmZWVcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZnJpZ2dpbmdCb290c3RyYXAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vZnJpZ2dpbmdfYm9vdHN0cmFwLmNvZmZlZVwiXG5mcmlnSGVscGVycyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9oZWxwZXJzLmNvZmZlZVwiXG5JbnB1dE1peGluICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9taXhpbnMvaW5wdXRfbWl4aW4uY29mZmVlXCJcbntlcnJvckxpc3QsIHNpemVDbGFzc05hbWVzfSAgID0gZnJpZ2dpbmdCb290c3RyYXBcbntodW1hbml6ZSwgY2xvbmUsIG1lcmdlLCBtYXB9ID0gZnJpZ0hlbHBlcnNcbntkaXYsIGxhYmVsLCBzZWxlY3QsIG9wdGlvbn0gID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5mcmlnZ2luZ0Jvb3RzdHJhcC5TZWxlY3QgPSBSZWFjdC5jcmVhdGVDbGFzc1xuXG4gIGRpc3BsYXlOYW1lOiAnRnJpZy5mcmlnZ2luZ0Jvb3RzdHJhcC5TZWxlY3QnXG5cbiAgbWl4aW5zOiBbSW5wdXRNaXhpbl1cblxuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgZXJyb3JzOiB1bmRlZmluZWRcbiAgICBlZGl0ZWQ6IGZhbHNlXG5cbiAgZ2V0RnJpZ2dpbmdQcm9wczogLT5cbiAgICBpbnB1dEh0bWw6XG4gICAgICBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCJcbiAgICAgIGRlZmF1bHRWYWx1ZTogLT4gQGZyaWdQcm9wcy5pbml0aWFsVmFsdWVcbiAgICBsYWJlbEh0bWw6XG4gICAgICBjbGFzc05hbWU6IFwiXCJcblxuICBfY3g6IC0+XG4gICAgY3hcbiAgICAgIFwiZm9ybS1ncm91cFwiOiB0cnVlXG4gICAgICBcImhhcy1lcnJvclwiOiBAc3RhdGUuZXJyb3JzP1xuICAgICAgXCJoYXMtc3VjY2Vzc1wiOiBAc3RhdGUuZWRpdGVkICYmICFAc3RhdGUuZXJyb3JzP1xuXG4gIF9zZWxlY3RPcHRpb246IChvcHRzKSAtPlxuICAgIG9wdHMgPSBAbm9ybWFsaXplRnJpZ2dpbmdPcHRpb24gb3B0c1xuICAgIG9wdGlvbiB2YWx1ZTogb3B0cy52YWx1ZSwgb3B0cy5sYWJlbFxuXG4gIHJlbmRlcjogLT5cbiAgICBkaXYgY2xhc3NOYW1lOiBjeChzaXplQ2xhc3NOYW1lcyBAZnJpZ1Byb3BzKSxcbiAgICAgIGRpdiBjbGFzc05hbWU6IEBfY3goKSxcbiAgICAgICAgbGFiZWwgQGZyaWdQcm9wcy5sYWJlbEh0bWwsIEBmcmlnUHJvcHMubGFiZWwgaWYgQGZyaWdQcm9wcy5sYWJlbFxuICAgICAgICBkaXYgY2xhc3NOYW1lOiBcImNvbnRyb2xzXCIsXG4gICAgICAgICAgc2VsZWN0IEBmcmlnUHJvcHMuaW5wdXRIdG1sLFxuICAgICAgICAgICAgbWFwIEBmcmlnUHJvcHMub3B0aW9ucywgQF9zZWxlY3RPcHRpb25cbiAgICAgICAgZXJyb3JMaXN0IEBzdGF0ZS5lcnJvcnMgaWYgQHN0YXRlPy5lcnJvcnM/XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAvc2VsZWN0LmNvZmZlZVxuICoqLyIsIlJlYWN0ICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcInJlYWN0L2FkZG9uc1wiXG5mcmlnZ2luZ0Jvb3RzdHJhcCAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi9mcmlnZ2luZ19ib290c3RyYXAuY29mZmVlXCJcbklucHV0TWl4aW4gICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uLy4uL21peGlucy9pbnB1dF9taXhpbi5jb2ZmZWVcIlxue2RpdiwgaW5wdXR9ICAgICAgICAgICAgICAgICAgPSBSZWFjdC5ET01cbntzaXplQ2xhc3NOYW1lc30gICAgICAgICAgICAgID0gZnJpZ2dpbmdCb290c3RyYXBcbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbmZyaWdnaW5nQm9vdHN0cmFwLlN1Ym1pdCA9IFJlYWN0LmNyZWF0ZUNsYXNzXG5cbiAgZGlzcGxheU5hbWU6ICdGcmlnLmZyaWdnaW5nQm9vdHN0cmFwLlN1Ym1pdCdcblxuICBtaXhpbnM6IFtJbnB1dE1peGluXVxuXG4gIGdldEZyaWdnaW5nUHJvcHM6IC0+XG4gICAgaW5wdXRIdG1sOlxuICAgICAgcGxhY2Vob2xkZXI6ICAtPiBAZnJpZ1Byb3BzLnBsYWNlaG9sZGVyXG4gICAgICBkZWZhdWx0VmFsdWU6IC0+IEBmcmlnUHJvcHMuaW5pdGlhbFZhbHVlXG4gICAgICBjbGFzc05hbWU6ICAgIC0+IEBmcmlnUHJvcHMuY2xhc3NOYW1lIHx8IFwiYnRuIGJ0bi1kZWZhdWx0XCJcbiAgICAgIHR5cGU6ICAgICAgICAgLT4gQGZyaWdQcm9wcy5odG1sSW5wdXRUeXBlXG5cbiAgcmVuZGVyOiAtPlxuICAgIGRpdiBjbGFzc05hbWU6IGN4KHNpemVDbGFzc05hbWVzIEBmcmlnUHJvcHMpLFxuICAgICAgZGl2IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIsXG4gICAgICAgIGlucHV0IEBmcmlnUHJvcHMuaW5wdXRIdG1sXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAvc3VibWl0LmNvZmZlZVxuICoqLyIsIlJlYWN0ICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcInJlYWN0L2FkZG9uc1wiXG5mcmlnZ2luZ0Jvb3RzdHJhcCAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi9mcmlnZ2luZ19ib290c3RyYXAuY29mZmVlXCJcbmZyaWdIZWxwZXJzICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uLy4uL2hlbHBlcnMuY29mZmVlXCJcbklucHV0TWl4aW4gICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uLy4uL21peGlucy9pbnB1dF9taXhpbi5jb2ZmZWVcIlxue2Vycm9yTGlzdCwgc2l6ZUNsYXNzTmFtZXN9ICAgPSBmcmlnZ2luZ0Jvb3RzdHJhcFxue2h1bWFuaXplLCBjbG9uZSwgbWVyZ2UsIG1hcH0gPSBmcmlnSGVscGVyc1xue2Rpdiwgc3BhbiwgaW5wdXQsIGxhYmVsfSAgICAgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbiMgRXhhbXBsZSAxKSBVc2luZyBhIHN3aXRjaCBmb3Igb25lIGlucHV0OlxuI1xuIyAgIGRhdGEgPSBhbGxJc1dlbGw6IHRydWVcbiNcbiMgICBAZnJpZyByZWY6IFwiZXgxXCIsIGRhdGE6IGRhdGEgLT5cbiMgICAgIGYuaW5wdXQgXCJhbGxJc1dlbGxcIiwgdGVtcGxhdGU6IFwic3dpdGNoXCJcblxuIyBFeGFtcGxlIDIpIFVzaW5nIHN3aXRjaGVzIGFzIHRoZSBkZWZhdWx0IGZvciBhbGwgYm9vbGVhbiBpbnB1dHMgaW4gYSBmb3JtOlxuI1xuIyAgIGRhdGEgPSBhbGxJc1dlbGw6IHRydWVcbiNcbiMgICBAZnJpZyByZWY6IFwiZXgyXCIsIGRhdGE6IGRhdGEsIHR5cGVNYXBwaW5nOiB7Ym9vbGVhbjogXCJzd2l0Y2hcIn0sIC0+XG4jICAgICBmLmlucHV0IFwiYWxsaXNXZWxsXCJcblxuIyBFeGFtcGxlIDMpIFVzaW5nIHN3aXRjaGVzIGFzIHRoZSBkZWZhdWx0IGZvciBhbGwgYm9vbGVhbiBpbnB1dHMgaW4gYWxsIGZvcm1zOlxuI1xuIyAgIEZyaWcudHlwZU1hcHBpbmcuYm9vbGVhbi50ZW1wbGF0ZSA9IFwic3dpdGNoXCJcbiNcbiMgICBkYXRhID0gYWxsSXNXZWxsOiB0cnVlXG4jXG4jICAgQGZyaWcgcmVmOiBcImV4MlwiLCBkYXRhOiBkYXRhLCAtPlxuIyAgICAgZi5pbnB1dCBcImFsbGlzV2VsbFwiXG5cbiMgVGhpcyBvcHRpb25hbCBhZGQtb24gY29tcG9uZW50IGRlcGVuZHMgb24gQm9vdHN0cmFwU3dpdGNoIGFuZCBqUXVlcnlcbmZyaWdnaW5nQm9vdHN0cmFwLlN3aXRjaCA9IFJlYWN0LmNyZWF0ZUNsYXNzXG5cbiAgZGlzcGxheU5hbWU6ICdGcmlnLmZyaWdnaW5nQm9vdHN0cmFwLlN3aXRjaCdcblxuICBtaXhpbnM6IFtJbnB1dE1peGluXVxuXG4gIGdldEZyaWdnaW5nUHJvcHM6IC0+XG4gICAgaGFuZGxlV2lkdGg6ICAgICB1bmRlZmluZWRcbiAgICBpbnB1dEh0bWw6XG4gICAgICBjbGFzc05hbWU6ICAgICBcInN3aXRjaFwiXG4gICAgICB0eXBlOiAgICAgICAgICBcImNoZWNrYm94XCJcbiAgICBvZmZDb2xvcjogICAgICAgIHVuZGVmaW5lZFxuICAgIG9mZlRleHQ6ICAgICAgICAgdW5kZWZpbmVkXG4gICAgb2ZmVmFsdWU6ICAgICAgICBmYWxzZVxuICAgIG9uQ29sb3I6ICAgICAgICAgXCJzdWNjZXNzXCJcbiAgICBvblRleHQ6ICAgICAgICAgIHVuZGVmaW5lZFxuICAgIG9uVmFsdWU6ICAgICAgICAgdHJ1ZVxuXG4gIGNvbXBvbmVudERpZE1vdW50OiAtPlxuICAgICMgZ2V0IGluaXRpYWwgc3RhdGUgKGJvb2xlYW4pIGJ5IGNoZWNraW5nIHdoZXRoZXIgdGhlIGluaXRpYWxWYWx1ZVxuICAgICMgaXMgdGhlIHNhbWUgYXMgdGhlIG9uVmFsdWUvb2ZmVmFsdWUgKC0+IHRydWUvZmFsc2UpIG9mIHRoZSBzd2l0Y2hcbiAgICBAXyRlbCgpLmJvb3RzdHJhcFN3aXRjaFxuICAgICAgZGlzYWJsZWQ6IEBmcmlnUHJvcHMuZGlzYWJsZWRcbiAgICAgIGhhbmRsZVdpZHRoOiBAZnJpZ1Byb3BzLmhhbmRsZVdpZHRoXG4gICAgICBvZmZDb2xvcjogQGZyaWdQcm9wcy5vZmZDb2xvclxuICAgICAgb2ZmVGV4dDogQGZyaWdQcm9wcy5vZmZUZXh0XG4gICAgICBvbkNvbG9yOiBAZnJpZ1Byb3BzLm9uQ29sb3JcbiAgICAgIG9uVGV4dDogQGZyaWdQcm9wcy5vblRleHRcbiAgICAgIHNpemU6IFwic21hbGxcIlxuICAgICAgc3RhdGU6IEBfZ2V0Qm9vbGVhblZhbCgpXG4gICAgICBvblN3aXRjaENoYW5nZTogQF9vblN3aXRjaENoYW5nZVxuXG4gIF9nZXRCb29sZWFuVmFsOiAtPlxuICAgIEBfYm9vbGVhblZhbCA/PSBAZnJpZ1Byb3BzLm9uVmFsdWUgPT0gQGZyaWdQcm9wcy5pbml0aWFsVmFsdWVcblxuICBnZXRGcmlnZ2luZ1ZhbHVlOiAtPlxuICAgICMgYm9vbGVhbiB2YWx1ZSBpcyB1bmRlZmluZWQgb24gaW5pdGlhbCBwYWdlIGxvYWQsIHNvIHZhbHVlIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAgQGZyaWdQcm9wc1tpZiBAX2dldEJvb2xlYW5WYWwoKSB0aGVuICdvblZhbHVlJyBlbHNlICdvZmZWYWx1ZSddXG5cbiAgXyRlbDogLT5cbiAgICAkIEByZWZzW0BmcmlnUHJvcHMuaW5wdXRIdG1sLnJlZl0uZ2V0RE9NTm9kZSgpXG5cbiAgX29uU3dpdGNoQ2hhbmdlOiAoZSwgdmFsKSAtPlxuICAgIEBfYm9vbGVhblZhbCA9IHZhbFxuICAgIEBfJGVsKCkudmFsIEBnZXRGcmlnZ2luZ1ZhbHVlKClcbiAgICBAZnJpZ1Byb3BzLmlucHV0SHRtbC5vbkNoYW5nZSgpXG5cbiAgX2xhYmVsQ29udGFpbmVyQ3g6IC0+XG4gICAgY3hcbiAgICAgIFwicHVsbC1sZWZ0XCI6IEBmcmlnUHJvcHMubGF5b3V0ID09IFwiaG9yaXpvbnRhbFwiXG5cbiAgX2lucHV0Q29udGFpbmVyQ3g6IC0+XG4gICAgY3hcbiAgICAgIFwicHVsbC1yaWdodFwiOiBAZnJpZ1Byb3BzLmxheW91dCA9PSBcImhvcml6b250YWxcIlxuICAgICAgXCJjb250cm9sc1wiOiBAZnJpZ1Byb3BzLmxheW91dCA9PSBcInZlcnRpY2FsXCJcblxuICByZW5kZXI6IC0+XG4gICAgZGl2IGNsYXNzTmFtZTogY3goc2l6ZUNsYXNzTmFtZXMgQGZyaWdQcm9wcyksXG4gICAgICBkaXYgY2xhc3NOYW1lOiBAX2xhYmVsQ29udGFpbmVyQ3goKSxcbiAgICAgICAgbGFiZWwgQGZyaWdQcm9wcy5sYWJlbEh0bWwsIEBmcmlnUHJvcHMubGFiZWwgaWYgQGZyaWdQcm9wcy5sYWJlbFxuICAgICAgZGl2IGNsYXNzTmFtZTogQF9pbnB1dENvbnRhaW5lckN4KCksXG4gICAgICAgIGlucHV0IEBmcmlnUHJvcHMuaW5wdXRIdG1sXG4gICAgICAgIGVycm9yTGlzdCBAc3RhdGUuZXJyb3JzIGlmIEBzdGF0ZT8uZXJyb3JzP1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwL3N3aXRjaC5jb2ZmZWVcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZnJpZ2dpbmdCb290c3RyYXAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vZnJpZ2dpbmdfYm9vdHN0cmFwLmNvZmZlZVwiXG5mcmlnSGVscGVycyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9oZWxwZXJzLmNvZmZlZVwiXG5JbnB1dE1peGluICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9taXhpbnMvaW5wdXRfbWl4aW4uY29mZmVlXCJcbntlcnJvckxpc3QsIHNpemVDbGFzc05hbWVzfSAgID0gZnJpZ2dpbmdCb290c3RyYXBcbntodW1hbml6ZSwgY2xvbmUsIG1lcmdlLCBtYXB9ID0gZnJpZ0hlbHBlcnNcbntkaXYsIGxhYmVsLCB0ZXh0YXJlYX0gICAgICAgID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5mcmlnZ2luZ0Jvb3RzdHJhcC5UZXh0ID0gUmVhY3QuY3JlYXRlQ2xhc3NcblxuICBkaXNwbGF5TmFtZTogJ0ZyaWcuZnJpZ2dpbmdCb290c3RyYXAuVGV4dCdcblxuICBtaXhpbnM6IFtJbnB1dE1peGluXVxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICBlcnJvcnM6IHVuZGVmaW5lZFxuICAgIGVkaXRlZDogZmFsc2VcblxuICBnZXRGcmlnZ2luZ1Byb3BzOiAtPlxuICAgIGlucHV0SHRtbDpcbiAgICAgIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIlxuICAgICAgcGxhY2Vob2xkZXI6IC0+IEBmcmlnUHJvcHMucGxhY2Vob2xkZXJcbiAgICAgIHJvd3M6IDNcbiAgICAgIGRlZmF1bHRWYWx1ZTogLT4gQGZyaWdQcm9wcy5pbml0aWFsVmFsdWVcbiAgICBsYWJlbEh0bWw6XG4gICAgICBjbGFzc05hbWU6IFwiY29udHJvbC1sYWJlbFwiXG5cbiAgX2N4OiAtPlxuICAgIGN4XG4gICAgICBcImZvcm0tZ3JvdXBcIjogdHJ1ZVxuICAgICAgXCJoYXMtZXJyb3JcIjogQHN0YXRlLmVycm9ycz9cbiAgICAgIFwiaGFzLXN1Y2Nlc3NcIjogQHN0YXRlLmVkaXRlZCAmJiAhQHN0YXRlLmVycm9ycz9cblxuICByZW5kZXI6IC0+XG4gICAgZGl2IGNsYXNzTmFtZTogY3goc2l6ZUNsYXNzTmFtZXMgQGZyaWdQcm9wcyksXG4gICAgICBkaXYgY2xhc3NOYW1lOiBAX2N4KCksXG4gICAgICAgIGxhYmVsIEBmcmlnUHJvcHMubGFiZWxIdG1sLCBAZnJpZ1Byb3BzLmxhYmVsIGlmIEBmcmlnUHJvcHMubGFiZWxcbiAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJjb250cm9sc1wiLFxuICAgICAgICAgIHRleHRhcmVhIEBmcmlnUHJvcHMuaW5wdXRIdG1sXG4gICAgICAgIGVycm9yTGlzdCBAc3RhdGUuZXJyb3JzIGlmIEBzdGF0ZT8uZXJyb3JzP1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwL3RleHQuY29mZmVlXG4gKiovIiwiUmVhY3QgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwicmVhY3QvYWRkb25zXCJcbmZyaWdnaW5nQm9vdHN0cmFwICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uL2ZyaWdnaW5nX2Jvb3RzdHJhcC5jb2ZmZWVcIlxuZnJpZ0hlbHBlcnMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vLi4vaGVscGVycy5jb2ZmZWVcIlxuSW5wdXRNaXhpbiAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vLi4vbWl4aW5zL2lucHV0X21peGluLmNvZmZlZVwiXG57ZXJyb3JMaXN0LCBzaXplQ2xhc3NOYW1lc30gICA9IGZyaWdnaW5nQm9vdHN0cmFwXG57aHVtYW5pemUsIGNsb25lLCBtZXJnZSwgbWFwfSA9IGZyaWdIZWxwZXJzXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5mcmlnZ2luZ0Jvb3RzdHJhcC5UeXBlYWhlYWQgPSBSZWFjdC5jcmVhdGVDbGFzc1xuXG4gIGRpc3BsYXlOYW1lOiAnRnJpZy5mcmlnZ2luZ0Jvb3RzdHJhcC5TZWxlY3QnXG5cbiAgbWl4aW5zOiBbSW5wdXRNaXhpbl1cblxuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgZXJyb3JzOiB1bmRlZmluZWRcbiAgICBlZGl0ZWQ6IGZhbHNlXG4gICAgc2VsZWN0ZWRJdGVtczogW11cblxuICBnZXRGcmlnZ2luZ1Byb3BzOiAtPlxuICAgIGlucHV0SHRtbDpcbiAgICAgIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2wgdHlwZWFoZWFkXCJcbiAgICAgIGRlZmF1bHRWYWx1ZTogLT4gQGZyaWdQcm9wcy5pbml0aWFsVmFsdWVcbiAgICAgIHBsYWNlaG9sZGVyOiAgLT4gQGZyaWdQcm9wcy5wbGFjZWhvbGRlclxuICAgIGxhYmVsSHRtbDpcbiAgICAgIGNsYXNzTmFtZTogXCJcIlxuXG4gIGNvbXBvbmVudERpZE1vdW50OiAtPlxuICAgIHNvdXJjZSA9IGlmIEBmcmlnUHJvcHMub3B0aW9ucy5sZW5ndGggPiAtMVxuICAgICAgQGZyaWdQcm9wcy5vcHRpb25zXG4gICAgZWxzZVxuICAgICAgQGZyaWdQcm9wcy5vcHRpb25zLmV4ZWN1dGVcbiAgICBvcHRpb25zID1cbiAgICAgIHNvdXJjZTogc291cmNlXG4gICAgICB1cGRhdGVyOiBAX2FmdGVyU2VsZWN0XG4gICAgICBtaW5MZW5ndGg6IDBcbiAgICAgIGl0ZW1zOiA1XG4gICAgICBzaG93SGludE9uRm9jdXM6IHRydWVcbiAgICBpZiBAZnJpZ1Byb3BzLmFkZFRvTGlzdE1lc3NhZ2VcbiAgICAgIG9wdGlvbnNbJ2FkZEl0ZW0nXSA9IG5hbWU6IEBmcmlnUHJvcHMuYWRkVG9MaXN0TWVzc2FnZVxuICAgIGlmIEBmcmlnUHJvcHMubXVsdGlwbGVcbiAgICAgIG9wdGlvbnNbJ2FmdGVyU2VsZWN0J10gPSBAX2NsZWFyVHlwZWFoZWFkXG4gICAgQF9zZXRJbml0aWFsVmFsdWUoKVxuICAgIEBfJGVsKCkudHlwZWFoZWFkIG9wdGlvbnNcblxuICBfc2V0SW5pdGlhbFZhbHVlOiAtPlxuICAgIGlmIGluaXRpYWxWYWx1ZSA9IEBfJGVsKCkudmFsKClcbiAgICAgIGlmIEBmcmlnUHJvcHMubXVsdGlwbGVcbiAgICAgICAgaW5pdGlhbEl0ZW1zID0gQF9tdWx0aXBsZUluaXRpYWxJdGVtcyBpbml0aWFsVmFsdWVcbiAgICAgICAgQF9jbGVhclR5cGVhaGVhZCgpXG4gICAgICBlbHNlXG4gICAgICAgIGluaXRpYWxJdGVtcyA9IFtAX2luaXRhbEl0ZW0oaW5pdGlhbFZhbHVlKV1cbiAgICAgICAgQF8kZWwoKS52YWwgaW5pdGlhbEl0ZW1zWzBdLm5hbWUgaWYgaW5pdGlhbEl0ZW1zWzBdXG4gICAgICBAc2V0U3RhdGUgc2VsZWN0ZWRJdGVtczogaW5pdGlhbEl0ZW1zXG5cbiAgX211bHRpcGxlSW5pdGlhbEl0ZW1zOiAoaW5pdGlhbFZhbHVlKSAtPlxuICAgIGluaXRpYWxWYWxzID0gaW5pdGlhbFZhbHVlLnNwbGl0ICcsJ1xuICAgIGlmIEBmcmlnUHJvcHMub3B0aW9ucy5sZW5ndGggPiAtMVxuICAgICAgIyBpZiBvcHRpb25zIGlzIGFuIGFycmF5LCBmaW5kIGluaXRpYWxJdGVtcyBieSB0aGVpciBpZHNcbiAgICAgIGluaXRpYWxJdGVtcyA9IF8uZmlsdGVyIEBmcmlnUHJvcHMub3B0aW9ucywgKGl0ZW0pIC0+XG4gICAgICAgIF8uaW5jbHVkZXMgaW5pdGlhbFZhbHMsIGl0ZW0uaWQudG9TdHJpbmcoKVxuICAgICAgIyByZW1vdmUgdXNlZCB2YWxzIGZyb20gdHlwZWFoZWFkIG9wdGlvbnNcbiAgICAgIF8ucHVsbCBAZnJpZ1Byb3BzLm9wdGlvbnMsIGluaXRpYWxJdGVtcy4uLlxuICAgIGVsc2VcbiAgICAgICMgaWYgb3B0aW9ucyBpcyBhIGZ1bmN0aW9uLCBpbml0aWFsSXRlbXMgbXVzdCBiZSBwYXNzZWQgaW5cbiAgICAgIGluaXRpYWxJdGVtcyA9IEBmcmlnUHJvcHMuaW5pdGlhbEl0ZW1zXG4gICAgaW5pdGlhbEl0ZW1zXG5cbiAgX2luaXRhbEl0ZW06IChpbml0aWFsVmFsdWUpIC0+XG4gICAgXy5maW5kIEBmcmlnUHJvcHMub3B0aW9ucywgaWQ6IHBhcnNlSW50IGluaXRpYWxWYWx1ZVxuXG4gIF8kZWw6IC0+XG4gICAgJCBAcmVmc1tAZnJpZ1Byb3BzLmlucHV0SHRtbC5yZWZdLmdldERPTU5vZGUoKVxuXG4gIF9hZnRlclNlbGVjdDogKGl0ZW0pIC0+XG4gICAgaWYgQGZyaWdQcm9wcy5hZGRUb0xpc3RNZXNzYWdlIGFuZCBpdGVtLm5hbWUgPT0gQGZyaWdQcm9wcy5hZGRUb0xpc3RNZXNzYWdlXG4gICAgICAjIHBvc3QgdGhlIGl0ZW0gKGNyZWF0ZSlcbiAgICAgIEBmcmlnUHJvcHMuYWRkVG9MaXN0LmV4ZWN1dGUgQF8kZWwoKS52YWwoKSwgKGRhdGEsIGl0ZW1UeXBlKSA9PlxuICAgICAgICAjIGNhbGxiYWNrIHNob3VsZCBhcHBlbmQgKHZpYSBfLnBhcnRpYWxSaWdodCkgdGhlIG1vZGVsIHR5cGVcbiAgICAgICAgIyBlZzogJ3NhbGVzX2NhdGVnb3J5J1xuICAgICAgICBpdGVtID0gZGF0YVtpdGVtVHlwZV1cbiAgICAgICAgIyBhZGQgbmV3bHkgY3JlYXRlZCBpdGVtIHRvIHR5cGVhaGVhZCBvcHRpb25zXG4gICAgICAgIEBmcmlnUHJvcHMub3B0aW9ucy5wdXNoIGl0ZW1cbiAgICAgICAgQF8kZWwoKS52YWwgaXRlbS5uYW1lXG4gICAgICAgIEBfYWRkVG9TZWxlY3RlZEl0ZW1zIGl0ZW1cbiAgICBlbHNlXG4gICAgICBAX2FkZFRvU2VsZWN0ZWRJdGVtcyBpdGVtXG4gICAgaXRlbVxuXG4gIF9hZGRUb1NlbGVjdGVkSXRlbXM6IChpdGVtKSAtPlxuICAgIGlmIEBmcmlnUHJvcHMubXVsdGlwbGVcbiAgICAgIEBzZXRTdGF0ZSBzZWxlY3RlZEl0ZW1zOiBAc3RhdGUuc2VsZWN0ZWRJdGVtcy5jb25jYXQgaXRlbVxuICAgICAgXy5wdWxsIEBmcmlnUHJvcHMub3B0aW9ucywgaXRlbVxuICAgIGVsc2VcbiAgICAgIEBzZXRTdGF0ZSBzZWxlY3RlZEl0ZW1zOiBbaXRlbV1cbiAgICBzZXRUaW1lb3V0IEBmcmlnUHJvcHMuaW5wdXRIdG1sLm9uQ2hhbmdlLCAwXG5cbiAgX2NsZWFyVHlwZWFoZWFkOiAtPlxuICAgIEBfJGVsKCkudmFsICcnXG5cbiAgZ2V0RnJpZ2dpbmdWYWx1ZTogLT5cbiAgICBpZiBAZnJpZ1Byb3BzLm11bHRpcGxlXG4gICAgICBfLm1hcCBAc3RhdGUuc2VsZWN0ZWRJdGVtcywgJ2lkJ1xuICAgIGVsc2VcbiAgICAgIEBzdGF0ZS5zZWxlY3RlZEl0ZW1zWzBdLmlkIGlmIEBzdGF0ZS5zZWxlY3RlZEl0ZW1zWzBdXG5cbiAgX2N4OiAtPlxuICAgIGN4XG4gICAgICBcImZvcm0tZ3JvdXBcIjogdHJ1ZVxuICAgICAgXCJoYXMtZXJyb3JcIjogQHN0YXRlLmVycm9ycz9cbiAgICAgIFwiaGFzLXN1Y2Nlc3NcIjogQHN0YXRlLmVkaXRlZCAmJiAhQHN0YXRlLmVycm9ycz9cbiAgICAgIFwiaXRlbXNcIjogdHJ1ZVxuXG4gIF9kZWxldGVJdGVtOiAoaXRlbSkgLT5cbiAgICBAc2V0U3RhdGUgc2VsZWN0ZWRJdGVtczogXy53aXRob3V0IEBzdGF0ZS5zZWxlY3RlZEl0ZW1zLCBpdGVtXG4gICAgQGZyaWdQcm9wcy5vcHRpb25zLnB1c2ggaXRlbSBpZiBAZnJpZ1Byb3BzLm9wdGlvbnMubGVuZ3RoID4gLTFcbiAgICBzZXRUaW1lb3V0IEBmcmlnUHJvcHMuaW5wdXRIdG1sLm9uQ2hhbmdlLCAwXG5cbiAgcmVuZGVyOiAtPlxuICAgIGRpdiBjbGFzc05hbWU6IGN4KHNpemVDbGFzc05hbWVzIEBwcm9wcykgKyBcIiB0eXBlYWhlYWRcIixcbiAgICAgIGRpdiBjbGFzc05hbWU6IFwiY29udHJvbHNcIixcbiAgICAgICAgbGFiZWwgQGZyaWdQcm9wcy5sYWJlbEh0bWwsIEBmcmlnUHJvcHMubGFiZWwgaWYgIUBmcmlnUHJvcHMubXVsdGlwbGVcbiAgICAgICAgaW5wdXQgQGZyaWdQcm9wcy5pbnB1dEh0bWxcbiAgICAgICAgbGFiZWwgQGZyaWdQcm9wcy5sYWJlbEh0bWwsIEBmcmlnUHJvcHMubGFiZWwgaWYgQGZyaWdQcm9wcy5tdWx0aXBsZVxuICAgICAgZGl2IGNsYXNzTmFtZTogQF9jeCgpLFxuICAgICAgICBpZiBAZnJpZ1Byb3BzLm11bHRpcGxlXG4gICAgICAgICAgXy5tYXAgQHN0YXRlLnNlbGVjdGVkSXRlbXMsIChpdGVtKSA9PlxuICAgICAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJyb3dcIixcbiAgICAgICAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0xMiBjb2wtbGctMTJcIixcbiAgICAgICAgICAgICAgICBwIGNsYXNzTmFtZTogJ3B1bGwtbGVmdCcsIGl0ZW0ubmFtZVxuICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYSBmYS10aW1lcyBkZWxldGUtdHJpZ2dlciBwdWxsLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF8ucGFydGlhbCBAX2RlbGV0ZUl0ZW0sIGl0ZW1cbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlbW92ZSBmcm9tIGxpc3RcIlxuICAgICAgICBpZiBAc3RhdGUuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPCAxICYmIEBmcmlnUHJvcHMubXVsdGlwbGVcbiAgICAgICAgICBkaXYgY2xhc3NOYW1lOiBcInJvd1wiLFxuICAgICAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0xMiBjb2wtbGctMTJcIixcbiAgICAgICAgICAgICAgcCBjbGFzc05hbWU6ICdwdWxsLWxlZnQnLCBcIk5vIFwiICtcbiAgICAgICAgICAgICAgICBAZnJpZ1Byb3BzLmxhYmVsLnRvTG93ZXJDYXNlKCkgKyBcIi4uLlwiXG4gICAgICAgIGVycm9yTGlzdCBAc3RhdGUuZXJyb3JzIGlmIEBzdGF0ZT8uZXJyb3JzP1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwL3R5cGVhaGVhZC5jb2ZmZWVcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9