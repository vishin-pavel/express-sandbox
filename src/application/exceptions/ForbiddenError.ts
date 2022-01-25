import { IApplicationError } from './ApplicationError';

export class ForbiddenError extends Error implements IApplicationError {
  readonly code = 401
  readonly message = 'You don\'t have permission to perform this action'
}
