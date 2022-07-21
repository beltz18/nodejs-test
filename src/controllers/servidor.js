require("dotenv").config()
const port = process.env.PORT

module.exports = function () {
  this.app=() => {
    const express = require("express")
    const app     = express()
    return app
  },
  this.middlewares=() => {
    console.log("sjkadjkas")
  },
  this.server=() => {
    this.app().listen(port, () => {
      console.log(`server running on port ${port}`)
    })
  }
}