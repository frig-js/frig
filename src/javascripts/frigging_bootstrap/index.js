require("../../stylesheets/frigging_bootstrap/index.styl")

module.exports = {

  component(name) {
    return require(`./components/${name}.js`)
  },

}
