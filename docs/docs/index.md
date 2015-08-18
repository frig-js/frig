
# Frig

React Forms made easy / Developed at [TouchBistro](http://touchbistro.com/) in Toronto.

**Frig** aims to help you build exactly the forms you want by providing you with a small toolkit of powerful React components.

The basic goal of **Frig** is to not touch the layout - leaving the specific positioning of the form elements as a choice for you to completely control as the designer.

Every input and form element in **Frig** is a React Component so you can mix them with your other React Components seemlessly. **Frig** should feel very familiar in any React project.

As a basic example:

```jsx
var SignIn = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {}
  },

  form: function(f) {
    return <div className="row">
      <h3 className="col-xs-12">Sign In</h3>
      <f.input name="email"/>
      <f.input name="password"/>
      <f.input name="rememberMe" type="switch"/>
      <f.submit title="Sign In"/>
    </div>
  },

  render: function() {
    return <Frig
      data={this.linkState("account")}
      form={this.form}
    />
  }
})

React.renderComponent(<SignIn/>, document.getElementById('the-basics'))
```

Generates this sweet Bootstrap form:

<div id="the-basics"></div>

## Two-Way Data Binding

**Frig** is built around [ReactLink's][react-link] powerful two-way databinding making accessing your form data as simple as `this.state` and updating a form element's value as easy as `this.setState`.

For example if we modify the render function of the previous example to be:

```jsx
  // ...
  render: function() {
    return <div>
      <Frig
        data={@linkState("account")}
        form={this.form}
      />
      <h3>State:</h3>
      <pre>{JSON.stringify(this.state.account)}</pre>
    </div>
  }
  // ...
```

We can see that the state of our component is updated in realtime with the input:

<div id="two-way-data-binding"></div>

[react-link]: https://facebook.github.io/react/docs/two-way-binding-helpers.html

## License

Frig is licensed under the [MIT license](https://raw.githubusercontent.com/TouchBistro/frig/master/LICENSE).

