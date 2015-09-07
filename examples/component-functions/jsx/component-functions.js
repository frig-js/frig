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

	"use strict";

	__webpack_require__(1).defaultTheme(__webpack_require__(2));

	var React = __webpack_require__(3);
	var Frig = __webpack_require__(1).Form;

	var SignIn = React.createClass({
	  displayName: "SignIn",

	  mixins: [React.addons.LinkedStateMixin],

	  componentWillMount: function componentWillMount() {
	    this._interval = setInterval(this._updateCounter, 1000);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    clearInterval(this._interval);
	  },

	  getInitialState: function getInitialState() {
	    return { account: { counter: 0, formUpdates: 0 } };
	  },

	  // Non-form updates
	  _updateCounter: function _updateCounter() {
	    this.state.account.counter += 1;
	    this.setState({ account: this.state.account });
	  },

	  componentWillUpdate: function componentWillUpdate() {
	    var form = this.refs.form;
	    if (form != null && form.isModified() && form.isValid()) {
	      form.resetModified();
	      this.state.account.formUpdates += 1;
	      this.setState({ account: this.state.account });
	    }
	  },

	  _onResetClick: function _onResetClick() {
	    this.refs.form.reset();
	  },

	  _onValidateClick: function _onValidateClick() {
	    this.refs.form.validate();
	  },

	  form: function form(f) {
	    return React.createElement(
	      "div",
	      { className: "row" },
	      React.createElement(
	        "h1",
	        { className: "col-xs-12" },
	        "Component Functions"
	      ),
	      React.createElement(f.input, { name: "counter" }),
	      React.createElement(f.input, { name: "formUpdates" }),
	      React.createElement(f.input, { name: "email" }),
	      React.createElement(f.input, { name: "password" }),
	      React.createElement(f.input, { name: "rememberMe", type: "switch" }),
	      React.createElement(
	        "div",
	        { className: "col-xs-12" },
	        React.createElement(
	          "div",
	          { className: "btn btn-danger", onClick: this._onResetClick },
	          "form.reset()"
	        ),
	        " ",
	        React.createElement(
	          "div",
	          { className: "btn btn-success", onClick: this._onValidateClick },
	          "form.validate()"
	        )
	      )
	    );
	  },

	  render: function render() {
	    return React.createElement(Frig, {
	      data: this.linkState("account"),
	      form: this.form,
	      ref: "form"
	    });
	  }
	});

	window.addEventListener('load', function () {
	  var el = document.getElementById('component-functions');
	  React.render(React.createElement(SignIn, null), el);
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

/***/ }
/******/ ]);