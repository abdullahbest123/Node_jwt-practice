const { customError } = require('../errors')
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send({ error: err.message, msg: 'Something went wrong try again later ' })
}

module.exports = errorHandlerMiddleware
