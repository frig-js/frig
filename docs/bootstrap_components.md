Each type of FriggingBootstrap input component has properties that are specific to that type of input.

In addition to the properties listed under each component on this page and on the previous page every bootstrap input component can receive the following bootstrap-specific settings (the values here are the defaults):

```
<f.input name="example"
  {/* Bootstrap Grid Sizes */}
  xs=12
  sm=undefined
  md=undefined
  lg=undefined
  {/* Bootstrap Grid Offsets */}
  xsOffset=undefined
  smOffset=undefined
  mdOffset=undefined
  lgOffset=undefined
  {/* Block changes inputs with layout: "horizontal" to use the full width of
    * their container and disables the label. */}
  block=false
  {/* Label width for horizontal labels */}
  labelWidth={{xs: 12, sm: 2}}
/>
```

## Checkbox

```jsx
<f.input name="example" component="checkbox"/>
```

## Color

```jsx
<f.input name="example" component="color"/>
```


## File

```jsx
<f.input name="example" component="file"/>
```

## Input

```jsx
<f.input name="example" component="input"/>
```

## Select

```jsx
<f.input name="example" component="select"
  options={[["CA", "Canada"], ["notCA", "Not Canada"]]}
/>
```

**Note:** Select components require a set of options. See Core Components for details.

## Switch

```jsx
<f.input name="example" component="switch"
  onColor="primary" {/* primary, success, info, warning, danger or default */}
  onText="ON"
  offColor="default" {/* primary, success, info, warning, danger or default */}
  offText="OFF"
  bsSize=undefined {/* mini, small, undefined (normal sized) or large */}
  disabled=false
  {/* Sets the width of the switch handles, useful for displaying longer onTexts
    * and offTexts */}
  handleWidth=undefined
/>
```

## Text

```jsx
<f.input name="example" component="text"/>
```

## Timepicker

```jsx
<f.input name="example" component="timepicker"/>
```


## Typeahead

```jsx
<f.input name="example" component="typeahead"
  options={[["CA", "Canada"], ["notCA", "Not Canada"]]}
  {/* The minimum number of characters to display typeahead suggestions */}
  minLength={3}
  {/* The maxinum number of typeahead suggestions to display */}
  maxSuggestions={5}
  {/* Set displaySelections to false if you want to do a custom rendering of
    * the users choices. */}
  displaySelections={true}
/>
```

**Note:** Typeahead components require a set of options to pull suggestions from. See Core Components for details.
