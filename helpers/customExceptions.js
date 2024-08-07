
/**
  * Handle Errors & Exceptions
  *
  */

class CustomException extends Error {
  constructor(name, cause, code = null){
    super()
    this.name = name;    
    this.cause = cause;
    this.code = code;    
  }
}

export class DatabaseException extends CustomException{
  constructor(cause, code){
    super("Database Error", cause, code)
  }
}

export class NotFoundException extends DatabaseException{
  constructor(cause, code){
    super(cause, code)
  }
}

export class UpdateFailedException extends DatabaseException{
  constructor(cause, code){
    super(cause, code)
  }
}

export class TokenVerificationException extends CustomException{
  constructor(cause, code){
    super("Access not authorized",cause, code)
  }
}

export class UnauthorizedException extends CustomException{
  constructor(cause, code){
    super("Access not authorized",cause, code)
  }
}