const DelegatesPublicFunctions = opts => hoc => {
  // delegate all the public functions of the child component to the child
  for (const k of opts.publicFunctions || []) {
    const fn = () => this.refs.child[k](...arguments)
    hoc.prototype[k] = fn  // eslint-disable-line no-param-reassign
  }
}

export default DelegatesPublicFunctions
