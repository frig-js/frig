import React from 'react'

const Submit = (props, context) => {
  const ThemedSubmit = context.frigForm.theme.Submit
  return <ThemedSubmit {...props} />
}

Submit.contextTypes = {
  frigForm: React.PropTypes.shape({
    theme: React.PropTypes.object.isRequired,
  }).isRequired,
}
Submit.displayName = 'Frig.Submit'

export default Submit
