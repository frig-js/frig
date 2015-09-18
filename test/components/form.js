"use strict"
require("../setup.js")
let React = require("react/addons")
let assert = require("assert")
let MochComponent = require("../moch_component.js")
let Form = React.createFactory(require(
  "../../src/javascripts/components/form.js"
))
let {renderIntoDocument, mockComponent} = React.addons.TestUtils

describe("Form", function(){
  beforeEach(function () {
    this.form = renderIntoDocument(Form({
      data: {},
      theme: {component: () => MochComponent},
      form: () => [],
    }))
  })

  describe("#isModified", function() {
    it("should be false initially", function() {
      assert.equal(this.form.isModified(), false)
    })

    it("should be false if all inputs isModified returns false", function() {
      this.form.childComponentWillMount("test", {isModified: () => false})
      assert.equal(this.form.isModified(), false)
    })

    it("should be true if any input isModified returns true", function() {
      this.form.childComponentWillMount("test", {isModified: () => true})
      assert.equal(this.form.isModified(), true)
    })
  })

  describe("#resetModified", function() {
    it("should call resetModified on each child component", function() {
      let hasReset = false
      this.form.childComponentWillMount("test", {
        isModified: () => true,
        resetModified: () => hasReset = true,
      })
      this.form.resetModified()
      assert.equal(hasReset, true)
    })
  })

})