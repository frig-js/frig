# WORK IN PROGRESS.

# PLEASE DO NOT OPEN UNTIL JULY 6TH, 2015 AT 7PM

# Frig

By [TouchBistro](http://touchbistro.com/).

React forms made easy.

**Frig** aims to help you build exactly the forms you want by providing you with a small toolkit of powerful React components.

The basic goal of **Frig** is to not touch the layout - leaving the specific positioning of the form elements as a choice for you to completely control as the designer.

Every input and form element in **Frig** is a React Component so you can mix them with your other React Components seemlessly. **Frig** should feel very familiar in any React project.

## Installation Options (Choose One)

* Install with `npm install frig`
* Install with `bower install frig`
* Download [frig.css](https://raw.githubusercontent.com/TouchBistro/frig/master/dist/frig.css) and [frig.js](https://raw.githubusercontent.com/TouchBistro/frig/master/dist/frig.js) directly.

## But what does Frig look like in JSX?

I'm glad you asked. Here's an example using [React's two way data binding](https://facebook.github.io/react/docs/two-way-binding-helpers.html):

```jsx
Frig = require("frig")

var content = function (f) {
  <div>
    <h2>My Account</h2>

    <f.input name="email"/>
    <f.input name="password"/>
    <f.input name="passwordConfirmation"/>

    <h3>Additional Sketchy Info</h3>
    <f.input name="shareSketchyInfo" type="boolean"/>

    <div className={state.shareSketchyInfo ? "show" : "hide"}>
      <f.input name="socialSecurityNumber"/>
      <f.input name="fullName"/>
    </div>

    <f.submit/>
  </div>
}

var data = {
  email: "me@test.com",
  password: "test",
  shareSketchyInfo: true
}

React.renderComponent(
  <Frig.Form content={content} data={data}/>
  document.getElementById('example')
)
```


## And what about as a Coffeescript DSL?

Good question! **Frig** is also a totally sweet Coffeescript DSL!

```coffeescript
require "./node_modules/bootstrap/dist/css/bootstrap.css"
React = require "react/addons"
window.Frig = require "frig.coffee"
{div, h2, h3} = React.DOM

accountForm = React.createClass
  mixins: [
    Frig.Mixin
    React.addons.LinkedStateMixin
  ]

  getInitialState: ->
    account:
      email: "me@test.com"
      password: "test"
      shareSketchyInfo: false

  render: ->
    @frig data: @linkState("account"), (f) =>
      div className: "container",
        div className: "row",
          div className: "sm-col-12",
            h2 {}, "My Account"

        div className: "row",
          f.input "email"

        div className: "row",
          f.input "password", xs: 6
          f.input "passwordConfirmation", xs: 6

        div className: "row",
          div className: "sm-col-12",
            h3 {}, "Additional Sketchy Info"

        div className: "row",
          f.input "shareSketchyInfo"
          if @state.account.shareSketchyInfo
            f.input "socialSecurityNumber"
            f.input "fullName"

          f.submit "Save"

document.addEventListener "DOMContentLoaded", ->
  reactElement = React.createElement accountForm
  domElement = document.getElementById('example')
  React.render reactElement, domElement
```

Notice how we don't have to specify name in the coffeescript version and how we pass the form callback directly to `Frig.Form`?

That's because we designed **Frig** from the begining with Coffeescript-focused syntactic shortcuts to make it a clean, concise Coffeescript DSL.

## Getting Started

### Frig.Form

### Input and Submit

## License

Frig is licensed under the [MIT license](https://raw.githubusercontent.com/TouchBistro/frig/master/LICENSE).