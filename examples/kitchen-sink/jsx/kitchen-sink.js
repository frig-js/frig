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

	var AccountForm = React.createClass({
	  displayName: "AccountForm",

	  mixins: [React.addons.LinkedStateMixin],

	  getInitialState: function getInitialState() {
	    return {
	      account: {
	        email: "me@test.com",
	        password: "test",
	        shareSketchyInfo: false
	      }
	    };
	  },

	  formContent: function formContent(f) {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "div",
	        { className: "row" },
	        React.createElement(
	          "div",
	          { className: "sm-col-12" },
	          React.createElement(
	            "h2",
	            null,
	            "My Account"
	          )
	        )
	      ),
	      React.createElement(f.input, { name: "email" }),
	      React.createElement(f.input, { name: "password" }),
	      React.createElement(f.input, { name: "passwordConfirmation" }),
	      React.createElement(
	        "div",
	        { className: "row" },
	        React.createElement(
	          "div",
	          { className: "sm-col-12" },
	          React.createElement(
	            "h3",
	            null,
	            "Additional Sketchy Info"
	          )
	        )
	      ),
	      React.createElement(f.input, { name: "shareSketchyInfo" }),
	      React.createElement(
	        "div",
	        { className: this.state.account.shareSketchyInfo ? "show" : "hide" },
	        React.createElement(f.input, { name: "socialSecurityNumber" }),
	        React.createElement(f.input, { name: "fullName" })
	      ),
	      React.createElement(f.submit, { title: "Save" })
	    );
	  },

	  render: function render() {
	    return React.createElement(Frig, {
	      data: this.linkState("account"),
	      form: this.formContent
	    });
	  }
	});

	document.addEventListener("DOMContentLoaded", function () {
	  var domElement = document.getElementById('example');
	  React.render(React.createElement(AccountForm, null), domElement);
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