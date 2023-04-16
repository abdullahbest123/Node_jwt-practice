'use strict'
require('dotenv')
const { BadRequest,
  unauthicated,
  customError } = require('../errors/index');
const jwt = require('jsonwebtoken')
const login = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    throw new BadRequest('Username and password not provided')
  }
  const id = new Date().getDate()
  const token = jwt.sign({ id, username }, process.env.jwtsecret, {
    expiresIn: '30d'
  })
res2
    .status(200)
    .json({ msg: 'user created with name ' + username, token })
}

const dashboard = async (req, res) => {
  const luckynumber = Math.floor(Math.random() * 100)

  const { username } = req.user
  res.status(200).json({
    success: true,
    msg: `Hello ${username}!`,
    secret: `here is authorized data your lucky number is ${luckynumber}`
  })
}

module.exports = {
  login,
  dashboard
}
