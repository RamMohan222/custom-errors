// function base approch
function CustomError(message, extra) {
  // this.name = this.constructor.name
  this.name = this.constructor.name;
  this.message = message;
  Error.captureStackTrace(this, this.constructor);
  this.extra = extra;
}


// class base approch
class CustomError extends Error {
  constructor(message, extra) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.name = 'CustomError';
    this.message = message;
    if (extra) this.extra = extra;
  }
}

