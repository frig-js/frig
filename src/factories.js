import React from 'react'
import Form from './components/form.js'
import Input from './components/input.js'
import UnboundInput from './components/unbound_input.js'
import Submit from './components/submit.js'
import FormErrorList from './components/form_error_list.js'
import Fieldset from './components/fieldset.js'
import FieldsetText from './components/fieldset_text.js'

export const form = React.createFactory(Form)
export const input = React.createFactory(Input)
export const unboundInput = React.createFactory(UnboundInput)
export const submit = React.createFactory(Submit)
export const formErrorList = React.createFactory(FormErrorList)
export const fieldset = React.createFactory(Fieldset)
export const fieldsetText = React.createFactory(FieldsetText)
