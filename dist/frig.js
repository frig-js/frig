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
	  Mixin: __webpack_require__(7),
	  InputMixin: __webpack_require__(3),
	  FormMixin: __webpack_require__(4),
	  typeMapping: __webpack_require__(2),
	  validations: __webpack_require__(5),
	  friggingBootstrap: __webpack_require__(6)
	};
	
	AddBootstrapInputs = function(inputs) {
	  var i, k, len, results;
	  results = [];
	  for (i = 0, len = inputs.length; i < len; i++) {
	    k = inputs[i];
	    results.push(__webpack_require__(14)("./" + k + ".coffee"));
	  }
	  return results;
	};
	
	AddBootstrapInputs(["checkbox", "errors", "form", "input", "select", "submit", "switch", "text", "typeahead"]);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, cx, div, friggingBootstrap, input, ref, sizeClassNames;
	
	React = __webpack_require__(18);
	
	friggingBootstrap = __webpack_require__(6);
	
	InputMixin = __webpack_require__(3);
	
	ref = React.DOM, div = ref.div, input = ref.input;
	
	sizeClassNames = friggingBootstrap.sizeClassNames;
	
	cx = React.addons.classSet;
	
	friggingBootstrap.Submit = React.createFactory(React.createClass({
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
	}));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var React, clone, frigHelpers, frigValidations, friggingPropsMixin, humanize, inputMixin, isConfigObj, map, mapObj, merge, setDefaults;
	
	React = __webpack_require__(18);
	
	friggingPropsMixin = __webpack_require__(19);
	
	frigHelpers = __webpack_require__(20);
	
	frigValidations = __webpack_require__(5);
	
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var React, capitalize, dslMixin, formMixin, frigHelpers, friggingPropsMixin, getTemplate, guessType, map, merge, setDefaults;
	
	React = __webpack_require__(18);
	
	friggingPropsMixin = __webpack_require__(19);
	
	dslMixin = __webpack_require__(21);
	
	frigHelpers = __webpack_require__(20);
	
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var React, clone, frigHelpers, friggingBootstrap, humanize, i, map, merge, ref, span;
	
	React = __webpack_require__(18);
	
	frigHelpers = __webpack_require__(20);
	
	humanize = frigHelpers.humanize, clone = frigHelpers.clone, merge = frigHelpers.merge, map = frigHelpers.map;
	
	ref = React.DOM, span = ref.span, i = ref.i;
	
	__webpack_require__(24);
	
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var FormBuilder, React, frigMixin,
	  slice = [].slice;
	
	React = __webpack_require__(18);
	
	FormBuilder = __webpack_require__(22);
	
	module.exports = frigMixin = {
	  frig: function(props, children) {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(FormBuilder, [this].concat(slice.call(arguments)), function(){}).render();
	  }
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, cx, div, errorList, friggingBootstrap, input, label, ref, sizeClassNames;
	
	React = __webpack_require__(18);
	
	friggingBootstrap = __webpack_require__(6);
	
	InputMixin = __webpack_require__(3);
	
	errorList = friggingBootstrap.errorList, sizeClassNames = friggingBootstrap.sizeClassNames;
	
	ref = React.DOM, div = ref.div, label = ref.label, input = ref.input;
	
	cx = React.addons.classSet;
	
	friggingBootstrap.Checkbox = React.createFactory(React.createClass({
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
	}));


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var React, div, errorList, friggingBootstrap, i, ref, span;
	
	React = __webpack_require__(18);
	
	friggingBootstrap = __webpack_require__(6);
	
	errorList = friggingBootstrap.errorList;
	
	ref = React.DOM, div = ref.div, span = ref.span, i = ref.i;
	
	friggingBootstrap.Errors = React.createFactory(React.createClass({
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
	}));


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, clone, cx, div, errorList, friggingBootstrap, humanize, img, input, label, map, merge, ref, ref1, sizeClassNames;
	
	React = __webpack_require__(18);
	
	friggingBootstrap = __webpack_require__(6);
	
	InputMixin = __webpack_require__(3);
	
	ref = __webpack_require__(20), humanize = ref.humanize, clone = ref.clone, merge = ref.merge, map = ref.map;
	
	errorList = friggingBootstrap.errorList, sizeClassNames = friggingBootstrap.sizeClassNames;
	
	ref1 = React.DOM, div = ref1.div, label = ref1.label, input = ref1.input, img = ref1.img;
	
	cx = React.addons.classSet;
	
	friggingBootstrap.File = React.createFactory(React.createClass({
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
	}));


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var FormMixin, React, div, errorList, form, friggingBootstrap, input, label, ref;
	
	React = __webpack_require__(18);
	
	friggingBootstrap = __webpack_require__(6);
	
	FormMixin = __webpack_require__(4);
	
	errorList = friggingBootstrap.errorList;
	
	ref = React.DOM, div = ref.div, form = ref.form, label = ref.label, input = ref.input;
	
	friggingBootstrap.Form = React.createFactory(React.createClass({
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
	}));


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, clone, cx, div, errorList, frigHelpers, friggingBootstrap, humanize, input, label, map, merge, ref, sizeClassNames;
	
	React = __webpack_require__(18);
	
	friggingBootstrap = __webpack_require__(6);
	
	frigHelpers = __webpack_require__(20);
	
	InputMixin = __webpack_require__(3);
	
	errorList = friggingBootstrap.errorList, sizeClassNames = friggingBootstrap.sizeClassNames;
	
	humanize = frigHelpers.humanize, clone = frigHelpers.clone, merge = frigHelpers.merge, map = frigHelpers.map;
	
	ref = React.DOM, div = ref.div, label = ref.label, input = ref.input;
	
	cx = React.addons.classSet;
	
	friggingBootstrap.Input = React.createFactory(React.createClass({
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
	}));


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, clone, cx, div, errorList, frigHelpers, friggingBootstrap, humanize, label, map, merge, option, ref, select, sizeClassNames;
	
	React = __webpack_require__(18);
	
	friggingBootstrap = __webpack_require__(6);
	
	frigHelpers = __webpack_require__(20);
	
	InputMixin = __webpack_require__(3);
	
	errorList = friggingBootstrap.errorList, sizeClassNames = friggingBootstrap.sizeClassNames;
	
	humanize = frigHelpers.humanize, clone = frigHelpers.clone, merge = frigHelpers.merge, map = frigHelpers.map;
	
	ref = React.DOM, div = ref.div, label = ref.label, select = ref.select, option = ref.option;
	
	cx = React.addons.classSet;
	
	friggingBootstrap.Select = React.createFactory(React.createClass({
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
	      className: cx(sizeClassNames(this.props))
	    }, div({
	      className: this._cx()
	    }, this.frigProps.label ? label(this.frigProps.labelHtml, this.frigProps.label) : void 0, div({
	      className: "controls"
	    }, select(this.frigProps.inputHtml, map(this.frigProps.options, this._selectOption))), ((ref1 = this.state) != null ? ref1.errors : void 0) != null ? errorList(this.state.errors) : void 0));
	  }
	}));


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./checkbox.coffee": 8,
		"./errors.coffee": 9,
		"./file.coffee": 10,
		"./form.coffee": 11,
		"./input.coffee": 12,
		"./select.coffee": 13,
		"./submit.coffee": 1,
		"./switch.coffee": 15,
		"./text.coffee": 16,
		"./typeahead.coffee": 17
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
	webpackContext.id = 14;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, clone, cx, div, errorList, frigHelpers, friggingBootstrap, humanize, input, label, map, merge, ref, sizeClassNames, span;
	
	React = __webpack_require__(18);
	
	friggingBootstrap = __webpack_require__(6);
	
	frigHelpers = __webpack_require__(20);
	
	InputMixin = __webpack_require__(3);
	
	errorList = friggingBootstrap.errorList, sizeClassNames = friggingBootstrap.sizeClassNames;
	
	humanize = frigHelpers.humanize, clone = frigHelpers.clone, merge = frigHelpers.merge, map = frigHelpers.map;
	
	ref = React.DOM, div = ref.div, span = ref.span, input = ref.input, label = ref.label;
	
	cx = React.addons.classSet;
	
	friggingBootstrap.Switch = React.createFactory(React.createClass({
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
	}));


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, clone, cx, div, errorList, frigHelpers, friggingBootstrap, humanize, label, map, merge, ref, sizeClassNames, textarea;
	
	React = __webpack_require__(18);
	
	friggingBootstrap = __webpack_require__(6);
	
	frigHelpers = __webpack_require__(20);
	
	InputMixin = __webpack_require__(3);
	
	errorList = friggingBootstrap.errorList, sizeClassNames = friggingBootstrap.sizeClassNames;
	
	humanize = frigHelpers.humanize, clone = frigHelpers.clone, merge = frigHelpers.merge, map = frigHelpers.map;
	
	ref = React.DOM, div = ref.div, label = ref.label, textarea = ref.textarea;
	
	cx = React.addons.classSet;
	
	friggingBootstrap.Text = React.createFactory(React.createClass({
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
	}));


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, clone, cx, errorList, frigHelpers, friggingBootstrap, humanize, map, merge, sizeClassNames,
	  slice = [].slice;
	
	React = __webpack_require__(18);
	
	friggingBootstrap = __webpack_require__(6);
	
	frigHelpers = __webpack_require__(20);
	
	InputMixin = __webpack_require__(3);
	
	errorList = friggingBootstrap.errorList, sizeClassNames = friggingBootstrap.sizeClassNames;
	
	humanize = frigHelpers.humanize, clone = frigHelpers.clone, merge = frigHelpers.merge, map = frigHelpers.map;
	
	cx = React.addons.classSet;
	
	friggingBootstrap.Typeahead = React.createFactory(React.createClass({
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
	}));


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React.addons;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var React, clone, frigDefaults, frigHelpers, friggingPropsMixin, humanize, isConfigObj, map, mapObj, merge, setDefaults,
	  slice = [].slice;
	
	React = __webpack_require__(18);
	
	frigHelpers = __webpack_require__(20);
	
	frigDefaults = __webpack_require__(23);
	
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var React, capitalize, dslMixin, frigHelpers, getTemplate, globalTypeMapping, guessType, humanize, map, setDefaults;
	
	React = __webpack_require__(18);
	
	globalTypeMapping = __webpack_require__(2);
	
	frigHelpers = __webpack_require__(20);
	
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
	    var template, templateName, typeMapping;
	    if (inputProps == null) {
	      inputProps = {};
	    }
	    typeMapping = inputProps.typeMapping;
	    delete inputProps.typeMapping;
	    setDefaults(this._frigInputDefaults(key), inputProps);
	    inputProps.type = this._frigGuessInputType(inputProps);
	    templateName = this._frigGetTemplateName(inputProps, this.props.theme, typeMapping);
	    template = this._frigLoadTemplate(inputProps, templateName);
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var FormBuilder, frigDefaults;
	
	frigDefaults = __webpack_require__(23);
	
	module.exports = FormBuilder = (function() {
	  function FormBuilder(parent, opts, cb) {
	    var i, k, len, ref, ref1, v;
	    this.parent = parent;
	    this.opts = opts != null ? opts : {};
	    this.cb = cb != null ? cb : function() {};
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
	    return this._theme().Form(this.props);
	  };
	
	  FormBuilder.prototype._theme = function() {
	    var base, theme, themeName;
	    themeName = (base = this.opts).theme || (base.theme = frigDefaults.theme);
	    if (themeName == null) {
	      throw "A theme name is required";
	    }
	    theme = Frig[themeName];
	    if (theme == null) {
	      throw "Frig." + themeName + " does not exist";
	    }
	    return theme;
	  };
	
	  return FormBuilder;
	
	})();


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var capitalize, clone, defaults, frigHelpers, guessType, humanize, map, merge, typeMapping;
	
	frigHelpers = __webpack_require__(20);
	
	typeMapping = __webpack_require__(2);
	
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
	    return Frig.typeMapping[this.frigProps.type].htmlInputType;
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmIzMTg5YTQ3MDdhNDBmNmUzMDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAvc3VibWl0LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90eXBlX21hcHBpbmcuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL21peGlucy9pbnB1dF9taXhpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvbWl4aW5zL2Zvcm1fbWl4aW4uY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3ZhbGlkYXRpb25zLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9taXhpbnMvZnJpZ19taXhpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9jaGVja2JveC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9lcnJvcnMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAvZmlsZS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9mb3JtLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwL2lucHV0LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwL3NlbGVjdC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcCBeXFwuXFwvLipcXC5jb2ZmZWUkIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAvc3dpdGNoLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwL3RleHQuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAvdHlwZWFoZWFkLmNvZmZlZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdC5hZGRvbnNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9taXhpbnMvZnJpZ2dpbmdfcHJvcHNfbWl4aW4uY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL2hlbHBlcnMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL21peGlucy9kc2xfbWl4aW4uY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL2Zvcm1fYnVpbGRlci5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvZGVmYXVsdHMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVC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O0FBQUEsS0FDQSxVQUFlO2NBQUcsSUFBQyxlQUFKO0tBQUEsQ0FEZjtJQWpDRjtBQUFBLEdBb0NBLFdBQ0U7QUFBQSxjQUFlO2NBQUcsSUFBQyxVQUFTLENBQUMsU0FBZDtLQUFBLENBQWY7SUFyQ0Y7QUFBQSxHQXVDQSxXQUNFO0FBQUEsVUFBZSxPQUFmO0FBQUEsS0FDQSxNQUFlO2NBQUcsSUFBQyxVQUFTLENBQUMsU0FBZDtLQUFBLENBRGY7QUFBQSxLQUVBLFdBQWU7Y0FBRyxJQUFDLFVBQVMsQ0FBQyxVQUFkO0tBQUEsQ0FGZjtBQUFBLEtBR0EsVUFBZTtjQUFHLElBQUMsZUFBSjtLQUFBLENBSGY7QUFBQSxLQUlBLFFBQWU7Y0FBRyxJQUFDLGFBQUo7S0FBQSxDQUpmO0FBQUEsS0FLQSxXQUFlO2NBQUcsSUFBQyxVQUFTLENBQUMsVUFBZDtLQUFBLENBTGY7QUFBQSxLQU1BLFVBQWU7Y0FBRyxJQUFDLFVBQVMsQ0FBQyxTQUFkO0tBQUEsQ0FOZjtBQUFBLEtBT0EsVUFBZTtjQUFHLElBQUMsVUFBUyxDQUFDLFNBQWQ7S0FBQSxDQVBmO0lBeENGO0FBQUEsR0FpREEsYUFBYTtZQUNYO0FBQUEsaUJBQWUsSUFBQyxVQUFTLENBQUMsUUFBMUI7QUFBQSxPQUNBLEtBQWlDLDBCQUFsQixPQUFDLFVBQVMsQ0FBQyxHQUFYLFNBRGY7QUFBQSxPQUVBLEtBQWlDLDBCQUFsQixPQUFDLFVBQVMsQ0FBQyxHQUFYLFNBRmY7T0FEVztHQUFBLENBakRiO0VBVEY7Ozs7Ozs7QUNBQSwwQyIsImZpbGUiOiJmcmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBiYjMxODlhNDcwN2E0MGY2ZTMwOVxuICoqLyIsIiMgU2V0dGluZyB0aGUgZGVmYXVsdCB0aGVtZSB0byBib290c3RyYXBcbm1vZHVsZS5leHBvcnRzID1cbiAgIyBGcmlnIGNvcmUgbWl4aW5zXG4gIE1peGluOiByZXF1aXJlIFwiZnJpZy9taXhpbnMvZnJpZ19taXhpbi5jb2ZmZWVcIlxuICBJbnB1dE1peGluOiByZXF1aXJlIFwiLi9mcmlnL21peGlucy9pbnB1dF9taXhpbi5jb2ZmZWVcIlxuICBGb3JtTWl4aW46IHJlcXVpcmUgXCIuL2ZyaWcvbWl4aW5zL2Zvcm1fbWl4aW4uY29mZmVlXCJcblxuICAjIEZyaWcgZXh0ZW5zaW9uIHBvaW50c1xuICB0eXBlTWFwcGluZzogcmVxdWlyZSBcIi4vZnJpZy90eXBlX21hcHBpbmcuY29mZmVlXCJcbiAgdmFsaWRhdGlvbnM6IHJlcXVpcmUgXCIuL2ZyaWcvdmFsaWRhdGlvbnMuY29mZmVlXCJcblxuICAjIEZyaWcgZGVmYXVsdCB0aGVtZSAoRnJpZ2dpbmcgQm9vdHN0cmFwKVxuICBmcmlnZ2luZ0Jvb3RzdHJhcDogcmVxdWlyZSBcIi4vZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwLmNvZmZlZVwiXG5cbiMgRnJpZ2dpbmcgQm9vdHN0cmFwJ3MgZGVmYXVsdCBpbnB1dCBjb21wb25lbnRzXG5BZGRCb290c3RyYXBJbnB1dHMgPSAoaW5wdXRzKSAtPlxuICByZXF1aXJlIFwiLi9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAvI3trfS5jb2ZmZWVcIiBmb3IgayBpbiBpbnB1dHNcblxuQWRkQm9vdHN0cmFwSW5wdXRzIFtcbiAgXCJjaGVja2JveFwiXG4gIFwiZXJyb3JzXCJcbiAgXCJmb3JtXCJcbiAgXCJpbnB1dFwiXG4gIFwic2VsZWN0XCJcbiAgXCJzdWJtaXRcIlxuICBcInN3aXRjaFwiXG4gIFwidGV4dFwiXG4gIFwidHlwZWFoZWFkXCJcbl1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnLmNvZmZlZVxuICoqLyIsIlJlYWN0ICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcInJlYWN0L2FkZG9uc1wiXG5mcmlnZ2luZ0Jvb3RzdHJhcCAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi9mcmlnZ2luZ19ib290c3RyYXAuY29mZmVlXCJcbklucHV0TWl4aW4gICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uLy4uL21peGlucy9pbnB1dF9taXhpbi5jb2ZmZWVcIlxue2RpdiwgaW5wdXR9ICAgICAgICAgICAgICAgICAgPSBSZWFjdC5ET01cbntzaXplQ2xhc3NOYW1lc30gICAgICAgICAgICAgID0gZnJpZ2dpbmdCb290c3RyYXBcbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbmZyaWdnaW5nQm9vdHN0cmFwLlN1Ym1pdCA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkgUmVhY3QuY3JlYXRlQ2xhc3NcblxuICBkaXNwbGF5TmFtZTogJ0ZyaWcuZnJpZ2dpbmdCb290c3RyYXAuU3VibWl0J1xuXG4gIG1peGluczogW0lucHV0TWl4aW5dXG5cbiAgZ2V0RnJpZ2dpbmdQcm9wczogLT5cbiAgICBpbnB1dEh0bWw6XG4gICAgICBwbGFjZWhvbGRlcjogIC0+IEBmcmlnUHJvcHMucGxhY2Vob2xkZXJcbiAgICAgIGRlZmF1bHRWYWx1ZTogLT4gQGZyaWdQcm9wcy5pbml0aWFsVmFsdWVcbiAgICAgIGNsYXNzTmFtZTogICAgLT4gQGZyaWdQcm9wcy5jbGFzc05hbWUgfHwgXCJidG4gYnRuLWRlZmF1bHRcIlxuICAgICAgdHlwZTogICAgICAgICAtPiBAZnJpZ1Byb3BzLmh0bWxJbnB1dFR5cGVcblxuICByZW5kZXI6IC0+XG4gICAgZGl2IGNsYXNzTmFtZTogY3goc2l6ZUNsYXNzTmFtZXMgQGZyaWdQcm9wcyksXG4gICAgICBkaXYgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIixcbiAgICAgICAgaW5wdXQgQGZyaWdQcm9wcy5pbnB1dEh0bWxcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9zdWJtaXQuY29mZmVlXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB0eXBlTWFwcGluZyA9XG4gIGZvcm06ICAgICAgICAge3RlbXBsYXRlOiBcImZvcm1cIn1cbiAgZXJyb3JzOiAgICAgICB7dGVtcGxhdGU6IFwiZXJyb3JzXCJ9XG4gIHN1Ym1pdDogICAgICAge3RlbXBsYXRlOiBcInN1Ym1pdFwiLCAgIGh0bWxJbnB1dFR5cGU6IFwic3VibWl0XCJ9XG4gIHN0cmluZzogICAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwic3RyaW5nXCJ9XG4gIHBhc3N3b3JkOiAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwicGFzc3dvcmRcIn1cbiAgZW1haWw6ICAgICAgICB7dGVtcGxhdGU6IFwiaW5wdXRcIiwgICAgaHRtbElucHV0VHlwZTogXCJlbWFpbFwifVxuICB1cmw6ICAgICAgICAgIHt0ZW1wbGF0ZTogXCJpbnB1dFwiLCAgICBodG1sSW5wdXRUeXBlOiBcInVybFwifVxuICB0ZWw6ICAgICAgICAgIHt0ZW1wbGF0ZTogXCJpbnB1dFwiLCAgICBodG1sSW5wdXRUeXBlOiBcInRlbFwifVxuICBzZWFyY2g6ICAgICAgIHt0ZW1wbGF0ZTogXCJpbnB1dFwiLCAgICBodG1sSW5wdXRUeXBlOiBcInNlYXJjaFwifVxuICB1dWlkOiAgICAgICAgIHt0ZW1wbGF0ZTogXCJpbnB1dFwiLCAgICBodG1sSW5wdXRUeXBlOiBcInRleHRcIn1cbiAgYm9vbGVhbjogICAgICB7dGVtcGxhdGU6IFwiY2hlY2tib3hcIiwgaHRtbElucHV0VHlwZTogXCJjaGVja2JveFwifVxuICB0ZXh0OiAgICAgICAgIHt0ZW1wbGF0ZTogXCJ0ZXh0XCJ9XG4gIGZpbGU6ICAgICAgICAge3RlbXBsYXRlOiBcImZpbGVcIiwgICAgIGh0bWxJbnB1dFR5cGU6IFwiZmlsZVwifVxuICBoaWRkZW46ICAgICAgIHt0ZW1wbGF0ZTogXCJpbnB1dFwiLCAgICBodG1sSW5wdXRUeXBlOiBcImhpZGRlblwifVxuICBpbnRlZ2VyOiAgICAgIHt0ZW1wbGF0ZTogXCJpbnB1dFwiLCAgICBodG1sSW5wdXRUeXBlOiBcIm51bWJlclwifVxuICBmbG9hdDogICAgICAgIHt0ZW1wbGF0ZTogXCJpbnB1dFwiLCAgICBodG1sSW5wdXRUeXBlOiBcIm51bWJlclwifVxuICBkZWNpbWFsOiAgICAgIHt0ZW1wbGF0ZTogXCJpbnB1dFwiLCAgICBodG1sSW5wdXRUeXBlOiBcIm51bWJlclwifVxuICByYW5nZTogICAgICAgIHt0ZW1wbGF0ZTogXCJpbnB1dFwiLCAgICBodG1sSW5wdXRUeXBlOiBcInJhbmdlXCJ9XG4gICMgZGF0ZXRpbWU6ICAgICB7dGVtcGxhdGU6IFwiZGF0ZXRpbWVcIn1cbiAgIyBkYXRlOiAgICAgICAgIHt0ZW1wbGF0ZTogXCJkYXRldGltZVwifVxuICAjIHRpbWU6ICAgICAgICAge3RlbXBsYXRlOiBcImRhdGV0aW1lXCJ9XG4gIHNlbGVjdDogICAgICAge3RlbXBsYXRlOiBcInNlbGVjdFwifVxuICBtdWx0aXNlbGVjdDogIHt0ZW1wbGF0ZTogXCJzZWxlY3RcIn1cbiAgdHlwZWFoZWFkOiAgICB7dGVtcGxhdGU6IFwidHlwZWFoZWFkXCJ9XG4gICMgcmFkaW9CdXR0b25zOiB7dGVtcGxhdGU6IFwicmFkaW9CdXR0b25zXCJ9XG4gICMgY2hlY2tCb3hlczogICB7dGVtcGxhdGU6IFwiY2hlY2tCb3hlc1wifVxuICAjIGNvdW50cnk6ICAgICAge3RlbXBsYXRlOiBcImNvdW50cnlcIn1cbiAgIyB0aW1lWm9uZTogICAgIHt0ZW1wbGF0ZTogXCJ0aW1lWm9uZVwifVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90eXBlX21hcHBpbmcuY29mZmVlXG4gKiovIiwiUmVhY3QgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwicmVhY3QvYWRkb25zXCJcbmZyaWdnaW5nUHJvcHNNaXhpbiAgICAgICAgICAgID0gcmVxdWlyZSBcIi4vZnJpZ2dpbmdfcHJvcHNfbWl4aW4uY29mZmVlXCJcbmZyaWdIZWxwZXJzICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uL2hlbHBlcnMuY29mZmVlXCJcbmZyaWdWYWxpZGF0aW9ucyAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uL3ZhbGlkYXRpb25zLmNvZmZlZVwiXG57aHVtYW5pemUsIGNsb25lLCBtZXJnZSwgbWFwLCBtYXBPYmosIGlzQ29uZmlnT2JqLCBzZXREZWZhdWx0c30gPSBmcmlnSGVscGVyc1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlucHV0TWl4aW4gPVxuXG4gIG1peGluczogW1xuICAgIGZyaWdnaW5nUHJvcHNNaXhpblxuICBdXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiAtPlxuICAgIEBnZXRGcmlnZ2luZ1ZhbHVlIHx8PSBAZGVmYXVsdEdldEZyaWdnaW5nVmFsdWVcblxuICBjb21wb25lbnREaWRNb3VudDogLT5cbiAgICB2YWwgPSBAZ2V0RnJpZ2dpbmdWYWx1ZSgpXG4gICAgdmFsaWQgPSBAdmFsaWRhdGUodmFsLCBmYWxzZSlcbiAgICBAZnJpZ1Byb3BzLm9uRnJpZ2dpbmdDaGlsZEluaXQ/KEBmcmlnUHJvcHMuZmllbGRLZXksIHZhbCwgdmFsaWQpXG5cbiAgZGVmYXVsdEdldEZyaWdnaW5nVmFsdWU6IC0+XG4gICAgcmVmID0gQHJlZnNbQGZyaWdQcm9wcy5pbnB1dEh0bWwucmVmXVxuICAgIHZhbCA9IGlmIHJlZj9cbiAgICAgIGVsID0gcmVmLmdldERPTU5vZGUoKVxuICAgICAgaWYgZWwudHlwZSA9PSAnY2hlY2tib3gnXG4gICAgICAgIGVsLmNoZWNrZWRcbiAgICAgIGVsc2UgaWYgZWwudHlwZSA9PSAnc2VsZWN0LW11bHRpcGxlJ1xuICAgICAgICAjIFRPRE86IERPIE5PVCBVU0UgSlFVRVJZIElOIEZSSUchXG4gICAgICAgICQoZWwpLnZhbCgpXG4gICAgICBlbHNlXG4gICAgICAgIGVsLnZhbHVlXG4gICAgZWxzZVxuICAgICAgQGZyaWdQcm9wcy5pbml0aWFsVmFsdWVcbiAgICAjIFRoZSB2YWx1ZSBpcyBjYXN0IHRvIGEgc3RyaW5nIHdoZW4gd2UgZ2V0IGl0IGZyb20gRE9NLnZhbHVlLiBMb29rdXBcbiAgICAjIHRoZSBvcmlnaW5hbCB2YWx1ZSBpbiB0aGUgb3B0aW9ucyBsaXN0IGFuZCByZXR1cm4gdGhhdCBpbnN0ZWFkLlxuICAgIGlmIEBmcmlnUHJvcHMub3B0aW9ucz9cbiAgICAgIGZvciBvcHRpb24gaW4gQGZyaWdQcm9wcy5vcHRpb25zXG4gICAgICAgIG9wdGlvbiA9IEBub3JtYWxpemVGcmlnZ2luZ09wdGlvbihvcHRpb24pXG4gICAgICAgIHJldHVybiBvcHRpb24udmFsdWUgaWYgb3B0aW9uLnZhbHVlLnRvU3RyaW5nKCkgPT0gdmFsXG4gICAgcmV0dXJuIHZhbFxuXG4gIG5vcm1hbGl6ZUZyaWdnaW5nT3B0aW9uOiAob3B0cykgLT5cbiAgICByZXR1cm4gdW5kZWZpbmVkIHVubGVzcyBvcHRzP1xuICAgICMgY29udmVydGluZyBvcHRzIGluIHRoZSBmb3JtYXQgb2YgW2tleV0gdG8ga2V5XG4gICAgb3B0cyA9IG9wdHNbMF0gaWYgdHlwZW9mKG9wdHMpID09IFwib2JqZWN0XCIgYW5kIG9wdHMubGVuZ3RoID09IDFcbiAgICAjIGlmIG9wdHMgaXMgaW4gdGhlIGZvcm1hdCBba2V5LCB2YWx1ZV1cbiAgICBpZiB0eXBlb2Yob3B0cykgPT0gXCJvYmplY3RcIiBhbmQgb3B0cy5sZW5ndGggPT0gMlxuICAgICAgdmFsdWU6IG9wdHNbMF1cbiAgICAgIGxhYmVsOiBvcHRzWzFdXG4gICAgIyBpZiBvcHRzIGlzIGluIHRoZSBmb3JtYXQga2V5XG4gICAgZWxzZVxuICAgICAgdmFsdWU6IG9wdHNcbiAgICAgIGxhYmVsOiBvcHRzXG5cbiAgdmFsaWRhdGU6ICh2YWx1ZSA9IEBnZXRGcmlnZ2luZ1ZhbHVlKCksIHJlbmRlckVycm9ycyA9IHRydWUpIC0+XG4gICAgaWYgQGZyaWdQcm9wcy50eXBlID09IFwic3VibWl0XCIgfHwgQGZyaWdQcm9wcy52YWxpZGF0ZT8oKSA9PSBmYWxzZVxuICAgICAgQHNldFN0YXRlIGVycm9yczogdW5kZWZpbmVkXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGVycm9ycyA9IFtdXG4gICAgIyBSdW5uaW5nIGVhY2ggdmFsaWRhdGlvblxuICAgIGZvciBrLCB2YWxpZGF0aW9uT3B0cyBvZiBAZnJpZ1Byb3BzLnZhbGlkYXRpb25zXG4gICAgICBjb250aW51ZSBpZiB2YWxpZGF0aW9uT3B0cyA9PSBmYWxzZSBvciAhdmFsaWRhdGlvbk9wdHM/XG4gICAgICBvcHRzID1cbiAgICAgICAgZGF0YTogICAgICAgQGZyaWdQcm9wcy5kYXRhXG4gICAgICAgIGZpZWxka2V5OiAgIEBmcmlnUHJvcHMuZmllbGRLZXlcbiAgICAgICAgdmFsdWU6ICAgICAgdmFsdWVcbiAgICAgICAgb3B0czogICAgICAgdmFsaWRhdGlvbk9wdHNcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQgZnJpZ1ZhbGlkYXRpb25zW2tdKG9wdHMpIHx8IFtdXG4gICAgIyBJZiB0aGVyZSBhcmUgbm8gZXJyb3JzIHRoZW4gZXJyb3JzIHNob3VsZCBiZSBmYWxzaWVcbiAgICBlcnJvcnMgPSB1bmRlZmluZWQgaWYgZXJyb3JzLmxlbmd0aCA9PSAwXG4gICAgIyBBZGRpbmcgdGhlIGVycm9ycyB0byB0aGUgc3RhdGVcbiAgICBAc2V0U3RhdGUgZXJyb3JzOiBlcnJvcnMgaWYgcmVuZGVyRXJyb3JzXG4gICAgIyBSZXR1cm4gdHJ1ZSBpZiB0aGVyZSBhcmUgbm8gZXJyb3JzXG4gICAgcmV0dXJuICFlcnJvcnM/XG5cbiAgX2ZyaWdPbkNoYW5nZTogLT5cbiAgICByZXR1cm4gaWYgQGZyaWdQcm9wcy50eXBlID09IFwic3VibWl0XCJcbiAgICB2YWx1ZSA9IEBnZXRGcmlnZ2luZ1ZhbHVlKClcbiAgICB2YWxpZCA9IEB2YWxpZGF0ZSB2YWx1ZVxuICAgICMgQ2FsbCB0aGUgZm9ybS1sZXZlbCB1c2VyIHNwZWNpZmllZCBvbkNoYW5nZSBmdW5jdGlvblxuICAgIEBmcmlnUHJvcHMub25GcmlnZ2luZ0NoaWxkQ2hhbmdlPyhAZnJpZ1Byb3BzLmZpZWxkS2V5LCB2YWx1ZSwgdmFsaWQpXG4gICAgIyBDYWxsIHRoZSB1c2VyIHNwZWNpZmllZCBvbkNoYW5nZSBmdW5jdGlvblxuICAgIEBmcmlnUHJvcHMub25DaGFuZ2U/KHZhbHVlLCB2YWxpZClcblxuICBfZnJpZ09uQmx1cjogLT5cbiAgICBAdmFsaWRhdGUoKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9taXhpbnMvaW5wdXRfbWl4aW4uY29mZmVlXG4gKiovIiwiUmVhY3QgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwicmVhY3QvYWRkb25zXCJcbmZyaWdnaW5nUHJvcHNNaXhpbiAgICAgICAgICAgID0gcmVxdWlyZSBcIi4vZnJpZ2dpbmdfcHJvcHNfbWl4aW4uY29mZmVlXCJcbmRzbE1peGluICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4vZHNsX21peGluLmNvZmZlZVwiXG5mcmlnSGVscGVycyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi9oZWxwZXJzLmNvZmZlZVwiXG57bWVyZ2UsIG1hcCwgY2FwaXRhbGl6ZSwgZ2V0VGVtcGxhdGUsIGd1ZXNzVHlwZSwgc2V0RGVmYXVsdHN9ID0gZnJpZ0hlbHBlcnNcblxubW9kdWxlLmV4cG9ydHMgPSBmb3JtTWl4aW4gPVxuXG4gIG1peGluczogW1xuICAgIGZyaWdnaW5nUHJvcHNNaXhpblxuICAgIGRzbE1peGluXG4gIF1cblxuICBjb21wb25lbnRXaWxsTW91bnQ6IC0+XG4gICAgQF9mcmlnQ2hhbmdlcyA9IHt9XG4gICAgQF9mcmlnRm9ybURhdGEgPSB7fVxuICAgIEBfZnJpZ1ZhbGlkRm9ybURhdGEgPSB7fVxuXG4gIGZyaWdnaW5nQ2hpbGRyZW46IC0+XG4gICAgQHByb3BzLmNiIEBmcmlnRFNMKClcblxuICB2YWxpZGF0ZTogLT5cbiAgICB2YWxpZCA9IHRydWVcbiAgICBmb3Iga2V5LCBpbnB1dCBvZiBAcmVmc1xuICAgICAgdmFsaWQgJj0gaW5wdXQudmFsaWRhdGUoKSBpZiBrZXkubWF0Y2goL0lucHV0JC8pPyBhbmQgaW5wdXQudmFsaWRhdGU/XG4gICAgcmV0dXJuIHZhbGlkXG5cbiAgZ2V0RGF0YTogLT5cbiAgICBAX2ZyaWdGb3JtRGF0YVxuXG4gIGdldFZhbGlkRGF0YTogLT5cbiAgICBAX2ZyaWdWYWxpZEZvcm1EYXRhXG5cbiAgaW5pdGlhbFZhbHVlczogLT5cbiAgICAjIElmIHRoZSBkYXRhIGlzIGEgUmVhY3RMaW5rIGV4dHJhY3QgaXRzIHZhbHVlXG4gICAgaWYgQGZyaWdQcm9wcy5kYXRhLnJlcXVlc3RDaGFuZ2U/XG4gICAgICBAZnJpZ1Byb3BzLmRhdGEudmFsdWVcbiAgICBlbHNlXG4gICAgICBAZnJpZ1Byb3BzLmRhdGFcblxuICBfb25GcmlnZ2luZ0NoaWxkSW5pdDogKGssIHYsIHZhbGlkKSAtPlxuICAgIEBfZnJpZ0Zvcm1EYXRhW2tdID0gdlxuICAgIEBfZnJpZ1ZhbGlkRm9ybURhdGFba10gPSB2XG5cbiAgX29uRnJpZ2dpbmdDaGlsZENoYW5nZTogKGssIHYsIHZhbGlkKSAtPlxuICAgIEBfZnJpZ0Zvcm1EYXRhW2tdID0gdlxuICAgIGlmIHZhbGlkXG4gICAgICBAX2ZyaWdWYWxpZEZvcm1EYXRhW2tdID0gdlxuICAgIGVsc2VcbiAgICAgIGRlbGV0ZSBAX2ZyaWdWYWxpZEZvcm1EYXRhW2tdXG4gICAgIyBjbG9uZSB0aGUgZm9ybSBkYXRhIG9iamVjdCB0byBhdm9pZCB0aGUgc2l0dWF0aW9uIHdoZXJlIHN1YnNlcXVlbnQgZm9ybVxuICAgICMgdXBkYXRlcyB1bmV4cGVjdGVkbHkgbXV0YXRlIHRoZSBkYXRhIG9iamVjdFxuICAgIEBmcmlnUHJvcHMub25DaGFuZ2U/KEBfZnJpZ0Zvcm1EYXRhKVxuICAgIGlmIHZhbGlkXG4gICAgICBAZnJpZ1Byb3BzLm9uVmFsaWRDaGFuZ2U/KEBfZnJpZ0Zvcm1EYXRhKVxuICAgICMgVXBkYXRlIHRoZSBSZWFjdExpbmsgd2l0aCB0aGUgbWVyZ2VkIGNvbWJpbmF0aW9uIG9mIGZvcm0gZGF0YSBhbmQgdGhlXG4gICAgIyBpbml0aWFsIHZhbHVlcyBwYXNzZWQgaW4gdG8gdGhlIGZvcm0gKGFsbG93aW5nIG5vbi1mb3JtIGRhdGEgdG8gYmVcbiAgICAjIHBlcnNpc3RlZClcbiAgICByZWFjdExpbmtEYXRhID0gbWVyZ2Uge30sIEBpbml0aWFsVmFsdWVzKCksIEBfZnJpZ0Zvcm1EYXRhXG4gICAgQGZyaWdQcm9wcy5kYXRhLnJlcXVlc3RDaGFuZ2U/KHJlYWN0TGlua0RhdGEpXG5cbiAgX2ZyaWdPblN1Ym1pdDogKGUpIC0+XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuIHVubGVzcyBAdmFsaWRhdGUoKVxuICAgIEBmcmlnUHJvcHMub25TdWJtaXQ/KGUsIEBfZnJpZ0Zvcm1EYXRhKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9taXhpbnMvZm9ybV9taXhpbi5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRpb24gPVxuICByZXF1aXJlZDogKHtrZXksIHZhbHVlLCBvcHRzLCBkYXRhfSkgLT5cbiAgICByZXR1cm4gdW5kZWZpbmVkIGlmIHZhbHVlPyBhbmQgdmFsdWUgIT0gXCJcIlxuICAgIFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZC5cIlxuXG4gIG1pbjogKHtrZXksIHZhbHVlLCBvcHRzLCBkYXRhfSkgLT5cbiAgICByZXR1cm4gdW5kZWZpbmVkIGlmIHZhbHVlID49IG9wdHMgb3IgIXZhbHVlPyBvciB2YWx1ZSA9PSBcIlwiXG4gICAgXCJWYWx1ZSBjYW5ub3QgYmUgbGVzcyB0aGFuICN7b3B0c31cIlxuXG4gIG1heDogKHtrZXksIHZhbHVlLCBvcHRzLCBkYXRhfSkgLT5cbiAgICByZXR1cm4gdW5kZWZpbmVkIGlmIHZhbHVlIDw9IG9wdHMgb3IgIXZhbHVlPyBvciB2YWx1ZSA9PSBcIlwiXG4gICAgXCJWYWx1ZSBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuICN7b3B0c31cIlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy92YWxpZGF0aW9ucy5jb2ZmZWVcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZnJpZ0hlbHBlcnMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vaGVscGVycy5jb2ZmZWVcIlxue2h1bWFuaXplLCBjbG9uZSwgbWVyZ2UsIG1hcH0gPSBmcmlnSGVscGVyc1xue3NwYW4sIGl9ICAgICAgICAgICAgICAgICAgICAgPSBSZWFjdC5ET01cbnJlcXVpcmUgXCJmcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAuc3R5bFwiXG5cbm1vZHVsZS5leHBvcnRzID0gZnJpZ2dpbmdCb290c3RyYXAgPVxuICAjICMgT3B0aW9uYWw6IGEgdGhlbWUtc3BlY2lmaWMgbGlzdCBvZiBkZWZhdWx0cyB0aGF0IG92ZXJyaWRlIHRoZSBnbG9iYWxcbiAgIyAjIEZyaWcuZGVmYXVsdHNcbiAgZGVmYXVsdHM6XG4gICAgbGF5b3V0OiAgICAgICAgICBcInZlcnRpY2FsXCJcbiAgICAjIFNpemVzXG4gICAgeHM6ICAgICAgICAgICAgICBcIjEyXCJcbiAgICBzbTogICAgICAgICAgICAgIC0+IEBmcmlnUHJvcHMueHMgfHwgXCIxMlwiXG4gICAgbWQ6ICAgICAgICAgICAgICAtPiBAZnJpZ1Byb3BzLnNtIHx8IFwiMTJcIlxuICAgIGxnOiAgICAgICAgICAgICAgLT4gQGZyaWdQcm9wcy5tZCB8fCBcIjEyXCJcbiAgICAjIE9mZnNldHNcbiAgICB4c09mZnNldDogICAgICAgIHVuZGVmaW5lZFxuICAgIHNtT2Zmc2V0OiAgICAgICAgLT4gQGZyaWdQcm9wcy54c09mZnNldFxuICAgIG1kT2Zmc2V0OiAgICAgICAgLT4gQGZyaWdQcm9wcy5zbU9mZnNldFxuICAgIGxnT2Zmc2V0OiAgICAgICAgLT4gQGZyaWdQcm9wcy5tZE9mZnNldFxuXG4gIGVycm9yTGlzdDogKGVycm9ycykgLT5cbiAgICBtYXAgZXJyb3JzLCBmcmlnZ2luZ0Jvb3RzdHJhcC5lcnJvciBpZiBlcnJvcnM/XG5cbiAgZXJyb3I6IChtc2cpIC0+XG4gICAgc3BhbiBjbGFzc05hbWU6IFwiaGVscC1ibG9ja1wiLFxuICAgICAgaSBjbGFzc05hbWU6IFwiZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlXCIsIFwiICN7bXNnfVwiXG5cbiAgc2l6ZUNsYXNzTmFtZXM6IChwcm9wcykgLT5cbiAgICBjbGFzc2VzID0ge31cbiAgICBzaXplcyA9IFtcInhzXCIsIFwic21cIiwgXCJtZFwiLCBcImxnXCJdXG4gICAgIyBBZGRpbmcgY29sdW1uIGNsYXNzZXNcbiAgICBmb3IgayBpbiBzaXplc1xuICAgICAgY2xhc3Nlc1tcImNvbC0je2t9LSN7cHJvcHNba119XCJdID0gdHJ1ZSBpZiBwcm9wc1trXT9cbiAgICAjIEFkZGluZyBvZmZzZXQgY2xhc3Nlc1xuICAgIGZvciBzaXplIGluIHNpemVzXG4gICAgICBrID0gXCIje3NpemV9T2Zmc2V0XCJcbiAgICAgIGNvbnRpbnVlIHVubGVzcyBwcm9wc1trXT9cbiAgICAgIGNsYXNzZXNbXCJjb2wtI3tzaXplfS1vZmZzZXQtI3twcm9wc1trXX1cIl0gPSB0cnVlXG4gICAgcmV0dXJuIGNsYXNzZXNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC5jb2ZmZWVcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuRm9ybUJ1aWxkZXIgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vZm9ybV9idWlsZGVyLmNvZmZlZVwiXG5cbm1vZHVsZS5leHBvcnRzID0gZnJpZ01peGluID1cbiAgZnJpZzogKHByb3BzLCBjaGlsZHJlbikgLT5cbiAgICBuZXcgRm9ybUJ1aWxkZXIoQCwgYXJndW1lbnRzLi4uKS5yZW5kZXIoKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9taXhpbnMvZnJpZ19taXhpbi5jb2ZmZWVcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZnJpZ2dpbmdCb290c3RyYXAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vZnJpZ2dpbmdfYm9vdHN0cmFwLmNvZmZlZVwiXG5JbnB1dE1peGluICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9taXhpbnMvaW5wdXRfbWl4aW4uY29mZmVlXCJcbntlcnJvckxpc3QsIHNpemVDbGFzc05hbWVzfSAgID0gZnJpZ2dpbmdCb290c3RyYXBcbntkaXYsIGxhYmVsLCBpbnB1dH0gICAgICAgICAgID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5mcmlnZ2luZ0Jvb3RzdHJhcC5DaGVja2JveCA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkgUmVhY3QuY3JlYXRlQ2xhc3NcblxuICBkaXNwbGF5TmFtZTogJ0ZyaWcuZnJpZ2dpbmdCb290c3RyYXAuQ2hlY2tib3gnXG5cbiAgbWl4aW5zOiBbSW5wdXRNaXhpbl1cblxuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgZXJyb3JzOiB1bmRlZmluZWRcbiAgICBlZGl0ZWQ6IGZhbHNlXG5cbiAgZ2V0RnJpZ2dpbmdQcm9wczogIC0+XG4gICAgaW5wdXRIdG1sOlxuICAgICAgdHlwZTogXCJjaGVja2JveFwiXG4gICAgICB2YWx1ZTogQGZyaWdQcm9wcy5rZXlcbiAgICAgIGNoZWNrZWQ6IC0+IEBmcmlnUHJvcHMuaW5pdGlhbFZhbHVlXG5cbiAgX2N4OiAtPlxuICAgIGN4XG4gICAgICBcImNoZWNrYm94XCI6IHRydWVcbiAgICAgIFwiaGFzLWVycm9yXCI6IEBzdGF0ZS5lcnJvcnM/XG4gICAgICBcImhhcy1zdWNjZXNzXCI6IEBzdGF0ZS5lZGl0ZWQgJiYgIUBzdGF0ZS5lcnJvcnM/XG5cbiAgcmVuZGVyOiAtPlxuICAgIGRpdiBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiLFxuICAgICAgZGl2IGNsYXNzTmFtZTogY3goc2l6ZUNsYXNzTmFtZXMgQGZyaWdQcm9wcyksXG4gICAgICAgIGRpdiBjbGFzc05hbWU6IEBfY3goKSxcbiAgICAgICAgICBsYWJlbCBAZnJpZ1Byb3BzLmxhYmVsSHRtbCxcbiAgICAgICAgICAgIGlucHV0IEBmcmlnUHJvcHMuaW5wdXRIdG1sXG4gICAgICAgICAgICBcIiAje0BmcmlnUHJvcHMubGFiZWx9XCIgaWYgQGZyaWdQcm9wcy5sYWJlbFxuICAgICAgICAgIGVycm9yTGlzdCBAc3RhdGUuZXJyb3JzIGlmIEBzdGF0ZT8uZXJyb3JzP1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwL2NoZWNrYm94LmNvZmZlZVxuICoqLyIsIlJlYWN0ICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcInJlYWN0L2FkZG9uc1wiXG5mcmlnZ2luZ0Jvb3RzdHJhcCAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi9mcmlnZ2luZ19ib290c3RyYXAuY29mZmVlXCJcbntlcnJvckxpc3R9ICAgICAgICAgICAgICAgICAgID0gZnJpZ2dpbmdCb290c3RyYXBcbntkaXYsIHNwYW4sIGl9ICAgICAgICAgICAgICAgID0gUmVhY3QuRE9NXG5cbmZyaWdnaW5nQm9vdHN0cmFwLkVycm9ycyA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkgUmVhY3QuY3JlYXRlQ2xhc3NcblxuICBkaXNwbGF5TmFtZTogJ0ZyaWcuZnJpZ2dpbmdCb290c3RyYXAuRXJyb3JzJ1xuXG4gIHJlbmRlcjogLT5cbiAgICBkaXYge2NsYXNzTmFtZTogXCJyb3dcIn0sXG4gICAgICBfLm1hcCBAcHJvcHMuZXJyb3JzLCAoZXJyb3IpIC0+XG4gICAgICAgIGRpdiB7Y2xhc3NOYW1lOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy0xMlwifSxcbiAgICAgICAgICBkaXYgY2xhc3NOYW1lOiBcImZyaWdnaW5nLWJvb3RzdHJhcC1lcnJvclwiLCByZWY6IFwiZXJyb3ItI3tlcnJvcn1cIixcbiAgICAgICAgICAgIGRpdiBjbGFzc05hbWU6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgIGkgY2xhc3NOYW1lOlwiZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlXCJcbiAgICAgICAgICAgICAgc3BhbiBjbGFzc05hbWU6IFwic3Itb25seVwiLCBcIkVycm9yOlwiXG4gICAgICAgICAgICAgIFwiICN7ZXJyb3J9XCJcbiAgICAgICAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJjbGVhcmZpeFwiXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAvZXJyb3JzLmNvZmZlZVxuICoqLyIsIlJlYWN0ICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcInJlYWN0L2FkZG9uc1wiXG5mcmlnZ2luZ0Jvb3RzdHJhcCAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi9mcmlnZ2luZ19ib290c3RyYXAuY29mZmVlXCJcbklucHV0TWl4aW4gICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uLy4uL21peGlucy9pbnB1dF9taXhpbi5jb2ZmZWVcIlxue2h1bWFuaXplLCBjbG9uZSwgbWVyZ2UsIG1hcH0gPSByZXF1aXJlIFwiLi4vLi4vaGVscGVycy5jb2ZmZWVcIlxue2Vycm9yTGlzdCwgc2l6ZUNsYXNzTmFtZXN9ICAgPSBmcmlnZ2luZ0Jvb3RzdHJhcFxue2RpdiwgbGFiZWwsIGlucHV0LCBpbWd9ICAgICAgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbmZyaWdnaW5nQm9vdHN0cmFwLkZpbGUgPSBSZWFjdC5jcmVhdGVGYWN0b3J5IFJlYWN0LmNyZWF0ZUNsYXNzXG5cbiAgZGlzcGxheU5hbWU6ICdGcmlnLmZyaWdnaW5nQm9vdHN0cmFwLkZpbGVJbnB1dCdcblxuICBtaXhpbnM6IFtJbnB1dE1peGluXVxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICBlcnJvcnM6IHVuZGVmaW5lZFxuICAgIGVkaXRlZDogZmFsc2VcblxuICBnZXRGcmlnZ2luZ1Byb3BzOiAtPlxuICAgICMgQm9vdHN0cmFwIGlucHV0IGFkZG9uIHRleHRzXG4gICAgcHJlZml4OiAgICAgICAgICB1bmRlZmluZWRcbiAgICBzdWZmaXg6ICAgICAgICAgIHVuZGVmaW5lZFxuICAgIGlucHV0SHRtbDpcbiAgICAgIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIlxuICAgICAgcGxhY2Vob2xkZXI6IC0+IEBmcmlnUHJvcHMucGxhY2Vob2xkZXJcbiAgICAgIHR5cGU6IC0+ICdmaWxlJ1xuICAgICAgYWNjZXB0OiAtPiAnaW1hZ2UvcG5nLGltYWdlL2dpZixpbWFnZS9qcGVnJ1xuICAgICAgZGVmYXVsdFZhbHVlOiAtPiBAZnJpZ1Byb3BzLmluaXRpYWxWYWx1ZVxuXG4gIGNvbXBvbmVudERpZE1vdW50OiAtPlxuICAgIEBzZXRTdGF0ZSBpbWFnZTogQGZyaWdQcm9wcy5pbml0aWFsVmFsdWVcblxuICBfY3g6IC0+XG4gICAgY3hcbiAgICAgIFwiaGFzLWVycm9yXCI6IEBzdGF0ZS5lcnJvcnM/XG4gICAgICBcImhhcy1zdWNjZXNzXCI6IEBzdGF0ZS5lZGl0ZWQgJiYgIUBzdGF0ZS5lcnJvcnM/XG5cbiAgX2lucHV0OiAtPlxuICAgIGlucHV0IEBmcmlnUHJvcHMuaW5wdXRIdG1sXG5cbiAgX2xvYWRGaWxlOiAtPlxuICAgIEBmUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIEBmUmVhZGVyLm9ubG9hZGVuZCA9IEBfb25GaWxlTG9hZFxuICAgIEBmUmVhZGVyLnJlYWRBc0RhdGFVUkwgQHJlZnNbQGZyaWdQcm9wcy5pbnB1dEh0bWwucmVmXS5nZXRET01Ob2RlKCkuZmlsZXNbMF1cblxuICBfb25GaWxlTG9hZDogLT5cbiAgICB2ID0gXy5jbG9uZSBAZlJlYWRlci5yZXN1bHRcbiAgICBAc2V0U3RhdGUgaW1hZ2U6IHZcbiAgICBAZ2V0RnJpZ2dpbmdWYWx1ZSA9ID0+IHZcbiAgICBAZnJpZ1Byb3BzLm9uRnJpZ2dpbmdDaGlsZENoYW5nZT8gJ2ltYWdlJywgdiwgdHJ1ZVxuXG4gIHJlbmRlcjogLT5cbiAgICBAZnJpZ1Byb3BzLmlucHV0SHRtbC5vbkNoYW5nZSA9IEBfbG9hZEZpbGVcbiAgICBkaXYgY2xhc3NOYW1lOiBjeChzaXplQ2xhc3NOYW1lcyBAZnJpZ1Byb3BzKSxcbiAgICAgIGRpdiBjbGFzc05hbWU6IEBfY3goKSxcbiAgICAgICAgbGFiZWwgQGZyaWdQcm9wcy5sYWJlbEh0bWwsIEBmcmlnUHJvcHMubGFiZWwgaWYgQGZyaWdQcm9wcy5sYWJlbFxuICAgICAgICBkaXYgY2xhc3NOYW1lOiBcImNvbnRyb2xzXCIsXG4gICAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJpbWFnZS11cGxvYWRcIixcbiAgICAgICAgICAgIGlmIEBzdGF0ZS5pbWFnZVxuICAgICAgICAgICAgICBpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwidGh1bWJuYWlsXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTI1Jywgd2lkdGg6ICcxMjUnLFxuICAgICAgICAgICAgICAgIHNyYzogQHN0YXRlLmltYWdlXG4gICAgICAgICAgICBpZiBAZnJpZ1Byb3BzLnByZWZpeD8gfHwgQGZyaWdQcm9wcy5zdWZmaXg/XG4gICAgICAgICAgICAgIGRpdiBjbGFzc05hbWU6IFwiaW5wdXQtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICBpZiBAZnJpZ1Byb3BzLnByZWZpeFxuICAgICAgICAgICAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJpbnB1dC1ncm91cC1hZGRvblwiLCBAZnJpZ1Byb3BzLnByZWZpeFxuICAgICAgICAgICAgICAgIEBfaW5wdXQoKVxuICAgICAgICAgICAgICAgIGlmIEBmcmlnUHJvcHMuc3VmZml4XG4gICAgICAgICAgICAgICAgICBkaXYgY2xhc3NOYW1lOiBcImlucHV0LWdyb3VwLWFkZG9uXCIsIEBmcmlnUHJvcHMuc3VmZml4XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIEBfaW5wdXQoKVxuICAgICAgICBlcnJvckxpc3QgQHN0YXRlLmVycm9ycyBpZiBAc3RhdGU/LmVycm9ycz9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9maWxlLmNvZmZlZVxuICoqLyIsIlJlYWN0ICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcInJlYWN0L2FkZG9uc1wiXG5mcmlnZ2luZ0Jvb3RzdHJhcCAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi9mcmlnZ2luZ19ib290c3RyYXAuY29mZmVlXCJcbkZvcm1NaXhpbiAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uLy4uL21peGlucy9mb3JtX21peGluLmNvZmZlZVwiXG57ZXJyb3JMaXN0fSAgICAgICAgICAgICAgICAgICA9IGZyaWdnaW5nQm9vdHN0cmFwXG57ZGl2LCBmb3JtLCBsYWJlbCwgaW5wdXR9ICAgICA9IFJlYWN0LkRPTVxuXG5mcmlnZ2luZ0Jvb3RzdHJhcC5Gb3JtID0gUmVhY3QuY3JlYXRlRmFjdG9yeSBSZWFjdC5jcmVhdGVDbGFzc1xuXG4gIGRpc3BsYXlOYW1lOiAnRnJpZy5mcmlnZ2luZ0Jvb3RzdHJhcC5Gb3JtJ1xuXG4gIG1peGluczogW0Zvcm1NaXhpbl1cblxuICBnZXRGcmlnZ2luZ1Byb3BzOiAtPlxuICAgIGZvcm1IdG1sOlxuICAgICAgY2xhc3NOYW1lOiAtPiBcImZvcm0tI3tAZnJpZ1Byb3BzLmxheW91dH1cIiBpZiBAZnJpZ1Byb3BzLmxheW91dFxuXG4gIHJlbmRlcjogLT5cbiAgICBmb3JtIEBmcmlnUHJvcHMuZm9ybUh0bWwsIEBmcmlnZ2luZ0NoaWxkcmVuKClcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9mb3JtLmNvZmZlZVxuICoqLyIsIlJlYWN0ICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcInJlYWN0L2FkZG9uc1wiXG5mcmlnZ2luZ0Jvb3RzdHJhcCAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi9mcmlnZ2luZ19ib290c3RyYXAuY29mZmVlXCJcbmZyaWdIZWxwZXJzICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uLy4uL2hlbHBlcnMuY29mZmVlXCJcbklucHV0TWl4aW4gICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uLy4uL21peGlucy9pbnB1dF9taXhpbi5jb2ZmZWVcIlxue2Vycm9yTGlzdCwgc2l6ZUNsYXNzTmFtZXN9ICAgPSBmcmlnZ2luZ0Jvb3RzdHJhcFxue2h1bWFuaXplLCBjbG9uZSwgbWVyZ2UsIG1hcH0gPSBmcmlnSGVscGVyc1xue2RpdiwgbGFiZWwsIGlucHV0fSAgICAgICAgICAgPSBSZWFjdC5ET01cbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbmZyaWdnaW5nQm9vdHN0cmFwLklucHV0ID0gUmVhY3QuY3JlYXRlRmFjdG9yeSBSZWFjdC5jcmVhdGVDbGFzc1xuXG4gIGRpc3BsYXlOYW1lOiAnRnJpZy5mcmlnZ2luZ0Jvb3RzdHJhcC5JbnB1dCdcblxuICBtaXhpbnM6IFtJbnB1dE1peGluXVxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICBlcnJvcnM6IHVuZGVmaW5lZFxuICAgIGVkaXRlZDogZmFsc2VcblxuICBnZXRGcmlnZ2luZ1Byb3BzOiAtPlxuICAgICMgQm9vdHN0cmFwIGlucHV0IGFkZG9uIHRleHRzXG4gICAgcHJlZml4OiAgICAgICAgICB1bmRlZmluZWRcbiAgICBzdWZmaXg6ICAgICAgICAgIHVuZGVmaW5lZFxuXG4gICAgaW5wdXRIdG1sOlxuICAgICAgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiXG4gICAgICBwbGFjZWhvbGRlcjogLT4gQGZyaWdQcm9wcy5wbGFjZWhvbGRlclxuICAgICAgdHlwZTogLT4gQGZyaWdQcm9wcy5odG1sSW5wdXRUeXBlXG4gICAgICBkZWZhdWx0VmFsdWU6IC0+IEBmcmlnUHJvcHMuaW5pdGlhbFZhbHVlXG5cbiAgX2N4OiAtPlxuICAgIGN4XG4gICAgICBcImZvcm0tZ3JvdXBcIjogdHJ1ZVxuICAgICAgXCJoYXMtZXJyb3JcIjogQHN0YXRlLmVycm9ycz9cbiAgICAgIFwiaGFzLXN1Y2Nlc3NcIjogQHN0YXRlLmVkaXRlZCAmJiAhQHN0YXRlLmVycm9ycz9cblxuICBfaW5wdXQ6IC0+XG4gICAgaW5wdXQgQGZyaWdQcm9wcy5pbnB1dEh0bWxcblxuICByZW5kZXI6IC0+XG4gICAgZGl2IGNsYXNzTmFtZTogY3goc2l6ZUNsYXNzTmFtZXMgQGZyaWdQcm9wcyksXG4gICAgICBkaXYgY2xhc3NOYW1lOiBAX2N4KCksXG4gICAgICAgIGxhYmVsIEBmcmlnUHJvcHMubGFiZWxIdG1sLCBAZnJpZ1Byb3BzLmxhYmVsIGlmIEBmcmlnUHJvcHMubGFiZWxcbiAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJjb250cm9sc1wiLFxuICAgICAgICAgIGlmIEBmcmlnUHJvcHMucHJlZml4PyB8fCBAZnJpZ1Byb3BzLnN1ZmZpeD9cbiAgICAgICAgICAgIGRpdiBjbGFzc05hbWU6IFwiaW5wdXQtZ3JvdXBcIixcbiAgICAgICAgICAgICAgaWYgQGZyaWdQcm9wcy5wcmVmaXhcbiAgICAgICAgICAgICAgICBkaXYgY2xhc3NOYW1lOiBcImlucHV0LWdyb3VwLWFkZG9uXCIsIEBmcmlnUHJvcHMucHJlZml4XG4gICAgICAgICAgICAgIEBfaW5wdXQoKVxuICAgICAgICAgICAgICBpZiBAZnJpZ1Byb3BzLnN1ZmZpeFxuICAgICAgICAgICAgICAgIGRpdiBjbGFzc05hbWU6IFwiaW5wdXQtZ3JvdXAtYWRkb25cIiwgQGZyaWdQcm9wcy5zdWZmaXhcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBAX2lucHV0KClcbiAgICAgICAgZXJyb3JMaXN0IEBzdGF0ZS5lcnJvcnMgaWYgQHN0YXRlPy5lcnJvcnM/XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAvaW5wdXQuY29mZmVlXG4gKiovIiwiUmVhY3QgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwicmVhY3QvYWRkb25zXCJcbmZyaWdnaW5nQm9vdHN0cmFwICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uL2ZyaWdnaW5nX2Jvb3RzdHJhcC5jb2ZmZWVcIlxuZnJpZ0hlbHBlcnMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vLi4vaGVscGVycy5jb2ZmZWVcIlxuSW5wdXRNaXhpbiAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vLi4vbWl4aW5zL2lucHV0X21peGluLmNvZmZlZVwiXG57ZXJyb3JMaXN0LCBzaXplQ2xhc3NOYW1lc30gICA9IGZyaWdnaW5nQm9vdHN0cmFwXG57aHVtYW5pemUsIGNsb25lLCBtZXJnZSwgbWFwfSA9IGZyaWdIZWxwZXJzXG57ZGl2LCBsYWJlbCwgc2VsZWN0LCBvcHRpb259ICA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuZnJpZ2dpbmdCb290c3RyYXAuU2VsZWN0ID0gUmVhY3QuY3JlYXRlRmFjdG9yeSBSZWFjdC5jcmVhdGVDbGFzc1xuXG4gIGRpc3BsYXlOYW1lOiAnRnJpZy5mcmlnZ2luZ0Jvb3RzdHJhcC5TZWxlY3QnXG5cbiAgbWl4aW5zOiBbSW5wdXRNaXhpbl1cblxuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgZXJyb3JzOiB1bmRlZmluZWRcbiAgICBlZGl0ZWQ6IGZhbHNlXG5cbiAgZ2V0RnJpZ2dpbmdQcm9wczogLT5cbiAgICBpbnB1dEh0bWw6XG4gICAgICBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCJcbiAgICAgIGRlZmF1bHRWYWx1ZTogLT4gQGZyaWdQcm9wcy5pbml0aWFsVmFsdWVcbiAgICBsYWJlbEh0bWw6XG4gICAgICBjbGFzc05hbWU6IFwiXCJcblxuICBfY3g6IC0+XG4gICAgY3hcbiAgICAgIFwiZm9ybS1ncm91cFwiOiB0cnVlXG4gICAgICBcImhhcy1lcnJvclwiOiBAc3RhdGUuZXJyb3JzP1xuICAgICAgXCJoYXMtc3VjY2Vzc1wiOiBAc3RhdGUuZWRpdGVkICYmICFAc3RhdGUuZXJyb3JzP1xuXG4gIF9zZWxlY3RPcHRpb246IChvcHRzKSAtPlxuICAgIG9wdHMgPSBAbm9ybWFsaXplRnJpZ2dpbmdPcHRpb24gb3B0c1xuICAgIG9wdGlvbiB2YWx1ZTogb3B0cy52YWx1ZSwgb3B0cy5sYWJlbFxuXG4gIHJlbmRlcjogLT5cbiAgICBkaXYgY2xhc3NOYW1lOiBjeChzaXplQ2xhc3NOYW1lcyBAcHJvcHMpLFxuICAgICAgZGl2IGNsYXNzTmFtZTogQF9jeCgpLFxuICAgICAgICBsYWJlbCBAZnJpZ1Byb3BzLmxhYmVsSHRtbCwgQGZyaWdQcm9wcy5sYWJlbCBpZiBAZnJpZ1Byb3BzLmxhYmVsXG4gICAgICAgIGRpdiBjbGFzc05hbWU6IFwiY29udHJvbHNcIixcbiAgICAgICAgICBzZWxlY3QgQGZyaWdQcm9wcy5pbnB1dEh0bWwsXG4gICAgICAgICAgICBtYXAgQGZyaWdQcm9wcy5vcHRpb25zLCBAX3NlbGVjdE9wdGlvblxuICAgICAgICBlcnJvckxpc3QgQHN0YXRlLmVycm9ycyBpZiBAc3RhdGU/LmVycm9ycz9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9zZWxlY3QuY29mZmVlXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL2NoZWNrYm94LmNvZmZlZVwiOiA4LFxuXHRcIi4vZXJyb3JzLmNvZmZlZVwiOiA5LFxuXHRcIi4vZmlsZS5jb2ZmZWVcIjogMTAsXG5cdFwiLi9mb3JtLmNvZmZlZVwiOiAxMSxcblx0XCIuL2lucHV0LmNvZmZlZVwiOiAxMixcblx0XCIuL3NlbGVjdC5jb2ZmZWVcIjogMTMsXG5cdFwiLi9zdWJtaXQuY29mZmVlXCI6IDEsXG5cdFwiLi9zd2l0Y2guY29mZmVlXCI6IDE1LFxuXHRcIi4vdGV4dC5jb2ZmZWVcIjogMTYsXG5cdFwiLi90eXBlYWhlYWQuY29mZmVlXCI6IDE3XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDE0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAgXlxcLlxcLy4qXFwuY29mZmVlJFxuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZnJpZ2dpbmdCb290c3RyYXAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vZnJpZ2dpbmdfYm9vdHN0cmFwLmNvZmZlZVwiXG5mcmlnSGVscGVycyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9oZWxwZXJzLmNvZmZlZVwiXG5JbnB1dE1peGluICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9taXhpbnMvaW5wdXRfbWl4aW4uY29mZmVlXCJcbntlcnJvckxpc3QsIHNpemVDbGFzc05hbWVzfSAgID0gZnJpZ2dpbmdCb290c3RyYXBcbntodW1hbml6ZSwgY2xvbmUsIG1lcmdlLCBtYXB9ID0gZnJpZ0hlbHBlcnNcbntkaXYsIHNwYW4sIGlucHV0LCBsYWJlbH0gICAgID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG4jIEV4YW1wbGUgMSkgVXNpbmcgYSBzd2l0Y2ggZm9yIG9uZSBpbnB1dDpcbiNcbiMgICBkYXRhID0gYWxsSXNXZWxsOiB0cnVlXG4jXG4jICAgQGZyaWcgcmVmOiBcImV4MVwiLCBkYXRhOiBkYXRhIC0+XG4jICAgICBmLmlucHV0IFwiYWxsSXNXZWxsXCIsIHRlbXBsYXRlOiBcInN3aXRjaFwiXG5cbiMgRXhhbXBsZSAyKSBVc2luZyBzd2l0Y2hlcyBhcyB0aGUgZGVmYXVsdCBmb3IgYWxsIGJvb2xlYW4gaW5wdXRzIGluIGEgZm9ybTpcbiNcbiMgICBkYXRhID0gYWxsSXNXZWxsOiB0cnVlXG4jXG4jICAgQGZyaWcgcmVmOiBcImV4MlwiLCBkYXRhOiBkYXRhLCB0eXBlTWFwcGluZzoge2Jvb2xlYW46IFwic3dpdGNoXCJ9LCAtPlxuIyAgICAgZi5pbnB1dCBcImFsbGlzV2VsbFwiXG5cbiMgRXhhbXBsZSAzKSBVc2luZyBzd2l0Y2hlcyBhcyB0aGUgZGVmYXVsdCBmb3IgYWxsIGJvb2xlYW4gaW5wdXRzIGluIGFsbCBmb3JtczpcbiNcbiMgICBGcmlnLnR5cGVNYXBwaW5nLmJvb2xlYW4udGVtcGxhdGUgPSBcInN3aXRjaFwiXG4jXG4jICAgZGF0YSA9IGFsbElzV2VsbDogdHJ1ZVxuI1xuIyAgIEBmcmlnIHJlZjogXCJleDJcIiwgZGF0YTogZGF0YSwgLT5cbiMgICAgIGYuaW5wdXQgXCJhbGxpc1dlbGxcIlxuXG4jIFRoaXMgb3B0aW9uYWwgYWRkLW9uIGNvbXBvbmVudCBkZXBlbmRzIG9uIEJvb3RzdHJhcFN3aXRjaCBhbmQgalF1ZXJ5XG5mcmlnZ2luZ0Jvb3RzdHJhcC5Td2l0Y2ggPSBSZWFjdC5jcmVhdGVGYWN0b3J5IFJlYWN0LmNyZWF0ZUNsYXNzXG5cbiAgZGlzcGxheU5hbWU6ICdGcmlnLmZyaWdnaW5nQm9vdHN0cmFwLlN3aXRjaCdcblxuICBtaXhpbnM6IFtJbnB1dE1peGluXVxuXG4gIGdldEZyaWdnaW5nUHJvcHM6IC0+XG4gICAgaGFuZGxlV2lkdGg6ICAgICB1bmRlZmluZWRcbiAgICBpbnB1dEh0bWw6XG4gICAgICBjbGFzc05hbWU6ICAgICBcInN3aXRjaFwiXG4gICAgICB0eXBlOiAgICAgICAgICBcImNoZWNrYm94XCJcbiAgICBvZmZDb2xvcjogICAgICAgIHVuZGVmaW5lZFxuICAgIG9mZlRleHQ6ICAgICAgICAgdW5kZWZpbmVkXG4gICAgb2ZmVmFsdWU6ICAgICAgICBmYWxzZVxuICAgIG9uQ29sb3I6ICAgICAgICAgXCJzdWNjZXNzXCJcbiAgICBvblRleHQ6ICAgICAgICAgIHVuZGVmaW5lZFxuICAgIG9uVmFsdWU6ICAgICAgICAgdHJ1ZVxuXG4gIGNvbXBvbmVudERpZE1vdW50OiAtPlxuICAgICMgZ2V0IGluaXRpYWwgc3RhdGUgKGJvb2xlYW4pIGJ5IGNoZWNraW5nIHdoZXRoZXIgdGhlIGluaXRpYWxWYWx1ZVxuICAgICMgaXMgdGhlIHNhbWUgYXMgdGhlIG9uVmFsdWUvb2ZmVmFsdWUgKC0+IHRydWUvZmFsc2UpIG9mIHRoZSBzd2l0Y2hcbiAgICBAXyRlbCgpLmJvb3RzdHJhcFN3aXRjaFxuICAgICAgZGlzYWJsZWQ6IEBmcmlnUHJvcHMuZGlzYWJsZWRcbiAgICAgIGhhbmRsZVdpZHRoOiBAZnJpZ1Byb3BzLmhhbmRsZVdpZHRoXG4gICAgICBvZmZDb2xvcjogQGZyaWdQcm9wcy5vZmZDb2xvclxuICAgICAgb2ZmVGV4dDogQGZyaWdQcm9wcy5vZmZUZXh0XG4gICAgICBvbkNvbG9yOiBAZnJpZ1Byb3BzLm9uQ29sb3JcbiAgICAgIG9uVGV4dDogQGZyaWdQcm9wcy5vblRleHRcbiAgICAgIHNpemU6IFwic21hbGxcIlxuICAgICAgc3RhdGU6IEBfZ2V0Qm9vbGVhblZhbCgpXG4gICAgICBvblN3aXRjaENoYW5nZTogQF9vblN3aXRjaENoYW5nZVxuXG4gIF9nZXRCb29sZWFuVmFsOiAtPlxuICAgIEBfYm9vbGVhblZhbCA/PSBAZnJpZ1Byb3BzLm9uVmFsdWUgPT0gQGZyaWdQcm9wcy5pbml0aWFsVmFsdWVcblxuICBnZXRGcmlnZ2luZ1ZhbHVlOiAtPlxuICAgICMgYm9vbGVhbiB2YWx1ZSBpcyB1bmRlZmluZWQgb24gaW5pdGlhbCBwYWdlIGxvYWQsIHNvIHZhbHVlIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAgQGZyaWdQcm9wc1tpZiBAX2dldEJvb2xlYW5WYWwoKSB0aGVuICdvblZhbHVlJyBlbHNlICdvZmZWYWx1ZSddXG5cbiAgXyRlbDogLT5cbiAgICAkIEByZWZzW0BmcmlnUHJvcHMuaW5wdXRIdG1sLnJlZl0uZ2V0RE9NTm9kZSgpXG5cbiAgX29uU3dpdGNoQ2hhbmdlOiAoZSwgdmFsKSAtPlxuICAgIEBfYm9vbGVhblZhbCA9IHZhbFxuICAgIEBfJGVsKCkudmFsIEBnZXRGcmlnZ2luZ1ZhbHVlKClcbiAgICBAZnJpZ1Byb3BzLmlucHV0SHRtbC5vbkNoYW5nZSgpXG5cbiAgX2xhYmVsQ29udGFpbmVyQ3g6IC0+XG4gICAgY3hcbiAgICAgIFwicHVsbC1sZWZ0XCI6IEBmcmlnUHJvcHMubGF5b3V0ID09IFwiaG9yaXpvbnRhbFwiXG5cbiAgX2lucHV0Q29udGFpbmVyQ3g6IC0+XG4gICAgY3hcbiAgICAgIFwicHVsbC1yaWdodFwiOiBAZnJpZ1Byb3BzLmxheW91dCA9PSBcImhvcml6b250YWxcIlxuICAgICAgXCJjb250cm9sc1wiOiBAZnJpZ1Byb3BzLmxheW91dCA9PSBcInZlcnRpY2FsXCJcblxuICByZW5kZXI6IC0+XG4gICAgZGl2IGNsYXNzTmFtZTogY3goc2l6ZUNsYXNzTmFtZXMgQGZyaWdQcm9wcyksXG4gICAgICBkaXYgY2xhc3NOYW1lOiBAX2xhYmVsQ29udGFpbmVyQ3goKSxcbiAgICAgICAgbGFiZWwgQGZyaWdQcm9wcy5sYWJlbEh0bWwsIEBmcmlnUHJvcHMubGFiZWwgaWYgQGZyaWdQcm9wcy5sYWJlbFxuICAgICAgZGl2IGNsYXNzTmFtZTogQF9pbnB1dENvbnRhaW5lckN4KCksXG4gICAgICAgIGlucHV0IEBmcmlnUHJvcHMuaW5wdXRIdG1sXG4gICAgICAgIGVycm9yTGlzdCBAc3RhdGUuZXJyb3JzIGlmIEBzdGF0ZT8uZXJyb3JzP1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwL3N3aXRjaC5jb2ZmZWVcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZnJpZ2dpbmdCb290c3RyYXAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vZnJpZ2dpbmdfYm9vdHN0cmFwLmNvZmZlZVwiXG5mcmlnSGVscGVycyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9oZWxwZXJzLmNvZmZlZVwiXG5JbnB1dE1peGluICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9taXhpbnMvaW5wdXRfbWl4aW4uY29mZmVlXCJcbntlcnJvckxpc3QsIHNpemVDbGFzc05hbWVzfSAgID0gZnJpZ2dpbmdCb290c3RyYXBcbntodW1hbml6ZSwgY2xvbmUsIG1lcmdlLCBtYXB9ID0gZnJpZ0hlbHBlcnNcbntkaXYsIGxhYmVsLCB0ZXh0YXJlYX0gICAgICAgID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5mcmlnZ2luZ0Jvb3RzdHJhcC5UZXh0ID0gUmVhY3QuY3JlYXRlRmFjdG9yeSBSZWFjdC5jcmVhdGVDbGFzc1xuXG4gIGRpc3BsYXlOYW1lOiAnRnJpZy5mcmlnZ2luZ0Jvb3RzdHJhcC5UZXh0J1xuXG4gIG1peGluczogW0lucHV0TWl4aW5dXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIGVycm9yczogdW5kZWZpbmVkXG4gICAgZWRpdGVkOiBmYWxzZVxuXG4gIGdldEZyaWdnaW5nUHJvcHM6IC0+XG4gICAgaW5wdXRIdG1sOlxuICAgICAgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiXG4gICAgICBwbGFjZWhvbGRlcjogLT4gQGZyaWdQcm9wcy5wbGFjZWhvbGRlclxuICAgICAgcm93czogM1xuICAgICAgZGVmYXVsdFZhbHVlOiAtPiBAZnJpZ1Byb3BzLmluaXRpYWxWYWx1ZVxuICAgIGxhYmVsSHRtbDpcbiAgICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWxhYmVsXCJcblxuICBfY3g6IC0+XG4gICAgY3hcbiAgICAgIFwiZm9ybS1ncm91cFwiOiB0cnVlXG4gICAgICBcImhhcy1lcnJvclwiOiBAc3RhdGUuZXJyb3JzP1xuICAgICAgXCJoYXMtc3VjY2Vzc1wiOiBAc3RhdGUuZWRpdGVkICYmICFAc3RhdGUuZXJyb3JzP1xuXG4gIHJlbmRlcjogLT5cbiAgICBkaXYgY2xhc3NOYW1lOiBjeChzaXplQ2xhc3NOYW1lcyBAZnJpZ1Byb3BzKSxcbiAgICAgIGRpdiBjbGFzc05hbWU6IEBfY3goKSxcbiAgICAgICAgbGFiZWwgQGZyaWdQcm9wcy5sYWJlbEh0bWwsIEBmcmlnUHJvcHMubGFiZWwgaWYgQGZyaWdQcm9wcy5sYWJlbFxuICAgICAgICBkaXYgY2xhc3NOYW1lOiBcImNvbnRyb2xzXCIsXG4gICAgICAgICAgdGV4dGFyZWEgQGZyaWdQcm9wcy5pbnB1dEh0bWxcbiAgICAgICAgZXJyb3JMaXN0IEBzdGF0ZS5lcnJvcnMgaWYgQHN0YXRlPy5lcnJvcnM/XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAvdGV4dC5jb2ZmZWVcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZnJpZ2dpbmdCb290c3RyYXAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vZnJpZ2dpbmdfYm9vdHN0cmFwLmNvZmZlZVwiXG5mcmlnSGVscGVycyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9oZWxwZXJzLmNvZmZlZVwiXG5JbnB1dE1peGluICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9taXhpbnMvaW5wdXRfbWl4aW4uY29mZmVlXCJcbntlcnJvckxpc3QsIHNpemVDbGFzc05hbWVzfSAgID0gZnJpZ2dpbmdCb290c3RyYXBcbntodW1hbml6ZSwgY2xvbmUsIG1lcmdlLCBtYXB9ID0gZnJpZ0hlbHBlcnNcbmN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0XG5cbmZyaWdnaW5nQm9vdHN0cmFwLlR5cGVhaGVhZCA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkgUmVhY3QuY3JlYXRlQ2xhc3NcblxuICBkaXNwbGF5TmFtZTogJ0ZyaWcuZnJpZ2dpbmdCb290c3RyYXAuU2VsZWN0J1xuXG4gIG1peGluczogW0lucHV0TWl4aW5dXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIGVycm9yczogdW5kZWZpbmVkXG4gICAgZWRpdGVkOiBmYWxzZVxuICAgIHNlbGVjdGVkSXRlbXM6IFtdXG5cbiAgZ2V0RnJpZ2dpbmdQcm9wczogLT5cbiAgICBpbnB1dEh0bWw6XG4gICAgICBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sIHR5cGVhaGVhZFwiXG4gICAgICBkZWZhdWx0VmFsdWU6IC0+IEBmcmlnUHJvcHMuaW5pdGlhbFZhbHVlXG4gICAgICBwbGFjZWhvbGRlcjogIC0+IEBmcmlnUHJvcHMucGxhY2Vob2xkZXJcbiAgICBsYWJlbEh0bWw6XG4gICAgICBjbGFzc05hbWU6IFwiXCJcblxuICBjb21wb25lbnREaWRNb3VudDogLT5cbiAgICBzb3VyY2UgPSBpZiBAZnJpZ1Byb3BzLm9wdGlvbnMubGVuZ3RoID4gLTFcbiAgICAgIEBmcmlnUHJvcHMub3B0aW9uc1xuICAgIGVsc2VcbiAgICAgIEBmcmlnUHJvcHMub3B0aW9ucy5leGVjdXRlXG4gICAgb3B0aW9ucyA9XG4gICAgICBzb3VyY2U6IHNvdXJjZVxuICAgICAgdXBkYXRlcjogQF9hZnRlclNlbGVjdFxuICAgICAgbWluTGVuZ3RoOiAwXG4gICAgICBpdGVtczogNVxuICAgICAgc2hvd0hpbnRPbkZvY3VzOiB0cnVlXG4gICAgaWYgQGZyaWdQcm9wcy5hZGRUb0xpc3RNZXNzYWdlXG4gICAgICBvcHRpb25zWydhZGRJdGVtJ10gPSBuYW1lOiBAZnJpZ1Byb3BzLmFkZFRvTGlzdE1lc3NhZ2VcbiAgICBpZiBAZnJpZ1Byb3BzLm11bHRpcGxlXG4gICAgICBvcHRpb25zWydhZnRlclNlbGVjdCddID0gQF9jbGVhclR5cGVhaGVhZFxuICAgIEBfc2V0SW5pdGlhbFZhbHVlKClcbiAgICBAXyRlbCgpLnR5cGVhaGVhZCBvcHRpb25zXG5cbiAgX3NldEluaXRpYWxWYWx1ZTogLT5cbiAgICBpZiBpbml0aWFsVmFsdWUgPSBAXyRlbCgpLnZhbCgpXG4gICAgICBpZiBAZnJpZ1Byb3BzLm11bHRpcGxlXG4gICAgICAgIGluaXRpYWxJdGVtcyA9IEBfbXVsdGlwbGVJbml0aWFsSXRlbXMgaW5pdGlhbFZhbHVlXG4gICAgICAgIEBfY2xlYXJUeXBlYWhlYWQoKVxuICAgICAgZWxzZVxuICAgICAgICBpbml0aWFsSXRlbXMgPSBbQF9pbml0YWxJdGVtKGluaXRpYWxWYWx1ZSldXG4gICAgICAgIEBfJGVsKCkudmFsIGluaXRpYWxJdGVtc1swXS5uYW1lIGlmIGluaXRpYWxJdGVtc1swXVxuICAgICAgQHNldFN0YXRlIHNlbGVjdGVkSXRlbXM6IGluaXRpYWxJdGVtc1xuXG4gIF9tdWx0aXBsZUluaXRpYWxJdGVtczogKGluaXRpYWxWYWx1ZSkgLT5cbiAgICBpbml0aWFsVmFscyA9IGluaXRpYWxWYWx1ZS5zcGxpdCAnLCdcbiAgICBpZiBAZnJpZ1Byb3BzLm9wdGlvbnMubGVuZ3RoID4gLTFcbiAgICAgICMgaWYgb3B0aW9ucyBpcyBhbiBhcnJheSwgZmluZCBpbml0aWFsSXRlbXMgYnkgdGhlaXIgaWRzXG4gICAgICBpbml0aWFsSXRlbXMgPSBfLmZpbHRlciBAZnJpZ1Byb3BzLm9wdGlvbnMsIChpdGVtKSAtPlxuICAgICAgICBfLmluY2x1ZGVzIGluaXRpYWxWYWxzLCBpdGVtLmlkLnRvU3RyaW5nKClcbiAgICAgICMgcmVtb3ZlIHVzZWQgdmFscyBmcm9tIHR5cGVhaGVhZCBvcHRpb25zXG4gICAgICBfLnB1bGwgQGZyaWdQcm9wcy5vcHRpb25zLCBpbml0aWFsSXRlbXMuLi5cbiAgICBlbHNlXG4gICAgICAjIGlmIG9wdGlvbnMgaXMgYSBmdW5jdGlvbiwgaW5pdGlhbEl0ZW1zIG11c3QgYmUgcGFzc2VkIGluXG4gICAgICBpbml0aWFsSXRlbXMgPSBAZnJpZ1Byb3BzLmluaXRpYWxJdGVtc1xuICAgIGluaXRpYWxJdGVtc1xuXG4gIF9pbml0YWxJdGVtOiAoaW5pdGlhbFZhbHVlKSAtPlxuICAgIF8uZmluZCBAZnJpZ1Byb3BzLm9wdGlvbnMsIGlkOiBwYXJzZUludCBpbml0aWFsVmFsdWVcblxuICBfJGVsOiAtPlxuICAgICQgQHJlZnNbQGZyaWdQcm9wcy5pbnB1dEh0bWwucmVmXS5nZXRET01Ob2RlKClcblxuICBfYWZ0ZXJTZWxlY3Q6IChpdGVtKSAtPlxuICAgIGlmIEBmcmlnUHJvcHMuYWRkVG9MaXN0TWVzc2FnZSBhbmQgaXRlbS5uYW1lID09IEBmcmlnUHJvcHMuYWRkVG9MaXN0TWVzc2FnZVxuICAgICAgIyBwb3N0IHRoZSBpdGVtIChjcmVhdGUpXG4gICAgICBAZnJpZ1Byb3BzLmFkZFRvTGlzdC5leGVjdXRlIEBfJGVsKCkudmFsKCksIChkYXRhLCBpdGVtVHlwZSkgPT5cbiAgICAgICAgIyBjYWxsYmFjayBzaG91bGQgYXBwZW5kICh2aWEgXy5wYXJ0aWFsUmlnaHQpIHRoZSBtb2RlbCB0eXBlXG4gICAgICAgICMgZWc6ICdzYWxlc19jYXRlZ29yeSdcbiAgICAgICAgaXRlbSA9IGRhdGFbaXRlbVR5cGVdXG4gICAgICAgICMgYWRkIG5ld2x5IGNyZWF0ZWQgaXRlbSB0byB0eXBlYWhlYWQgb3B0aW9uc1xuICAgICAgICBAZnJpZ1Byb3BzLm9wdGlvbnMucHVzaCBpdGVtXG4gICAgICAgIEBfJGVsKCkudmFsIGl0ZW0ubmFtZVxuICAgICAgICBAX2FkZFRvU2VsZWN0ZWRJdGVtcyBpdGVtXG4gICAgZWxzZVxuICAgICAgQF9hZGRUb1NlbGVjdGVkSXRlbXMgaXRlbVxuICAgIGl0ZW1cblxuICBfYWRkVG9TZWxlY3RlZEl0ZW1zOiAoaXRlbSkgLT5cbiAgICBpZiBAZnJpZ1Byb3BzLm11bHRpcGxlXG4gICAgICBAc2V0U3RhdGUgc2VsZWN0ZWRJdGVtczogQHN0YXRlLnNlbGVjdGVkSXRlbXMuY29uY2F0IGl0ZW1cbiAgICAgIF8ucHVsbCBAZnJpZ1Byb3BzLm9wdGlvbnMsIGl0ZW1cbiAgICBlbHNlXG4gICAgICBAc2V0U3RhdGUgc2VsZWN0ZWRJdGVtczogW2l0ZW1dXG4gICAgc2V0VGltZW91dCBAZnJpZ1Byb3BzLmlucHV0SHRtbC5vbkNoYW5nZSwgMFxuXG4gIF9jbGVhclR5cGVhaGVhZDogLT5cbiAgICBAXyRlbCgpLnZhbCAnJ1xuXG4gIGdldEZyaWdnaW5nVmFsdWU6IC0+XG4gICAgaWYgQGZyaWdQcm9wcy5tdWx0aXBsZVxuICAgICAgXy5tYXAgQHN0YXRlLnNlbGVjdGVkSXRlbXMsICdpZCdcbiAgICBlbHNlXG4gICAgICBAc3RhdGUuc2VsZWN0ZWRJdGVtc1swXS5pZCBpZiBAc3RhdGUuc2VsZWN0ZWRJdGVtc1swXVxuXG4gIF9jeDogLT5cbiAgICBjeFxuICAgICAgXCJmb3JtLWdyb3VwXCI6IHRydWVcbiAgICAgIFwiaGFzLWVycm9yXCI6IEBzdGF0ZS5lcnJvcnM/XG4gICAgICBcImhhcy1zdWNjZXNzXCI6IEBzdGF0ZS5lZGl0ZWQgJiYgIUBzdGF0ZS5lcnJvcnM/XG4gICAgICBcIml0ZW1zXCI6IHRydWVcblxuICBfZGVsZXRlSXRlbTogKGl0ZW0pIC0+XG4gICAgQHNldFN0YXRlIHNlbGVjdGVkSXRlbXM6IF8ud2l0aG91dCBAc3RhdGUuc2VsZWN0ZWRJdGVtcywgaXRlbVxuICAgIEBmcmlnUHJvcHMub3B0aW9ucy5wdXNoIGl0ZW0gaWYgQGZyaWdQcm9wcy5vcHRpb25zLmxlbmd0aCA+IC0xXG4gICAgc2V0VGltZW91dCBAZnJpZ1Byb3BzLmlucHV0SHRtbC5vbkNoYW5nZSwgMFxuXG4gIHJlbmRlcjogLT5cbiAgICBkaXYgY2xhc3NOYW1lOiBjeChzaXplQ2xhc3NOYW1lcyBAcHJvcHMpICsgXCIgdHlwZWFoZWFkXCIsXG4gICAgICBkaXYgY2xhc3NOYW1lOiBcImNvbnRyb2xzXCIsXG4gICAgICAgIGxhYmVsIEBmcmlnUHJvcHMubGFiZWxIdG1sLCBAZnJpZ1Byb3BzLmxhYmVsIGlmICFAZnJpZ1Byb3BzLm11bHRpcGxlXG4gICAgICAgIGlucHV0IEBmcmlnUHJvcHMuaW5wdXRIdG1sXG4gICAgICAgIGxhYmVsIEBmcmlnUHJvcHMubGFiZWxIdG1sLCBAZnJpZ1Byb3BzLmxhYmVsIGlmIEBmcmlnUHJvcHMubXVsdGlwbGVcbiAgICAgIGRpdiBjbGFzc05hbWU6IEBfY3goKSxcbiAgICAgICAgaWYgQGZyaWdQcm9wcy5tdWx0aXBsZVxuICAgICAgICAgIF8ubWFwIEBzdGF0ZS5zZWxlY3RlZEl0ZW1zLCAoaXRlbSkgPT5cbiAgICAgICAgICAgIGRpdiBjbGFzc05hbWU6IFwicm93XCIsXG4gICAgICAgICAgICAgIGRpdiBjbGFzc05hbWU6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTEyXCIsXG4gICAgICAgICAgICAgICAgcCBjbGFzc05hbWU6ICdwdWxsLWxlZnQnLCBpdGVtLm5hbWVcbiAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmEgZmEtdGltZXMgZGVsZXRlLXRyaWdnZXIgcHVsbC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiBfLnBhcnRpYWwgQF9kZWxldGVJdGVtLCBpdGVtXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJSZW1vdmUgZnJvbSBsaXN0XCJcbiAgICAgICAgaWYgQHN0YXRlLnNlbGVjdGVkSXRlbXMubGVuZ3RoIDwgMSAmJiBAZnJpZ1Byb3BzLm11bHRpcGxlXG4gICAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJyb3dcIixcbiAgICAgICAgICAgIGRpdiBjbGFzc05hbWU6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTEyXCIsXG4gICAgICAgICAgICAgIHAgY2xhc3NOYW1lOiAncHVsbC1sZWZ0JywgXCJObyBcIiArXG4gICAgICAgICAgICAgICAgQGZyaWdQcm9wcy5sYWJlbC50b0xvd2VyQ2FzZSgpICsgXCIuLi5cIlxuICAgICAgICBlcnJvckxpc3QgQHN0YXRlLmVycm9ycyBpZiBAc3RhdGU/LmVycm9ycz9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC90eXBlYWhlYWQuY29mZmVlXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5hZGRvbnM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0LmFkZG9uc1wiXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlJlYWN0ICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcInJlYWN0L2FkZG9uc1wiXG5mcmlnSGVscGVycyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi9oZWxwZXJzLmNvZmZlZVwiXG5mcmlnRGVmYXVsdHMgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi9kZWZhdWx0cy5jb2ZmZWVcIlxue2h1bWFuaXplLCBjbG9uZSwgbWVyZ2UsIG1hcCwgbWFwT2JqLCBpc0NvbmZpZ09iaiwgc2V0RGVmYXVsdHN9ID0gZnJpZ0hlbHBlcnNcblxubW9kdWxlLmV4cG9ydHMgPSBmcmlnZ2luZ1Byb3BzTWl4aW4gPVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IChuZXh0UHJvcHMpIC0+XG4gICAgQF9mcmlnUmVmcmVzaFByb3BzKG5leHRQcm9wcylcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IC0+XG4gICAgQF9mcmlnUmVmcmVzaFByb3BzKEBwcm9wcylcblxuICBmcmlnRGVmYXVsdExheWVyczogLT5cbiAgICBbXG4gICAgICAjIEdsb2JhbCBkZWZhdWx0c1xuICAgICAgZnJpZ0RlZmF1bHRzXG4gICAgICAjIFRoZW1lLWxldmVsIGRlZmF1bHRzXG4gICAgICBAcHJvcHMudGhlbWVEZWZhdWx0cyB8fCB7fVxuICAgICAgIyBGb3JtLWxldmVsIGRlZmF1bHRzXG4gICAgICBAcHJvcHMuZm9ybURlZmF1bHRzIHx8IHt9XG4gICAgXVxuXG4gICMgVGhlIGRlZmF1bHQgbGF5ZXJzIHBsdXMgdGhlIGxheWVycyByZWxhdGVkIHRvIHRoaXMgY29tcG9uZW50J3MgcHJvcHMgYW5kXG4gICMgZnJpZ2dpbmdQcm9wc1xuICBfZnJpZ1Byb3BMYXllcnM6IChwcm9wcykgLT5cbiAgICBbXG4gICAgICBAZnJpZ0RlZmF1bHRMYXllcnMoKS4uLlxuICAgICAgIyBDb21wb25lbnQtbGV2ZWwgZGVmYXVsdHNcbiAgICAgIEBnZXRGcmlnZ2luZ1Byb3BzPygpIHx8IHt9XG4gICAgICAjIFVzZXItZW50ZXJlZCBvcHRpb25zXG4gICAgICBwcm9wc1xuICAgIF1cblxuICBfZnJpZ1JlZnJlc2hQcm9wczogKHByb3BzID0ge30pIC0+XG4gICAgIyBTZXR0aW5nIGRlZmF1bHRzXG4gICAgQGZyaWdQcm9wcyA9IHt9XG4gICAgc2V0RGVmYXVsdHMgQF9mcmlnUHJvcExheWVycyhwcm9wcykuLi4sIEBmcmlnUHJvcHMsIEBfZnJpZ1Byb3BWYWxcblxuICAjIFJldHVybiBhIG5vcm1hbGl6ZWQgdmFsdWUgZm9yIGEgZnJpZyBwcm9wZXJ0eVxuICBfZnJpZ1Byb3BWYWw6IChrLCBvYmosIGxheWVycykgLT5cbiAgICBkZWZhdWx0VmFsID0gbGF5ZXJzWzBdW2tdXG4gICAgIyBDbGFzcyBuYW1lcyBhcmUgbWVyZ2VkXG4gICAgcmV0dXJuIEBfZnJpZ0NsYXNzTmFtZSBsYXllcnMgaWYgayA9PSBcImNsYXNzTmFtZVwiXG4gICAgIyBUcnVlIHByb3BlcnRpZXMgc2hvdWxkIGVuYWJsZSBmcmlnRGVmYXVsdHMgYmVoYXZpb3JcbiAgICAjIG9iaiA9IGRlZmF1bHRWYWwgaWYgQGZyaWdQcm9wc1trXSA9PSB0cnVlXG4gICAgIyBldmFsdWF0ZSB2YWx1ZSBmdW5jdGlvbnMgYW5kIHJlcGxhY2UgdGhlbSB3aXRoIHRoZWlyIHZhbHVlc1xuICAgIGZuTmFtZVJlZ2V4ID0gL15vbnxeY2IkfF52YWxpZGF0ZSQvXG4gICAgaWYgdHlwZW9mKG9iaikgPT0gXCJmdW5jdGlvblwiIGFuZCAob2JqID09IGRlZmF1bHRWYWwgb3IgIWsubWF0Y2ggZm5OYW1lUmVnZXgpXG4gICAgICBvYmogPSBvYmouY2FsbCBALCBAXG4gICAgcmV0dXJuIG9ialxuXG4gICMgUmV0dXJuIGEgY2xhc3NuYW1lcyBieSBjb25jYXRpbmF0aW9uIGFsbCBvZiB0aGUgY2xhc3NOYW1lcyBpbiB0aGUgcHJvcFxuICAjIGxheWVycy5cbiAgX2ZyaWdDbGFzc05hbWU6IChzb3VyY2VzKSAtPlxuICAgIGNsYXNzTmFtZXMgPSBbXVxuICAgIGZvciBzb3VyY2UgaW4gc291cmNlc1xuICAgICAgY2xhc3NOYW1lID0gc291cmNlLmNsYXNzTmFtZVxuICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLmNhbGwgQCwgQCBpZiB0eXBlb2YoY2xhc3NOYW1lKSA9PSBcImZ1bmN0aW9uXCJcbiAgICAgIGNsYXNzTmFtZXMucHVzaCBjbGFzc05hbWUgaWYgY2xhc3NOYW1lXG4gICAgIyBSZXR1cm4gdGhlIGNvbmNhdGluYXRlZCBjbGFzc05hbWUuIFNldCBpdCBpbiBAZnJpZ1Byb3BzIHRvIG92ZXJyaWRlXG4gICAgIyBldmVyeXRoaW5nIGVsc2UuXG4gICAgY2xhc3NOYW1lcy5qb2luIFwiIFwiXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnL21peGlucy9mcmlnZ2luZ19wcm9wc19taXhpbi5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnMgPVxuICBodW1hbml6ZTogKGtleSkgLT5cbiAgICByZXR1cm4gdW5kZWZpbmVkIHVubGVzcyBrZXk/XG4gICAgaHVtYW5TdHJpbmcgPSBrZXkucmVwbGFjZSgvKFtBLVpdfFswLTldK3xfW2Etel0pL2csIFwiICQxXCIpLnJlcGxhY2UgL18vZywgXCJcIlxuICAgIHJldHVybiBodW1hblN0cmluZ1swXS50b1VwcGVyQ2FzZSgpICsgaHVtYW5TdHJpbmdbMS4uXS50b0xvd2VyQ2FzZSgpXG5cbiAgY2xvbmU6IChvYmopIC0+XG4gICAgb2JqQ2xvbmUgPSB7fVxuICAgIG9iakNsb25lW2tdID0gdiBmb3IgaywgdiBvZiBvYmpcbiAgICByZXR1cm4gb2JqQ2xvbmVcblxuICBtZXJnZTogKHRhcmdldCwgb3RoZXJzLi4uKSAtPlxuICAgIHRhcmdldCB8fD0ge31cbiAgICBmb3Igb3RoZXIgaW4gb3RoZXJzXG4gICAgICB0YXJnZXRba10gPSB2IGZvciBrLCB2IG9mIChvdGhlciB8fCB7fSlcbiAgICByZXR1cm4gdGFyZ2V0XG5cbiAgbWFwOiAoYXJyYXksIGZuKSAtPlxuICAgIG91dCA9IFtdXG4gICAgb3V0LnB1c2ggZm4gayBmb3IgayBpbiBhcnJheVxuICAgIHJldHVybiBvdXRcblxuICBtYXBPYmo6IChvYmosIGZuKSAtPlxuICAgIG91dCA9IHt9XG4gICAgb3V0W2tdID0gZm4gaywgdiBmb3IgaywgdiBvZiBvYmpcbiAgICByZXR1cm4gb3V0XG5cbiAgIyBUYWtlcyBhIGxpc3Qgb2YgZGVmYXVsdHMgdG8gaW5oZXJpdCBmcm9tLCB0aGUgb2JqZWN0IGl0c2VsZiBhbmQgYW4gb3B0aW9uYWxcbiAgIyBjYWxsYmFjayBwYXJhbWV0ZXIgd2hpY2ggY2FuIGJlIHVzZWQgdG8gYWRqdXN0IHRoZSB2YWx1ZSBvZiBlYWNoIHBhcmFtZXRlci5cbiAgIyBUaGlzIGZ1bmN0aW9uIG9wZXJhdGVzIGRlZXBseSBvbiBuZXN0ZWQgb2JqZWN0cy5cbiAgIyBUaGUgcmV0dXJuZWQgdmFsdWUgaGFzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgIyAqIFRoZSBrZXlzIGFyZSB0aGUgc3VwZXJzZXQgb2YgYWxsIGtleXMgZnJvbSBhbGwgdGhlIGxheWVyLlxuICAjICogVGhlIGtleXMgYXJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBkZWZhdWx0cyB3aXRoIGtleXMgZnJvbSBvdGhlciBsYXllcnNcbiAgIyAgIGJlaW5nIGFwcGVuZGVkIGFmdGVyIHRoZSBkZWZhdWx0cy5cbiAgc2V0RGVmYXVsdHM6IChsYXllcnMuLi4sIGNiKSAtPlxuICAgICMgTm8gY2FsbGJhY2s6IERlZmF1bHRpbmcgdGhlIGNhbGxiYWNrIHRvIGEgcGFzc3Rocm91Z2ggZnVuY3Rpb25cbiAgICBpZiB0eXBlb2YoY2IpICE9IFwiZnVuY3Rpb25cIlxuICAgICAgbGF5ZXJzLnB1c2ggY2JcbiAgICAgIGNiID0gKGssIHYpIC0+IHZcbiAgICAjIHNldHRpbmcgdGhlIHRhcmdldCB0byB0aGUgZmlyc3QgbGF5ZXJcbiAgICB0YXJnZXQgPSBsYXllcnNbbGF5ZXJzLmxlbmd0aCAtIDFdIHx8IHt9XG4gICAgIyBjbG9uaW5nIGFuZCByZXZlcnNpbmcgdGhlIGxheWVycyBmb3IgdXNlIGluIHRoZSBpdGVyYXRvclxuICAgIHJldmVyc2VkTGF5ZXJzID0gbGF5ZXJzLnNsaWNlKDApLnJldmVyc2UoKVxuICAgICMgVGhlIGl0ZXJhdG9yIGlzIHVzZWQgdG8gc2V0IGEgZmluYWwgdmFsdWUgZm9yIGVhY2gga2V5IGluIHRoZSByZXR1cm5lZFxuICAgICMgb2JqZWN0XG4gICAgaXRlcmF0b3IgPSAoaywgdikgLT5cbiAgICAgICMgU2V0dGluZyB0aGUgdmFsdWUgZm9yIG5vbi1vYmplY3RzIGJ5IFwiZmFpbGluZyB0aHJvdWdoXCIgdGhlIGRlZmF1bHRzXG4gICAgICAjIHVudGlsIGEgbm9uLW51bGwgdmFsdWUgaXMgZm91bmRcbiAgICAgIHZhbCA9IHVuZGVmaW5lZFxuICAgICAgdmFsID89IGxheWVyW2tdIGZvciBsYXllciBpbiByZXZlcnNlZExheWVyc1xuICAgICAgY2IgaywgdmFsLCBsYXllcnNcbiAgICAjIFJlY3Vyc2l2ZWx5IG1hcHBpbmcgdGhlIGl0ZXJhdG9yIG92ZXIgbmVzdGVkIG9iamVjdHNcbiAgICBmb3IgaywgdiBvZiBoZWxwZXJzLm1lcmdlIHt9LCBsYXllcnMuLi5cbiAgICAgIGlmIGlzQ29uZmlnT2JqIGxheWVyc1swXVtrXVxuICAgICAgICBuYW1lc3BhY2VkTGF5ZXJzID0gaGVscGVycy5tYXAgbGF5ZXJzLCAobGF5ZXIpIC0+IGxheWVyW2tdIHx8IHt9XG4gICAgICAgIHYgPSBoZWxwZXJzLnNldERlZmF1bHRzIG5hbWVzcGFjZWRMYXllcnMuLi4sIGNiXG4gICAgICBlbHNlXG4gICAgICAgIHYgPSBpdGVyYXRvciBrLCB2XG4gICAgICB0YXJnZXRba10gPSB2XG4gICAgcmV0dXJuIHRhcmdldFxuXG4gIGlzQ29uZmlnT2JqOiAob2JqKSAtPlxuICAgIHR5cGUgPSB0eXBlb2Ygb2JqXG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGUgIT0gXCJzdHJpbmdcIiBhbmRcbiAgICAgIHR5cGUgIT0gXCJudW1iZXJcIiBhbmRcbiAgICAgIHR5cGUgIT0gXCJib29sZWFuXCIgYW5kXG4gICAgICB0eXBlICE9IFwiZnVuY3Rpb25cIiBhbmRcbiAgICAgIHR5cGUgIT0gXCJ1bmRlZmluZWRcIiBhbmRcbiAgICAgIG9iaiAgIT0gbnVsbCBhbmRcbiAgICAgIG9iai5sZW5ndGggPT0gdW5kZWZpbmVkXG4gICAgKVxuXG4gIGNhcGl0YWxpemU6IChzdHJpbmcpIC0+XG4gICAgcmV0dXJuIHVuZGVmaW5lZCB1bmxlc3Mgc3RyaW5nP1xuICAgIFwiI3tzdHJpbmdbMF0udG9VcHBlckNhc2UoKX0je3N0cmluZ1sxLi5dfVwiXG5cblxue2h1bWFuaXplLCBjbG9uZSwgbWVyZ2UsIG1hcCwgbWFwT2JqLCBpc0NvbmZpZ09iaiwgc2V0RGVmYXVsdHN9ID0gaGVscGVyc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9oZWxwZXJzLmNvZmZlZVxuICoqLyIsIlJlYWN0ICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwicmVhY3QvYWRkb25zXCJcbmdsb2JhbFR5cGVNYXBwaW5nICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vdHlwZV9tYXBwaW5nLmNvZmZlZVwiXG5mcmlnSGVscGVycyAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uL2hlbHBlcnMuY29mZmVlXCJcbntodW1hbml6ZSwgbWFwLCBjYXBpdGFsaXplLCBnZXRUZW1wbGF0ZSwgZ3Vlc3NUeXBlLCBzZXREZWZhdWx0c30gPSBmcmlnSGVscGVyc1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRzbE1peGluID1cblxuICBmcmlnRFNMOiAtPlxuICAgIGVycm9yczogQF9mcmlnRXJyb3JzXG4gICAgaW5wdXQ6IEBfZnJpZ0lucHV0XG4gICAgc3VibWl0OiBAX2ZyaWdTdWJtaXRcblxuICBfZnJpZ0Vycm9yczogLT5cbiAgICBAX2ZyaWdJbnB1dCBcImVycm9yc1wiLCB0eXBlOiBcImVycm9yc1wiLCBlcnJvcnM6IEBwcm9wcy5lcnJvcnNcblxuICAjIENyZWF0ZSBhIHN1Ym1pdCBidXR0b25cbiAgIyB2YWx1ZTogW1NUUklOR10gVGhlIGxhYmVsIHRleHQgZm9yIHRoZSBzdWJtaXQgYnV0dG9uXG4gICMgcHJvcHM6IFtPQkpFQ1RdIHByb3BlcnRpZXMgdG8gc2VuZCB0byB0aGUgUmVhY3QgQ29tcG9uZW50IChzZWUgaW5wdXQgcHJvcHMpXG4gIF9mcmlnU3VibWl0OiAodmFsdWUsIHByb3BzID0ge30pIC0+XG4gICAgaWYgYXJndW1lbnRzLmxlbmd0aCA9PSAxIGFuZCB0eXBlb2YodmFsdWUpICE9IFwic3RyaW5nXCJcbiAgICAgIHByb3BzID0gdmFsdWVcbiAgICAgIHZhbHVlID0gdW5kZWZpbmVkXG4gICAgc2V0RGVmYXVsdHMgQF9mcmlnU3VibWl0RGVmYXVsdHModmFsdWUpLCBwcm9wc1xuICAgIEBfZnJpZ0lucHV0IFwic3VibWl0XCIsIHByb3BzXG5cbiAgX2ZyaWdTdWJtaXREZWZhdWx0czogKHZhbHVlKSAtPlxuICAgIHR5cGU6IFwic3VibWl0XCJcbiAgICBpbnB1dEh0bWw6XG4gICAgICBkZWZhdWx0VmFsdWU6IHZhbHVlIGlmIHZhbHVlP1xuXG4gICMgQ3JlYXRlcyBhIGZvcm0gZmllbGRcbiAgIyBrZXk6IFtTVFJJTkddIHRoZSBuYW1lIG9mIHRoZSBmaWVsZCBpbiB0aGUgZGF0YVxuICAjIHByb3BzOlxuICAjICAgcmVxdWlyZWQ6IChkZWZhdWx0OiB0cnVlKVxuICAjICAgaW5wdXRIdG1sOiBzcGVjaWZ5IGh0bWwgYXR0cmlidXRlcyBmb3IgdGhlIGlucHV0IFJlYWN0IERPTSBlbGVtZW50XG4gICMgICBsYWJlbEh0bWw6IHNwZWNpZnkgaHRtbCBhdHRyaWJ1dGVzIGZvciB0aGUgbGFiZWwgUmVhY3QgRE9NIGVsZW1lbnRcbiAgIyAgIHBsYWNlaG9sZGVyOlxuICAjICAgICB0cnVlOiAoZGVmYXVsdCkgYWRkcyBhIHBsYWNlaG9sZGVyIHdpdGggYSBuYW1lIGJhc2VkIG9uIGEgaHVtYW5pemF0aW9uXG4gICMgICAgICAgICAgIG9mIHRoZSBrZXlcbiAgIyAgICAgZmFsc2U6IGRpc2FibGVzIHRoZSBwbGFjZWhvbGRlclxuICAjICAgICBbU1RSSU5HXTogc2V0cyB0aGUgcGxhY2Vob2xkZXIgdG8gdGhlIGdpdmVuIHN0cmluZ1xuICAjICBsYWJlbDpcbiAgIyAgICAgdHJ1ZTogKGRlZmF1bHQpIGFkZHMgYSBsYWJlbCB3aXRoIGEgbmFtZSBiYXNlZCBvbiBhIGh1bWFuaXphdGlvblxuICAjICAgICAgICAgICBvZiB0aGUga2V5XG4gICMgICAgIGZhbHNlOiBkaXNhYmxlcyB0aGUgbGFiZWxcbiAgIyAgICAgW1NUUklOR106IHNldHMgdGhlIGxhYmVsIHRvIHRoZSBnaXZlbiBzdHJpbmdcbiAgX2ZyaWdJbnB1dDogKGtleSwgaW5wdXRQcm9wcyA9IHt9KSAtPlxuICAgIHR5cGVNYXBwaW5nID0gaW5wdXRQcm9wcy50eXBlTWFwcGluZ1xuICAgIGRlbGV0ZSBpbnB1dFByb3BzLnR5cGVNYXBwaW5nXG4gICAgIyBTZXR0aW5nIHRoZSBkZWZhdWx0c1xuICAgIHNldERlZmF1bHRzIEBfZnJpZ0lucHV0RGVmYXVsdHMoa2V5KSwgaW5wdXRQcm9wc1xuICAgICMgR3Vlc3NpbmcgdGhlIHR5cGUgYW5kIHVzaW5nIGl0IHRvIGxvb2t1cCB0aGUgdGVtcGxhdGVcbiAgICBpbnB1dFByb3BzLnR5cGUgPSBAX2ZyaWdHdWVzc0lucHV0VHlwZSBpbnB1dFByb3BzXG4gICAgIyBsb29raW5nIHVwIHRoZSB0ZW1wbGF0ZSBuYW1lIHdpdGggdGhlIHR5cGUgbWFwcGluZ3MgYW5kIHRoZSB0eXBlXG4gICAgdGVtcGxhdGVOYW1lID0gQF9mcmlnR2V0VGVtcGxhdGVOYW1lIGlucHV0UHJvcHMsIEBwcm9wcy50aGVtZSwgdHlwZU1hcHBpbmdcbiAgICB0ZW1wbGF0ZSA9IEBfZnJpZ0xvYWRUZW1wbGF0ZSBpbnB1dFByb3BzLCB0ZW1wbGF0ZU5hbWVcbiAgICAjIENyZWF0aW5nIGFuZCByZXR1cm5pbmcgdGhlIHRlbXBsYXRlIGluc3RhbmNlXG4gICAgcmV0dXJuIHRlbXBsYXRlIGlucHV0UHJvcHNcblxuICBfZnJpZ0lucHV0RGVmYXVsdHM6IChrZXkpIC0+XG4gICAgcmVmOiAgICAgICAgICAgICAgICAgICAgXCIje2tleX1JbnB1dFwiXG4gICAgZmllbGRLZXk6ICAgICAgICAgICAgICAga2V5XG4gICAgaW5pdGlhbFZhbHVlOiAgICAgICAgICAgQGluaXRpYWxWYWx1ZXMoKVtrZXldXG4gICAgb25GcmlnZ2luZ0NoaWxkQ2hhbmdlOiAgQF9vbkZyaWdnaW5nQ2hpbGRDaGFuZ2VcbiAgICBvbkZyaWdnaW5nQ2hpbGRJbml0OiAgICBAX29uRnJpZ2dpbmdDaGlsZEluaXRcbiAgICBmb3JtRGVmYXVsdHM6ICAgICAgICAgICBAcHJvcHMuZm9ybURlZmF1bHRzXG4gICAgdGhlbWVEZWZhdWx0czogICAgICAgICAgQHByb3BzLnRoZW1lLmRlZmF1bHRzIHx8IHt9XG5cbiAgX2ZyaWdHdWVzc0lucHV0VHlwZTogKGlucHV0UHJvcHMpIC0+XG4gICAganNUeXBlID0gdHlwZW9mIGlucHV0UHJvcHMuaW5pdGlhbFZhbHVlXG4gICAgaWYgaW5wdXRQcm9wcy50eXBlP1xuICAgICAgaW5wdXRQcm9wcy50eXBlXG4gICAgZWxzZSBpZiBpbnB1dFByb3BzLm11bHRpcGxlIG9yIEFycmF5LmlzQXJyYXkgaW5wdXRQcm9wcy5pbml0aWFsVmFsdWVcbiAgICAgIFwibXVsdGlzZWxlY3RcIlxuICAgIGVsc2UgaWYgaW5wdXRQcm9wcy5vcHRpb25zP1xuICAgICAgXCJzZWxlY3RcIlxuICAgIGVsc2UgaWYganNUeXBlID09IFwiYm9vbGVhblwiXG4gICAgICBcImJvb2xlYW5cIlxuICAgIGVsc2UgaWYganNUeXBlID09IFwibnVtYmVyXCJcbiAgICAgIFwiZmxvYXRcIlxuICAgIGVsc2UgaWYgaW5wdXRQcm9wcy5maWVsZEtleS5tYXRjaCAvW3BQXWFzc3dvcmReL1xuICAgICAgXCJwYXNzd29yZFwiXG4gICAgZWxzZVxuICAgICAgXCJzdHJpbmdcIlxuXG4gICMgTG9va3VwIHRoZSB0ZW1wbGF0ZSBuYW1lIHZpYSBhIGNhc2NhZGluZyBsb29rdXAgb2YgdGhlIHR5cGUgdGhyb3VnaCB0aGVcbiAgIyB0eXBlIG1hcHBpbmcgc291cmNlc1xuICBfZnJpZ0dldFRlbXBsYXRlTmFtZTogKHt0eXBlLCBrZXksIHRlbXBsYXRlfSwgdGhlbWUsIGlucHV0VHlwZU1hcHBpbmcpIC0+XG4gICAgcmV0dXJuIGNhcGl0YWxpemUgdGVtcGxhdGUgaWYgdGVtcGxhdGU/XG4gICAgc291cmNlcyA9IFtcbiAgICAgIGlucHV0VHlwZU1hcHBpbmcsIEB0eXBlTWFwcGluZywgdGhlbWUudHlwZU1hcHBpbmcsIGdsb2JhbFR5cGVNYXBwaW5nXG4gICAgXVxuICAgIGZvciB0eXBlTWFwcGluZyBpbiBzb3VyY2VzXG4gICAgICBtYXBwaW5nID0gKHR5cGVNYXBwaW5nfHx7fSlbdHlwZV1cbiAgICAgICMgbWFwcGluZyBpcyBlaXRoZXIgYSB0ZW1wbGF0ZSBuYW1lIHN0cmluZyBvciBhbiBvYmplY3Qgb2YgdGhlIGZvcm1cbiAgICAgICMge3RlbXBsYXRlOiBTVFJJTkcsIGh0bWxJbnB1dFR5cGU6IFNUUklOR31cbiAgICAgIHJldHVybiBjYXBpdGFsaXplIG1hcHBpbmcudGVtcGxhdGUgfHwgbWFwcGluZyBpZiBtYXBwaW5nP1xuXG4gIF9mcmlnTG9hZFRlbXBsYXRlOiAocHJvcHMsIHRlbXBsYXRlTmFtZSkgLT5cbiAgICBpZiAhdGVtcGxhdGVOYW1lP1xuICAgICAgdGhyb3cgXCIje3Byb3BzLmtleX06IE5vIHR5cGUgbWFwcGluZyBmb3VuZCBmb3IgdHlwZSAje3Byb3BzLnR5cGV9XCJcbiAgICBpZiAhQHByb3BzLnRoZW1lW3RlbXBsYXRlTmFtZV0/XG4gICAgICB0aHJvdyBcIiN7cHJvcHMua2V5fTogTm8gI3t0ZW1wbGF0ZU5hbWV9IHRlbXBsYXRlIGZvdW5kIGluIHRoZW1lXCJcbiAgICByZXR1cm4gQHByb3BzLnRoZW1lW3RlbXBsYXRlTmFtZV1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvbWl4aW5zL2RzbF9taXhpbi5jb2ZmZWVcbiAqKi8iLCJmcmlnRGVmYXVsdHMgPSByZXF1aXJlIFwiLi9kZWZhdWx0cy5jb2ZmZWVcIlxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBGb3JtQnVpbGRlclxuICBjb25zdHJ1Y3RvcjogKEBwYXJlbnQsIEBvcHRzID0ge30sIEBjYiA9IC0+KSAtPlxuICAgIEBwcm9wcyA9IHt9XG4gICAgZm9yIGsgaW4gW1wiZGF0YVwiLCBcInJlZlwiLCBcInR5cGVNYXBwaW5nXCIsIFwiZXJyb3JzXCIsIFwib25DaGFuZ2VcIl1cbiAgICAgIEBwcm9wc1trXSA9IEBvcHRzW2tdXG4gICAgICBkZWxldGUgQG9wdHNba11cbiAgICAjIEBwcm9wcy52YWxpZGF0aW9uU3RhdGUgPSB7fVxuICAgIEBwcm9wc1trXSA9IHYgZm9yIGssIHYgb2YgQF9kZWZhdWx0cygpXG5cbiAgX2RlZmF1bHRzOiAtPlxuICAgIHR5cGU6ICAgICAgICAgIFwiZm9ybVwiXG4gICAgcmVmOiAgICAgICAgICAgXCJmb3JtXCJcbiAgICBjYjogICAgICAgICAgICBAY2JcbiAgICBwYXJlbnQ6ICAgICAgICBAcGFyZW50XG4gICAgdGhlbWU6ICAgICAgICAgQF90aGVtZSgpXG4gICAgdGhlbWVEZWZhdWx0czogQF90aGVtZSgpLmRlZmF1bHRzXG4gICAgZm9ybURlZmF1bHRzOiAgQG9wdHNcblxuICAjIENyZWF0ZSBhIHRoZW1lLXNwZWNpZmljIGZvcm0gUmVhY3QgZWxlbWVudFxuICByZW5kZXI6IC0+XG4gICAgQF90aGVtZSgpLkZvcm0gQHByb3BzXG5cbiAgIyByZXR1cm5zIHRoZSB0aGVtZSBiYXNlZCBvbiBhIGNhc2NhZGluZyBsb29rdXBcbiAgX3RoZW1lOiAtPlxuICAgIHRoZW1lTmFtZSA9IEBvcHRzLnRoZW1lIHx8PSBmcmlnRGVmYXVsdHMudGhlbWVcbiAgICB0aHJvdyBcIkEgdGhlbWUgbmFtZSBpcyByZXF1aXJlZFwiIHVubGVzcyB0aGVtZU5hbWU/XG4gICAgdGhlbWUgPSBGcmlnW3RoZW1lTmFtZV1cbiAgICB0aHJvdyBcIkZyaWcuI3t0aGVtZU5hbWV9IGRvZXMgbm90IGV4aXN0XCIgdW5sZXNzIHRoZW1lP1xuICAgIHJldHVybiB0aGVtZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9mb3JtX2J1aWxkZXIuY29mZmVlXG4gKiovIiwiZnJpZ0hlbHBlcnMgPSByZXF1aXJlIFwiLi9oZWxwZXJzLmNvZmZlZVwiXG50eXBlTWFwcGluZyA9IHJlcXVpcmUgXCIuL3R5cGVfbWFwcGluZy5jb2ZmZWVcIlxue2h1bWFuaXplLCBjbG9uZSwgbWVyZ2UsIG1hcCwgY2FwaXRhbGl6ZSwgZ3Vlc3NUeXBlfSA9IGZyaWdIZWxwZXJzXG5cbiMgV2hlbiBpbiBkb3VidCBhZGQgZGVmYXVsdHMgaW4gYWxwaGFiZXRpY2FsIG9yZGVyXG4jIERlZmF1bHRzIGNhbiBkZXBlbmQgb24gcHJldmlvdXMgZGVmYXVsdCB2YWx1ZXMgaWYgdGhleSBhcmVcbiMgZGVmaW5lZCBhZnRlciB0aGVpciBkZXBlbmRlbmNpZXMuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzID1cbiAgIyBGb3IgRnJpZyBpbnRlcm5hbCB1c2Ugb25seVxuICBjaGlsZHJlbjogICAgICAgICAgICAgIHVuZGVmaW5lZFxuICBmaWVsZEtleTogICAgICAgICAgICAgIHVuZGVmaW5lZFxuICBmb3JtUmVmOiAgICAgICAgICAgICAgIHVuZGVmaW5lZFxuICBvbkZyaWdnaW5nQ2hpbGRJbml0OiAgIHVuZGVmaW5lZFxuICBvbkZyaWdnaW5nQ2hpbGRDaGFuZ2U6IHVuZGVmaW5lZFxuICB2YWxpZGF0aW9uU3RhdGU6ICAgICAgIHVuZGVmaW5lZFxuXG4gICMgUHVibGljIHNldHRpbmdzXG4gIGRhdGE6ICAgICAgICAgICAgLT4ge31cbiAgdHlwZTogICAgICAgICAgICB1bmRlZmluZWRcbiAgaW5pdGlhbFZhbHVlOiAgICB1bmRlZmluZWRcbiAgdGl0bGU6ICAgICAgICAgICAtPiBodW1hbml6ZSBAZnJpZ1Byb3BzLmZpZWxkS2V5XG4gIGxhYmVsOiAgICAgICAgICAgLT4gQGZyaWdQcm9wcy50aXRsZVxuICBwbGFjZWhvbGRlcjogICAgIC0+IEBmcmlnUHJvcHMudGl0bGVcbiAgaHRtbElucHV0VHlwZTogICAtPiBGcmlnLnR5cGVNYXBwaW5nW0BmcmlnUHJvcHMudHlwZV0uaHRtbElucHV0VHlwZVxuICBvcHRpb25zOiAgICAgICAgIHVuZGVmaW5lZFxuICBsYXlvdXQ6ICAgICAgICAgIHVuZGVmaW5lZFxuICBjbGFzc05hbWU6ICAgICAgIHVuZGVmaW5lZFxuICBkaXNhYmxlZDogICAgICAgIHVuZGVmaW5lZFxuICBtdWx0aXBsZTogICAgICAgIHVuZGVmaW5lZFxuICB0aGVtZTogICAgICAgICAgIFwiZnJpZ2dpbmdCb290c3RyYXBcIlxuXG4gICMgVmFsaWRhdGlvbiBmbGFnc1xuICByZXF1aXJlZDogICAgICAgIC0+IEBmcmlnUHJvcHMudHlwZSAhPSBcImJvb2xlYW5cIlxuICBtaW46ICAgICAgICAgICAgIHVuZGVmaW5lZFxuICBtYXg6ICAgICAgICAgICAgIHVuZGVmaW5lZFxuXG4gICMgQ2FsbGJhY2tzXG4gIG9uQ2hhbmdlOiAgICAgICAgdW5kZWZpbmVkXG4gIG9uU3VibWl0OiAgICAgICAgdW5kZWZpbmVkXG5cbiAgIyBET00gYXR0cmlidXRlcyArIFJlYWN0IHJlZiArIGNhbGxiYWNrcyBmb3IgdGhlIGZvcm0gZWxlbWVudFxuICBmb3JtSHRtbDpcbiAgICByZWY6ICAgICAgICAgICAtPiBAZnJpZ1Byb3BzLmZvcm1SZWYgICAgICMgRm9yIEZyaWcgaW50ZXJuYWwgdXNlIG9ubHlcbiAgICBvblN1Ym1pdDogICAgICAtPiBAX2ZyaWdPblN1Ym1pdCAgICAgICAgICMgRm9yIEZyaWcgaW50ZXJuYWwgdXNlIG9ubHlcbiAgIyBET00gYXR0cmlidXRlcyBmb3IgdGhlIGxhYmVsIGVsZW1lbnRcbiAgbGFiZWxIdG1sOlxuICAgIGh0bWxGb3I6ICAgICAgIC0+IEBmcmlnUHJvcHMuZmllbGRLZXlcbiAgIyBET00gYXR0cmlidXRlcyArIFJlYWN0IHJlZiArIGNhbGxiYWNrcyBmb3IgdGhlIGlucHV0IGVsZW1lbnRcbiAgaW5wdXRIdG1sOlxuICAgIHJlZjogICAgICAgICAgIFwiaW5wdXRcIiAgICAgICAgICAgICAgICAgICAjIEZvciBGcmlnIGludGVybmFsIHVzZSBvbmx5XG4gICAgbmFtZTogICAgICAgICAgLT4gQGZyaWdQcm9wcy5maWVsZEtleVxuICAgIGF1dG9Gb2N1czogICAgIC0+IEBmcmlnUHJvcHMuYXV0b0ZvY3VzXG4gICAgb25DaGFuZ2U6ICAgICAgLT4gQF9mcmlnT25DaGFuZ2UgICAgICAgICAjIEZvciBGcmlnIGludGVybmFsIHVzZSBvbmx5XG4gICAgb25CbHVyOiAgICAgICAgLT4gQF9mcmlnT25CbHVyICAgICAgICAgICAjIEZvciBGcmlnIGludGVybmFsIHVzZSBvbmx5XG4gICAgY2xhc3NOYW1lOiAgICAgLT4gQGZyaWdQcm9wcy5jbGFzc05hbWVcbiAgICBkaXNhYmxlZDogICAgICAtPiBAZnJpZ1Byb3BzLmRpc2FibGVkXG4gICAgbXVsdGlwbGU6ICAgICAgLT4gQGZyaWdQcm9wcy5tdWx0aXBsZVxuICAjIFRoZSBjb21waWxlZCBsaXN0IG9mIHZhbGlkYXRpb25zIHRvIHJ1biAoYmFzZWQgb24gdmFsaWRhdGlvbiBmbGFncyAvXFwpXG4gIHZhbGlkYXRpb25zOiAtPlxuICAgIHJlcXVpcmVkOiAgICAgIEBmcmlnUHJvcHMucmVxdWlyZWRcbiAgICBtaW46ICAgICAgICAgICBAZnJpZ1Byb3BzLm1pbiBpZiBAZnJpZ1Byb3BzLm1pbj9cbiAgICBtYXg6ICAgICAgICAgICBAZnJpZ1Byb3BzLm1heCBpZiBAZnJpZ1Byb3BzLm1heD9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvZGVmYXVsdHMuY29mZmVlXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0eWxlc2hlZXRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC5zdHlsXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=