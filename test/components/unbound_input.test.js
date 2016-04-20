/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import UnboundInput from '../../src/components/unbound_input'
import { mount } from 'enzyme'
import td from 'testdouble'

const Stub = () => <div />
const defaultContext = {
  frigForm: {
    theme: {
      Input: Stub,
      NoComponent: Stub,
      type_mapping: {
        bogus: { component: 'NoComponent' },
        multiselect: { component: 'NoComponent' },
        select: { component: 'NoComponent' },
        boolean: { component: 'NoComponent' },
        number: { component: 'NoComponent' },
        float: { component: 'NoComponent' },
        password: { component: 'NoComponent' },
        string: { component: 'NoComponent' },
        submit: { component: 'NoComponent' },
        bad_component: { component: 'BadComponent' },
      },
    },
    layout: 'some_layout',
    align: 'some_align',
  },
}

const defaultChildContextTypes = {
  frigForm: React.PropTypes.object.isRequired,
}

const defaultProps = {
  name: 'some_unbound_input',
  type: 'string',
}

describe('<UnboundInput />', () => {
  describe('public methods except validate', () => {
    let wrapper
    let instance

    beforeEach(() => {
      const opts = { context: defaultContext, childContextTypes: defaultChildContextTypes }
      wrapper = mount(<UnboundInput {...defaultProps} />, opts)
      instance = wrapper.instance()
    })

    describe('render()', () => {
      it('render() returns the themed component', () => {
        const themedComponent = wrapper.find(Stub)
        expect(themedComponent).to.have.length(1)

        const themedProps = themedComponent.props()

        expect(themedProps.layout).to.equal('some_layout')
        expect(themedProps.align).to.equal('some_align')
        expect(themedProps.inputHtml).to.exist()
        expect(themedProps.valueLink).to.exist()
      })
    })

    it('isValid() returns true when errors is empty', () => {
      expect(instance.isValid()).to.be.true()
    })

    it('isModified() returns state.modified', () => {
      expect(instance.isModified()).to.be.false()
      instance.setState({ modified: true })
      expect(instance.isModified()).to.be.true()
    })

    it('resetModified() sets state.modified to false', () => {
      wrapper.setState({ modified: true })
      instance.resetModified()
      expect(instance.isModified()).to.be.false()
    })

    it('reset() sets modified/validationRequested to false', () => {
      instance.reset()
      expect(wrapper.state('modified')).to.be.false()
      expect(wrapper.state('validationRequested')).to.be.false()
    })
  })

  describe('exceptions during render()', () => {
    it('throws if no type mapping found', () => {
      const opts = { context: defaultContext, childContextTypes: defaultChildContextTypes }
      const jsx = <UnboundInput name="some_input" type="never_used_type" />
      const wrapperBound = mount.bind(this, jsx, opts)

      expect(wrapperBound).to.throw(Error, /No type mapping found/)
      expect(wrapperBound).to.throw(Error, /some_input/)
      expect(wrapperBound).to.throw(Error, /never_used_type/)
    })

    it('throws if no component found in theme', () => {
      const opts = { context: defaultContext, childContextTypes: defaultChildContextTypes }
      const jsx = <UnboundInput name="some_input" type="bad_component" />
      const wrapperBound = mount.bind(this, jsx, opts)

      expect(wrapperBound).to.throw(Error, /some_input: No BadComponent component/)
    })
  })

  describe('validate()', () => {
    const opts = { context: defaultContext, childContextTypes: defaultChildContextTypes }

    it('sets validationRequested', () => {
      const wrapper = mount(<UnboundInput {...defaultProps} />, opts)
      const instance = wrapper.instance()
      instance.validate()
      expect(wrapper.state('validationRequested')).to.be.true()
    })

    it('returns true when there is an error on the field', () => {
      const props = Object.assign({}, defaultProps, {
        errors: ['some error'],
      })

      const wrapper = mount(<UnboundInput {...props} />, opts)
      const instance = wrapper.instance()
      expect(instance.validate()).to.be.false()
    })
  })

  describe('private functions', () => {
    const opts = { context: defaultContext, childContextTypes: defaultChildContextTypes }

    it('_value', () => {
      const value = 'something more'
      const props = Object.assign({}, defaultProps, { value })
      const wrapper = mount(<UnboundInput {...props} />, opts)
      const instance = wrapper.instance()
      expect(instance._value()).to.equal(value)
    })

    describe('_normalizeOption', () => {
      const testNormalizeOption = (option, expected) => {
        const wrapper = mount(<UnboundInput {...defaultProps} />, opts)
        const instance = wrapper.instance()
        const result = instance._normalizeOption(option)
        expect(result).to.deep.equal(expected)
      }

      it('return undefined when option is null', () => {
        testNormalizeOption(null, undefined)
      })

      it('object in form {label,value} gets passed through', () => {
        testNormalizeOption(
          { value: 'l', label: 'v' },
          { value: 'l', label: 'v' },
        )
      })

      it('one element array gets converted to {value,label} (value=label)', () => {
        testNormalizeOption(
          ['xxx'],
          { value: 'xxx', label: 'xxx' }
        )
      })

      it('two element array gets converted to {value,label}', () => {
        testNormalizeOption(
          ['x', 'y'],
          { value: 'x', label: 'y' }
        )
      })

      it('string gets converted to {value,label} (value=label)', () => {
        testNormalizeOption(
          'string',
          { value: 'string', label: 'string' }
        )
      })
    })

    describe('detected errors', () => {
      describe('_errors', () => {
        it('return undefined when props.errors is empty', () => {
          const wrapper = mount(<UnboundInput {...defaultProps} />, opts)
          const instance = wrapper.instance()
          expect(instance._errors('some')).to.be.undefined()
        })
      })
      it('_validations')
    })

    describe('events', () => {
      describe('_onChange', () => {
        const onChange = td.function()
        const onValidChange = td.function()

        beforeEach(() => { td.reset() })

        const getWrapper = (overrideProps = {}) => {
          const finalProps = {
            ...defaultProps,
            ...overrideProps,
            onChange,
            onValidChange,
          }
          return mount(<UnboundInput {...finalProps} />, opts)
        }

        it('sets state.modified by default', () => {
          const wrapper = getWrapper()
          const instance = wrapper.instance()

          instance._onChange('some_value', {})

          const modified = wrapper.state('modified')
          expect(modified).to.be.true()
        })

        it('does not set state.modified when opts.setModified=false', () => {
          const wrapper = getWrapper()
          const instance = wrapper.instance()

          instance._onChange('some_value', { setModified: false })

          const modified = wrapper.state('modified')
          expect(modified).to.be.false()
        })

        it('always calls props.onChange', () => {
          const wrapper = getWrapper()
          const instance = wrapper.instance()

          instance._onChange('some_value')

          td.verify(onChange('some_value', true))
        })

        it('calls props.onValidChange when there are no errors', () => {
          const wrapper = getWrapper({ value: 'some_value' })
          const instance = wrapper.instance()

          instance._onChange('some_value')

          td.verify(onValidChange('some_value', true))
        })

        it('does not call props.onValidChange when there are errors', () => {
          const wrapper = getWrapper({ value: 66, max: 5 })
          const instance = wrapper.instance()

          instance._onChange('some_value')

          td.verify(onValidChange(), { times: 0 })
        })


        it('does not call props.on[Valid]Change if type=submit', () => {
          const wrapper = getWrapper({ type: 'submit' })
          const instance = wrapper.instance()

          instance._onChange('some_value')

          td.verify(onValidChange(), { times: 0 })
          td.verify(onChange(), { times: 0 })
        })
      })
      describe('_onBlur', () => {
        it('calls props.inputHtml.onBlur()', () => {
          const onBlur = td.function()
          const inputHtml = { onBlur }
          const props = { ...defaultProps, inputHtml }
          const wrapper = mount(<UnboundInput {...props} />, opts)

          const instance = wrapper.instance()
          instance._onBlur()

          td.verify(onBlur())
        })

        it('doesnt call props.inputHtml.onBlur() if props.inputHtml is undefined', () => {
          const props = { ...defaultProps }
          const wrapper = mount(<UnboundInput {...props} />, opts)
          const instance = wrapper.instance()
          instance._onBlur()
          // no assertion here: the test passes if it doesn't throw an exception
        })
      })
    })

    describe('detected type', () => {
      describe('_guessInputType', () => {
        const testGuessInputType = (props, expected) => {
          // We don't want the type to always be `string`, let tests decide.
          delete defaultProps.type
          const nextProps = Object.assign({}, defaultProps, props)
          const wrapper = mount(<UnboundInput {...nextProps} />, opts)
          const result = wrapper.instance()._guessInputType()
          expect(result).to.equal(expected)
        }

        it('passes through unrecognized types', () => {
          testGuessInputType({ type: 'bogus' }, 'bogus')
        })
        it('when props.multiple, detects as multiselect', () => {
          testGuessInputType({ multiple: true }, 'multiselect')
        })
        it('when value is an array, detects multiselect', () => {
          testGuessInputType({ value: [1, 2, 3] }, 'multiselect')
        })
        it('detects select', () => {
          testGuessInputType({ options: [1, 2, 3] }, 'select')
        })
        it('detects boolean', () => {
          testGuessInputType({ value: true }, 'boolean')
        })
        it('detects float', () => {
          testGuessInputType({ value: 6 }, 'float')
        })
        it('detects password', () => {
          testGuessInputType({ name: 'Password' }, 'password')
          testGuessInputType({ name: 'the_password_confirm' }, 'password')
        })
        it('when no type specified or detected, assume string', () => {
          testGuessInputType({ bogus: 'bogus' }, 'string')
        })
      })
      it('_typeMapping')
    })
  })
})
