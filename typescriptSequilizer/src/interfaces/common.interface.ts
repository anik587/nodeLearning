import { Request, Response } from 'express';

export interface JSONResponse {
  request: Request;
  response: Response;
  code?: number;
  data?: any | null;
}

export interface SchemaValidationResult {
  valid: boolean;
  errorCount: number;
  GetErrorMessages: Function;
  errors: Array<string>;
}

export interface Token {
  id?: string;
  token: string;
  expiresIn?: number;
}

export interface ValidationResult {
  status: number;
  message?: string;
  conflicts?: object;
  conflictingUUID?: string;
  conflictCode?: number;
}
