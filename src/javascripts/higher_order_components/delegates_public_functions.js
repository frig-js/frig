module.exports = function(opts) {
  return function(hoc) {
    // delegate all the public functions of the child component to the child
    for (let k of opts.publicFunctions||[]) {
      hoc.prototype[k] = function () {
        return this.refs.child[k](...arguments)
      }
    }
  }
}
