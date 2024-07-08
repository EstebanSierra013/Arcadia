
class CustomException extends Error {
  constructor(name, cause, code){
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