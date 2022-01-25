export type MethodsNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

export type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends (...args: any[]) => any ? never : K }[keyof T] &
  string;

