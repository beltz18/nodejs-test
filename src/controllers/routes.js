require("dotenv").config()

const jwt = require('jsonwebtoken')
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
  token = await genToken(email)
  res.json({email,hash:m,token})
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

async function genToken(email) {
  const b = await new Promise((resolve,reject) => {
    jwt.sign({ email }, process.env.SECRET_PHRASE, function(err, token) {
      if(err) reject (err)
      resolve(token)
    })
  })
  return b
}

module.exports = router