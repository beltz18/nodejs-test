require("dotenv").config()

const { Router } = require('express');
const router = Router()

router.get(process.env.ROOT_PATH, (req,res) => {
  res.send("Hola Mauricio")
})

router.get(process.env.USER_PATH, (req,res) => {
  res.send("Here we can add a new user")
})

module.exports = router