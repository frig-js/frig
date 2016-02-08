## Checkbox

```jsx
<Input name="example" component="checkbox"/>
```

## Color

```jsx
<Input name="example" component="color"/>
```

## File

```jsx
<Input name="example" component="file"/>
```

## Input

```jsx
<Input name="example" component="input"/>
```

## Number

```jsx
<Input name="example" component="number"
  {/* Optional: Uses [numeral.js][http://numeraljs.com] format. Defaults to: "0,0[.][00]" */}
  format={"0,0.00"}
  {/* Optional: The minimum number allowed */}
  min={3}
  {/* Optional: The maxinum number allowed */}
  max={5}
/>
```

## Select

```jsx
<Input name="example" component="select"
  options={[["CA", "Canada"], ["notCA", "Not Canada"]]}
/>
```

**Note:** Select components require a set of options. See Core Components for details.

## Switch

```jsx
<Input name="example" component="switch"
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
<Input name="example" component="text"/>
```

## Timepicker

```jsx
<Input name="example" component="timepicker"/>
```
