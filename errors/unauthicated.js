const CustomAPIError = require('./custom-error'); const httpstatusCode = require('http-status-codes');
const { StatusCodes } = require('http-status-codes');

class unAuthicated extends CustomAPIError {
    constructor (message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = unAuthicated
