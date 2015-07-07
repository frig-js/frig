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
	  Mixin: __webpack_require__(2),
	  InputMixin: __webpack_require__(3),
	  FormMixin: __webpack_require__(4),
	  typeMapping: __webpack_require__(5),
	  validations: __webpack_require__(6)
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
	
	React = __webpack_require__(7);
	
	friggingBootstrap = __webpack_require__(22);
	
	InputMixin = __webpack_require__(3);
	
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var FormBuilder, React, frigMixin;
	
	React = __webpack_require__(7);
	
	FormBuilder = __webpack_require__(18);
	
	module.exports = frigMixin = {
	  frig: function(props, children) {
	    var isCoffeescript;
	    isCoffeescript = props.content == null;
	    return new FormBuilder(this, props, children, isCoffeescript).render();
	  }
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var React, clone, frigHelpers, frigValidations, friggingPropsMixin, humanize, inputMixin, isConfigObj, map, mapObj, merge, setDefaults;
	
	React = __webpack_require__(7);
	
	friggingPropsMixin = __webpack_require__(19);
	
	frigHelpers = __webpack_require__(20);
	
	frigValidations = __webpack_require__(6);
	
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
	
	React = __webpack_require__(7);
	
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
/* 6 */
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React.addons;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, cx, div, errorList, friggingBootstrap, input, label, ref, sizeClassNames;
	
	React = __webpack_require__(7);
	
	friggingBootstrap = __webpack_require__(22);
	
	InputMixin = __webpack_require__(3);
	
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var React, div, errorList, friggingBootstrap, i, ref, span;
	
	React = __webpack_require__(7);
	
	friggingBootstrap = __webpack_require__(22);
	
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, clone, cx, div, errorList, friggingBootstrap, humanize, img, input, label, map, merge, ref, ref1, sizeClassNames;
	
	React = __webpack_require__(7);
	
	friggingBootstrap = __webpack_require__(22);
	
	InputMixin = __webpack_require__(3);
	
	ref = __webpack_require__(20), humanize = ref.humanize, clone = ref.clone, merge = ref.merge, map = ref.map;
	
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var FormMixin, React, div, errorList, form, friggingBootstrap, input, label, ref;
	
	React = __webpack_require__(7);
	
	friggingBootstrap = __webpack_require__(22);
	
	FormMixin = __webpack_require__(4);
	
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, clone, cx, div, errorList, frigHelpers, friggingBootstrap, humanize, input, label, map, merge, ref, sizeClassNames;
	
	React = __webpack_require__(7);
	
	friggingBootstrap = __webpack_require__(22);
	
	frigHelpers = __webpack_require__(20);
	
	InputMixin = __webpack_require__(3);
	
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, clone, cx, div, errorList, frigHelpers, friggingBootstrap, humanize, label, map, merge, option, ref, select, sizeClassNames;
	
	React = __webpack_require__(7);
	
	friggingBootstrap = __webpack_require__(22);
	
	frigHelpers = __webpack_require__(20);
	
	InputMixin = __webpack_require__(3);
	
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
	      className: cx(sizeClassNames(this.props))
	    }, div({
	      className: this._cx()
	    }, this.frigProps.label ? label(this.frigProps.labelHtml, this.frigProps.label) : void 0, div({
	      className: "controls"
	    }, select(this.frigProps.inputHtml, map(this.frigProps.options, this._selectOption))), ((ref1 = this.state) != null ? ref1.errors : void 0) != null ? errorList(this.state.errors) : void 0));
	  }
	});


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
	
	React = __webpack_require__(7);
	
	friggingBootstrap = __webpack_require__(22);
	
	frigHelpers = __webpack_require__(20);
	
	InputMixin = __webpack_require__(3);
	
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, clone, cx, div, errorList, frigHelpers, friggingBootstrap, humanize, label, map, merge, ref, sizeClassNames, textarea;
	
	React = __webpack_require__(7);
	
	friggingBootstrap = __webpack_require__(22);
	
	frigHelpers = __webpack_require__(20);
	
	InputMixin = __webpack_require__(3);
	
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var InputMixin, React, clone, cx, errorList, frigHelpers, friggingBootstrap, humanize, map, merge, sizeClassNames,
	  slice = [].slice;
	
	React = __webpack_require__(7);
	
	friggingBootstrap = __webpack_require__(22);
	
	frigHelpers = __webpack_require__(20);
	
	InputMixin = __webpack_require__(3);
	
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


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var FormBuilder, React, frigDefaults, frigThemes;
	
	React = __webpack_require__(7);
	
	frigDefaults = __webpack_require__(23);
	
	frigThemes = __webpack_require__(24);
	
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var React, clone, frigDefaults, frigHelpers, friggingPropsMixin, humanize, isConfigObj, map, mapObj, merge, setDefaults,
	  slice = [].slice;
	
	React = __webpack_require__(7);
	
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
	
	React = __webpack_require__(7);
	
	globalTypeMapping = __webpack_require__(5);
	
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var React, clone, frigHelpers, friggingBootstrap, humanize, i, map, merge, ref, span;
	
	React = __webpack_require__(7);
	
	frigHelpers = __webpack_require__(20);
	
	humanize = frigHelpers.humanize, clone = frigHelpers.clone, merge = frigHelpers.merge, map = frigHelpers.map;
	
	ref = React.DOM, span = ref.span, i = ref.i;
	
	__webpack_require__(25);
	
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var capitalize, clone, defaults, frigHelpers, guessType, humanize, map, merge, typeMapping;
	
	frigHelpers = __webpack_require__(20);
	
	typeMapping = __webpack_require__(5);
	
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var themes;
	
	module.exports = themes = {
	  friggingBootstrap: __webpack_require__(22)
	};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWU0NTMzMzUyYzI1ODA4OGRjZDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAvc3VibWl0LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9taXhpbnMvZnJpZ19taXhpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvbWl4aW5zL2lucHV0X21peGluLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9taXhpbnMvZm9ybV9taXhpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdHlwZV9tYXBwaW5nLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy92YWxpZGF0aW9ucy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3QuYWRkb25zXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9jaGVja2JveC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9lcnJvcnMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAvZmlsZS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9mb3JtLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwL2lucHV0LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwL3NlbGVjdC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcCBeXFwuXFwvLipcXC5jb2ZmZWUkIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAvc3dpdGNoLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwL3RleHQuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAvdHlwZWFoZWFkLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9mb3JtX2J1aWxkZXIuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL21peGlucy9mcmlnZ2luZ19wcm9wc19taXhpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvaGVscGVycy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvbWl4aW5zL2RzbF9taXhpbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvZGVmYXVsdHMuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7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N0JqQjtBQUFBLEdBZ0NBLFVBQ0U7QUFBQSxVQUFlO2NBQUcsSUFBQyxVQUFTLENBQUMsUUFBZDtLQUFBLENBQWY7QUFBQSxLQUNBLFVBQWU7Y0FBRyxJQUFDLGVBQUo7S0FBQSxDQURmO0lBakNGO0FBQUEsR0FvQ0EsV0FDRTtBQUFBLGNBQWU7Y0FBRyxJQUFDLFVBQVMsQ0FBQyxTQUFkO0tBQUEsQ0FBZjtJQXJDRjtBQUFBLEdBdUNBLFdBQ0U7QUFBQSxVQUFlLE9BQWY7QUFBQSxLQUNBLE1BQWU7Y0FBRyxJQUFDLFVBQVMsQ0FBQyxTQUFkO0tBQUEsQ0FEZjtBQUFBLEtBRUEsV0FBZTtjQUFHLElBQUMsVUFBUyxDQUFDLFVBQWQ7S0FBQSxDQUZmO0FBQUEsS0FHQSxVQUFlO2NBQUcsSUFBQyxlQUFKO0tBQUEsQ0FIZjtBQUFBLEtBSUEsUUFBZTtjQUFHLElBQUMsYUFBSjtLQUFBLENBSmY7QUFBQSxLQUtBLFdBQWU7Y0FBRyxJQUFDLFVBQVMsQ0FBQyxVQUFkO0tBQUEsQ0FMZjtBQUFBLEtBTUEsVUFBZTtjQUFHLElBQUMsVUFBUyxDQUFDLFNBQWQ7S0FBQSxDQU5mO0FBQUEsS0FPQSxVQUFlO2NBQUcsSUFBQyxVQUFTLENBQUMsU0FBZDtLQUFBLENBUGY7SUF4Q0Y7QUFBQSxHQWlEQSxhQUFhO1lBQ1g7QUFBQSxpQkFBZSxJQUFDLFVBQVMsQ0FBQyxRQUExQjtBQUFBLE9BQ0EsS0FBaUMsMEJBQWxCLE9BQUMsVUFBUyxDQUFDLEdBQVgsU0FEZjtBQUFBLE9BRUEsS0FBaUMsMEJBQWxCLE9BQUMsVUFBUyxDQUFDLEdBQVgsU0FGZjtPQURXO0dBQUEsQ0FqRGI7RUFURjs7Ozs7OztBQ0FBOztBQUFBLE9BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBRWY7QUFBQSxzQkFBbUIsb0JBQVEsRUFBUixDQUFuQjtFQUZGOzs7Ozs7O0FDQUEsMEMiLCJmaWxlIjoiZnJpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNWU0NTMzMzUyYzI1ODA4OGRjZDVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9XG4gICMgRnJpZyBjb3JlIG1peGluc1xuICBNaXhpbjogcmVxdWlyZSBcIi4vZnJpZy9taXhpbnMvZnJpZ19taXhpbi5jb2ZmZWVcIlxuICBJbnB1dE1peGluOiByZXF1aXJlIFwiLi9mcmlnL21peGlucy9pbnB1dF9taXhpbi5jb2ZmZWVcIlxuICBGb3JtTWl4aW46IHJlcXVpcmUgXCIuL2ZyaWcvbWl4aW5zL2Zvcm1fbWl4aW4uY29mZmVlXCJcblxuICAjIEZyaWcgZXh0ZW5zaW9uIHBvaW50c1xuICB0eXBlTWFwcGluZzogcmVxdWlyZSBcIi4vZnJpZy90eXBlX21hcHBpbmcuY29mZmVlXCJcbiAgdmFsaWRhdGlvbnM6IHJlcXVpcmUgXCIuL2ZyaWcvdmFsaWRhdGlvbnMuY29mZmVlXCJcblxuIyBGcmlnZ2luZyBCb290c3RyYXAncyBkZWZhdWx0IGlucHV0IGNvbXBvbmVudHNcbkFkZEJvb3RzdHJhcElucHV0cyA9IChpbnB1dHMpIC0+XG4gIHJlcXVpcmUgXCIuL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC8je2t9LmNvZmZlZVwiIGZvciBrIGluIGlucHV0c1xuXG5BZGRCb290c3RyYXBJbnB1dHMgW1xuICBcImNoZWNrYm94XCJcbiAgXCJlcnJvcnNcIlxuICBcImZvcm1cIlxuICBcImlucHV0XCJcbiAgXCJzZWxlY3RcIlxuICBcInN1Ym1pdFwiXG4gIFwic3dpdGNoXCJcbiAgXCJ0ZXh0XCJcbiAgXCJ0eXBlYWhlYWRcIlxuXVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcuY29mZmVlXG4gKiovIiwiUmVhY3QgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwicmVhY3QvYWRkb25zXCJcbmZyaWdnaW5nQm9vdHN0cmFwICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uL2ZyaWdnaW5nX2Jvb3RzdHJhcC5jb2ZmZWVcIlxuSW5wdXRNaXhpbiAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vLi4vbWl4aW5zL2lucHV0X21peGluLmNvZmZlZVwiXG57ZGl2LCBpbnB1dH0gICAgICAgICAgICAgICAgICA9IFJlYWN0LkRPTVxue3NpemVDbGFzc05hbWVzfSAgICAgICAgICAgICAgPSBmcmlnZ2luZ0Jvb3RzdHJhcFxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuZnJpZ2dpbmdCb290c3RyYXAuU3VibWl0ID0gUmVhY3QuY3JlYXRlQ2xhc3NcblxuICBkaXNwbGF5TmFtZTogJ0ZyaWcuZnJpZ2dpbmdCb290c3RyYXAuU3VibWl0J1xuXG4gIG1peGluczogW0lucHV0TWl4aW5dXG5cbiAgZ2V0RnJpZ2dpbmdQcm9wczogLT5cbiAgICBpbnB1dEh0bWw6XG4gICAgICBwbGFjZWhvbGRlcjogIC0+IEBmcmlnUHJvcHMucGxhY2Vob2xkZXJcbiAgICAgIGRlZmF1bHRWYWx1ZTogLT4gQGZyaWdQcm9wcy5pbml0aWFsVmFsdWVcbiAgICAgIGNsYXNzTmFtZTogICAgLT4gQGZyaWdQcm9wcy5jbGFzc05hbWUgfHwgXCJidG4gYnRuLWRlZmF1bHRcIlxuICAgICAgdHlwZTogICAgICAgICAtPiBAZnJpZ1Byb3BzLmh0bWxJbnB1dFR5cGVcblxuICByZW5kZXI6IC0+XG4gICAgZGl2IGNsYXNzTmFtZTogY3goc2l6ZUNsYXNzTmFtZXMgQGZyaWdQcm9wcyksXG4gICAgICBkaXYgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIixcbiAgICAgICAgaW5wdXQgQGZyaWdQcm9wcy5pbnB1dEh0bWxcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9zdWJtaXQuY29mZmVlXG4gKiovIiwiUmVhY3QgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwicmVhY3QvYWRkb25zXCJcbkZvcm1CdWlsZGVyICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uL2Zvcm1fYnVpbGRlci5jb2ZmZWVcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZyaWdNaXhpbiA9XG4gIGZyaWc6IChwcm9wcywgY2hpbGRyZW4pIC0+XG4gICAgaXNDb2ZmZWVzY3JpcHQgPSAhcHJvcHMuY29udGVudD9cbiAgICBuZXcgRm9ybUJ1aWxkZXIoQCwgcHJvcHMsIGNoaWxkcmVuLCBpc0NvZmZlZXNjcmlwdCkucmVuZGVyKClcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvbWl4aW5zL2ZyaWdfbWl4aW4uY29mZmVlXG4gKiovIiwiUmVhY3QgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwicmVhY3QvYWRkb25zXCJcbmZyaWdnaW5nUHJvcHNNaXhpbiAgICAgICAgICAgID0gcmVxdWlyZSBcIi4vZnJpZ2dpbmdfcHJvcHNfbWl4aW4uY29mZmVlXCJcbmZyaWdIZWxwZXJzICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uL2hlbHBlcnMuY29mZmVlXCJcbmZyaWdWYWxpZGF0aW9ucyAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uL3ZhbGlkYXRpb25zLmNvZmZlZVwiXG57aHVtYW5pemUsIGNsb25lLCBtZXJnZSwgbWFwLCBtYXBPYmosIGlzQ29uZmlnT2JqLCBzZXREZWZhdWx0c30gPSBmcmlnSGVscGVyc1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlucHV0TWl4aW4gPVxuXG4gIG1peGluczogW1xuICAgIGZyaWdnaW5nUHJvcHNNaXhpblxuICBdXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiAtPlxuICAgIEBnZXRGcmlnZ2luZ1ZhbHVlIHx8PSBAZGVmYXVsdEdldEZyaWdnaW5nVmFsdWVcblxuICBjb21wb25lbnREaWRNb3VudDogLT5cbiAgICB2YWwgPSBAZ2V0RnJpZ2dpbmdWYWx1ZSgpXG4gICAgdmFsaWQgPSBAdmFsaWRhdGUodmFsLCBmYWxzZSlcbiAgICBAZnJpZ1Byb3BzLm9uRnJpZ2dpbmdDaGlsZEluaXQ/KEBmcmlnUHJvcHMuZmllbGRLZXksIHZhbCwgdmFsaWQpXG5cbiAgZGVmYXVsdEdldEZyaWdnaW5nVmFsdWU6IC0+XG4gICAgcmVmID0gQHJlZnNbQGZyaWdQcm9wcy5pbnB1dEh0bWwucmVmXVxuICAgIHZhbCA9IGlmIHJlZj9cbiAgICAgIGVsID0gcmVmLmdldERPTU5vZGUoKVxuICAgICAgaWYgZWwudHlwZSA9PSAnY2hlY2tib3gnXG4gICAgICAgIGVsLmNoZWNrZWRcbiAgICAgIGVsc2UgaWYgZWwudHlwZSA9PSAnc2VsZWN0LW11bHRpcGxlJ1xuICAgICAgICAjIFRPRE86IERPIE5PVCBVU0UgSlFVRVJZIElOIEZSSUchXG4gICAgICAgICQoZWwpLnZhbCgpXG4gICAgICBlbHNlXG4gICAgICAgIGVsLnZhbHVlXG4gICAgZWxzZVxuICAgICAgQGZyaWdQcm9wcy5pbml0aWFsVmFsdWVcbiAgICAjIFRoZSB2YWx1ZSBpcyBjYXN0IHRvIGEgc3RyaW5nIHdoZW4gd2UgZ2V0IGl0IGZyb20gRE9NLnZhbHVlLiBMb29rdXBcbiAgICAjIHRoZSBvcmlnaW5hbCB2YWx1ZSBpbiB0aGUgb3B0aW9ucyBsaXN0IGFuZCByZXR1cm4gdGhhdCBpbnN0ZWFkLlxuICAgIGlmIEBmcmlnUHJvcHMub3B0aW9ucz9cbiAgICAgIGZvciBvcHRpb24gaW4gQGZyaWdQcm9wcy5vcHRpb25zXG4gICAgICAgIG9wdGlvbiA9IEBub3JtYWxpemVGcmlnZ2luZ09wdGlvbihvcHRpb24pXG4gICAgICAgIHJldHVybiBvcHRpb24udmFsdWUgaWYgb3B0aW9uLnZhbHVlLnRvU3RyaW5nKCkgPT0gdmFsXG4gICAgcmV0dXJuIHZhbFxuXG4gIG5vcm1hbGl6ZUZyaWdnaW5nT3B0aW9uOiAob3B0cykgLT5cbiAgICByZXR1cm4gdW5kZWZpbmVkIHVubGVzcyBvcHRzP1xuICAgICMgY29udmVydGluZyBvcHRzIGluIHRoZSBmb3JtYXQgb2YgW2tleV0gdG8ga2V5XG4gICAgb3B0cyA9IG9wdHNbMF0gaWYgdHlwZW9mKG9wdHMpID09IFwib2JqZWN0XCIgYW5kIG9wdHMubGVuZ3RoID09IDFcbiAgICAjIGlmIG9wdHMgaXMgaW4gdGhlIGZvcm1hdCBba2V5LCB2YWx1ZV1cbiAgICBpZiB0eXBlb2Yob3B0cykgPT0gXCJvYmplY3RcIiBhbmQgb3B0cy5sZW5ndGggPT0gMlxuICAgICAgdmFsdWU6IG9wdHNbMF1cbiAgICAgIGxhYmVsOiBvcHRzWzFdXG4gICAgIyBpZiBvcHRzIGlzIGluIHRoZSBmb3JtYXQga2V5XG4gICAgZWxzZVxuICAgICAgdmFsdWU6IG9wdHNcbiAgICAgIGxhYmVsOiBvcHRzXG5cbiAgdmFsaWRhdGU6ICh2YWx1ZSA9IEBnZXRGcmlnZ2luZ1ZhbHVlKCksIHJlbmRlckVycm9ycyA9IHRydWUpIC0+XG4gICAgaWYgQGZyaWdQcm9wcy50eXBlID09IFwic3VibWl0XCIgfHwgQGZyaWdQcm9wcy52YWxpZGF0ZT8oKSA9PSBmYWxzZVxuICAgICAgQHNldFN0YXRlIGVycm9yczogdW5kZWZpbmVkXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGVycm9ycyA9IFtdXG4gICAgIyBSdW5uaW5nIGVhY2ggdmFsaWRhdGlvblxuICAgIGZvciBrLCB2YWxpZGF0aW9uT3B0cyBvZiBAZnJpZ1Byb3BzLnZhbGlkYXRpb25zXG4gICAgICBjb250aW51ZSBpZiB2YWxpZGF0aW9uT3B0cyA9PSBmYWxzZSBvciAhdmFsaWRhdGlvbk9wdHM/XG4gICAgICBvcHRzID1cbiAgICAgICAgZGF0YTogICAgICAgQGZyaWdQcm9wcy5kYXRhXG4gICAgICAgIGZpZWxka2V5OiAgIEBmcmlnUHJvcHMuZmllbGRLZXlcbiAgICAgICAgdmFsdWU6ICAgICAgdmFsdWVcbiAgICAgICAgb3B0czogICAgICAgdmFsaWRhdGlvbk9wdHNcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQgZnJpZ1ZhbGlkYXRpb25zW2tdKG9wdHMpIHx8IFtdXG4gICAgIyBJZiB0aGVyZSBhcmUgbm8gZXJyb3JzIHRoZW4gZXJyb3JzIHNob3VsZCBiZSBmYWxzaWVcbiAgICBlcnJvcnMgPSB1bmRlZmluZWQgaWYgZXJyb3JzLmxlbmd0aCA9PSAwXG4gICAgIyBBZGRpbmcgdGhlIGVycm9ycyB0byB0aGUgc3RhdGVcbiAgICBAc2V0U3RhdGUgZXJyb3JzOiBlcnJvcnMgaWYgcmVuZGVyRXJyb3JzXG4gICAgIyBSZXR1cm4gdHJ1ZSBpZiB0aGVyZSBhcmUgbm8gZXJyb3JzXG4gICAgcmV0dXJuICFlcnJvcnM/XG5cbiAgX2ZyaWdPbkNoYW5nZTogLT5cbiAgICByZXR1cm4gaWYgQGZyaWdQcm9wcy50eXBlID09IFwic3VibWl0XCJcbiAgICB2YWx1ZSA9IEBnZXRGcmlnZ2luZ1ZhbHVlKClcbiAgICB2YWxpZCA9IEB2YWxpZGF0ZSB2YWx1ZVxuICAgICMgQ2FsbCB0aGUgZm9ybS1sZXZlbCB1c2VyIHNwZWNpZmllZCBvbkNoYW5nZSBmdW5jdGlvblxuICAgIEBmcmlnUHJvcHMub25GcmlnZ2luZ0NoaWxkQ2hhbmdlPyhAZnJpZ1Byb3BzLmZpZWxkS2V5LCB2YWx1ZSwgdmFsaWQpXG4gICAgIyBDYWxsIHRoZSB1c2VyIHNwZWNpZmllZCBvbkNoYW5nZSBmdW5jdGlvblxuICAgIEBmcmlnUHJvcHMub25DaGFuZ2U/KHZhbHVlLCB2YWxpZClcblxuICBfZnJpZ09uQmx1cjogLT5cbiAgICBAdmFsaWRhdGUoKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9taXhpbnMvaW5wdXRfbWl4aW4uY29mZmVlXG4gKiovIiwiUmVhY3QgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwicmVhY3QvYWRkb25zXCJcbmZyaWdnaW5nUHJvcHNNaXhpbiAgICAgICAgICAgID0gcmVxdWlyZSBcIi4vZnJpZ2dpbmdfcHJvcHNfbWl4aW4uY29mZmVlXCJcbmRzbE1peGluICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4vZHNsX21peGluLmNvZmZlZVwiXG5mcmlnSGVscGVycyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi9oZWxwZXJzLmNvZmZlZVwiXG57bWVyZ2UsIG1hcCwgY2FwaXRhbGl6ZSwgZ2V0VGVtcGxhdGUsIGd1ZXNzVHlwZSwgc2V0RGVmYXVsdHN9ID0gZnJpZ0hlbHBlcnNcblxubW9kdWxlLmV4cG9ydHMgPSBmb3JtTWl4aW4gPVxuXG4gIG1peGluczogW1xuICAgIGZyaWdnaW5nUHJvcHNNaXhpblxuICAgIGRzbE1peGluXG4gIF1cblxuICBjb21wb25lbnRXaWxsTW91bnQ6IC0+XG4gICAgQF9mcmlnQ2hhbmdlcyA9IHt9XG4gICAgQF9mcmlnRm9ybURhdGEgPSB7fVxuICAgIEBfZnJpZ1ZhbGlkRm9ybURhdGEgPSB7fVxuXG4gIGZyaWdnaW5nQ2hpbGRyZW46IC0+XG4gICAgQHByb3BzLmNiIEBmcmlnRFNMKClcblxuICB2YWxpZGF0ZTogLT5cbiAgICB2YWxpZCA9IHRydWVcbiAgICBmb3Iga2V5LCBpbnB1dCBvZiBAcmVmc1xuICAgICAgdmFsaWQgJj0gaW5wdXQudmFsaWRhdGUoKSBpZiBrZXkubWF0Y2goL0lucHV0JC8pPyBhbmQgaW5wdXQudmFsaWRhdGU/XG4gICAgcmV0dXJuIHZhbGlkXG5cbiAgZ2V0RGF0YTogLT5cbiAgICBAX2ZyaWdGb3JtRGF0YVxuXG4gIGdldFZhbGlkRGF0YTogLT5cbiAgICBAX2ZyaWdWYWxpZEZvcm1EYXRhXG5cbiAgaW5pdGlhbFZhbHVlczogLT5cbiAgICAjIElmIHRoZSBkYXRhIGlzIGEgUmVhY3RMaW5rIGV4dHJhY3QgaXRzIHZhbHVlXG4gICAgaWYgQGZyaWdQcm9wcy5kYXRhLnJlcXVlc3RDaGFuZ2U/XG4gICAgICBAZnJpZ1Byb3BzLmRhdGEudmFsdWVcbiAgICBlbHNlXG4gICAgICBAZnJpZ1Byb3BzLmRhdGFcblxuICBfb25GcmlnZ2luZ0NoaWxkSW5pdDogKGssIHYsIHZhbGlkKSAtPlxuICAgIEBfZnJpZ0Zvcm1EYXRhW2tdID0gdlxuICAgIEBfZnJpZ1ZhbGlkRm9ybURhdGFba10gPSB2XG5cbiAgX29uRnJpZ2dpbmdDaGlsZENoYW5nZTogKGssIHYsIHZhbGlkKSAtPlxuICAgIEBfZnJpZ0Zvcm1EYXRhW2tdID0gdlxuICAgIGlmIHZhbGlkXG4gICAgICBAX2ZyaWdWYWxpZEZvcm1EYXRhW2tdID0gdlxuICAgIGVsc2VcbiAgICAgIGRlbGV0ZSBAX2ZyaWdWYWxpZEZvcm1EYXRhW2tdXG4gICAgIyBjbG9uZSB0aGUgZm9ybSBkYXRhIG9iamVjdCB0byBhdm9pZCB0aGUgc2l0dWF0aW9uIHdoZXJlIHN1YnNlcXVlbnQgZm9ybVxuICAgICMgdXBkYXRlcyB1bmV4cGVjdGVkbHkgbXV0YXRlIHRoZSBkYXRhIG9iamVjdFxuICAgIEBmcmlnUHJvcHMub25DaGFuZ2U/KEBfZnJpZ0Zvcm1EYXRhKVxuICAgIGlmIHZhbGlkXG4gICAgICBAZnJpZ1Byb3BzLm9uVmFsaWRDaGFuZ2U/KEBfZnJpZ0Zvcm1EYXRhKVxuICAgICMgVXBkYXRlIHRoZSBSZWFjdExpbmsgd2l0aCB0aGUgbWVyZ2VkIGNvbWJpbmF0aW9uIG9mIGZvcm0gZGF0YSBhbmQgdGhlXG4gICAgIyBpbml0aWFsIHZhbHVlcyBwYXNzZWQgaW4gdG8gdGhlIGZvcm0gKGFsbG93aW5nIG5vbi1mb3JtIGRhdGEgdG8gYmVcbiAgICAjIHBlcnNpc3RlZClcbiAgICByZWFjdExpbmtEYXRhID0gbWVyZ2Uge30sIEBpbml0aWFsVmFsdWVzKCksIEBfZnJpZ0Zvcm1EYXRhXG4gICAgQGZyaWdQcm9wcy5kYXRhLnJlcXVlc3RDaGFuZ2U/KHJlYWN0TGlua0RhdGEpXG5cbiAgX2ZyaWdPblN1Ym1pdDogKGUpIC0+XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuIHVubGVzcyBAdmFsaWRhdGUoKVxuICAgIEBmcmlnUHJvcHMub25TdWJtaXQ/KGUsIEBfZnJpZ0Zvcm1EYXRhKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9taXhpbnMvZm9ybV9taXhpbi5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHR5cGVNYXBwaW5nID1cbiAgZm9ybTogICAgICAgICB7dGVtcGxhdGU6IFwiZm9ybVwifVxuICBlcnJvcnM6ICAgICAgIHt0ZW1wbGF0ZTogXCJlcnJvcnNcIn1cbiAgc3VibWl0OiAgICAgICB7dGVtcGxhdGU6IFwic3VibWl0XCIsICAgaHRtbElucHV0VHlwZTogXCJzdWJtaXRcIn1cbiAgc3RyaW5nOiAgICAgICB7dGVtcGxhdGU6IFwiaW5wdXRcIiwgICAgaHRtbElucHV0VHlwZTogXCJzdHJpbmdcIn1cbiAgcGFzc3dvcmQ6ICAgICB7dGVtcGxhdGU6IFwiaW5wdXRcIiwgICAgaHRtbElucHV0VHlwZTogXCJwYXNzd29yZFwifVxuICBlbWFpbDogICAgICAgIHt0ZW1wbGF0ZTogXCJpbnB1dFwiLCAgICBodG1sSW5wdXRUeXBlOiBcImVtYWlsXCJ9XG4gIHVybDogICAgICAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwidXJsXCJ9XG4gIHRlbDogICAgICAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwidGVsXCJ9XG4gIHNlYXJjaDogICAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwic2VhcmNoXCJ9XG4gIHV1aWQ6ICAgICAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwidGV4dFwifVxuICBib29sZWFuOiAgICAgIHt0ZW1wbGF0ZTogXCJjaGVja2JveFwiLCBodG1sSW5wdXRUeXBlOiBcImNoZWNrYm94XCJ9XG4gIHRleHQ6ICAgICAgICAge3RlbXBsYXRlOiBcInRleHRcIn1cbiAgZmlsZTogICAgICAgICB7dGVtcGxhdGU6IFwiZmlsZVwiLCAgICAgaHRtbElucHV0VHlwZTogXCJmaWxlXCJ9XG4gIGhpZGRlbjogICAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwiaGlkZGVuXCJ9XG4gIGludGVnZXI6ICAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwibnVtYmVyXCJ9XG4gIGZsb2F0OiAgICAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwibnVtYmVyXCJ9XG4gIGRlY2ltYWw6ICAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwibnVtYmVyXCJ9XG4gIHJhbmdlOiAgICAgICAge3RlbXBsYXRlOiBcImlucHV0XCIsICAgIGh0bWxJbnB1dFR5cGU6IFwicmFuZ2VcIn1cbiAgIyBkYXRldGltZTogICAgIHt0ZW1wbGF0ZTogXCJkYXRldGltZVwifVxuICAjIGRhdGU6ICAgICAgICAge3RlbXBsYXRlOiBcImRhdGV0aW1lXCJ9XG4gICMgdGltZTogICAgICAgICB7dGVtcGxhdGU6IFwiZGF0ZXRpbWVcIn1cbiAgc2VsZWN0OiAgICAgICB7dGVtcGxhdGU6IFwic2VsZWN0XCJ9XG4gIG11bHRpc2VsZWN0OiAge3RlbXBsYXRlOiBcInNlbGVjdFwifVxuICB0eXBlYWhlYWQ6ICAgIHt0ZW1wbGF0ZTogXCJ0eXBlYWhlYWRcIn1cbiAgIyByYWRpb0J1dHRvbnM6IHt0ZW1wbGF0ZTogXCJyYWRpb0J1dHRvbnNcIn1cbiAgIyBjaGVja0JveGVzOiAgIHt0ZW1wbGF0ZTogXCJjaGVja0JveGVzXCJ9XG4gICMgY291bnRyeTogICAgICB7dGVtcGxhdGU6IFwiY291bnRyeVwifVxuICAjIHRpbWVab25lOiAgICAge3RlbXBsYXRlOiBcInRpbWVab25lXCJ9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3R5cGVfbWFwcGluZy5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRpb24gPVxuICByZXF1aXJlZDogKHtrZXksIHZhbHVlLCBvcHRzLCBkYXRhfSkgLT5cbiAgICByZXR1cm4gdW5kZWZpbmVkIGlmIHZhbHVlPyBhbmQgdmFsdWUgIT0gXCJcIlxuICAgIFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZC5cIlxuXG4gIG1pbjogKHtrZXksIHZhbHVlLCBvcHRzLCBkYXRhfSkgLT5cbiAgICByZXR1cm4gdW5kZWZpbmVkIGlmIHZhbHVlID49IG9wdHMgb3IgIXZhbHVlPyBvciB2YWx1ZSA9PSBcIlwiXG4gICAgXCJWYWx1ZSBjYW5ub3QgYmUgbGVzcyB0aGFuICN7b3B0c31cIlxuXG4gIG1heDogKHtrZXksIHZhbHVlLCBvcHRzLCBkYXRhfSkgLT5cbiAgICByZXR1cm4gdW5kZWZpbmVkIGlmIHZhbHVlIDw9IG9wdHMgb3IgIXZhbHVlPyBvciB2YWx1ZSA9PSBcIlwiXG4gICAgXCJWYWx1ZSBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuICN7b3B0c31cIlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy92YWxpZGF0aW9ucy5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmFkZG9ucztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3QuYWRkb25zXCJcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZnJpZ2dpbmdCb290c3RyYXAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vZnJpZ2dpbmdfYm9vdHN0cmFwLmNvZmZlZVwiXG5JbnB1dE1peGluICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9taXhpbnMvaW5wdXRfbWl4aW4uY29mZmVlXCJcbntlcnJvckxpc3QsIHNpemVDbGFzc05hbWVzfSAgID0gZnJpZ2dpbmdCb290c3RyYXBcbntkaXYsIGxhYmVsLCBpbnB1dH0gICAgICAgICAgID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5mcmlnZ2luZ0Jvb3RzdHJhcC5DaGVja2JveCA9IFJlYWN0LmNyZWF0ZUNsYXNzXG5cbiAgZGlzcGxheU5hbWU6ICdGcmlnLmZyaWdnaW5nQm9vdHN0cmFwLkNoZWNrYm94J1xuXG4gIG1peGluczogW0lucHV0TWl4aW5dXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIGVycm9yczogdW5kZWZpbmVkXG4gICAgZWRpdGVkOiBmYWxzZVxuXG4gIGdldEZyaWdnaW5nUHJvcHM6ICAtPlxuICAgIGlucHV0SHRtbDpcbiAgICAgIHR5cGU6IFwiY2hlY2tib3hcIlxuICAgICAgdmFsdWU6IEBmcmlnUHJvcHMua2V5XG4gICAgICBjaGVja2VkOiAtPiBAZnJpZ1Byb3BzLmluaXRpYWxWYWx1ZVxuXG4gIF9jeDogLT5cbiAgICBjeFxuICAgICAgXCJjaGVja2JveFwiOiB0cnVlXG4gICAgICBcImhhcy1lcnJvclwiOiBAc3RhdGUuZXJyb3JzP1xuICAgICAgXCJoYXMtc3VjY2Vzc1wiOiBAc3RhdGUuZWRpdGVkICYmICFAc3RhdGUuZXJyb3JzP1xuXG4gIHJlbmRlcjogLT5cbiAgICBkaXYgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIixcbiAgICAgIGRpdiBjbGFzc05hbWU6IGN4KHNpemVDbGFzc05hbWVzIEBmcmlnUHJvcHMpLFxuICAgICAgICBkaXYgY2xhc3NOYW1lOiBAX2N4KCksXG4gICAgICAgICAgbGFiZWwgQGZyaWdQcm9wcy5sYWJlbEh0bWwsXG4gICAgICAgICAgICBpbnB1dCBAZnJpZ1Byb3BzLmlucHV0SHRtbFxuICAgICAgICAgICAgXCIgI3tAZnJpZ1Byb3BzLmxhYmVsfVwiIGlmIEBmcmlnUHJvcHMubGFiZWxcbiAgICAgICAgICBlcnJvckxpc3QgQHN0YXRlLmVycm9ycyBpZiBAc3RhdGU/LmVycm9ycz9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9jaGVja2JveC5jb2ZmZWVcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZnJpZ2dpbmdCb290c3RyYXAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vZnJpZ2dpbmdfYm9vdHN0cmFwLmNvZmZlZVwiXG57ZXJyb3JMaXN0fSAgICAgICAgICAgICAgICAgICA9IGZyaWdnaW5nQm9vdHN0cmFwXG57ZGl2LCBzcGFuLCBpfSAgICAgICAgICAgICAgICA9IFJlYWN0LkRPTVxuXG5mcmlnZ2luZ0Jvb3RzdHJhcC5FcnJvcnMgPSBSZWFjdC5jcmVhdGVDbGFzc1xuXG4gIGRpc3BsYXlOYW1lOiAnRnJpZy5mcmlnZ2luZ0Jvb3RzdHJhcC5FcnJvcnMnXG5cbiAgcmVuZGVyOiAtPlxuICAgIGRpdiB7Y2xhc3NOYW1lOiBcInJvd1wifSxcbiAgICAgIF8ubWFwIEBwcm9wcy5lcnJvcnMsIChlcnJvcikgLT5cbiAgICAgICAgZGl2IHtjbGFzc05hbWU6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTEyXCJ9LFxuICAgICAgICAgIGRpdiBjbGFzc05hbWU6IFwiZnJpZ2dpbmctYm9vdHN0cmFwLWVycm9yXCIsIHJlZjogXCJlcnJvci0je2Vycm9yfVwiLFxuICAgICAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJhbGVydCBhbGVydC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgaSBjbGFzc05hbWU6XCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIlxuICAgICAgICAgICAgICBzcGFuIGNsYXNzTmFtZTogXCJzci1vbmx5XCIsIFwiRXJyb3I6XCJcbiAgICAgICAgICAgICAgXCIgI3tlcnJvcn1cIlxuICAgICAgICAgICAgICBkaXYgY2xhc3NOYW1lOiBcImNsZWFyZml4XCJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9lcnJvcnMuY29mZmVlXG4gKiovIiwiUmVhY3QgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwicmVhY3QvYWRkb25zXCJcbmZyaWdnaW5nQm9vdHN0cmFwICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uL2ZyaWdnaW5nX2Jvb3RzdHJhcC5jb2ZmZWVcIlxuSW5wdXRNaXhpbiAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vLi4vbWl4aW5zL2lucHV0X21peGluLmNvZmZlZVwiXG57aHVtYW5pemUsIGNsb25lLCBtZXJnZSwgbWFwfSA9IHJlcXVpcmUgXCIuLi8uLi9oZWxwZXJzLmNvZmZlZVwiXG57ZXJyb3JMaXN0LCBzaXplQ2xhc3NOYW1lc30gICA9IGZyaWdnaW5nQm9vdHN0cmFwXG57ZGl2LCBsYWJlbCwgaW5wdXQsIGltZ30gICAgICA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuZnJpZ2dpbmdCb290c3RyYXAuRmlsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzXG5cbiAgZGlzcGxheU5hbWU6ICdGcmlnLmZyaWdnaW5nQm9vdHN0cmFwLkZpbGVJbnB1dCdcblxuICBtaXhpbnM6IFtJbnB1dE1peGluXVxuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICBlcnJvcnM6IHVuZGVmaW5lZFxuICAgIGVkaXRlZDogZmFsc2VcblxuICBnZXRGcmlnZ2luZ1Byb3BzOiAtPlxuICAgICMgQm9vdHN0cmFwIGlucHV0IGFkZG9uIHRleHRzXG4gICAgcHJlZml4OiAgICAgICAgICB1bmRlZmluZWRcbiAgICBzdWZmaXg6ICAgICAgICAgIHVuZGVmaW5lZFxuICAgIGlucHV0SHRtbDpcbiAgICAgIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIlxuICAgICAgcGxhY2Vob2xkZXI6IC0+IEBmcmlnUHJvcHMucGxhY2Vob2xkZXJcbiAgICAgIHR5cGU6IC0+ICdmaWxlJ1xuICAgICAgYWNjZXB0OiAtPiAnaW1hZ2UvcG5nLGltYWdlL2dpZixpbWFnZS9qcGVnJ1xuICAgICAgZGVmYXVsdFZhbHVlOiAtPiBAZnJpZ1Byb3BzLmluaXRpYWxWYWx1ZVxuXG4gIGNvbXBvbmVudERpZE1vdW50OiAtPlxuICAgIEBzZXRTdGF0ZSBpbWFnZTogQGZyaWdQcm9wcy5pbml0aWFsVmFsdWVcblxuICBfY3g6IC0+XG4gICAgY3hcbiAgICAgIFwiaGFzLWVycm9yXCI6IEBzdGF0ZS5lcnJvcnM/XG4gICAgICBcImhhcy1zdWNjZXNzXCI6IEBzdGF0ZS5lZGl0ZWQgJiYgIUBzdGF0ZS5lcnJvcnM/XG5cbiAgX2lucHV0OiAtPlxuICAgIGlucHV0IEBmcmlnUHJvcHMuaW5wdXRIdG1sXG5cbiAgX2xvYWRGaWxlOiAtPlxuICAgIEBmUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIEBmUmVhZGVyLm9ubG9hZGVuZCA9IEBfb25GaWxlTG9hZFxuICAgIEBmUmVhZGVyLnJlYWRBc0RhdGFVUkwgQHJlZnNbQGZyaWdQcm9wcy5pbnB1dEh0bWwucmVmXS5nZXRET01Ob2RlKCkuZmlsZXNbMF1cblxuICBfb25GaWxlTG9hZDogLT5cbiAgICB2ID0gXy5jbG9uZSBAZlJlYWRlci5yZXN1bHRcbiAgICBAc2V0U3RhdGUgaW1hZ2U6IHZcbiAgICBAZ2V0RnJpZ2dpbmdWYWx1ZSA9ID0+IHZcbiAgICBAZnJpZ1Byb3BzLm9uRnJpZ2dpbmdDaGlsZENoYW5nZT8gJ2ltYWdlJywgdiwgdHJ1ZVxuXG4gIHJlbmRlcjogLT5cbiAgICBAZnJpZ1Byb3BzLmlucHV0SHRtbC5vbkNoYW5nZSA9IEBfbG9hZEZpbGVcbiAgICBkaXYgY2xhc3NOYW1lOiBjeChzaXplQ2xhc3NOYW1lcyBAZnJpZ1Byb3BzKSxcbiAgICAgIGRpdiBjbGFzc05hbWU6IEBfY3goKSxcbiAgICAgICAgbGFiZWwgQGZyaWdQcm9wcy5sYWJlbEh0bWwsIEBmcmlnUHJvcHMubGFiZWwgaWYgQGZyaWdQcm9wcy5sYWJlbFxuICAgICAgICBkaXYgY2xhc3NOYW1lOiBcImNvbnRyb2xzXCIsXG4gICAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJpbWFnZS11cGxvYWRcIixcbiAgICAgICAgICAgIGlmIEBzdGF0ZS5pbWFnZVxuICAgICAgICAgICAgICBpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwidGh1bWJuYWlsXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTI1Jywgd2lkdGg6ICcxMjUnLFxuICAgICAgICAgICAgICAgIHNyYzogQHN0YXRlLmltYWdlXG4gICAgICAgICAgICBpZiBAZnJpZ1Byb3BzLnByZWZpeD8gfHwgQGZyaWdQcm9wcy5zdWZmaXg/XG4gICAgICAgICAgICAgIGRpdiBjbGFzc05hbWU6IFwiaW5wdXQtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICBpZiBAZnJpZ1Byb3BzLnByZWZpeFxuICAgICAgICAgICAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJpbnB1dC1ncm91cC1hZGRvblwiLCBAZnJpZ1Byb3BzLnByZWZpeFxuICAgICAgICAgICAgICAgIEBfaW5wdXQoKVxuICAgICAgICAgICAgICAgIGlmIEBmcmlnUHJvcHMuc3VmZml4XG4gICAgICAgICAgICAgICAgICBkaXYgY2xhc3NOYW1lOiBcImlucHV0LWdyb3VwLWFkZG9uXCIsIEBmcmlnUHJvcHMuc3VmZml4XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIEBfaW5wdXQoKVxuICAgICAgICBlcnJvckxpc3QgQHN0YXRlLmVycm9ycyBpZiBAc3RhdGU/LmVycm9ycz9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9maWxlLmNvZmZlZVxuICoqLyIsIlJlYWN0ICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcInJlYWN0L2FkZG9uc1wiXG5mcmlnZ2luZ0Jvb3RzdHJhcCAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi9mcmlnZ2luZ19ib290c3RyYXAuY29mZmVlXCJcbkZvcm1NaXhpbiAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uLy4uL21peGlucy9mb3JtX21peGluLmNvZmZlZVwiXG57ZXJyb3JMaXN0fSAgICAgICAgICAgICAgICAgICA9IGZyaWdnaW5nQm9vdHN0cmFwXG57ZGl2LCBmb3JtLCBsYWJlbCwgaW5wdXR9ICAgICA9IFJlYWN0LkRPTVxuXG5mcmlnZ2luZ0Jvb3RzdHJhcC5Gb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3NcblxuICBkaXNwbGF5TmFtZTogJ0ZyaWcuZnJpZ2dpbmdCb290c3RyYXAuRm9ybSdcblxuICBtaXhpbnM6IFtGb3JtTWl4aW5dXG5cbiAgZ2V0RnJpZ2dpbmdQcm9wczogLT5cbiAgICBmb3JtSHRtbDpcbiAgICAgIGNsYXNzTmFtZTogLT4gXCJmb3JtLSN7QGZyaWdQcm9wcy5sYXlvdXR9XCIgaWYgQGZyaWdQcm9wcy5sYXlvdXRcblxuICByZW5kZXI6IC0+XG4gICAgZm9ybSBAZnJpZ1Byb3BzLmZvcm1IdG1sLCBAZnJpZ2dpbmdDaGlsZHJlbigpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAvZm9ybS5jb2ZmZWVcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZnJpZ2dpbmdCb290c3RyYXAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vZnJpZ2dpbmdfYm9vdHN0cmFwLmNvZmZlZVwiXG5mcmlnSGVscGVycyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9oZWxwZXJzLmNvZmZlZVwiXG5JbnB1dE1peGluICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9taXhpbnMvaW5wdXRfbWl4aW4uY29mZmVlXCJcbntlcnJvckxpc3QsIHNpemVDbGFzc05hbWVzfSAgID0gZnJpZ2dpbmdCb290c3RyYXBcbntodW1hbml6ZSwgY2xvbmUsIG1lcmdlLCBtYXB9ID0gZnJpZ0hlbHBlcnNcbntkaXYsIGxhYmVsLCBpbnB1dH0gICAgICAgICAgID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5mcmlnZ2luZ0Jvb3RzdHJhcC5JbnB1dCA9IFJlYWN0LmNyZWF0ZUNsYXNzXG5cbiAgZGlzcGxheU5hbWU6ICdGcmlnLmZyaWdnaW5nQm9vdHN0cmFwLklucHV0J1xuXG4gIG1peGluczogW0lucHV0TWl4aW5dXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIGVycm9yczogdW5kZWZpbmVkXG4gICAgZWRpdGVkOiBmYWxzZVxuXG4gIGdldEZyaWdnaW5nUHJvcHM6IC0+XG4gICAgIyBCb290c3RyYXAgaW5wdXQgYWRkb24gdGV4dHNcbiAgICBwcmVmaXg6ICAgICAgICAgIHVuZGVmaW5lZFxuICAgIHN1ZmZpeDogICAgICAgICAgdW5kZWZpbmVkXG5cbiAgICBpbnB1dEh0bWw6XG4gICAgICBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCJcbiAgICAgIHBsYWNlaG9sZGVyOiAtPiBAZnJpZ1Byb3BzLnBsYWNlaG9sZGVyXG4gICAgICB0eXBlOiAtPiBAZnJpZ1Byb3BzLmh0bWxJbnB1dFR5cGVcbiAgICAgIGRlZmF1bHRWYWx1ZTogLT4gQGZyaWdQcm9wcy5pbml0aWFsVmFsdWVcblxuICBfY3g6IC0+XG4gICAgY3hcbiAgICAgIFwiZm9ybS1ncm91cFwiOiB0cnVlXG4gICAgICBcImhhcy1lcnJvclwiOiBAc3RhdGUuZXJyb3JzP1xuICAgICAgXCJoYXMtc3VjY2Vzc1wiOiBAc3RhdGUuZWRpdGVkICYmICFAc3RhdGUuZXJyb3JzP1xuXG4gIF9pbnB1dDogLT5cbiAgICBpbnB1dCBAZnJpZ1Byb3BzLmlucHV0SHRtbFxuXG4gIHJlbmRlcjogLT5cbiAgICBkaXYgY2xhc3NOYW1lOiBjeChzaXplQ2xhc3NOYW1lcyBAZnJpZ1Byb3BzKSxcbiAgICAgIGRpdiBjbGFzc05hbWU6IEBfY3goKSxcbiAgICAgICAgbGFiZWwgQGZyaWdQcm9wcy5sYWJlbEh0bWwsIEBmcmlnUHJvcHMubGFiZWwgaWYgQGZyaWdQcm9wcy5sYWJlbFxuICAgICAgICBkaXYgY2xhc3NOYW1lOiBcImNvbnRyb2xzXCIsXG4gICAgICAgICAgaWYgQGZyaWdQcm9wcy5wcmVmaXg/IHx8IEBmcmlnUHJvcHMuc3VmZml4P1xuICAgICAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJpbnB1dC1ncm91cFwiLFxuICAgICAgICAgICAgICBpZiBAZnJpZ1Byb3BzLnByZWZpeFxuICAgICAgICAgICAgICAgIGRpdiBjbGFzc05hbWU6IFwiaW5wdXQtZ3JvdXAtYWRkb25cIiwgQGZyaWdQcm9wcy5wcmVmaXhcbiAgICAgICAgICAgICAgQF9pbnB1dCgpXG4gICAgICAgICAgICAgIGlmIEBmcmlnUHJvcHMuc3VmZml4XG4gICAgICAgICAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJpbnB1dC1ncm91cC1hZGRvblwiLCBAZnJpZ1Byb3BzLnN1ZmZpeFxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIEBfaW5wdXQoKVxuICAgICAgICBlcnJvckxpc3QgQHN0YXRlLmVycm9ycyBpZiBAc3RhdGU/LmVycm9ycz9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9pbnB1dC5jb2ZmZWVcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZnJpZ2dpbmdCb290c3RyYXAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vZnJpZ2dpbmdfYm9vdHN0cmFwLmNvZmZlZVwiXG5mcmlnSGVscGVycyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9oZWxwZXJzLmNvZmZlZVwiXG5JbnB1dE1peGluICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9taXhpbnMvaW5wdXRfbWl4aW4uY29mZmVlXCJcbntlcnJvckxpc3QsIHNpemVDbGFzc05hbWVzfSAgID0gZnJpZ2dpbmdCb290c3RyYXBcbntodW1hbml6ZSwgY2xvbmUsIG1lcmdlLCBtYXB9ID0gZnJpZ0hlbHBlcnNcbntkaXYsIGxhYmVsLCBzZWxlY3QsIG9wdGlvbn0gID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG5mcmlnZ2luZ0Jvb3RzdHJhcC5TZWxlY3QgPSBSZWFjdC5jcmVhdGVDbGFzc1xuXG4gIGRpc3BsYXlOYW1lOiAnRnJpZy5mcmlnZ2luZ0Jvb3RzdHJhcC5TZWxlY3QnXG5cbiAgbWl4aW5zOiBbSW5wdXRNaXhpbl1cblxuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgZXJyb3JzOiB1bmRlZmluZWRcbiAgICBlZGl0ZWQ6IGZhbHNlXG5cbiAgZ2V0RnJpZ2dpbmdQcm9wczogLT5cbiAgICBpbnB1dEh0bWw6XG4gICAgICBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCJcbiAgICAgIGRlZmF1bHRWYWx1ZTogLT4gQGZyaWdQcm9wcy5pbml0aWFsVmFsdWVcbiAgICBsYWJlbEh0bWw6XG4gICAgICBjbGFzc05hbWU6IFwiXCJcblxuICBfY3g6IC0+XG4gICAgY3hcbiAgICAgIFwiZm9ybS1ncm91cFwiOiB0cnVlXG4gICAgICBcImhhcy1lcnJvclwiOiBAc3RhdGUuZXJyb3JzP1xuICAgICAgXCJoYXMtc3VjY2Vzc1wiOiBAc3RhdGUuZWRpdGVkICYmICFAc3RhdGUuZXJyb3JzP1xuXG4gIF9zZWxlY3RPcHRpb246IChvcHRzKSAtPlxuICAgIG9wdHMgPSBAbm9ybWFsaXplRnJpZ2dpbmdPcHRpb24gb3B0c1xuICAgIG9wdGlvbiB2YWx1ZTogb3B0cy52YWx1ZSwgb3B0cy5sYWJlbFxuXG4gIHJlbmRlcjogLT5cbiAgICBkaXYgY2xhc3NOYW1lOiBjeChzaXplQ2xhc3NOYW1lcyBAcHJvcHMpLFxuICAgICAgZGl2IGNsYXNzTmFtZTogQF9jeCgpLFxuICAgICAgICBsYWJlbCBAZnJpZ1Byb3BzLmxhYmVsSHRtbCwgQGZyaWdQcm9wcy5sYWJlbCBpZiBAZnJpZ1Byb3BzLmxhYmVsXG4gICAgICAgIGRpdiBjbGFzc05hbWU6IFwiY29udHJvbHNcIixcbiAgICAgICAgICBzZWxlY3QgQGZyaWdQcm9wcy5pbnB1dEh0bWwsXG4gICAgICAgICAgICBtYXAgQGZyaWdQcm9wcy5vcHRpb25zLCBAX3NlbGVjdE9wdGlvblxuICAgICAgICBlcnJvckxpc3QgQHN0YXRlLmVycm9ycyBpZiBAc3RhdGU/LmVycm9ycz9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9zZWxlY3QuY29mZmVlXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL2NoZWNrYm94LmNvZmZlZVwiOiA4LFxuXHRcIi4vZXJyb3JzLmNvZmZlZVwiOiA5LFxuXHRcIi4vZmlsZS5jb2ZmZWVcIjogMTAsXG5cdFwiLi9mb3JtLmNvZmZlZVwiOiAxMSxcblx0XCIuL2lucHV0LmNvZmZlZVwiOiAxMixcblx0XCIuL3NlbGVjdC5jb2ZmZWVcIjogMTMsXG5cdFwiLi9zdWJtaXQuY29mZmVlXCI6IDEsXG5cdFwiLi9zd2l0Y2guY29mZmVlXCI6IDE1LFxuXHRcIi4vdGV4dC5jb2ZmZWVcIjogMTYsXG5cdFwiLi90eXBlYWhlYWQuY29mZmVlXCI6IDE3XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDE0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy9mcmlnZ2luZ19ib290c3RyYXAgXlxcLlxcLy4qXFwuY29mZmVlJFxuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZnJpZ2dpbmdCb290c3RyYXAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vZnJpZ2dpbmdfYm9vdHN0cmFwLmNvZmZlZVwiXG5mcmlnSGVscGVycyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9oZWxwZXJzLmNvZmZlZVwiXG5JbnB1dE1peGluICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi8uLi9taXhpbnMvaW5wdXRfbWl4aW4uY29mZmVlXCJcbntlcnJvckxpc3QsIHNpemVDbGFzc05hbWVzfSAgID0gZnJpZ2dpbmdCb290c3RyYXBcbntodW1hbml6ZSwgY2xvbmUsIG1lcmdlLCBtYXB9ID0gZnJpZ0hlbHBlcnNcbntkaXYsIHNwYW4sIGlucHV0LCBsYWJlbH0gICAgID0gUmVhY3QuRE9NXG5jeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldFxuXG4jIEV4YW1wbGUgMSkgVXNpbmcgYSBzd2l0Y2ggZm9yIG9uZSBpbnB1dDpcbiNcbiMgICBkYXRhID0gYWxsSXNXZWxsOiB0cnVlXG4jXG4jICAgQGZyaWcgcmVmOiBcImV4MVwiLCBkYXRhOiBkYXRhIC0+XG4jICAgICBmLmlucHV0IFwiYWxsSXNXZWxsXCIsIHRlbXBsYXRlOiBcInN3aXRjaFwiXG5cbiMgRXhhbXBsZSAyKSBVc2luZyBzd2l0Y2hlcyBhcyB0aGUgZGVmYXVsdCBmb3IgYWxsIGJvb2xlYW4gaW5wdXRzIGluIGEgZm9ybTpcbiNcbiMgICBkYXRhID0gYWxsSXNXZWxsOiB0cnVlXG4jXG4jICAgQGZyaWcgcmVmOiBcImV4MlwiLCBkYXRhOiBkYXRhLCB0eXBlTWFwcGluZzoge2Jvb2xlYW46IFwic3dpdGNoXCJ9LCAtPlxuIyAgICAgZi5pbnB1dCBcImFsbGlzV2VsbFwiXG5cbiMgRXhhbXBsZSAzKSBVc2luZyBzd2l0Y2hlcyBhcyB0aGUgZGVmYXVsdCBmb3IgYWxsIGJvb2xlYW4gaW5wdXRzIGluIGFsbCBmb3JtczpcbiNcbiMgICBGcmlnLnR5cGVNYXBwaW5nLmJvb2xlYW4udGVtcGxhdGUgPSBcInN3aXRjaFwiXG4jXG4jICAgZGF0YSA9IGFsbElzV2VsbDogdHJ1ZVxuI1xuIyAgIEBmcmlnIHJlZjogXCJleDJcIiwgZGF0YTogZGF0YSwgLT5cbiMgICAgIGYuaW5wdXQgXCJhbGxpc1dlbGxcIlxuXG4jIFRoaXMgb3B0aW9uYWwgYWRkLW9uIGNvbXBvbmVudCBkZXBlbmRzIG9uIEJvb3RzdHJhcFN3aXRjaCBhbmQgalF1ZXJ5XG5mcmlnZ2luZ0Jvb3RzdHJhcC5Td2l0Y2ggPSBSZWFjdC5jcmVhdGVDbGFzc1xuXG4gIGRpc3BsYXlOYW1lOiAnRnJpZy5mcmlnZ2luZ0Jvb3RzdHJhcC5Td2l0Y2gnXG5cbiAgbWl4aW5zOiBbSW5wdXRNaXhpbl1cblxuICBnZXRGcmlnZ2luZ1Byb3BzOiAtPlxuICAgIGhhbmRsZVdpZHRoOiAgICAgdW5kZWZpbmVkXG4gICAgaW5wdXRIdG1sOlxuICAgICAgY2xhc3NOYW1lOiAgICAgXCJzd2l0Y2hcIlxuICAgICAgdHlwZTogICAgICAgICAgXCJjaGVja2JveFwiXG4gICAgb2ZmQ29sb3I6ICAgICAgICB1bmRlZmluZWRcbiAgICBvZmZUZXh0OiAgICAgICAgIHVuZGVmaW5lZFxuICAgIG9mZlZhbHVlOiAgICAgICAgZmFsc2VcbiAgICBvbkNvbG9yOiAgICAgICAgIFwic3VjY2Vzc1wiXG4gICAgb25UZXh0OiAgICAgICAgICB1bmRlZmluZWRcbiAgICBvblZhbHVlOiAgICAgICAgIHRydWVcblxuICBjb21wb25lbnREaWRNb3VudDogLT5cbiAgICAjIGdldCBpbml0aWFsIHN0YXRlIChib29sZWFuKSBieSBjaGVja2luZyB3aGV0aGVyIHRoZSBpbml0aWFsVmFsdWVcbiAgICAjIGlzIHRoZSBzYW1lIGFzIHRoZSBvblZhbHVlL29mZlZhbHVlICgtPiB0cnVlL2ZhbHNlKSBvZiB0aGUgc3dpdGNoXG4gICAgQF8kZWwoKS5ib290c3RyYXBTd2l0Y2hcbiAgICAgIGRpc2FibGVkOiBAZnJpZ1Byb3BzLmRpc2FibGVkXG4gICAgICBoYW5kbGVXaWR0aDogQGZyaWdQcm9wcy5oYW5kbGVXaWR0aFxuICAgICAgb2ZmQ29sb3I6IEBmcmlnUHJvcHMub2ZmQ29sb3JcbiAgICAgIG9mZlRleHQ6IEBmcmlnUHJvcHMub2ZmVGV4dFxuICAgICAgb25Db2xvcjogQGZyaWdQcm9wcy5vbkNvbG9yXG4gICAgICBvblRleHQ6IEBmcmlnUHJvcHMub25UZXh0XG4gICAgICBzaXplOiBcInNtYWxsXCJcbiAgICAgIHN0YXRlOiBAX2dldEJvb2xlYW5WYWwoKVxuICAgICAgb25Td2l0Y2hDaGFuZ2U6IEBfb25Td2l0Y2hDaGFuZ2VcblxuICBfZ2V0Qm9vbGVhblZhbDogLT5cbiAgICBAX2Jvb2xlYW5WYWwgPz0gQGZyaWdQcm9wcy5vblZhbHVlID09IEBmcmlnUHJvcHMuaW5pdGlhbFZhbHVlXG5cbiAgZ2V0RnJpZ2dpbmdWYWx1ZTogLT5cbiAgICAjIGJvb2xlYW4gdmFsdWUgaXMgdW5kZWZpbmVkIG9uIGluaXRpYWwgcGFnZSBsb2FkLCBzbyB2YWx1ZSBkZWZhdWx0cyB0byBmYWxzZVxuICAgIEBmcmlnUHJvcHNbaWYgQF9nZXRCb29sZWFuVmFsKCkgdGhlbiAnb25WYWx1ZScgZWxzZSAnb2ZmVmFsdWUnXVxuXG4gIF8kZWw6IC0+XG4gICAgJCBAcmVmc1tAZnJpZ1Byb3BzLmlucHV0SHRtbC5yZWZdLmdldERPTU5vZGUoKVxuXG4gIF9vblN3aXRjaENoYW5nZTogKGUsIHZhbCkgLT5cbiAgICBAX2Jvb2xlYW5WYWwgPSB2YWxcbiAgICBAXyRlbCgpLnZhbCBAZ2V0RnJpZ2dpbmdWYWx1ZSgpXG4gICAgQGZyaWdQcm9wcy5pbnB1dEh0bWwub25DaGFuZ2UoKVxuXG4gIF9sYWJlbENvbnRhaW5lckN4OiAtPlxuICAgIGN4XG4gICAgICBcInB1bGwtbGVmdFwiOiBAZnJpZ1Byb3BzLmxheW91dCA9PSBcImhvcml6b250YWxcIlxuXG4gIF9pbnB1dENvbnRhaW5lckN4OiAtPlxuICAgIGN4XG4gICAgICBcInB1bGwtcmlnaHRcIjogQGZyaWdQcm9wcy5sYXlvdXQgPT0gXCJob3Jpem9udGFsXCJcbiAgICAgIFwiY29udHJvbHNcIjogQGZyaWdQcm9wcy5sYXlvdXQgPT0gXCJ2ZXJ0aWNhbFwiXG5cbiAgcmVuZGVyOiAtPlxuICAgIGRpdiBjbGFzc05hbWU6IGN4KHNpemVDbGFzc05hbWVzIEBmcmlnUHJvcHMpLFxuICAgICAgZGl2IGNsYXNzTmFtZTogQF9sYWJlbENvbnRhaW5lckN4KCksXG4gICAgICAgIGxhYmVsIEBmcmlnUHJvcHMubGFiZWxIdG1sLCBAZnJpZ1Byb3BzLmxhYmVsIGlmIEBmcmlnUHJvcHMubGFiZWxcbiAgICAgIGRpdiBjbGFzc05hbWU6IEBfaW5wdXRDb250YWluZXJDeCgpLFxuICAgICAgICBpbnB1dCBAZnJpZ1Byb3BzLmlucHV0SHRtbFxuICAgICAgICBlcnJvckxpc3QgQHN0YXRlLmVycm9ycyBpZiBAc3RhdGU/LmVycm9ycz9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC9zd2l0Y2guY29mZmVlXG4gKiovIiwiUmVhY3QgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwicmVhY3QvYWRkb25zXCJcbmZyaWdnaW5nQm9vdHN0cmFwICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uL2ZyaWdnaW5nX2Jvb3RzdHJhcC5jb2ZmZWVcIlxuZnJpZ0hlbHBlcnMgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vLi4vaGVscGVycy5jb2ZmZWVcIlxuSW5wdXRNaXhpbiAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vLi4vbWl4aW5zL2lucHV0X21peGluLmNvZmZlZVwiXG57ZXJyb3JMaXN0LCBzaXplQ2xhc3NOYW1lc30gICA9IGZyaWdnaW5nQm9vdHN0cmFwXG57aHVtYW5pemUsIGNsb25lLCBtZXJnZSwgbWFwfSA9IGZyaWdIZWxwZXJzXG57ZGl2LCBsYWJlbCwgdGV4dGFyZWF9ICAgICAgICA9IFJlYWN0LkRPTVxuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuZnJpZ2dpbmdCb290c3RyYXAuVGV4dCA9IFJlYWN0LmNyZWF0ZUNsYXNzXG5cbiAgZGlzcGxheU5hbWU6ICdGcmlnLmZyaWdnaW5nQm9vdHN0cmFwLlRleHQnXG5cbiAgbWl4aW5zOiBbSW5wdXRNaXhpbl1cblxuICBnZXRJbml0aWFsU3RhdGU6IC0+XG4gICAgZXJyb3JzOiB1bmRlZmluZWRcbiAgICBlZGl0ZWQ6IGZhbHNlXG5cbiAgZ2V0RnJpZ2dpbmdQcm9wczogLT5cbiAgICBpbnB1dEh0bWw6XG4gICAgICBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCJcbiAgICAgIHBsYWNlaG9sZGVyOiAtPiBAZnJpZ1Byb3BzLnBsYWNlaG9sZGVyXG4gICAgICByb3dzOiAzXG4gICAgICBkZWZhdWx0VmFsdWU6IC0+IEBmcmlnUHJvcHMuaW5pdGlhbFZhbHVlXG4gICAgbGFiZWxIdG1sOlxuICAgICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtbGFiZWxcIlxuXG4gIF9jeDogLT5cbiAgICBjeFxuICAgICAgXCJmb3JtLWdyb3VwXCI6IHRydWVcbiAgICAgIFwiaGFzLWVycm9yXCI6IEBzdGF0ZS5lcnJvcnM/XG4gICAgICBcImhhcy1zdWNjZXNzXCI6IEBzdGF0ZS5lZGl0ZWQgJiYgIUBzdGF0ZS5lcnJvcnM/XG5cbiAgcmVuZGVyOiAtPlxuICAgIGRpdiBjbGFzc05hbWU6IGN4KHNpemVDbGFzc05hbWVzIEBmcmlnUHJvcHMpLFxuICAgICAgZGl2IGNsYXNzTmFtZTogQF9jeCgpLFxuICAgICAgICBsYWJlbCBAZnJpZ1Byb3BzLmxhYmVsSHRtbCwgQGZyaWdQcm9wcy5sYWJlbCBpZiBAZnJpZ1Byb3BzLmxhYmVsXG4gICAgICAgIGRpdiBjbGFzc05hbWU6IFwiY29udHJvbHNcIixcbiAgICAgICAgICB0ZXh0YXJlYSBAZnJpZ1Byb3BzLmlucHV0SHRtbFxuICAgICAgICBlcnJvckxpc3QgQHN0YXRlLmVycm9ycyBpZiBAc3RhdGU/LmVycm9ycz9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC90ZXh0LmNvZmZlZVxuICoqLyIsIlJlYWN0ICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcInJlYWN0L2FkZG9uc1wiXG5mcmlnZ2luZ0Jvb3RzdHJhcCAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi9mcmlnZ2luZ19ib290c3RyYXAuY29mZmVlXCJcbmZyaWdIZWxwZXJzICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uLy4uL2hlbHBlcnMuY29mZmVlXCJcbklucHV0TWl4aW4gICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uLy4uL21peGlucy9pbnB1dF9taXhpbi5jb2ZmZWVcIlxue2Vycm9yTGlzdCwgc2l6ZUNsYXNzTmFtZXN9ICAgPSBmcmlnZ2luZ0Jvb3RzdHJhcFxue2h1bWFuaXplLCBjbG9uZSwgbWVyZ2UsIG1hcH0gPSBmcmlnSGVscGVyc1xuY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXRcblxuZnJpZ2dpbmdCb290c3RyYXAuVHlwZWFoZWFkID0gUmVhY3QuY3JlYXRlQ2xhc3NcblxuICBkaXNwbGF5TmFtZTogJ0ZyaWcuZnJpZ2dpbmdCb290c3RyYXAuU2VsZWN0J1xuXG4gIG1peGluczogW0lucHV0TWl4aW5dXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiAtPlxuICAgIGVycm9yczogdW5kZWZpbmVkXG4gICAgZWRpdGVkOiBmYWxzZVxuICAgIHNlbGVjdGVkSXRlbXM6IFtdXG5cbiAgZ2V0RnJpZ2dpbmdQcm9wczogLT5cbiAgICBpbnB1dEh0bWw6XG4gICAgICBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sIHR5cGVhaGVhZFwiXG4gICAgICBkZWZhdWx0VmFsdWU6IC0+IEBmcmlnUHJvcHMuaW5pdGlhbFZhbHVlXG4gICAgICBwbGFjZWhvbGRlcjogIC0+IEBmcmlnUHJvcHMucGxhY2Vob2xkZXJcbiAgICBsYWJlbEh0bWw6XG4gICAgICBjbGFzc05hbWU6IFwiXCJcblxuICBjb21wb25lbnREaWRNb3VudDogLT5cbiAgICBzb3VyY2UgPSBpZiBAZnJpZ1Byb3BzLm9wdGlvbnMubGVuZ3RoID4gLTFcbiAgICAgIEBmcmlnUHJvcHMub3B0aW9uc1xuICAgIGVsc2VcbiAgICAgIEBmcmlnUHJvcHMub3B0aW9ucy5leGVjdXRlXG4gICAgb3B0aW9ucyA9XG4gICAgICBzb3VyY2U6IHNvdXJjZVxuICAgICAgdXBkYXRlcjogQF9hZnRlclNlbGVjdFxuICAgICAgbWluTGVuZ3RoOiAwXG4gICAgICBpdGVtczogNVxuICAgICAgc2hvd0hpbnRPbkZvY3VzOiB0cnVlXG4gICAgaWYgQGZyaWdQcm9wcy5hZGRUb0xpc3RNZXNzYWdlXG4gICAgICBvcHRpb25zWydhZGRJdGVtJ10gPSBuYW1lOiBAZnJpZ1Byb3BzLmFkZFRvTGlzdE1lc3NhZ2VcbiAgICBpZiBAZnJpZ1Byb3BzLm11bHRpcGxlXG4gICAgICBvcHRpb25zWydhZnRlclNlbGVjdCddID0gQF9jbGVhclR5cGVhaGVhZFxuICAgIEBfc2V0SW5pdGlhbFZhbHVlKClcbiAgICBAXyRlbCgpLnR5cGVhaGVhZCBvcHRpb25zXG5cbiAgX3NldEluaXRpYWxWYWx1ZTogLT5cbiAgICBpZiBpbml0aWFsVmFsdWUgPSBAXyRlbCgpLnZhbCgpXG4gICAgICBpZiBAZnJpZ1Byb3BzLm11bHRpcGxlXG4gICAgICAgIGluaXRpYWxJdGVtcyA9IEBfbXVsdGlwbGVJbml0aWFsSXRlbXMgaW5pdGlhbFZhbHVlXG4gICAgICAgIEBfY2xlYXJUeXBlYWhlYWQoKVxuICAgICAgZWxzZVxuICAgICAgICBpbml0aWFsSXRlbXMgPSBbQF9pbml0YWxJdGVtKGluaXRpYWxWYWx1ZSldXG4gICAgICAgIEBfJGVsKCkudmFsIGluaXRpYWxJdGVtc1swXS5uYW1lIGlmIGluaXRpYWxJdGVtc1swXVxuICAgICAgQHNldFN0YXRlIHNlbGVjdGVkSXRlbXM6IGluaXRpYWxJdGVtc1xuXG4gIF9tdWx0aXBsZUluaXRpYWxJdGVtczogKGluaXRpYWxWYWx1ZSkgLT5cbiAgICBpbml0aWFsVmFscyA9IGluaXRpYWxWYWx1ZS5zcGxpdCAnLCdcbiAgICBpZiBAZnJpZ1Byb3BzLm9wdGlvbnMubGVuZ3RoID4gLTFcbiAgICAgICMgaWYgb3B0aW9ucyBpcyBhbiBhcnJheSwgZmluZCBpbml0aWFsSXRlbXMgYnkgdGhlaXIgaWRzXG4gICAgICBpbml0aWFsSXRlbXMgPSBfLmZpbHRlciBAZnJpZ1Byb3BzLm9wdGlvbnMsIChpdGVtKSAtPlxuICAgICAgICBfLmluY2x1ZGVzIGluaXRpYWxWYWxzLCBpdGVtLmlkLnRvU3RyaW5nKClcbiAgICAgICMgcmVtb3ZlIHVzZWQgdmFscyBmcm9tIHR5cGVhaGVhZCBvcHRpb25zXG4gICAgICBfLnB1bGwgQGZyaWdQcm9wcy5vcHRpb25zLCBpbml0aWFsSXRlbXMuLi5cbiAgICBlbHNlXG4gICAgICAjIGlmIG9wdGlvbnMgaXMgYSBmdW5jdGlvbiwgaW5pdGlhbEl0ZW1zIG11c3QgYmUgcGFzc2VkIGluXG4gICAgICBpbml0aWFsSXRlbXMgPSBAZnJpZ1Byb3BzLmluaXRpYWxJdGVtc1xuICAgIGluaXRpYWxJdGVtc1xuXG4gIF9pbml0YWxJdGVtOiAoaW5pdGlhbFZhbHVlKSAtPlxuICAgIF8uZmluZCBAZnJpZ1Byb3BzLm9wdGlvbnMsIGlkOiBwYXJzZUludCBpbml0aWFsVmFsdWVcblxuICBfJGVsOiAtPlxuICAgICQgQHJlZnNbQGZyaWdQcm9wcy5pbnB1dEh0bWwucmVmXS5nZXRET01Ob2RlKClcblxuICBfYWZ0ZXJTZWxlY3Q6IChpdGVtKSAtPlxuICAgIGlmIEBmcmlnUHJvcHMuYWRkVG9MaXN0TWVzc2FnZSBhbmQgaXRlbS5uYW1lID09IEBmcmlnUHJvcHMuYWRkVG9MaXN0TWVzc2FnZVxuICAgICAgIyBwb3N0IHRoZSBpdGVtIChjcmVhdGUpXG4gICAgICBAZnJpZ1Byb3BzLmFkZFRvTGlzdC5leGVjdXRlIEBfJGVsKCkudmFsKCksIChkYXRhLCBpdGVtVHlwZSkgPT5cbiAgICAgICAgIyBjYWxsYmFjayBzaG91bGQgYXBwZW5kICh2aWEgXy5wYXJ0aWFsUmlnaHQpIHRoZSBtb2RlbCB0eXBlXG4gICAgICAgICMgZWc6ICdzYWxlc19jYXRlZ29yeSdcbiAgICAgICAgaXRlbSA9IGRhdGFbaXRlbVR5cGVdXG4gICAgICAgICMgYWRkIG5ld2x5IGNyZWF0ZWQgaXRlbSB0byB0eXBlYWhlYWQgb3B0aW9uc1xuICAgICAgICBAZnJpZ1Byb3BzLm9wdGlvbnMucHVzaCBpdGVtXG4gICAgICAgIEBfJGVsKCkudmFsIGl0ZW0ubmFtZVxuICAgICAgICBAX2FkZFRvU2VsZWN0ZWRJdGVtcyBpdGVtXG4gICAgZWxzZVxuICAgICAgQF9hZGRUb1NlbGVjdGVkSXRlbXMgaXRlbVxuICAgIGl0ZW1cblxuICBfYWRkVG9TZWxlY3RlZEl0ZW1zOiAoaXRlbSkgLT5cbiAgICBpZiBAZnJpZ1Byb3BzLm11bHRpcGxlXG4gICAgICBAc2V0U3RhdGUgc2VsZWN0ZWRJdGVtczogQHN0YXRlLnNlbGVjdGVkSXRlbXMuY29uY2F0IGl0ZW1cbiAgICAgIF8ucHVsbCBAZnJpZ1Byb3BzLm9wdGlvbnMsIGl0ZW1cbiAgICBlbHNlXG4gICAgICBAc2V0U3RhdGUgc2VsZWN0ZWRJdGVtczogW2l0ZW1dXG4gICAgc2V0VGltZW91dCBAZnJpZ1Byb3BzLmlucHV0SHRtbC5vbkNoYW5nZSwgMFxuXG4gIF9jbGVhclR5cGVhaGVhZDogLT5cbiAgICBAXyRlbCgpLnZhbCAnJ1xuXG4gIGdldEZyaWdnaW5nVmFsdWU6IC0+XG4gICAgaWYgQGZyaWdQcm9wcy5tdWx0aXBsZVxuICAgICAgXy5tYXAgQHN0YXRlLnNlbGVjdGVkSXRlbXMsICdpZCdcbiAgICBlbHNlXG4gICAgICBAc3RhdGUuc2VsZWN0ZWRJdGVtc1swXS5pZCBpZiBAc3RhdGUuc2VsZWN0ZWRJdGVtc1swXVxuXG4gIF9jeDogLT5cbiAgICBjeFxuICAgICAgXCJmb3JtLWdyb3VwXCI6IHRydWVcbiAgICAgIFwiaGFzLWVycm9yXCI6IEBzdGF0ZS5lcnJvcnM/XG4gICAgICBcImhhcy1zdWNjZXNzXCI6IEBzdGF0ZS5lZGl0ZWQgJiYgIUBzdGF0ZS5lcnJvcnM/XG4gICAgICBcIml0ZW1zXCI6IHRydWVcblxuICBfZGVsZXRlSXRlbTogKGl0ZW0pIC0+XG4gICAgQHNldFN0YXRlIHNlbGVjdGVkSXRlbXM6IF8ud2l0aG91dCBAc3RhdGUuc2VsZWN0ZWRJdGVtcywgaXRlbVxuICAgIEBmcmlnUHJvcHMub3B0aW9ucy5wdXNoIGl0ZW0gaWYgQGZyaWdQcm9wcy5vcHRpb25zLmxlbmd0aCA+IC0xXG4gICAgc2V0VGltZW91dCBAZnJpZ1Byb3BzLmlucHV0SHRtbC5vbkNoYW5nZSwgMFxuXG4gIHJlbmRlcjogLT5cbiAgICBkaXYgY2xhc3NOYW1lOiBjeChzaXplQ2xhc3NOYW1lcyBAcHJvcHMpICsgXCIgdHlwZWFoZWFkXCIsXG4gICAgICBkaXYgY2xhc3NOYW1lOiBcImNvbnRyb2xzXCIsXG4gICAgICAgIGxhYmVsIEBmcmlnUHJvcHMubGFiZWxIdG1sLCBAZnJpZ1Byb3BzLmxhYmVsIGlmICFAZnJpZ1Byb3BzLm11bHRpcGxlXG4gICAgICAgIGlucHV0IEBmcmlnUHJvcHMuaW5wdXRIdG1sXG4gICAgICAgIGxhYmVsIEBmcmlnUHJvcHMubGFiZWxIdG1sLCBAZnJpZ1Byb3BzLmxhYmVsIGlmIEBmcmlnUHJvcHMubXVsdGlwbGVcbiAgICAgIGRpdiBjbGFzc05hbWU6IEBfY3goKSxcbiAgICAgICAgaWYgQGZyaWdQcm9wcy5tdWx0aXBsZVxuICAgICAgICAgIF8ubWFwIEBzdGF0ZS5zZWxlY3RlZEl0ZW1zLCAoaXRlbSkgPT5cbiAgICAgICAgICAgIGRpdiBjbGFzc05hbWU6IFwicm93XCIsXG4gICAgICAgICAgICAgIGRpdiBjbGFzc05hbWU6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTEyXCIsXG4gICAgICAgICAgICAgICAgcCBjbGFzc05hbWU6ICdwdWxsLWxlZnQnLCBpdGVtLm5hbWVcbiAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmEgZmEtdGltZXMgZGVsZXRlLXRyaWdnZXIgcHVsbC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiBfLnBhcnRpYWwgQF9kZWxldGVJdGVtLCBpdGVtXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJSZW1vdmUgZnJvbSBsaXN0XCJcbiAgICAgICAgaWYgQHN0YXRlLnNlbGVjdGVkSXRlbXMubGVuZ3RoIDwgMSAmJiBAZnJpZ1Byb3BzLm11bHRpcGxlXG4gICAgICAgICAgZGl2IGNsYXNzTmFtZTogXCJyb3dcIixcbiAgICAgICAgICAgIGRpdiBjbGFzc05hbWU6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTEyXCIsXG4gICAgICAgICAgICAgIHAgY2xhc3NOYW1lOiAncHVsbC1sZWZ0JywgXCJObyBcIiArXG4gICAgICAgICAgICAgICAgQGZyaWdQcm9wcy5sYWJlbC50b0xvd2VyQ2FzZSgpICsgXCIuLi5cIlxuICAgICAgICBlcnJvckxpc3QgQHN0YXRlLmVycm9ycyBpZiBAc3RhdGU/LmVycm9ycz9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC90eXBlYWhlYWQuY29mZmVlXG4gKiovIiwiUmVhY3QgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwicmVhY3QvYWRkb25zXCJcbmZyaWdEZWZhdWx0cyAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4vZGVmYXVsdHMuY29mZmVlXCJcbmZyaWdUaGVtZXMgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4vdGhlbWVzLmNvZmZlZVwiXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRm9ybUJ1aWxkZXJcbiAgY29uc3RydWN0b3I6IChAcGFyZW50LCBAb3B0cyA9IHt9LCBAY2IgPSAoLT4pLCBAaXNDb2ZmZWVzY3JpcHQpIC0+XG4gICAgQHByb3BzID0ge31cbiAgICBmb3IgayBpbiBbXCJkYXRhXCIsIFwicmVmXCIsIFwidHlwZU1hcHBpbmdcIiwgXCJlcnJvcnNcIiwgXCJvbkNoYW5nZVwiXVxuICAgICAgQHByb3BzW2tdID0gQG9wdHNba11cbiAgICAgIGRlbGV0ZSBAb3B0c1trXVxuICAgICMgQHByb3BzLnZhbGlkYXRpb25TdGF0ZSA9IHt9XG4gICAgQHByb3BzW2tdID0gdiBmb3IgaywgdiBvZiBAX2RlZmF1bHRzKClcblxuICBfZGVmYXVsdHM6IC0+XG4gICAgdHlwZTogICAgICAgICAgXCJmb3JtXCJcbiAgICByZWY6ICAgICAgICAgICBcImZvcm1cIlxuICAgIGNiOiAgICAgICAgICAgIEBjYlxuICAgIHBhcmVudDogICAgICAgIEBwYXJlbnRcbiAgICB0aGVtZTogICAgICAgICBAX3RoZW1lKClcbiAgICB0aGVtZURlZmF1bHRzOiBAX3RoZW1lKCkuZGVmYXVsdHNcbiAgICBmb3JtRGVmYXVsdHM6ICBAb3B0c1xuXG4gICMgQ3JlYXRlIGEgdGhlbWUtc3BlY2lmaWMgZm9ybSBSZWFjdCBlbGVtZW50XG4gIHJlbmRlcjogLT5cbiAgICBGb3JtID0gQF90aGVtZSgpLkZvcm1cbiAgICBGb3JtID0gUmVhY3QuY3JlYXRlRmFjdG9yeSBGb3JtIGlmIEBpc0NvZmZlZXNjcmlwdFxuICAgIEZvcm0gQHByb3BzXG5cbiAgIyByZXR1cm5zIHRoZSB0aGVtZSBiYXNlZCBvbiBhIGNhc2NhZGluZyBsb29rdXBcbiAgX3RoZW1lOiAtPlxuICAgIHRoZW1lTmFtZSA9IEBvcHRzLnRoZW1lIHx8PSBmcmlnRGVmYXVsdHMudGhlbWVcbiAgICB0aHJvdyBcIkEgdGhlbWUgbmFtZSBpcyByZXF1aXJlZFwiIHVubGVzcyB0aGVtZU5hbWU/XG4gICAgdGhlbWUgPSBmcmlnVGhlbWVzW3RoZW1lTmFtZV1cbiAgICB0aHJvdyBcIkZyaWcuI3t0aGVtZU5hbWV9IGRvZXMgbm90IGV4aXN0XCIgdW5sZXNzIHRoZW1lP1xuICAgIHJldHVybiB0aGVtZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9mb3JtX2J1aWxkZXIuY29mZmVlXG4gKiovIiwiUmVhY3QgICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwicmVhY3QvYWRkb25zXCJcbmZyaWdIZWxwZXJzICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uL2hlbHBlcnMuY29mZmVlXCJcbmZyaWdEZWZhdWx0cyAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcIi4uL2RlZmF1bHRzLmNvZmZlZVwiXG57aHVtYW5pemUsIGNsb25lLCBtZXJnZSwgbWFwLCBtYXBPYmosIGlzQ29uZmlnT2JqLCBzZXREZWZhdWx0c30gPSBmcmlnSGVscGVyc1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyaWdnaW5nUHJvcHNNaXhpbiA9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogKG5leHRQcm9wcykgLT5cbiAgICBAX2ZyaWdSZWZyZXNoUHJvcHMobmV4dFByb3BzKVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogLT5cbiAgICBAX2ZyaWdSZWZyZXNoUHJvcHMoQHByb3BzKVxuXG4gIGZyaWdEZWZhdWx0TGF5ZXJzOiAtPlxuICAgIFtcbiAgICAgICMgR2xvYmFsIGRlZmF1bHRzXG4gICAgICBmcmlnRGVmYXVsdHNcbiAgICAgICMgVGhlbWUtbGV2ZWwgZGVmYXVsdHNcbiAgICAgIEBwcm9wcy50aGVtZURlZmF1bHRzIHx8IHt9XG4gICAgICAjIEZvcm0tbGV2ZWwgZGVmYXVsdHNcbiAgICAgIEBwcm9wcy5mb3JtRGVmYXVsdHMgfHwge31cbiAgICBdXG5cbiAgIyBUaGUgZGVmYXVsdCBsYXllcnMgcGx1cyB0aGUgbGF5ZXJzIHJlbGF0ZWQgdG8gdGhpcyBjb21wb25lbnQncyBwcm9wcyBhbmRcbiAgIyBmcmlnZ2luZ1Byb3BzXG4gIF9mcmlnUHJvcExheWVyczogKHByb3BzKSAtPlxuICAgIFtcbiAgICAgIEBmcmlnRGVmYXVsdExheWVycygpLi4uXG4gICAgICAjIENvbXBvbmVudC1sZXZlbCBkZWZhdWx0c1xuICAgICAgQGdldEZyaWdnaW5nUHJvcHM/KCkgfHwge31cbiAgICAgICMgVXNlci1lbnRlcmVkIG9wdGlvbnNcbiAgICAgIHByb3BzXG4gICAgXVxuXG4gIF9mcmlnUmVmcmVzaFByb3BzOiAocHJvcHMgPSB7fSkgLT5cbiAgICAjIFNldHRpbmcgZGVmYXVsdHNcbiAgICBAZnJpZ1Byb3BzID0ge31cbiAgICBzZXREZWZhdWx0cyBAX2ZyaWdQcm9wTGF5ZXJzKHByb3BzKS4uLiwgQGZyaWdQcm9wcywgQF9mcmlnUHJvcFZhbFxuXG4gICMgUmV0dXJuIGEgbm9ybWFsaXplZCB2YWx1ZSBmb3IgYSBmcmlnIHByb3BlcnR5XG4gIF9mcmlnUHJvcFZhbDogKGssIG9iaiwgbGF5ZXJzKSAtPlxuICAgIGRlZmF1bHRWYWwgPSBsYXllcnNbMF1ba11cbiAgICAjIENsYXNzIG5hbWVzIGFyZSBtZXJnZWRcbiAgICByZXR1cm4gQF9mcmlnQ2xhc3NOYW1lIGxheWVycyBpZiBrID09IFwiY2xhc3NOYW1lXCJcbiAgICAjIFRydWUgcHJvcGVydGllcyBzaG91bGQgZW5hYmxlIGZyaWdEZWZhdWx0cyBiZWhhdmlvclxuICAgICMgb2JqID0gZGVmYXVsdFZhbCBpZiBAZnJpZ1Byb3BzW2tdID09IHRydWVcbiAgICAjIGV2YWx1YXRlIHZhbHVlIGZ1bmN0aW9ucyBhbmQgcmVwbGFjZSB0aGVtIHdpdGggdGhlaXIgdmFsdWVzXG4gICAgZm5OYW1lUmVnZXggPSAvXm9ufF5jYiR8XnZhbGlkYXRlJC9cbiAgICBpZiB0eXBlb2Yob2JqKSA9PSBcImZ1bmN0aW9uXCIgYW5kIChvYmogPT0gZGVmYXVsdFZhbCBvciAhay5tYXRjaCBmbk5hbWVSZWdleClcbiAgICAgIG9iaiA9IG9iai5jYWxsIEAsIEBcbiAgICByZXR1cm4gb2JqXG5cbiAgIyBSZXR1cm4gYSBjbGFzc25hbWVzIGJ5IGNvbmNhdGluYXRpb24gYWxsIG9mIHRoZSBjbGFzc05hbWVzIGluIHRoZSBwcm9wXG4gICMgbGF5ZXJzLlxuICBfZnJpZ0NsYXNzTmFtZTogKHNvdXJjZXMpIC0+XG4gICAgY2xhc3NOYW1lcyA9IFtdXG4gICAgZm9yIHNvdXJjZSBpbiBzb3VyY2VzXG4gICAgICBjbGFzc05hbWUgPSBzb3VyY2UuY2xhc3NOYW1lXG4gICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUuY2FsbCBALCBAIGlmIHR5cGVvZihjbGFzc05hbWUpID09IFwiZnVuY3Rpb25cIlxuICAgICAgY2xhc3NOYW1lcy5wdXNoIGNsYXNzTmFtZSBpZiBjbGFzc05hbWVcbiAgICAjIFJldHVybiB0aGUgY29uY2F0aW5hdGVkIGNsYXNzTmFtZS4gU2V0IGl0IGluIEBmcmlnUHJvcHMgdG8gb3ZlcnJpZGVcbiAgICAjIGV2ZXJ5dGhpbmcgZWxzZS5cbiAgICBjbGFzc05hbWVzLmpvaW4gXCIgXCJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2phdmFzY3JpcHRzL2ZyaWcvbWl4aW5zL2ZyaWdnaW5nX3Byb3BzX21peGluLmNvZmZlZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gaGVscGVycyA9XG4gIGh1bWFuaXplOiAoa2V5KSAtPlxuICAgIHJldHVybiB1bmRlZmluZWQgdW5sZXNzIGtleT9cbiAgICBodW1hblN0cmluZyA9IGtleS5yZXBsYWNlKC8oW0EtWl18WzAtOV0rfF9bYS16XSkvZywgXCIgJDFcIikucmVwbGFjZSAvXy9nLCBcIlwiXG4gICAgcmV0dXJuIGh1bWFuU3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBodW1hblN0cmluZ1sxLi5dLnRvTG93ZXJDYXNlKClcblxuICBjbG9uZTogKG9iaikgLT5cbiAgICBvYmpDbG9uZSA9IHt9XG4gICAgb2JqQ2xvbmVba10gPSB2IGZvciBrLCB2IG9mIG9ialxuICAgIHJldHVybiBvYmpDbG9uZVxuXG4gIG1lcmdlOiAodGFyZ2V0LCBvdGhlcnMuLi4pIC0+XG4gICAgdGFyZ2V0IHx8PSB7fVxuICAgIGZvciBvdGhlciBpbiBvdGhlcnNcbiAgICAgIHRhcmdldFtrXSA9IHYgZm9yIGssIHYgb2YgKG90aGVyIHx8IHt9KVxuICAgIHJldHVybiB0YXJnZXRcblxuICBtYXA6IChhcnJheSwgZm4pIC0+XG4gICAgb3V0ID0gW11cbiAgICBvdXQucHVzaCBmbiBrIGZvciBrIGluIGFycmF5XG4gICAgcmV0dXJuIG91dFxuXG4gIG1hcE9iajogKG9iaiwgZm4pIC0+XG4gICAgb3V0ID0ge31cbiAgICBvdXRba10gPSBmbiBrLCB2IGZvciBrLCB2IG9mIG9ialxuICAgIHJldHVybiBvdXRcblxuICAjIFRha2VzIGEgbGlzdCBvZiBkZWZhdWx0cyB0byBpbmhlcml0IGZyb20sIHRoZSBvYmplY3QgaXRzZWxmIGFuZCBhbiBvcHRpb25hbFxuICAjIGNhbGxiYWNrIHBhcmFtZXRlciB3aGljaCBjYW4gYmUgdXNlZCB0byBhZGp1c3QgdGhlIHZhbHVlIG9mIGVhY2ggcGFyYW1ldGVyLlxuICAjIFRoaXMgZnVuY3Rpb24gb3BlcmF0ZXMgZGVlcGx5IG9uIG5lc3RlZCBvYmplY3RzLlxuICAjIFRoZSByZXR1cm5lZCB2YWx1ZSBoYXMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAjICogVGhlIGtleXMgYXJlIHRoZSBzdXBlcnNldCBvZiBhbGwga2V5cyBmcm9tIGFsbCB0aGUgbGF5ZXIuXG4gICMgKiBUaGUga2V5cyBhcmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGRlZmF1bHRzIHdpdGgga2V5cyBmcm9tIG90aGVyIGxheWVyc1xuICAjICAgYmVpbmcgYXBwZW5kZWQgYWZ0ZXIgdGhlIGRlZmF1bHRzLlxuICBzZXREZWZhdWx0czogKGxheWVycy4uLiwgY2IpIC0+XG4gICAgIyBObyBjYWxsYmFjazogRGVmYXVsdGluZyB0aGUgY2FsbGJhY2sgdG8gYSBwYXNzdGhyb3VnaCBmdW5jdGlvblxuICAgIGlmIHR5cGVvZihjYikgIT0gXCJmdW5jdGlvblwiXG4gICAgICBsYXllcnMucHVzaCBjYlxuICAgICAgY2IgPSAoaywgdikgLT4gdlxuICAgICMgc2V0dGluZyB0aGUgdGFyZ2V0IHRvIHRoZSBmaXJzdCBsYXllclxuICAgIHRhcmdldCA9IGxheWVyc1tsYXllcnMubGVuZ3RoIC0gMV0gfHwge31cbiAgICAjIGNsb25pbmcgYW5kIHJldmVyc2luZyB0aGUgbGF5ZXJzIGZvciB1c2UgaW4gdGhlIGl0ZXJhdG9yXG4gICAgcmV2ZXJzZWRMYXllcnMgPSBsYXllcnMuc2xpY2UoMCkucmV2ZXJzZSgpXG4gICAgIyBUaGUgaXRlcmF0b3IgaXMgdXNlZCB0byBzZXQgYSBmaW5hbCB2YWx1ZSBmb3IgZWFjaCBrZXkgaW4gdGhlIHJldHVybmVkXG4gICAgIyBvYmplY3RcbiAgICBpdGVyYXRvciA9IChrLCB2KSAtPlxuICAgICAgIyBTZXR0aW5nIHRoZSB2YWx1ZSBmb3Igbm9uLW9iamVjdHMgYnkgXCJmYWlsaW5nIHRocm91Z2hcIiB0aGUgZGVmYXVsdHNcbiAgICAgICMgdW50aWwgYSBub24tbnVsbCB2YWx1ZSBpcyBmb3VuZFxuICAgICAgdmFsID0gdW5kZWZpbmVkXG4gICAgICB2YWwgPz0gbGF5ZXJba10gZm9yIGxheWVyIGluIHJldmVyc2VkTGF5ZXJzXG4gICAgICBjYiBrLCB2YWwsIGxheWVyc1xuICAgICMgUmVjdXJzaXZlbHkgbWFwcGluZyB0aGUgaXRlcmF0b3Igb3ZlciBuZXN0ZWQgb2JqZWN0c1xuICAgIGZvciBrLCB2IG9mIGhlbHBlcnMubWVyZ2Uge30sIGxheWVycy4uLlxuICAgICAgaWYgaXNDb25maWdPYmogbGF5ZXJzWzBdW2tdXG4gICAgICAgIG5hbWVzcGFjZWRMYXllcnMgPSBoZWxwZXJzLm1hcCBsYXllcnMsIChsYXllcikgLT4gbGF5ZXJba10gfHwge31cbiAgICAgICAgdiA9IGhlbHBlcnMuc2V0RGVmYXVsdHMgbmFtZXNwYWNlZExheWVycy4uLiwgY2JcbiAgICAgIGVsc2VcbiAgICAgICAgdiA9IGl0ZXJhdG9yIGssIHZcbiAgICAgIHRhcmdldFtrXSA9IHZcbiAgICByZXR1cm4gdGFyZ2V0XG5cbiAgaXNDb25maWdPYmo6IChvYmopIC0+XG4gICAgdHlwZSA9IHR5cGVvZiBvYmpcbiAgICByZXR1cm4gKFxuICAgICAgdHlwZSAhPSBcInN0cmluZ1wiIGFuZFxuICAgICAgdHlwZSAhPSBcIm51bWJlclwiIGFuZFxuICAgICAgdHlwZSAhPSBcImJvb2xlYW5cIiBhbmRcbiAgICAgIHR5cGUgIT0gXCJmdW5jdGlvblwiIGFuZFxuICAgICAgdHlwZSAhPSBcInVuZGVmaW5lZFwiIGFuZFxuICAgICAgb2JqICAhPSBudWxsIGFuZFxuICAgICAgb2JqLmxlbmd0aCA9PSB1bmRlZmluZWRcbiAgICApXG5cbiAgY2FwaXRhbGl6ZTogKHN0cmluZykgLT5cbiAgICByZXR1cm4gdW5kZWZpbmVkIHVubGVzcyBzdHJpbmc/XG4gICAgXCIje3N0cmluZ1swXS50b1VwcGVyQ2FzZSgpfSN7c3RyaW5nWzEuLl19XCJcblxuXG57aHVtYW5pemUsIGNsb25lLCBtZXJnZSwgbWFwLCBtYXBPYmosIGlzQ29uZmlnT2JqLCBzZXREZWZhdWx0c30gPSBoZWxwZXJzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnL2hlbHBlcnMuY29mZmVlXG4gKiovIiwiUmVhY3QgICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCJyZWFjdC9hZGRvbnNcIlxuZ2xvYmFsVHlwZU1hcHBpbmcgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi90eXBlX21hcHBpbmcuY29mZmVlXCJcbmZyaWdIZWxwZXJzICAgICAgICAgICAgICAgICAgPSByZXF1aXJlIFwiLi4vaGVscGVycy5jb2ZmZWVcIlxue2h1bWFuaXplLCBtYXAsIGNhcGl0YWxpemUsIGdldFRlbXBsYXRlLCBndWVzc1R5cGUsIHNldERlZmF1bHRzfSA9IGZyaWdIZWxwZXJzXG5cbm1vZHVsZS5leHBvcnRzID0gZHNsTWl4aW4gPVxuXG4gIGZyaWdEU0w6IC0+XG4gICAgZXJyb3JzOiBAX2ZyaWdFcnJvcnNcbiAgICBpbnB1dDogQF9mcmlnSW5wdXRcbiAgICBzdWJtaXQ6IEBfZnJpZ1N1Ym1pdFxuXG4gIF9mcmlnRXJyb3JzOiAtPlxuICAgIEBfZnJpZ0lucHV0IFwiZXJyb3JzXCIsIHR5cGU6IFwiZXJyb3JzXCIsIGVycm9yczogQHByb3BzLmVycm9yc1xuXG4gICMgQ3JlYXRlIGEgc3VibWl0IGJ1dHRvblxuICAjIHZhbHVlOiBbU1RSSU5HXSBUaGUgbGFiZWwgdGV4dCBmb3IgdGhlIHN1Ym1pdCBidXR0b25cbiAgIyBwcm9wczogW09CSkVDVF0gcHJvcGVydGllcyB0byBzZW5kIHRvIHRoZSBSZWFjdCBDb21wb25lbnQgKHNlZSBpbnB1dCBwcm9wcylcbiAgX2ZyaWdTdWJtaXQ6ICh2YWx1ZSwgcHJvcHMgPSB7fSkgLT5cbiAgICBpZiBhcmd1bWVudHMubGVuZ3RoID09IDEgYW5kIHR5cGVvZih2YWx1ZSkgIT0gXCJzdHJpbmdcIlxuICAgICAgcHJvcHMgPSB2YWx1ZVxuICAgICAgdmFsdWUgPSB1bmRlZmluZWRcbiAgICBzZXREZWZhdWx0cyBAX2ZyaWdTdWJtaXREZWZhdWx0cyh2YWx1ZSksIHByb3BzXG4gICAgQF9mcmlnSW5wdXQgXCJzdWJtaXRcIiwgcHJvcHNcblxuICBfZnJpZ1N1Ym1pdERlZmF1bHRzOiAodmFsdWUpIC0+XG4gICAgdHlwZTogXCJzdWJtaXRcIlxuICAgIGlucHV0SHRtbDpcbiAgICAgIGRlZmF1bHRWYWx1ZTogdmFsdWUgaWYgdmFsdWU/XG5cbiAgIyBDcmVhdGVzIGEgZm9ybSBmaWVsZFxuICAjIGtleTogW1NUUklOR10gdGhlIG5hbWUgb2YgdGhlIGZpZWxkIGluIHRoZSBkYXRhXG4gICMgcHJvcHM6XG4gICMgICByZXF1aXJlZDogKGRlZmF1bHQ6IHRydWUpXG4gICMgICBpbnB1dEh0bWw6IHNwZWNpZnkgaHRtbCBhdHRyaWJ1dGVzIGZvciB0aGUgaW5wdXQgUmVhY3QgRE9NIGVsZW1lbnRcbiAgIyAgIGxhYmVsSHRtbDogc3BlY2lmeSBodG1sIGF0dHJpYnV0ZXMgZm9yIHRoZSBsYWJlbCBSZWFjdCBET00gZWxlbWVudFxuICAjICAgcGxhY2Vob2xkZXI6XG4gICMgICAgIHRydWU6IChkZWZhdWx0KSBhZGRzIGEgcGxhY2Vob2xkZXIgd2l0aCBhIG5hbWUgYmFzZWQgb24gYSBodW1hbml6YXRpb25cbiAgIyAgICAgICAgICAgb2YgdGhlIGtleVxuICAjICAgICBmYWxzZTogZGlzYWJsZXMgdGhlIHBsYWNlaG9sZGVyXG4gICMgICAgIFtTVFJJTkddOiBzZXRzIHRoZSBwbGFjZWhvbGRlciB0byB0aGUgZ2l2ZW4gc3RyaW5nXG4gICMgIGxhYmVsOlxuICAjICAgICB0cnVlOiAoZGVmYXVsdCkgYWRkcyBhIGxhYmVsIHdpdGggYSBuYW1lIGJhc2VkIG9uIGEgaHVtYW5pemF0aW9uXG4gICMgICAgICAgICAgIG9mIHRoZSBrZXlcbiAgIyAgICAgZmFsc2U6IGRpc2FibGVzIHRoZSBsYWJlbFxuICAjICAgICBbU1RSSU5HXTogc2V0cyB0aGUgbGFiZWwgdG8gdGhlIGdpdmVuIHN0cmluZ1xuICBfZnJpZ0lucHV0OiAoa2V5LCBpbnB1dFByb3BzID0ge30pIC0+XG4gICAgaXNDb2ZmZWVzY3JpcHQgPSBrZXk/XG4gICAgdHlwZU1hcHBpbmcgPSBpbnB1dFByb3BzLnR5cGVNYXBwaW5nXG4gICAgZGVsZXRlIGlucHV0UHJvcHMudHlwZU1hcHBpbmdcbiAgICAjIFNldHRpbmcgdGhlIGRlZmF1bHRzXG4gICAgc2V0RGVmYXVsdHMgQF9mcmlnSW5wdXREZWZhdWx0cyhrZXkpLCBpbnB1dFByb3BzXG4gICAgIyBHdWVzc2luZyB0aGUgdHlwZSBhbmQgdXNpbmcgaXQgdG8gbG9va3VwIHRoZSB0ZW1wbGF0ZVxuICAgIGlucHV0UHJvcHMudHlwZSA9IEBfZnJpZ0d1ZXNzSW5wdXRUeXBlIGlucHV0UHJvcHNcbiAgICAjIGxvb2tpbmcgdXAgdGhlIHRlbXBsYXRlIG5hbWUgd2l0aCB0aGUgdHlwZSBtYXBwaW5ncyBhbmQgdGhlIHR5cGVcbiAgICB0ZW1wbGF0ZU5hbWUgPSBAX2ZyaWdHZXRUZW1wbGF0ZU5hbWUgaW5wdXRQcm9wcywgQHByb3BzLnRoZW1lLCB0eXBlTWFwcGluZ1xuICAgIHRlbXBsYXRlID0gQF9mcmlnTG9hZFRlbXBsYXRlIGlucHV0UHJvcHMsIHRlbXBsYXRlTmFtZVxuICAgIHRlbXBsYXRlID0gUmVhY3QuY3JlYXRlRmFjdG9yeSB0ZW1wbGF0ZSBpZiBpc0NvZmZlZXNjcmlwdFxuICAgICMgQ3JlYXRpbmcgYW5kIHJldHVybmluZyB0aGUgdGVtcGxhdGUgaW5zdGFuY2VcbiAgICByZXR1cm4gdGVtcGxhdGUgaW5wdXRQcm9wc1xuXG4gIF9mcmlnSW5wdXREZWZhdWx0czogKGtleSkgLT5cbiAgICByZWY6ICAgICAgICAgICAgICAgICAgICBcIiN7a2V5fUlucHV0XCJcbiAgICBmaWVsZEtleTogICAgICAgICAgICAgICBrZXlcbiAgICBpbml0aWFsVmFsdWU6ICAgICAgICAgICBAaW5pdGlhbFZhbHVlcygpW2tleV1cbiAgICBvbkZyaWdnaW5nQ2hpbGRDaGFuZ2U6ICBAX29uRnJpZ2dpbmdDaGlsZENoYW5nZVxuICAgIG9uRnJpZ2dpbmdDaGlsZEluaXQ6ICAgIEBfb25GcmlnZ2luZ0NoaWxkSW5pdFxuICAgIGZvcm1EZWZhdWx0czogICAgICAgICAgIEBwcm9wcy5mb3JtRGVmYXVsdHNcbiAgICB0aGVtZURlZmF1bHRzOiAgICAgICAgICBAcHJvcHMudGhlbWUuZGVmYXVsdHMgfHwge31cblxuICBfZnJpZ0d1ZXNzSW5wdXRUeXBlOiAoaW5wdXRQcm9wcykgLT5cbiAgICBqc1R5cGUgPSB0eXBlb2YgaW5wdXRQcm9wcy5pbml0aWFsVmFsdWVcbiAgICBpZiBpbnB1dFByb3BzLnR5cGU/XG4gICAgICBpbnB1dFByb3BzLnR5cGVcbiAgICBlbHNlIGlmIGlucHV0UHJvcHMubXVsdGlwbGUgb3IgQXJyYXkuaXNBcnJheSBpbnB1dFByb3BzLmluaXRpYWxWYWx1ZVxuICAgICAgXCJtdWx0aXNlbGVjdFwiXG4gICAgZWxzZSBpZiBpbnB1dFByb3BzLm9wdGlvbnM/XG4gICAgICBcInNlbGVjdFwiXG4gICAgZWxzZSBpZiBqc1R5cGUgPT0gXCJib29sZWFuXCJcbiAgICAgIFwiYm9vbGVhblwiXG4gICAgZWxzZSBpZiBqc1R5cGUgPT0gXCJudW1iZXJcIlxuICAgICAgXCJmbG9hdFwiXG4gICAgZWxzZSBpZiBpbnB1dFByb3BzLmZpZWxkS2V5Lm1hdGNoIC9bcFBdYXNzd29yZF4vXG4gICAgICBcInBhc3N3b3JkXCJcbiAgICBlbHNlXG4gICAgICBcInN0cmluZ1wiXG5cbiAgIyBMb29rdXAgdGhlIHRlbXBsYXRlIG5hbWUgdmlhIGEgY2FzY2FkaW5nIGxvb2t1cCBvZiB0aGUgdHlwZSB0aHJvdWdoIHRoZVxuICAjIHR5cGUgbWFwcGluZyBzb3VyY2VzXG4gIF9mcmlnR2V0VGVtcGxhdGVOYW1lOiAoe3R5cGUsIGtleSwgdGVtcGxhdGV9LCB0aGVtZSwgaW5wdXRUeXBlTWFwcGluZykgLT5cbiAgICByZXR1cm4gY2FwaXRhbGl6ZSB0ZW1wbGF0ZSBpZiB0ZW1wbGF0ZT9cbiAgICBzb3VyY2VzID0gW1xuICAgICAgaW5wdXRUeXBlTWFwcGluZywgQHR5cGVNYXBwaW5nLCB0aGVtZS50eXBlTWFwcGluZywgZ2xvYmFsVHlwZU1hcHBpbmdcbiAgICBdXG4gICAgZm9yIHR5cGVNYXBwaW5nIGluIHNvdXJjZXNcbiAgICAgIG1hcHBpbmcgPSAodHlwZU1hcHBpbmd8fHt9KVt0eXBlXVxuICAgICAgIyBtYXBwaW5nIGlzIGVpdGhlciBhIHRlbXBsYXRlIG5hbWUgc3RyaW5nIG9yIGFuIG9iamVjdCBvZiB0aGUgZm9ybVxuICAgICAgIyB7dGVtcGxhdGU6IFNUUklORywgaHRtbElucHV0VHlwZTogU1RSSU5HfVxuICAgICAgcmV0dXJuIGNhcGl0YWxpemUgbWFwcGluZy50ZW1wbGF0ZSB8fCBtYXBwaW5nIGlmIG1hcHBpbmc/XG5cbiAgX2ZyaWdMb2FkVGVtcGxhdGU6IChwcm9wcywgdGVtcGxhdGVOYW1lKSAtPlxuICAgIGlmICF0ZW1wbGF0ZU5hbWU/XG4gICAgICB0aHJvdyBcIiN7cHJvcHMua2V5fTogTm8gdHlwZSBtYXBwaW5nIGZvdW5kIGZvciB0eXBlICN7cHJvcHMudHlwZX1cIlxuICAgIGlmICFAcHJvcHMudGhlbWVbdGVtcGxhdGVOYW1lXT9cbiAgICAgIHRocm93IFwiI3twcm9wcy5rZXl9OiBObyAje3RlbXBsYXRlTmFtZX0gdGVtcGxhdGUgZm91bmQgaW4gdGhlbWVcIlxuICAgIHJldHVybiBAcHJvcHMudGhlbWVbdGVtcGxhdGVOYW1lXVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9taXhpbnMvZHNsX21peGluLmNvZmZlZVxuICoqLyIsIlJlYWN0ICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSBcInJlYWN0L2FkZG9uc1wiXG5mcmlnSGVscGVycyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgXCIuLi9oZWxwZXJzLmNvZmZlZVwiXG57aHVtYW5pemUsIGNsb25lLCBtZXJnZSwgbWFwfSA9IGZyaWdIZWxwZXJzXG57c3BhbiwgaX0gICAgICAgICAgICAgICAgICAgICA9IFJlYWN0LkRPTVxucmVxdWlyZSBcIi4uLy4uLy4uL3N0eWxlc2hlZXRzL2ZyaWcvdGhlbWVzL2ZyaWdnaW5nX2Jvb3RzdHJhcC5zdHlsXCJcblxubW9kdWxlLmV4cG9ydHMgPSBmcmlnZ2luZ0Jvb3RzdHJhcCA9XG4gICMgIyBPcHRpb25hbDogYSB0aGVtZS1zcGVjaWZpYyBsaXN0IG9mIGRlZmF1bHRzIHRoYXQgb3ZlcnJpZGUgdGhlIGdsb2JhbFxuICAjICMgRnJpZy5kZWZhdWx0c1xuICBkZWZhdWx0czpcbiAgICBsYXlvdXQ6ICAgICAgICAgIFwidmVydGljYWxcIlxuICAgICMgU2l6ZXNcbiAgICB4czogICAgICAgICAgICAgIFwiMTJcIlxuICAgIHNtOiAgICAgICAgICAgICAgLT4gQGZyaWdQcm9wcy54cyB8fCBcIjEyXCJcbiAgICBtZDogICAgICAgICAgICAgIC0+IEBmcmlnUHJvcHMuc20gfHwgXCIxMlwiXG4gICAgbGc6ICAgICAgICAgICAgICAtPiBAZnJpZ1Byb3BzLm1kIHx8IFwiMTJcIlxuICAgICMgT2Zmc2V0c1xuICAgIHhzT2Zmc2V0OiAgICAgICAgdW5kZWZpbmVkXG4gICAgc21PZmZzZXQ6ICAgICAgICAtPiBAZnJpZ1Byb3BzLnhzT2Zmc2V0XG4gICAgbWRPZmZzZXQ6ICAgICAgICAtPiBAZnJpZ1Byb3BzLnNtT2Zmc2V0XG4gICAgbGdPZmZzZXQ6ICAgICAgICAtPiBAZnJpZ1Byb3BzLm1kT2Zmc2V0XG5cbiAgZXJyb3JMaXN0OiAoZXJyb3JzKSAtPlxuICAgIG1hcCBlcnJvcnMsIGZyaWdnaW5nQm9vdHN0cmFwLmVycm9yIGlmIGVycm9ycz9cblxuICBlcnJvcjogKG1zZykgLT5cbiAgICBzcGFuIGNsYXNzTmFtZTogXCJoZWxwLWJsb2NrXCIsXG4gICAgICBpIGNsYXNzTmFtZTogXCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIiwgXCIgI3ttc2d9XCJcblxuICBzaXplQ2xhc3NOYW1lczogKHByb3BzKSAtPlxuICAgIGNsYXNzZXMgPSB7fVxuICAgIHNpemVzID0gW1wieHNcIiwgXCJzbVwiLCBcIm1kXCIsIFwibGdcIl1cbiAgICAjIEFkZGluZyBjb2x1bW4gY2xhc3Nlc1xuICAgIGZvciBrIGluIHNpemVzXG4gICAgICBjbGFzc2VzW1wiY29sLSN7a30tI3twcm9wc1trXX1cIl0gPSB0cnVlIGlmIHByb3BzW2tdP1xuICAgICMgQWRkaW5nIG9mZnNldCBjbGFzc2VzXG4gICAgZm9yIHNpemUgaW4gc2l6ZXNcbiAgICAgIGsgPSBcIiN7c2l6ZX1PZmZzZXRcIlxuICAgICAgY29udGludWUgdW5sZXNzIHByb3BzW2tdP1xuICAgICAgY2xhc3Nlc1tcImNvbC0je3NpemV9LW9mZnNldC0je3Byb3BzW2tdfVwiXSA9IHRydWVcbiAgICByZXR1cm4gY2xhc3Nlc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwLmNvZmZlZVxuICoqLyIsImZyaWdIZWxwZXJzID0gcmVxdWlyZSBcIi4vaGVscGVycy5jb2ZmZWVcIlxudHlwZU1hcHBpbmcgPSByZXF1aXJlIFwiLi90eXBlX21hcHBpbmcuY29mZmVlXCJcbntodW1hbml6ZSwgY2xvbmUsIG1lcmdlLCBtYXAsIGNhcGl0YWxpemUsIGd1ZXNzVHlwZX0gPSBmcmlnSGVscGVyc1xuXG4jIFdoZW4gaW4gZG91YnQgYWRkIGRlZmF1bHRzIGluIGFscGhhYmV0aWNhbCBvcmRlclxuIyBEZWZhdWx0cyBjYW4gZGVwZW5kIG9uIHByZXZpb3VzIGRlZmF1bHQgdmFsdWVzIGlmIHRoZXkgYXJlXG4jIGRlZmluZWQgYWZ0ZXIgdGhlaXIgZGVwZW5kZW5jaWVzLlxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cyA9XG4gICMgRm9yIEZyaWcgaW50ZXJuYWwgdXNlIG9ubHlcbiAgY2hpbGRyZW46ICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgZmllbGRLZXk6ICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgZm9ybVJlZjogICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgb25GcmlnZ2luZ0NoaWxkSW5pdDogICB1bmRlZmluZWRcbiAgb25GcmlnZ2luZ0NoaWxkQ2hhbmdlOiB1bmRlZmluZWRcbiAgdmFsaWRhdGlvblN0YXRlOiAgICAgICB1bmRlZmluZWRcblxuICAjIFB1YmxpYyBzZXR0aW5nc1xuICBkYXRhOiAgICAgICAgICAgIC0+IHt9XG4gIHR5cGU6ICAgICAgICAgICAgdW5kZWZpbmVkXG4gIGluaXRpYWxWYWx1ZTogICAgdW5kZWZpbmVkXG4gIHRpdGxlOiAgICAgICAgICAgLT4gaHVtYW5pemUgQGZyaWdQcm9wcy5maWVsZEtleVxuICBsYWJlbDogICAgICAgICAgIC0+IEBmcmlnUHJvcHMudGl0bGVcbiAgcGxhY2Vob2xkZXI6ICAgICAtPiBAZnJpZ1Byb3BzLnRpdGxlXG4gIGh0bWxJbnB1dFR5cGU6ICAgLT4gdHlwZU1hcHBpbmdbQGZyaWdQcm9wcy50eXBlXS5odG1sSW5wdXRUeXBlXG4gIG9wdGlvbnM6ICAgICAgICAgdW5kZWZpbmVkXG4gIGxheW91dDogICAgICAgICAgdW5kZWZpbmVkXG4gIGNsYXNzTmFtZTogICAgICAgdW5kZWZpbmVkXG4gIGRpc2FibGVkOiAgICAgICAgdW5kZWZpbmVkXG4gIG11bHRpcGxlOiAgICAgICAgdW5kZWZpbmVkXG4gIHRoZW1lOiAgICAgICAgICAgXCJmcmlnZ2luZ0Jvb3RzdHJhcFwiXG5cbiAgIyBWYWxpZGF0aW9uIGZsYWdzXG4gIHJlcXVpcmVkOiAgICAgICAgLT4gQGZyaWdQcm9wcy50eXBlICE9IFwiYm9vbGVhblwiXG4gIG1pbjogICAgICAgICAgICAgdW5kZWZpbmVkXG4gIG1heDogICAgICAgICAgICAgdW5kZWZpbmVkXG5cbiAgIyBDYWxsYmFja3NcbiAgb25DaGFuZ2U6ICAgICAgICB1bmRlZmluZWRcbiAgb25TdWJtaXQ6ICAgICAgICB1bmRlZmluZWRcblxuICAjIERPTSBhdHRyaWJ1dGVzICsgUmVhY3QgcmVmICsgY2FsbGJhY2tzIGZvciB0aGUgZm9ybSBlbGVtZW50XG4gIGZvcm1IdG1sOlxuICAgIHJlZjogICAgICAgICAgIC0+IEBmcmlnUHJvcHMuZm9ybVJlZiAgICAgIyBGb3IgRnJpZyBpbnRlcm5hbCB1c2Ugb25seVxuICAgIG9uU3VibWl0OiAgICAgIC0+IEBfZnJpZ09uU3VibWl0ICAgICAgICAgIyBGb3IgRnJpZyBpbnRlcm5hbCB1c2Ugb25seVxuICAjIERPTSBhdHRyaWJ1dGVzIGZvciB0aGUgbGFiZWwgZWxlbWVudFxuICBsYWJlbEh0bWw6XG4gICAgaHRtbEZvcjogICAgICAgLT4gQGZyaWdQcm9wcy5maWVsZEtleVxuICAjIERPTSBhdHRyaWJ1dGVzICsgUmVhY3QgcmVmICsgY2FsbGJhY2tzIGZvciB0aGUgaW5wdXQgZWxlbWVudFxuICBpbnB1dEh0bWw6XG4gICAgcmVmOiAgICAgICAgICAgXCJpbnB1dFwiICAgICAgICAgICAgICAgICAgICMgRm9yIEZyaWcgaW50ZXJuYWwgdXNlIG9ubHlcbiAgICBuYW1lOiAgICAgICAgICAtPiBAZnJpZ1Byb3BzLmZpZWxkS2V5XG4gICAgYXV0b0ZvY3VzOiAgICAgLT4gQGZyaWdQcm9wcy5hdXRvRm9jdXNcbiAgICBvbkNoYW5nZTogICAgICAtPiBAX2ZyaWdPbkNoYW5nZSAgICAgICAgICMgRm9yIEZyaWcgaW50ZXJuYWwgdXNlIG9ubHlcbiAgICBvbkJsdXI6ICAgICAgICAtPiBAX2ZyaWdPbkJsdXIgICAgICAgICAgICMgRm9yIEZyaWcgaW50ZXJuYWwgdXNlIG9ubHlcbiAgICBjbGFzc05hbWU6ICAgICAtPiBAZnJpZ1Byb3BzLmNsYXNzTmFtZVxuICAgIGRpc2FibGVkOiAgICAgIC0+IEBmcmlnUHJvcHMuZGlzYWJsZWRcbiAgICBtdWx0aXBsZTogICAgICAtPiBAZnJpZ1Byb3BzLm11bHRpcGxlXG4gICMgVGhlIGNvbXBpbGVkIGxpc3Qgb2YgdmFsaWRhdGlvbnMgdG8gcnVuIChiYXNlZCBvbiB2YWxpZGF0aW9uIGZsYWdzIC9cXClcbiAgdmFsaWRhdGlvbnM6IC0+XG4gICAgcmVxdWlyZWQ6ICAgICAgQGZyaWdQcm9wcy5yZXF1aXJlZFxuICAgIG1pbjogICAgICAgICAgIEBmcmlnUHJvcHMubWluIGlmIEBmcmlnUHJvcHMubWluP1xuICAgIG1heDogICAgICAgICAgIEBmcmlnUHJvcHMubWF4IGlmIEBmcmlnUHJvcHMubWF4P1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvamF2YXNjcmlwdHMvZnJpZy9kZWZhdWx0cy5jb2ZmZWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHRoZW1lcyA9XG4gICMgRnJpZyBkZWZhdWx0IHRoZW1lIChGcmlnZ2luZyBCb290c3RyYXApXG4gIGZyaWdnaW5nQm9vdHN0cmFwOiByZXF1aXJlIFwiLi90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwLmNvZmZlZVwiXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qYXZhc2NyaXB0cy9mcmlnL3RoZW1lcy5jb2ZmZWVcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3R5bGVzaGVldHMvZnJpZy90aGVtZXMvZnJpZ2dpbmdfYm9vdHN0cmFwLnN0eWxcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==