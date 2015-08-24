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

	var Frig, MinimalLogin, React, div, frig, h2, ref;

	Frig = __webpack_require__(1);

	Frig.defaultTheme(__webpack_require__(2));

	Frig.typeMapping.boolean = {
	  component: "switch"
	};

	React = __webpack_require__(3);

	frig = __webpack_require__(1).dsl.frig;

	ref = React.DOM, div = ref.div, h2 = ref.h2;

	MinimalLogin = React.createClass({
	  mixins: [React.addons.LinkedStateMixin],
	  form: function(f) {
	    return div({
	      className: "row"
	    }, h2({
	      className: "col-xs-12"
	    }, "Please sign in"), f.errors(), f.input("account", {
	      autoFocus: true,
	      inputHtml: {
	        autoComplete: "off"
	      }
	    }), f.input("password", {
	      type: "password",
	      inputHtml: {
	        autoComplete: "off"
	      }
	    }), f.input("remember_me", {
	      type: "boolean"
	    }), f.submit("Sign in", {
	      bsStyle: "primary",
	      bsSize: "lg",
	      block: true
	    }));
	  },
	  render: function() {
	    var containerClasses;
	    containerClasses = "col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-xs-12";
	    return div({
	      className: "row"
	    }, div({
	      className: containerClasses
	    }, frig({
	      data: {},
	      layout: "horizontal",
	      align: "right"
	    }, this.form)));
	  }
	});

	window.addEventListener("load", function() {
	  var el;
	  el = document.getElementById("horizontal-login");
	  return React.render(React.createElement(MinimalLogin), el);
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