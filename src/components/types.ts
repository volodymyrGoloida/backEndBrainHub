export interface TypedRequestBody<T> extends Express.Request {
  body: T;
}

export interface TypedResponseBody<T> extends Express.Response {
  body: T;
}

export type ErrorMessage<T> = {
  key: T;
  errorMessage: string;
};

export type ErrorMessages<T> = Array<ErrorMessage<T>>;
