import { CustomError } from "./custom-error"

export class DatabaseConnectionError extends CustomError {
  statusCode = 500
  reason = 'Error connecting to database'

  constructor() {
    super('Error connecting to database')

    // Only because we extending a built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }

  serializeErrors() {
    return [{message: this.reason}]
  }
}