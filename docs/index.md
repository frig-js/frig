
# Frig

React Forms made easy. Developed at [TouchBistro](http://touchbistro.com/) in Toronto.

**Frig** aims to help you build exactly the forms you want by providing you with a small toolkit of powerful React components.

The basic goal of **Frig** is to not touch the layout - leaving the specific positioning of the form elements as a choice for you to completely control as the designer.

Every input and form element in **Frig** is a React Component so you can mix them with your other React Components seamlessly. **Frig** should feel very familiar in any React project.


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

<iframe src="examples/the-basics/index.html" style="
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
