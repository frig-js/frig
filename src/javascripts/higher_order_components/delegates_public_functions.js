module.exports = function(componentClass) {
  return function(hoc) {
    // delegate all the public functions of the child component to the child
    let blackList = [
      "constructor",
      "state",
      "props",
      "componentWillMount",
      "componentDidMount",
      "componentWillReceiveProps",
      "componentWillUpdate",
      "render",
    ]
    let propertyNames = Object.getOwnPropertyNames(componentClass.prototype)
    for (let k of propertyNames) {
      if (blackList.indexOf(k) != -1 || hoc[k] != null) continue
      if (!k.startsWith("_")) {
        hoc.prototype[k] = function () {return this.refs.child[k](...arguments)}
      }
    }
  }
}
