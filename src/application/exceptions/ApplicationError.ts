export interface IApplicationError extends Error{
  code: number;
}

export const isApplicationError = (error: Error|IApplicationError): error is IApplicationError => {
  return typeof (error as IApplicationError).code !== 'undefined'
}
