import React from "react"
import Form from "./components/form.js"
import Input from "./components/input.js"
import Submit from "./components/submit.js"
import FormErrorList from "./components/form_error_list.js"

export const form = React.createFactory(Form)
export const input = React.createFactory(Input)
export const submit = React.createFactory(Submit)
export const formErrorList = React.createFactory(FormErrorList)
