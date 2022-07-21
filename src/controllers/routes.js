require("dotenv").config()

module.exports=function () {
  this.root=(app) => {
    app.get("/", (req,res) => {
      res.send("Hola Mauricio")
    })
  }
}