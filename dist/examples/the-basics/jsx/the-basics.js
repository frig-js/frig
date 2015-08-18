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

	  getInitialState: function getInitialState() {
	    return {};
	  },

	  form: function form(f) {
	    return React.createElement(
	      "div",
	      { className: "row" },
	      React.createElement(f.input, { name: "email" }),
	      React.createElement(f.input, { name: "password" }),
	      React.createElement(f.input, { name: "rememberMe", type: "switch" }),
	      React.createElement(f.submit, { title: "Sign In" })
	    );
	  },

	  render: function render() {
	    return React.createElement(Frig, {
	      data: this.linkState("account"),
	      form: this.form
	    });
	  }
	});

	window.addEventListener('load', function () {
	  var el = document.getElementById('the-basics-example');
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