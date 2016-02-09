
# Frig

React Forms made easy. Developed at [TouchBistro](http://touchbistro.com/) in Toronto.

**Frig** is:

* **Simple** - Most form fields are 1 liners. Automatic type inference from your data keeps your form code short.
* **Data-bindings** - Connecting any form to any data store is just 2 lines of code. 100% Redux Ready!
* **Layout agnostic** - Frig leaves the positioning and layout of form elements completely in your control.
* **Powerful** - Validations, nested fieldsets, image previews, time pickers and color pickers are all included out of the box!
* **100% React** - Unlike [tcomb-forms](https://github.com/gcanti/tcomb-form) **Frig** is built 100% in React so it should feel very familiar in any React project.


## Installation

* **npm:** `npm install --save frig frigging-bootstrap`
* **bower:** `bower install --save frig frigging-bootstrap`

**Note:** For non ES6 browser compatibility you will also need to install the [Babel PolyFill](https://babeljs.io/docs/usage/polyfill/).


## Hello Frigging World

```jsx
// One time theme selection
// (put this in an initialization file and call it once)
import Frig from "frig"
import FriggingBootstrap from "frigging-bootstrap"
Frig.defaultTheme(FriggingBootstrap)

// ...

// Libraries needed for each component
import React from "react"
import ReactDOM from "react-dom"
import {Form, Input, Submit} from "frig"

class TheBasicsExample extends React.Component {
  displayName = "TheBasicsExample"
  state = {account: {}}

  render() {
    return (
      <Form
        data={this.state.account}
        onChange={(account) => this.setState({account})}
      >
        <div className="row">
          <Input name="email"/>
          <Input name="password"/>
          <Input name="rememberMe" type="switch"/>
          <Submit title="Sign In"/>
        </div>
      </Form>
    )
  }
}
```

<iframe src="/frigging-examples/dist/the-basics/" style="
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
  padding-right: 1px;
"
></iframe>


## React Controlled Components

**Frig** is built around React's Controlled Components - a powerful two-way data-binding pattern. For details on how you can make use of this pattern with Frig see: https://facebook.github.io/react/docs/forms.html#controlled-components

## License

Frig is licensed under the [MIT license](https://raw.githubusercontent.com/TouchBistro/frig/master/LICENSE).
