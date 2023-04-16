'use strict'
const authmiddleware = (req, res, next) => {
  const { BadRequest,
    unauthicated,
    customError } = require('../errors/index');
  require('dotenv')

  const jwt = require('jsonwebtoken')

  const auth = req.headers.authorization

  const token = auth.split(' ')[1]
  if (!auth || !auth.startsWith('Bearer ')) {
    throw new unauthicated('Authorization header is not provided')
  }
  try {
    const decoded = jwt.verify(token, process.env.jwtsecret)

    const { username } = decoded
    req.user = { username }
    next()
  } catch (error) {
    throw new unauthicated('no authorize to this route')
  }
}

module.exports = authmiddleware
