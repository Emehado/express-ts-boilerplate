class GeneralError extends Error {
  message: string;

  constructor(message: string) {
    super();
    this.message = message;
  }

  getCode() {
    if (this instanceof BadRequest) {
      return 400;
    }
    if (this instanceof Unauthorized) {
      return 401;
    }
    if (this instanceof Forbidden) {
      return 403;
    }
    if (this instanceof NotFound) {
      return 404;
    }
    return 500;
  }
}

class BadRequest extends GeneralError {}

class Unauthorized extends GeneralError {}

class Forbidden extends GeneralError {}

class NotFound extends GeneralError {}

export { BadRequest, Unauthorized, Forbidden, NotFound };
export default GeneralError;
