import React from 'react'

const FieldsetText = (props, context) => {
  const spanProps = Object.assign({}, props)
  delete spanProps.text
  return (
    <span {...spanProps}>
      {props.text(context.frigFieldset.index)}
    </span>
  )
}
FieldsetText.propTypes = {
  text: React.PropTypes.func.isRequired,
}
FieldsetText.contextTypes = {
  frigFieldset: React.PropTypes.object,
}
FieldsetText.displayName = 'Frig.FieldsetText'

export default FieldsetText
