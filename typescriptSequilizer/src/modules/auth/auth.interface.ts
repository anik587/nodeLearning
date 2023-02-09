/**
 * LoginResponse object interface
 */
export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  statusCode: number;
}

/**
 * LoginRequest object interface
 */
export interface LoginRequest {
  name: string;
  password: string;
}
