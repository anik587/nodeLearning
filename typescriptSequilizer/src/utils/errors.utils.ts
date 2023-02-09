import { Request, Response, NextFunction } from 'express';

export abstract class HTTPClientError extends Error {
  abstract readonly statusCode: number;
  constructor() {
    super();
  }
}

export class DatabaseConnectionError extends HTTPClientError {
  readonly statusCode = 500;
  message = 'Error connecting to database';

  constructor() {
    super();
  }
}

export class NotFoundError extends HTTPClientError {
  readonly statusCode = 404;

  errors: string[];

  constructor(err: string[]) {
    super();
    this.errors = err;
  }
}

export class NotAuthorizedError extends HTTPClientError {
  readonly statusCode = 401;

  errors: string[];

  constructor(err: string[]) {
    super();
    this.errors = err;
  }
}

export class BadRequestError extends HTTPClientError {
  readonly statusCode = 400;

  errors: string[];

  constructor(err: string[]) {
    super();
    this.errors = err;
  }
}

export class RequestValidationError extends HTTPClientError {
  readonly statusCode = 400;

  errors: string[];

  constructor(err: string[]) {
    super();
    this.errors = err;
  }
}

export class InternalServerError extends HTTPClientError {
  readonly statusCode = 502;
  readonly message = 'Internal Server error occurred';

  errors: string[];

  constructor(err: string[]) {
    super();
    this.errors = err;
  }
}

export class TokenMissing extends HTTPClientError {
  readonly statusCode = 401;
  readonly message = 'Authentication token missing';

  constructor() {
    super();
  }
}

export class WrongToken extends HTTPClientError {
  readonly statusCode = 401;
  readonly message = 'Wrong authentication token';

  constructor() {
    super();
  }
}

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HTTPClientError) {
    return res.status(err.statusCode).send({ errors: [err.message] });
  }

  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
