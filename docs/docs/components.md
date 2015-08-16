# Components

Whether you choose the Coffeescript DSL or JSX **Frig** provides you with the
same underlying set of components to build your forms with.

## Frig
*`frig` in the Coffeescript DSL*

### Props

* **data (required)** - either a ReactLink or an object. This is used to populate the values of each field in the form. The data property is also used by inputs for type inference where a `type` property is not provided. If a ReactLink is provided the ReactLink will be updated with the user's inputs.
* **form (required)** - a function.
* **errors (optional)** - an array of strings.
* **onSubmit (optional)** - a function.

### Public Functions


## Input
*`f.input` in the Coffeescript DSL*

## NestedFields
*`f.nestedfields` in the Coffeescript DSL*

## Submit
*`f.submit` in the Coffeescript DSL*

## Errors
*`f.errors` in the Coffeescript DSL*

