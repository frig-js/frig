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

	var AccountForm, React, div, frig, h2, h3, h4, img, li, ref, ul;

	__webpack_require__(1).defaultTheme(__webpack_require__(2));

	React = __webpack_require__(3);

	frig = __webpack_require__(1).dsl.frig;

	ref = React.DOM, div = ref.div, h2 = ref.h2, h3 = ref.h3, h4 = ref.h4, img = ref.img, ul = ref.ul, li = ref.li;

	AccountForm = React.createClass({
	  mixins: [React.addons.LinkedStateMixin],
	  getInitialState: function() {
	    return {
	      account: {
	        email: "me@test.com",
	        password: "test",
	        shareSketchyInfo: false,
	        addresses: [
	          {
	            address: "55 Actual Place Rd."
	          }, {}
	        ],
	        stuff_or_things: ["stuff-value"],
	        single_select_typeahead: "stuff-value"
	      }
	    };
	  },
	  onSubmit: function(e) {
	    return e.preventDefault();
	  },
	  formOpts: function() {
	    return {
	      data: this.linkState("account"),
	      errors: ["Test Error", "Moo"],
	      onSubmit: this.onSubmit
	    };
	  },
	  render: function() {
	    return frig(this.formOpts(), (function(_this) {
	      return function(f) {
	        return div({}, div({
	          className: "row"
	        }, div({
	          className: "col-xs-12"
	        }, h2({}, "My Account"))), div({
	          className: "row"
	        }, f.errors()), div({
	          className: "row"
	        }, f.input("InputWithoutALabel", {
	          xs: 12,
	          label: false,
	          saved: true,
	          placeholder: "Input Without a Label"
	        }), f.input("email", {
	          xs: 10,
	          saved: true
	        }), f.input("select_example", {
	          options: [
	            {
	              label: "Stuff",
	              value: "stuff-value"
	            }, ["thing-value", "Things"], "why not both?"
	          ]
	        })), div({
	          className: "row"
	        }, div({
	          className: "col-xs-12"
	        }, h2({}, "Typeaheads")), f.input("stuff_or_things", {
	          type: "typeahead",
	          multiple: true,
	          options: [
	            {
	              label: "Stuff",
	              value: "stuff-value"
	            }, ["thing-value", "Things"], "why not both?"
	          ]
	        }), f.input("single_select_typeahead", {
	          type: "typeahead",
	          options: [
	            {
	              label: "Stuff",
	              value: "stuff-value"
	            }, ["thing-value", "Things"], "why not both?"
	          ]
	        }), f.input("customSelectionRendering", {
	          type: "typeahead",
	          multiple: true,
	          displaySelections: false,
	          options: [
	            {
	              label: "Stuff",
	              value: "stuff-value"
	            }, ["thing-value", "Things"], "why not both?"
	          ]
	        }), div({
	          className: "col-xs-12"
	        }, h4({}, "Custom Selections"), ul({}, (_this.state.account.customSelectionRendering || []).map(function(selection) {
	          return li({
	            key: "o-" + selection
	          }, "I choose " + selection);
	        })), _this.state.account.customSelectionRendering == null ? div({}, "No Selection") : void 0)), div({
	          className: "row"
	        }, div({
	          className: "col-xs-12"
	        }, h2({}, "Passwords")), f.input("password", {
	          xs: 6
	        }), f.input("passwordConfirmation", {
	          xs: 6
	        })), div({
	          className: "row"
	        }, f.input("description", {
	          className: "testing-class-name",
	          type: "text",
	          rows: 5,
	          xs: 12,
	          saved: true
	        }), f.input("description-two", {
	          className: "testing-class-name",
	          type: "text",
	          rows: 5,
	          label: false,
	          placeholder: "Description without a label",
	          saved: true,
	          xs: 12
	        })), div({
	          className: "row"
	        }, f.input("time_of_day", {
	          type: "switch",
	          xs: "6",
	          label: "Time of Day",
	          saved: true,
	          handleWidth: 100,
	          onText: "Enabled",
	          offText: "Disabled",
	          errors: ["This error is an example", "As is this one"]
	        }), f.input("time_of_night", {
	          type: "switch",
	          xs: "6",
	          label: false,
	          saved: true
	        }), f.input("red_or_blue", {
	          type: "switch",
	          onText: "Red",
	          offText: "Blue",
	          onValue: "red",
	          offValue: "blue"
	        })), div({
	          className: "row"
	        }, f.input("uploadAvatar", {
	          type: "file",
	          xs: "6",
	          label: "Uploading Avatar",
	          saved: true
	        }), f.input("uploadVirus", {
	          type: "file",
	          xs: "6",
	          label: false,
	          saved: true
	        })), div({
	          className: "row"
	        }, f.input("startTime", {
	          type: "time",
	          xs: "12",
	          placeholder: "12:00pm",
	          label: "Start Time",
	          saved: true
	        }), f.input("endTime", {
	          type: "time",
	          xs: "12",
	          placeholder: "End Time",
	          label: false,
	          saved: true
	        })), div({
	          className: "row"
	        }, f.input("colorOne", {
	          type: "color",
	          xs: "12",
	          label: "Color One",
	          saved: true
	        }), f.input("colorTwo", {
	          type: "color",
	          xs: "12",
	          label: false,
	          saved: true
	        })), div({
	          className: "row"
	        }, div({
	          className: "col-xs-12"
	        }, h3({}, "Nested Fields (Eg. Has Many)")), f.nestedFields("addresses", function(f, index) {
	          return div({}, div({
	            className: "col-xs-12"
	          }, h4({}, "Address #" + (index + 1))), f.input("address"), f.input("city"), f.input("postal_code"));
	        })), div({
	          className: "row"
	        }, div({
	          className: "col-xs-12"
	        }, h3({}, "Additional Sketchy Info"))), div({
	          className: "row"
	        }, f.input("shareSketchyInfo", {
	          saved: true
	        }), _this.state.account.shareSketchyInfo ? [
	          f.input("socialSecurityNumber"), f.input("fullName"), f.input("eyeColor", {
	            options: ["blue", "green", "red", "left"]
	          })
	        ] : void 0, f.submit("Save")));
	      };
	    })(this));
	  }
	});

	document.addEventListener("DOMContentLoaded", function() {
	  var el;
	  el = document.getElementById("kitchen-sink");
	  return React.render(React.createElement(AccountForm), el);
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