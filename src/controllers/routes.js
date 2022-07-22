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

router.get(process.env.LOGIN_PATH, async (req,res) => {
  const { email, pass } = req.params
  const salt = 10
  
  m = await genHash(pass,salt)
  res.json({email,hash:m})
})

async function genHash(pass,salt) {
  const a = await new Promise((resolve, reject) => {
    bcrypt.hash(pass, salt, (err, hash) => {
      if (err) reject (err)
      resolve(hash)
    })
  })
  return a
}

module.exports = router