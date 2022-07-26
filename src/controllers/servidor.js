// express se debe ejecutar una sola vez
const express = require('express')
const app     = express()

module.exports = function () {
  this.app = () => {
    this.middlewares()
    return app
  },
  this.middlewares = () => {
    app.use(require("./routes"))
  }
}