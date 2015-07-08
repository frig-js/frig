# WORK IN PROGRESS.

# Frig

By [TouchBistro](http://touchbistro.com/).

Coffeescript React forms made easy.

**Frig** aims to help you build exactly the forms you want by providing you with a small toolkit of powerful React components.

The basic goal of **Frig** is to not touch the layout - leaving the specific positioning of the form elements as a choice for you to completely control as the designer.

Every input and form element in **Frig** is a React Component so you can mix them with your other React Components seemlessly. **Frig** should feel very familiar in any React project.


## Installation Options (Choose One)

* Install with `npm install frig`
* Install with `bower install frig`
* Download [frig.css](https://raw.githubusercontent.com/TouchBistro/frig/master/dist/frig.css) and [frig.js](https://raw.githubusercontent.com/TouchBistro/frig/master/dist/frig.js) directly.


## Ok, show me the code

Absolutely. Here's an example using [React's two way data binding](https://facebook.github.io/react/docs/two-way-binding-helpers.html):

```coffeescript
require "./node_modules/bootstrap/dist/css/bootstrap.css"
React         = require "react/addons"
Frig          = require "frig.coffee"
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
```

## Getting Started

### Frig.Form

### Input and Submit

## License

Frig is licensed under the [MIT license](https://raw.githubusercontent.com/TouchBistro/frig/master/LICENSE).