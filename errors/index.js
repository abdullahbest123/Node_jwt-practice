const BadRequest = require('./badrequest')
const unauthicated = require('./unauthicated')
const customError = require('./custom-error')

module.exports = {
    BadRequest,
    unauthicated,
    customError
}