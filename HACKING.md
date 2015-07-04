## Compiling
1. Install webpack
2. Run `webpack -w --progress -p` to automatically compile the project whenever
a file is changed.

## Docs (WIP)

frigProps
- explain what it is, how it works, and how to use it and extend it

FriggingPropsMixin
  - Takes all these defaults and creates a cascading heirachy of sane defaults,
    but also the ability to override them as well

Input Mixin
- function: normalizeFriggingOption()
  - a function that be used to normal the options being sent to an input
  Accepts data
    - array, either with [value, label] or [value] or value
    - both label and value are either a string or a number
  Returns
    - an object of the format {key: "CA", label: "Canada"}

- function: validate()
  - sets validations for form fields

Frig Mixin
- Used in components
- once frig mixin is supply in component you then have access to @frig function
  where options can be passed
- creates a form component through the theme

FormMixin
- Responsible for the creation of all the fields within the actual component
- function: FriggingChildren()
    - allows form to get all the fields via @props.cb
- function: getData()
    - returns an object with the keys and values of your form object
    - everytime we do an Ajax request this is where the data comes from

dslMixin
- used and called once per form
- function: @frigDSL()
  when adding f.input - you are calling _frigInput()
  when adding f.errors - you are calling _frigErros()
  when adding f.submit - you are calling _frigSubmit()


