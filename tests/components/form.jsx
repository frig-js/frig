let React = require("react/addons")
let assert = require("assert")
let Form = require("../../src/javascripts/components/form.js")
let {renderIntoDocument} = React.addons.TestUtils

describe("form component", function(){
  describe("isModified", function() {
    it("should be false initially", function() {
      let form = renderIntoDocument(<Form data={{}}/>)
      assert.equal(form.isModified(), false)
    })

    it("should be false initially", function() {
      let fields(f) {
        return {f.input "test"}
      }
      let form = renderIntoDocument(<Form data={{}} form={fields}/>)
      assert.equal(form.isModified(), false)
    })
  })

  it("<input> should not be checked", function() {
    assert(this.inputElement.checked === false)
  })
})