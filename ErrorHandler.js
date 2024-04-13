class ErrorHandler {
  constructor(message, statusCode) {
    this.message = message;
    this.code = statusCode;
  }

  static notFound(message = "Not Found any Notes 😥") {
    return new ErrorHandler(message, 404);
  }

  static internalServerError(message = "Internal Server Error 😪") {
    return new ErrorHandler(message, 405);
  }

  static noPayloadFound(message = "Payload Missing") {
    return new ErrorHandler(message, 404);
  }
}

module.exports = ErrorHandler;
