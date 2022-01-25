import { IApplicationError } from './ApplicationError';

export class UnauthorizedError extends Error implements IApplicationError {
  readonly code = 401
  readonly message = 'You must be authorized to perform this action'
}
