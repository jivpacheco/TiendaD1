class ErrorHandler extends Error{
    constructor(mensaje, statusCode) {
        super(mensaje);
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = ErrorHandler