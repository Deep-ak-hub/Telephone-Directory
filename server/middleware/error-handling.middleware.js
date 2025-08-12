const ErrorHandler = (error, req, res, next) => {

    let code = error.code || 500
    let detail = error.detail || error.details || null
    let message = error.message || "Server Error"
    let status = error.status || "APP ERROR"

    res.status(code).json({
        error: detail,
        message: message,
        status: status
    })
}

module.exports = ErrorHandler
