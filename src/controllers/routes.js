require("dotenv").config()

const { Router } = require('express');
const router = Router()

router.get(process.env.ROOT_PATH, (req,res) => {
  res.send("Hola Mauricio")
})

module.exports = router