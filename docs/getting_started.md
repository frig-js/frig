## Installation

You have many options here. Choose one:

* Install with `npm install --save frig frigging-bootstrap`
* Install with `bower install --save frig frigging-bootstrap`
* Download [frig.js][frig.js] and [frigging-bootstrap.js][frigging-bootstrap.js]

[frig.js]: https://google.com
[frigging-bootstrap.js]: https://google.com
[frigging-bootstrap.css]: https://google.com

## Setting the theme

Frig requires a theme to be set.

To set the theme to **FriggingBootstrap** add this line to the top of your javascript:

```jsx
Frig.defaultTheme(FriggingBootstrap)
```

## Coffeescript DSL or JSX

Frig comes in two flavours, a coffeescript DSL and JSX components.

Both are equally capable. If your new to React we recommend using the JSX components.

These two examples are equivalent:

### DSL

```coffeescript
React.createClass
  render: ->
    Frig.dsl formProps, (f) ->
      f.input "username", inputProps
```

### JSX

```jsx
React.createClass({
  form: function (f) {
    <f.input name="username" {...inputProps}/>
  }
  render: function() {
    <Frig.Form form={this.form} {...formProps}/>
  }
})
```


