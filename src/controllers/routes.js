require("dotenv").config()

const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const { Router } = require('express')
const router = Router()

router.get(process.env.ROOT_PATH, (req,res) => {
  res.send("Hola Mauricio")
})

router.get(process.env.USER_PATH, (req,res) => {
  res.send("Here we can add a new user")
})

router.get(process.env.LOGIN_PATH,(req,res) => {
const { email, pass } = req.params
const saltRounds = 10

bcrypt.hash(pass, saltRounds, function(err, hash) {
  res.json({email,hash})
})




// res.send("Aquí se renderizara el Login")
})

module.exports = router