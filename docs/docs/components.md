# Components

Whether you choose the Coffeescript DSL or JSX **Frig** provides you with the following components to help create your forms.

## Form
*Available as `Frig.form` in JSX and `Frig.dsl` in the Coffeescript DSL*

### Props

* **data (required)** - either a ReactLink or an object. This is used to populate the values of each field in the form. The data property is also used by inputs for type inference where a `type` property is not provided. If a ReactLink is provided the ReactLink will be updated with the user's inputs. In the Coffeescript DSL version the form is the last argument.
* **form (required)** - a function. The form callback is expected to generate the content of the form as either a single React component or array of components. The form callback receives an object `f` containing the Frig components needed to build a form (In the Coffeescript DSL these components are replaced with equivalent functions).
* **errors (optional)** - an array of strings. The list of errors supplied here can be rendered by the `f.errors` component.
* **onSubmit (optional)** - a function. Called after the submit button is clicked and all validations have passed. The DOM event is passed to the callback.

### Public Functions

These functions can be called on the frig form object (eg. using React refs).

* **validate()** - validates the form's inputs and renders all errors.
* **isValid()** - returns true if all of the form's inputs are in a valid state. Does not visibly render errors.
* **isModified()** - returns true if any of the form's inputs have been modified by the user (in other words `props.data` changes do not count).


## f.input

#### Props
* **name (required)** - The key of the input's value in the form's `props.data`
```
// TODO:
component:       React.PropTypes.func.isRequired,
errors:          React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
type:            React.PropTypes.string,
options:         React.PropTypes.array,
className:       React.PropTypes.string,
disabled:        React.PropTypes.bool,
multiple:        React.PropTypes.bool,
validate:        React.PropTypes.bool.isRequired,
inputHtml
// Callbacks (Public API)
onChange:        React.PropTypes.func.isRequired,
onValidChange:   React.PropTypes.func.isRequired,
```

## f.nestedFields

A Nested field takes a name (some key in the form's data) and produces one or more recursive (ie. nested) forms. Nested fields accomidate both "has one" (nested objects) and "has many" (nested arrays of objects) relationships in form data.

Calling validate/isValid/isModified on a parent form object will call it on all of it's nested fields and incorporate their values recursively.

#### Props
* **name (required)** - The key of the nested fields' data object (or array of data objects) in the form's `props.data`
* **form (required)** - a function. The form callback is expected to generate the content of the nested fields as either a single React component or array of components. The form callback receives an object `f` containing the Frig components needed to build a form (In the Coffeescript DSL these components are replaced with equivalent functions). A second integer `index` argument is added to nested field form callbacks since nested fields can be used on arrays of data.

#### Coffeescript DSL
* In the Coffeescript DSL version of `f.nestedFields` the function accepts two arguments. The first argument is the name and second is the form callback.

#### Examples
* JSX: `<f.nestedFields name="address" form=this.addressForm/>`
* Coffeescript `f.nestedFields "address", this.addressForm`

## f.submit

#### Props
* **title (optional)** - a string. The text of the submit button. This is the first argument of the coffeescript DSL version.

#### Examples
* JSX: `<f.submit title="Log In"/>`
* Coffeescript `f.submit("Log In")`


## f.errors

The errors component renders all the form-level errors in the form's `props.errors`.

#### Examples
* JSX: `<f.errors/>`
* Coffeescript `f.errors()`
