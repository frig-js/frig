export default (opts) => (hoc) => {
  // delegate all the public functions of the child component to the child
  for (const k of opts.publicFunctions || []) {
    hoc.prototype[k] = function () { // eslint-disable-line no-param-reassign, func-names
      return this.refs.child[k](...arguments) // eslint-disable-line prefer-rest-params
    }
  }
}
