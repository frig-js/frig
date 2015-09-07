## Installation

You have many options here. Choose one:

* Install with `npm install --save frig frigging-bootstrap`
* Install with `bower install --save frig frigging-bootstrap`
* Download [frig.js][frig.js], [frigging-bootstrap.js][frigging-bootstrap.js] and [frigging-bootstrap.css][frigging-bootstrap.css]

[frig.js]: frig.js
[frigging-bootstrap.js]: frigging-bootstrap.js
[frigging-bootstrap.css]: frigging-bootstrap.css

## Setting the theme

Frig requires a theme to be set. The only theme currently available is **FriggingBootstrap** so you'll need to add this line to the top of your javascript:

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


