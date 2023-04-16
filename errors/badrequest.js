const CustomAPIError = require('./custom-error');
const httpstatusCode = require('http-status-codes');
class BadRequest extends CustomAPIError {
    constructor (message) {
        super(message)
        this.statusCode = httpstatusCode.StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequest
